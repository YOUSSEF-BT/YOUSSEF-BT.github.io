import { BriefcaseBusiness, GraduationCap, CheckCircle2, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import abaLogo from "@/assets/images/logos/ABA_Technology.png";
import supMtiLogo from "@/assets/images/logos/sup_mti.png";
import { FIVERR_LOGO_URL, FIVERR_PROFILE_URL } from "@/components/FiverrLogo";

const workExperiences = [
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
      en: "Fiverr",
      fr: "Fiverr",
    },
    companyDetail: {
      en: "Independent AI/ML Services",
      fr: "Services indépendants en IA/ML",
    },
    companyLink: FIVERR_PROFILE_URL,
    description: {
      en: "Designing and delivering practical AI solutions for client use cases, with a focus on retrieval, LLM applications, intelligent automation, and applied machine learning.",
      fr: "Conception et réalisation de solutions IA concrètes pour des besoins clients, avec un focus sur la recherche documentaire, les applications LLM, l’automatisation intelligente et le Machine Learning appliqué.",
    },
    highlights: {
      en: [
        "RAG systems and LLM-powered applications",
        "AI agents and document intelligence workflows",
        "Machine Learning and Computer Vision solutions",
      ],
      fr: [
        "Systèmes RAG et applications basées sur les LLM",
        "Agents IA et workflows d’intelligence documentaire",
        "Solutions de Machine Learning et vision par ordinateur",
      ],
    },
    technologies: ["RAG", "LLMs", "AI Agents", "Python", "Machine Learning"],
    current: true,
    logo: FIVERR_LOGO_URL,
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
      en: "NEXTRONIC — ABA Technology",
      fr: "NEXTRONIC — ABA Technology",
    },
    companyDetail: {
      en: "Casablanca Technopark",
      fr: "Technopark Casablanca",
    },
    companyLink: "https://aba.technology/",
    description: {
      en: "Designed and developed a real-time road accident detection system combining deep learning, multi-object tracking, and behavioral analysis for CCTV-based monitoring.",
      fr: "Conception et développement d’un système de détection en temps réel des accidents de la route combinant Deep Learning, suivi multi-objets et analyse comportementale pour la vidéosurveillance.",
    },
    highlights: {
      en: [
        "YOLOv11s image model: 86.68% precision and 91.56% recall",
        "Real-time inference at approximately 31.5 FPS",
        "Automated alerts, video clip preservation, and CSV event logging",
      ],
      fr: [
        "Modèle image YOLOv11s : 86,68 % de précision et 91,56 % de rappel",
        "Inférence temps réel à environ 31,5 FPS",
        "Alertes automatiques, sauvegarde des clips vidéo et journalisation CSV",
      ],
    },
    technologies: ["Python", "YOLO", "OpenCV", "BoT-SORT", "Deep Learning"],
    current: false,
    logo: abaLogo,
    logoClassName: "w-full h-full object-cover filter brightness-90",
  },
];

const education = [
  {
    period: {
      en: "Oct 2023 — Jul 2026",
      fr: "Oct 2023 — Juil 2026",
    },
    degree: {
      en: "State Engineering Degree in Data Science",
      fr: "Diplôme d’Ingénieur d’État en Data Science",
    },
    school: "SUP'MTI Rabat",
    detail: {
      en: "Engineering Cycle — Data Science specialization",
      fr: "Cycle d’ingénieur — spécialisation Data Science",
    },
    description: {
      en: "Engineering curriculum covering Data Science, Machine Learning, Artificial Intelligence, Big Data, MLOps, and software engineering. Graduation project defended with an Excellent distinction and a score of 18/20.",
      fr: "Formation d’ingénieur couvrant la Data Science, le Machine Learning, l’intelligence artificielle, le Big Data, le MLOps et l’ingénierie logicielle. Projet de fin d’études soutenu avec la mention Excellent et une note de 18/20.",
    },
    schoolLink: "https://supmti.ac.ma/ingenierie-data-science-et-iot/",
    technologies: ["Data Science", "Machine Learning", "AI", "Big Data", "MLOps"],
  },
  {
    period: {
      en: "Oct 2021 — Jul 2023",
      fr: "Oct 2021 — Juil 2023",
    },
    degree: {
      en: "Preparatory Classes",
      fr: "Classes préparatoires",
    },
    school: "SUP'MTI Rabat",
    detail: {
      en: "Engineering Preparatory Program",
      fr: "Cycle préparatoire aux études d’ingénieur",
    },
    description: {
      en: "Intensive foundation in mathematics, physics, computer science, algorithms, and engineering fundamentals before entering the engineering cycle.",
      fr: "Formation intensive en mathématiques, physique, informatique, algorithmique et fondamentaux de l’ingénierie avant l’entrée en cycle d’ingénieur.",
    },
    schoolLink: "https://supmti.ac.ma/classes-preparatoires-technologies-de-linformation/",
    technologies: ["Mathematics", "Physics", "Computer Science", "Algorithms"],
  },
];

