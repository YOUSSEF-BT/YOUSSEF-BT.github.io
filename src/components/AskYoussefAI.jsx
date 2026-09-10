import { useEffect } from "react";

const DEFAULT_WIDGET_SRC =
  "https://cdn.jsdelivr.net/gh/YOUSSEF-BT/ASK-YOUSSEF-AI@main/web/widget.js";

/**
 * Production bridge for Ask Youssef AI.
 *
 * The widget stays completely dormant until the portfolio build receives a
 * verified backend URL through VITE_ASK_YOUSSEF_API_URL. This lets us ship the
 * integration code safely before the external Render service is provisioned,
 * without exposing a broken launcher to visitors.
 */
export function AskYoussefAI() {
  useEffect(() => {
    const apiUrl = (import.meta.env.VITE_ASK_YOUSSEF_API_URL || "").trim();

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
      // tidy without ever exposing the API key (only the public backend URL).
      script.remove();
      document.getElementById("ask-youssef-ai-root")?.remove();
    };
  }, []);

  return null;
}
