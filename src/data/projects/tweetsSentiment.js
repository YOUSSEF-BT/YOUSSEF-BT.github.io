export const tweetsSentimentProject = {
  id: 4,
  // Keep the existing slug for backward compatibility with portfolio links.
  slug: "4-bigdata-reddit-sentiment-analysis-2026-02",
  title: "PulseStream — Real-Time Big Data & Social Media Intelligence",
  description:
    "A containerized Big Data platform for real-time social media analytics. PulseStream ingests live Reddit posts and comments through Apache Kafka, processes streaming data with Apache Spark Structured Streaming, persists raw and enriched records in MongoDB, and supports downstream NLP, sentiment analysis, and topic modeling.",
  image: "assets/images/projects/tweets-sentiment/main.png",
  tags: [
    "Apache Kafka",
    "Apache Spark",
    "MongoDB",
    "Docker",
    "Data Engineering",
    "NLP",
  ],
  link: "/projects/4-bigdata-reddit-sentiment-analysis-2026-02",
  github:
    "https://github.com/YOUSSEF-BT/PulseStream_Real-Time-Social-Media-Sentiment-Intelligence",
  company: "Academic Team Project",
  period: "Feb 2026 — Aug 2026",
  location: "Morocco",
  role: "Data Engineer — Streaming ETL & Storage",

  overview: {
    keyContributions: [
      "Implemented Apache Spark Structured Streaming jobs consuming Kafka topics in real time",
      "Designed cleaning, normalization, and enrichment pipelines for incoming social-media text",
      "Persisted raw and processed streaming data into MongoDB",
      "Built time-based aggregations for downstream analytics",
      "Integrated Kafka, Spark, MongoDB, and Docker across the streaming data layer",
      "Resolved Spark environment compatibility issues by running the processing layer in Linux containers",
      "Validated the streaming ETL and storage pipeline end to end",
    ],
  },

  problemStatement: {
    title: "Real-Time Social Media Data Engineering",
    description:
      "Social-media streams generate continuous, noisy, semi-structured data that must be ingested, processed, enriched, and stored reliably before it can support NLP and analytical workloads.",
    challenges: [
      "Consuming continuous events from Kafka without blocking the processing pipeline",
      "Cleaning and normalizing unstructured social-media text in real time",
      "Persisting both raw and enriched records for downstream analysis",
      "Coordinating multiple distributed services in a reproducible environment",
      "Maintaining a stable Spark runtime across development environments",
    ],
  },

  solution:
    "Built a containerized streaming architecture in which Reddit data flows through Kafka into Spark Structured Streaming for ETL and enrichment, then into MongoDB for durable storage and downstream NLP analytics.",

  keyAchievements: [
    "Delivered a working Kafka-to-Spark-to-MongoDB streaming pipeline",
    "Implemented real-time ETL for cleaning, normalization, and enrichment",
    "Added time-based aggregations to prepare data for analytical workloads",
    "Containerized the processing environment to improve reproducibility and compatibility",
    "Validated the streaming and storage layers end to end",
  ],

  techStack: [
    "Apache Kafka",
    "Apache Spark Structured Streaming",
    "MongoDB",
    "Docker",
    "Python",
    "Data Engineering",
    "Streaming ETL",
    "NLP",
  ],

  modules: [
    {
      id: 1,
      name: "Real-Time Ingestion",
      description:
        "Kafka-based ingestion layer for continuous Reddit posts and comments.",
      details:
        "The ingestion layer publishes social-media events to Kafka topics that are consumed continuously by Spark Structured Streaming jobs.",
      metrics: {
        ingestion: "Kafka",
        mode: "Real-time",
        source: "Reddit",
      },
    },
    {
      id: 2,
      name: "Streaming ETL & Enrichment",
      description:
        "Distributed processing layer for cleaning, normalization, enrichment, and time-based aggregation.",
      details:
        "Spark Structured Streaming transforms incoming events before they are persisted for downstream analytics.",
      metrics: {
        engine: "Spark",
        processing: "Streaming ETL",
        aggregation: "Time-based",
      },
    },
    {
      id: 3,
      name: "Storage & Analytics Readiness",
      description:
        "MongoDB persistence for raw and enriched social-media records.",
      details:
        "The storage layer keeps data available for downstream sentiment analysis, topic modeling, and dashboarding.",
      metrics: {
        storage: "MongoDB",
        records: "Raw + Enriched",
        deployment: "Docker",
      },
    },
  ],

  dataset: {
    name: "Live Reddit Posts & Comments",
    source: "Reddit",
    volume: "Continuous streaming data",
    annotation:
      "Raw text and enriched fields prepared for downstream sentiment and topic analysis",
  },

  challenges: {
    streamingIntegration: {
      problem:
        "Coordinating Kafka ingestion and Spark Structured Streaming reliably across services.",
      solution:
        "Used a containerized architecture with explicit service integration and end-to-end pipeline validation.",
      status: "Resolved",
    },
    noisyText: {
      problem:
        "Incoming social-media text requires normalization before downstream NLP analysis.",
      solution:
        "Implemented cleaning, normalization, and enrichment inside the streaming ETL layer.",
      status: "Implemented",
    },
    environmentCompatibility: {
      problem:
        "Spark runtime compatibility issues affected local development on Windows-based environments.",
      solution:
        "Moved the Spark processing layer into Linux containers for a stable and reproducible runtime.",
      status: "Resolved",
    },
  },

  results: {
    pipeline: "End-to-end validated",
    processing: "Real-time streaming",
    storage: "MongoDB",
    deployment: "Dockerized",
  },
};
