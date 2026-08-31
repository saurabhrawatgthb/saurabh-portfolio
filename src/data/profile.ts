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
    cgpaRecord: string;
    highSchool: string;
    intermediate: string;
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
  title: "COMPUTER SCIENCE & ENGINEERING STUDENT",
  tagline: "Building systems, exploring AI, and turning ideas into working projects.",
  location: "Dehradun, Uttarakhand, India",
  phone: "+91 6395982464",
  address: "Dehradun, Uttarakhand, India",
  quote: "Building systems, exploring AI, and turning ideas into working projects.",
  education: {
    degree: "B.Tech",
    field: "Computer Science & Engineering",
    institution: "Graphic Era Hill University",
    period: "Aug 2022 – Present",
    status: "Currently Pursuing",
    cgpaRecord: "9+ CGPA in 1st Year and 2nd Year",
    highSchool: "94% — ICSE High School",
    intermediate: "89% — ISC Intermediate",
  },
  focusAreas: [
    "ARTIFICIAL INTELLIGENCE & LLMS",
    "COMPUTER VISION & GEO-SPATIAL SYSTEMS",
    "DISTRIBUTED SOFTWARE ARCHITECTURES",
    "HIGH-CONCURRENCY BACKEND APIS",
    "INTERNET OF THINGS (IOT) & EMBEDDED HARDWARE",
  ],
  specs: [
    { label: "PRIMARY ROLE", value: "B.TECH CSE STUDENT & BUILDER" },
    { label: "ACADEMIC RECORD", value: "9+ CGPA (1ST & 2ND YEAR)" },
    { label: "INSTITUTION", value: "GRAPHIC ERA HILL UNIVERSITY" },
    { label: "CURRENT STATUS", value: "UNDERGRADUATE (CURRENTLY PURSUING)" },
    { label: "CORE FOCUS", value: "AI, SYSTEMS, CV, IOT & BACKEND" },
    { label: "COMMUNITY & ORGS", value: "IEEE SB GEHU // TBI // TDH" },
  ],
  socials: {
    github: "https://github.com/saurabhrawatgthb",
    leetcode: "https://leetcode.com/u/dugganboss/",
    linkedin: "https://www.linkedin.com/in/saurabh-rawat-3027a4338/",
    x: "https://x.com/SaurabhRawattt",
    email: "saurabhrawat1405@gmail.com",
    website: "https://saurabhrawat.dev",
    phone: "+91 6395982464",
  },
};

