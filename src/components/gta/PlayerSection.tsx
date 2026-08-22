"use client";

import React from "react";
import { Shield, GraduationCap, Zap, Activity, Award, CheckCircle2 } from "lucide-react";
import { profileData } from "@/data/profile";

export function PlayerSection() {
  const stats = [
    { label: "ARTIFICIAL INTELLIGENCE & CV", level: "99 / 100", bar: 99, color: "bg-gta-pink" },
    { label: "HIGH-THROUGHPUT REST & APIS", level: "96 / 100", bar: 96, color: "bg-gta-cyan" },
    { label: "DISTRIBUTED SOFTWARE PIPELINES", level: "94 / 100", bar: 94, color: "bg-gta-yellow" },
    { label: "IOT & EMBEDDED MICROCONTROLLERS", level: "91 / 100", bar: 91, color: "bg-gta-orange" },
    { label: "CORE ALGORITHMS & DATA STRUCTURES", level: "98 / 100", bar: 98, color: "bg-gta-red" },
  ];

  return (
    <section id="player" className="relative min-h-screen w-full px-4 sm:px-8 md:px-16 py-24 bg-gta-dark text-white font-sans select-none">
      {/* Background Halftone & Border Elements */}
      <div className="absolute inset-0 bg-halftone opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-4 border-white pb-4 mb-12">
          <div>
            <div className="font-pricedown text-gta-hotPink text-xl tracking-widest uppercase">
              CHARACTER DOSSIER // LEVEL 99 BUILDER
            </div>
            <h2 className="font-pricedown text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-none gta-text-outline">
              PLAYER: SAURABH RAWAT
            </h2>
          </div>
          <div className="bg-gta-yellow px-4 py-2 text-black font-pricedown text-lg tracking-widest shadow-hard">
            CLEARANCE: ROOT OPERATOR
          </div>
        </div>

        {/* Player Collage Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Academic Credentials & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            {/* Academic Card */}
            <div className="bg-gta-cardDark border-2 border-white/20 p-6 shadow-hard-pink relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gta-pink px-4 py-1 font-pricedown text-white text-xs tracking-widest">
                ACADEMICS
              </div>

              <div className="flex items-center gap-3 mb-4 text-gta-pink">
                <GraduationCap className="h-8 w-8" />
                <div>
                  <h3 className="font-pricedown text-2xl text-white tracking-wider">
                    {profileData.education.degree}
                  </h3>
                  <div className="text-sm font-bold text-gta-yellow">
                    {profileData.education.field}
                  </div>
                </div>
              </div>

              <div className="text-base text-white/90 font-semibold mb-3">
                {profileData.education.institution}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono text-white/70">
                <span>TIMELINE: {profileData.education.period}</span>
                <span className="text-gta-cyan font-bold">{profileData.education.status}</span>
              </div>
            </div>

            {/* Builder Philosophy Card */}
            <div className="bg-gta-cardDark border-2 border-white/20 p-6 shadow-hard-cyan">
              <div className="font-pricedown text-xl text-gta-cyan tracking-wider mb-2">
                MISSION DOCTRINE & PHILOSOPHY
              </div>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans font-medium">
                Saurabh is a Computer Science builder who bridges complex theory with high-performance execution. From computer vision spatial trackers and micro-controller IoT sensor grids to resilient backend state-machines, every project is engineered to work reliably in real-world production.
              </p>
            </div>

            {/* Core Focus Badges */}
            <div className="bg-gta-panel border border-white/10 p-5">
              <div className="font-pricedown text-sm text-gta-yellow tracking-widest mb-3 uppercase">
                PRIMARY COMBAT FOCUS & CAPABILITIES
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.focusAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="bg-black border border-white/30 px-3 py-1.5 font-pricedown text-xs tracking-widest text-white hover:border-gta-yellow hover:text-gta-yellow transition-colors"
                  >
                    ★ {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Character Attributes & Spec Table */}
          <div className="lg:col-span-6 space-y-6">
            {/* Attribute Skill Sliders */}
            <div className="bg-gta-cardDark border-2 border-white/20 p-6 shadow-hard-yellow">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
                <span className="font-pricedown text-2xl text-gta-yellow tracking-wider">
                  WEAPONIZED ATTRIBUTES
                </span>
                <Activity className="h-6 w-6 text-gta-yellow animate-pulse" />
              </div>

              <div className="space-y-5">
                {stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-pricedown tracking-widest">
                      <span className="text-white">{stat.label}</span>
                      <span className="text-gta-yellow">{stat.level}</span>
                    </div>
                    <div className="h-3 w-full bg-black border border-white/30 overflow-hidden p-0.5">
                      <div
                        className={`h-full ${stat.color} transition-all duration-1000 shadow-sm`}
                        style={{ width: `${stat.bar}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specs Dossier Table */}
            <div className="bg-gta-panel border-2 border-white/20 p-5 divide-y divide-white/10">
              {profileData.specs.map((spec, idx) => (
                <div key={idx} className="py-2.5 flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-pricedown tracking-widest text-white/60">
                    {spec.label}
                  </span>
                  <span className="font-bold font-mono text-white text-right">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
