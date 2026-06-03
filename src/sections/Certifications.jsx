import { Award, ExternalLink, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const certifications = [
  {
    id: 35,
    title: "Data Science Foundations: Fundamentals",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Comprehensive introduction to data science fundamentals, covering essential concepts, methodologies, and tools for data analysis and interpretation.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_Data Science Foundations Fundamentals.pdf`,
  },
  {
    id: 32,
    title: "PyTorch Essential Training Deep Learning",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Comprehensive training in deep learning using PyTorch, covering neural networks, CNNs, RNNs, and advanced techniques.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_PyTorch Essential Training Deep Learning.pdf`,
  },
  {
    id: 27,
    title: "Big Data 101",
    issuer: "IBM Cognitive Class",
    date: "May 2026",
    description: "Comprehensive fundamentals of Big Data processing, Hadoop, Spark, and distributed computing systems.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/IBM BD0101EN Certificate _ Cognitive Class.pdf`,
  },
  {
    id: 5,
    title: "Claude 101",
    issuer: "Anthropic",
    date: "2026",
    description: "Comprehensive training in Claude AI assistant, prompt engineering, and AI interaction best practices.",
    icon: <Award className="w-6 h-6" />,
    link: "/Portfolio-Youssef-Bouzit/documents/certificate-669dhjfv4jgt-1778352102.pdf",
  },
  {
    id: 6,
    title: "AI Capabilities and Limitations",
    issuer: "Anthropic",
    date: "2026",
    description: "Advanced training in Claude Code for software development, code review, and AI-assisted programming.",
    icon: <Award className="w-6 h-6" />,
    link: "/Portfolio-Youssef-Bouzit/documents/certificate-5wfw9hexvaax-1778357308.pdf",
  },
  {
    id: 7,
    title: "AI Fluency for Educators",
    issuer: "Anthropic",
    date: "2026",
    description: "Training in AI fluency for educational contexts, understanding AI tools and their applications in teaching and learning.",
    icon: <Award className="w-6 h-6" />,
    link: "/Portfolio-Youssef-Bouzit/documents/certificate-qettazf8qd36-1778382716.pdf",
  },
  {
    id: 8,
    title: "Claude Code 101",
    issuer: "Anthropic",
    date: "2026",
    description: "Advanced training in Claude Code for software development, code review, and AI-assisted programming.",
    icon: <Award className="w-6 h-6" />,
    link: "/Portfolio-Youssef-Bouzit/documents/certificate-66qabf9vriu9-1778387150.pdf",
  },
  {
    id: 9,
    title: "AI Fluency for Students",
    issuer: "Anthropic",
    date: "2026",
    description: "Training in AI fluency for students, understanding AI tools and their applications in learning and development.",
    icon: <Award className="w-6 h-6" />,
    link: "/Portfolio-Youssef-Bouzit/documents/certificate-b9sh9wj2tb6b-1778427102.pdf",
  },
  {
    id: 10,
    title: "AI Fluency Framework & Foundations",
    issuer: "Anthropic",
    date: "2026",
    description: "Foundational training in AI fluency framework, understanding core AI concepts and their practical applications.",
    icon: <Award className="w-6 h-6" />,
    link: "/Portfolio-Youssef-Bouzit/documents/certificate-nr75vo6xp889-1778428242.pdf",
  },
  {
    id: 11,
    title: "Teaching the AI Fluency Framework",
    issuer: "Anthropic",
    date: "2026",
    description: "Advanced training in teaching the AI fluency framework, methodologies for educating others about AI concepts and applications.",
    icon: <Award className="w-6 h-6" />,
    link: "/Portfolio-Youssef-Bouzit/documents/certificate-p44jhhdgju3z-1778430859.pdf",
  },
  {
    id: 12,
    title: "AI Fluency for Nonprofits",
    issuer: "Anthropic",
    date: "2026",
    description: "Training in AI fluency for nonprofit organizations, understanding AI tools and their applications in social impact work.",
    icon: <Award className="w-6 h-6" />,
    link: "/Portfolio-Youssef-Bouzit/documents/certificate-nm4fhq8fjw3j-1778432578.pdf",
  },
  {
    id: 13,
    title: "Introduction to Claude Cowork",
    issuer: "Anthropic",
    date: "2026",
    description: "Introduction to Claude Cowork, understanding AI collaboration tools and their applications in team workflows.",
    icon: <Award className="w-6 h-6" />,
    link: "/Portfolio-Youssef-Bouzit/documents/certificate-7eahci6bmgxb-1778434353.pdf",
  },
  {
    id: 14,
    title: "Introduction to Agent Skills",
    issuer: "Anthropic",
    date: "2026",
    description: "Introduction to agent skills, understanding AI agent capabilities and their applications in automated workflows.",
    icon: <Award className="w-6 h-6" />,
    link: "/Portfolio-Youssef-Bouzit/documents/certificate-wy7mgcgom536-1778435984.pdf",
  },
  {
    id: 15,
    title: "Introduction to Subagents",
    issuer: "Anthropic",
    date: "2026",
    description: "Introduction to subagents, understanding hierarchical AI systems and their applications in complex task management.",
    icon: <Award className="w-6 h-6" />,
    link: "/Portfolio-Youssef-Bouzit/documents/certificate-mmyj2epvatui-1778436437.pdf",
  },
  {
    id: 16,
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    date: "2026",
    description: "Introduction to Model Context Protocol, understanding standardized communication between AI models and external tools.",
    icon: <Award className="w-6 h-6" />,
    link: "/Portfolio-Youssef-Bouzit/documents/certificate-twqnruaazwjq-1778439125.pdf",
  },
  {
    id: 17,
    title: "Claude with Google Cloud's Vertex AI",
    issuer: "Anthropic",
    date: "2026",
    description: "Training in integrating Claude with Google Cloud's Vertex AI platform for enterprise AI solutions.",
    icon: <Award className="w-6 h-6" />,
    link: "/Portfolio-Youssef-Bouzit/documents/certificate-hkxuzh9i8mbd-1778442324.pdf",
  },
  {
    id: 18,
    title: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic",
    date: "2026",
    description: "Advanced training in Model Context Protocol, exploring complex implementations and enterprise use cases.",
    icon: <Award className="w-6 h-6" />,
    link: "/Portfolio-Youssef-Bouzit/documents/certificate-pramdigjasq9-1778457583.pdf",
  },
  {
    id: 19,
    title: "Claude in Amazon Bedrock",
    issuer: "Anthropic",
    date: "2026",
    description: "Training in using Claude with Amazon Bedrock, understanding AWS integration and enterprise AI deployment.",
    icon: <Award className="w-6 h-6" />,
    link: "/Portfolio-Youssef-Bouzit/documents/certificate-rkepkwh37idh-1778460151.pdf",
  },
  {
    id: 20,
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "May 2026",
    description: "Practical training in Claude Code for real-world software development, including hands-on projects and advanced AI-assisted programming techniques.",
    icon: <Award className="w-6 h-6" />,
    link: "/Portfolio-Youssef-Bouzit/documents/certificate-gmxxb5rt47dw-1778508552.pdf",
  },
  {
    id: 21,
    title: "Building with the Claude API",
    issuer: "Anthropic",
    date: "May 2026",
    description: "Comprehensive training in building applications with the Claude API, including prompt engineering, API integration, and best practices for production deployments.",
    icon: <Award className="w-6 h-6" />,
    link: "/Portfolio-Youssef-Bouzit/documents/certificate-tharwi7o229k-1778507744.pdf",
  },
  {
    id: 22,
    title: "Hugging Face Community Computer Vision Course",
    issuer: "Hugging Face",
    date: "2026",
    description: "Ultra-modern community course with Vision Transformers, YOLO, SAM, multimodal, and more. Free certificate upon completion.",
    icon: <Award className="w-6 h-6" />,
    link: "https://huggingface.co/learn/computer-vision-course",
  },
  {
    id: 23,
    title: "FREE OpenCV Bootcamp",
    issuer: "OpenCV University",
    date: "May 2026",
    description: "Comprehensive training in OpenCV for computer vision applications, image processing, and real-time video analysis.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/OpenCV Free OpenCV Bootcamp Certificate _ OpenCV.pdf`,
  },
  {
    id: 24,
    title: "FREE Vision Language Models (VLM) Bootcamp",
    issuer: "OpenCV University",
    date: "May 2026",
    description: "Advanced training in Vision Language Models for multimodal AI applications, combining computer vision with natural language processing.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/VLM Bootcamp Free VLM Bootcamp Certificate _ OpenCV.pdf`,
  },
  {
    id: 25,
    title: "PyTorch Bootcamp",
    issuer: "OpenCV University",
    date: "May 2026",
    description: "Comprehensive training in PyTorch for deep learning, neural networks, and AI model development.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/PyTorch Bootcamp Free PyTorch Bootcamp Certificate _ OpenCV.pdf`,
  },
  {
    id: 26,
    title: "TensorFlow-Keras Bootcamp",
    issuer: "OpenCV University",
    date: "May 2026",
    description: "Comprehensive training in TensorFlow and Keras for deep learning, neural networks, and AI model development.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/Tensorflow Free Tensorflow Keras Bootcamp Certificate _ OpenCV.pdf`,
  },
  {
    id: 28,
    title: "Data Science 101",
    issuer: "IBM Cognitive Class",
    date: "May 2026",
    description: "Comprehensive introduction to data science fundamentals, statistical analysis, and machine learning basics.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/IBM DS0101EN Certificate _ Cognitive Class.pdf`,
  },
  {
    id: 29,
    title: "Prompt Engineering for Everyone",
    issuer: "IBM Cognitive Class",
    date: "May 2026",
    description: "Comprehensive training in prompt engineering techniques, best practices, and applications for AI models.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/IBMSkillsNetwork AI0117EN Certificate _ Cognitive Class.pdf`,
  },
  {
    id: 30,
    title: "Python 101 for Data Science",
    issuer: "IBM Cognitive Class",
    date: "May 2026",
    description: "Comprehensive introduction to Python programming for data science, including data manipulation, visualization, and analysis.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/IBM PY0101EN Certificate _ Cognitive Class.pdf`,
  },
  {
    id: 31,
    title: "MLOps and Data Pipeline Orchestration for AI Systems",
    issuer: "IBM Cognitive Class",
    date: "May 2026",
    description: "Comprehensive training in MLOps practices, data pipeline orchestration, and AI systems deployment.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_MLOps and Data Pipeline Orchestration for AI Systems.pdf`,
  },
  {
    id: 33,
    title: "Hands-On AI: Computer Vision Projects with Ultralytics and OpenCV",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Comprehensive hands-on projects in computer vision using Ultralytics YOLO and OpenCV for AI applications.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_HandsOn AI Computer Vision Projects with Ultralytics and OpenCV.pdf`,
  },
  {
    id: 34,
    title: "Artificial Intelligence Foundations: Machine Learning",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Comprehensive introduction to artificial intelligence and machine learning fundamentals, covering key concepts, algorithms, and real-world applications.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_Artificial Intelligence Foundations Machine Learning.pdf`,
  },
  {
    id: 35,
    title: "Data Science Foundations: Fundamentals",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Comprehensive introduction to data science fundamentals, covering essential concepts, methodologies, and tools for data analysis and interpretation.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_Data Science Foundations Fundamentals.pdf`,
  },
  {
    id: 36,
    title: "Generative AI: Introduction to Large Language Models",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Comprehensive introduction to Large Language Models (LLMs), covering the fundamentals of generative AI, transformer architecture, training methodologies, and real-world applications.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_Generative AI Introduction to Large Language Models.pdf`,
  },
  {
    id: 37,
    title: "The Non-Technical Skills of Effective Data Scientists",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Comprehensive training in essential non-technical skills for data scientists, including communication, collaboration, problem-solving, and business acumen.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_The NonTechnical Skills of Effective Data Scientists.pdf`,
  },
  {
    id: 38,
    title: "Python for Data Visualization",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Comprehensive training in data visualization using Python, covering libraries such as Matplotlib, Seaborn, and interactive visualization techniques for effective data storytelling.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_Python for Data Visualization.pdf`,
  },
  {
    id: 39,
    title: "Machine Learning with Python: Foundations",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Comprehensive training in machine learning with Python, covering scikit-learn, model evaluation, supervised and unsupervised learning techniques.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_Machine%20Learning%20with%20Python%20Foundations.pdf`,
  },
  {
    id: 40,
    title: "Chat with Your Data Using ChatGPT",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Comprehensive training in using ChatGPT to interact with and analyze data, enabling natural language querying and insights from datasets.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_Chat%20with%20Your%20Data%20Using%20ChatGPT.pdf`,
  },
  {
    id: 41,
    title: "Machine Learning with Python: Decision Trees",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Comprehensive training in decision tree algorithms, covering concepts from splitting criteria to pruning, and their application in classification and regression tasks.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_Machine%20Learning%20with%20Python%20Decision%20Trees.pdf`,
  },
  {
    id: 42,
    title: "Data Science Professional Certificate by KNIME",
    issuer: "KNIME",
    date: "May 2026",
    description: "Professional training in data science using KNIME's visual data analytics platform, covering data preprocessing, analysis, and predictive modeling.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_Data%20Science%20Professional%20Certificate%20by%20KNIME.pdf`,
  },
  {
    id: 43,
    title: "Machine Learning with Python: Logistic Regression",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Comprehensive training in logistic regression for binary and multiclass classification, covering theory, implementation, and evaluation metrics.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_Machine%20Learning%20with%20Python%20Logistic%20Regression.pdf`,
  },
  {
    id: 44,
    title: "Machine Learning with Python: kMeans Clustering",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Comprehensive training in k-means clustering algorithm for unsupervised learning, covering centroid initialization, cluster assignment, and evaluation techniques.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_Machine%20Learning%20with%20Python%20kMeans%20Clustering.pdf`,
  },
  {
    id: 101,
    title: "Advance Your Skills in Deep Learning and Neural Networks",
    issuer: "LinkedIn Learning Community",
    date: "Jun 2026",
    description: "Advanced training in deep learning and neural networks, covering sophisticated architectures, optimization techniques, and real-world AI applications.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_Advance_Your_Skills_in_Deep_Learning_and_Neural_Networks.pdf`,
  },
];

export const Certifications = () => {
  // Compute categories and their counts
  const _categories = (() => {
    const counts = { "Data Science & AI": 0, "Deep Learning": 0, "Computer Vision": 0, "Anthropic": 0 };
    certifications.forEach(cert => {
      if (cert.issuer === "Anthropic") {
        counts.Anthropic++;
      } else if (
        cert.title.includes("Computer Vision") ||
        cert.title.includes("OpenCV") ||
        cert.title.includes("Vision Language") ||
        cert.title.includes("Ultralytics") ||
        cert.title.includes("YOLO") ||
        cert.issuer === "OpenCV University"
      ) {
        counts["Computer Vision"]++;
      } else if (
        cert.title.includes("Deep Learning") ||
        cert.title.includes("LLM") ||
        cert.title.includes("Large Language Model") ||
        cert.title.includes("Natural Language Processing") ||
        cert.title.includes("Transformer") ||
        cert.title.includes("Generative AI")
      ) {
        counts["Deep Learning"]++;
      } else {
        counts["Data Science & AI"]++;
      }
    });
    return [
      { name: "Data Science & AI", count: counts["Data Science & AI"] },
      { name: "Deep Learning", count: counts["Deep Learning"] },
      { name: "Computer Vision", count: counts["Computer Vision"] },
      { name: "Anthropic", count: counts["Anthropic"] },
    ];
  })();

  const displayedCerts = certifications.slice(-4);

  return (
    <section id="certifications" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-48 md:w-64 h-48 md:h-64 bg-highlight/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-secondary-foreground text-xs md:text-sm font-medium tracking-wider uppercase animate-fade-in">
            Certifications
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 md:mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Professional
            <span className="font-serif italic font-normal text-foreground">
              {" "}
              Certifications
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground animate-fade-in animation-delay-200">
            Certifications and training programs that validate my expertise in data science, AI, and engineering.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {displayedCerts.map((cert, idx) => (
            cert.link ? (
              <a
                key={cert.id}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 md:p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in group block"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  {/* Icon */}
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{cert.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-1.5 md:space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm md:text-lg font-semibold group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                      <span>{cert.issuer}</span>
                      <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                      <span>{cert.date}</span>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </a>
            ) : (
              <div
                key={cert.id}
                className="glass p-4 md:p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  {/* Icon */}
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{cert.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-1.5 md:space-y-2">
                    <h3 className="text-sm md:text-lg font-semibold group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                      <span>{cert.issuer}</span>
                      <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                      <span>{cert.date}</span>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 md:mt-12 animate-fade-in animation-delay-500">
          <Link to="/certifications">
            <AnimatedBorderButton>
              View All Certifications
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </Link>
        </div>
      </div>
    </section>
  );
};
