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
    // Get language from localStorage or default to 'fr'
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || "fr";
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const translations = {
    fr: {
      // Navigation
      nav: {
        about: "À propos",
        projects: "Projets",
        demos: "Project Demos",
        skills: "Compétences",
        certifications: "Certifications",
        experience: "Expérience",
        contact: "Contact",
      },
      // Hero
      hero: {
        badge: "Ingénieur d’État en Data Science • IA & Vision par Ordinateur",
        headline: "Construire des solutions",
        headlineHighlight: "intelligentes",
        headlineSuffix: "pour un impact réel.",
        description: "Bonjour, je suis Youssef Bouzit — Ingénieur d’État diplômé en Data Science à SUP’MTI Rabat, actuellement stagiaire ingénieur en IA & Vision par Ordinateur chez NEXTRONIC, filiale d’ABA Technology. Je conçois des systèmes intelligents et robustes destinés à résoudre des problèmes concrets.",
        contact: "Me Contacter",
        downloadCV: "Télécharger CV",
        follow: "Suivez-moi :",
        technologies: "Technologies avec lesquelles je travaille",
        available: "Actuellement Disponible",
        scroll: "Défiler",
      },
      // About
      about: {
        title: "À Propos de Moi",
        headline: "Transformer les données en",
        headlineHighlight: "solutions intelligentes.",
        description1: "Diplômé du cycle d’Ingénieur d’État en Data Science à SUP’MTI Rabat, je réalise actuellement la dernière phase de mon stage PFE chez NEXTRONIC, filiale d’ABA Technology. J’y développe un système de détection en temps réel des accidents de la route par vision par ordinateur et deep learning.",
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
      // Experience
      experience: {
        title: "Parcours Professionnel",
        headline: "L’expérience façonnée par",
        headlineHighlight: "l’innovation & l’impact.",
        description: "Un parcours allant de la formation d’ingénieur à la conception de systèmes d’intelligence artificielle, de vision par ordinateur et de data science appliqués à des problématiques réelles.",
      },
      // Projects
      projects: {
        title: "Travail Mis en Avant",
        headline: "Projets IA qui",
        headlineHighlight: "stimulent l’innovation.",
        description: "Une sélection de mon travail en Data Science, IA et Machine Learning — de projets d’analyse de données à des systèmes intelligents et applications.",
        viewAll: "Voir Tous les Projets & Démos",
      },
      // Testimonials
      testimonials: {
        title: "Citations Inspirantes",
        headline: "Sagesse de",
        headlineHighlight: "leaders de l’industrie.",
      },
      // Contact
      contact: {
        title: "Entrer en Contact",
        headline: "Construisons",
        headlineHighlight: "quelque chose de génial.",
        description: "Avez-vous un projet en tête ? J’aimerais en entendre parler. Envoyez-moi un message et discutons de la façon dont nous pouvons travailler ensemble.",
        name: "Nom",
        email: "Email",
        message: "Message",
        send: "Envoyer le Message",
        sending: "Envoi...",
        success: "Message envoyé avec succès ! Je vous répondrai bientôt.",
        error: "Échec de l’envoi du message. Veuillez réessayer plus tard.",
        contactInfo: "Informations de Contact",
        available: "Actuellement Disponible",
        availableDesc: "Je suis ouvert à de nouvelles opportunités en CDI et à des projets ambitieux en intelligence artificielle, vision par ordinateur, machine learning et data science.",
      },
      // Footer
      footer: {
        copyright: "© {year} Youssef Bouzit. Tous droits réservés.",
      },
    },
    en: {
      // Navigation
      nav: {
        about: "About",
        projects: "Projects",
        demos: "Project Demos",
        skills: "Skills",
        certifications: "Certifications",
        experience: "Experience",
        contact: "Contact",
      },
      // Hero
      hero: {
        badge: "State-Certified Data Science Engineer • AI & Computer Vision",
        headline: "Building intelligent",
        headlineHighlight: "AI solutions",
        headlineSuffix: "for real-world impact.",
        description: "Hi, I’m Youssef Bouzit — a State-Certified Data Science Engineer from SUP’MTI Rabat, currently completing an AI & Computer Vision engineering internship at NEXTRONIC, an ABA Technology subsidiary. I build intelligent and robust systems designed to solve real-world problems.",
        contact: "Contact Me",
        downloadCV: "Download CV",
        follow: "Follow me:",
        technologies: "Technologies I work with",
        available: "Currently Available",
        scroll: "Scroll",
      },
      // About
      about: {
        title: "About Me",
        headline: "Transforming data into",
        headlineHighlight: "intelligent solutions.",
        description1: "I hold a State Engineering degree in Data Science from SUP’MTI Rabat and am currently completing the final phase of my graduation internship at NEXTRONIC, an ABA Technology subsidiary. My work focuses on a real-time road accident detection system using computer vision and deep learning.",
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
      // Experience
      experience: {
        title: "Career Journey",
        headline: "Experience shaped by",
        headlineHighlight: "innovation & impact.",
        description: "A journey from engineering education to building applied artificial intelligence, computer vision, and data science systems for real-world challenges.",
      },
      // Projects
      projects: {
        title: "Featured Work",
        headline: "AI Projects that",
        headlineHighlight: "drive innovation.",
        description: "A selection of my work in Data Science, AI, and Machine Learning — from data analysis projects to intelligent systems and applications.",
        viewAll: "View All Projects & Demos",
      },
      // Testimonials
      testimonials: {
        title: "Inspirational Quotes",
        headline: "Wisdom from",
        headlineHighlight: "industry leaders.",
      },
      // Contact
      contact: {
        title: "Get In Touch",
        headline: "Let’s build",
        headlineHighlight: "something great.",
        description: "Have a project in mind? I’d love to hear about it. Send me a message and let’s discuss how we can work together.",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully! I’ll get back to you soon.",
        error: "Failed to send message. Please try again later.",
        contactInfo: "Contact Information",
        available: "Currently Available",
        availableDesc: "I am open to full-time opportunities and ambitious projects in artificial intelligence, computer vision, machine learning, and data science.",
      },
      // Footer
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