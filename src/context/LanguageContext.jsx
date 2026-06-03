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
        badge: "Étudiant en Ingénierie Data Science • Stagiaire en IA & Vision par Ordinateur",
        headline: "Construire des solutions",
        headlineHighlight: "intelligentes",
        headlineSuffix: "pour un impact réel.",
        description: "Bonjour, je suis Youssef Bouzit — Étudiant en dernière année d'Ingénierie Data Science et stagiaire en IA & Vision par Ordinateur chez ABA Technologie. Je me spécialise dans l'IA, la vision par ordinateur et la robustesse des modèles, construisant des systèmes intelligents qui résolvent des problèmes réels.",
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
        description1: "Actuellement en dernière année d'Ingénierie Data Science à SUP MTI Rabat, je suis en stage chez ABA Technologie où je développe des systèmes de vision par ordinateur et travaille sur la robustesse des modèles IA. Mon parcours combine une formation académique solide en machine learning avec une expérience pratique dans la création de solutions IA concrètes et industrielles.",
        description2: "Mon expertise technique couvre l'écosystème Python (data science, machine learning, MLOps), les langages statistiques (R, MATLAB), ainsi que le développement full-stack (JavaScript, TypeScript, Node.js, PHP, C#). Je maîtrise également l'ingénierie de prompts avec ChatGPT et Claude, et j'excelle dans la transformation des données en insights actionnables.",
        description3: "Mon projet de fin d'études porte sur la construction de systèmes IA robustes, une problématique que j'approfondis actuellement chez ABA Technologie. Je suis désormais en recherche active d'opportunités en tant que Data Scientist, ML Engineer ou AI Engineer, que ce soit en CDI ou en freelance, avec pour ambition de créer des solutions innovantes qui allient rigueur technique et impact réel.",
        mission: "Ma mission est de tirer parti de l'IA et de la data science pour créer des solutions intelligentes qui résolvent des problèmes réels et stimulent l'innovation dans divers secteurs.",
        highlights: {
          ai: "IA & Machine Learning",
          aiDesc: "Construire des systèmes intelligents utilisant Python, TensorFlow et des algorithmes ML avancés pour la détection de fraude, l'analyse de sentiments et la modélisation prédictive.",
          mlops: "MLOps & DevOps",
          mlopsDesc: "Implémenter des pipelines MLOps complets avec Airflow, MLflow et déploiement automatisé pour les systèmes ML en production.",
          bigdata: "Big Data & NLP",
          bigdataDesc: "Traiter des données à grande échelle avec des technologies Big Data et NLP pour l'analyse de sentiments et le traitement de texte.",
          fullstack: "Développement Full-Stack",
          fullstackDesc: "Construire des applications complètes avec TypeScript, JavaScript, Node.js et frameworks modernes pour les plateformes de données.",
        },
      },
      // Experience
      experience: {
        title: "Parcours Professionnel",
        headline: "L'expérience façonnée par",
        headlineHighlight: "l'innovation & l'impact.",
        description: "Un parcours à travers l'éducation en data science, l'ingénierie IA et le développement professionnel — d'étudiant à stagiaire construisant des systèmes intelligents.",
      },
      // Projects
      projects: {
        title: "Travail Mis en Avant",
        headline: "Projets IA qui",
        headlineHighlight: "stimulent l'innovation.",
        description: "Une sélection de mon travail en Data Science, IA et Machine Learning — de projets d'analyse de données à des systèmes intelligents et applications.",
        viewAll: "Voir Tous les Projets & Démos",
      },
      // Testimonials
      testimonials: {
        title: "Citations Inspirantes",
        headline: "Sagesse de",
        headlineHighlight: "leaders de l'industrie.",
      },
      // Contact
      contact: {
        title: "Entrer en Contact",
        headline: "Construisons",
        headlineHighlight: "quelque chose de génial.",
        description: "Avez-vous un projet en tête ? J'aimerais en entendre parler. Envoyez-moi un message et discutons de la façon dont nous pouvons travailler ensemble.",
        name: "Nom",
        email: "Email",
        message: "Message",
        send: "Envoyer le Message",
        sending: "Envoi...",
        success: "Message envoyé avec succès ! Je vous répondrai bientôt.",
        error: "Échec de l'envoi du message. Veuillez réessayer plus tard.",
        contactInfo: "Informations de Contact",
        available: "Actuellement Disponible",
        availableDesc: "Je suis actuellement ouvert à de nouvelles opportunités et à des projets passionnants. Que vous ayez besoin d'un ingénieur à temps plein ou d'un consultant freelance, discutons-en !",
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
        badge: "Data Science Engineering Student • AI & Computer Vision Engineer Intern",
        headline: "Building intelligent",
        headlineHighlight: "AI solutions",
        headlineSuffix: "for real-world impact.",
        description: "Hi, I'm Youssef Bouzit — a Final-Year Data Science Engineering Student at SUP MTI Rabat, currently working as an AI & Computer Vision Engineer Intern at ABA Technologie. I specialize in AI, Computer Vision, and ensuring model robustness, focusing on building high-performance, intelligent systems engineered for real-world reliability.",
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
        description1: "Currently in my final year of Data Science Engineering at SUP MTI Rabat, I am interning at ABA Technologie where I develop computer vision systems and work on AI model robustness. My background combines a solid academic foundation in machine learning with hands-on experience in creating concrete and industrial AI solutions.",
        description2: "My technical expertise covers the Python ecosystem (data science, machine learning, MLOps), statistical languages (R, MATLAB), as well as full-stack development (JavaScript, TypeScript, Node.js, PHP, C#). I also master prompt engineering with ChatGPT and Claude, and excel at transforming data into actionable insights.",
        description3: "My final year project focuses on building robust AI systems, a challenge I am currently deepening at ABA Technologie. I am now actively seeking opportunities as a Data Scientist, ML Engineer, or AI Engineer, whether in full-time or freelance, with the ambition to create innovative solutions that combine technical rigor and real impact.",
        mission: "My mission is to leverage AI and data science to create intelligent solutions that solve real-world problems and drive innovation across industries.",
        highlights: {
          ai: "AI & Machine Learning",
          aiDesc: "Building intelligent systems using Python, TensorFlow, and advanced ML algorithms for fraud detection, sentiment analysis, and predictive modeling.",
          mlops: "MLOps & DevOps",
          mlopsDesc: "Implementing complete MLOps pipelines with Airflow, MLflow, and automated deployment for production ML systems.",
          bigdata: "Big Data & NLP",
          bigdataDesc: "Processing large-scale data with Big Data technologies and NLP for sentiment analysis and text processing.",
          fullstack: "Full-Stack Development",
          fullstackDesc: "Building complete applications with TypeScript, JavaScript, Node.js, and modern frameworks for data platforms.",
        },
      },
      // Experience
      experience: {
        title: "Career Journey",
        headline: "Experience shaped by",
        headlineHighlight: "innovation & impact.",
        description: "A journey through data science education, AI engineering, and professional development — from student to intern building intelligent systems.",
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
        headline: "Let's build",
        headlineHighlight: "something great.",
        description: "Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together.",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully! I'll get back to you soon.",
        error: "Failed to send message. Please try again later.",
        contactInfo: "Contact Information",
        available: "Currently Available",
        availableDesc: "I'm currently open to new opportunities and exciting projects. Whether you need a full-time engineer or a freelance consultant, let's talk!",
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