import { useParams } from "react-router-dom";
import { ProjectDetail as LegacyProjectDetail } from "@/pages/LegacyProjectDetail";
import { ProjectDetail as RichProjectDetail } from "@/pages/OpenLegaMaProjectDetail";
import { getProjectBySlug } from "@/data/projects";

const OPENLEGAMA_SLUG = "8-chatbot-2026-05";
const ACCIDENT_DETECTION_SLUG = "real-time-road-accident-detection";
const ACCIDENT_ARCHITECTURE_IMAGE =
  "assets/architecture/accident-detection-architecture.webp";

const RICH_PROJECT_SLUGS = new Set([
  OPENLEGAMA_SLUG,
  ACCIDENT_DETECTION_SLUG,
]);

export const ProjectDetail = () => {
  const { slug } = useParams();

  if (slug === ACCIDENT_DETECTION_SLUG) {
    const project = getProjectBySlug(slug);

    if (project?.overview) {
      project.overview.architectureImage = ACCIDENT_ARCHITECTURE_IMAGE;
    }
  }

  return RICH_PROJECT_SLUGS.has(slug) ? (
    <RichProjectDetail />
  ) : (
    <LegacyProjectDetail />
  );
};
