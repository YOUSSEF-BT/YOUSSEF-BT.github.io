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
 */
export function AskYoussefAI() {
  useEffect(() => {
    const apiUrl = (
      import.meta.env.VITE_ASK_YOUSSEF_API_URL || DEFAULT_API_URL
    ).trim();

    if (!apiUrl || document.getElementById("ask-youssef-ai-loader")) {
      return undefined;
    }

    const script = document.createElement("script");
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

    return () => {
      // App normally lives for the full page lifetime. Cleanup keeps HMR/tests
      // tidy without ever exposing GEMINI_API_KEY (only the public API URL).
      script.remove();
      document.getElementById("ask-youssef-ai-root")?.remove();
    };
  }, []);

  return null;
}
