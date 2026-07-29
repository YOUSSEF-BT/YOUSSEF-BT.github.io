import { useParams } from "react-router-dom";
import { ProjectDetail as LegacyProjectDetail } from "@/pages/LegacyProjectDetail";
import { ProjectDetail as RichProjectDetail } from "@/pages/OpenLegaMaProjectDetail";

const OPENLEGAMA_SLUG = "8-chatbot-2026-05";
const ACCIDENT_DETECTION_SLUG = "real-time-road-accident-detection";

const RICH_PROJECT_SLUGS = new Set([
  OPENLEGAMA_SLUG,
  ACCIDENT_DETECTION_SLUG,
]);

export const ProjectDetail = () => {
  const { slug } = useParams();
  const isAccidentDetection = slug === ACCIDENT_DETECTION_SLUG;

  if (!RICH_PROJECT_SLUGS.has(slug)) {
    return <LegacyProjectDetail />;
  }

  if (!isAccidentDetection) {
    return <RichProjectDetail />;
  }

  return (
    <div className="accident-project-detail">
      <style>{`
        @media (min-width: 1024px) {
          .accident-project-detail .lg\\:grid-cols-3 {
            grid-template-columns: minmax(0, 1fr) !important;
          }

          .accident-project-detail .lg\\:col-span-2,
          .accident-project-detail .lg\\:col-span-1 {
            grid-column: auto !important;
          }

          .accident-project-detail aside.lg\\:col-span-1 {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1.5rem;
            align-items: start;
          }
        }
      `}</style>
      <RichProjectDetail />
    </div>
  );
};
