"use client";
import React from "react";

export default function PortfolioHeader() {
  return (
    <div className="z-10 flex max-w-5xl w-full justify-between lg:flex flex-col">
      {/* Download CV Button */}
      <a
        href="/cv/Gal-K-Jones-CV-2025.pdf"
        download="Gal-K-Jones-CV-2025.pdf"
        aria-label="Download CV as PDF"
        className="px-4 py-2 self-center sm:self-auto my-2 md:m-0 lg:m-0 w-40 rounded border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 transition-colors text-center"
        role="button"
      >
        Download CV
      </a>
    </div>
  );
}
