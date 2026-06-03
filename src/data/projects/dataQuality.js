export const dataQualityProject = {
  id: 2,
  slug: "2-data-quality-monitoring-2025-12",
  title: "Data Quality Monitoring Platform",
  description:
    "Professional full-stack data quality monitoring platform with React 18 frontend, Flask backend, and MySQL database. Features interactive Chart.js dashboard, Swagger REST API, and automated PDF/Excel export. Built for real-time quality metrics, anomaly detection, and professional reporting.",
  image: "assets/images/projects/data-quality/main.jpeg",
  tags: ["React", "Material-UI", "Chart.js", "Flask", "MySQL", "Data Quality", "Monitoring", "API"],
  link: "/projects/2-data-quality-monitoring-2025-12",
  github: "https://github.com/YOUSSEF-BT/Data-Quality-Monitoring",
  company: "Personal Project",
  period: "2025-12",
  location: "Morocco",
  role: "Full-Stack Developer & Data Engineer",
  overview: {
    architectureImage: "assets/architecture/Data Quality Monitoring Platform.png",
    keyContributions: [
      "Built professional data quality monitoring platform",
      "Created interactive dashboard for quality metrics visualization",
      "Implemented REST API for data quality checks and reporting",
      "Developed automated PDF/Excel export functionality",
      "Set up real-time monitoring and alerting system",
    ],
  },
  problemStatement: {
    title: "Data Quality Challenge",
    description:
      "Organizations need robust systems to monitor data quality, identify issues, and generate reports to ensure data reliability and compliance.",
    challenges: [
      "Monitoring multiple data quality metrics in real-time",
      "Identifying and alerting on data quality issues",
      "Generating comprehensive reports for stakeholders",
      "Building scalable monitoring infrastructure",
      "Integrating with various data sources",
    ],
  },
  solution:
    "Built comprehensive data quality monitoring platform with interactive dashboard, REST API, and automated reporting for complete data quality management.",
  keyAchievements: [
    "Created professional monitoring platform with real-time alerts",
    "Built interactive dashboard for quality metrics visualization",
    "Implemented REST API for data quality checks",
    "Developed automated PDF/Excel export functionality",
    "Set up comprehensive monitoring and alerting system",
  ],
  techStack: [
    "React 18", "Material-UI", "Chart.js", "jsPDF",
    "Python", "Flask", "MySQL", "REST API", "Swagger", "Data Quality"
  ],
  modules: [
    {
      id: 1,
      name: "Quality Monitoring Engine",
      description: "Data quality monitoring engine with comprehensive metrics and checks.",
      details: "Implemented multiple data quality checks including completeness, accuracy, consistency, and timeliness metrics.",
      metrics: {
        metrics: "Comprehensive",
        checks: "Multiple",
        monitoring: "Real-time",
        alerts: "Automated",
      },
    },
    {
      id: 2,
      name: "Interactive Dashboard",
      description: "Professional dashboard for data quality visualization and monitoring.",
      details: "Built interactive dashboard with real-time updates, charts, and detailed quality metrics visualization.",
      metrics: {
        dashboard: "Interactive",
        visualization: "Real-time",
        updates: "Live",
        charts: "Multiple",
      },
    },
  ],
  dataset: {
    name: "Data Quality Monitoring Dataset",
    source: "Multiple database connections and data sources",
    volume: "15+ databases with 100+ tables monitored",
    annotation: "Quality metrics and issue classifications",
    classes: [
      { name: "High Quality", label: "Data with excellent quality metrics" },
      { name: "Medium Quality", label: "Data with acceptable quality metrics" },
      { name: "Low Quality", label: "Data requiring attention" },
      { name: "Critical Issues", label: "Data with quality problems" }
    ]
  },
  challenges: {
    realTimeMonitoring: {
      description: "Monitoring multiple data quality metrics in real-time across different data sources",
      solution: "Implemented efficient monitoring engine with scheduled checks and real-time updates"
    },
    issueIdentification: {
      description: "Identifying and alerting on data quality issues with proper classification",
      solution: "Built intelligent issue detection with severity classification and automated alerts"
    },
    reporting: {
      description: "Generating comprehensive reports for stakeholders in multiple formats",
      solution: "Implemented automated PDF/Excel generation with customizable templates"
    },
    scalability: {
      description: "Building scalable monitoring infrastructure for growing data sources",
      solution: "Designed modular architecture with horizontal scaling and load balancing"
    },
    integration: {
      description: "Integrating with various data sources and database systems",
      solution: "Built flexible connectors supporting 15+ database types and APIs"
    }
  },
  results: {
    monitoring: "Real-time",
    alerts: "Automated",
    reporting: "Automated",
    scalability: "High",
  },
  team: ["Youssef Bouzit"],
  supervisor: "Self-directed",
  liveDemo: {
    url: "https://data-quality-dashboard.netlify.app",
    description: "Professional data quality monitoring platform with interactive dashboard, real-time metrics, and automated reporting",
  },
};