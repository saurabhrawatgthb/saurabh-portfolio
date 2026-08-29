export interface ProfileData {
  id: string;
  name: string;
  codename: string;
  status: "ACTIVE" | "INITIALIZING" | "STANDBY";
  clearanceLevel: string;
  systemNode: string;
  title: string;
  tagline: string;
  location: string;
  phone: string;
  address: string;
  quote: string;
  education: {
    degree: string;
    field: string;
    institution: string;
    period: string;
    status: string;
  };
  focusAreas: string[];
  specs: {
    label: string;
    value: string;
  }[];
  socials: {
    github: string;
    leetcode: string;
    linkedin: string;
    x: string;
    email: string;
    website: string;
    phone: string;
  };
}

export const profileData: ProfileData = {
  id: "SR-001",
  name: "SAURABH RAWAT",
  codename: "ARCHITECT_ALPHA",
  status: "ACTIVE",
  clearanceLevel: "LEVEL-5 ROOT",
  systemNode: "DEHRADUN_NODE_IN",
  title: "COMPUTER SCIENCE ENGINEER & SYSTEMS BUILDER",
  tagline: "Building intelligent systems that turn ideas into working reality.",
  location: "Dehradun, Uttarakhand, India",
  phone: "+91 98765 43210",
  address: "Dehradun, Uttarakhand, India",
  quote: "Engineering at the intersection of AI, robust software architectures, IoT hardware, and real-world utility.",
  education: {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institution: "Graphic Era University / GEHU",
    period: "Aug 2022 – Jun 2026",
    status: "In Progress (Senior Year)",
  },
  focusAreas: [
    "ARTIFICIAL INTELLIGENCE & LLMS",
    "DISTRIBUTED SOFTWARE ARCHITECTURES",
    "COMPUTER VISION & GEO-SPATIAL SYSTEMS",
    "INTERNET OF THINGS (IOT) & EMBEDDED HARDWARE",
    "HIGH-CONCURRENCY BACKEND APIS",
  ],
  specs: [
    { label: "PRIMARY ROLE", value: "FULL-STACK & AI SYSTEMS BUILDER" },
    { label: "CORE FOCUS", value: "CV, APIS, IOT, DISTRIBUTED PIPELINES" },
    { label: "SYSTEM KERNEL", value: "PYTHON // TYPESCRIPT // JAVA // C++" },
    { label: "ARCHIVE NODE", value: "NODE_SR_001 [SECURE]" },
    { label: "SECURITY STATUS", value: "VERIFIED IDENTITY // ZERO LOG COMPROMISE" },
    { label: "MISSION OBJECTIVE", value: "DEPLOY RESILIENT PRODUCTION SOLUTIONS" },
  ],
  socials: {
    github: "https://github.com/saurabhrawatgthb",
    leetcode: "https://leetcode.com/u/dugganboss/",
    linkedin: "https://www.linkedin.com/in/saurabh-rawat-3027a4338/",
    x: "https://x.com/SaurabhRawattt",
    email: "saurabhrawat1405@gmail.com",
    website: "https://saurabhrawat.dev",
    phone: "+91 98765 43210",
  },
};
