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
    year: "Aug 2023 – Present",
    organization: "IEEE STUDENT BRANCH",
    role: "BACKEND & TECHNICAL CONTRIBUTOR",
    badge: "TECHNICAL WING",
    scope: "Technical infrastructure, event portal backends, and technical workshop execution.",
    impact: [
      "Engineered web portals and check-in systems for branch hackathons and conferences.",
      "Conducted technical hands-on workshops on backend architectures, Git workflows, and REST APIs.",
      "Automated participant credentials and digital certification distribution workflows.",
    ],
    skillsApplied: ["Backend Architecture", "APIs", "Database Management", "Technical Leadership"],
    status: "VERIFIED",
  },
  {
    id: "EXP_002",
    nodeCode: "NODE_TECHNIEEEKS",
    year: "Jan 2024 – Nov 2024",
    organization: "TECHNIEEEKS",
    role: "BACKEND MANAGER",
    badge: "CORE OPERATIONS",
    scope: "High-traffic backend server management, database schema design, and server telemetry.",
    impact: [
      "Architected high-throughput backend APIs supporting simultaneous submissions during flagship competitions.",
      "Streamlined query performance in PostgreSQL and added Redis caching to reduce latency.",
      "Monitored live server telemetry, sustaining 100% uptime across multi-track coding contests.",
    ],
    skillsApplied: ["Node.js", "PostgreSQL", "System Telemetry", "Concurrency Optimization"],
    status: "ARCHIVED_SUCCESS",
  },
  {
    id: "EXP_003",
    nodeCode: "NODE_GRAPHETHON_2",
    year: "Feb 2024 – Apr 2024",
    organization: "GRAPH-E-THON 2.0",
    role: "REGISTRATION MANAGER",
    badge: "FLAGSHIP HACKATHON",
    scope: "Registration pipelines, team verification, and operational intake for 500+ hackathon participants.",
    impact: [
      "Orchestrated registration intake infrastructure handling 500+ applicants across multiple institutions.",
      "Implemented automated validation pipelines for team slot allocations and candidate rosters.",
      "Supervised real-time physical check-in desks with zero registration queue delays.",
    ],
    skillsApplied: ["Data Pipelines", "Workflow Automation", "Logistics Operations", "Event Management"],
    status: "ARCHIVED_SUCCESS",
  },
  {
    id: "EXP_004",
    nodeCode: "NODE_CISCT_CONF",
    year: "May 2024 – Jul 2024",
    organization: "CISCT INTERNATIONAL CONFERENCE",
    role: "PROCEEDINGS & TECHNICAL DESK",
    badge: "ACADEMIC CONFERENCE",
    scope: "International conference operations, research paper tracking, and technical session support.",
    impact: [
      "Coordinated presentation schedules and technical desk operations for international paper sessions.",
      "Standardized manuscript compliance, metadata formatting, and conference proceeding archives.",
      "Managed track operations facilitating seamless multi-session presenter workflows.",
    ],
    skillsApplied: ["Research Cataloging", "Technical Operations", "Quality Verification"],
    status: "VERIFIED",
  },
  {
    id: "EXP_005",
    nodeCode: "NODE_SAARTHI_25",
    year: "Jan 2025 – Feb 2025",
    organization: "SAARTHI '25",
    role: "HACKATHON VOLUNTEER & OPERATIONS LEAD",
    badge: "HACKATHON SQUAD",
    scope: "On-site mentoring, participant onboarding, infrastructure troubleshooting, and hardware distribution.",
    impact: [
      "Mentored 40+ hackathon teams on sensor wiring, microcontroller debugging, and cloud API integration.",
      "Maintained venue network switches and resolved hardware troubleshooting tickets promptly.",
    ],
    skillsApplied: ["Hardware Debugging", "Participant Support", "Network Infrastructure"],
    status: "COMPLETED",
  },
  {
    id: "EXP_006",
    nodeCode: "NODE_TBI_TDH",
    year: "Jun 2023 – May 2024",
    organization: "TBI / TDH INNOVATION INCUBATOR",
    role: "TECHNICAL & PROTOTYPING COLLABORATOR",
    badge: "INNOVATION HUB",
    scope: "Assisting startup incubatees with technical feasibility audits and prototype hardware/software building.",
    impact: [
      "Assisted startup incubatees with architectural reviews and rapid prototyping of embedded MVPs.",
      "Facilitated hardware microcontroller sensor integration and cloud deployment roadmaps.",
    ],
    skillsApplied: ["Rapid Prototyping", "IoT Hardware", "System Architecture"],
    status: "VERIFIED",
  },
];
