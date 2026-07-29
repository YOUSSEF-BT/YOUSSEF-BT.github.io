export const chatbotProject = {
  id: 8,
  slug: "8-chatbot-2026-05",
  title: "OpenLegaMa — Moroccan Legal AI Assistant",
  description:
    "A Moroccan legal AI assistant available in French, Modern Standard Arabic, and English, powered by controlled Retrieval-Augmented Generation. OpenLegaMa retrieves official legal texts, validates exact law and article references, links legal claims to accepted evidence, and abstains when verified sources are insufficient.",
  image: "assets/images/projects/chatbot/main.svg",
  tags: ["Legal AI", "RAG", "NLP", "Next.js", "TypeScript"],
  link: "/projects/8-chatbot-2026-05",
  github: "https://github.com/YOUSSEF-BT/OpenLegaMa",
  company: "Personal Project",
  period: "2026-07",
  location: "Morocco",
  role: "AI Engineer & Full-Stack Developer",
  overview: {
    architectureImage: "assets/architecture/openlegama-architecture.svg",
    keyContributions: [
      "Designed a controlled legal RAG architecture that separates query understanding, routing, retrieval, evidence validation, and answer generation.",
      "Built deterministic validation for exact Moroccan law and article references to reject fabricated legal citations before generation.",
      "Implemented multilingual interaction in French, Modern Standard Arabic, and English, including Arabic RTL presentation.",
      "Created a curated official-source corpus containing 30 active legal texts, 7,708 indexed articles, and 27 represented legal domains.",
      "Developed legal-code browsing, exact article search, citation cards, conversation memory, coverage reporting, and controlled abstention through CORPUS_GAP.",
      "Established a complete quality workflow with TypeScript validation, ESLint, automated tests, retrieval benchmarks, corpus checks, and production builds.",
    ],
  },
  problemStatement: {
    title: "Reliable Access to Moroccan Legal Information",
    description:
      "General-purpose language models can produce fluent but unsupported legal answers, fabricate references, ignore missing facts, or cite irrelevant provisions. Moroccan legal information is also distributed across many official texts and portals, making reliable retrieval difficult for non-specialists.",
    challenges: [
      "Preventing hallucinated Moroccan laws, articles, deadlines, amounts, and procedures",
      "Selecting the correct legal route for general, personal, exact-reference, and out-of-scope questions",
      "Retrieving relevant provisions from a partial but curated legal corpus",
      "Maintaining citation integrity between each legal claim and its supporting evidence",
      "Handling French, Modern Standard Arabic, and English queries consistently",
      "Exposing legal coverage and temporal limitations instead of overstating system accuracy",
    ],
  },
  solution:
    "OpenLegaMa uses controlled RAG rather than a direct question-to-LLM pipeline. A semantic router first classifies the request, checks whether clarification is required, validates explicit legal references, and decides whether retrieval is permitted. Relevant articles are then ranked and filtered before grounded generation. A final claim-to-citation validation layer ensures that sourced legal claims are linked to accepted official evidence, while CORPUS_GAP and controlled abstention prevent unsupported answers.",
  keyAchievements: [
    "Released OpenLegaMa v1.0.1 as a stable, publicly accessible MVP",
    "143 of 143 automated tests passing",
    "610 curated benchmark cases and 120 independent holdout cases evaluated",
    "100% document recall at 5 on the curated retrieval benchmark",
    "100% exact article recall and citation integrity on measured benchmark cases",
    "30 active official legal texts and 7,708 indexed legal articles",
    "French, Modern Standard Arabic, and English legal interaction with Arabic RTL support",
    "Production build, TypeScript checks, ESLint, corpus validation, and benchmark thresholds passing",
  ],
  techStack: [
    "Next.js 16",
    "React 18",
    "TypeScript 5",
    "Tailwind CSS 4",
    "Controlled RAG",
    "Groq SDK",
    "Python",
    "NLP",
    "Legal Retrieval",
    "Vercel",
  ],
  modules: [
    {
      id: 1,
      name: "Semantic Query Router",
      description:
        "Classifies project-information, general legal, clarification-required, exact-reference, Moroccan legal RAG, personal-case, corpus-gap, out-of-scope, and safety requests.",
      details:
        "The router determines whether retrieval is necessary, whether the user must provide missing facts, and whether the system is allowed to produce a sourced legal answer.",
      metrics: {
        routes: "9",
        languages: "FR / AR / EN",
        behavior: "Deterministic + semantic",
      },
    },
    {
      id: 2,
      name: "Controlled Legal RAG",
      description:
        "Retrieves official Moroccan legal material through exact lookup and hybrid retrieval, followed by article ranking and relevance filtering.",
      details:
        "The assistant only receives accepted context after document-level and article-level relevance checks.",
      metrics: {
        legalTexts: "30",
        indexedArticles: "7,708",
        legalDomains: "27",
      },
    },
    {
      id: 3,
      name: "Evidence & Citation Guard",
      description:
        "Links important Moroccan legal claims to accepted citations and rejects unsupported or irrelevant references.",
      details:
        "Citation cards expose the legal instrument, article, institution, official URL, supporting excerpt, and citation identifier.",
      metrics: {
        citationIntegrity: "100%*",
        exactArticleRecall: "100%*",
        abstention: "CORPUS_GAP",
      },
    },
    {
      id: 4,
      name: "Evaluation & Release Pipeline",
      description:
        "Runs type checking, linting, automated tests, corpus reproducibility, registry synchronization, retrieval benchmarks, holdout validation, and a production build.",
      details:
        "The pipeline is designed to reduce regressions while keeping limitations visible; automated metrics do not replace professional legal validation.",
      metrics: {
        automatedTests: "143 / 143",
        curatedCases: "610",
        holdoutCases: "120",
      },
    },
  ],
  dataset: {
    name: "Curated Moroccan Official Legal Corpus",
    source: "Adala, SGG, Bulletin Officiel and stored official-source metadata",
    volume: "30 active texts • 7,708 indexed articles • 27 domains",
    annotation:
      "Structured legal instruments, articles, provenance, official URLs, registry metadata, activation status, and retrieval evaluation cases",
  },
  challenges: {
    hallucinatedReferences: {
      problem: "Language models may fabricate laws or article numbers that sound legally plausible.",
      solution:
        "Validate explicit laws and article references deterministically before retrieval and reject false references without substituting unrelated citations.",
      status: "Implemented",
    },
    insufficientEvidence: {
      problem: "A relevant legal question may concern material that is absent from the active corpus.",
      solution:
        "Return CORPUS_GAP or controlled abstention instead of inventing a rule, amount, deadline, or procedure.",
      status: "Implemented",
    },
    multilingualConsistency: {
      problem: "The same legal intent can be expressed differently in French, Modern Standard Arabic, or English.",
      solution:
        "Normalize the three supported languages into a canonical legal intent while preserving the user’s response language and Arabic RTL presentation.",
      status: "Implemented",
    },
    temporalValidity: {
      problem: "Legal rules may change through amendments, repeals, implementing decrees, and transitional provisions.",
      solution:
        "Expose temporal uncertainty and coverage limitations explicitly; full end-to-end temporal validation remains a planned improvement.",
      status: "Open limitation",
    },
  },
  results: {
    automatedTests: "143 / 143",
    indexedArticles: "7,708",
    activeLegalTexts: "30",
    curatedBenchmark: "610 cases",
    holdoutBenchmark: "120 cases",
    documentRecallAt5: "100%*",
  },
  team: ["Youssef Bouzit"],
  supervisor: "Self-directed engineering project",
  liveDemo: {
    url: "https://openlegama.vercel.app",
    description:
      "Explore OpenLegaMa’s Moroccan legal assistant in French, Modern Standard Arabic, and English, with sourced legal search, a legal-code library, article reader, and corpus coverage dashboard.",
  },
};