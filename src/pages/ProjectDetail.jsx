import { useParams } from "react-router-dom";
import { ProjectDetail as LegacyProjectDetail } from "@/pages/LegacyProjectDetail";
import { ProjectDetail as OpenLegaMaProjectDetail } from "@/pages/OpenLegaMaProjectDetail";

const OPENLEGAMA_SLUG = "8-chatbot-2026-05";

export const ProjectDetail = () => {
  const { slug } = useParams();

  return slug === OPENLEGAMA_SLUG ? (
    <OpenLegaMaProjectDetail />
  ) : (
    <LegacyProjectDetail />
  );
};
