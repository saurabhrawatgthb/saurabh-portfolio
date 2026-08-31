export interface SkillModule {
  id: string;
  code: string;
  name: string;
  category: "PROGRAMMING" | "WEB" | "BACKEND" | "DATABASE" | "AI / ML" | "TOOLS";
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
      { name: "Java", level: "ADVANCED", tag: "ENTERPRISE CORE" },
      { name: "Python", level: "PRIMARY", tag: "AI / SYSTEMS" },
      { name: "JavaScript", level: "PRIMARY", tag: "WEB ENGINE" },
    ],
  },
  {
    id: "MOD_02",
    code: "WEB_STACK",
    name: "WEB TECHNOLOGIES & FRAMEWORKS",
    category: "WEB",
    status: "ONLINE",
    description: "Frontend interface and modern web development stack.",
    skills: [
      { name: "HTML", level: "PRIMARY", tag: "MARKUP ARCHITECTURE" },
      { name: "CSS", level: "PRIMARY", tag: "STYLING & DESIGN" },
      { name: "React", level: "PRIMARY", tag: "COMPONENT UI" },
      { name: "Next.js", level: "PRIMARY", tag: "FULL-STACK APP ROUTER" },
    ],
  },
  {
    id: "MOD_03",
    code: "BACKEND_CORE",
    name: "BACKEND FRAMEWORKS & RUNTIMES",
    category: "BACKEND",
    status: "ONLINE",
    description: "Scalable backend web APIs and server-side runtimes.",
    skills: [
      { name: "Node.js", level: "ADVANCED", tag: "ASYNC EVENT RUNTIME" },
      { name: "FastAPI", level: "PRIMARY", tag: "HIGH-SPEED PYTHON API" },
    ],
  },
  {
    id: "MOD_04",
    code: "DB_PERSIST",
    name: "DATABASE SYSTEMS",
    category: "DATABASE",
    status: "ONLINE",
    description: "Relational modeling, querying, and embedded data persistence.",
    skills: [
      { name: "PostgreSQL", level: "PRIMARY", tag: "ENTERPRISE RDBMS" },
      { name: "SQLite", level: "ADVANCED", tag: "EMBEDDED STORAGE" },
      { name: "SQL", level: "ADVANCED", tag: "QUERIES & NORMALIZATION" },
    ],
  },
  {
    id: "MOD_05",
    code: "AI_ML_NET",
    name: "AI & INTELLIGENT SYSTEMS",
    category: "AI / ML",
    status: "OPTIMIZED",
    description: "Applied artificial intelligence, computer vision pipelines, and language model integrations.",
    skills: [
      { name: "Machine Learning", level: "ADVANCED", tag: "INTELLIGENT MODELS" },
      { name: "Computer Vision", level: "PRIMARY", tag: "OPENCV & SPATIAL" },
      { name: "LLMs", level: "ADVANCED", tag: "GENERATIVE AI" },
      { name: "Embeddings", level: "PROFICIENT", tag: "VECTOR REPRESENTATIONS" },
    ],
  },
  {
    id: "MOD_06",
    code: "DEVOPS_TOOL",
    name: "DEVELOPER TOOLS & DEPLOYMENT",
    category: "TOOLS",
    status: "ONLINE",
    description: "Version control, containerization, and modern deployment infrastructure.",
    skills: [
      { name: "Git", level: "PRIMARY", tag: "VERSION CONTROL" },
      { name: "GitHub", level: "PRIMARY", tag: "CODE HOSTING & CI" },
      { name: "Docker", level: "ADVANCED", tag: "CONTAINERIZATION" },
      { name: "Vercel", level: "PRIMARY", tag: "CLOUD DEPLOYMENT" },
    ],
  },
];

