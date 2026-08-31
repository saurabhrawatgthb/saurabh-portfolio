import { profileData } from "./profile";
import { skillModules } from "./skills";
import { experienceLog } from "./experience";
import { projectsData } from "./projects";
import { achievementsData } from "./achievements";
import { researchData } from "./research";

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
  organisations: {
    name: string;
    institution: string;
    role: string;
  }[];
  leadership: {
    event: string;
    role: string;
    type: string;
    organisation: string;
  }[];
  volunteering: {
    event: string;
    role: string;
    type: string;
    organisation: string;
  }[];
  hackathons: {
    title: string;
    status?: string;
    organisation: string;
  }[];
  skillsByCategory: {
    category: string;
    skills: string[];
  }[];
  featuredProjects: {
    title: string;
    tagline: string;
    technologies: string[];
    metrics?: string;
    bullets: string[];
    github?: string;
    demo?: string;
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
 * derived directly from the portfolio's data files.
 */
export function getResumeData(): ResumeData {
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
      "Undergraduate Computer Science & Engineering student at Graphic Era Hill University. Builder exploring AI, computer vision systems, backend APIs, and IoT hardware with strong academic performance (9+ CGPA) and active hackathon and technical community involvement.",
    education: [
      {
        institution: "Graphic Era Hill University",
        degree: "B.Tech — Computer Science & Engineering",
        status: "Currently Pursuing",
        details: [
          "Academic Record: 9+ CGPA in 1st Year & 9+ CGPA in 2nd Year",
        ],
      },
      {
        institution: "ICSE Board",
        degree: "High School (Class X)",
        status: "Completed",
        details: ["Academic Achievement: 94%"],
      },
      {
        institution: "ISC Board",
        degree: "Intermediate (Class XII)",
        status: "Completed",
        details: ["Academic Achievement: 89%"],
      },
    ],
    organisations: [
      {
        name: "IEEE Student Branch",
        institution: "Graphic Era Hill University",
        role: "Member",
      },
      {
        name: "TBI (Technology Business Incubator)",
        institution: "Graphic Era University",
        role: "Member",
      },
      {
        name: "TDH (The Designnovation Hub)",
        institution: "Graphic Era University",
        role: "Member",
      },
    ],
    leadership: [
      {
        event: "SAARTHI'25",
        role: "Organising & Management Committee",
        type: "National-Level 24-Hour Hackathon",
        organisation: "IEEE Student Branch, Graphic Era Hill University",
      },
      {
        event: "GRAPH-E-THON 2.0",
        role: "Management Committee",
        type: "48-Hour National-Level Hackathon",
        organisation: "Technology Business Incubator, Graphic Era University",
      },
      {
        event: "GRAPH-E-THON 3.0",
        role: "Management Committee",
        type: "72-Hour National-Level Hackathon",
        organisation: "Technology Business Incubator, Graphic Era University",
      },
    ],
    volunteering: [
      {
        event: "TECHNIEEEKS'25",
        role: "Active Contributor & Volunteer",
        type: "Annual Research Paper Writing Workshop",
        organisation: "IEEE Student Branch, Graphic Era Hill University",
      },
      {
        event: "TECHNIEEEKS'26",
        role: "Active Contributor & Volunteer",
        type: "Annual Research Paper Writing Workshop",
        organisation: "IEEE Student Branch, Graphic Era Hill University",
      },
      {
        event: "CISCT International Conference",
        role: "Volunteer",
        type: "International Conference",
        organisation: "IEEE",
      },
    ],
    hackathons: [
      {
        title: "PRAXIS 2.0",
        status: "FINALIST",
        organisation: "Google Developer Groups",
      },
      {
        title: "Economic Times X GenAI Hackathon",
        status: "SEMIFINALIST",
        organisation: "Economic Times",
      },
      {
        title: "Neural Nexus AI/ML Challenge",
        status: "FINALIST",
        organisation: "Grafest 2026",
      },
      {
        title: "Hack for Green Bharat Hackathon",
        organisation: "National Initiative",
      },
      {
        title: "Innovate by NSUT'26",
        organisation: "NSUT",
      },
      {
        title: "Hack The Winter — The Second Wave",
        organisation: "Graphic Era University",
      },
      {
        title: "Innovate4FinLit Hackathon",
        organisation: "Fintech Initiative",
      },
    ],
    skillsByCategory: [
      {
        category: "PROGRAMMING",
        skills: ["C", "C++", "Java", "Python", "JavaScript"],
      },
      {
        category: "WEB",
        skills: ["HTML", "CSS", "React", "Next.js"],
      },
      {
        category: "BACKEND",
        skills: ["Node.js", "FastAPI"],
      },
      {
        category: "DATABASE",
        skills: ["PostgreSQL", "SQLite", "SQL"],
      },
      {
        category: "AI / ML",
        skills: ["Machine Learning", "Computer Vision", "LLMs", "Embeddings"],
      },
      {
        category: "TOOLS",
        skills: ["Git", "GitHub", "Docker", "Vercel"],
      },
    ],
    featuredProjects: projectsData.map((proj) => ({
      title: proj.title,
      tagline: proj.tagline,
      technologies: proj.technologies,
      metrics: proj.highlightMetric ? `${proj.highlightMetric.label}: ${proj.highlightMetric.value}` : undefined,
      bullets: [
        proj.brief,
        `Architecture: ${proj.architecture.flowSummary}`,
        ...proj.keyFeatures.slice(0, 3),
      ],
      github: proj.github,
      demo: proj.demo,
    })),
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
 * Formats the dynamic resume into clean, ATS-compliant Plain Text / Markdown
 * for instant 1-click clipboard copying.
 */
export function generateAtsPlainText(): string {
  const data = getResumeData();

  let text = `${data.name.toUpperCase()}\n`;
  text += `${data.title} — ${data.institution}\n\n`;

  text += `============================================================\n`;
  text += `CONTACT INFORMATION\n`;
  text += `============================================================\n`;
  text += `Phone: ${data.phone}\n`;
  text += `Email: ${data.email}\n`;
  text += `Location: ${data.location}\n`;
  text += `GitHub: ${data.github}\n`;
  text += `LinkedIn: ${data.linkedin}\n`;
  text += `LeetCode: ${data.leetcode}\n`;
  text += `X: ${data.x}\n`;
  text += `Website: ${data.website}\n\n`;

  text += `============================================================\n`;
  text += `EDUCATION\n`;
  text += `============================================================\n`;
  data.education.forEach((edu) => {
    text += `${edu.institution}\n`;
    text += `${edu.degree} (${edu.status})\n`;
    edu.details.forEach((d) => {
      text += `  • ${d}\n`;
    });
    text += `\n`;
  });

  text += `============================================================\n`;
  text += `ORGANISATIONS\n`;
  text += `============================================================\n`;
  data.organisations.forEach((org) => {
    text += `• ${org.name}, ${org.institution} — ${org.role}\n`;
  });
  text += `\n`;

  text += `============================================================\n`;
  text += `LEADERSHIP & MANAGEMENT EXPERIENCE\n`;
  text += `============================================================\n`;
  data.leadership.forEach((lead) => {
    text += `• ${lead.event}\n`;
    text += `  Role: ${lead.role}\n`;
    text += `  Type: ${lead.type}\n`;
    text += `  Organiser: ${lead.organisation}\n\n`;
  });

  text += `============================================================\n`;
  text += `VOLUNTEERING & CONTRIBUTION\n`;
  text += `============================================================\n`;
  data.volunteering.forEach((vol) => {
    text += `• ${vol.event}\n`;
    text += `  Role: ${vol.role}\n`;
    text += `  Type: ${vol.type}\n`;
    text += `  Organiser: ${vol.organisation}\n\n`;
  });

  text += `============================================================\n`;
  text += `HACKATHON ACHIEVEMENTS & RECORD\n`;
  text += `============================================================\n`;
  data.hackathons.forEach((hack) => {
    if (hack.status) {
      text += `• ${hack.status}: ${hack.title} (${hack.organisation})\n`;
    } else {
      text += `• ${hack.title} (${hack.organisation})\n`;
    }
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
  text += `KEY PROJECTS\n`;
  text += `============================================================\n`;
  data.featuredProjects.forEach((proj) => {
    text += `${proj.title.toUpperCase()} | ${proj.tagline}\n`;
    text += `Technologies: ${proj.technologies.join(", ")}\n`;
    if (proj.metrics) text += `Metric: ${proj.metrics}\n`;
    proj.bullets.forEach((b) => {
      text += `  - ${b}\n`;
    });
    text += `\n`;
  });

  return text;
}

