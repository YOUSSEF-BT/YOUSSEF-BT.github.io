import { useEffect } from "react";

const DEFAULT_WIDGET_SRC =
  "https://cdn.jsdelivr.net/gh/YOUSSEF-BT/ASK-YOUSSEF-AI@main/web/widget.js";
const DEFAULT_API_URL = "https://ask-youssef-ai.vercel.app";

/**
 * Production bridge for Ask Youssef AI.
 *
 * The portfolio uses only the canonical public Vercel production alias. Preview
 * deployment URLs may be protected by Vercel Authentication and therefore are
 * not valid browser fallbacks for public visitors.
 *
 * A Vite environment variable can still override the backend explicitly for
 * preview/staging builds without exposing any API secret to the browser.
 */
export function AskYoussefAI() {
  useEffect(() => {
    const configuredApi = import.meta.env.VITE_ASK_YOUSSEF_API_URL?.trim();

    if (document.getElementById("ask-youssef-ai-loader")) {
      return undefined;
    }

    let script = null;
    let cancelled = false;
    const activeControllers = new Set();

    const normalized = (value) => value.replace(/\/$/, "");

    const fetchJson = async (url, timeoutMs) => {
      const controller = new AbortController();
      activeControllers.add(controller);
      const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);
      try {
        const response = await fetch(url, {
          method: "GET",
          cache: "no-store",
          signal: controller.signal,
        });
        if (!response.ok) return null;
        return await response.json().catch(() => null);
      } catch {
        return null;
      } finally {
        window.clearTimeout(timeoutId);
        activeControllers.delete(controller);
      }
    };

    const healthy = async (apiUrl, timeoutMs = 15000) => {
      const body = await fetchJson(
        `${normalized(apiUrl)}/health`,
        timeoutMs
      );
      return Boolean(body?.ok);
    };

    const chooseApi = async () => {
      const apiUrl = normalized(configuredApi || DEFAULT_API_URL);
      return (await healthy(apiUrl)) ? apiUrl : null;
    };

    const mountWhenHealthy = async () => {
      const apiUrl = await chooseApi();
      if (!apiUrl || cancelled) {
        console.warn("[portfolio] Ask Youssef AI backend is temporarily unavailable.");
        return;
      }

      script = document.createElement("script");
      script.id = "ask-youssef-ai-loader";
      script.src = DEFAULT_WIDGET_SRC;
      script.dataset.api = apiUrl;
      script.dataset.title = "Ask Youssef AI";
      script.dataset.subtitle = "Professional Portfolio Copilot";
      script.dataset.accent = "#20b2a6";
      script.async = true;

      script.addEventListener("error", () => {
        console.error("[portfolio] Ask Youssef AI widget failed to load.");
      });

      document.body.appendChild(script);
    };

    mountWhenHealthy();

    return () => {
      cancelled = true;
      for (const controller of activeControllers) {
        controller.abort();
      }
      activeControllers.clear();
      script?.remove();
      document.getElementById("ask-youssef-ai-root")?.remove();
    };
  }, []);

  return null;
}
