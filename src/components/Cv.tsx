import React from "react";

interface CVEntry {
  title: string;
  date: string;
  description: string;
}

const Cv: React.FC = () => {
  const experience: CVEntry[] = [
    {
      title: "Junior Full-Stack App Developer - Apprentice Software Developer",
      date: "Citizen Ticket - January 2022 - Present",
      description: `
            • Develop and maintain Citizen Ticket mobile app:
              • React-Native
              • Redux
              • Redis
            
            • Build, maintain and optimise backend:
              • Node.js
              • MySQL
              • API
            
            • Client side app development and debugging:
              • Android Studio
              • X-code
              • Hardware devices
            
            • Integrate IDE AI extensions for effective development workflows:
              • Github Co-pilot
            
            • Notable production-level projects:
              • Checkout refactor
              • EPOS feature
              • Offline client feature
              • Edge server
            
            • Delivered daily contributions:
              • Agile sprint planning
              • Code reviews
              • Pair programming
              • Tech team talks
            `,
    },
    // Add more experiences here
  ];

  const education: CVEntry[] = [
    {
      title: "Degree/Certification",
      date: "2015 - 2019",
      description: "Institution name and relevant details",
    },
    // Add more education entries here
  ];

  return (
    <div className="cv-container">
      <h1>Curriculum Vitae</h1>

      <section className="experience-section">
        <h2>Professional Experience</h2>
        {experience.map((job, index) => (
          <div key={index} className="cv-entry">
            <h3>{job.title}</h3>
            <p className="date">{job.date}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </section>

      <section className="education-section">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="cv-entry">
            <h3>{edu.title}</h3>
            <p className="date">{edu.date}</p>
            <p>{edu.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Cv;
