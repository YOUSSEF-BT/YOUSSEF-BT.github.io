export const accidentDetectionProject = {
  id: 10,
  slug: "real-time-road-accident-detection",
  title: "Real-Time Road Accident Detection — Computer Vision & Deep Learning",
  description:
    "A hybrid real-time road-safety system that combines YOLOv11 vehicle detection, BoT-SORT tracking, a fine-tuned YOLOv11s accident classifier, and αβγ behavioral analysis to trigger alerts and automatically save MP4 evidence clips with CSV event logs.",
  image: "assets/images/projects/accident-detection/main-cover-final.jpg",
  tags: [
    "Computer Vision",
    "Deep Learning",
    "YOLOv11",
    "BoT-SORT",
    "OpenCV",
    "Road Safety",
  ],
  link: "/projects/real-time-road-accident-detection",
  github:
    "https://github.com/YOUSSEF-BT/Real-time-vision-accident-detection",
  company: "NEXTRONIC — ABA Technology",
  period: "February–August 2026",
  location: "Casablanca, Morocco",
  role: "Computer Vision & AI Engineer",
  version: "1.0",
  status: "PFE Prototype",
  license: "MIT",
  overview: {
    description:
      "Developed as an engineering final-year project at NEXTRONIC, this system transforms passive road-surveillance video into an active safety sensor. It detects and tracks vehicles, analyzes visual and temporal accident signals, fuses both branches through a maximum-score rule, and preserves evidence when an alert is triggered.",
    architectureImage:
      "assets/architecture/accident-detection-architecture.svg",
    architectureDescription:
      "The pipeline combines YOLOv11n vehicle detection and BoT-SORT tracking with two complementary accident-analysis branches: a fine-tuned YOLOv11s visual model and an αβγ behavioral heuristic. Their scores are fused before alerting, MP4 clip saving, and CSV logging.",
    keyContributions: [
      "Designed an end-to-end hybrid video pipeline combining object detection, multi-object tracking, visual classification, temporal anomaly analysis, decision fusion, and evidence preservation.",
      "Fine-tuned YOLOv11s on a manually annotated 12,716-image dataset with accident and vehicle classes.",
      "Implemented α proximity, β trajectory-rupture, and γ single-vehicle abnormality signals to cover collision and rollover-style scenarios.",
      "Added relative-distance logic for frontal and rear collisions that were missed by simple bounding-box overlap.",
      "Built automatic alert overlays, exact triggering-frame capture, MP4 evidence clip export, and structured CSV event logging.",
    ],
  },
  disclaimer:
    "The published precision, recall, F1-score, and FPS describe the fine-tuned YOLOv11s image test set, not a fully annotated end-to-end video benchmark. Performance can decrease at night, in rain, under heavy occlusion, or with difficult camera angles.",
  problemStatement: {
    title: "Turning Passive CCTV into an Active Road-Safety Sensor",
    description:
      "Conventional surveillance systems record incidents but do not automatically interpret vehicle interactions or preserve structured evidence at the moment of an accident. A practical solution must detect different accident types in real time while limiting false alerts caused by normal stops, dense traffic, and perspective changes.",
    challenges: [
      "Detecting collisions from varied CCTV perspectives and road geometries",
      "Maintaining stable vehicle identities through partial occlusion",
      "Recognizing frontal, rear, lateral, and single-vehicle accidents",
      "Reducing false positives at traffic lights and during slow movement",
      "Combining frame-level visual confidence with temporal behavior",
      "Saving usable evidence and event metadata automatically",
    ],
  },
  solution:
    "YOLOv11n first detects road vehicles, while BoT-SORT assigns stable IDs and maintains a 90-frame trajectory history. A fine-tuned YOLOv11s model estimates visual accident confidence in parallel with αβγ behavioral analysis. The decision engine uses the maximum of both scores, applies 0.6 and 0.8 alert thresholds, displays the accident overlay, saves the associated MP4 clip, and writes the event to CSV.",
  keyAchievements: [
    "86.68% precision, 91.56% recall, and 89.06% F1-score on the held-out image test set",
    "31.5 FPS measured for the YOLOv11s image inference benchmark",
    "12,716 manually annotated images split into 10,192 train, 1,290 validation, and 1,234 test images",
    "Support for multi-vehicle collisions and abnormal single-vehicle events",
    "Automatic MP4 evidence clips and CSV logs containing timestamps, IDs, scores, paths, and triggering frames",
    "Theoretical minimum reaction window of approximately 0.1 seconds at 30 FPS after three confirming frames",
  ],
  techStack: [
    "Python 3.9+",
    "Ultralytics YOLOv11",
    "BoT-SORT",
    "OpenCV",
    "NumPy",
    "Supervision",
    "PyYAML",
    "Roboflow",
    "CSV",
    "MPS / CUDA",
  ],
  modules: [
    {
      id: 1,
      name: "Vehicle Detection & Tracking",
      description:
        "Detects cars, motorcycles, buses, and trucks with YOLOv11n, then maintains stable identities using BoT-SORT.",
      details:
        "Tracked positions are stored across a 90-frame history for motion, speed, acceleration, direction, proximity, and abnormal-state analysis.",
      metrics: {
        detector: "YOLOv11n",
        tracker: "BoT-SORT",
        history: "90 frames",
      },
    },
    {
      id: 2,
      name: "Fine-Tuned Visual Accident Model",
      description:
        "Uses YOLOv11s best.pt to estimate direct visual accident confidence for each processed frame.",
      details:
        "The model was trained for 150 epochs at 640 × 640 resolution with batch size 8 on Apple M2 MPS.",
      metrics: {
        precision: "86.68%",
        recall: "91.56%",
        f1Score: "89.06%",
      },
    },
    {
      id: 3,
      name: "Behavioral αβγ Engine",
      description:
        "Computes complementary temporal signals from tracked vehicle behavior.",
      details:
        "α measures relative proximity, β captures trajectory rupture through speed, acceleration, and orientation, while γ identifies abnormal single-vehicle states such as sudden stops or unusual orientation.",
      metrics: {
        alpha: "Relative proximity",
        beta: "Trajectory rupture",
        gamma: "Single-vehicle anomaly",
      },
    },
    {
      id: 4,
      name: "Fusion, Alerting & Evidence",
      description:
        "Fuses visual and heuristic confidence, applies alert thresholds, and preserves the associated evidence.",
      details:
        "The event record includes timestamp, video name, tracked IDs, fused score, branch scores, clip path, and triggering frame.",
      metrics: {
        fusion: "Maximum rule",
        alertThreshold: "0.6",
        strongAlert: "0.8",
      },
    },
  ],
  dataset: {
    sectionTitle: "Dataset Engineering & Evaluation Split",
    name: "accident_pro — Custom Road-Accident Vision Corpus",
    source: "Manual annotation • Roboflow management • CCTV-oriented road scenes",
    volume: "12,716 labeled images • 2 semantic classes",
    annotation:
      "Train 10,192 (80%) • Validation 1,290 (10%) • Test 1,234 (10%) • YOLO format",
    classes: [
      {
        name: "Accident",
        label: "Collision, rollover, impact, or visually abnormal crash scene",
        distribution: "Target class",
      },
      {
        name: "Vehicle",
        label: "Road vehicle used as contextual and non-accident reference",
        distribution: "Reference class",
      },
    ],
  },
  challenges: {
    frontalAndRearCollisions: {
      problem:
        "Simple bounding-box overlap missed frontal or rear impacts when vehicles approached closely without strong geometric overlap.",
      solution:
        "Added relative proximity using the largest vehicle diagonal and an adjustable proximity factor.",
      status: "Implemented",
    },
    singleVehicleAccidents: {
      problem:
        "Pairwise collision logic could not identify rollover or departure-from-trajectory events involving only one tracked vehicle.",
      solution:
        "Added is_vehicle_abnormal() using sudden-stop and abnormal-orientation signals.",
      status: "Implemented",
    },
    falseAlerts: {
      problem:
        "Normal stops, traffic lights, pedestrians, and slow traffic could produce behavioral spikes.",
      solution:
        "Strengthened temporal confirmation and thresholds, including overlap_frames and score_frames filtering.",
      status: "Mitigated",
    },
    difficultConditions: {
      problem:
        "Night scenes, rain, occlusion, dense traffic, and unfavorable camera angles remain difficult.",
      solution:
        "Expand the negative corpus, add night and rain data, strengthen ReID tracking, and validate on a temporally annotated unseen video benchmark.",
      status: "Open limitation",
    },
  },
  results: {
    precision: "86.68%",
    recall: "91.56%",
    f1Score: "89.06%",
    inferenceSpeed: "31.5 FPS",
    datasetSize: "12,716 images",
    classes: "2",
  },
  resultsNote:
    "Metrics above correspond to the YOLOv11s image test benchmark. The complete hybrid video pipeline still requires a fully annotated temporal evaluation set for official end-to-end precision and recall.",
  team: ["Youssef Bouzit"],
  supervisor:
    "Mme Rime Bouali — Professional Supervisor • M. Abderrahmane El Mettiti — Academic Supervisor",
  liveDemo: {
    type: "video",
    url:
      "https://github.com/user-attachments/assets/9f2436e2-5475-43a3-ab4b-f8ecf32ff7fa",
    title: "Road Accident Detection — Video Demonstration",
    buttonLabel: "Watch Demo",
    description:
      "Watch the hybrid pipeline process real road footage, track vehicles, trigger an accident alert, and preserve the detected event.",
    badges: ["Video proof", "Real-time pipeline", "MP4 + CSV output"],
  },
  installation: [
    "python -m venv .venv",
    "source .venv/bin/activate  # Windows: .venv\\Scripts\\activate",
    "pip install -r requirements.txt",
    "Place yolo11n.pt and best.pt in the project root",
  ],
  usage: [
    "python main.py --video videos/accident.mp4 --output results/",
  ],
  limitations: [
    "No official end-to-end video precision and recall without temporal annotations",
    "Reduced robustness at night, in rain, and under dense occlusion",
    "Tracker quality remains sensitive to difficult camera angles",
  ],
  futureImprovements: [
    "Build a temporally annotated unseen-video benchmark",
    "Expand the dataset with night, rain, occlusion, and hard negatives",
    "Add stronger ReID support and multi-camera identity continuity",
    "Optimize the full pipeline for NVIDIA CUDA and edge deployment",
    "Create a supervision interface for live alerts and evidence review",
  ],
};