import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || "fr";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const translations = {
    fr: {
      nav: {
        about: "À propos",
        projects: "Projets",
        demos: "Démonstrations",
        skills: "Compétences",
        certifications: "Certifications",
        experience: "Expérience",
        contact: "Contact",
      },
      hero: {
        badge: "Ingénieur IA/ML • Vision par Ordinateur • Systèmes RAG",
        headline: "Je construis des",
        headlineHighlight: "systèmes d’IA fiables",
        headlineSuffix: "pour des problèmes réels.",
        description: "Ingénieur d’État en Data Science, je conçois des systèmes d’IA complets et mesurables. Mes projets phares couvrent la vision par ordinateur en temps réel et les applications RAG/LLM contrôlées.",
        viewProjects: "Voir mes projets",
        downloadCV: "Télécharger le CV",
        follow: "Retrouvez-moi :",
        technologies: "Compétences principales",
        available: "Disponible dès fin août 2026",
        statValue: "2",
        statLabel: "systèmes IA phares",
        scroll: "Découvrir",
      },
      about: {
        title: "À propos",
        headline: "De l’idée au",
        headlineHighlight: "système mesurable.",
        description1: "Diplômé Ingénieur d’État en Data Science à SUP MTI Rabat, je termine actuellement un stage PFE de six mois chez NEXTRONIC, filiale d’ABA Technology. Mon objectif est de construire des solutions IA utilisables, évaluables et transparentes sur leurs limites.",
        description2: "J’ai développé OpenLegaMa, un assistant juridique marocain multilingue fondé sur un RAG contrôlé, des sources officielles, la validation des références et des citations, 143 tests automatisés, 610 cas de benchmark et 120 cas holdout.",
        description3: "Mon PFE est un système hybride de détection d’accidents combinant YOLOv11, BoT-SORT et analyse comportementale. Le modèle visuel a atteint 91,56 % de rappel, un F1-score de 89,06 % et 31,5 FPS sur le test image.",
        mission: "Construire des systèmes d’IA fiables, testables et utiles — pas seulement des démonstrations impressionnantes.",
        highlights: {
          ai: "RAG & LLM fiables",
          aiDesc: "Routage contrôlé, retrieval, validation des sources, abstention et évaluation multilingue.",
          mlops: "ML Engineering",
          mlopsDesc: "Tests, benchmarks, reproductibilité, suivi des expériences et préparation au déploiement.",
          bigdata: "Vision par Ordinateur",
          bigdataDesc: "Détection, tracking vidéo, analyse de trajectoires et décisions en temps réel avec YOLO et OpenCV.",
          fullstack: "Produit IA de bout en bout",
          fullstackDesc: "Interfaces, APIs, logique métier et déploiement pour transformer les modèles en applications utilisables.",
        },
      },
      experience: {
        title: "Parcours professionnel",
        headline: "Une expérience centrée sur",
        headlineHighlight: "l’IA appliquée.",
        description: "Formation d’ingénieur, stage en Computer Vision et projets personnels en RAG/LLM : un parcours construit autour de systèmes IA concrets et mesurables.",
      },
      projects: {
        title: "Projets phares",
        headline: "Des systèmes IA",
        headlineHighlight: "démontrés par des preuves.",
        description: "Architecture, code, métriques, tests, démonstrations et limites connues : chaque projet est présenté comme une étude de cas d’ingénierie.",
        viewAll: "Voir tous les projets et démonstrations",
      },
      testimonials: {
        title: "Principes d’ingénierie",
        headline: "Construire avec",
        headlineHighlight: "rigueur et transparence.",
      },
      contact: {
        title: "Contact",
        headline: "Parlons de",
        headlineHighlight: "votre besoin IA.",
        description: "Vous recrutez un profil AI/ML, Computer Vision ou RAG/LLM ? Contactez-moi pour échanger sur vos besoins, le poste et les systèmes que je peux contribuer à construire.",
        name: "Nom",
        email: "Email",
        message: "Message",
        send: "Envoyer",
        sending: "Envoi...",
        success: "Message envoyé avec succès. Je vous répondrai rapidement.",
        error: "Échec de l’envoi. Veuillez réessayer plus tard.",
        contactInfo: "Coordonnées",
        available: "Disponibilité",
        availableDesc: "Ouvert aux opportunités CDI à partir de fin août 2026 à Rabat, Casablanca, en hybride ou à distance.",
      },
      footer: {
        copyright: "© {year} Youssef Bouzit. Tous droits réservés.",
      },
    },
    en: {
      nav: {
        about: "About",
        projects: "Projects",
        demos: "Demos",
        skills: "Skills",
        certifications: "Certifications",
        experience: "Experience",
        contact: "Contact",
      },
      hero: {
        badge: "AI/ML Engineer • Computer Vision • RAG Systems",
        headline: "I build",
        headlineHighlight: "reliable AI systems",
        headlineSuffix: "for real-world problems.",
        description: "State Engineer in Data Science designing complete and measurable AI systems. My flagship work covers real-time Computer Vision and controlled RAG/LLM applications.",
        viewProjects: "View my projects",
        downloadCV: "Download resume",
        follow: "Find me on:",
        technologies: "Core capabilities",
        available: "Available from late August 2026",
        statValue: "2",
        statLabel: "flagship AI systems",
        scroll: "Explore",
      },
      about: {
        title: "About",
        headline: "From idea to a",
        headlineHighlight: "measurable system.",
        description1: "I hold a State Engineering degree in Data Science from SUP MTI Rabat and am completing a six-month final-year internship at NEXTRONIC, an ABA Technology subsidiary. I focus on building AI solutions that are usable, evaluable and transparent about their limitations.",
        description2: "I developed OpenLegaMa, a multilingual Moroccan legal assistant based on controlled RAG, official sources, exact-reference and citation validation, 143 automated tests, 610 benchmark cases and 120 independent holdout cases.",
        description3: "My graduation project is a hybrid road-accident detection system combining YOLOv11, BoT-SORT and behavioral analysis. The visual model achieved 91.56% recall, an F1-score of 89.06% and 31.5 FPS on the image test.",
        mission: "Build AI systems that are reliable, testable and useful — not merely impressive demonstrations.",
        highlights: {
          ai: "Reliable RAG & LLMs",
          aiDesc: "Controlled routing, retrieval, source validation, abstention and multilingual evaluation.",
          mlops: "ML Engineering",
          mlopsDesc: "Testing, benchmarks, reproducibility, experiment tracking and deployment readiness.",
          bigdata: "Computer Vision",
          bigdataDesc: "Detection, video tracking, trajectory analysis and real-time decisions with YOLO and OpenCV.",
          fullstack: "End-to-end AI products",
          fullstackDesc: "Interfaces, APIs, business logic and deployment that turn models into usable applications.",
        },
      },
      experience: {
        title: "Professional journey",
        headline: "Experience focused on",
        headlineHighlight: "applied AI.",
        description: "Engineering education, a Computer Vision internship and independent RAG/LLM projects — all centered on concrete, measurable AI systems.",
      },
      projects: {
        title: "Flagship projects",
        headline: "AI systems backed by",
        headlineHighlight: "real evidence.",
        description: "Architecture, code, metrics, tests, demos and known limitations: each project is presented as an engineering case study.",
        viewAll: "View all projects and demos",
      },
      testimonials: {
        title: "Engineering principles",
        headline: "Building with",
        headlineHighlight: "rigor and transparency.",
      },
      contact: {
        title: "Contact",
        headline: "Let’s discuss",
        headlineHighlight: "your AI needs.",
        description: "Hiring for an AI/ML, Computer Vision or RAG/LLM role? Contact me to discuss the position, your technical needs and the systems I can help build.",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        sending: "Sending...",
        success: "Message sent successfully. I will get back to you shortly.",
        error: "Message delivery failed. Please try again later.",
        contactInfo: "Contact details",
        available: "Availability",
        availableDesc: "Open to full-time opportunities from late August 2026 in Rabat, Casablanca, hybrid and remote environments.",
      },
      footer: {
        copyright: "© {year} Youssef Bouzit. All rights reserved.",
      },
    },
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
