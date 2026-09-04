import { useParams } from "react-router-dom";
import { ProjectDetail as LegacyProjectDetail } from "@/pages/LegacyProjectDetail";
import { ProjectDetail as RichProjectDetail } from "@/pages/OpenLegaMaProjectDetail";

const RICH_PROJECT_SLUGS = new Set([
  "openlegama-moroccan-legal-ai",
  "real-time-road-accident-detection",
]);

export const ProjectDetail = () => {
  const { slug } = useParams();

  return RICH_PROJECT_SLUGS.has(slug) ? (
    <RichProjectDetail />
  ) : (
    <LegacyProjectDetail />
  );
};