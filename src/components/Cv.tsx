'use client';

import React from 'react';
import { cvData } from '../data/cvData';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const CV: React.FC = () => {
  const generatePdf = () => {
    const doc = new jsPDF();
    let yOffset = 20; // Starting position
    const margin = 10;
    const pageWidth = doc.internal.pageSize.width;

    // Helper function to add spacing
    const addSpacing = (points: number) => {
      yOffset += points;
    };

    // Helper function for centered text
    const addCenteredText = (text: string, fontSize: number) => {
      doc.setFontSize(fontSize);
      const textWidth = doc.getTextWidth(text);
      doc.text(text, (pageWidth - textWidth) / 2, yOffset);
      addSpacing(fontSize / 3);
    };

    // Helper function to add clickable links
    const addLink = (text: string, url: string, x: number, y: number) => {
      doc.setTextColor(0, 0, 255); // Blue color for links
      const textWidth = doc.getTextWidth(text);
      doc.textWithLink(text, x, y, { url });
      // Underline the text
      doc.setDrawColor(0, 0, 255); // Set draw color to blue
      doc.line(x, y + 1, x + textWidth, y + 1); // Adjust y as needed for proper positioning
      doc.setDrawColor(0, 0, 0); // Reset draw color to black
      doc.setTextColor(0, 0, 0); // Reset text color to black
    };

    // Header with name
    addCenteredText(cvData.name, 24);

    // Fixed contact info alignment
    const contactInfo = [
      {
        text: cvData.contactInfo.email,
        url: `mailto:${cvData.contactInfo.email}`,
      },
      {
        text: 'linkedin.com/in/galkjones/',
        url: 'https://www.linkedin.com/in/galkjones/',
      },
      {
        text: 'github.com/GalKJ',
        url: 'https://github.com/GalKJ/galjonesportfolio',
      },
      { text: cvData.contactInfo.location },
    ];

    doc.setFontSize(10);

    // Calculate total width including separators
    const separator = ' - ';
    const separatorWidth = doc.getTextWidth(separator);
    const totalWidth = contactInfo.reduce((acc, info, index) => {
      const itemWidth = doc.getTextWidth(info.text);
      // Add separator width for all items except the last
      return (
        acc + itemWidth + (index < contactInfo.length - 1 ? separatorWidth : 0)
      );
    }, 0);

    // Start position for centered alignment
    let currentX = (pageWidth - totalWidth) / 2;

    // Render contact info with separators
    contactInfo.forEach((info, index) => {
      if (info.url) {
        addLink(info.text, info.url, currentX, yOffset);
      } else {
        doc.text(info.text, currentX, yOffset);
      }
      currentX += doc.getTextWidth(info.text);

      // Add separator after all items except the last
      if (index < contactInfo.length - 1) {
        doc.text(separator, currentX, yOffset);
        currentX += separatorWidth;
      }
    });

    addSpacing(10);

    // Profile Section
    doc.setFontSize(16);
    doc.text('Profile', margin, yOffset);
    addSpacing(10);

    doc.setFontSize(12);
    const splitProfile = doc.splitTextToSize(
      `${cvData.profile.beforeBold} ${cvData.profile.boldText} ${cvData.profile.afterBold}`,
      pageWidth - margin * 2
    );
    doc.text(splitProfile, margin, yOffset);
    addSpacing(splitProfile.length * 7);

    // Experience Section
    doc.setFontSize(16);
    doc.text('Professional Experience', margin, yOffset);
    addSpacing(10);

    cvData.experience.forEach((exp) => {
      doc.setFontSize(14);
      doc.text(`${exp.title} - ${exp.company}`, margin, yOffset);
      addSpacing(7);

      doc.setFontSize(12);
      doc.text(`${exp.period}`, margin, yOffset);
      addSpacing(7);

      exp.responsibilities.forEach((resp) => {
        doc.text(`• ${resp.title}`, margin + 5, yOffset);
        addSpacing(7);

        resp.items.forEach((item) => {
          doc.text(`  - ${item}`, margin + 10, yOffset);
          addSpacing(7);
        });
      });
      addSpacing(5);
    });

    // Technical Skills Section
    doc.setFontSize(16);
    doc.text('Technical Skills', margin, yOffset);
    addSpacing(10);

    cvData.technicalSkills.forEach((skill) => {
      doc.setFontSize(12);
      const skillText = `${skill.category}: ${skill.skills}`;
      const splitSkills = doc.splitTextToSize(
        skillText,
        pageWidth - margin * 2
      );
      doc.text(splitSkills, margin, yOffset);
      addSpacing(splitSkills.length * 7);
    });

    // Education Section
    doc.setFontSize(16);
    doc.text('Education', margin, yOffset);
    addSpacing(10);

    cvData.education.forEach((edu) => {
      doc.setFontSize(14);
      doc.text(`${edu.degree}`, margin, yOffset);
      addSpacing(7);

      doc.setFontSize(12);
      doc.text(`${edu.institution} - ${edu.period}`, margin, yOffset);
      addSpacing(7);
      doc.text(`${edu.achievement}`, margin + 5, yOffset);
      addSpacing(10);
    });

    // Side Projects Section
    if (cvData.sideProjects && cvData.sideProjects.length > 0) {
      doc.setFontSize(16);
      doc.text('Side Projects', margin, yOffset);
      addSpacing(10);

      cvData.sideProjects.forEach((project) => {
        doc.setFontSize(14);
        doc.text(project.title, margin, yOffset);
        addSpacing(7);

        doc.setFontSize(12);
        const descriptionLines = doc.splitTextToSize(
          project.description,
          pageWidth - margin * 2
        );
        doc.text(descriptionLines, margin, yOffset);
        addSpacing(descriptionLines.length * 7);

        if (project.technologies) {
          doc.text(
            `Technologies: ${project.technologies.join(', ')}`,
            margin,
            yOffset
          );
          addSpacing(10);
        }
      });
    }

    // Previous Careers Section
    if (cvData.previousCareers && cvData.previousCareers.length > 0) {
      doc.setFontSize(16);
      doc.text('Previous Careers', margin, yOffset);
      addSpacing(10);

      cvData.previousCareers.forEach((career) => {
        doc.setFontSize(14);
        doc.text(career.role, margin, yOffset);
        addSpacing(7);

        doc.setFontSize(12);
        const descriptionLines = doc.splitTextToSize(
          career.description,
          pageWidth - margin * 2
        );
        doc.text(descriptionLines, margin, yOffset);
        addSpacing(descriptionLines.length * 7);
      });
    }

    // Auto page break handling
    doc.setProperties({
      title: `${cvData.name} - CV`,
      subject: 'Curriculum Vitae',
      author: cvData.name,
      keywords: 'CV, Resume, Software Developer',
      creator: 'CV Generator',
    });

    doc.save('CV.pdf');
  };

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

      {/* Download PDF Button */}
      <button
        onClick={generatePdf}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Download PDF
      </button>
    </div>
  );
};

export default CV;
