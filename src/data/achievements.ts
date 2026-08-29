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
    date: "Aug 2022 – Jun 2026",
    badge: "ENGINEERING RECORD",
    description: "Maintaining strong academic trajectory across Core Systems, Data Structures, Networks, and Machine Learning.",
    classification: "CLASSIFIED // VERIFIED",
  },
  {
    id: "ACH_002",
    code: "TECH_LEAD_OPS",
    category: "LEADERSHIP",
    title: "Backend & Operational Leadership",
    organization: "Technieeeks & IEEE Student Branch",
    date: "Aug 2023 – Nov 2024",
    badge: "OPERATIONAL EXCELLENCE",
    description: "Spearheaded technical server infrastructure, event check-in APIs, and database migrations for campus symposiums.",
    classification: "CLASSIFIED // VERIFIED",
  },
  {
    id: "ACH_003",
    code: "HACK_EVENT_LEAD",
    category: "HACKATHONS",
    title: "Graph-e-thon 2.0 & Hackathon Execution",
    organization: "Graph-e-thon / Saarthi '25",
    date: "Feb 2024 – Feb 2025",
    badge: "500+ PARTICIPANTS",
    description: "Executed registration management, applicant verification, and hardware mentoring for 500+ hackathon participants.",
    classification: "CLASSIFIED // VERIFIED",
  },
  {
    id: "ACH_004",
    code: "DSA_PROBLEM_SOLVER",
    category: "COMPETITIVE PROGRAMMING",
    title: "Algorithmic & Problem Solving Trajectory",
    organization: "LeetCode & Code Archives",
    date: "Jan 2023 – Present",
    badge: "HANDLE: dugganboss",
    description: "Active problem solver across Trees, Dynamic Programming, Graphs, and Hash Structures on LeetCode.",
    classification: "ARCHIVED_EVIDENCE",
  },
  {
    id: "ACH_005",
    code: "RES_INNOVATION_POTHOLE",
    category: "RESEARCH",
    title: "Smart City Vision Research & Prototyping",
    organization: "Undergraduate Research & RAKSHAK System",
    date: "Mar 2024 – Present",
    badge: "AI + HARDWARE",
    description: "Developed and demonstrated working computer vision prototypes for road anomaly detection and spatial graph forecasting.",
    classification: "CLASSIFIED // VERIFIED",
  },
  {
    id: "ACH_006",
    code: "CONF_CISCT_OPERATIONS",
    category: "LEADERSHIP",
    title: "CISCT International Conference Proceedings",
    organization: "CISCT Conference Committee",
    date: "May 2024 – Jul 2024",
    badge: "ACADEMIC OPERATIONS",
    description: "Managed technical desk, track coordination, and author verification for international research presentations.",
    classification: "CLASSIFIED // VERIFIED",
  },
];
