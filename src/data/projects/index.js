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
import pfeCoverBase64 from "../../../build-assets/pfe-cover/part00.b64?raw";

// Embed only the PFE project cover directly in the production bundle. This
// removes all asset-path, cache, CORS, and GitHub Pages deployment failures.
// The System Architecture image remains defined in accidentDetectionProject.
const pfeCoverDataUrl = `data:image/webp;base64,${pfeCoverBase64.replace(/\s+/g, "")}`;

const accidentDetectionProjectWithCover = {
  ...accidentDetectionProject,
  image: pfeCoverDataUrl,
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
