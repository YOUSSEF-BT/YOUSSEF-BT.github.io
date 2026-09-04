import { useLanguage } from "@/context/LanguageContext";
import abaLogo from "@/assets/images/logos/ABA_Technology.png";
import supMtiLogo from "@/assets/images/logos/sup_mti.png";
import githubLogo from "@/assets/images/logos/Github.png";
import { FIVERR_LOGO_URL, FIVERR_PROFILE_URL } from "@/components/FiverrLogo";

const experiences = [
  {
    period: "Sep 2026 — Present",
    role: "Freelance AI/ML Engineer",
    company: "Fiverr — AI/ML Freelance Services",
    companyLink: FIVERR_PROFILE_URL,
    description:
      "Offering freelance AI and Machine Learning services focused on RAG systems, LLM applications, AI agents, document intelligence, machine learning, and computer vision. Building practical and business-oriented AI solutions tailored to client needs.",
    technologies: ["RAG", "LLM", "AI Agents", "Python", "Machine Learning"],
    current: true,
    logos: [FIVERR_LOGO_URL],
    logoClassName: "w-full h-full object-contain bg-white p-2.5"
  },
  {
    period: "Feb 2026 — Aug 2026",
    role: "AI/ML Engineer Intern | Computer Vision",
    company: "NEXTRONIC — ABA Technology Group, Casablanca Technopark",
    companyLink: "https://aba.technology/",
    description:
      "Designed and developed a real-time road accident detection system using YOLO, BoT-SORT, computer vision, and behavioral heuristics. Built video alerts, automated clip saving, and CSV event logging for CCTV-based monitoring.",
    technologies: ["Python", "YOLO", "OpenCV", "BoT-SORT", "Deep Learning"],
    current: false,
    logos: [abaLogo]
  },
  {
    period: "2025 — 2026",
    role: "MLOps & Data Science Projects",
    company: "SUP'MTI & Personal Projects",
    companyLink: "https://github.com/YOUSSEF-BT",
    description:
      "Developed MLOps pipelines, fraud detection systems, data quality monitoring platforms, customer analytics dashboards, and AI-powered applications for document processing and predictive modeling.",
    technologies: ["Python", "MLOps", "Airflow", "MLflow", "Big Data"],
    current: false,
    logos: [githubLogo]
  },
  {
    period: "2023 — 2026",
    role: "State Engineering Degree in Data Science",
    company: "SUP'MTI Rabat — Engineering Cycle, Data Science Option",
    companyLink: "https://supmti.ac.ma/ingenierie-data-science-et-iot/",
    description:
      "Completed the State Engineering curriculum with a specialization in Data Science and Artificial Intelligence. Graduation project defended with an Excellent distinction and a score of 18/20.",
    technologies: ["Data Science", "Machine Learning", "AI", "Computer Vision", "MLOps"],
    current: false,
    logos: [supMtiLogo]
  },
  {
    period: "2021 — 2023",
    role: "Preparatory Classes",
    company: "SUP'MTI Rabat",
    companyLink: "https://supmti.ac.ma/classes-preparatoires-technologies-de-linformation/",
    description:
      "Completed an intensive preparatory program focused on mathematics, physics, computer science, and engineering fundamentals.",
    technologies: ["Mathematics", "Physics", "Computer Science", "Engineering"],
    current: false,
    logos: [supMtiLogo]
  },
];

export const Experience = () => {
  const { t } = useLanguage();
  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 md:mb-16">
          <span className="text-secondary-foreground text-xs md:text-sm font-medium tracking-wider uppercase animate-fade-in">
            {t("experience.title")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 md:mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            {t("experience.headline")}
            <span className="font-serif italic font-normal text-foreground"> {t("experience.headlineHighlight")}</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground animate-fade-in animation-delay-200">
            {t("experience.description")}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-6 md:gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 overflow-hidden">
                    <div className="p-4 md:p-6">
                      <span className="text-xs md:text-sm text-primary font-medium">{exp.period}</span>
                      {exp.logos && exp.logos.length > 0 ? (
                        <div className={`flex mt-0 mb-1 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                          {exp.logos.map((logo, i) => (
                            <a
                              key={i}
                              href={exp.companyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block relative group"
                            >
                              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-md transition-all duration-500 group-hover:blur-none group-hover:from-primary/30 group-hover:to-primary/10" />
                              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-background/80 to-background/60 border border-primary/30 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:border-primary/50">
                                <img
                                  src={logo}
                                  alt={`${exp.company} logo`}
                                  className={exp.logoClassName || "w-full h-full object-cover filter brightness-90"}
                                />
                              </div>
                            </a>
                          ))}
                        </div>
                      ) : null}
                      <h3 className="text-base md:text-xl font-semibold mb-0">{exp.role}</h3>
                      <div className={`flex items-center gap-2 flex-wrap mt-0 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                        {exp.companyLink ? (
                          <a
                            href={exp.companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          <p className="text-xs md:text-sm text-muted-foreground">{exp.company}</p>
                        )}
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground mt-2 md:mt-4">{exp.description}</p>
                      <div className={`flex flex-wrap gap-1.5 md:gap-2 mt-3 md:mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                        {exp.technologies.map((tech, techIdx) => (
                          <span key={techIdx} className="px-2 md:px-3 py-1 bg-surface text-[10px] md:text-xs rounded-full text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
