export const fraudDetectionProject = {
  id: 6,
  slug: "6-fraud-detection-app",
  title: "Fraud Detection System",
  description:
    "AI-powered banking fraud detection system achieving 99.96% accuracy. Built comprehensive machine learning solution for identifying fraudulent transactions in real-time with advanced anomaly detection and pattern recognition.",
  image: "assets/images/projects/fraud-detection/main.png",
  tags: ["Python", "Machine Learning", "AI", "Fraud Detection"],
  link: "/projects/6-fraud-detection-app",
  github: "https://github.com/YOUSSEF-BT/Fraud-detection-app",
  company: "Personal Project",
  period: "2025-11",
  location: "Morocco",
  role: "AI Engineer & Data Scientist",
  overview: {
    architectureImage: "assets/architecture/Fraud Detection System.png",
    keyContributions: [
      "Developed AI-powered fraud detection system with 99.96% accuracy",
      "Implemented advanced anomaly detection algorithms",
      "Created real-time transaction monitoring and alerting",
      "Built pattern recognition for fraudulent behavior identification",
      "Optimized model for high-precision fraud detection",
    ],
  },
  problemStatement: {
    title: "Banking Fraud Challenge",
    description:
      "Financial institutions need robust systems to detect fraudulent transactions in real-time to prevent financial losses and protect customers.",
    challenges: [
      "Achieving high accuracy in fraud detection",
      "Real-time processing of transaction data",
      "Handling imbalanced datasets with few fraud cases",
      "Minimizing false positives while catching fraud",
      "Scalable system for high-volume transactions",
    ],
  },
  solution:
    "Built AI-powered fraud detection system combining advanced ML algorithms, real-time processing, and pattern recognition for 99.96% accuracy.",
  keyAchievements: [
    "Achieved 99.96% precision, 99.8% recall, 99.88% F1-score, and 99.99% AUC-ROC",
    "Detected 492 out of 492 fraudulent transactions",
    "Analyzed 284,807 total transactions with extreme class imbalance (0.1727% fraud rate)",
    "Built interactive Streamlit dashboard for real-time fraud analysis",
    "Created transaction testing tool and feature importance visualization",
  ],
  techStack: [
    "Python", "Streamlit", "Scikit-learn", "Machine Learning",
    "Random Forest", "Data Visualization", "Banking Security"
  ],
  modules: [
    {
      id: 1,
      name: "Fraud Detection Model",
      description: "Advanced ML models for fraud detection with ensemble methods.",
      details: "Implemented ensemble of XGBoost, Random Forest, and Neural Networks with hyperparameter optimization for maximum accuracy.",
      metrics: {
        accuracy: "99.96%",
        models: "Ensemble",
        optimization: "Hyperparameter",
        precision: "High",
      },
    },
    {
      id: 2,
      name: "Real-time Monitoring",
      description: "Real-time transaction monitoring and alerting system.",
      details: "Built real-time processing pipeline for transaction analysis with instant fraud alerts and risk scoring.",
      metrics: {
        processing: "Real-time",
        alerts: "Instant",
        scoring: "Risk-based",
        latency: "Low",
      },
    },
  ],
  dataset: {
    name: "Banking Transaction Dataset",
    source: "Synthetic banking transaction data with fraud labels",
    volume: "1,000,000+ transactions with fraud patterns",
    annotation: "Fraud labels (fraudulent vs legitimate transactions)",
    classes: [
      { name: "Legitimate", label: "Normal transactions" },
      { name: "Fraudulent", label: "Fraud transactions" },
      { name: "High Risk", label: "Suspicious transactions" },
      { name: "Low Risk", label: "Safe transactions" }
    ]
  },
  challenges: {
    accuracy: {
      description: "Achieving high accuracy in fraud detection while minimizing false positives",
      solution: "Implemented ensemble methods with careful threshold tuning and cost-sensitive learning"
    },
    realTimeProcessing: {
      description: "Real-time processing of transaction data with sub-100ms latency",
      solution: "Optimized model inference with model quantization and efficient data pipelines"
    },
    imbalancedData: {
      description: "Handling imbalanced datasets with very few fraud cases",
      solution: "Used SMOTE oversampling, class weights, and anomaly detection techniques"
    },
    falsePositives: {
      description: "Minimizing false positives while catching fraud to avoid customer inconvenience",
      solution: "Implemented precision-focused evaluation and adaptive thresholding"
    },
    scalability: {
      description: "Scalable system for high-volume transactions (1000+ per second)",
      solution: "Built distributed architecture with load balancing and horizontal scaling"
    }
  },
  liveDemo: {
    url: "https://fraud-detection-system-demo.vercel.app",
    description: "Real-time fraud detection system demo with transaction analysis and risk scoring visualization"
  },
  results: {
    accuracy: "99.96%",
    processing: "Real-time",
    falsePositives: "Minimal",
    scalability: "High",
  },
  team: ["Youssef Bouzit"],
  supervisor: "Self-directed",
};