"use client";

import React, { useState } from "react";
import { PersistentBackground } from "@/components/gta/PersistentBackground";
import { CustomCursor } from "@/components/gta/CustomCursor";
import { GlassNavbar } from "@/components/gta/GlassNavbar";
import { CinematicIntro } from "@/components/gta/CinematicIntro";
import { HeroSection } from "@/components/gta/HeroSection";
import { PlayerSection } from "@/components/gta/PlayerSection";
import { ProjectShowcase } from "@/components/gta/ProjectShowcase";
import { SkillsSection } from "@/components/gta/SkillsSection";
import { ExperienceTimeline } from "@/components/gta/ExperienceTimeline";
import { ResearchSection } from "@/components/gta/ResearchSection";
import { AchievementSection } from "@/components/gta/AchievementSection";
import { ResumeSection } from "@/components/gta/ResumeSection";
import { StatsSection } from "@/components/gta/StatsSection";
import { FAQSection } from "@/components/gta/FAQSection";
import { ContactSection } from "@/components/gta/ContactSection";
import { Footer } from "@/components/gta/Footer";

export default function Home() {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReplay = () => {
    setIsRevealed(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-gta-pink selection:text-white"
      id="top"
    >
      {/* Smooth Lerp Custom Cursor */}
      <CustomCursor />

      {/* Persistent Background Artwork */}
      <PersistentBackground />

      {/* Glass Fixed Navigation Bar (Fades in after opening title reveal) */}
      <GlassNavbar isVisible={isRevealed} />

      {/* 01. Pinned Cinematic Opening Title & SVG Mask Reveal */}
      <CinematicIntro onRevealComplete={() => setIsRevealed(true)} />

      {/* 02. Revealed Cinematic Portfolio World */}
      <main className="relative z-10 w-full">
        {/* Hero Character Keyart Frame */}
        <HeroSection />

        {/* Player Profile Dossier */}
        <PlayerSection />

        {/* Missions & Project Files */}
        <ProjectShowcase />

        {/* Arsenal & Weapons Equipment */}
        <SkillsSection />

        {/* Experience Mission Timeline */}
        <ExperienceTimeline />

        {/* Research Dossier */}
        <ResearchSection />

        {/* Confirmed Evidence & Achievements */}
        <AchievementSection />

        {/* Real-Time Confidential Operative Resume Dossier */}
        <ResumeSection />

        {/* Player Live Stats Channels */}
        <StatsSection />

        {/* Interactive Accordion FAQ */}
        <FAQSection />

        {/* Direct Signal Transmission */}
        <ContactSection />

        {/* Mission Complete Final Screen */}
        <Footer onReplay={handleReplay} />
      </main>
    </div>
  );
}
