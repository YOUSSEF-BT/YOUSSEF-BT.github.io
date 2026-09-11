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

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 8000);
    let script = null;
    let cancelled = false;

    const normalized = (value) => value.replace(/\/$/, "");

    const healthy = async (apiUrl) => {
      try {
        const response = await fetch(`${normalized(apiUrl)}/health`, {
          method: "GET",
          cache: "no-store",
          signal: controller.signal,
        });
        if (!response.ok) return false;
        const body = await response.json().catch(() => null);
        return Boolean(body?.ok);
      } catch {
        return false;
      }
    };

    const currentProductionReady = async () => {
      try {
        const response = await fetch(`${DEFAULT_API_URL}/deployment`, {
          method: "GET",
          cache: "no-store",
          signal: controller.signal,
        });
        if (!response.ok) return false;
        const body = await response.json().catch(() => null);
        return Boolean(body?.commit && body?.environment === "production");
      } catch {
        return false;
      }
    };

    const chooseApi = async () => {
      if (configuredApi) {
        return (await healthy(configuredApi)) ? normalized(configuredApi) : null;
      }

      // The current backend exposes /deployment. Older Vercel revisions do not.
      // This prevents the UI from selecting a stale revision whose /health may
      // still be green while /chat is broken.
      if ((await currentProductionReady()) && (await healthy(DEFAULT_API_URL))) {
        return DEFAULT_API_URL;
      }

      if (await healthy(SAFE_FALLBACK_API_URL)) {
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
        window.clearTimeout(timeoutId);
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
      window.clearTimeout(timeoutId);
    };

    mountWhenHealthy();

    return () => {
      cancelled = true;
      controller.abort();
      window.clearTimeout(timeoutId);
      script?.remove();
      document.getElementById("ask-youssef-ai-root")?.remove();
    };
  }, []);

  return null;
}
