import { useEffect } from "react";

const DEFAULT_WIDGET_SRC =
  "https://cdn.jsdelivr.net/gh/YOUSSEF-BT/ASK-YOUSSEF-AI@main/web/widget.js";
const DEFAULT_API_URL = "https://ask-youssef-ai.vercel.app";

/**
 * Production bridge for Ask Youssef AI.
 *
 * The verified Vercel API is the default backend. A Vite environment variable
 * can still override it for preview/staging builds without exposing any API
 * secret to the browser.
 *
 * Before mounting the widget, verify that the backend is healthy. This keeps a
 * transient backend deployment problem from surfacing as a broken chat UI on
 * the portfolio. The widget becomes available automatically on the next page
 * load as soon as the backend health endpoint recovers.
 */
export function AskYoussefAI() {
  useEffect(() => {
    const apiUrl = (
      import.meta.env.VITE_ASK_YOUSSEF_API_URL || DEFAULT_API_URL
    ).trim();

    if (!apiUrl || document.getElementById("ask-youssef-ai-loader")) {
      return undefined;
    }

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 5000);
    let script = null;
    let cancelled = false;

    const mountWhenHealthy = async () => {
      try {
        const response = await fetch(`${apiUrl.replace(/\/$/, "")}/health`, {
          method: "GET",
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok || cancelled) {
          console.warn("[portfolio] Ask Youssef AI backend is temporarily unavailable.");
          return;
        }

        const health = await response.json().catch(() => null);
        if (!health?.ok || cancelled) {
          console.warn("[portfolio] Ask Youssef AI backend health check did not pass.");
          return;
        }

        script = document.createElement("script");
        script.id = "ask-youssef-ai-loader";
        script.src = DEFAULT_WIDGET_SRC;
        script.dataset.api = apiUrl.replace(/\/$/, "");
        script.dataset.title = "Ask Youssef AI";
        script.dataset.subtitle = "Professional Portfolio Copilot";
        script.dataset.accent = "#20b2a6";
        script.async = true;

        script.addEventListener("error", () => {
          console.error("[portfolio] Ask Youssef AI widget failed to load.");
        });

        document.body.appendChild(script);
      } catch (error) {
        if (error?.name !== "AbortError") {
          console.warn("[portfolio] Ask Youssef AI health check failed.");
        }
      } finally {
        window.clearTimeout(timeoutId);
      }
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
