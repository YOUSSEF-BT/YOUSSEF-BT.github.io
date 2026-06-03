import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-full glass hover:bg-primary/10 transition-all"
      title={language === "fr" ? "Switch to English" : "Passer en français"}
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">{language.toUpperCase()}</span>
    </button>
  );
};