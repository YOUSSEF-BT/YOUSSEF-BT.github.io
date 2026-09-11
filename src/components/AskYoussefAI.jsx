import { useEffect } from "react";

const DEFAULT_WIDGET_SRC =
  "https://cdn.jsdelivr.net/gh/YOUSSEF-BT/ASK-YOUSSEF-AI@main/web/widget.js";
const DEFAULT_API_URL = "https://ask-youssef-ai.vercel.app";
const SAFE_FALLBACK_API_URL =
  "https://ask-youssef-9e1ihhfsh-youssefbts-projects.vercel.app";

/**
 * Production bridge for Ask Youssef AI.
 *
 * Prefer the canonical Vercel production alias when it exposes the deployment
 * identity endpoint added by the current backend. During a blocked/stale Vercel
 * promotion, fall back to the last verified healthy immutable deployment so the
 * portfolio chatbot stays available instead of mounting a known-broken backend.
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

    const healthy = async (apiUrl, timeoutMs = 12000) => {
      const body = await fetchJson(
        `${normalized(apiUrl)}/health`,
        timeoutMs
      );
      return Boolean(body?.ok);
    };

    const currentProductionReady = async () => {
      // Keep this probe deliberately short. A stale Vercel revision may cold-start
      // slowly or even time out; that must never block the known-good fallback.
      const body = await fetchJson(`${DEFAULT_API_URL}/deployment`, 3500);
      return Boolean(body?.commit && body?.environment === "production");
    };

    const chooseApi = async () => {
      if (configuredApi) {
        return (await healthy(configuredApi)) ? normalized(configuredApi) : null;
      }

      // Probe current production identity and fallback health independently so a
      // slow/stale production function cannot cancel the fallback request.
      const [productionReady, fallbackHealthy] = await Promise.all([
        currentProductionReady(),
        healthy(SAFE_FALLBACK_API_URL),
      ]);

      if (productionReady && (await healthy(DEFAULT_API_URL, 8000))) {
        return DEFAULT_API_URL;
      }

      if (fallbackHealthy) {
        console.warn(
          "[portfolio] Ask Youssef AI is using the verified fallback deployment while production promotion is pending."
        );
        return SAFE_FALLBACK_API_URL;
      }

      return null;
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
