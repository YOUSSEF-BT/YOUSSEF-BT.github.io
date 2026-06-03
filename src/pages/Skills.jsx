import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Code, Database, Cpu, Server, FileText, Brain, Github, Cpu as CpuIcon, Database as DatabaseIcon, Code2, Layout, Server as ServerIcon, FileText as FileTextIcon } from "lucide-react";

// Technology icons mapping
const techIcons = {
  // Programming Languages
  "Python": <Code2 className="w-5 h-5" />,
  "R": <Code2 className="w-5 h-5" />,
  "MATLAB": <CpuIcon className="w-5 h-5" />,
  "Java": <Code2 className="w-5 h-5" />,
  "C": <Code2 className="w-5 h-5" />,
  "C#": <Code2 className="w-5 h-5" />,
  ".NET": <Code2 className="w-5 h-5" />,
  "JavaScript": <Code2 className="w-5 h-5" />,
  "PHP": <Code2 className="w-5 h-5" />,
  "Laravel": <Code2 className="w-5 h-5" />,
  "HTML5": <Layout className="w-5 h-5" />,
  "CSS3": <Layout className="w-5 h-5" />,
  "Bootstrap": <Layout className="w-5 h-5" />,
  "XML": <Code2 className="w-5 h-5" />,
  "TypeScript": <Code2 className="w-5 h-5" />,
  "Node.js": <ServerIcon className="w-5 h-5" />,

  // Data & AI
  "Machine Learning": <Brain className="w-5 h-5" />,
  "Deep Learning": <Brain className="w-5 h-5" />,
  "AI": <Brain className="w-5 h-5" />,
  "Signal Processing": <CpuIcon className="w-5 h-5" />,
  "Image Processing": <CpuIcon className="w-5 h-5" />,
  "Streamlit": <Code2 className="w-5 h-5" />,
  "TensorFlow": <Brain className="w-5 h-5" />,
  "Scikit-learn": <Brain className="w-5 h-5" />,
  "XGBoost": <Brain className="w-5 h-5" />,
  "NLP": <Brain className="w-5 h-5" />,

  // Data Analysis & BI
  "SQL": <DatabaseIcon className="w-5 h-5" />,
  "MySQL": <DatabaseIcon className="w-5 h-5" />,
  "PL/SQL": <DatabaseIcon className="w-5 h-5" />,
  "Oracle Database": <DatabaseIcon className="w-5 h-5" />,
  "Tableau": <Layout className="w-5 h-5" />,
  "Power BI": <Layout className="w-5 h-5" />,
  "Excel": <FileTextIcon className="w-5 h-5" />,
  "Hadoop": <ServerIcon className="w-5 h-5" />,
  "LabVIEW": <CpuIcon className="w-5 h-5" />,

  // DevOps & Infrastructure
  "Docker": <ServerIcon className="w-5 h-5" />,
  "Linux": <ServerIcon className="w-5 h-5" />,
  "Ubuntu": <ServerIcon className="w-5 h-5" />,
  "Red Hat": <ServerIcon className="w-5 h-5" />,
  "Windows Admin": <ServerIcon className="w-5 h-5" />,
  "Web Scraping": <Code2 className="w-5 h-5" />,

  // Office & Documentation
  "Microsoft Word": <FileTextIcon className="w-5 h-5" />,
  "Microsoft Excel": <FileTextIcon className="w-5 h-5" />,

  // AI Prompt Engineering
  "Prompt Engineering": <Brain className="w-5 h-5" />,
  "ChatGPT": <Brain className="w-5 h-5" />,
  "DeepSeek": <Brain className="w-5 h-5" />,
  "Claude": <Brain className="w-5 h-5" />,

  // Default icon for unknown technologies
  "default": <Code className="w-5 h-5" />,
};

