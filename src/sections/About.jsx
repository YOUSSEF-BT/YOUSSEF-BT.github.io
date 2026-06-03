import { Brain, Lightbulb, Zap, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const highlights = [
  {
    icon: Brain,
    title: "about.highlights.ai",
    description: "about.highlights.aiDesc",
  },
  {
    icon: Zap,
    title: "about.highlights.mlops",
    description: "about.highlights.mlopsDesc",
  },
  {
    icon: Users,
    title: "about.highlights.bigdata",
    description: "about.highlights.bigdataDesc",
  },
  {
    icon: Lightbulb,
    title: "about.highlights.fullstack",
    description: "about.highlights.fullstackDesc",
  },
];

export const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-6 md:space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-xs md:text-sm font-medium tracking-wider uppercase">
                {t("about.title")}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              {t("about.headline")}
              <span className="font-serif italic font-normal text-foreground">
                {" "}
                {t("about.headlineHighlight")}
              </span>
            </h2>

            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                {t("about.description1")}
              </p>
              <p>
                {t("about.description2")}
              </p>
              <p>
                {t("about.description3")}
              </p>
            </div>

            <div className="glass rounded-2xl p-4 md:p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-base md:text-lg font-medium italic text-foreground">
                "{t("about.mission")}"
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-4 md:p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4 hover:bg-primary/20">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2">{t(item.title)}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {t(item.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
