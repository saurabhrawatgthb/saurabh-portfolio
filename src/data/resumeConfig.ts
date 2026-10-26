import { profileData } from "./profile";
import { experienceLog } from "./experience";
import { researchData } from "./research";

export interface TechnicalProject {
  title: string;
  tagline: string;
  technologies: string[];
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
 * targeted for Entry-Level Software Development Engineer (SDE) / Software Engineer roles (Visa Campus Placements).
 */
export function getResumeData(): ResumeData {
  const technicalProjects: TechnicalProject[] = [
    {
      title: "Kaarobarie POS Billing Software",
      tagline: "Full-Stack Restaurant Management & POS SaaS Platform",
      technologies: ["React", "TypeScript", "Node.js", "Express", "Prisma ORM", "PostgreSQL (Supabase)", "Socket.IO", "Vite"],
      bullets: [
        "Architected a multi-tenant restaurant billing and inventory SaaS supporting multi-franchise tenancy, real-time table occupancy tracking, and kitchen order ticket (KOT) workflows using React, TypeScript, Node.js, Express, Prisma ORM, and PostgreSQL.",
        "Implemented 7-tier hierarchical Role-Based Access Control (RBAC), secure JWT authentication, and transactional order settlement logic, ensuring complete multi-tenant database isolation and robust API error handling.",
        "Integrated real-time bi-directional Socket.IO event synchronization for live kitchen displays and developed an ESC/POS thermal printing spooler (58mm/80mm), eliminating order coordination delays between dining terminals and kitchen stations.",
      ],
      github: "https://github.com/saurabhrawatgthb",
    },
    {
      title: "Railway Gangmen Safety System",
      tagline: "Embedded Safety Architecture & Hazard Telemetry Pipeline",
      technologies: ["C++", "Arduino Uno", "IoT Sensors", "RF Transceivers", "Python"],
      bullets: [
        "Developed a safety-focused embedded monitoring and alerting system to safeguard track maintenance crews from oncoming train collision hazards using C++, Arduino Uno, proximity/vibration sensors, and RF transceivers.",
        "Implemented a low-latency multi-node telemetry pipeline with threshold-based sensor calibration and fail-safe signal broadcasting via C++ and Python serial communication listeners, enabling reliable real-time approach warning.",
      ],
      github: "https://github.com/saurabhrawatgthb",
    },
    {
      title: "AI-Powered Missing Children Finder",
      tagline: "Distributed Surveillance Video Processing & Trajectory Graph Grid",
      technologies: ["Python", "FastAPI", "YOLOv8", "InsightFace", "DeepSORT", "PaddleOCR", "OpenCV", "Docker"],
      bullets: [
        "Engineered a distributed video-processing and surveillance search pipeline for identifying missing individuals across CCTV camera feeds using Python, FastAPI, Ultralytics YOLOv8, InsightFace embeddings, and DeepSORT tracking.",
        "Implemented automated vehicle license-plate recognition using PaddleOCR alongside a graph traversal algorithm across camera-network junctions, forecasting probable movement trajectories and expediting search operations.",
      ],
      github: "https://github.com/saurabhrawatgthb",
    },
    {
      title: "IoT-Based Landslide Detection System",
      tagline: "Geological Instability Monitoring & Early Warning Network",
      technologies: ["Embedded C++", "Microcontroller Hardware", "MPU-6050 Accelerometer/Gyro", "Soil Moisture Sensors", "Python", "REST APIs"],
      bullets: [
        "Developed an IoT geological monitoring system to detect slope displacement and imminent landslides using Embedded C++, MPU-6050 accelerometer/gyroscope sensors, soil moisture probes, and continuous anomaly threshold filtering.",
        "Implemented edge data transmission and automated multi-level alert dispatch (Advisory, Warning, Critical) via C++, Python, and REST endpoints to notify downstream monitoring interfaces upon threshold breaches.",
      ],
      github: "https://github.com/saurabhrawatgthb",
    },
    {
      title: "AI-Based Pothole Detection System",
      tagline: "Edge Computer Vision & Geo-Spatial Road Defect Platform",
      technologies: ["TensorFlow.js", "CNN Model", "JavaScript", "HTML5 Canvas", "Firebase Realtime DB", "Geolocation API"],
      bullets: [
        "Developed a road surface defect and pothole detection solution utilizing client-side edge computer vision with TensorFlow.js, a lightweight CNN model, HTML5 Canvas, and Web APIs, classifying surface anomalies directly on device.",
        "Integrated automated GPS geolocation stamping and real-time cloud dispatch into Firebase Realtime Database with transactional deduplication, logging coordinate data to assist preventative infrastructure maintenance.",
      ],
      github: "https://github.com/saurabhrawatgthb",
    },
  ];

  const leadership: LeadershipEntry[] = [
    {
      organization: "IEEE Student Branch, GEHU",
      role: "Member & Organising Committee",
      events: "TechnIEEEks '25, SAARTHI '25, TechnIEEEks '26",
      bullets: [
        "Coordinated technical operations, workshop logistics, and participant onboarding for flagship initiatives including TechnIEEEks '25, SAARTHI '25 (24-hour national hackathon), and TechnIEEEks '26.",
        "Demonstrated structured event coordination and cross-functional teamwork, facilitating transparent communication between faculty advisors, external technical mentors, and student attendees across multi-day sessions.",
      ],
    },
    {
      organization: "Technology Business Incubator (TBI), GEU",
      role: "Member & Organising Committee",
      events: "Graphethon 2.0 (48-Hr), Graphethon 3.0 (72-Hr)",
      bullets: [
        "Managed on-ground event operations and participant registration workflows for 500+ attendees during the 48-hour Graphethon 2.0 and 72-hour Graphethon 3.0 flagship national hackathons.",
        "Applied proactive team leadership and operational problem-solving to coordinate venue logistics, mentor schedules, and crisis communications, ensuring uninterrupted 24/7 hackathon sprint execution.",
      ],
    },
  ];

  const hackathons: HackathonEntry[] = [
    {
      title: "National-Level Hackathons Selection",
      status: "SELECTED",
      organisation: "National Competitive Circuit",
      description: "Team selected for national-level hackathons across competitive development sprints, including MINDCRAFT 2K26 (Top-40 Selection).",
    },
    {
      title: "PRAXIS 2.0",
      status: "FINALIST",
      organisation: "Google Developer Groups",
      description: "Finalist in national technical hackathon building scalable software solutions for real-world domain challenges.",
    },
    {
      title: "Economic Times X GenAI Hackathon",
      status: "SEMIFINALIST",
      organisation: "Economic Times",
      description: "Semifinalist in nationwide generative AI engineering and systems architecture competition.",
    },
    {
      title: "Neural Nexus AI/ML Challenge",
      status: "FINALIST",
      organisation: "Grafest 2026",
      description: "Finalist in competitive machine learning, deep learning, and computer vision challenge.",
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
      "Computer Science & Engineering student at Graphic Era Hill University seeking an Entry-Level Software Development Engineer (SDE) role. Strong foundation in Data Structures & Algorithms, Object-Oriented Programming, and Relational Database Systems. Proven experience building full-stack web applications, backend REST APIs, and embedded systems with Java, C++, Python, TypeScript, and SQL.",
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
        category: "Languages",
        skills: ["Java", "C++", "C", "Python", "JavaScript", "TypeScript", "SQL"],
      },
      {
        category: "Core CS",
        skills: ["Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)", "DBMS", "Operating Systems", "Computer Networks"],
      },
      {
        category: "Web & Backend",
        skills: ["HTML5", "CSS3", "React", "Next.js", "Node.js", "TypeScript", "REST APIs"],
      },
      {
        category: "Databases",
        skills: ["PostgreSQL", "SQLite", "Prisma", "Supabase/Neon"],
      },
      {
        category: "Tools",
        skills: ["Git", "GitHub", "VS Code", "Vercel"],
      },
      {
        category: "Additional",
        skills: ["Machine Learning", "Computer Vision", "YOLOv8", "FastAPI", "IoT"],
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
        event: "TechnIEEEks '25",
        role: "Organising Committee Member & Volunteer",
        type: "Annual Research Paper Writing Workshop",
        organisation: "IEEE Student Branch, GEHU",
      },
      {
        event: "TechnIEEEks '26",
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
  text += `Computer Science and Engineering Student | Aspiring Software Development Engineer (SDE)\n`;
  text += `${data.institution}\n`;
  text += `Email: ${data.email} | Phone: ${data.phone} | Location: ${data.location}\n`;
  text += `GitHub: ${data.github} | LinkedIn: ${data.linkedin} | LeetCode: ${data.leetcode} | Portfolio: ${data.website}\n\n`;

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
  text += `SOFTWARE ENGINEERING PROJECTS\n`;
  text += `============================================================\n`;
  data.technicalProjects.forEach((proj) => {
    text += `${proj.title.toUpperCase()} | ${proj.tagline}\n`;
    if (proj.technologies && proj.technologies.length > 0) {
      text += `Technologies: ${proj.technologies.join(", ")}\n`;
    }
    proj.bullets.forEach((b) => {
      text += `  • ${b}\n`;
    });
    text += `\n`;
  });

  text += `============================================================\n`;
  text += `LEADERSHIP & ACHIEVEMENTS\n`;
  text += `============================================================\n`;
  text += `LEADERSHIP:\n`;
  data.leadership.forEach((lead) => {
    text += `• ${lead.organization} — ${lead.role}\n`;
    text += `  Initiatives: ${lead.events}\n`;
    lead.bullets.forEach((b) => {
      text += `    - ${b}\n`;
    });
  });
  text += `\nHACKATHON ACHIEVEMENTS:\n`;
  data.hackathons.forEach((hack) => {
    const statusTag = hack.status ? `[${hack.status}] ` : "";
    text += `• ${statusTag}${hack.title} (${hack.organisation})\n`;
    if (hack.description) {
      text += `  ${hack.description}\n`;
    }
  });

  return text;
}
