"use client";

import React, { useState, useEffect, useRef } from "react";
import { SystemHUD } from "@/components/hud/SystemHUD";
import { WorkstationScene } from "@/components/three/WorkstationScene";
import { Chapter01Boot } from "@/components/chapters/Chapter01Boot";
import { Chapter02Hero } from "@/components/chapters/Chapter02Hero";
import { Chapter03Identity } from "@/components/chapters/Chapter03Identity";
import { Chapter04Skills } from "@/components/chapters/Chapter04Skills";
import { Chapter05Projects } from "@/components/chapters/Chapter05Projects";
import { Chapter06Experience } from "@/components/chapters/Chapter06Experience";
import { Chapter07Research } from "@/components/chapters/Chapter07Research";
import { Chapter08Achievements } from "@/components/chapters/Chapter08Achievements";
import { Chapter09Contact } from "@/components/chapters/Chapter09Contact";
import { Chapter10Shutdown } from "@/components/chapters/Chapter10Shutdown";
import { sounds } from "@/components/sound/SoundEngine";

const CHAPTER_TITLES = [
  "SYSTEM BOOT & BIOS",
  "THE SCREEN OPENS // DOSSIER",
  "IDENTITY_FILE.exe",
  "SKILL_MATRIX.diag",
  "PROJECT_ARCHIVE.db",
  "EXPERIENCE_LOG.dat",
  "RESEARCH_DATABASE.sci",
  "ACHIEVEMENT_FILES.rec",
  "SIGNAL_TERMINAL.tx",
  "MISSION_COMPLETE.log",
];

export default function Home() {
  const [isBooted, setIsBooted] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(1);
  const [archiveProgress, setArchiveProgress] = useState(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const identityRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const researchRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const shutdownRef = useRef<HTMLDivElement>(null);

  const handleEnterArchive = () => {
    sounds.playAccessGranted();
    setIsBooted(true);
    setCurrentChapter(2);
    setArchiveProgress(15);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRestartArchive = () => {
    sounds.playPowerOn();
    setIsBooted(false);
    setCurrentChapter(1);
    setArchiveProgress(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Keyboard shortcut listener for initial boot screen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isBooted && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        handleEnterArchive();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isBooted]);

  // Scroll listener to update active chapter and archive progress
  useEffect(() => {
    if (!isBooted) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(100, Math.max(0, Math.round((scrollY / (docHeight || 1)) * 100)));
      setArchiveProgress(progress);

      // Determine active chapter based on element offsets
      const sectionRefs = [
        { ref: heroRef, chapter: 2 },
        { ref: identityRef, chapter: 3 },
        { ref: skillsRef, chapter: 4 },
        { ref: projectsRef, chapter: 5 },
        { ref: experienceRef, chapter: 6 },
        { ref: researchRef, chapter: 7 },
        { ref: achievementsRef, chapter: 8 },
        { ref: contactRef, chapter: 9 },
        { ref: shutdownRef, chapter: 10 },
      ];

      for (let i = sectionRefs.length - 1; i >= 0; i--) {
        const item = sectionRefs[i];
        if (item.ref.current) {
          const rect = item.ref.current.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setCurrentChapter(item.chapter);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isBooted]);

  const scrollToIdentity = () => {
    identityRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-crt-darkest text-archive-text">
      {/* Persistent System HUD */}
      {isBooted && (
        <SystemHUD
          currentChapter={currentChapter}
          totalChapters={10}
          chapterTitle={CHAPTER_TITLES[currentChapter - 1] || "DIGITAL ARCHIVE"}
          archiveProgress={archiveProgress}
        />
      )}

      {/* Main 3D Workstation & Chapter Flow */}
      {!isBooted ? (
        <WorkstationScene onEnterArchive={handleEnterArchive} />
      ) : (
        <div className="pt-10 pb-12 transition-opacity duration-700 ease-in animate-fadeIn">
          {/* Chapter 02: Hero & Dossier Opening */}
          <div ref={heroRef} id="chapter-02">
            <Chapter02Hero onExploreClick={scrollToIdentity} />
          </div>

          {/* Chapter 03: Identity File */}
          <div ref={identityRef} id="chapter-03">
            <Chapter03Identity />
          </div>

          {/* Chapter 04: Skill Matrix */}
          <div ref={skillsRef} id="chapter-04">
            <Chapter04Skills />
          </div>

          {/* Chapter 05: Project Archive */}
          <div ref={projectsRef} id="chapter-05">
            <Chapter05Projects />
          </div>

          {/* Chapter 06: Experience Log */}
          <div ref={experienceRef} id="chapter-06">
            <Chapter06Experience />
          </div>

          {/* Chapter 07: Research Database */}
          <div ref={researchRef} id="chapter-07">
            <Chapter07Research />
          </div>

          {/* Chapter 08: Achievement Files */}
          <div ref={achievementsRef} id="chapter-08">
            <Chapter08Achievements />
          </div>

          {/* Chapter 09: Signal Terminal / Contact */}
          <div ref={contactRef} id="chapter-09">
            <Chapter09Contact />
          </div>

          {/* Chapter 10: Shutdown / Summary */}
          <div ref={shutdownRef} id="chapter-10">
            <Chapter10Shutdown onRestart={handleRestartArchive} />
          </div>
        </div>
      )}
    </div>
  );
}
