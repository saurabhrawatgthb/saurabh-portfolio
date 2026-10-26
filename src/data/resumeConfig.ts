import { profileData } from "./profile";
import { skillModules } from "./skills";
import { experienceLog } from "./experience";
import { projectsData } from "./projects";
import { achievementsData } from "./achievements";
import { researchData } from "./research";

export interface TechnicalProject {
  title: string;
  tagline: string;
  technologies?: string[];
  bullets: string[];
  github?: string;
}

export interface LeadershipEntry {
  organization: string;
  role: string;
  events: string;
  bullets: string[];
}

export interface HackathonEntry {
  title: string;
  status?: string;
  organisation: string;
  description?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  institution: string;
  email: string;
  location: string;
  phone: string;
  github: string;
  linkedin: string;
  leetcode: string;
  x: string;
  website: string;
  summary: string;
  education: {
    institution: string;
    degree: string;
    status: string;
    details: string[];
  }[];
  skillsByCategory: {
    category: string;
    skills: string[];
  }[];
  technicalProjects: TechnicalProject[];
  leadership: LeadershipEntry[];
  hackathons: HackathonEntry[];
  // Backwards compatibility properties for portfolio components
  featuredProjects: {
    title: string;
    tagline: string;
    technologies: string[];
    metrics?: string;
    bullets: string[];
    github?: string;
    demo?: string;
  }[];
  organisations: {
    name: string;
    institution: string;
    role: string;
  }[];
  volunteering: {
    event: string;
    role: string;
    type: string;
    organisation: string;
  }[];
  experience: {
    organization: string;
    role: string;
    period: string;
    scope: string;
    bullets: string[];
    skillsApplied: string[];
  }[];
  research: {
    title: string;
    domain: string;
    status: string;
    findings: string[];
  }[];
}

/**
 * Dynamically constructs the single-source-of-truth Resume data
 * derived directly from the portfolio's verified data files.
 */
