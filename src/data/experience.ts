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
    nodeCode: "NODE_IEEE_SB_GEHU",
    year: "Aug 2023 – Present",
    organization: "IEEE STUDENT BRANCH, GRAPHIC ERA HILL UNIVERSITY",
    role: "MEMBER & ORGANISING COMMITTEE",
    badge: "STUDENT BRANCH",
    scope: "Active student member and organizing committee contributor for technical community initiatives, seminars, and branch activities.",
    impact: [
      "Engaged in technical sessions, peer learning groups, and community workshops across the university.",
      "Assisted in coordinating departmental student outreach and technical community programs.",
    ],
    skillsApplied: ["Event Coordination", "Teamwork", "Logistics", "Communication", "Organisational Skills"],
    status: "VERIFIED",
  },
  {
    id: "EXP_002",
    nodeCode: "NODE_TECHNIEEEKS_25",
    year: "2024 – 2025",
    organization: "TECHNIEEEKS'25 — IEEE SB GEHU",
    role: "ORGANISING COMMITTEE MEMBER & VOLUNTEER",
    badge: "RESEARCH WORKSHOP",
    scope: "Annual Research Paper Writing Workshop conducted by IEEE Student Branch, Graphic Era Hill University.",
    impact: [
      "Served on the Organising Committee managing event logistics, session scheduling, and participant assistance.",
      "Coordinated cross-team communications and resource materials to ensure seamless workshop execution.",
    ],
    skillsApplied: ["Event Coordination", "Teamwork", "Logistics", "Communication", "Organisational Skills"],
    status: "ARCHIVED_SUCCESS",
  },
  {
    id: "EXP_003",
    nodeCode: "NODE_SAARTHI_25",
    year: "2025",
    organization: "SAARTHI'25 — IEEE SB GEHU",
    role: "ORGANISING COMMITTEE MEMBER",
    badge: "24-HR NATIONAL HACKATHON",
    scope: "National-level 24-hour hackathon organised by IEEE Student Branch, Graphic Era Hill University.",
    impact: [
      "Served on the Organising Committee managing 24-hour hackathon operations, venue logistics, and participant flow.",
      "Led on-ground team communication, scheduling milestones, and participant support across the national event.",
    ],
    skillsApplied: ["Event Coordination", "Teamwork", "Logistics", "Communication", "Organisational Skills"],
    status: "COMPLETED",
  },
  {
    id: "EXP_004",
    nodeCode: "NODE_CISCT_CONF",
    year: "2024",
    organization: "CISCT INTERNATIONAL CONFERENCE",
    role: "VOLUNTEER",
    badge: "IEEE CONFERENCE",
    scope: "International conference organised by IEEE.",
    impact: [
      "Volunteered in supporting conference technical desk operations and session assistance.",
      "Supported presenter workflows and helped coordinate venue logistics for attendees.",
    ],
    skillsApplied: ["Conference Operations", "Event Support", "Volunteer Logistics"],
    status: "VERIFIED",
  },
  {
    id: "EXP_005",
    nodeCode: "NODE_TECHNIEEEKS_26",
    year: "2025 – 2026",
    organization: "TECHNIEEEKS'26 — IEEE SB GEHU",
    role: "ORGANISING COMMITTEE MEMBER & VOLUNTEER",
    badge: "RESEARCH WORKSHOP",
    scope: "Annual Research Paper Writing Workshop conducted by IEEE Student Branch, Graphic Era Hill University.",
    impact: [
      "Served on the Organising Committee driving participant onboarding, session operations, and volunteer workflows.",
      "Applied structured organisational skills and team logistics to deliver the flagship annual research workshop.",
    ],
    skillsApplied: ["Event Coordination", "Teamwork", "Logistics", "Communication", "Organisational Skills"],
    status: "VERIFIED",
  },
  {
    id: "EXP_006",
    nodeCode: "NODE_TBI_GEU",
    year: "2023 – Present",
    organization: "TBI (TECHNOLOGY BUSINESS INCUBATOR), GRAPHIC ERA UNIVERSITY",
    role: "MEMBER & ORGANISING COMMITTEE",
    badge: "INCUBATOR NODE",
    scope: "Member and organizing committee contributor of the Technology Business Incubator community at Graphic Era University.",
    impact: [
      "Participated in incubator technical sessions, startup showcases, and innovation initiatives.",
      "Contributed to community activities fostering technology development and entrepreneurship.",
    ],
    skillsApplied: ["Event Coordination", "Teamwork", "Logistics", "Communication", "Organisational Skills"],
    status: "VERIFIED",
  },
  {
    id: "EXP_007",
    nodeCode: "NODE_GRAPHETHON_2",
    year: "2024",
    organization: "GRAPH-E-THON 2.0 — TBI GEU",
    role: "ORGANISING COMMITTEE MEMBER",
    badge: "48-HR NATIONAL HACKATHON",
    scope: "48-hour national-level hackathon organised under Technology Business Incubator, Graphic Era University.",
    impact: [
      "Served on the Organising Committee managing 48-hour national hackathon participant registration and on-ground logistics for 500+ attendees.",
      "Maintained proactive communication channels and team coordination throughout the high-intensity sprint.",
    ],
    skillsApplied: ["Event Coordination", "Teamwork", "Logistics", "Communication", "Organisational Skills"],
    status: "ARCHIVED_SUCCESS",
  },
  {
    id: "EXP_008",
    nodeCode: "NODE_GRAPHETHON_3",
    year: "2025",
    organization: "GRAPH-E-THON 3.0 — TBI GEU",
    role: "ORGANISING COMMITTEE MEMBER",
    badge: "72-HR NATIONAL HACKATHON",
    scope: "72-hour national-level hackathon organised under Technology Business Incubator, Graphic Era University.",
    impact: [
      "Served on the Organising Committee for the flagship 72-hour national hackathon, managing multi-team operations.",
      "Oversaw venue logistics, participant support, and schedule coordination to ensure uninterrupted event execution.",
    ],
    skillsApplied: ["Event Coordination", "Teamwork", "Logistics", "Communication", "Organisational Skills"],
    status: "VERIFIED",
  },
  {
    id: "EXP_009",
    nodeCode: "NODE_TDH_GEU",
    year: "2024 – Present",
    organization: "TDH (THE DESIGNNOVATION HUB), GRAPHIC ERA UNIVERSITY",
    role: "MEMBER",
    badge: "DESIGN & INNOVATION",
    scope: "Member of The Designnovation Hub at Graphic Era University.",
    impact: [
      "Participated in design-thinking workshops, rapid prototyping discussions, and innovation challenges.",
      "Collaborated with peers on technology and design integration projects.",
    ],
    skillsApplied: ["Design Thinking", "Prototyping", "Technical Collaboration"],
    status: "VERIFIED",
  },
];
