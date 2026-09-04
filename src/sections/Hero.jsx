import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Github, Linkedin } from "lucide-react";
import { CVDownloadButton } from "../components/CVDownloadButton";
import { useLanguage } from "@/context/LanguageContext";

const skills = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Big Data",
  "MLOps",
  "Airflow",
  "MLflow",
  "TypeScript",
  "JavaScript",
  "Data Science",
  "AI",
  "Fraud Detection",
  "Sentiment Analysis",
  "Data Quality",
  "Streamlit",
  "TensorFlow",
  "Scikit-learn",
  "XGBoost",
  "Node.js",
];

const socialButtonClass =
  "w-8 h-8 md:w-9 md:h-9 rounded-full shadow-sm flex items-center justify-center hover:scale-105 hover:shadow-md transition-all duration-300";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0" style={{ zIndex: -1 }}>
        <img
          src={`${import.meta.env.BASE_URL}assets/images/hero/hero-bg.jpg`}
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-16 md:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-3 md:space-y-4 order-2 lg:order-1">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full glass text-xs md:text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {t("hero.badge")}
              </span>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                {t("hero.headline")}
                <br />
                <span className="text-primary glow-text">
                  {t("hero.headlineHighlight")}
                </span>
                <br />
                <span className="font-serif italic font-normal text-foreground">
                  {t("hero.headlineSuffix")}
                </span>
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                {t("hero.description")}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4 animate-fade-in animation-delay-300">
              <Button
                size="lg"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="flex-1 sm:flex-none"
              >
                {t("hero.contact")} <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
              <CVDownloadButton />
            </div>

            <div className="flex items-center gap-3 md:gap-4 animate-fade-in animation-delay-400">
              <span className="text-xs md:text-sm text-muted-foreground">
                {t("hero.follow")} 
              </span>

              <a
                href="https://github.com/YOUSSEF-BT"
                aria-label="GitHub"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialButtonClass} bg-[#181717] text-white border border-[#181717]`}
              >
                <Github className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={2.2} />
              </a>

              <a
                href="https://www.linkedin.com/in/youssef-bouzit-74863239b/"
                aria-label="LinkedIn"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialButtonClass} bg-[#0A66C2] text-white border border-[#0A66C2]`}
              >
                <Linkedin className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={2.2} />
              </a>

              <a
                href="https://www.fiverr.com/youssef_bouzit"
                aria-label="Fiverr — Hire me"
                title="Fiverr — Hire me"
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialButtonClass} bg-[#1DBF73] text-white border border-[#1DBF73]`}
              >
                <span className="font-black text-[7px] md:text-[8px] tracking-[-0.05em] leading-none">
                  fiverr.
                </span>
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-300 order-1 lg:order-2">
            <div className="relative max-w-xs sm:max-w-md mx-auto">
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src={`${import.meta.env.BASE_URL}assets/images/profile/youssef_bouzit_profile.png`}
                  alt="Youssef Bouzit"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                  loading="eager"
                  fetchPriority="high"
                  width="400"
                  height="500"
                />

                <div className="absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 glass rounded-xl px-3 md:px-4 py-2 md:py-3 animate-float">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs md:text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

                <div className="absolute -top-3 md:-top-4 -left-3 md:-left-4 glass rounded-xl px-3 md:px-4 py-2 md:py-3 animate-float animation-delay-500">
                  <div className="text-xl md:text-2xl font-bold text-primary">1+</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground">
                    Years Exp
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-20 animate-fade-in animation-delay-600">
          <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6 text-center">
            {t("hero.technologies")}
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-4 md:px-8 py-3 md:py-4">
                  <span className="text-sm md:text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">{t("hero.scroll")}</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
