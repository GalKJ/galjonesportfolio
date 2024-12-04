import LlmInterface from '@/components/LlmInterface';
import PortfolioHeader from '@/components/PortfolioHeader';
import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PortfolioHeader />
      <LlmInterface />
    </main>
  );
}