export function getResumeData(): ResumeData {
  const technicalProjects: TechnicalProject[] = [
    {
      title: "Kaarobarie POS Billing Software",
      tagline: "Restaurant Billing & Management Platform",
      technologies: ["Full-Stack", "Transaction Management", "Database Systems"],
      bullets: [
        "Architected and developed a full-featured restaurant billing and management platform to streamline dining operations.",
        "Engineered transactional workflows, automated order tracking, and dynamic receipt generation to eliminate billing latency.",
      ],
      github: "https://github.com/saurabhrawatgthb",
    },
    {
      title: "Railway Gangmen Safety System",
      tagline: "Safety-Focused Railway Monitoring & Warning System",
      technologies: ["Embedded Systems", "Hazard Detection", "Real-Time Alerts"],
      bullets: [
        "Developed a safety-focused railway alerting system designed to protect track maintenance personnel (gangmen) from oncoming train hazards.",
        "Implemented real-time hazard detection and automated warning mechanisms to enhance track-worker situational awareness.",
      ],
      github: "https://github.com/saurabhrawatgthb",
    },
    {
      title: "AI-Powered Missing Children Finder",
      tagline: "AI-Based Identification & Tracking Solution",
      technologies: ["Artificial Intelligence", "Computer Vision", "Facial Vector Matching"],
      bullets: [
        "Built an AI-based computer vision solution to assist in identifying and tracking missing children across surveillance camera feeds.",
        "Implemented facial vector matching and trajectory estimation to accelerate critical search operations during response windows.",
      ],
      github: "https://github.com/saurabhrawatgthb",
    },
    {
      title: "IoT-Based Landslide Detection System",
      tagline: "IoT-Based Geological Monitoring & Early Detection System",
      technologies: ["IoT Sensors", "Telemetry", "Early Warning Alerting"],
      bullets: [
        "Developed an IoT-based environmental monitoring and early detection system for landslide-prone terrains.",
        "Integrated multi-sensor telemetry to track geological displacement and soil moisture variations to trigger proactive hazard alerts.",
      ],
      github: "https://github.com/saurabhrawatgthb",
    },
    {
      title: "AI-Based Pothole Detection System",
      tagline: "Computer Vision Road Surface Defect Detection Solution",
      technologies: ["Computer Vision", "Surface Analysis", "Geo-Spatial Tagging"],
      bullets: [
        "Developed an AI-based road pothole detection solution leveraging computer vision algorithms for automated surface damage inspection.",
        "Automated road defect classification and coordinate logging to assist municipal teams with preventative infrastructure maintenance.",
      ],
      github: "https://github.com/saurabhrawatgthb",
    },
  ];

  const leadership: LeadershipEntry[] = [
    {
      organization: "IEEE Student Branch, GEHU",
      role: "Member & Organising Committee Member",
      events: "TechnIEEEks 2025, SAARTHI 2025, TechnIEEEks 2026",
      bullets: [
        "Served as an Organising Committee member for flagship initiatives including TechnIEEEks 2025, SAARTHI 2025 (24-hour national hackathon), and TechnIEEEks 2026.",
        "Demonstrated strong event coordination, teamwork, and logistics management across participant registration, scheduling, and workshop execution.",
        "Facilitated transparent team communication between faculty advisors, external mentors, and student participants throughout technical sessions.",
      ],
    },
    {
      organization: "Technology Business Incubator (TBI), GEU",
      role: "Member & Organising Committee Member",
      events: "Graphethon 2.0, Graphethon 3.0",
      bullets: [
        "Served as an Organising Committee member for Graphethon 2.0 (48-hour national hackathon) and Graphethon 3.0 (72-hour national hackathon).",
        "Managed high-pressure event logistics, venue coordination, and participant intake workflows across multi-day national hackathon sprints.",
        "Applied organizational and communication skills to coordinate cross-functional teams, ensuring uninterrupted operations and resource availability.",
      ],
    },
  ];

  const hackathons: HackathonEntry[] = [
    {
      title: "National-Level Hackathons",
      status: "SELECTED",
      organisation: "National Competitive Circuit",
      description: "Team selected for national-level hackathons across competitive multi-round development sprints.",
    },
    {
      title: "PRAXIS 2.0",
      status: "FINALIST",
      organisation: "Google Developer Groups",
      description: "Finalist in national technical hackathon solving real-world domain challenges.",
    },
    {
      title: "Economic Times X GenAI Hackathon",
      status: "SEMIFINALIST",
      organisation: "Economic Times",
      description: "Semifinalist in nationwide generative AI engineering competition.",
    },
    {
      title: "Neural Nexus AI/ML Challenge",
      status: "FINALIST",
      organisation: "Grafest 2026",
      description: "Finalist in competitive machine learning and computer vision challenge.",
    },
  ];

  return {
    name: profileData.name,
    title: "Computer Science & Engineering Student",
    institution: "Graphic Era Hill University",
    email: profileData.socials.email,
    location: profileData.location || "Dehradun, Uttarakhand, India",
    phone: profileData.phone || "+91 6395982464",
    github: profileData.socials.github,
    linkedin: profileData.socials.linkedin,
    leetcode: profileData.socials.leetcode,
    x: profileData.socials.x,
    website: profileData.socials.website || "https://saurabhrawat.dev",
    summary:
      "Computer Science & Engineering student at Graphic Era Hill University with strong problem-solving fundamentals (9+ CGPA). Active builder with hands-on technical experience developing AI/ML solutions, IoT embedded systems, and enterprise platforms. Proven leadership and teamwork in national-level hackathons and campus engineering communities.",
    education: [
      {
        institution: "Graphic Era Hill University",
        degree: "B.Tech — Computer Science & Engineering",
        status: "Currently Pursuing (Aug 2022 – Present)",
        details: [
          "Academic Achievement: 9+ CGPA in 1st Year & 9+ CGPA in 2nd Year",
        ],
      },
      {
        institution: "ISC Board (Class XII)",
        degree: "Intermediate",
        status: "Completed",
        details: ["Academic Achievement: 89%"],
      },
      {
        institution: "ICSE Board (Class X)",
        degree: "High School",
        status: "Completed",
        details: ["Academic Achievement: 94%"],
      },
    ],
    skillsByCategory: [
      {
        category: "Programming Languages",
        skills: ["C", "C++", "Java", "Python", "JavaScript"],
      },
      {
        category: "Web & Backend",
        skills: ["React", "Next.js", "Node.js", "FastAPI", "HTML5", "CSS3", "REST APIs"],
      },
      {
        category: "Databases & Storage",
        skills: ["PostgreSQL", "SQLite", "SQL"],
      },
      {
        category: "AI / ML & IoT",
        skills: ["Machine Learning", "Computer Vision", "Facial Vector Matching", "IoT Sensors", "Microcontroller Telemetry"],
      },
      {
        category: "Developer Tools",
        skills: ["Git", "GitHub", "Docker", "Vercel", "VS Code"],
      },
    ],
    technicalProjects,
    leadership,
    hackathons,
    // Preserved for portfolio compatibility
    featuredProjects: technicalProjects.map((p) => ({
      title: p.title,
      tagline: p.tagline,
      technologies: p.technologies || [],
      bullets: p.bullets,
      github: p.github,
    })),
    organisations: [
      {
        name: "IEEE Student Branch",
        institution: "Graphic Era Hill University",
        role: "Member",
      },
      {
        name: "Technology Business Incubator (TBI)",
        institution: "Graphic Era University",
        role: "Member",
      },
      {
        name: "The Designnovation Hub (TDH)",
        institution: "Graphic Era University",
        role: "Member",
      },
    ],
    volunteering: [
      {
        event: "TechnIEEEks 2025",
        role: "Organising Committee Member & Volunteer",
        type: "Annual Research Paper Writing Workshop",
        organisation: "IEEE Student Branch, GEHU",
      },
      {
        event: "TechnIEEEks 2026",
        role: "Organising Committee Member & Volunteer",
        type: "Annual Research Paper Writing Workshop",
        organisation: "IEEE Student Branch, GEHU",
      },
      {
        event: "CISCT International Conference",
        role: "Volunteer",
        type: "International Conference",
        organisation: "IEEE",
      },
    ],
    experience: experienceLog.map((exp) => ({
      organization: exp.organization,
      role: exp.role,
      period: exp.year,
      scope: exp.scope,
      bullets: exp.impact,
      skillsApplied: exp.skillsApplied,
    })),
    research: [
      {
        title: researchData.title,
        domain: researchData.domain,
        status: researchData.status,
        findings: researchData.keyFindings,
      },
    ],
  };
}

