"use client";

import React from "react";
import { cvV2 } from "@/data/cvV2";

const CV: React.FC = () => {
  // Render helper to italicize specific show titles in experience bullets
  const showTitles = new Set([
    "City of Angels",
    "The Drifters Girl",
    "Death Drop",
  ]);
  const renderBullet = (text: string) => {
    const parts = text.split(/(City of Angels|The Drifters Girl|Death Drop)/g);
    return parts.map((part, idx) =>
      showTitles.has(part) ? (
        <em key={idx}>{part}</em>
      ) : (
        <React.Fragment key={idx}>{part}</React.Fragment>
      )
    );
  };
  return (
    <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 xl:py-12 text-gray-800">
      <header className="border-b pb-2 mb-3" data-testid="header">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          {cvV2.name}
        </h1>
        <p className="text-sm sm:text-base flex flex-wrap items-center gap-x-3 gap-y-1">
          <a
            href={`tel:${cvV2.contact.phone.replace(/\s+/g, "")}`}
            className="text-blue-600 hover:underline"
          >
            {cvV2.contact.phone}
          </a>
          <span aria-hidden>·</span>
          <a
            href={`mailto:${cvV2.contact.email}`}
            className="text-blue-600 hover:underline"
          >
            {cvV2.contact.email}
          </a>
          <span aria-hidden>·</span>
          <a
            href={cvV2.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
          <span aria-hidden>·</span>
          <a
            href={cvV2.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          <span aria-hidden>·</span>
          <span>{cvV2.contact.location}</span>
        </p>
      </header>

      <section
        className="mb-8 xl:mb-10 border-b pb-4 xl:pb-6"
        data-testid="profile-section"
      >
        <p>{cvV2.profile}</p>
      </section>

      <section
        className="mb-8 xl:mb-10 border-b pb-6 xl:pb-8"
        data-testid="skills-section"
      >
        <h2 className="text-2xl font-semibold text-center pb-1 mb-4">
          Technical Skills
        </h2>
        {/* Mobile-friendly stacked lists */}
        <div className="md:hidden">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <div className="text-sm font-bold mb-1">Languages/Frameworks</div>
              <ul className="list-disc list-inside space-y-1">
                {cvV2.skillsTable.languagesFrameworks.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-sm font-bold mb-1">Tools</div>
              <ul className="list-disc list-inside space-y-1">
                {cvV2.skillsTable.tools.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-sm font-bold mb-1">Methodologies</div>
              <ul className="list-disc list-inside space-y-1">
                {cvV2.skillsTable.methodologies.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Table view for md+ screens */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="px-3 py-2" scope="col">
                  Languages/Frameworks
                </th>
                <th className="px-3 py-2" scope="col">
                  Tools
                </th>
                <th className="px-3 py-2" scope="col">
                  Methodologies
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, i) => (
                <tr key={i} className="align-top">
                  <td className="px-3 py-2">
                    {cvV2.skillsTable.languagesFrameworks[i] && (
                      <ul className="list-disc list-inside">
                        <li>{cvV2.skillsTable.languagesFrameworks[i]}</li>
                      </ul>
                    )}
                  </td>
                  <td className="px-3 py-2">
                    {cvV2.skillsTable.tools[i] && (
                      <ul className="list-disc list-inside">
                        <li>{cvV2.skillsTable.tools[i]}</li>
                      </ul>
                    )}
                  </td>
                  <td className="px-3 py-2">
                    {cvV2.skillsTable.methodologies[i] && (
                      <ul className="list-disc list-inside">
                        <li>{cvV2.skillsTable.methodologies[i]}</li>
                      </ul>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section
        className="mb-8 xl:mb-10 border-b pb-6 xl:pb-8"
        data-testid="experience-section"
      >
        <h2 className="text-2xl font-semibold text-center pb-1 mb-4">
          Professional Experience
        </h2>
        {cvV2.experience.map((exp, i) => (
          <div className="mb-6" key={`${exp.role}-${i}`}>
            <h3 className="text-base sm:text-lg font-bold flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
              <span>{exp.role}</span>
              <span className="sm:ml-4 text-left sm:text-right">
                {exp.company}
              </span>
            </h3>
            <p className="italic text-xs sm:text-sm flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <span>{exp.period}</span>
              <span className="sm:ml-4 text-left sm:text-right">
                {exp.location}
              </span>
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {exp.bullets.map((b, j) => (
                <li key={j}>{renderBullet(b)}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section
        className="mb-8 xl:mb-10 border-b pb-6 xl:pb-8"
        data-testid="qualifications-section"
      >
        <h2 className="text-2xl font-semibold text-center pb-1 mb-4">
          Qualifications
        </h2>
        <div className="space-y-4">
          {cvV2.qualifications.map((q, i) => (
            <div key={i} className="">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <span className="font-medium">{q.title}</span>
                <span className="sm:ml-4 text-left sm:text-right">
                  {q.year}
                </span>
              </div>
              <h3 className="font-normal">{q.institution}</h3>
              {q.note ? <div>• {q.note}</div> : null}
            </div>
          ))}
        </div>
      </section>

      <section data-testid="interests-section">
        <h2 className="text-2xl font-semibold text-center pb-1 mb-4">
          Interests
        </h2>
        <p>{cvV2.interests.join(", ")}.</p>
      </section>
    </div>
  );
};

export default CV;
