import React from 'react';

interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: {
    title: string;
    items: string[];
  }[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  achievement: string;
}

interface TechnicalSkill {
  category: string;
  skills: string;
}

interface SideProject {
  title: string;
  description: string;
  technologies: string[];
}

interface PreviousCareer {
  role: string;
  description: string;
}

interface CVData {
  name: string;
  contactInfo: ContactInfo;
  profile: {
    beforeBold: string;
    boldText: string;
    afterBold: string;
  };
  experience: Experience;
  technicalSkills: TechnicalSkill[];
  education: Education[];
  sideProjects: SideProject[];
  previousCareers: PreviousCareer[];
}

const cvData: CVData = {
  name: 'Gal K Jones',
  contactInfo: {
    email: 'galkjones@gmail.com',
    phone: '+44(0)7782-382-384',
    linkedin: 'linkedin.com/in/galkjones/',
    github: 'github.com/GalKJ',
    location: 'London, UK',
  },
  profile: {
    beforeBold:
      'Promoted to Junior Full-Stack App Developer at Citizen Ticket after successfully completing an 18-month Level 4 Software Development Apprenticeship with ',
    boldText: 'distinction-grade',
    afterBold:
      '. As sole developer of the App Team I work from conception to deployment, maintain and test the Citizen Ticket mobile application that enables 10,000+ users to scan and sell tickets and manage and sell stock on/offline at their events. Experienced in React-Native, Node.js, MySQL, Redis, Redux, Git and AI tooling. Passionate about DevOps, Agile practices, testing, clean code, pair programming, research and building impactful products.',
  },
  experience: {
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
        title: 'Client side app development and debugging.',
        items: ['Android Studio', 'X-code', 'Hardware devices'],
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
          'EPOS feature - worked with platform and account mgmt teams',
          'Offline client feature - worked with CTO',
          'Edge server feature',
        ],
      },
    ],
  },
  technicalSkills: [
    {
      category: 'Languages & Frameworks',
      skills: 'JavaScript, React-Native, React, Node.js',
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
      period: 'August 2003 - October 2004',
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
      description: 'Devised/ensemble and scripted productions.',
    },
    {
      role: 'Deputy Chief Electrician',
      description:
        "Managed technical theatre operations at the Garrick Theatre, London's West End, including show running, programming, rig maintenance, and crew management.",
    },
  ],
};

const CV: React.FC = () => {
  return (
    <div className="w-full space-y-4 md:space-y-6 lg:space-y-8">
      {/* Header */}
      <header className="text-center space-y-2">
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-2 text-sm">
          <a
            href={`mailto:${cvData.contactInfo.email}`}
            className="underline text-blue-600 hover:text-blue-800"
          >
            {cvData.contactInfo.email}
          </a>
          <span className="hidden md:inline">-</span>
          <span>{cvData.contactInfo.phone}</span>
          <span className="hidden md:inline">-</span>
          <a
            href={`https://www.${cvData.contactInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            {cvData.contactInfo.linkedin}
          </a>
          <span className="hidden md:inline">-</span>
          <a
            href={`https://${cvData.contactInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            {cvData.contactInfo.github}
          </a>
          <span className="hidden md:inline">-</span>
          <span>{cvData.contactInfo.location}</span>
        </div>
      </header>

      {/* Profile Section */}
      <section className="px-3 md:px-2 lg:px-0.5">
        <h2 className="text-xl font-bold mb-2">Profile</h2>
        <p className="text-justify">
          {cvData.profile.beforeBold}
          <span className="font-bold">{cvData.profile.boldText}</span>
          {cvData.profile.afterBold}
        </p>
      </section>

      {/* Professional Experience */}
      <section className="px-3 md:px-2 lg:px-0.5">
        <h2 className="text-xl font-bold mb-4">Professional Experience</h2>
        <div className="space-y-2">
          <h3 className="text-lg font-bold">{cvData.experience.title}</h3>
          <h4 className="text-base italic">
            {cvData.experience.company} — {cvData.experience.period}
          </h4>

          <div className="space-y-4 mt-2">
            {cvData.experience.responsibilities.map((resp, index) => (
              <div key={index}>
                <p className="font-bold mb-1">{resp.title}</p>
                <ul className="list-disc ml-8">
                  {resp.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="px-3 md:px-2 lg:px-0.5">
        <h2 className="text-xl font-bold mb-2">Technical Skills</h2>
        <ul className="space-y-1">
          {cvData.technicalSkills.map((skill, index) => (
            <li key={index}>
              <span className="font-bold">{skill.category}:</span>{' '}
              {skill.skills}
            </li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section className="px-3 md:px-2 lg:px-0.5">
        <h2 className="text-xl font-bold mb-4">Education</h2>
        <div className="space-y-6">
          {cvData.education.map((edu, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold">{edu.degree}</h3>
              <h4 className="text-base italic">
                {edu.institution} - {edu.period}
              </h4>
              <p className="font-bold mt-1">{edu.achievement}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Information */}
      <section className="px-3 md:px-2 lg:px-0.5">
        <h2 className="text-xl font-bold mb-4">Additional Information</h2>

        {/* Side Projects */}
        <div className="mb-6">
          <h3 className="text-lg font-bold">Side Projects</h3>
          {cvData.sideProjects.map((project, index) => (
            <div key={index} className="mt-2">
              <p className="font-bold">
                {project.title}: {project.description}
              </p>
              <ul className="list-disc ml-8 mt-1">
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Previous Careers */}
        <div>
          <h3 className="text-lg font-bold">Previous careers</h3>
          <ul className="list-disc ml-8 mt-2">
            {cvData.previousCareers.map((career, index) => (
              <li key={index}>
                <span className="font-bold">{career.role}:</span>{' '}
                {career.description}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CV;
