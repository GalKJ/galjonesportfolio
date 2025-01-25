export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface Responsibilities {
  title: string;
  items: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: Responsibilities[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  achievement: string;
}

export interface TechnicalSkill {
  category: string;
  skills: string;
}

export interface SideProject {
  title: string;
  description: string;
  technologies: string[];
}

export interface PreviousCareer {
  role: string;
  description: string;
}

export interface CVData {
  name: string;
  contactInfo: ContactInfo;
  profile: {
    beforeBold: string;
    boldText: string;
    afterBold: string;
  };
  experience: Experience[]; // Changed from Experience to Experience[]
  technicalSkills: TechnicalSkill[];
  education: Education[];
  sideProjects: SideProject[];
  previousCareers: PreviousCareer[];
}

export const cvData: CVData = {
  name: 'Gal K Jones',
  contactInfo: {
    email: 'galkjones@gmail.com',
    linkedin: 'linkedin.com/in/galkjones/',
    github: 'github.com/GalKJ',
    location: 'London, UK',
  },
  profile: {
    beforeBold:
      'Promoted to Junior Full-Stack App Developer at Citizen Ticket after successfully completing an 18-month Level 4 Software Development Apprenticeship with ',
    boldText: 'distinction-grade',
    afterBold:
      '. As an App Team developer I work from feature conception to deployment and maintain and test the Citizen Ticket mobile application that enables 500,000+ users to scan and sell tickets and manage and sell stock on/offline at their events. Experienced in React-Native, Redux, Node.js, MySQL, Redis, React, Git and AI tooling. Passionate about DevOps, Agile practices, testing, clean code, pair programming, research, knowledge sharing, inclusivity and building impactful products.',
  },
  experience: [
    {
      title: 'Junior Full-Stack App Developer - Apprentice Software Developer',
      company: 'Citizen Ticket',
      period: 'January 2022 - Present',
      responsibilities: [
        {
          title: 'Develop and maintain Citizen Ticket Toolbox mobile app.',
          items: ['React-Native', 'Redux', 'Redis'],
        },
        {
          title: 'Build, maintain and optimise backend.',
          items: ['Node.js', 'MySQL', 'Sales API'],
        },
        {
          title: 'Client-side app development and debugging.',
          items: ['Android Studio', 'X-code', 'Hardware devices'],
        },
        {
          title:
            'Integrate IDE AI extensions for effective development workflows.',
          items: ['GitHub Copilot'],
        },
        {
          title: 'Deliver contributions to the App and wider development team',
          items: [
            'Agile sprint planning',
            'Code reviews',
            'Pair programming',
            'Led technical upskilling sessions',
          ],
        },
        {
          title: 'Notable production-level projects',
          items: [
            'Checkout refactor - worked with onsite event producers',
            'EPOS feature - worked with platform and account management teams',
            'Offline client-side feature - worked with CTO',
            'Edge server feature - worked with CTO',
          ],
        },
      ],
    },
    // Add more experience objects if needed
  ],
  technicalSkills: [
    {
      category: 'Languages & Frameworks',
      skills: 'JavaScript, TypeScript, React-Native, React, Node.js',
    },
    {
      category: 'Tools & Platforms',
      skills:
        'Git, Gitlab, Github, Tmux, Nodemon, NPX, Android Studio, Acid-GitLab-MR',
    },
    {
      category: 'Testing',
      skills: 'Detox (React-Native), Cypress (Web), Jest (Node.js)',
    },
    { category: 'Databases', skills: 'MySQL, Redis' },
    {
      category: 'AI & Automation',
      skills:
        'GitHub Copilot, Local LLM Development, Bash Scripts, GitHub Actions',
    },
  ],
  education: [
    {
      degree: 'Level 4 Software Development Apprenticeship',
      institution: 'Founders and Coders - Placement: Citizen Ticket',
      period: 'January 2022 - August 2024',
      achievement: 'Achieved Distinction Grade',
    },
    {
      degree: 'Master of Arts in Acting',
      institution:
        'Rose Bruford College, Certified by the University of Manchester',
      period: 'August 2003 - December 2004',
      achievement: 'Achieved Distinction Grade',
    },
    {
      degree: 'BTEC in Acting',
      institution: 'BRIT School of Performing Arts',
      period: 'August 1997 - August 1999',
      achievement: 'Achieved Distinction Grade',
    },
  ],
  sideProjects: [
    {
      title: 'Local LLM Development',
      description:
        'Hosted and fine-tuned a large language model with project and portfolio documentation from apprenticeship.',
      technologies: ['Raspberry Pi 5', 'Docker', 'Ollama'],
    },
  ],
  previousCareers: [
    {
      role: 'Professional Actor',
      description: 'Ensemble and scripted theatre/screen productions.',
    },
    {
      role: 'Deputy Chief Electrician',
      description:
        "Managed technical theatre operations at the Garrick Theatre, London's West End, including show running, programming, rig maintenance, and crew management.",
    },
  ],
};
