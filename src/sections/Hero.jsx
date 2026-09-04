import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Github, Linkedin } from "lucide-react";
import { CVDownloadButton } from "../components/CVDownloadButton";
import { FiverrLogo, FIVERR_PROFILE_URL } from "@/components/FiverrLogo";
import { useLanguage } from "@/context/LanguageContext";

const skills = [
  "Python",
  "RAG",
  "LLMs",
  "FastAPI",
  "PyTorch",
  "TensorFlow",
  "Scikit-learn",
  "YOLO",
  "OpenCV",
  "Docker",
  "MLflow",
  "Apache Airflow",
  "Apache Spark",
  "Apache Kafka",
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

      <div className="container mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-10 md:pb-14 relative z-10">
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
                href={FIVERR_PROFILE_URL}
                aria-label={t("hero.fiverrTitle")}
                title={t("hero.fiverrTitle")}
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialButtonClass} bg-white border border-[#1DBF73] overflow-hidden`}
              >
                <FiverrLogo className="w-6 md:w-7 h-auto" />
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-300 order-1 lg:order-2">
            <div className="relative max-w-xs sm:max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
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
                      {t("hero.availableForWork")}
                    </span>
                  </div>
                </div>

                <div className="absolute -top-3 md:-top-4 -left-3 md:-left-4 glass rounded-xl px-3 md:px-4 py-2 md:py-3 animate-float animation-delay-500">
                  <div className="text-xl md:text-2xl font-bold text-primary">1+</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground">
                    {t("hero.yearsExp")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 animate-fade-in animation-delay-600">
          <div className="text-center mb-4 md:mb-5">
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {t("hero.technologies")}
            </p>
            <p className="mt-1.5 text-xs md:text-sm text-muted-foreground">
              {t("hero.stackDescription")}
            </p>
          </div>

          <div className="relative overflow-hidden border-y border-primary/10 py-3 md:py-4">
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background via-background/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background via-background/90 to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee w-max">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={`${skill}-${idx}`} className="flex-shrink-0 px-1.5 md:px-2">
                  <span className="inline-flex items-center rounded-full border border-primary/15 bg-background/45 backdrop-blur-sm px-3.5 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-foreground/80 shadow-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 md:mt-6 flex justify-center animate-fade-in animation-delay-800">
          <a
            href="#about"
            className="group inline-flex flex-col items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium">
              {t("hero.scroll")}
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/15 bg-background/40 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/5 group-hover:-translate-y-0.5">
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};