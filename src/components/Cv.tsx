import React from 'react';

interface CVEntry {
  title: string;
  date: string;
  description: string;
}

const Cv: React.FC = () => {
  const experience: CVEntry[] = [
    {
      title: 'Junior Full-Stack App Developer - Apprentice Software Developer',
      date: 'Citizen Ticket - January 2022 - Present',
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
      title: 'Degree/Certification',
      date: '2015 - 2019',
      description: 'Institution name and relevant details',
    },
    // Add more education entries here
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <p>galkjones@gmail.com - +44(0)7782-382-384</p>
        <p>
          <a
            href="https://linkedin.com/in/galkjones"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            linkedin.com/in/galkjones
          </a>{' '}
          -{' '}
          <a
            href="https://github.com/GalKJ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            github.com/GalKJ
          </a>{' '}
          - London, UK
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Professional Experience</h2>
        {experience.map((job, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-2xl font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.date}</p>
            <p className="text-gray-800 whitespace-pre-line">
              {job.description}
            </p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-2xl font-semibold">{edu.title}</h3>
            <p className="text-gray-600">{edu.date}</p>
            <p className="text-gray-800">{edu.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Cv;
