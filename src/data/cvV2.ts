export interface CVV2 {
  name: string;
  contact: {
    email: string;
    linkedin: string; // full URL
    github: string; // full URL
    location: string;
  };
  profile: string;
  skillsTable: {
    languagesFrameworks: string[]; // 5 items
    tools: string[]; // 5 items
    methodologies: string[]; // 5 items
  };
  experience: Array<{
    role: string;
    company: string;
    period: string; // e.g., "Jan 2024 – Present"
    location: string; // e.g., "London"
    bullets: string[];
  }>;
  qualifications: Array<{
    title: string;
    institution: string;
    year: string;
    note?: string;
  }>;
  interests: string[];
}

export const cvV2: CVV2 = {
  name: "Gal K Jones",
  contact: {
    email: "galkjones@gmail.com",
    linkedin: "https://linkedin.com/in/galkjones",
    github: "https://github.com/GalKJ",
    location: "London, UK",
  },
  profile:
    "Former Deputy Chief LX in the West End, now a Distinction-grade Junior Software Developer. Detail-oriented, collaborative, and driven to deliver value through clean code, iteration, and regular deployment. Experienced in leading technical teams, liaising with stakeholders, and operating under pressure to meet strict deadlines. Passionate about knowledge sharing, accessibility, inclusivity, and building products that enrich lives.",
  skillsTable: {
    languagesFrameworks: [
      "JavaScript/TypeScript",
      "SQL",
      "React/React Native",
      "Redux",
      "Bash",
    ],
    tools: [
      "Expo EAS",
      "Git/GitLab",
      "GitHub Co-Pilot/Actions",
      "TMUX",
      "Sentry",
    ],
    methodologies: ["Agile", "Kanban", "Pair Programming", "TDD", "DevOps"],
  },
  experience: [
    {
      role: "Junior Full-Stack App Developer",
      company: "Citizen Ticket",
      period: "Jan 2024 – Present",
      location: "London",
      bullets: [
        "Promoted to Junior developer on completion of Level 4 apprenticeship with distinction grade.",
        "Led core flagship app upgrade from React-Native 0.71 to 0.76 and Expo 49 to 52, improving stability and performance.",
        "Engineered Offline Scanning feature for low-connectivity environments, enhancing data integrity and customer experience.",
      ],
    },
    {
      role: "Apprentice Full-Stack App Developer",
      company: "Citizen Ticket",
      period: "Jan 2022 – Jan 2024",
      location: "London",
      bullets: [
        "Redesigned and refactored mobile app checkout process, increasing revenue and conversion rates.",
        "Developed EPOS feature from concept to deployment, creating a new revenue stream.",
        "Fixed data persistence bugs, improving stability and user trust.",
      ],
    },
    {
      role: "Deputy Chief Electrician",
      company: "Garrick Theatre, Nimax",
      period: "Jan 2020 – Sept 2021",
      location: "London",
      bullets: [
        "Diagnosed and remedied an ETC desk cache bug during The Miser, ensuring a clean show report.",
        "Led LX fit-up team for City of Angels, a multi departmental and highly technical show.",
        "Prevented Death Drop going up late by identifying and repairing faulty cable during pre-set.",
        "Mentored new operators, ensuring they could complete cue plots consistently, efficiently, and safely.",
      ],
    },
  ],
  qualifications: [
    {
      title: "Level 4 Software Development Apprenticeship",
      institution: "Founders & Coders",
      year: "2024",
      note: "Distinction",
    },
    {
      title: "MA Theatre Practices",
      institution:
        "Rose Bruford College, Certified by the University of Manchester",
      year: "2004",
      note: "Distinction",
    },
    {
      title: "BA Theatre Practices",
      institution: "London Metropolitan University",
      year: "2003",
      note: "2:1",
    },
    {
      title: "BTEC in Performing Arts",
      institution: "BRIT School of Performing Arts",
      year: "2000",
      note: "Distinction",
    },
  ],
  interests: [
    "programming",
    "yoga",
    "CrossFit",
    "cycling",
    "solving puzzles",
    "researching narrowboats",
  ],
};
