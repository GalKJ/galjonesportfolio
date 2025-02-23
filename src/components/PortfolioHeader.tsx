'use client';
import React from 'react';
import useGeneratePdf from '../hooks/useGeneratePdf';

export default function PortfolioHeader() {
  const generatePdf = useGeneratePdf();
  return (
    <div className="z-10 flex max-w-5xl w-full justify-between font-mono lg:flex flex-col">
      {/* Download PDF Button */}
      <button
        onClick={generatePdf}
        className="px-4 py-2 self-center sm:self-auto my-2 md:m-0 lg:m-0 bg-gradient-to-r from-darkBrown to-yellow dark:text-lightYellow rounded w-40 hover:shadow-lg transition-all duration-1000 hover:brightness-110"
      >
        Download PDF
      </button>

      <h1 className="text-lightYellow font-bold text-4xl text-center">
        Gal K Jones
      </h1>
      <h2 className="text-yellow text-xl text-center">
        Junior Full Stack Application Developer
      </h2>
    </div>
  );
}
