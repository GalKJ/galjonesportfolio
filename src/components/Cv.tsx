"use client";

import React from "react";
import { cvV2 } from "@/data/cvV2";

const CV: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
      <header className="border-b pb-2 mb-3" data-testid="header">
        <h1 className="text-4xl font-bold mb-2">{cvV2.name}</h1>
        <p className="text-lg">
          <a
            href={`tel:${cvV2.contact.phone.replace(/\s+/g, "")}`}
            className="text-blue-600 hover:underline"
          >
            {cvV2.contact.phone}
          </a>{" "}
          ·{" "}
          <a
            href={`mailto:${cvV2.contact.email}`}
            className="text-blue-600 hover:underline"
          >
            {cvV2.contact.email}
          </a>{" "}
          ·{" "}
          <a
            href={cvV2.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>{" "}
          ·{" "}
          <a
            href={cvV2.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>{" "}
          · {cvV2.contact.location}
        </p>
      </header>

      <section className="mb-8 border-b pb-4" data-testid="profile-section">
        <p>{cvV2.profile}</p>
      </section>

      <section className="mb-8 border-b pb-6" data-testid="skills-section">
        <h2 className="text-2xl font-semibold text-center pb-1 mb-4">
          Technical Skills
        </h2>
        <div className="overflow-x-auto">
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
                    {cvV2.skillsTable.languagesFrameworks[i] ? (
                      <ul className="list-disc list-inside">
                        <li>{cvV2.skillsTable.languagesFrameworks[i]}</li>
                      </ul>
                    ) : null}
                  </td>
                  <td className="px-3 py-2">
                    {cvV2.skillsTable.tools[i] ? (
                      <ul className="list-disc list-inside">
                        <li>{cvV2.skillsTable.tools[i]}</li>
                      </ul>
                    ) : null}
                  </td>
                  <td className="px-3 py-2">
                    {cvV2.skillsTable.methodologies[i] ? (
                      <ul className="list-disc list-inside">
                        <li>{cvV2.skillsTable.methodologies[i]}</li>
                      </ul>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8 border-b pb-6" data-testid="experience-section">
        <h2 className="text-2xl font-semibold text-center pb-1 mb-4">
          Professional Experience
        </h2>
        {cvV2.experience.map((exp, i) => (
          <div className="mb-6" key={`${exp.role}-${i}`}>
            <h3 className="text-lg font-bold flex items-baseline justify-between gap-4">
              <span>{exp.role}</span>
              <span className="ml-4 text-right">{exp.company}</span>
            </h3>
            <p className="italic text-sm flex items-baseline justify-between">
              <span>{exp.period}</span>
              <span className="ml-4 text-right">{exp.location}</span>
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section
        className="mb-8 border-b pb-6"
        data-testid="qualifications-section"
      >
        <h2 className="text-2xl font-semibold text-center pb-1 mb-4">
          Qualifications
        </h2>
        <div className="space-y-4">
          {cvV2.qualifications.map((q, i) => (
            <div key={i} className="">
              <div className="flex items-baseline justify-between">
                <span className="font-medium">{q.title}</span>
                <span className="ml-4 text-right">{q.year}</span>
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
