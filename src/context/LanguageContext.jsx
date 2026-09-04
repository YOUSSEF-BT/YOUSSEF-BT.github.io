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
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const translations = {
    fr: {
      nav: {
        about: "À propos",
        projects: "Projets",
        demos: "Démos de projets",
        skills: "Compétences",
        certifications: "Certifications",
        experience: "Expérience",
        contact: "Contact",
      },
      hero: {
        badge: "Ingénieur d’État en Data Science",
        headline: "Construire des solutions",
        headlineHighlight: "intelligentes",
        headlineSuffix: "pour un impact réel.",
        description: "Bonjour, je suis Youssef Bouzit — Ingénieur d’État diplômé en Data Science à SUP’MTI Rabat. J’ai terminé un stage de six mois en IA & Vision par Ordinateur chez NEXTRONIC, filiale d’ABA Technology, au cours duquel j’ai conçu un système de détection en temps réel des accidents de la route. Je conçois des systèmes intelligents, robustes et destinés à résoudre des problèmes concrets.",
        contact: "Me contacter",
        downloadCV: "Télécharger le CV",
        follow: "Suivez-moi :",
        technologies: "Technologies principales",
        available: "Actuellement disponible",
        availableForWork: "Disponible pour travailler",
        yearsExp: "An d’expérience",
        fiverrTitle: "Fiverr — Me contacter pour une mission",
        scroll: "Défiler",
      },
      about: {
        title: "À propos de moi",
        headline: "Transformer les données en",
        headlineHighlight: "solutions intelligentes.",
        description1: "Diplômé du cycle d’Ingénieur d’État en Data Science à SUP’MTI Rabat, j’ai terminé un stage PFE de six mois chez NEXTRONIC, filiale d’ABA Technology. J’y ai conçu et développé un système de détection en temps réel des accidents de la route par vision par ordinateur et deep learning.",
        description2: "Mon expertise technique couvre Python, la data science, le machine learning, le deep learning, la vision par ordinateur et le MLOps. Je possède également des compétences en développement full-stack avec JavaScript, TypeScript, Node.js, PHP et C#, ce qui me permet de construire des solutions IA complètes, de l’expérimentation jusqu’à l’intégration.",
        description3: "Mon projet de fin d’études, soutenu avec la mention Excellent et une note de 18/20, combine YOLO, BoT-SORT et une logique heuristique pour détecter les accidents routiers en temps réel. Je recherche désormais une opportunité en CDI comme AI Engineer, Computer Vision Engineer, Machine Learning Engineer ou Data Scientist.",
        mission: "Ma mission est de concevoir des solutions d’IA fiables, performantes et utiles, capables de transformer les données en impact concret.",
        highlights: {
          ai: "IA & Machine Learning",
          aiDesc: "Construire des systèmes intelligents utilisant Python, TensorFlow et des algorithmes ML avancés pour la détection, la prédiction et l’aide à la décision.",
          mlops: "MLOps & DevOps",
          mlopsDesc: "Implémenter des pipelines MLOps complets avec Airflow, MLflow et déploiement automatisé pour les systèmes ML en production.",
          bigdata: "Vision & Deep Learning",
          bigdataDesc: "Développer des solutions de vision par ordinateur avec YOLO, OpenCV et des modèles de deep learning pour l’analyse d’images et de vidéos.",
          fullstack: "Développement Full-Stack",
          fullstackDesc: "Construire des applications complètes avec TypeScript, JavaScript, Node.js et des frameworks modernes pour intégrer et valoriser les modèles IA.",
        },
      },
      experience: {
        title: "Parcours professionnel",
        headline: "L’expérience façonnée par",
        headlineHighlight: "l’innovation & l’impact.",
        description: "Un parcours allant de la formation d’ingénieur à la conception de systèmes d’intelligence artificielle, de vision par ordinateur et de data science appliqués à des problématiques réelles.",
      },
      projects: {
        title: "Travaux sélectionnés",
        headline: "Des projets IA qui",
        headlineHighlight: "créent de l’impact.",
        description: "Une sélection de mes travaux en Data Science, intelligence artificielle et Machine Learning — de l’analyse de données aux systèmes intelligents et applications IA.",
        viewAll: "Voir tous les projets & démos",
      },
      certifications: {
        title: "Certifications",
        headline: "Certifications",
        headlineHighlight: "professionnelles",
        description: "Une sélection de certifications et formations qui valident mes compétences en Data Science, intelligence artificielle et ingénierie.",
        viewAll: "Voir toutes les certifications",
      },
      testimonials: {
        title: "Citations inspirantes",
        headline: "Sagesse de",
        headlineHighlight: "leaders de l’industrie.",
      },
      contact: {
        title: "Entrer en contact",
        headline: "Construisons",
        headlineHighlight: "quelque chose de génial.",
        description: "Vous avez un projet ou une opportunité en tête ? Envoyez-moi un message et discutons de la manière dont nous pouvons travailler ensemble.",
        name: "Nom",
        email: "E-mail",
        message: "Message",
        send: "Envoyer le message",
        sending: "Envoi...",
        success: "Message envoyé avec succès ! Je vous répondrai bientôt.",
        error: "Échec de l’envoi du message. Veuillez réessayer plus tard.",
        contactInfo: "Informations de contact",
        available: "Disponible pour des opportunités",
        availableDesc: "Ouvert aux opportunités en CDI dans l’IA/ML, aux collaborations techniques et à une sélection de missions freelance.",
        fiverrCta: "Profil Fiverr",
      },
      footer: {
        copyright: "© {year} Youssef Bouzit. Tous droits réservés.",
      },
    },
    en: {
      nav: {
        about: "About",
        projects: "Projects",
        demos: "Project Demos",
        skills: "Skills",
        certifications: "Certifications",
        experience: "Experience",
        contact: "Contact",
      },
      hero: {
        badge: "State-Certified Data Science Engineer",
        headline: "Building intelligent",
        headlineHighlight: "AI solutions",
        headlineSuffix: "for real-world impact.",
        description: "Hi, I’m Youssef Bouzit — a State-Certified Data Science Engineer from SUP’MTI Rabat. I completed a six-month AI & Computer Vision engineering internship at NEXTRONIC, an ABA Technology subsidiary, where I designed a real-time road accident detection system. I build intelligent and robust systems designed to solve real-world problems.",
        contact: "Contact Me",
        downloadCV: "Download CV",
        follow: "Follow me:",
        technologies: "Core technologies",
        available: "Currently Available",
        availableForWork: "Available for work",
        yearsExp: "Years Exp",
        fiverrTitle: "Fiverr — Hire me",
        scroll: "Scroll",
      },
      about: {
        title: "About Me",
        headline: "Transforming data into",
        headlineHighlight: "intelligent solutions.",
        description1: "I hold a State Engineering degree in Data Science from SUP’MTI Rabat and completed a six-month graduation internship at NEXTRONIC, an ABA Technology subsidiary. During this experience, I designed and developed a real-time road accident detection system using computer vision and deep learning.",
        description2: "My technical expertise covers Python, data science, machine learning, deep learning, computer vision, and MLOps. I also have full-stack development skills with JavaScript, TypeScript, Node.js, PHP, and C#, allowing me to build complete AI solutions from experimentation to integration.",
        description3: "My graduation project received an Excellent distinction with a score of 18/20. It combines YOLO, BoT-SORT, and heuristic logic to detect road accidents in real time. I am now seeking a full-time opportunity as an AI Engineer, Computer Vision Engineer, Machine Learning Engineer, or Data Scientist.",
        mission: "My mission is to design reliable, high-performance, and useful AI solutions that transform data into measurable real-world impact.",
        highlights: {
          ai: "AI & Machine Learning",
          aiDesc: "Building intelligent systems using Python, TensorFlow, and advanced ML algorithms for detection, prediction, and decision support.",
          mlops: "MLOps & DevOps",
          mlopsDesc: "Implementing complete MLOps pipelines with Airflow, MLflow, and automated deployment for production ML systems.",
          bigdata: "Computer Vision & Deep Learning",
          bigdataDesc: "Developing computer vision solutions with YOLO, OpenCV, and deep learning models for image and video analysis.",
          fullstack: "Full-Stack Development",
          fullstackDesc: "Building complete applications with TypeScript, JavaScript, Node.js, and modern frameworks to integrate and deliver AI models.",
        },
      },
      experience: {
        title: "Career Journey",
        headline: "Experience shaped by",
        headlineHighlight: "innovation & impact.",
        description: "A journey from engineering education to building applied artificial intelligence, computer vision, and data science systems for real-world challenges.",
      },
      projects: {
        title: "Featured Work",
        headline: "AI Projects that",
        headlineHighlight: "drive innovation.",
        description: "A selection of my work in Data Science, AI, and Machine Learning — from data analysis projects to intelligent systems and applications.",
        viewAll: "View All Projects & Demos",
      },
      certifications: {
        title: "Certifications",
        headline: "Professional",
        headlineHighlight: "Certifications",
        description: "A selection of certifications and training programs that validate my expertise in Data Science, AI, and engineering.",
        viewAll: "View All Certifications",
      },
      testimonials: {
        title: "Inspirational Quotes",
        headline: "Wisdom from",
        headlineHighlight: "industry leaders.",
      },
      contact: {
        title: "Get In Touch",
        headline: "Let’s build",
        headlineHighlight: "something great.",
        description: "Have a project or opportunity in mind? Send me a message and let’s discuss how we can work together.",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully! I’ll get back to you soon.",
        error: "Failed to send message. Please try again later.",
        contactInfo: "Contact Information",
        available: "Available for opportunities",
        availableDesc: "Open to full-time AI/ML opportunities, technical collaborations, and selected freelance projects.",
        fiverrCta: "Fiverr Profile",
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