/**
 * Formats the dynamic resume into clean, ATS-compliant Plain Text
 * optimized for Visa campus placements and recruitment parsing engines.
 */
export function generateAtsPlainText(): string {
  const data = getResumeData();

  let text = `${data.name.toUpperCase()}\n`;
  text += `${data.title} | ${data.institution}\n`;
  text += `Email: ${data.email} | Phone: ${data.phone} | Location: ${data.location}\n`;
  text += `GitHub: ${data.github} | LinkedIn: ${data.linkedin} | LeetCode: ${data.leetcode}\n\n`;

  text += `============================================================\n`;
  text += `EDUCATION\n`;
  text += `============================================================\n`;
  data.education.forEach((edu) => {
    text += `${edu.institution} — ${edu.degree} (${edu.status})\n`;
    edu.details.forEach((d) => {
      text += `  • ${d}\n`;
    });
  });
  text += `\n`;

  text += `============================================================\n`;
  text += `TECHNICAL SKILLS\n`;
  text += `============================================================\n`;
  data.skillsByCategory.forEach((cat) => {
    text += `• ${cat.category}: ${cat.skills.join(", ")}\n`;
  });
  text += `\n`;

  text += `============================================================\n`;
  text += `TECHNICAL EXPERIENCE & PROJECTS\n`;
  text += `============================================================\n`;
  data.technicalProjects.forEach((proj) => {
    text += `${proj.title.toUpperCase()} — ${proj.tagline}\n`;
    if (proj.technologies && proj.technologies.length > 0) {
      text += `Technologies: ${proj.technologies.join(", ")}\n`;
    }
    proj.bullets.forEach((b) => {
      text += `  • ${b}\n`;
    });
    text += `\n`;
  });

  text += `============================================================\n`;
  text += `MANAGEMENT & LEADERSHIP EXPERIENCE\n`;
  text += `============================================================\n`;
  data.leadership.forEach((lead) => {
    text += `${lead.organization.toUpperCase()} — ${lead.role}\n`;
    text += `Initiatives: ${lead.events}\n`;
    lead.bullets.forEach((b) => {
      text += `  • ${b}\n`;
    });
    text += `\n`;
  });

  text += `============================================================\n`;
  text += `HACKATHON ACHIEVEMENTS\n`;
  text += `============================================================\n`;
  data.hackathons.forEach((hack) => {
    const statusTag = hack.status ? `[${hack.status}] ` : "";
    text += `• ${statusTag}${hack.title} (${hack.organisation})\n`;
    if (hack.description) {
      text += `  ${hack.description}\n`;
    }
  });

  return text;
}
