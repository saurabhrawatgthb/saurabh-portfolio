export interface SkillModule {
  id: string;
  code: string;
  name: string;
  category: "LANGUAGES" | "WEB & FRAMEWORKS" | "DATABASE & STORAGE" | "AI / ML & CV" | "TOOLS & INFRASTRUCTURE";
  status: "ONLINE" | "OPTIMIZED" | "CALIBRATED";
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "PRIMARY", "ADVANCED", "PROFICIENT"
    tag: string;
  }[];
}

export const skillModules: SkillModule[] = [
  {
    id: "MOD_01",
    code: "LANG_CORE",
    name: "LANGUAGES & COMPILER RUNTIMES",
    category: "LANGUAGES",
    status: "ONLINE",
    description: "Multi-paradigm programming capabilities spanning systems programming, type-safe web engines, and data pipelines.",
    skills: [
      { name: "Python", level: "PRIMARY", tag: "AI / BACKEND" },
      { name: "C++", level: "ADVANCED", tag: "ALGORITHMS & DSA" },
      { name: "Java", level: "ADVANCED", tag: "ENTERPRISE SYSTEMS" },
      { name: "C", level: "PROFICIENT", tag: "LOW-LEVEL SYSTEMS" },
      { name: "JavaScript / ESNext", level: "PRIMARY", tag: "WEB ENGINE" },
      { name: "TypeScript", level: "PRIMARY", tag: "TYPE INTEGRITY" },
      { name: "HTML5 / CSS3", level: "PROFICIENT", tag: "INTERFACE ARCHITECTURE" },
    ],
  },
  {
    id: "MOD_02",
    code: "WEB_STACK",
    name: "WEB & DISTRIBUTED FRAMEWORKS",
    category: "WEB & FRAMEWORKS",
    status: "ONLINE",
    description: "Modern, reactive web applications and scalable REST / asynchronous API backends.",
    skills: [
      { name: "React 19", level: "PRIMARY", tag: "COMPONENT ARCHITECTURE" },
      { name: "Next.js (App Router)", level: "PRIMARY", tag: "SSR / SSG ENGINE" },
      { name: "Node.js", level: "ADVANCED", tag: "EVENT LOOP RUNTIME" },
      { name: "FastAPI", level: "PRIMARY", tag: "HIGH-THROUGHPUT REST" },
      { name: "Tailwind CSS", level: "PRIMARY", tag: "DESIGN SYSTEMS" },
      { name: "REST APIs", level: "ADVANCED", tag: "CONTRACT DESIGN" },
      { name: "WebSockets", level: "PROFICIENT", tag: "REAL-TIME STREAMS" },
    ],
  },
  {
    id: "MOD_03",
    code: "DB_PERSIST",
    name: "DATABASE & PERSISTENCE SYSTEMS",
    category: "DATABASE & STORAGE",
    status: "ONLINE",
    description: "Relational modeling, query optimization, spatial indexes, and lightweight embedded persistence.",
    skills: [
      { name: "PostgreSQL", level: "PRIMARY", tag: "ENTERPRISE RDBMS" },
      { name: "SQLite", level: "ADVANCED", tag: "EMBEDDED STORAGE" },
      { name: "SQL Schema Design", level: "ADVANCED", tag: "NORMALIZATION / DDL" },
      { name: "Vector Indexing", level: "PROFICIENT", tag: "EMBEDDING SIMILARITY" },
    ],
  },
  {
    id: "MOD_04",
    code: "AI_CV_NET",
    name: "AI / ML, VISION & INTELLIGENT SYSTEMS",
    category: "AI / ML & CV",
    status: "OPTIMIZED",
    description: "Computer vision pipelines, facial feature vector extraction, OCR text parsing, and LLM prompt engineering.",
    skills: [
      { name: "Computer Vision (OpenCV)", level: "PRIMARY", tag: "SPATIAL ANALYSIS" },
      { name: "Machine Learning", level: "ADVANCED", tag: "PREDICTIVE MODELING" },
      { name: "Face Recognition", level: "PRIMARY", tag: "VECTOR ENCODINGS" },
      { name: "OCR Pipelines", level: "ADVANCED", tag: "TEXT EXTRACTION" },
      { name: "Embeddings & RAG", level: "PROFICIENT", tag: "SEMANTIC RETRIEVAL" },
      { name: "Graph Path Algorithms", level: "ADVANCED", tag: "TRAJECTORY PREDICTION" },
    ],
  },
  {
    id: "MOD_05",
    code: "DEVOPS_TOOL",
    name: "DEVOPS, TOOLS & HARDWARE IOT",
    category: "TOOLS & INFRASTRUCTURE",
    status: "ONLINE",
    description: "Version control workflows, containerization, microcontrollers, and modern CI/CD deployment pipelines.",
    skills: [
      { name: "Git & GitHub", level: "PRIMARY", tag: "VERSION INTEGRITY" },
      { name: "Docker", level: "ADVANCED", tag: "CONTAINERIZATION" },
      { name: "VS Code / IDE Workflows", level: "PRIMARY", tag: "DEV ENVIRONMENT" },
      { name: "Vercel", level: "PRIMARY", tag: "EDGE DEPLOYMENT" },
      { name: "IoT & Microcontrollers", level: "ADVANCED", tag: "EMBEDDED SENSORS" },
      { name: "Postman / Thunder Client", level: "PROFICIENT", tag: "API AUDITING" },
    ],
  },
];