const skillCategories = [
  {
    id: "data-science",
    name: "Data Science & AI",
    icon: <Brain className="w-6 h-6" />,
    color: "from-blue-500 to-purple-600",
    skills: [
      "Python",
      "R",
      "MATLAB",
      "Machine Learning",
      "Deep Learning",
      "AI",
      "Signal Processing",
      "Image Processing",
      "Streamlit",
    ],
  },
  {
    id: "prompt-engineering",
    name: "AI Prompt Engineering",
    icon: <Cpu className="w-6 h-6" />,
    color: "from-orange-500 to-red-600",
    skills: ["Prompt Engineering", "ChatGPT", "DeepSeek", "Claude"],
  },
  {
    id: "data-analysis",
    name: "Data Analysis & BI",
    icon: <Database className="w-6 h-6" />,
    color: "from-green-500 to-teal-600",
    skills: [
      "SQL",
      "MySQL",
      "PL/SQL",
      "Oracle Database",
      "Tableau",
      "Power BI",
      "Excel",
      "Hadoop",
      "LabVIEW",
    ],
  },
  {
    id: "programming",
    name: "Programming & Development",
    icon: <Code className="w-6 h-6" />,
    color: "from-yellow-500 to-orange-600",
    skills: [
      "Java",
      "JEE",
      "C",
      "C#",
      ".NET",
      "JavaScript",
      "PHP",
      "Laravel",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "XML",
    ],
  },
  {
    id: "devops",
    name: "DevOps & Infrastructure",
    icon: <Server className="w-6 h-6" />,
    color: "from-cyan-500 to-blue-600",
    skills: [
      "Docker",
      "Linux",
      "Ubuntu",
      "Red Hat",
      "Windows Admin",
      "Web Scraping",
    ],
  },
  {
    id: "office",
    name: "Office & Documentation",
    icon: <FileText className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-600",
    skills: ["Microsoft Word", "Microsoft Excel"],
  },
];

const professionalSkills = [
  { icon: "🔍", name: "Problem Solving & Analytical Thinking" },
  { icon: "🤝", name: "Team Collaboration & Communication" },
  { icon: "📊", name: "Project Management & Documentation" },
  { icon: "🚀", name: "Continuous Learning & Adaptability" },
  { icon: "💡", name: "Innovation & Creative Thinking" },
  { icon: "⏱️", name: "Time Management & Organization" },
  { icon: "🎯", name: "Prompt Engineering" },
];

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredSkills =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <div className="min-h-screen overflow-hidden pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg glass hover:bg-primary/10 hover:text-primary transition-all mb-6 md:mb-8"
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
          Back Home
        </Link>

        {/* Header */}
        <div className="max-w-3xl mb-10 md:mb-16">
          <span className="text-secondary-foreground text-xs md:text-sm font-medium tracking-wider uppercase animate-fade-in">
            💻 Technical Skills
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 md:mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            My
            <span className="font-serif italic font-normal text-foreground">
              {" "}
              expertise.
            </span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground animate-fade-in animation-delay-200">
            A comprehensive overview of my technical skills and professional
            expertise across multiple domains.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 md:mb-12 animate-fade-in animation-delay-300">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
              selectedCategory === "all"
                ? "bg-primary text-primary-foreground"
                : "glass hover:bg-primary/10 text-muted-foreground hover:text-foreground"
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "glass hover:bg-primary/10 text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-16">
          {filteredSkills.map((category, idx) => (
            <div
              key={category.id}
              className="group glass rounded-2xl overflow-hidden animate-fade-in hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${category.color} p-4 md:p-6 text-white group-hover:opacity-90 transition-opacity`}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-1.5 md:p-2 bg-white/20 rounded-lg backdrop-blur-sm group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="text-base md:text-xl font-bold">{category.name}</h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="p-4 md:p-6">
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="inline-flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-1 md:py-1.5 bg-primary/10 text-primary rounded-full text-[10px] md:text-sm font-medium border border-primary/30 hover:bg-primary/20 hover:scale-105 transition-all"
                    >
                      {techIcons[skill] || techIcons["default"]}
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Skills Section */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 animate-fade-in">
            Professional Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {professionalSkills.map((skill, idx) => (
              <div
                key={idx}
                className="group glass p-4 md:p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in hover:scale-105"
                style={{ animationDelay: `${(idx + 1) * 50}ms` }}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                  <p className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        <div className="group glass p-6 md:p-8 rounded-2xl border border-border/50 text-center animate-fade-in hover:border-primary/50 transition-all duration-300 hover:scale-105">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-primary transition-colors">Check My GitHub</h3>
          <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
            Explore my repositories and projects to see my skills in action.
          </p>
          <a
            href="https://github.com/YOUSSEF-BT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-semibold text-sm md:text-base group-hover:gap-3"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};
