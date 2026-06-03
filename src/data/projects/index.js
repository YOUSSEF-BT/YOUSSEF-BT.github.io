import { churnPredictionProject } from "./churnPrediction";
import { dataQualityProject } from "./dataQuality";
import { mlopsPipelineProject } from "./mlopsPipeline";
import { tweetsSentimentProject } from "./tweetsSentiment";
import { aiSummarizerProject } from "./aiSummarizer";
import { fraudDetectionProject } from "./fraudDetection";
import { hybridMovieRecommenderProject } from "./hybridMovieRecommender";
import { chatbotProject } from "./chatbot";
import { trafficMVPProject } from "./trafficMVP";

// Organized by creation date (from GitHub) - reversed: recent to older
export const projectsData = [
  chatbotProject,                // 2026-05 - In Development
  hybridMovieRecommenderProject, // (no GitHub repo found)
  fraudDetectionProject,         // (no GitHub repo found)
  aiSummarizerProject,          // 2026-03-22
  trafficMVPProject,             // 2025 - Traffic Image Processing (added later)
  tweetsSentimentProject,        // 2026-02-06
  mlopsPipelineProject,          // 2025-12-21
  dataQualityProject,            // 2025-12-06
  churnPredictionProject,        // 2025-11-29
];

export const getProjectBySlug = (slug) => {
  return projectsData.find((p) => p.slug === slug);
};

export const getProjectById = (id) => {
  return projectsData.find((p) => p.id === id);
};