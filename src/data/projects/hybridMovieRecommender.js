export const hybridMovieRecommenderProject = {
  id: 8,
  slug: "8-hybrid-movie-recommender",
  title: "Hybrid Movie Recommender",
  description:
    "Advanced hybrid recommendation system combining collaborative filtering and content-based approaches for personalized movie suggestions. Built comprehensive recommendation engine using multiple algorithms to improve accuracy and user experience.",
  image: "assets/images/projects/hybrid-movie-recommender/main.png",
  tags: ["Python", "TypeScript", "React", "Vite", "Machine Learning", "Recommender Systems", "API"],
  link: "/projects/8-hybrid-movie-recommender",
  github: "https://github.com/YOUSSEF-BT/hybrid_movie_recommender",
  company: "Personal Project",
  period: "2026-01",
  location: "Morocco",
  role: "Data Scientist & Machine Learning Engineer",
  overview: {
    architectureImage: "assets/architecture/Hybrid Movie Recommender.png",
    keyContributions: [
      "Built hybrid recommendation system combining multiple algorithms",
      "Implemented collaborative filtering for user-based recommendations",
      "Created content-based filtering for item-based suggestions",
      "Developed hybrid approach to improve recommendation accuracy",
      "Optimized model performance with hyperparameter tuning",
    ],
  },
  problemStatement: {
    title: "Movie Recommendation Challenge",
    description:
      "Users need personalized movie recommendations that accurately reflect their preferences while handling cold-start problems and sparse data.",
    challenges: [
      "Handling cold-start problem for new users and items",
      "Dealing with sparse user-item interaction data",
      "Balancing exploration and exploitation in recommendations",
      "Improving recommendation accuracy with limited data",
      "Providing diverse and relevant suggestions",
    ],
  },
  solution:
    "Built comprehensive hybrid recommendation system combining collaborative filtering, content-based filtering, and matrix factorization for accurate personalized movie recommendations.",
  keyAchievements: [
    "Implemented hybrid approach with improved accuracy",
    "Solved cold-start problem using content-based filtering",
    "Optimized model performance with hyperparameter tuning",
    "Created scalable recommendation engine",
    "Achieved high recommendation accuracy on test dataset",
  ],
  techStack: [
    "Python", "TypeScript", "React", "Vite",
    "Machine Learning", "Scikit-learn", "Pandas",
    "NumPy", "Recommender Systems", "Data Science",
    "Collaborative Filtering", "Content-Based Filtering", "API Development"
  ],
  modules: [
    {
      id: 1,
      name: "Collaborative Filtering",
      description: "User-based and item-based collaborative filtering algorithms for recommendations.",
      details: "Implemented user-based and item-based collaborative filtering with similarity calculations and neighborhood selection.",
      metrics: {
        algorithms: "Multiple",
        similarity: "Cosine",
        filtering: "User/Item-based",
        accuracy: "High",
      },
    },
    {
      id: 2,
      name: "Content-Based Filtering",
      description: "Content-based filtering using movie features and user preferences.",
      details: "Implemented content-based filtering using movie metadata, genres, and user preference profiles.",
      metrics: {
        features: "Rich",
        matching: "Semantic",
        filtering: "Content-based",
        diversity: "High",
      },
    },
  ],
  dataset: {
    name: "Movie Recommendation Dataset",
    source: "MovieLens dataset and movie metadata",
    volume: "100,000+ user ratings and 10,000+ movies",
    annotation: "User ratings and movie genre classifications",
    classes: [
      { name: "Action", label: "Action movies" },
      { name: "Comedy", label: "Comedy movies" },
      { name: "Drama", label: "Drama movies" },
      { name: "Sci-Fi", label: "Science fiction movies" }
    ]
  },
  challenges: {
    coldStart: {
      description: "Handling cold-start problem for new users and items with no interaction history",
      solution: "Implemented content-based filtering using movie features and demographic information"
    },
    sparseData: {
      description: "Dealing with sparse user-item interaction data and limited ratings",
      solution: "Used matrix factorization and hybrid approaches to handle sparsity"
    },
    exploration: {
      description: "Balancing exploration and exploitation in recommendations for user satisfaction",
      solution: "Implemented multi-armed bandit approach with exploration-exploitation trade-off"
    },
    accuracy: {
      description: "Improving recommendation accuracy with limited data and sparse interactions",
      solution: "Used ensemble methods and hyperparameter optimization for better accuracy"
    },
    diversity: {
      description: "Providing diverse and relevant suggestions to avoid recommendation fatigue",
      solution: "Implemented diversity-aware algorithms with novelty and serendipity metrics"
    }
  },
  results: {
    accuracy: "High",
    coldStart: "Solved",
    diversity: "High",
    scalability: "Good",
  },
  team: ["Youssef Bouzit"],
  supervisor: "Self-directed",
  liveDemo: {
    url: "https://hybrid-movie-recommender-pink.vercel.app",
    description: "Interactive hybrid movie recommendation system full-stack application with personalized suggestions",
  },
};
