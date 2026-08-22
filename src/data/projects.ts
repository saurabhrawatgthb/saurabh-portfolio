export interface ProjectItem {
  id: string;
  code: string;
  title: string;
  badge: string;
  category: "AI & COMPUTER VISION" | "FINTECH & IOT" | "SMART INFRASTRUCTURE" | "ENTERPRISE SOFTWARE" | "DISTRIBUTED SYSTEMS";
  status: "MISSION_CRITICAL" | "PROTOTYPED" | "RESEARCH_ACTIVE" | "PRODUCTION_READY";
  tagline: string;
  brief: string;
  problem: string;
  solution: string;
  architecture: {
    steps: { node: string; desc: string }[];
    flowSummary: string;
  };
  keyFeatures: string[];
  technologies: string[];
  simulatorType?: "rakshak" | "unicard" | "pothole" | "quiz" | "generic";
  github?: string;
  demo?: string;
  highlightMetric?: {
    label: string;
    value: string;
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: "PROJECT_001",
    code: "RAKSHAK-CV-NET",
    title: "RAKSHAK",
    badge: "FLAGSHIP AI MISSION",
    category: "AI & COMPUTER VISION",
    status: "MISSION_CRITICAL",
    tagline: "AI-Powered Camera Network & Trajectory Prediction for Locating Missing Children",
    brief: "A distributed computer-vision system that turns disjointed CCTV surveillance streams into a coherent search grid. Analyzes footage feeds, detects facial vector matches with OCR time-stamping, and executes graph-based shortest path movement forecasting.",
    problem: "When children go missing in crowded urban sectors, manual review of hundreds of hours of surveillance footage across different cameras is slow, error-prone, and loses vital golden-hour response windows.",
    solution: "RAKSHAK ingests camera streams into an asynchronous vector-extraction pipeline. When a child alert is initiated, face recognition embeddings cross-examine node feeds chronologically. Spatial graph algorithms calculate velocity and probable escape vectors to forecast destination nodes.",
    architecture: {
      steps: [
        { node: "CAMERA NODE MESH", desc: "Multi-point video stream ingestion with local frame sampling" },
        { node: "VISION PIPELINE (OpenCV)", desc: "Facial feature vector extraction & timestamped OCR bounding" },
        { node: "FASTAPI VECTOR ENGINE", desc: "High-speed embedding matching against reported child dossiers" },
        { node: "GRAPH TRAJECTORY FORECASTER", desc: "Dijkstra & directional graph path prediction between camera junctions" },
        { node: "OPERATOR COMMAND HUD", desc: "Next.js tactical map view with instant alert broadcasting" },
      ],
      flowSummary: "Camera Streams ➔ Frame Extraction ➔ Face Vector Matching ➔ Spatial Graph Forecasting ➔ Real-Time Operator Alert",
    },
    keyFeatures: [
      "Real-time facial vector matching across multi-camera grid",
      "Directional graph path calculation to predict candidate transit nodes",
      "Timestamped OCR validation on license plates and regional landmark markers",
      "Asynchronous Python/FastAPI microservice architecture for frame processing",
      "Operator command map interface built with Next.js & WebSockets",
    ],
    technologies: ["Next.js", "Python", "FastAPI", "OpenCV", "Face Recognition", "PostgreSQL", "Graph Algorithms", "Docker"],
    simulatorType: "rakshak",
    github: "https://github.com/saurabhrawatgthb",
    highlightMetric: {
      label: "DETECTION LATENCY",
      value: "< 1.2s PER NODE",
    },
  },
  {
    id: "PROJECT_002",
    code: "UNICARD-IOT-CORE",
    title: "UNICARD",
    badge: "HARDWARE + FINTECH SYSTEM",
    category: "FINTECH & IOT",
    status: "PROTOTYPED",
    tagline: "Universal Smart Identity & Financial Transaction Hardware Card",
    brief: "An all-in-one hardware and software architecture unifying physical university/corporate access tokens, government identity schemas, and contact/contactless financial payments into a single programmable smart card.",
    problem: "Individuals carry fragmented plastic cards for student IDs, public transit, access control, and bank payments, creating security vulnerabilities, card-cloning risks, and management friction.",
    solution: "UNICARD integrates dynamic token generation with encrypted NFC/RFID microcontrollers and an enterprise backend ledger. The card profile morphs securely based on terminal handshake protocols without exposing root credentials.",
    architecture: {
      steps: [
        { node: "SMART CARD MICROCONTROLLER", desc: "Cryptographic secure element with multi-applet memory storage" },
        { node: "NFC / RFID HANDSHAKE", desc: "Dynamic challenge-response protocol with mutual authentication" },
        { node: "GATEWAY ROUTER", desc: "Differentiates payment transactions vs physical access grants" },
        { node: "ENTERPRISE LEDGER & API", desc: "PostgreSQL & Node.js backend managing identity states & logs" },
      ],
      flowSummary: "Secure Smart Card ➔ NFC Terminal ➔ Cryptographic Handshake ➔ Router ➔ Identity/Payment API",
    },
    keyFeatures: [
      "Multi-applet architecture switching between Access, ID, and Payment modes",
      "Dynamic rolling cryptogram generation preventing card replay attacks",
      "Real-time card freeze & telemetry over web dashboard",
      "Hardware-level tampering protection and token expiration policies",
    ],
    technologies: ["IoT Hardware", "Microcontrollers", "NFC / RFID Protocols", "Node.js", "PostgreSQL", "Next.js", "Cryptography"],
    simulatorType: "unicard",
    github: "https://github.com/saurabhrawatgthb",
    highlightMetric: {
      label: "AUTH HANDSHAKE",
      value: "180ms SECURE NFC",
    },
  },
  {
    id: "PROJECT_003",
    code: "POTHOLE-CV-GEO",
    title: "POTHOLE DETECTION & ROAD TELEMETRY",
    badge: "CV & SMART INFRASTRUCTURE",
    category: "SMART INFRASTRUCTURE",
    status: "RESEARCH_ACTIVE",
    tagline: "Autonomous Computer Vision & Geo-Spatial Road Defect Alert Network",
    brief: "An edge-to-cloud road surface health monitoring platform. Mounts vision sensors on municipal transit vehicles to automatically detect potholes, fissures, and structural degradation in real-time with GPS coordinates and severity indices.",
    problem: "Road defects cause accidents and billions in vehicle damage. Municipal surveys are manual, infrequent, and reactive to citizen complaints rather than preventive.",
    solution: "A deep learning / OpenCV pipeline continuously classifies asphalt surface damage from video feeds. Detections are tagged with sub-meter GPS coordinates, filtered for false positives, and aggregated into a municipal priority heatmap.",
    architecture: {
      steps: [
        { node: "DASHBOARD CAMERA FEED", desc: "High frame-rate edge capture of road surface geometry" },
        { node: "EDGE CV DETECTOR", desc: "Contour analysis and classification of asphalt depth & perimeter" },
        { node: "GEO-SPATIAL TAGGING", desc: "Synchronized GPS coordinate stamping and severity classification" },
        { node: "CENTRAL DISPATCH HUB", desc: "Heatmap generation and automatic repair ticket generation" },
      ],
      flowSummary: "Vehicle Vision Feed ➔ Edge Surface Analysis ➔ GPS Stamping ➔ Municipal Heatmap Hub",
    },
    keyFeatures: [
      "Edge-optimized Computer Vision model runnable on low-power hardware",
      "Severity index scoring based on estimated surface area and perimeter disruption",
      "Deduplication engine preventing repeated alerts for identical coordinates",
      "Interactive municipal GIS dashboard with hazard color-coding",
    ],
    technologies: ["Python", "OpenCV", "Machine Learning", "IoT Sensors", "Geo-Spatial Mapping", "FastAPI", "SQLite"],
    simulatorType: "pothole",
    github: "https://github.com/saurabhrawatgthb",
    highlightMetric: {
      label: "DETECTION ACCURACY",
      value: "HIGH CONFIDENCE CV",
    },
  },
  {
    id: "PROJECT_004",
    code: "LENDING-JAVA-CORE",
    title: "UNIVERSITY LENDING PLATFORM",
    badge: "ENTERPRISE SOFTWARE",
    category: "ENTERPRISE SOFTWARE",
    status: "PRODUCTION_READY",
    tagline: "Full-Lifecycle Hardware, Lab & Book Inventory Request Workflow Engine",
    brief: "A resilient university asset and inventory management platform built with a Java backend and relational PostgreSQL database. Automates request lifecycles, returns, approvals, condition audits, and reservation queues.",
    problem: "University labs and equipment libraries lose thousands in untracked gear and suffer from scheduling conflicts due to paper ledgers and fragmented spreadsheets.",
    solution: "Engineered a formal state-machine request pipeline with role-based access control (Student, Faculty, Lab Admin), automated overdue notification queues, and tamper-resistant audit logs.",
    architecture: {
      steps: [
        { node: "CLIENT INTERFACE", desc: "Next.js student & faculty catalog with real-time availability" },
        { node: "JAVA BUSINESS LOGIC", desc: "Strict state-machine enforcing reservation constraints & quotas" },
        { node: "POSTGRESQL STORAGE", desc: "Normalized relational schema with foreign key cascading and transactions" },
        { node: "NOTIFICATION DAEMON", desc: "Automated queue sending return reminders and penalty escalations" },
      ],
      flowSummary: "Student Request ➔ Constraint Validator ➔ Admin Approval ➔ DB Transaction ➔ Return Tracker",
    },
    keyFeatures: [
      "Deterministic state machine for asset status (AVAILABLE ➔ RESERVED ➔ CHECKED_OUT ➔ RETURNED ➔ INSPECTED)",
      "Role-Based Access Control (RBAC) with granular faculty/student privileges",
      "Relational integrity preventing double-booking across time windows",
      "Automated export of asset lifecycle and depreciation audit reports",
    ],
    technologies: ["Java", "Spring / Core Java", "PostgreSQL", "Next.js", "REST APIs", "Tailwind CSS"],
    simulatorType: "generic",
    github: "https://github.com/saurabhrawatgthb",
    highlightMetric: {
      label: "TRANSACTION INTEGRITY",
      value: "ACID COMPLIANT",
    },
  },
  {
    id: "PROJECT_005",
    code: "QUIZ-SOCKET-NET",
    title: "REAL-TIME QUIZ PLATFORM",
    badge: "DISTRIBUTED SYSTEMS",
    category: "DISTRIBUTED SYSTEMS",
    status: "PRODUCTION_READY",
    tagline: "High-Concurrency Low-Latency Real-Time Quiz & Assessment Engine",
    brief: "An interactive assessment platform designed to handle hundreds of concurrent participants answering synchronised questions with sub-second leaderboard calculation and real-time response aggregation.",
    problem: "Traditional web forms fail when hundreds of users submit simultaneously at strict question deadlines, leading to race conditions and inaccurate rank calculations.",
    solution: "Constructed an event-driven architecture using WebSockets and in-memory session stores, delivering instant question broadcasts, timer synchronization, and millisecond-precision response scoring.",
    architecture: {
      steps: [
        { node: "100+ CONCURRENT CLIENTS", desc: "Synchronized browser terminals maintaining persistent socket pipes" },
        { node: "WS EVENT DISPATCHER", desc: "Node.js WebSocket gateway handling room subscriptions & heartbeat" },
        { node: "SESSION ENGINE", desc: "In-memory state tracker scoring answers by submission timestamp" },
        { node: "LIVE BROADCASTER", desc: "Instant delta broadcast of updated leaderboard to all participants" },
      ],
      flowSummary: "Concurrent Clients ➔ WebSocket Gateway ➔ Memory Delta Ranker ➔ Live State Broadcast",
    },
    keyFeatures: [
      "Zero-polling full-duplex WebSocket communication",
      "Server-authoritative timer preventing client-side clock tampering",
      "Real-time animated leaderboard with dynamic ranking transitions",
      "Post-assessment diagnostic breakdown and participant analytics",
    ],
    technologies: ["Node.js", "WebSockets", "React / Next.js", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    simulatorType: "quiz",
    github: "https://github.com/saurabhrawatgthb",
    highlightMetric: {
      label: "EVENT LATENCY",
      value: "< 50ms BROADCAST",
    },
  },
  {
    id: "PROJECT_006",
    code: "WEATHER-IOT-NET",
    title: "INTELLIGENT WEATHER STATION",
    badge: "EMBEDDED HARDWARE",
    category: "SMART INFRASTRUCTURE",
    status: "PROTOTYPED",
    tagline: "Microcontroller IoT Sensor Array for Micro-Climate Telemetry",
    brief: "An environmental monitoring station integrating atmospheric pressure, humidity, temperature, and light sensors with cloud synchronization for micro-climate analysis.",
    problem: "Macro weather stations miss hyper-local microclimate shifts necessary for agricultural optimization and campus facilities management.",
    solution: "Built a self-contained sensor node broadcasting continuous serial telemetry over WiFi to an analytics dashboard with threshold-based trigger alerts.",
    architecture: {
      steps: [
        { node: "SENSOR ARRAY", desc: "DHT & Barometric pressure transducers reading physical air columns" },
        { node: "MICROCONTROLLER", desc: "Analog-to-digital calibration and JSON packet serialization" },
        { node: "TELEMETRY API", desc: "Time-series logging into SQLite database with real-time charting" },
      ],
      flowSummary: "Transducers ➔ Microcontroller ADC ➔ JSON Stream ➔ Time-Series DB",
    },
    keyFeatures: [
      "Continuous atmospheric sampling with low power consumption",
      "Time-series chart visualization with anomaly detection",
      "Local display screen fallback for offline inspection",
    ],
    technologies: ["IoT Microcontrollers", "C++ / Embedded C", "Python", "SQLite", "Next.js"],
    simulatorType: "generic",
    github: "https://github.com/saurabhrawatgthb",
  },
  {
    id: "PROJECT_007",
    code: "STUDENT-MGMT-SYS",
    title: "STUDENT RECORD & ATTENDANCE CORE",
    badge: "ADMINISTRATIVE ENGINE",
    category: "ENTERPRISE SOFTWARE",
    status: "PRODUCTION_READY",
    tagline: "High-Integrity Academic Registry & Attendance Automation System",
    brief: "A full-featured academic data management system with biometric/QR attendance tracking, gradebook computation, and student profile verification.",
    problem: "Manual attendance records suffer from proxy attendance and high administrative overhead during exam eligibility auditing.",
    solution: "Engineered a centralized system with parameterized SQL queries, session logs, and automated eligibility percentage calculations with instant student notifications.",
    architecture: {
      steps: [
        { node: "TERMINAL INGESTION", desc: "QR / ID scanner verifying student identity tokens" },
        { node: "VALIDATION ENGINE", desc: "Session window validation preventing duplicate check-ins" },
        { node: "ANALYTICS CORE", desc: "Aggregates aggregate attendance percentage and generates alerts" },
      ],
      flowSummary: "ID Check ➔ Session Constraint ➔ DB Entry ➔ Real-time Audit Report",
    },
    keyFeatures: [
      "Automated attendance percentage computation with minimum threshold flags",
      "Role-separated dashboards for Students, Faculty, and HODs",
      "Complete CSV/PDF export of verified registry sheets",
    ],
    technologies: ["Java / Python", "PostgreSQL", "Next.js", "Tailwind CSS"],
    simulatorType: "generic",
    github: "https://github.com/saurabhrawatgthb",
  },
];
