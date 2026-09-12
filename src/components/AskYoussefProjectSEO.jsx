import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PROJECT_PATH = "/projects/ask-youssef-ai-portfolio-intelligence";

const DEFAULT_SEO = {
  lang: "fr",
  title: "Youssef Bouzit | AI/ML & Data Science Engineer",
  description:
    "Portfolio of Youssef Bouzit, Data Science and AI/ML Engineer specializing in RAG systems, LLM applications, Computer Vision, Machine Learning, MLOps, and Data Engineering.",
  canonical: "https://youssef-bt.github.io/",
  image:
    "https://youssef-bt.github.io/assets/images/profile/youssef_bouzit_profile.png?v=20260904-3",
  imageAlt: "Youssef Bouzit — AI/ML & Data Science Engineer",
};

const PROJECT_SEO = {
  lang: "en",
  title: "Ask Youssef AI | Evidence-Grounded RAG Portfolio Copilot",
  description:
    "Production AI portfolio copilot by Youssef Bouzit built with Hybrid RAG, FastAPI, Gemini, BM25, FastEmbed, RRF, grounding and multilingual retrieval.",
  canonical:
    "https://youssef-bt.github.io/projects/ask-youssef-ai-portfolio-intelligence",
  image:
    "https://youssef-bt.github.io/assets/images/projects/ask-youssef-ai/main.png",
  imageAlt:
    "Ask Youssef AI — evidence-grounded portfolio copilot integrated into Youssef Bouzit's portfolio",
};

const upsertMeta = (attribute, key, content) => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const setCanonical = (href) => {
  let canonical = document.head.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", href);
};

export function AskYoussefProjectSEO() {
  const location = useLocation();

  useEffect(() => {
    const normalizedPath = location.pathname.replace(/\/$/, "") || "/";
    const seo = normalizedPath === PROJECT_PATH ? PROJECT_SEO : DEFAULT_SEO;

    document.documentElement.lang = seo.lang;
    document.title = seo.title;
    setCanonical(seo.canonical);

    upsertMeta("name", "description", seo.description);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:title", seo.title);
    upsertMeta("property", "og:description", seo.description);
    upsertMeta("property", "og:url", seo.canonical);
    upsertMeta("property", "og:image", seo.image);
    upsertMeta("property", "og:image:alt", seo.imageAlt);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", seo.title);
    upsertMeta("name", "twitter:description", seo.description);
    upsertMeta("name", "twitter:image", seo.image);
    upsertMeta("name", "twitter:image:alt", seo.imageAlt);
  }, [location.pathname]);

  return null;
}
