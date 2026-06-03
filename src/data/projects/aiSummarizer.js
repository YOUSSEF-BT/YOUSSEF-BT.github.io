export const aiSummarizerProject = {
  id: 5,
  slug: "5-ai-summarizer-2026-03",
  title: "AI Summarizer",
  description:
    "AI-powered summarizer for articles, PDFs, and Word documents with translation, key points, and audio playback. Built comprehensive NLP application leveraging advanced AI models for intelligent document summarization and content analysis.",
  image: "assets/images/projects/ai-summarizer/main.png",
  tags: ["TypeScript", "AI", "NLP", "Document Processing"],
  link: "/projects/5-ai-summarizer-2026-03",
  github: "https://github.com/YOUSSEF-BT/Ai-Summarizer",
  company: "Personal Project",
  period: "2026-03",
  location: "Morocco",
  role: "AI Engineer & Full-Stack Developer",
  overview: {
    architectureImage: "assets/architecture/AI Summarizer.png",
    keyContributions: [
      "Built AI-powered summarizer for multiple document formats",
      "Implemented advanced NLP models for intelligent summarization",
      "Created translation functionality for multi-language support",
      "Developed key points extraction and highlighting",
      "Added audio playback for summarized content",
    ],
  },
  problemStatement: {
    title: "Document Summarization Challenge",
    description:
      "Users need efficient tools to summarize long documents, extract key information, and access content in multiple formats and languages.",
    challenges: [
      "Processing multiple document formats (PDF, Word, articles)",
      "Generating accurate and concise summaries",
      "Supporting multiple languages with translation",
      "Extracting key points and important information",
      "Providing audio accessibility for content",
    ],
  },
  solution:
    "Built comprehensive AI summarizer combining advanced NLP models, multi-format processing, translation, and audio playback for intelligent document analysis.",
  keyAchievements: [
    "Created AI-powered summarizer for multiple document formats",
    "Implemented advanced NLP models for accurate summarization",
    "Built translation functionality for multi-language support",
    "Developed key points extraction and highlighting",
    "Added audio playback for summarized content",
  ],
  techStack: [
    "TypeScript", "AI", "NLP", "Document Processing",
    "Translation", "Text-to-Speech", "React", "Node.js",
  ],
  modules: [
    {
      id: 1,
      name: "Document Processing",
      description: "Multi-format document processing engine for PDF, Word, and articles.",
      details: "Implemented robust document parsing and processing for various formats with text extraction and preprocessing.",
      metrics: {
        formats: "Multiple",
        processing: "Robust",
        extraction: "Accurate",
        preprocessing: "Complete",
      },
    },
    {
      id: 2,
      name: "AI Summarization",
      description: "Advanced NLP models for intelligent document summarization.",
      details: "Implemented state-of-the-art AI models for accurate summarization with key points extraction and content analysis.",
      metrics: {
        accuracy: "High",
        models: "Advanced",
        extraction: "Intelligent",
        analysis: "Comprehensive",
      },
    },
  ],
  dataset: {
    name: "Document Summarization Dataset",
    source: "Public documents, articles, PDFs, and Word documents",
    volume: "10,000+ documents across multiple formats",
    annotation: "Manual summarization and key points extraction",
    classes: [
      { name: "Articles", label: "News & Blog Posts" },
      { name: "Academic Papers", label: "Research Papers" },
      { name: "Business Documents", label: "Reports & Presentations" },
      { name: "Technical Documentation", label: "Manuals & Guides" }
    ]
  },
  challenges: {
    multiFormat: {
      description: "Processing multiple document formats (PDF, Word, articles) with different structures",
      solution: "Implemented robust document parsing using specialized libraries for each format"
    },
    accuracy: {
      description: "Generating accurate and concise summaries while preserving key information",
      solution: "Fine-tuned BART and T5 models on domain-specific datasets for better accuracy"
    },
    multilingual: {
      description: "Supporting multiple languages with translation capabilities",
      solution: "Integrated Google Translate API with language detection and translation"
    },
    keyPoints: {
      description: "Extracting key points and important information from long documents",
      solution: "Implemented attention-based key phrase extraction and summarization algorithms"
    },
    accessibility: {
      description: "Providing audio accessibility for summarized content",
      solution: "Added text-to-speech functionality using Google TTS and pyttsx3"
    }
  },
  results: {
    formats: "Multiple",
    accuracy: "High",
    languages: "Multiple",
    features: "Comprehensive",
  },
  team: ["Youssef Bouzit"],
  supervisor: "Self-directed",
  liveDemo: {
    url: "https://aisummarizer-nu.vercel.app",
    description: "AI-powered document summarizer with translation, key points extraction, and audio playback capabilities",
  },
};