export const Experience = () => {
  const { t, language } = useLanguage();
  const locale = language === "fr" ? "fr" : "en";

  const sectionCopy =
    locale === "fr"
      ? {
          experienceLabel: "Expérience professionnelle",
          experienceTitle: "Une expérience orientée vers des systèmes d’IA",
          experienceHighlight: "concrets.",
          experienceDescription:
            "Expérience professionnelle en IA/ML, de la vision par ordinateur en temps réel aux systèmes RAG, LLM et solutions IA appliquées.",
          educationLabel: "Formation",
          educationTitle: "Parcours académique",
          educationDescription:
            "Une formation d’ingénieur centrée sur la Data Science, l’intelligence artificielle et les fondamentaux techniques nécessaires pour construire des systèmes fiables.",
          current: "Actuel",
        }
      : {
          experienceLabel: "Professional Experience",
          experienceTitle: "Experience focused on building practical AI",
          experienceHighlight: "systems.",
          experienceDescription:
            "Professional AI/ML experience spanning real-time computer vision, RAG systems, LLM applications, and applied machine learning solutions.",
          educationLabel: "Education",
          educationTitle: "Academic background",
          educationDescription:
            "An engineering foundation in Data Science, Artificial Intelligence, and the technical disciplines required to build reliable production-oriented systems.",
          current: "Current",
        };

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 text-primary text-xs md:text-sm font-medium tracking-wider uppercase animate-fade-in">
            <BriefcaseBusiness className="w-4 h-4" />
            <span>{sectionCopy.experienceLabel}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 md:mb-5 animate-fade-in animation-delay-100 text-secondary-foreground">
            {sectionCopy.experienceTitle}{" "}
            <span className="font-serif italic font-normal text-foreground">
              {sectionCopy.experienceHighlight}
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl animate-fade-in animation-delay-200">
            {sectionCopy.experienceDescription}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 md:gap-7">
          {workExperiences.map((exp, idx) => (
            <article
              key={exp.role.en}
              className="group glass rounded-3xl border border-border/60 hover:border-primary/40 transition-all duration-300 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 120}ms` }}
            >
              <div className="p-5 sm:p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <a
                      href={exp.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border border-primary/20 bg-background/70 flex-shrink-0 transition-transform duration-300 group-hover:scale-[1.03]"
                      aria-label={`${exp.company[locale]} website`}
                    >
                      <img
                        src={exp.logo}
                        alt={`${exp.company[locale]} logo`}
                        className={exp.logoClassName}
                      />
                    </a>

                    <div className="min-w-0">
                      <h3 className="text-lg md:text-xl font-semibold leading-tight text-foreground">
                        {exp.role[locale]}
                      </h3>
                      <a
                        href={exp.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-1 text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <span>{exp.company[locale]}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                        {exp.companyDetail[locale]}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <span className="text-[11px] md:text-xs font-medium text-primary bg-primary/8 border border-primary/15 rounded-full px-2.5 py-1 whitespace-nowrap">
                      {exp.period[locale]}
                    </span>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 text-[10px] md:text-xs text-emerald-500 font-medium">
                        <span className="relative flex w-2 h-2">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                          <span className="relative inline-flex h-full w-full rounded-full bg-emerald-500" />
                        </span>
                        {sectionCopy.current}
                      </span>
                    )}
                  </div>
                </div>

                <p className="mt-5 text-sm md:text-[15px] leading-relaxed text-foreground/75">
                  {exp.description[locale]}
                </p>

                <div className="mt-5 space-y-2.5">
                  {exp.highlights[locale].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground/90 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-5 border-t border-border/50 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-surface/70 border border-border/60 text-[10px] md:text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 md:mt-28">
          <div className="max-w-4xl mb-9 md:mb-12">
            <div className="inline-flex items-center gap-2 text-primary text-xs md:text-sm font-medium tracking-wider uppercase">
              <GraduationCap className="w-4 h-4" />
              <span>{sectionCopy.educationLabel}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 mb-3 text-secondary-foreground">
              {sectionCopy.educationTitle}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground max-w-3xl">
              {sectionCopy.educationDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-7">
            {education.map((item) => (
              <article
                key={item.degree.en}
                className="glass rounded-3xl border border-border/60 hover:border-primary/35 transition-all duration-300 p-5 sm:p-6 md:p-7"
              >
                <div className="flex items-start gap-4">
                  <a
                    href={item.schoolLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border border-primary/20 bg-white flex-shrink-0 p-2"
                    aria-label={`${item.school} website`}
                  >
                    <img
                      src={supMtiLogo}
                      alt="SUP'MTI logo"
                      className="w-full h-full object-contain"
                    />
                  </a>

                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] md:text-xs font-medium text-primary">
                      {item.period[locale]}
                    </span>
                    <h4 className="text-lg md:text-xl font-semibold mt-1 leading-tight">
                      {item.degree[locale]}
                    </h4>
                    <a
                      href={item.schoolLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-1.5 text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.school}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                      {item.detail[locale]}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm md:text-[15px] leading-relaxed text-foreground/75">
                  {item.description[locale]}
                </p>

                <div className="mt-5 pt-5 border-t border-border/50 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-surface/70 border border-border/60 text-[10px] md:text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};