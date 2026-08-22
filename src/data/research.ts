export interface ResearchDoc {
  id: string;
  paperCode: string;
  title: string;
  domain: string;
  subField: string;
  status: string;
  abstract: string;
  methodology: {
    phase: string;
    description: string;
  }[];
  keyFindings: string[];
  systemMetrics: {
    label: string;
    value: string;
    unit: string;
  }[];
  architecturePoints: string[];
}

export const researchData: ResearchDoc = {
  id: "RES_DOC_001",
  paperCode: "POTHOLE-GEO-CV-2024",
  title: "AUTOMATED ASPHALT DEFECT DETECTION & GEO-SPATIAL ANOMALY MAPPING VIA EDGE COMPUTER VISION",
  domain: "SMART CITIES & INFRASTRUCTURE MONITORING",
  subField: "COMPUTER VISION / EMBEDDED EDGE INFERENCE / GIS",
  status: "RESEARCH LOG CLASSIFIED // ACTIVE DEVELOPMENT",
  abstract: "Municipal road surface inspection has historically depended on sporadic manual surveys or expensive specialized lidar inspection vehicles. This research investigates the deployment of low-power optical camera sensors mounted on regular transit vehicles, coupled with lightweight edge computer vision pipelines to automatically segment, classify, and geo-tag asphalt structural failures in real-time.",
  methodology: [
    {
      phase: "01 // OPTICAL INGESTION",
      description: "Capturing 1080p road surface frames at 30 FPS under dynamic ambient lighting variations and weather conditions.",
    },
    {
      phase: "02 // PREPROCESSING & ROI CROPPING",
      description: "Applying perspective transformation, Gaussian noise filtering, and road plane region-of-interest (ROI) isolation.",
    },
    {
      phase: "03 // CONTOUR & MORPHOLOGY CLASSIFICATION",
      description: "Extracting structural perimeter anomalies, shadow thresholding, and depth contour estimation.",
    },
    {
      phase: "04 // SPATIO-TEMPORAL DEDUPLICATION",
      description: "Clustering detections via Haversine distance GPS filters to prevent redundant alerts for identical road fissures.",
    },
    {
      phase: "05 // SEVERITY INDEX GENERATION",
      description: "Calculating weighted impact scores factoring perimeter area, depth estimation, and traffic density.",
    },
  ],
  keyFindings: [
    "Edge-based OpenCV pipelines reduce cloud bandwidth demands by 94% by transmitting only metadata and bounding coordinates rather than continuous video streams.",
    "Spatial clustering prevents duplicate ticket spamming when multiple vehicles traverse the same road defect.",
    "Sub-second alert latency enables rapid warning broadcasting to nearby connected vehicles in advanced ITS grids.",
  ],
  systemMetrics: [
    { label: "FRAME PROCESSING TIME", value: "< 28", unit: "ms/frame" },
    { label: "BANDWIDTH SAVING", value: "94.2", unit: "% reduction" },
    { label: "GPS RE-IDENTIFICATION ERROR", value: "< 1.5", unit: "meters" },
    { label: "FALSE POSITIVE REDUCTION", value: "88.6", unit: "% filtered" },
  ],
  architecturePoints: [
    "Edge node runs lightweight contour segmentation on embedded hardware.",
    "FastAPI backend ingests encrypted JSON payload with GPS, timestamp, and severity index.",
    "PostgreSQL + PostGIS spatial extension indexes coordinates into municipal hazard heatmaps.",
    "Next.js operator interface displays interactive tactical overlay.",
  ],
};
