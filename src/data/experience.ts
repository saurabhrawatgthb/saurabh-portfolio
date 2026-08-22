export interface ExperienceEntry {
  id: string;
  nodeCode: string;
  year: string;
  organization: string;
  role: string;
  badge: string;
  scope: string;
  impact: string[];
  skillsApplied: string[];
  status: "ARCHIVED_SUCCESS" | "VERIFIED" | "COMPLETED";
}

export const experienceLog: ExperienceEntry[] = [
  {
    id: "EXP_001",
    nodeCode: "NODE_IEEE_SB",
    year: "2023 — PRESENT",
    organization: "IEEE STUDENT BRANCH",
    role: "BACKEND & TECHNICAL CONTRIBUTOR",
    badge: "TECHNICAL WING",
    scope: "Technical infrastructure, event portal backends, and technical workshop execution.",
    impact: [
      "Engineered and maintained web portals and event check-in systems for branch hackathons and conferences.",
      "Conducted technical hands-on sessions on modern backend architectures, Git workflows, and API design.",
      "Collaborated across multi-tier teams to automate participant credentials and certification distribution.",
    ],
    skillsApplied: ["Backend Architecture", "APIs", "Database Management", "Technical Leadership"],
    status: "VERIFIED",
  },
  {
    id: "EXP_002",
    nodeCode: "NODE_TECHNIEEEKS",
    year: "2024",
    organization: "TECHNIEEEKS",
    role: "BACKEND MANAGER",
    badge: "CORE OPERATIONS",
    scope: "High-traffic backend server management, database schema design, and server telemetry.",
    impact: [
      "Architected high-throughput backend APIs supporting simultaneous user submissions during flagship tech competitions.",
      "Streamlined query performance in PostgreSQL and implemented database caching to prevent bottleneck latency.",
      "Monitored live server metrics, ensuring 100% uptime throughout concurrent competitive coding and design tracks.",
    ],
    skillsApplied: ["Node.js", "PostgreSQL", "System Telemetry", "Concurrency Optimization"],
    status: "ARCHIVED_SUCCESS",
  },
  {
    id: "EXP_003",
    nodeCode: "NODE_GRAPHETHON_2",
    year: "2024",
    organization: "GRAPH-E-THON 2.0",
    role: "REGISTRATION MANAGER",
    badge: "FLAGSHIP HACKATHON",
    scope: "Registration pipelines, team verification, and operational intake for 500+ hackathon participants.",
    impact: [
      "Orchestrated registration and intake infrastructure handling 500+ participant applications across multiple universities.",
      "Developed automated validation workflows for participant resumes, team size validation, and team slot allocations.",
      "Managed real-time on-ground check-in desks with zero registration queue stall time.",
    ],
    skillsApplied: ["Data Pipelines", "Workflow Automation", "Logistics Operations", "Event Management"],
    status: "ARCHIVED_SUCCESS",
  },
  {
    id: "EXP_004",
    nodeCode: "NODE_CISCT_CONF",
    year: "2024",
    organization: "CISCT INTERNATIONAL CONFERENCE",
    role: "PROCEEDINGS & TECHNICAL DESK",
    badge: "ACADEMIC CONFERENCE",
    scope: "International conference operations, research paper tracking, and technical session support.",
    impact: [
      "Coordinated presentation schedules and technical desk infrastructure for international research paper presentations.",
      "Handled verification, formatting compliance, and cataloging of conference proceedings.",
      "Facilitated session chair workflows and real-time presentation switching across multiple parallel tracks.",
    ],
    skillsApplied: ["Research Cataloging", "Technical Operations", "Quality Verification"],
    status: "VERIFIED",
  },
  {
    id: "EXP_005",
    nodeCode: "NODE_SAARTHI_25",
    year: "2025",
    organization: "SAARTHI '25",
    role: "HACKATHON VOLUNTEER & OPERATIONS LEAD",
    badge: "HACKATHON SQUAD",
    scope: "On-site mentoring, participant onboarding, infrastructure troubleshooting, and hardware distribution.",
    impact: [
      "Supported 40+ hackathon teams with hardware sensors, microcontroller debugging, and API integration advice.",
      "Coordinated venue network infrastructure and real-time emergency desk resolution.",
    ],
    skillsApplied: ["Hardware Debugging", "Participant Support", "Network Infrastructure"],
    status: "COMPLETED",
  },
  {
    id: "EXP_006",
    nodeCode: "NODE_TBI_TDH",
    year: "2023 — 2024",
    organization: "TBI / TDH INNOVATION INCUBATOR",
    role: "TECHNICAL & PROTOTYPING COLLABORATOR",
    badge: "INNOVATION HUB",
    scope: "Assisting startup incubatees with technical feasibility audits and prototype hardware/software building.",
    impact: [
      "Participated in brainstorming, architectural review, and rapid prototyping of embedded and web-based MVPs.",
      "Assisted student teams in navigating cloud deployments and hardware microcontroller integration.",
    ],
    skillsApplied: ["Rapid Prototyping", "IoT Hardware", "System Architecture"],
    status: "VERIFIED",
  },
];
