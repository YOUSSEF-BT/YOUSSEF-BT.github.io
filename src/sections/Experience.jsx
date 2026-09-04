import { useLanguage } from "@/context/LanguageContext";
import abaLogo from "@/assets/images/logos/ABA_Technology.png";
import supMtiLogo from "@/assets/images/logos/sup_mti.png";
import githubLogo from "@/assets/images/logos/Github.png";
import { FIVERR_LOGO_URL, FIVERR_PROFILE_URL } from "@/components/FiverrLogo";

const experiences = [
  {
    period: {
      en: "Sep 2026 — Present",
      fr: "Sept 2026 — Aujourd’hui",
    },
    role: {
      en: "Freelance AI/ML Engineer",
      fr: "Ingénieur IA/ML Freelance",
    },
    company: {
      en: "Fiverr — AI/ML Freelance Services",
      fr: "Fiverr — Services freelance IA/ML",
    },
    companyLink: FIVERR_PROFILE_URL,
    description: {
      en: "Offering freelance AI and Machine Learning services focused on RAG systems, LLM applications, AI agents, document intelligence, machine learning, and computer vision. Building practical and business-oriented AI solutions tailored to client needs.",
      fr: "Proposition de services freelance en intelligence artificielle et Machine Learning, avec un focus sur les systèmes RAG, les applications LLM, les agents IA, l’intelligence documentaire, le Machine Learning et la vision par ordinateur. Conception de solutions IA pratiques et orientées métier, adaptées aux besoins des clients.",
    },
    technologies: ["RAG", "LLM", "AI Agents", "Python", "Machine Learning"],
    current: true,
    logos: [FIVERR_LOGO_URL],
    logoClassName: "w-full h-full object-contain bg-white p-2.5",
  },
  {
    period: {
      en: "Feb 2026 — Aug 2026",
      fr: "Fév 2026 — Août 2026",
    },
    role: {
      en: "AI/ML Engineer Intern | Computer Vision",
      fr: "Stagiaire Ingénieur IA/ML | Vision par ordinateur",
    },
    company: {
      en: "NEXTRONIC — ABA Technology Group, Casablanca Technopark",
      fr: "NEXTRONIC — Groupe ABA Technology, Technopark Casablanca",
    },
    companyLink: "https://aba.technology/",
    description: {
      en: "Designed and developed a real-time road accident detection system using YOLO, BoT-SORT, computer vision, and behavioral heuristics. Built video alerts, automated clip saving, and CSV event logging for CCTV-based monitoring.",
      fr: "Conception et développement d’un système de détection en temps réel des accidents de la route utilisant YOLO, BoT-SORT, la vision par ordinateur et des heuristiques comportementales. Mise en place d’alertes vidéo, de l’enregistrement automatique de clips et de la journalisation des événements en CSV pour la vidéosurveillance.",
    },
    technologies: ["Python", "YOLO", "OpenCV", "BoT-SORT", "Deep Learning"],
    current: false,
    logos: [abaLogo],
  },
  {
    period: {
      en: "Jan 2025 — Aug 2026",
      fr: "Jan 2025 — Août 2026",
    },
    role: {
      en: "Data Science & AI Engineering Projects",
      fr: "Projets d’ingénierie Data Science & IA",
    },
    company: {
      en: "SUP'MTI & Personal Engineering Projects",
      fr: "SUP'MTI & projets d’ingénierie personnels",
    },
    companyLink: "https://github.com/YOUSSEF-BT",
    description: {
      en: "Developed end-to-end Data Science, Machine Learning, MLOps, Big Data, and AI projects, including fraud detection, data quality monitoring, customer analytics, predictive modeling, and AI-powered document applications.",
      fr: "Développement de projets de bout en bout en Data Science, Machine Learning, MLOps, Big Data et IA, couvrant notamment la détection de fraude, le suivi de la qualité des données, l’analyse client, la modélisation prédictive et les applications documentaires basées sur l’IA.",
    },
    technologies: ["Python", "Machine Learning", "MLOps", "Big Data", "AI"],
    current: false,
    logos: [githubLogo],
    logoClassName: "w-full h-full object-contain bg-white p-3",
  },
  {
    period: {
      en: "Oct 2023 — Jul 2026",
      fr: "Oct 2023 — Juil 2026",
    },
    role: {
      en: "State Engineering Degree in Data Science",
      fr: "Diplôme d’Ingénieur d’État en Data Science",
    },
    company: {
      en: "SUP'MTI Rabat — Engineering Cycle, Data Science Option",
      fr: "SUP'MTI Rabat — Cycle d’ingénieur, option Data Science",
    },
    companyLink: "https://supmti.ac.ma/ingenierie-data-science-et-iot/",
    description: {
      en: "Completed the State Engineering curriculum with a specialization in Data Science and Artificial Intelligence. Graduation project defended with an Excellent distinction and a score of 18/20.",
      fr: "Formation d’Ingénieur d’État avec spécialisation en Data Science et intelligence artificielle. Projet de fin d’études soutenu avec la mention Excellent et une note de 18/20.",
    },
    technologies: ["Data Science", "Machine Learning", "AI", "Computer Vision", "MLOps"],
    current: false,
    logos: [supMtiLogo],
  },
  {
    period: {
      en: "Oct 2021 — Jul 2023",
      fr: "Oct 2021 — Juil 2023",
    },
    role: {
      en: "Preparatory Classes",
      fr: "Classes préparatoires",
    },
    company: {
      en: "SUP'MTI Rabat",
      fr: "SUP'MTI Rabat",
    },
    companyLink: "https://supmti.ac.ma/classes-preparatoires-technologies-de-linformation/",
    description: {
      en: "Completed an intensive preparatory program focused on mathematics, physics, computer science, and engineering fundamentals.",
      fr: "Formation préparatoire intensive axée sur les mathématiques, la physique, l’informatique et les fondamentaux de l’ingénierie.",
    },
    technologies: ["Mathematics", "Physics", "Computer Science", "Engineering"],
    current: false,
    logos: [supMtiLogo],
  },
];

export const Experience = () => {
  const { t, language } = useLanguage();
  const locale = language === "fr" ? "fr" : "en";

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
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

        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-6 md:gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 overflow-hidden">
                    <div className="p-4 md:p-6">
                      <span className="text-xs md:text-sm text-primary font-medium">{exp.period[locale]}</span>
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
                                  alt={`${exp.company[locale]} logo`}
                                  className={exp.logoClassName || "w-full h-full object-cover filter brightness-90"}
                                />
                              </div>
                            </a>
                          ))}
                        </div>
                      ) : null}
                      <h3 className="text-base md:text-xl font-semibold mb-0">{exp.role[locale]}</h3>
                      <div className={`flex items-center gap-2 flex-wrap mt-0 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                        {exp.companyLink ? (
                          <a
                            href={exp.companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
                          >
                            {exp.company[locale]}
                          </a>
                        ) : (
                          <p className="text-xs md:text-sm text-muted-foreground">{exp.company[locale]}</p>
                        )}
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground mt-2 md:mt-4">{exp.description[locale]}</p>
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