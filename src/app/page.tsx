import React from 'react';
import LlmInterface from '@/components/LlmInterface';
import PortfolioHeader from '@/components/PortfolioHeader';
import Cv from '@/components/Cv';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8 lg:p-16 max-w-6xl mx-auto ">
      <PortfolioHeader />
      <Cv />
      {/* <LlmInterface /> */}
    </main>
  );
}
