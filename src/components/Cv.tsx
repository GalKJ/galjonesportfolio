import React from 'react';

interface CVEntry {
    title: string;
    date: string;
    description: string;
}

const Cv: React.FC = () => {
    const experience: CVEntry[] = [
        {
            title: "Job Title",
            date: "2020 - Present",
            description: "Description of responsibilities and achievements"
        },
        // Add more experiences here
    ];

    const education: CVEntry[] = [
        {
            title: "Degree/Certification",
            date: "2015 - 2019",
            description: "Institution name and relevant details"
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

export default Cv;</div>