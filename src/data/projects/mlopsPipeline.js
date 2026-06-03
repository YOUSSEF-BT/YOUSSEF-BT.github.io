export const mlopsPipelineProject = {
  id: 3,
  slug: "3-customer-mlops-pipeline-2025-12",
  title: "Customer MLOps Pipeline",
  description:
    "Complete MLOps platform for customer churn prediction with automated orchestration (Airflow), experiment tracking (MLflow), artifact storage (MinIO), and interactive dashboard (Streamlit). End-to-end machine learning pipeline for production deployment.",
  image: "assets/images/projects/mlops-pipeline/main.png",
  tags: ["Python", "MLOps", "Airflow", "MLflow", "DevOps"],
  link: "/projects/3-customer-mlops-pipeline-2025-12",
  github: "https://github.com/YOUSSEF-BT/customer-mlops-pipeline",
  company: "Personal Project",
  period: "2025-12",
  location: "Morocco",
  role: "MLOps Engineer & Data Scientist",
  overview: {
    architectureImage: "assets/architecture/Customer MLOps Pipeline.png",
    keyContributions: [
      "Built complete MLOps pipeline with automated orchestration",
      "Implemented experiment tracking with MLflow for model versioning",
      "Set up MinIO for artifact storage and model registry",
      "Created interactive Streamlit dashboard for monitoring",
      "Automated CI/CD pipeline for model deployment and updates",
    ],
  },
  problemStatement: {
    title: "MLOps Challenge",
    description:
      "Organizations need robust MLOps infrastructure to manage machine learning models from development to production with proper tracking, versioning, and monitoring.",
    challenges: [
      "Automating ML pipeline orchestration and scheduling",
      "Tracking experiments and model versions effectively",
      "Managing artifacts and model registry",
      "Monitoring model performance in production",
      "Implementing CI/CD for ML models",
    ],
  },
  solution:
    "Built comprehensive MLOps platform combining Airflow for orchestration, MLflow for tracking, MinIO for storage, and Streamlit for monitoring.",
  keyAchievements: [
    "Implemented automated ML pipeline with Airflow orchestration",
    "Set up complete experiment tracking with MLflow",
    "Created artifact storage system with MinIO",
    "Built interactive monitoring dashboard with Streamlit",
    "Automated CI/CD pipeline for model deployment",
  ],
  techStack: [
    "Python", "Airflow", "MLflow", "MinIO", "Streamlit",
    "Docker Compose", "PostgreSQL", "MLOps", "Experiment Tracking", "Orchestration"
  ],
  modules: [
    {
      id: 1,
      name: "Pipeline Orchestration",
      description: "Automated ML pipeline orchestration using Airflow for scheduling and execution.",
      details: "Implemented DAGs for data processing, model training, evaluation, and deployment with automated scheduling.",
      metrics: {
        orchestration: "Airflow",
        automation: "Complete",
        scheduling: "Automated",
        dags: "Multiple",
      },
    },
    {
      id: 2,
      name: "Experiment Tracking",
      description: "ML experiment tracking and model versioning using MLflow.",
      details: "Set up MLflow for tracking experiments, parameters, metrics, and model artifacts with comprehensive versioning.",
      metrics: {
        tracking: "MLflow",
        versioning: "Complete",
        artifacts: "Managed",
        experiments: "Tracked",
      },
    },
  ],
  dataset: {
    name: "Customer Churn Dataset",
    source: "Telecommunications company customer data",
    volume: "10,000+ customer records with 20+ features",
    annotation: "Churn labels and customer behavior metrics",
    classes: [
      { name: "Training Data", label: "Model training dataset" },
      { name: "Validation Data", label: "Model validation dataset" },
      { name: "Test Data", label: "Model testing dataset" },
      { name: "Production Data", label: "Live customer data" }
    ]
  },
  challenges: {
    orchestration: {
      description: "Automating ML pipeline orchestration and scheduling for complex workflows",
      solution: "Implemented Airflow DAGs with task dependencies and automated scheduling"
    },
    tracking: {
      description: "Tracking experiments and model versions effectively across multiple runs",
      solution: "Set up MLflow for comprehensive experiment tracking and model versioning"
    },
    artifacts: {
      description: "Managing artifacts and model registry for production deployment",
      solution: "Implemented MinIO for artifact storage and model registry management"
    },
    monitoring: {
      description: "Monitoring model performance in production with real-time alerts",
      solution: "Created Streamlit dashboard with real-time monitoring and alerting"
    },
    cicd: {
      description: "Implementing CI/CD for ML models with automated testing and deployment",
      solution: "Built automated CI/CD pipeline with Docker and Kubernetes"
    }
  },
  liveDemo: {
    url: "https://customer-mlops-pipeline-dashboard.streamlit.app",
    description: "Interactive MLOps dashboard with pipeline monitoring, experiment tracking, and model deployment visualization"
  },
  results: {
    automation: "Complete",
    tracking: "Comprehensive",
    deployment: "Automated",
    monitoring: "Real-time",
  },
  team: ["Youssef Bouzit"],
  supervisor: "Self-directed",
};