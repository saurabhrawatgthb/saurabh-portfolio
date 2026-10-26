export interface SkillModule {
  id: string;
  code: string;
  name: string;
  category: "PROGRAMMING" | "WEB" | "BACKEND" | "DATABASE" | "AI / ML" | "TOOLS" | "CS_FUNDAMENTALS";
  status: "ONLINE" | "OPTIMIZED" | "CALIBRATED";
  description: string;
  skills: {
    name: string;
    level: string;
    tag: string;
  }[];
}

export const skillModules: SkillModule[] = [
  {
    id: "MOD_01",
    code: "LANG_CORE",
    name: "PROGRAMMING LANGUAGES",
    category: "PROGRAMMING",
    status: "ONLINE",
    description: "Core multi-paradigm programming languages spanning systems, object-oriented, and web runtimes.",
    skills: [
      { name: "C", level: "PROFICIENT", tag: "SYSTEMS PROGRAMMING" },
      { name: "C++", level: "ADVANCED", tag: "ALGORITHMS & DSA" },
      { name: "Java", level: "ADVANCED", tag: "ENTERPRISE CORE & OOP" },
      { name: "Python", level: "PRIMARY", tag: "AI, FASTAPI & VISION" },
      { name: "JavaScript", level: "PRIMARY", tag: "WEB ENGINE" },
      { name: "TypeScript", level: "PRIMARY", tag: "TYPE-SAFE APIS" },
      { name: "SQL", level: "ADVANCED", tag: "QUERIES & SCHEMAS" },
    ],
  },
  {
    id: "MOD_02",
    code: "WEB_STACK",
    name: "WEB TECHNOLOGIES & FRAMEWORKS",
    category: "WEB",
    status: "ONLINE",
    description: "Frontend interface and modern full-stack web development ecosystem.",
    skills: [
      { name: "React.js", level: "PRIMARY", tag: "COMPONENT UI & HOOKS" },
      { name: "Next.js", level: "PRIMARY", tag: "FULL-STACK APP ROUTER" },
      { name: "HTML5", level: "PRIMARY", tag: "SEMANTIC MARKUP" },
      { name: "CSS3", level: "PRIMARY", tag: "RESPONSIVE LAYOUTS" },
      { name: "Tailwind CSS", level: "PRIMARY", tag: "UTILITY STYLING" },
      { name: "Vite", level: "PRIMARY", tag: "BUILD TOOLING" },
      { name: "REST APIs", level: "PRIMARY", tag: "HTTP SERVICES" },
    ],
  },
  {
    id: "MOD_03",
    code: "BACKEND_CORE",
    name: "BACKEND FRAMEWORKS & RUNTIMES",
    category: "BACKEND",
    status: "ONLINE",
    description: "Scalable backend web APIs, asynchronous pipelines, and server-side runtimes.",
    skills: [
      { name: "Node.js", level: "ADVANCED", tag: "ASYNC EVENT RUNTIME" },
      { name: "Express.js", level: "ADVANCED", tag: "REST API ROUTING" },
      { name: "FastAPI", level: "PRIMARY", tag: "HIGH-SPEED PYTHON API" },
      { name: "Socket.IO", level: "PROFICIENT", tag: "BI-DIRECTIONAL WEBSOCKETS" },
    ],
  },
  {
    id: "MOD_04",
    code: "DB_PERSIST",
    name: "DATABASES & ORM",
    category: "DATABASE",
    status: "ONLINE",
    description: "Relational modeling, cloud DBaaS, ORMs, and embedded data persistence.",
    skills: [
      { name: "PostgreSQL", level: "PRIMARY", tag: "ENTERPRISE RDBMS" },
      { name: "Prisma ORM", level: "PRIMARY", tag: "TYPE-SAFE SCHEMA & MIGRATIONS" },
      { name: "Supabase / Neon", level: "PRIMARY", tag: "SERVERLESS POSTGRES" },
      { name: "SQLite", level: "ADVANCED", tag: "EMBEDDED STORAGE" },
      { name: "Firebase Realtime DB", level: "PROFICIENT", tag: "LIVE CLOUD TELEMETRY" },
    ],
  },
  {
    id: "MOD_05",
    code: "AI_ML_NET",
    name: "AI & COMPUTER VISION",
    category: "AI / ML",
    status: "OPTIMIZED",
    description: "Applied artificial intelligence, computer vision pipelines, and deep learning models.",
    skills: [
      { name: "Computer Vision", level: "PRIMARY", tag: "IMAGE & VIDEO PROCESSING" },
      { name: "YOLOv8", level: "PRIMARY", tag: "OBJECT DETECTION" },
      { name: "InsightFace", level: "ADVANCED", tag: "FACIAL RECOGNITION" },
      { name: "OpenCV", level: "PRIMARY", tag: "IMAGE MANIPULATION" },
      { name: "PaddleOCR", level: "PROFICIENT", tag: "TEXT & LICENSE RECOGNITION" },
      { name: "TensorFlow.js", level: "PROFICIENT", tag: "IN-BROWSER EDGE INFERENCE" },
      { name: "DeepSORT", level: "PROFICIENT", tag: "MULTI-OBJECT TRACKING" },
    ],
  },
  {
    id: "MOD_06",
    code: "DEVOPS_TOOL",
    name: "DEVELOPER TOOLS & SYSTEMS",
    category: "TOOLS",
    status: "ONLINE",
    description: "Version control, containerization, embedded IoT hardware, and modern deployment infrastructure.",
    skills: [
      { name: "Git", level: "PRIMARY", tag: "VERSION CONTROL & MERGING" },
      { name: "GitHub", level: "PRIMARY", tag: "CODE REPOSITORIES & CI" },
      { name: "Docker", level: "ADVANCED", tag: "CONTAINERIZATION" },
      { name: "Vercel", level: "PRIMARY", tag: "PRODUCTION HOSTING" },
      { name: "VS Code", level: "PRIMARY", tag: "DEV ENVIRONMENT" },
      { name: "IoT Hardware", level: "PROFICIENT", tag: "ARDUINO & SENSORS" },
    ],
  },
];
