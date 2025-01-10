'use client';

import React from 'react';
import { cvData } from '../data/cvData';

const CV: React.FC = () => {
  return (
    <div className="w-full space-y-4 md:space-y-6 lg:space-y-8">
      {/* Header */}
      <header className="text-center space-y-2" data-testid="header">
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-2 text-sm">
          <a
            href={`mailto:${cvData.contactInfo.email}`}
            className="underline text-blue-600 hover:text-blue-800"
          >
            {cvData.contactInfo.email}
          </a>

          <span className="hidden md:inline dark:text-yellow">-</span>

          <a
            href={`https://www.${cvData.contactInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            {cvData.contactInfo.linkedin}
          </a>

          <span className="hidden md:inline dark:text-yellow">-</span>

          <a
            href={`https://${cvData.contactInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            {cvData.contactInfo.github}
          </a>

          <span className="hidden md:inline dark:text-yellow">-</span>
          <span className="dark:text-yellow">
            {cvData.contactInfo.location}
          </span>
        </div>
      </header>

      {/* Profile Section */}

      <section className="px-3 md:px-2 lg:px-0.5" data-testid="profile-section">
        <h2
          className="text-xl font-bold mb-2 dark:text-lightYellow"
          data-testid="profile-header"
        >
          Profile
        </h2>
        <p className="text-justify dark:text-yellow">
          {cvData.profile.beforeBold}
          <span className="font-bold dark:text-lightYellow">
            {cvData.profile.boldText}
          </span>
          {cvData.profile.afterBold}
        </p>
      </section>

      {/* Professional Experience */}

      <section
        className="px-3 md:px-2 lg:px-0.5"
        data-testid="experience-section"
      >
        <h2
          className="text-xl font-bold mb-4 dark:text-lightYellow"
          data-testid="experience-header"
        >
          Professional Experience
        </h2>

        <div className="space-y-2">
          {cvData.experience.map((exp, index) => (
            <div key={index}>
              <h3
                className="text-lg font-bold dark:text-yellow"
                data-testid="experience-title"
              >
                {exp.title} at {exp.company}
              </h3>
              <h4
                className="text-base italic dark:text-yellow"
                data-testid="experience-company-period"
              >
                {exp.period}
              </h4>

              <div className="space-y-4 mt-2">
                {exp.responsibilities.map((resp, respIndex) => (
                  <div key={respIndex}>
                    <p className="font-bold mb-1 dark:text-yellow">
                      {resp.title}
                    </p>
                    <ul className="list-disc ml-8 dark:text-yellow">
                      {resp.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills */}

      <section
        className="px-3 md:px-2 lg:px-0.5"
        data-testid="technical-skills-section"
      >
        <h2
          className="text-xl font-bold mb-2 dark:text-lightYellow"
          data-testid="technical-skills-header"
        >
          Technical Skills
        </h2>
        <ul className="space-y-1 dark:text-yellow">
          {cvData.technicalSkills.map((skill, index) => (
            <li key={index}>
              <span className="font-bold dark:text-yellow">
                {skill.category}:
              </span>{' '}
              {skill.skills}
            </li>
          ))}
        </ul>
      </section>

      {/* Education */}

      <section
        className="px-3 md:px-2 lg:px-0.5"
        data-testid="education-section"
      >
        <h2
          className="text-xl font-bold mb-4 dark:text-lightYellow"
          data-testid="education-header"
        >
          Education
        </h2>

        <div className="space-y-6">
          {cvData.education.map((edu, index) => (
            <div key={index}>
              <h3
                className="text-lg font-bold dark:text-yellow"
                data-testid="education-degree"
              >
                {edu.degree}
              </h3>
              <h4
                className="text-base italic dark:text-yellow"
                data-testid="education-institution-period"
              >
                {edu.institution} - {edu.period}
              </h4>
              <p className="font-bold mt-1 dark:text-yellow">
                {edu.achievement}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Information */}

      <section
        className="px-3 md:px-2 lg:px-0.5"
        data-testid="additional-info-section"
      >
        <h2
          className="text-xl font-bold mb-4 dark:text-lightYellow"
          data-testid="additional-info-header"
        >
          Additional Information
        </h2>

        {/* Side Projects */}
        <div className="mb-6">
          <h3
            className="text-lg font-bold dark:text-yellow"
            data-testid="side-projects-header"
          >
            Side Projects
          </h3>
          {cvData.sideProjects.map((project, index) => (
            <div key={index} className="mt-2">
              <p className="font-bold dark:text-yellow">
                {project.title}: {project.description}
              </p>
              <ul className="list-disc ml-8 mt-1 dark:text-yellow">
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Previous Careers */}
        <div>
          <h3
            className="text-lg font-bold dark:text-yellow"
            data-testid="previous-careers-header"
          >
            Previous careers
          </h3>
          <ul className="list-disc ml-8 mt-2 dark:text-yellow">
            {cvData.previousCareers.map((career, index) => (
              <li key={index}>
                <span className="font-bold dark:text-yellow">
                  {career.role}:
                </span>{' '}
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
