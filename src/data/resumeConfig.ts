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
 * derived directly from verified codebase implementations and portfolio metrics.
 */
export function getResumeData(): ResumeData {
  const technicalProjects: TechnicalProject[] = [
    {
      title: "Kaarobarie POS Billing Software",
      tagline: "Multi-Tenant Restaurant POS & Management SaaS",
      technologies: ["React 19", "TypeScript", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "Socket.IO", "Vite", "Tailwind CSS"],
      bullets: [
        "Architected a multi-tenant restaurant management SaaS with multi-franchise tenancy, visual table occupancy management, automated billing, and live kitchen order ticket (KOT) workflows using React, TypeScript, Node.js, Express, Prisma ORM, and PostgreSQL (Supabase), achieving sub-15ms p95 API response times and zero-leakage tenant isolation.",
        "Engineered 7-tier hierarchical Role-Based Access Control (RBAC) and real-time Socket.IO bi-directional event routing for kitchen display synchronization, automated payroll calculations, and ESC/POS thermal receipt printing (58mm/80mm), eliminating order coordination latency between floor staff and kitchen stations.",
      ],
      github: "https://github.com/saurabhrawatgthb",
    },
    {
      title: "Railway Gangmen Safety System",
      tagline: "Safety-Focused Embedded Railway Monitoring & Early Warning System",
      technologies: ["Embedded C++", "IoT Microcontrollers (Arduino Uno)", "Sensors & Telemetry", "RF Transceivers", "Python"],
      bullets: [
        "Developed an embedded safety-monitoring and early warning system to protect railway track maintenance personnel (gangmen) from oncoming train collision hazards using C++, Arduino Uno, proximity/vibration sensors, and RF transceivers, achieving real-time approach detection and instantaneous local audio-visual buzzer alarms.",
        "Implemented a low-latency multi-node telemetry pipeline with threshold-based sensor calibration and fail-safe signal broadcasting via C++ and Python serial communication listeners, significantly improving track-worker situational awareness across hazardous blind-curve operational zones.",
      ],
      github: "https://github.com/saurabhrawatgthb",
    },
    {
      title: "AI-Powered Missing Children Finder",
      tagline: "Distributed Computer Vision & Trajectory Analysis Search Grid",
      technologies: ["Python", "FastAPI", "YOLOv8", "InsightFace", "DeepSORT", "PaddleOCR", "OpenCV", "Docker", "Next.js"],
      bullets: [
        "Engineered an AI-powered surveillance search pipeline for identifying and tracking missing children across asynchronous CCTV footage streams using Python, FastAPI, Ultralytics YOLOv8, InsightFace (ArcFace embeddings), DeepSORT, and OpenCV, extracting 512-dimensional facial vector embeddings for high-accuracy identity re-identification.",
        "Integrated automated vehicle number-plate recognition (ANPR) using PaddleOCR alongside camera-network trajectory graph traversal within a Dockerized microservice and Next.js Leaflet map HUD, automating multi-camera movement forecasting and reducing manual surveillance auditing times during critical emergency response windows.",
      ],
      github: "https://github.com/saurabhrawatgthb",
    },
    {
      title: "IoT-Based Landslide Detection System",
      tagline: "Geological Instability Monitoring & Early Warning Network",
      technologies: ["Embedded C++", "Microcontroller Hardware", "MPU-6050 Accelerometer/Gyro", "Soil Moisture Sensors", "Python", "REST APIs"],
      bullets: [
        "Developed an IoT geological monitoring and early warning system to detect slope displacement and imminent landslides in vulnerable terrains using Embedded C++, MPU-6050 accelerometer/gyroscope sensors, soil moisture probes, and ADC modules, sampling angle tilt and soil saturation deltas with continuous anomaly threshold filtering.",
        "Implemented edge-to-cloud serial data transmission and automated emergency alerting logic using C++, Python, and REST endpoints, delivering instant multi-level hazard alerts (Advisory, Warning, Critical) to downstream monitoring consoles upon breach of geological slope stability thresholds.",
      ],
      github: "https://github.com/saurabhrawatgthb",
    },
    {
      title: "AI-Based Pothole Detection System",
      tagline: "Edge Computer Vision & Geo-Spatial Road Defect Alert Platform",
      technologies: ["TensorFlow.js", "Custom CNN Model", "JavaScript", "HTML5 Canvas", "Firebase Realtime DB", "Geolocation API"],
      bullets: [
        "Engineered a real-time road surface defect and pothole detection system utilizing client-side edge computer vision on live video streams with TensorFlow.js, a custom in-browser CNN model (`tfjs_model`), HTML5 Canvas, and Web APIs, classifying road surface damage directly on the client without cloud compute costs.",
        "Integrated automated GPS geolocation coordinate stamping and real-time cloud dispatch into Firebase Realtime Database with transactional deduplication, logging sub-meter geographical coordinates and hazard severity indices to prioritize municipal road repair workflows.",
      ],
      github: "https://github.com/saurabhrawatgthb",
    },
  ];

  const leadership: LeadershipEntry[] = [
    {
      organization: "IEEE Student Branch, GEHU",
      role: "Member & Organising Committee",
      events: "TechnIEEEks 2025, SAARTHI 2025, TechnIEEEks 2026",
      bullets: [
        "Coordinated technical operations, workshop logistics, and participant onboarding for flagship initiatives including TechnIEEEks 2025, SAARTHI 2025 (24-hour national hackathon), and TechnIEEEks 2026.",
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
      "Computer Science & Engineering undergraduate at Graphic Era Hill University with strong software engineering fundamentals (9+ CGPA). Hands-on experience developing multi-tenant SaaS platforms, computer vision pipelines, IoT embedded systems, and REST APIs. Demonstrated leadership, teamwork, and execution across national-level hackathons and technical campus communities.",
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
        skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
      },
      {
        category: "Web Development",
        skills: ["React.js", "Next.js", "Node.js", "Express.js", "HTML5", "CSS3", "REST APIs", "Tailwind CSS", "Socket.IO", "Vite"],
      },
      {
        category: "Databases & ORM",
        skills: ["PostgreSQL", "SQLite", "Supabase", "Neon", "Prisma ORM", "Firebase Realtime DB"],
      },
      {
        category: "AI/ML & Computer Vision",
        skills: ["Machine Learning", "Computer Vision", "YOLOv8", "InsightFace", "DeepSORT", "OpenCV", "PaddleOCR", "TensorFlow.js", "FastAPI"],
      },
      {
        category: "IoT & Systems",
        skills: ["Sensor Integration", "Embedded C++", "IoT Prototyping (Arduino Uno)", "Serial Telemetry", "Geospatial Systems"],
      },
      {
        category: "Developer Tools & DevOps",
        skills: ["Git", "GitHub", "VS Code", "Vercel", "Docker", "Docker Compose", "Postman"],
      },
      {
        category: "CS Fundamentals & Quality",
        skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "DBMS", "Operating Systems", "Computer Networks", "API & Unit Testing", "Debugging"],
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
