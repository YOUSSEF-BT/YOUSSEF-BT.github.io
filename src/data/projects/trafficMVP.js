export const trafficMVPProject = {
  id: 9,
  slug: "traffic-mvp-image-processing",
  title: "Traffic MVP: Computer Vision Traffic Analysis",
  description:
    "Real-time vehicle detection and traffic flow analysis using YOLOv8 and OpenCV. Processes video streams, counts vehicles, exports metrics to CSV, and provides a Streamlit dashboard for visualization.",
  image: "assets/images/projects/traffic-mvp/main.png",
  tags: ["Python", "OpenCV", "YOLOv8", "Computer Vision", "Streamlit", "Traffic Analysis"],
  link: "/projects/traffic-mvp-image-processing",
  github: "https://github.com/YOUSSEF-BT/traffic-mvp-image-processing",
  company: "Personal Project",
  period: "2026-01",
  location: "Morocco",
  role: "Computer Vision Engineer",
  overview: {
    architectureImage: "assets/architecture/TrafficMVP.png",
    keyContributions: [
      "Developed real-time vehicle detection system using YOLOv8 and OpenCV",
      "Implemented traffic counting with visual bounding box overlays",
      "Built CSV export for metrics (vehicle count, speed, congestion)",
      "Created interactive Streamlit dashboard for data exploration",
      "Designed flexible YAML-based configuration system",
    ],
  },
  problemStatement: {
    title: "Automated Traffic Monitoring",
    description:
      "Traffic engineers and city planners require automated solutions to monitor road traffic, count vehicles, and analyze congestion patterns without manual counting.",
    challenges: [
      "Real-time vehicle detection from video sources",
      "Handling varying lighting, weather, and camera angles",
      "Extracting accurate traffic metrics (count, flow, congestion)",
      "Providing clear visual feedback with overlays",
      "Exporting structured data for reporting",
      "Building accessible dashboard for non-technical users",
    ],
  },
  solution:
    "Built a complete traffic analysis pipeline leveraging YOLOv8 for object detection and OpenCV for video processing. The system detects and tracks vehicles in real-time, generates detailed CSV reports, and includes a Streamlit dashboard for interactive data visualization.",
  keyAchievements: [
    "High accuracy vehicle detection using YOLOv8",
    "Real-time processing with visual overlays",
    "Comprehensive metrics export (time, count, speed, congestion)",
    "User-friendly Streamlit dashboard for exploration",
    "Easy configuration via YAML",
  ],
  techStack: [
    "Python 3",
    "OpenCV",
    "Ultralytics YOLOv8",
    "Streamlit",
    "Pandas",
    "NumPy",
    "FFmpeg",
  ],
  modules: [
    {
      id: 1,
      name: "Vehicle Detection",
      description: "YOLOv8-based real-time vehicle detection",
      details: "Utilizes Ultralytics YOLOv8 pre-trained model for accurate vehicle detection. Processes each video frame, draws bounding boxes and labels on detected vehicles. Confidence threshold configurable.",
      metrics: {
        model: "YOLOv8",
        accuracy: "High (pre-trained)",
        speed: "30+ FPS on CPU",
      },
    },
    {
      id: 2,
      name: "Traffic Counting",
      description: "Counts vehicles crossing virtual lines or regions",
      details: "Tracks vehicles frame-by-frame and counts them when crossing defined zones. Can track total count and distinguish vehicle types.",
      metrics: {
        method: "Frame-based tracking",
        output: "CSV export",
        granularity: "Per-frame and summary",
      },
    },
    {
      id: 3,
      name: "Metrics Export",
      description: "CSV export with traffic statistics and analysis",
      details: "Exports: timestamp, vehicles in frame, cumulative count, estimated speed (km/h), congestion score. Data ready for reporting and further analysis.",
      metrics: {
        format: "CSV",
        fields: "Time, count, speed, congestion",
      },
    },
    {
      id: 4,
      name: "Streamlit Dashboard",
      description: "Interactive web dashboard for traffic data",
      details: "Built with Streamlit for fast iteration and sharing. Displays charts, tables, and filters to explore traffic patterns over time. Runs locally or can be deployed to Streamlit Cloud.",
      metrics: {
        framework: "Streamlit",
        features: "Charts, tables, filters",
      },
    },
    {
      id: 5,
      name: "Configuration",
      description: "YAML configuration for easy customization",
      details: "All parameters (detection classes, confidence thresholds, regions, etc.) stored in config.yaml. Change behavior without touching code.",
      metrics: {
        format: "YAML",
        noCode: "Required changes",
      },
    },
  ],
  dataset: {
    name: "Traffic Videos",
    source: "Various camera feeds and recorded footage",
    volume: "Multiple video files",
    annotation: "Automatic via YOLOv8 (vehicle bounding boxes)",
    classes: [
      { name: "Car", label: "Passenger vehicles" },
      { name: "Truck", label: "Heavy vehicles" },
      { name: "Bus", label: "Public transport" },
      { name: "Motorcycle", label: "Two-wheelers" },
    ],
  },
  challenges: {
    accuracy: {
      description:
        "Vehicle detection accuracy varies with lighting, weather, camera angle, and vehicle types",
      solution:
        "YOLOv8 provides robust baseline. Confidence threshold can be tuned. May need fine-tuning for specific deployment conditions.",
    },
    speed: {
      description:
        "Speed estimation is approximate without proper camera calibration (pixels to meters)",
      solution:
        "Implemented basic speed estimation as relative metric. For accurate km/h, camera calibration required.",
    },
    performance: {
      description:
        "Achieving real-time processing (30+ FPS) on CPU-only hardware",
      solution:
        "Optimized OpenCV operations and YOLOv8 inference. Higher resolutions or multiple streams may need more powerful hardware.",
    },
    scalability: {
      description:
        "Processing multiple video sources simultaneously",
      solution:
        "Currently processes single video at a time. Multi-camera setup would require parallelization or distributed processing.",
    },
  },
  liveDemo: {
    url: "https://github.com/YOUSSEF-BT/traffic-mvp-image-processing",
    description:
      "Real-time vehicle detection and traffic analysis using YOLOv8 and OpenCV. Features CSV export and Streamlit dashboard for visualization.",
  },
  results: {
    detection: "Real-time YOLOv8",
    fps: "30+ on CPU",
    export: "CSV with metrics",
    dashboard: "Streamlit",
  },
  team: ["YOUSSEF-BT"],
  supervisor: "Self-directed",
  limitations: [
    "Speed estimation is approximate without camera calibration",
    "False positives may occur with poor video quality or unusual angles",
    "Single-video processing; multi-camera not yet implemented",
  ],
  futureImprovements: [
    "Camera calibration for accurate speed measurement",
    "Multi-object tracking (DeepSORT/ByteTrack)",
    "ROI-based counting (virtual lines)",
    "Reduce false positives with better filtering",
    "Multi-camera support",
    "Deploy dashboard to Streamlit Cloud",
  ],
  installation: [
    "python -m venv .venv",
    "source .venv/bin/activate  # Windows: .venv\\Scripts\\activate",
    "pip install -r requirements.txt",
  ],
  usage: [
    "python traffic_mvp.py --source video.mp4 --show --csv output.csv --conf 0.50",
    "streamlit run dashboard.py",
  ],
};
