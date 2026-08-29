import { profileData } from "./profile";
import { skillModules } from "./skills";
import { experienceLog } from "./experience";
import { projectsData } from "./projects";
import { achievementsData } from "./achievements";
import { researchData } from "./research";

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  location: string;
  phone?: string;
  github: string;
  linkedin: string;
  leetcode: string;
  website: string;
  summary: string;
  education: {
    degree: string;
    institution: string;
    period: string;
    status: string;
    score?: string;
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
  achievements: {
    title: string;
    organization: string;
    date: string;
    description: string;
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
    title: profileData.title,
    email: profileData.socials.email,
    location: profileData.location || "Dehradun, Uttarakhand, India",
    phone: profileData.phone || "+91 98765 43210",
    github: profileData.socials.github,
    linkedin: profileData.socials.linkedin,
    leetcode: profileData.socials.leetcode,
    website: profileData.socials.website || "https://saurabhrawat.dev",
    summary:
      "Computer Science Engineer and Systems Builder specializing in AI/Computer Vision systems, high-concurrency backends, and IoT hardware. Proven track record in architecting resilient distributed pipelines, optimizing database latency, and leading technical operations.",
    education: [
      {
        degree: `${profileData.education.degree} in ${profileData.education.field}`,
        institution: profileData.education.institution,
        period: profileData.education.period,
        status: profileData.education.status,
      },
    ],
    skillsByCategory: skillModules.map((mod) => ({
      category: mod.name,
      skills: mod.skills.map((s) => s.name),
    })),
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
    achievements: achievementsData.map((ach) => ({
      title: ach.title,
      organization: ach.organization,
      date: ach.date,
      description: ach.description,
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
  text += `${data.title}\n\n`;

  text += `============================================================\n`;
  text += `CONTACT INFORMATION\n`;
  text += `============================================================\n`;
  text += `Address / Location: ${data.location}\n`;
  text += `Email: ${data.email}\n`;
  text += `Phone: ${data.phone}\n`;
  text += `LinkedIn: ${data.linkedin}\n`;
  text += `GitHub: ${data.github}\n`;
  text += `Website / Portfolio: ${data.website}\n`;
  text += `LeetCode: ${data.leetcode}\n\n`;

  text += `============================================================\n`;
  text += `PROFESSIONAL SUMMARY\n`;
  text += `============================================================\n`;
  text += `${data.summary}\n\n`;

  text += `============================================================\n`;
  text += `EDUCATION\n`;
  text += `============================================================\n`;
  data.education.forEach((edu) => {
    text += `${edu.degree}\n`;
    text += `${edu.institution} | ${edu.period} (${edu.status})\n\n`;
  });

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

  text += `============================================================\n`;
  text += `EXPERIENCE & LEADERSHIP\n`;
  text += `============================================================\n`;
  data.experience.forEach((exp) => {
    text += `${exp.role.toUpperCase()} — ${exp.organization} (${exp.period})\n`;
    text += `Scope: ${exp.scope}\n`;
    exp.bullets.forEach((b) => {
      text += `  - ${b}\n`;
    });
    text += `Skills Applied: ${exp.skillsApplied.join(", ")}\n\n`;
  });

  text += `============================================================\n`;
  text += `RESEARCH & PUBLICATIONS\n`;
  text += `============================================================\n`;
  data.research.forEach((res) => {
    text += `${res.title}\n`;
    text += `Domain: ${res.domain} | Status: ${res.status}\n`;
    res.findings.forEach((f) => {
      text += `  - ${f}\n`;
    });
    text += `\n`;
  });

  text += `============================================================\n`;
  text += `HONORS & ACHIEVEMENTS\n`;
  text += `============================================================\n`;
  data.achievements.forEach((ach) => {
    text += `• ${ach.title} — ${ach.organization} (${ach.date})\n`;
    text += `  ${ach.description}\n`;
  });

  return text;
}
