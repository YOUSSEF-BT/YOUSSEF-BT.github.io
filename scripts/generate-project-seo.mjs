import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const route = "projects/ask-youssef-ai-portfolio-intelligence";
const canonical =
  "https://youssef-bt.github.io/projects/ask-youssef-ai-portfolio-intelligence";
const title = "Ask Youssef AI | Evidence-Grounded RAG Portfolio Copilot";
const description =
  "Production AI portfolio copilot by Youssef Bouzit built with Hybrid RAG, FastAPI, Gemini, BM25, FastEmbed, RRF, grounding and multilingual retrieval.";
const keywords =
  "Ask Youssef AI, Youssef Bouzit, Hybrid RAG, RAG portfolio copilot, FastAPI, Gemini, BM25, FastEmbed, Reciprocal Rank Fusion, Grounded AI, Multilingual AI";
const image =
  "https://youssef-bt.github.io/assets/images/projects/ask-youssef-ai/main.png";
const imageAlt =
  "Ask Youssef AI — evidence-grounded portfolio copilot integrated into Youssef Bouzit's portfolio";

const escapeAttribute = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const replaceMeta = (html, attribute, key, content) => {
  const pattern = new RegExp(
    `<meta\\s+${attribute}="${key}"[^>]*>`,
    "i"
  );
  const replacement = `<meta ${attribute}="${key}" content="${escapeAttribute(content)}" />`;

  return pattern.test(html)
    ? html.replace(pattern, replacement)
    : html.replace("</head>", `    ${replacement}\n  </head>`);
};

let html = await readFile("dist/index.html", "utf8");

html = html.replace(/<html\s+lang="[^"]*"/i, '<html lang="en"');
html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
html = html.replace(
  /<link\s+rel="canonical"[^>]*>/i,
  `<link rel="canonical" href="${canonical}" />`
);

html = replaceMeta(html, "name", "description", description);
html = replaceMeta(html, "name", "keywords", keywords);
html = replaceMeta(html, "property", "og:type", "website");
html = replaceMeta(html, "property", "og:title", title);
html = replaceMeta(html, "property", "og:description", description);
html = replaceMeta(html, "property", "og:url", canonical);
html = replaceMeta(html, "property", "og:image", image);
html = replaceMeta(html, "property", "og:image:alt", imageAlt);
html = replaceMeta(html, "property", "og:locale", "en_US");
html = replaceMeta(html, "property", "og:locale:alternate", "fr_FR");
html = replaceMeta(html, "name", "twitter:card", "summary_large_image");
html = replaceMeta(html, "name", "twitter:title", title);
html = replaceMeta(html, "name", "twitter:description", description);
html = replaceMeta(html, "name", "twitter:image", image);
html = replaceMeta(html, "name", "twitter:image:alt", imageAlt);

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Ask Youssef AI",
  url: canonical,
  image,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  isAccessibleForFree: true,
  description,
  creator: {
    "@type": "Person",
    name: "Youssef Bouzit",
    url: "https://youssef-bt.github.io/",
  },
  keywords: [
    "Hybrid RAG",
    "FastAPI",
    "Gemini",
    "BM25",
    "FastEmbed",
    "Reciprocal Rank Fusion",
    "Grounded AI",
    "Multilingual AI",
  ],
};

html = html.replace(
  "</head>",
  `    <script type="application/ld+json" id="ask-youssef-ai-structured-data">\n${JSON.stringify(
    structuredData,
    null,
    2
  )}\n    </script>\n  </head>`
);

const outputDirectory = join("dist", route);
await mkdir(outputDirectory, { recursive: true });
await writeFile(join(outputDirectory, "index.html"), html, "utf8");

console.log(`Generated SEO entry: /${route}/`);
