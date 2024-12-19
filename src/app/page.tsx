import React from "react";
import LlmInterface from "@/components/LlmInterface";
import PortfolioHeader from "@/components/PortfolioHeader";
import Cv from "@/components/Cv";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PortfolioHeader />
      <Cv />
      <LlmInterface />
    </main>
  );
}
