export const tweetsSentimentProject = {
  id: 4,
  slug: "4-bigdata-reddit-sentiment-analysis-2026-02",
  title: "Big Data Social Media Sentiment Analysis",
  description:
    "A Big Data project focused on Reddit sentiment analysis, leveraging NLP techniques to process large volumes of social media data and classify sentiments. Includes real-time data ingestion, distributed processing, and visualization of Reddit data trends.",
  image: "assets/images/projects/tweets-sentiment/main.png",
  tags: ["Python", "Big Data", "Apache Kafka", "Apache Spark", "MongoDB", "Docker", "NLP", "Sentiment Analysis"],
  link: "/projects/4-bigdata-tweets-sentiment-analysis-2026-02",
  github: "https://github.com/YOUSSEF-BT/bigdata-tweets-sentiment-analysis",
  company: "Academic Project",
  period: "2026-02",
  location: "Morocco",
  role: "Data Scientist & Big Data Engineer",
  overview: {
    architectureImage: "assets/architecture/Big Data Tweets Sentiment Analysis.png",
    keyContributions: [
      "Implemented Big Data pipeline for processing large-scale Twitter data",
      "Applied NLP techniques for sentiment classification and analysis",
      "Developed data preprocessing and cleaning workflows",
      "Created visualization tools for sentiment trends and patterns",
      "Optimized processing for handling millions of tweets efficiently",
    ],
  },
  problemStatement: {
    title: "Social Media Sentiment Analysis",
    description:
      "Organizations need to analyze large volumes of social media data to understand public sentiment and trends for decision-making.",
    challenges: [
      "Processing millions of tweets in real-time",
      "Accurate sentiment classification using NLP",
      "Handling noisy and unstructured text data",
      "Scalable architecture for big data processing",
    ],
  },
  solution:
    "Built Big Data pipeline combining NLP techniques, distributed processing, and visualization tools to analyze Twitter sentiment at scale.",
  keyAchievements: [
    "Processed millions of tweets with efficient Big Data pipeline",
    "Achieved 90%+ accuracy in sentiment classification",
    "Implemented scalable architecture for real-time processing",
    "Created comprehensive visualization of sentiment trends",
    "Optimized data preprocessing for noisy social media data",
  ],
  techStack: [
    "Python", "Apache Kafka", "Apache Spark", "MongoDB", "Docker",
    "scikit-learn", "NLP", "TF-IDF", "NMF", "Machine Learning"
  ],
  modules: [
    {
      id: 1,
      name: "Data Processing Pipeline",
      description: "Big Data pipeline for processing and cleaning large-scale Twitter data.",
      details: "Implemented distributed processing using Spark and Hadoop for handling millions of tweets efficiently.",
      metrics: {
        tweets: "Millions",
        processing: "Distributed",
        framework: "Spark",
        scalability: "High",
      },
    },
    {
      id: 2,
      name: "NLP Sentiment Analysis",
      description: "Natural language processing for sentiment classification and analysis.",
      details: "Applied NLP techniques including tokenization, lemmatization, and sentiment classification using NLTK and TextBlob.",
      metrics: {
        accuracy: "90%+",
        techniques: "NLP",
        classification: "Sentiment",
        libraries: "NLTK, TextBlob",
      },
    },
  ],
  dataset: {
    name: "Twitter Sentiment Dataset",
    source: "Twitter API and public tweet datasets",
    volume: "Millions of tweets with sentiment labels",
    annotation: "Sentiment labels (positive, negative, neutral)",
    classes: [
      { name: "Positive", label: "Positive sentiment tweets" },
      { name: "Negative", label: "Negative sentiment tweets" },
      { name: "Neutral", label: "Neutral sentiment tweets" },
      { name: "Mixed", label: "Mixed sentiment tweets" }
    ]
  },
  challenges: {
    realTimeProcessing: {
      description: "Processing millions of tweets in real-time with high throughput",
      solution: "Implemented distributed processing using Spark and optimized data pipelines"
    },
    sentimentAccuracy: {
      description: "Accurate sentiment classification using NLP on noisy social media text",
      solution: "Fine-tuned NLP models with ensemble methods and feature engineering"
    },
    noisyData: {
      description: "Handling noisy and unstructured text data from social media",
      solution: "Implemented robust preprocessing pipeline with text cleaning and normalization"
    },
    scalability: {
      description: "Scalable architecture for big data processing with horizontal scaling",
      solution: "Used Hadoop and Spark for distributed processing and storage"
    }
  },
  liveDemo: {
    url: "https://bigdata-tweets-sentiment-analysis.vercel.app",
    description: "Interactive Big Data sentiment analysis dashboard with real-time tweet processing and visualization"
  },
  results: {
    tweetsProcessed: "Millions",
    sentimentAccuracy: "90%+",
    processingSpeed: "Real-time",
    scalability: "High",
  },
  team: ["Youssef Bouzit"],
  supervisor: "Academic Supervisor",
};