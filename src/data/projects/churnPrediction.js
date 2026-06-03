export const churnPredictionProject = {
  id: 1,
  slug: "1-customer-analytics-churn-prediction-2025-11",
  title: "Customer Analytics & Churn Prediction Platform",
  description:
    "Professional web application with interactive dashboards and automated reporting for customer churn prediction. Built comprehensive analytics platform to identify at-risk customers and provide actionable insights for retention strategies.",
  image: "assets/images/projects/churn-prediction/main.png",
  tags: ["Python", "Machine Learning", "Data Analytics", "Web App"],
  link: "/projects/1-customer-analytics-churn-prediction-2025-11",
  github: "https://github.com/YOUSSEF-BT/Customer-Analytics-Churn-Prediction-Platform",
  company: "Personal Project",
  period: "2025-11",
  location: "Morocco",
  role: "Data Scientist & Full-Stack Developer",
  overview: {
    architectureImage: "assets/architecture/Customer Analytics & Churn Prediction Platform.png",
    keyContributions: [
      "Developed end-to-end churn prediction platform with ML models",
      "Created interactive dashboards for real-time customer analytics",
      "Implemented automated reporting system for business insights",
      "Built data preprocessing pipeline for customer behavior analysis",
      "Integrated predictive models with 85%+ accuracy for churn risk",
    ],
  },
  problemStatement: {
    title: "Customer Churn Challenge",
    description:
      "Businesses need to identify customers at risk of leaving to implement effective retention strategies and reduce revenue loss.",
    challenges: [
      "Analyzing large volumes of customer behavior data",
      "Identifying patterns and indicators of churn risk",
      "Providing actionable insights for retention strategies",
      "Real-time monitoring and alerting system",
    ],
  },
  solution:
    "Built comprehensive platform combining ML predictions, interactive dashboards, and automated reporting to identify at-risk customers and provide actionable insights.",
  keyAchievements: [
    "Developed ML models with 85%+ accuracy for churn prediction",
    "Created interactive dashboards for real-time customer analytics",
    "Implemented automated reporting system",
    "Reduced customer churn analysis time by 70%",
    "Provided actionable insights for retention strategies",
  ],
  techStack: [
    "Python", "Machine Learning", "Pandas", "Scikit-learn",
    "Streamlit", "Plotly", "Data Visualization", "Web Development",
  ],
  modules: [
    {
      id: 1,
      name: "ML Prediction Engine",
      description: "Machine learning models for churn prediction with feature engineering and model optimization.",
      details: "Implemented multiple ML algorithms including Random Forest, Gradient Boosting, and Neural Networks with hyperparameter tuning.",
      metrics: {
        accuracy: "85%+",
        models: "Multiple",
        features: "Engineered",
        optimization: "Hyperparameter",
      },
    },
    {
      id: 2,
      name: "Interactive Dashboard",
      description: "Real-time dashboard for customer analytics and churn risk visualization.",
      details: "Built interactive dashboards using Streamlit and Plotly for data exploration and insights visualization.",
      metrics: {
        dashboard: "Interactive",
        visualization: "Real-time",
        insights: "Actionable",
        framework: "Streamlit",
      },
    },
  ],
  dataset: {
    name: "Customer Churn Dataset",
    source: "Telecommunications company customer data",
    volume: "10,000+ customer records with 20+ features",
    annotation: "Churn labels (churned vs retained customers)",
    classes: [
      { name: "Churned", label: "Customers who left" },
      { name: "Retained", label: "Active customers" },
      { name: "High Risk", label: "Customers with high churn probability" },
      { name: "Low Risk", label: "Customers with low churn probability" }
    ]
  },
  challenges: {
    dataVolume: {
      description: "Analyzing large volumes of customer behavior data with multiple features",
      solution: "Implemented efficient data preprocessing pipeline using Pandas and feature engineering"
    },
    patternIdentification: {
      description: "Identifying patterns and indicators of churn risk from complex customer behavior",
      solution: "Used feature importance analysis and correlation analysis to identify key churn indicators"
    },
    actionableInsights: {
      description: "Providing actionable insights for retention strategies based on predictions",
      solution: "Created interactive dashboards with drill-down capabilities and recommendation engine"
    },
    realTimeMonitoring: {
      description: "Real-time monitoring and alerting system for at-risk customers",
      solution: "Implemented automated monitoring with threshold-based alerts and notification system"
    }
  },
  results: {
    modelAccuracy: "85%+",
    timeReduction: "70%",
    dashboards: "Multiple",
    automation: "High",
  },
  team: ["Youssef Bouzit"],
  supervisor: "Self-directed",
  liveDemo: {
    url: "https://customer-analytics-churn-prediction-platform-mezggcfmcjpxp7vei.streamlit.app/",
    description: "Interactive Streamlit application for customer churn prediction with real-time analytics and ML model predictions",
  },
};