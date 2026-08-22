export interface AchievementItem {
  id: string;
  code: string;
  category: "ACADEMICS" | "LEADERSHIP" | "HACKATHONS" | "RESEARCH" | "COMPETITIVE PROGRAMMING";
  title: string;
  organization: string;
  date: string;
  badge: string;
  description: string;
  classification: "CLASSIFIED // VERIFIED" | "ARCHIVED_EVIDENCE";
}

export const achievementsData: AchievementItem[] = [
  {
    id: "ACH_001",
    code: "ACAD_RECORD_GEU",
    category: "ACADEMICS",
    title: "B.Tech Computer Science & Engineering",
    organization: "Graphic Era University / GEHU",
    date: "2022 — 2026",
    badge: "ENGINEERING RECORD",
    description: "Maintaining a strong academic trajectory focused on Core Systems, Data Structures & Algorithms, Computer Networks, Database Architecture, and Machine Learning.",
    classification: "CLASSIFIED // VERIFIED",
  },
  {
    id: "ACH_002",
    code: "TECH_LEAD_OPS",
    category: "LEADERSHIP",
    title: "Backend & Operational Leadership",
    organization: "Technieeeks & IEEE Student Branch",
    date: "2023 — 2024",
    badge: "OPERATIONAL EXCELLENCE",
    description: "Successfully spearheaded technical server infrastructure, event check-in APIs, and database migrations across campus-wide tech symposiums and competitive events.",
    classification: "CLASSIFIED // VERIFIED",
  },
  {
    id: "ACH_003",
    code: "HACK_EVENT_LEAD",
    category: "HACKATHONS",
    title: "Graph-e-thon 2.0 & Hackathon Execution",
    organization: "Graph-e-thon / Saarthi '25",
    date: "2024 — 2025",
    badge: "500+ PARTICIPANTS",
    description: "Executed registration management, applicant credential verification, and hardware mentoring for large-scale multi-college hackathon cohorts.",
    classification: "CLASSIFIED // VERIFIED",
  },
  {
    id: "ACH_004",
    code: "DSA_PROBLEM_SOLVER",
    category: "COMPETITIVE PROGRAMMING",
    title: "Algorithmic & Problem Solving Trajectory",
    organization: "LeetCode & Code Archives",
    date: "CONTINUOUS",
    badge: "HANDLE: dugganboss",
    description: "Active problem solver across Trees, Dynamic Programming, Graphs, and Hash Structures on LeetCode with rigorous algorithmic focus.",
    classification: "ARCHIVED_EVIDENCE",
  },
  {
    id: "ACH_005",
    code: "RES_INNOVATION_POTHOLE",
    category: "RESEARCH",
    title: "Smart City Vision Research & Prototyping",
    organization: "Undergraduate Research & RAKSHAK System",
    date: "2024 — 2025",
    badge: "AI + HARDWARE",
    description: "Developed and demonstrated working computer vision prototypes for Pothole Surface Telemetry and RAKSHAK Missing Child Trajectory graph analysis.",
    classification: "CLASSIFIED // VERIFIED",
  },
  {
    id: "ACH_006",
    code: "CONF_CISCT_OPERATIONS",
    category: "LEADERSHIP",
    title: "CISCT International Conference Proceedings",
    organization: "CISCT Conference Committee",
    date: "2024",
    badge: "ACADEMIC OPERATIONS",
    description: "Managed technical desk, track coordination, and author verification for international research presentations.",
    classification: "CLASSIFIED // VERIFIED",
  },
];
