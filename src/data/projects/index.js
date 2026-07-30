import { churnPredictionProject } from "./churnPrediction";
import { dataQualityProject } from "./dataQuality";
import { mlopsPipelineProject } from "./mlopsPipeline";
import { tweetsSentimentProject } from "./tweetsSentiment";
import { aiSummarizerProject } from "./aiSummarizer";
import { fraudDetectionProject } from "./fraudDetection";
import { hybridMovieRecommenderProject } from "./hybridMovieRecommender";
import { chatbotProject } from "./chatbot";
import { trafficMVPProject } from "./trafficMVP";
import { accidentDetectionProject } from "./accidentDetection";

// Override only the PFE project cover. The System Architecture image remains
// defined inside accidentDetectionProject.overview and is not modified here.
const accidentDetectionProjectWithCover = {
  ...accidentDetectionProject,
  image: "assets/images/projects/accident-detection/main-cover-vector.svg",
};

// Organized by creation date - most recent projects first
export const projectsData = [
  accidentDetectionProjectWithCover, // 2026-08 - PFE Accident Detection
  chatbotProject,                    // 2026-07 - OpenLegaMa Legal AI
  hybridMovieRecommenderProject,
  fraudDetectionProject,
  aiSummarizerProject,               // 2026-03-22
  trafficMVPProject,                 // Traffic Image Processing
  tweetsSentimentProject,            // 2026-02-06
  mlopsPipelineProject,              // 2025-12-21
  dataQualityProject,                // 2025-12-06
  churnPredictionProject,            // 2025-11-29
];

export const getProjectBySlug = (slug) => {
  return projectsData.find((p) => p.slug === slug);
};

export const getProjectById = (id) => {
  return projectsData.find((p) => p.id === id);
};
