import { Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const cvOptions = [
  {
    lang: "en",
    label: "English",
    file: "CV_Youssef_Bouzit_EN.pdf",
  },
  {
    lang: "fr",
    label: "Français",
    file: "CV_Youssef_Bouzit_FR.pdf",
  },
];

export const CVDownloadButton = () => {
  const { language, t } = useLanguage();

  // Get current language CV or default to French
  const currentCV = cvOptions.find((cv) => cv.lang === language) || cvOptions[1];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}documents/${currentCV.file}`;
    link.download = currentCV.file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="relative bg-transparent border border-border
        text-foreground hover:border-primary/50 transition-all
        duration-1000 focus:outline-none focus-visible:ring-2
        focus-visible:ring-primary focus-visible:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed group
        px-8 py-4 text-lg font-medium rounded-full overflow-visible
        animated-border flex-1 sm:flex-none"
    >
      {/* Animated SVG Border */}
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none download-cv-border"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path"
        />
      </svg>
      <span className="relative z-10 flex items-center justify-center gap-2">
        <Download className="w-4 h-4 md:w-5 md:h-5" />
        {t("hero.downloadCV")}
      </span>
    </button>
  );
};
