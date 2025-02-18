import { useCallback } from 'react';
import { cvData } from '../data/cvData';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const useGeneratePdf = () => {
  const generatePdf = useCallback(() => {
    const doc = new jsPDF();
    let yOffset = 20; // Starting position
    const margin = 10;
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height; // Define page height

    // Helper function to add spacing
    const addSpacing = (points: number) => {
      yOffset += points;
      if (yOffset > pageHeight - margin) {
        // Check if yOffset exceeds page height
        doc.addPage(); // Add a new page
        yOffset = 20; // Reset yOffset
        addHeader(); // Re-add header on new page
      }
    };

    // Helper function for centered text
    const addCenteredText = (text: string, fontSize: number) => {
      doc.setFontSize(fontSize);
      const textWidth = doc.getTextWidth(text);
      doc.text(text, (pageWidth - textWidth) / 2, yOffset);
      addSpacing(fontSize / 3); // Decreased spacing
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

    // Helper function to add header
    const addHeader = () => {
      addCenteredText(cvData.name, 24);
      // Optionally, re-add contact info or other header elements here
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
          url: 'https://github.com/GalKJ',
        },
        {
          text: 'galkjones CV site',
          url: 'https://galkjonesportfolio.vercel.app/',
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
          acc +
          itemWidth +
          (index < contactInfo.length - 1 ? separatorWidth : 0)
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

      addSpacing(12);
    };

    // Header with name
    addHeader(); // Initialize header

    // Profile Section
    doc.setFontSize(16);
    doc.text('Profile', margin, yOffset);
    addSpacing(9);

    doc.setFontSize(12);
    const splitProfile = doc.splitTextToSize(
      `${cvData.profile.beforeBold}${cvData.profile.boldText}${cvData.profile.afterBold}`,
      pageWidth - margin * 2
    );
    doc.text(splitProfile, margin, yOffset);
    addSpacing(splitProfile.length * 6);

    // Experience Section
    doc.setFontSize(16);
    doc.text('Professional Experience', margin, yOffset);
    addSpacing(9);

    cvData.experience.forEach((exp) => {
      doc.setFontSize(14);
      doc.text(`${exp.title} - ${exp.company}`, margin, yOffset);
      addSpacing(8);

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
    addSpacing(9);

    cvData.technicalSkills.forEach((skill) => {
      doc.setFontSize(12);
      const skillText = `• ${skill.category}: ${skill.skills}`;
      const splitSkills = doc.splitTextToSize(
        skillText,
        pageWidth - margin * 2
      );
      doc.text(splitSkills, margin, yOffset);
      addSpacing(splitSkills.length * 7);
    });
    addSpacing(5);

    // Education Section
    doc.setFontSize(16);
    doc.text('Education', margin, yOffset);
    addSpacing(9);

    cvData.education.forEach((edu) => {
      doc.setFontSize(13);
      doc.text(`• ${edu.degree}`, margin, yOffset);
      addSpacing(7);

      doc.setFontSize(12);
      doc.text(`- ${edu.institution} - ${edu.period}`, margin + 5, yOffset);
      addSpacing(7);
      doc.text(`- ${edu.achievement}`, margin + 5, yOffset);
      addSpacing(10);
    });

    // Side Projects Section
    if (cvData.sideProjects && cvData.sideProjects.length > 0) {
      doc.setFontSize(16);
      doc.text('Side Projects', margin, yOffset);
      addSpacing(9);

      cvData.sideProjects.forEach((project) => {
        doc.setFontSize(14);
        doc.text(` • ${project.title}`, margin, yOffset);
        addSpacing(7);

        doc.setFontSize(12);
        const descriptionLines = doc.splitTextToSize(
          `- ${project.description}`,
          pageWidth - margin * 2
        );
        doc.text(descriptionLines, margin + 5, yOffset);
        addSpacing(descriptionLines.length * 6);

        if (project.technologies) {
          doc.text(
            `- Technologies: ${project.technologies.join(', ')}`,
            margin + 5,
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
      addSpacing(9);

      cvData.previousCareers.forEach((career) => {
        doc.setFontSize(14);
        doc.text(` • ${career.role}`, margin, yOffset);
        addSpacing(7);

        doc.setFontSize(12);
        const descriptionLines = doc.splitTextToSize(
          ` - ${career.description}`,
          pageWidth - margin * 2
        );
        doc.text(descriptionLines, margin + 5, yOffset);
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
  }, []);

  return generatePdf;
};

export default useGeneratePdf;
