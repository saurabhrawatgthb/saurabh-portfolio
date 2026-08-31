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
    role: "MEMBER",
    badge: "STUDENT BRANCH",
    scope: "Active student member contributing to technical community initiatives, seminars, and branch activities.",
    impact: [
      "Engaged in technical sessions, peer learning groups, and community workshops.",
      "Assisted in coordinating departmental student outreach and technical community programs.",
    ],
    skillsApplied: ["Technical Community", "Collaboration", "Student Outreach"],
    status: "VERIFIED",
  },
  {
    id: "EXP_002",
    nodeCode: "NODE_TECHNIEEEKS_25",
    year: "2024 – 2025",
    organization: "TECHNIEEEKS'25 — IEEE SB GEHU",
    role: "ACTIVE CONTRIBUTOR & VOLUNTEER",
    badge: "RESEARCH WORKSHOP",
    scope: "Annual Research Paper Writing Workshop conducted by IEEE Student Branch, Graphic Era Hill University.",
    impact: [
      "Actively contributed to the successful conduction and volunteering operations of the workshop.",
      "Assisted participants with workshop logistics, resource materials, and session coordination.",
    ],
    skillsApplied: ["Event Volunteering", "Workshop Coordination", "Participant Assistance"],
    status: "ARCHIVED_SUCCESS",
  },
  {
    id: "EXP_003",
    nodeCode: "NODE_SAARTHI_25",
    year: "2025",
    organization: "SAARTHI'25 — IEEE SB GEHU",
    role: "ORGANISING & MANAGEMENT COMMITTEE",
    badge: "24-HR NATIONAL HACKATHON",
    scope: "National-level 24-hour hackathon organised by IEEE Student Branch, Graphic Era Hill University.",
    impact: [
      "Served on the Organising & Management Committee managing event operations, venue management, and participant flow.",
      "Coordinated hackathon timelines, team checkpoints, and administrative logistics across the 24-hour event.",
    ],
    skillsApplied: ["Event Management", "Operations", "Hackathon Organisation", "Team Coordination"],
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
    role: "ACTIVE CONTRIBUTOR & VOLUNTEER",
    badge: "RESEARCH WORKSHOP",
    scope: "Annual Research Paper Writing Workshop conducted by IEEE Student Branch, Graphic Era Hill University.",
    impact: [
      "Actively contributed to the planning, volunteer desk operations, and execution of the annual workshop.",
      "Supported attendee onboarding and workshop session management.",
    ],
    skillsApplied: ["Workshop Volunteering", "Event Operations", "Logistics"],
    status: "VERIFIED",
  },
  {
    id: "EXP_006",
    nodeCode: "NODE_TBI_GEU",
    year: "2023 – Present",
    organization: "TBI (TECHNOLOGY BUSINESS INCUBATOR), GRAPHIC ERA UNIVERSITY",
    role: "MEMBER",
    badge: "INCUBATOR NODE",
    scope: "Member of the Technology Business Incubator community at Graphic Era University.",
    impact: [
      "Participated in incubator technical sessions, startup showcases, and innovation initiatives.",
      "Contributed to community activities fostering technology development and entrepreneurship.",
    ],
    skillsApplied: ["Innovation Ecosystem", "Technology Prototyping", "Community Engagement"],
    status: "VERIFIED",
  },
  {
    id: "EXP_007",
    nodeCode: "NODE_GRAPHETHON_2",
    year: "2024",
    organization: "GRAPH-E-THON 2.0 — TBI GEU",
    role: "MANAGEMENT COMMITTEE",
    badge: "48-HR NATIONAL HACKATHON",
    scope: "48-hour national-level hackathon organised under Technology Business Incubator, Graphic Era University.",
    impact: [
      "Member of the Management Committee handling registration, verification desk, and on-ground management.",
      "Facilitated team check-ins, coordination schedules, and operational management during the 48-hour sprint.",
    ],
    skillsApplied: ["Hackathon Management", "Operational Logistics", "Participant Intake"],
    status: "ARCHIVED_SUCCESS",
  },
  {
    id: "EXP_008",
    nodeCode: "NODE_GRAPHETHON_3",
    year: "2025",
    organization: "GRAPH-E-THON 3.0 — TBI GEU",
    role: "MANAGEMENT COMMITTEE",
    badge: "72-HR NATIONAL HACKATHON",
    scope: "72-hour national-level hackathon organised under Technology Business Incubator, Graphic Era University.",
    impact: [
      "Served on the Management Committee for the 72-hour flagship national hackathon.",
      "Managed logistics, scheduling coordination, and operational workflows throughout the event.",
    ],
    skillsApplied: ["Large-Scale Event Operations", "Management Committee", "Logistics Coordination"],
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

