"use client";

import React, { useState } from "react";
import { CinematicIntro } from "@/components/gta/CinematicIntro";
import { GameNav } from "@/components/gta/GameNav";
import { HeroSection } from "@/components/gta/HeroSection";
import { PlayerSection } from "@/components/gta/PlayerSection";
import { MissionsSection } from "@/components/gta/MissionsSection";
import { ArsenalSection } from "@/components/gta/ArsenalSection";
import { ExperienceLogSection } from "@/components/gta/ExperienceLogSection";
import { ResearchSection } from "@/components/gta/ResearchSection";
import { AchievementsSection } from "@/components/gta/AchievementsSection";
import { SignalContactSection } from "@/components/gta/SignalContactSection";
import { MissionCompleteSection } from "@/components/gta/MissionCompleteSection";

export default function Home() {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleRestart = () => {
    setIsRevealed(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-gta-pink selection:text-white" id="top">
      {/* GTA Fixed Navigation Bar (Appears after title reveal) */}
      <GameNav isVisible={isRevealed} />

      {/* 01. Pinned Cinematic Opening Title & SVG Mask Reveal */}
      <CinematicIntro onRevealComplete={() => setIsRevealed(true)} />

      {/* 02. Revealed Cinematic Portfolio World */}
      <main className="relative z-10 w-full bg-black">
        {/* Hero Character Keyart Frame */}
        <HeroSection />

        {/* Player Profile Dossier */}
        <PlayerSection />

        {/* Missions & Project Files */}
        <MissionsSection />

        {/* Arsenal & Weapons Equipment */}
        <ArsenalSection />

        {/* Experience Mission Timeline */}
        <ExperienceLogSection />

        {/* Research Dossier */}
        <ResearchSection />

        {/* Confirmed Evidence & Achievements */}
        <AchievementsSection />

        {/* Direct Signal Transmission */}
        <SignalContactSection />

        {/* Mission Complete Final Screen */}
        <MissionCompleteSection onRestart={handleRestart} />
      </main>
    </div>
  );
}
