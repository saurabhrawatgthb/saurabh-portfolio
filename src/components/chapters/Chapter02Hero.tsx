"use client";

import React from "react";
import { Folder, Terminal, Sparkles, ChevronDown, Activity, ShieldCheck, Database } from "lucide-react";
import { profileData } from "@/data/profile";
import { sounds } from "@/components/sound/SoundEngine";

interface Chapter02HeroProps {
  onExploreClick: () => void;
}

export function Chapter02Hero({ onExploreClick }: Chapter02HeroProps) {
  return (
    <section className="relative flex min-h-[92vh] w-full flex-col justify-center px-4 py-16 sm:px-8 font-mono">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="mx-auto w-full max-w-5xl">
        {/* Classified Record Header Tag */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-archive-muted border-b border-term-green/20 pb-3">
          <div className="flex items-center gap-1.5 text-term-amber font-bold glow-amber">
            <Folder className="h-4 w-4" />
            <span>CLASSIFIED DOSSIER // NODE {profileData.id}</span>
          </div>
          <span className="hidden sm:inline text-archive-darkMuted">|</span>
          <span>SECURITY CLEARANCE: <strong className="text-term-green">{profileData.clearanceLevel}</strong></span>
          <span className="hidden sm:inline text-archive-darkMuted">|</span>
          <span className="text-term-greenBright font-semibold">STATUS: {profileData.status}</span>
        </div>

        {/* Large Cinematic Typography */}
        <div className="mt-8 space-y-2">
          <div className="text-xs uppercase tracking-widest text-archive-muted">
            [ARCHIVE SUBJECT // LEAD ARCHITECT]
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-archive-paper leading-none">
            SAURABH <span className="text-term-green glow-green">RAWAT</span>
          </h1>
          <div className="text-lg sm:text-xl font-bold text-term-amber glow-amber tracking-wider pt-2">
            {profileData.title}
          </div>
        </div>

        {/* Narrative Quote & Mission Statement */}
        <div className="mt-6 max-w-3xl border-l-2 border-term-green bg-crt-surface/60 p-4 sm:p-5 backdrop-blur-sm">
          <p className="text-sm sm:text-base text-archive-text leading-relaxed font-sans">
            &ldquo;{profileData.tagline}&rdquo;
          </p>
          <div className="mt-3 text-xs text-term-green font-mono">
            &gt; {profileData.quote}
          </div>
        </div>

        {/* Quick System Telemetry Grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="border border-term-green/30 bg-crt-black p-3">
            <div className="flex items-center gap-1.5 text-[10px] text-archive-muted">
              <ShieldCheck className="h-3.5 w-3.5 text-term-green" />
              <span>ACADEMIC NODE</span>
            </div>
            <div className="mt-1 text-xs font-bold text-archive-paper">B.TECH CSE</div>
            <div className="text-[9px] text-term-green">GEU / GEHU</div>
          </div>

          <div className="border border-term-green/30 bg-crt-black p-3">
            <div className="flex items-center gap-1.5 text-[10px] text-archive-muted">
              <Activity className="h-3.5 w-3.5 text-term-amber" />
              <span>CORE FOCUS</span>
            </div>
            <div className="mt-1 text-xs font-bold text-term-amber">AI & VISION</div>
            <div className="text-[9px] text-archive-muted">SYSTEMS ARCHITECTURE</div>
          </div>

          <div className="border border-term-green/30 bg-crt-black p-3">
            <div className="flex items-center gap-1.5 text-[10px] text-archive-muted">
              <Database className="h-3.5 w-3.5 text-term-green" />
              <span>KEY PROJECTS</span>
            </div>
            <div className="mt-1 text-xs font-bold text-term-greenBright">RAKSHAK & UNICARD</div>
            <div className="text-[9px] text-archive-muted">7+ VERIFIED PROTOTYPES</div>
          </div>

          <div className="border border-term-green/30 bg-crt-black p-3">
            <div className="flex items-center gap-1.5 text-[10px] text-archive-muted">
              <Terminal className="h-3.5 w-3.5 text-term-cyan" />
              <span>SYSTEM STATE</span>
            </div>
            <div className="mt-1 text-xs font-bold text-term-cyan">BUILDING & CODING</div>
            <div className="text-[9px] text-archive-muted">ACTIVE EXPERIMENTS</div>
          </div>
        </div>

        {/* Interactive Action Prompt */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={() => {
              sounds.playFileOpen();
              onExploreClick();
            }}
            data-cursor="SCROLL_FILES"
            className="flex items-center gap-2 border border-term-green bg-term-green/20 px-6 py-3 text-xs font-bold text-term-greenBright hover:bg-term-green hover:text-crt-black transition-all"
          >
            <span>EXPLORE CLASSIFIED ARCHIVES</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </button>

          <span className="text-[11px] text-archive-muted">
            SCROLL DOWN TO PROGRESS THROUGH CHAPTERS
          </span>
        </div>
      </div>
    </section>
  );
}
