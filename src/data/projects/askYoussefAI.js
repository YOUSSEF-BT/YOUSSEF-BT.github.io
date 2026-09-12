export const askYoussefAIProject = {
  id: 11,
  slug: "ask-youssef-ai-portfolio-intelligence",
  title: "Ask Youssef AI — Evidence-Grounded Portfolio Intelligence",
  description:
    "A production AI portfolio copilot that transforms my professional portfolio into a multilingual, evidence-grounded assistant for recruiters, clients, engineers, and collaborators. It combines deterministic professional facts, structured retrieval, BM25, FastEmbed semantic search, Reciprocal Rank Fusion, Gemini generation, grounding safeguards, evaluation, and production deployment.",
  image:
    "https://opengraph.githubassets.com/1/YOUSSEF-BT/ASK-YOUSSEF-AI",
  tags: [
    "Hybrid RAG",
    "FastAPI",
    "Gemini",
    "FastEmbed",
    "BM25",
    "RRF",
    "Grounded AI",
    "Multilingual AI",
  ],
  link: "/projects/ask-youssef-ai-portfolio-intelligence",
  github: "https://github.com/YOUSSEF-BT/ASK-YOUSSEF-AI",
  company: "Independent Project",
  period: "September 2026",
  location: "Morocco",
  role: "AI Engineer • RAG / LLM Systems",
  version: "Production",
  status: "Live",
  license: "MIT",
  overview: {
    description:
      "Ask Youssef AI is a production portfolio intelligence system designed to answer professional questions about my experience, projects, technical skills, certifications, education, and current career status using synchronized public evidence. The architecture deliberately separates deterministic facts from generative reasoning so exact professional information does not depend on probabilistic LLM output.",
    keyContributions: [
      "Designed an evidence-first AI architecture that separates deterministic professional facts, hybrid retrieval, generation, grounding, and delivery.",
      "Built a hybrid retrieval pipeline combining structured profile search, BM25 lexical retrieval, FastEmbed semantic search, and Reciprocal Rank Fusion.",
      "Implemented a precision-fact engine for exact counts, employer checks, certification inventories, project facts, and current professional status.",
      "Implemented model-independent grounding controls for citation validation, unsupported literal detection, and conservative abstention.",
      "Built multilingual routing and output behavior for English, French, and Arabic, including history-aware follow-up handling.",
      "Created automated portfolio synchronization so professional evidence remains aligned with the public portfolio source of truth.",
      "Established CI, dependency auditing, CodeQL analysis, regression testing, adversarial production audits, and live endpoint validation.",
      "Deployed the FastAPI backend on Vercel and integrated the production assistant directly into the public portfolio.",
    ],
  },
  disclaimer:
    "Evaluation scores describe the defined regression and benchmark suites. They are not a claim of universal 100% LLM accuracy or enterprise-scale availability.",
  problemStatement: {
    title: "Turning a Static Portfolio into Verifiable Professional Intelligence",
    description:
      "A traditional portfolio forces recruiters and clients to manually inspect multiple project pages, skills, certifications, and experience entries. A generic chatbot can make that information conversational, but without deterministic facts, retrieval controls, and grounding it can also omit evidence or invent professional claims.",
    challenges: [
      "Answering exact professional questions without relying on incomplete top-k retrieval",
      "Combining exact identifiers with semantic portfolio search",
      "Preventing unsupported professional claims and invalid citations",
      "Maintaining consistent English, French, and Arabic responses",
      "Synchronizing portfolio data without manually duplicating professional facts",
      "Operating a public provider-backed AI endpoint with bounded cost and abuse controls",
    ],
  },
  solution:
    "Ask Youssef AI uses a layered architecture instead of a direct prompt-to-LLM flow. Exact questions are resolved from a synchronized structured profile. Open factual questions use structured retrieval, BM25, and FastEmbed semantic search fused through RRF. Gemini handles evidence-backed generation only when generative reasoning is useful. A final grounding boundary validates citations and high-impact claims before answers are returned through the FastAPI SSE API and portfolio widget.",
  keyAchievements: [
    "Production deployment integrated directly into the public portfolio",
    "218 of 218 Python unit and regression tests passing in the validated project snapshot",
    "Routing accuracy, Retrieval Hit@1, Retrieval Hit@3, MRR, grounding safety, and profile integrity all measured at 1.000 on the deterministic benchmark suite",
    "25 of 25 core production regression cases passed",
    "20 of 20 deep adversarial production audit cases passed",
    "21 of 21 human recruiter, client, and visitor audit scenarios passed",
    "English, French, and Arabic professional interaction",
    "16 synchronized evidence pages, 161 retrieval chunks, and 81 structured documents",
    "Automated CI, dependency auditing, CodeQL security analysis, and portfolio synchronization",
  ],
  techStack: [
    "Python 3.12",
    "FastAPI",
    "Gemini 3.7 Flash",
    "Gemini 3.5 Flash-Lite",
    "FastEmbed",
    "BM25",
    "Reciprocal Rank Fusion",
    "Structured Retrieval",
    "Server-Sent Events",
    "GitHub Actions",
    "Vercel",
  ],
  modules: [
    {
      id: 1,
      name: "Precision Fact Engine",
      description:
        "Resolves exact professional facts directly from the synchronized structured profile instead of depending on partial retrieval context.",
      details:
        "Used for certification totals, issuer inventories, project counts, employer checks, current professional status, and other exact structured questions.",
      metrics: {
        behavior: "Deterministic",
        source: "Structured profile",
        purpose: "Exact facts",
      },
    },
    {
      id: 2,
      name: "Hybrid Retrieval Engine",
      description:
        "Combines structured search, BM25 lexical retrieval, and FastEmbed semantic retrieval before Reciprocal Rank Fusion.",
      details:
        "The three retrieval signals cover structured entities, exact technical vocabulary, and semantic paraphrases without relying on vector search alone.",
      metrics: {
        retrievalSignals: "3",
        hitAt1: "1.000",
        mrr: "1.000",
      },
    },
    {
      id: 3,
      name: "Grounding & Citation Boundary",
      description:
        "Validates evidence references and blocks unsupported high-impact professional claims after generation.",
      details:
        "The boundary can normalize citations, reject unknown sources, constrain unsupported literals, and prefer abstention when the available evidence is insufficient.",
      metrics: {
        groundingSafety: "1.000",
        behavior: "Evidence first",
        fallback: "Safe abstention",
      },
    },
    {
      id: 4,
      name: "Multilingual Professional Assistant",
      description:
        "Supports English, French, and Arabic while preserving the language of the current visitor question.",
      details:
        "Language behavior is covered by regression tests, including Arabic-script output and history-aware follow-up scenarios.",
      metrics: {
        languages: "EN / FR / AR",
        routingAccuracy: "1.000",
        historyAware: "Yes",
      },
    },
    {
      id: 5,
      name: "Production Evaluation & Security Pipeline",
      description:
        "Combines local tests, deterministic benchmarks, deployed regression suites, adversarial testing, dependency auditing, and CodeQL analysis.",
      details:
        "The evaluation strategy separates fixed-suite quality evidence from universal AI-accuracy claims and continuously checks the production-facing system.",
      metrics: {
        tests: "218 / 218",
        coreProduction: "25 / 25",
        adversarialAudit: "20 / 20",
      },
    },
  ],
  dataset: {
    sectionTitle: "Professional Knowledge Base",
    name: "Synchronized Public Portfolio Evidence",
    source: "Youssef Bouzit public portfolio",
    volume: "16 evidence pages • 161 chunks • 81 structured documents",
    annotation:
      "Projects, skills, certifications, work experience, education, career status, public links, and structured professional aggregates",
  },
  challenges: {
    exactFacts: {
      problem:
        "Top-k retrieval can omit items when a visitor asks for a complete inventory or exact count.",
      solution:
        "Route exact questions to the precision-fact engine and resolve them against the complete synchronized structured profile.",
      status: "Implemented",
    },
    unsupportedClaims: {
      problem:
        "A fluent model response can sound credible even when a professional claim is not supported by portfolio evidence.",
      solution:
        "Apply citation validation, high-impact literal checks, evidence requirements, and safe abstention after generation.",
      status: "Implemented",
    },
    retrievalDiversity: {
      problem:
        "Exact names, technologies, companies, and semantic concepts are not equally well served by one retrieval method.",
      solution:
        "Combine structured retrieval, BM25, and FastEmbed, then merge rankings through Reciprocal Rank Fusion.",
      status: "Implemented",
    },
    publicReliability: {
      problem:
        "A public AI endpoint must control provider usage, failures, request size, and browser access without exposing credentials.",
      solution:
        "Use server-side secrets, request/history limits, rate controls, provider timeout and failover behavior, CORS restrictions, health checks, and privacy-safe telemetry.",
      status: "Implemented for portfolio-scale production",
    },
  },
  results: {
    automatedTests: "218 / 218",
    routingAccuracy: "1.000",
    retrievalHitAt1: "1.000",
    retrievalHitAt3: "1.000",
    retrievalMRR: "1.000",
    groundingSafety: "1.000",
    coreProduction: "25 / 25",
    adversarialAudit: "20 / 20",
    humanAudit: "21 / 21",
  },
  resultsNote:
    "Metrics correspond to the defined deterministic, regression, production, adversarial, and human-evaluation suites documented in the project repository. They do not imply universal 100% accuracy for arbitrary future questions.",
  team: ["Youssef Bouzit"],
  liveDemo: {
    url: "https://youssef-bt.github.io/",
    description:
      "Open my portfolio and use the Ask Youssef AI assistant to explore projects, skills, experience, certifications, and professional evidence interactively.",
    buttonLabel: "Launch Demo",
  },
};
