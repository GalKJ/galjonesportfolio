export interface CVV2 {
  name: string;
  contact: {
    phone: string; // E.164 or display format
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
    phone: "+44 7782 382384",
    email: "galkjones@gmail.com",
    linkedin: "https://linkedin.com/in/galkjones",
    github: "https://github.com/GalKJ",
    location: "London, UK",
  },
  profile:
    "I pride myself on being a logical problem solver and collaborative professional focused on delivering scalable, maintainable, and robust products that provide customer value. I drive impactful solutions from feature conception to deployment and excel at adapting and innovating in fast-paced, high-pressure environments.",
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
      company: "Nimax",
      period: "Jan 2020 – Sept 2021",
      location: "London",
      bullets: [
        "Managed electrical operations at the Garrick Theatre including rig maintenance and crew management.",
        "Diagnosed and fixed LED flood firmware bug during City of Angels, ensuring uninterrupted performance.",
        "Led fit-up for The Drifters Girl, meeting strict deadlines.",
        "Prevented show stop on Death Drop by repairing faulty cable under time pressure.",
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
    "Programming",
    "Yoga",
    "CrossFit",
    "puzzles",
    "narrowboats",
    "event production",
  ],
};
