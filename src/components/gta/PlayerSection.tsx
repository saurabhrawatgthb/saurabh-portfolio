"use client";

import React from "react";
import { GraduationCap, Activity, ShieldCheck, Zap, Layers } from "lucide-react";
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
    <section id="player" className="relative min-h-screen w-full px-4 sm:px-8 md:px-16 py-24 text-white font-sans select-none">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-4 border-white pb-4 mb-12">
          <div>
            <div className="font-pricedown text-gta-hotPink text-xl tracking-widest uppercase">
              CHARACTER DOSSIER // LEVEL 99 BUILDER
            </div>
            <h2 className="font-pricedown text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-none gta-text-outline">
              PLAYER
            </h2>
          </div>
          <div className="bg-gta-yellow px-4 py-2 text-black font-pricedown text-lg tracking-widest shadow-hard rounded-xl">
            NODE: DEHRADUN // CLEARANCE: ROOT
          </div>
        </div>

        {/* Player Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Academic Credentials & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            {/* Academic Crystal Card */}
            <div className="rounded-3xl ios-crystal-glass crystal-sheen-sweep p-6 sm:p-8 relative">
              <div className="absolute top-0 right-0 bg-gta-pink px-4 py-1 font-pricedown text-white text-xs tracking-widest rounded-bl-2xl shadow-sm">
                ACADEMICS // MERIT
              </div>

              <div className="flex items-center gap-4 mb-4 text-gta-pink">
                <GraduationCap className="h-9 w-9 shrink-0" />
                <div>
                  <h3 className="font-pricedown text-2xl sm:text-3xl text-white tracking-wider">
                    {profileData.education.degree}
                  </h3>
                  <div className="text-sm sm:text-base font-bold text-gta-yellow font-pricedown tracking-wider">
                    {profileData.education.field}
                  </div>
                </div>
              </div>

              <div className="text-base sm:text-lg text-white font-semibold mb-2">
                {profileData.education.institution}
              </div>

              <div className="grid grid-cols-2 gap-2 my-4 bg-black/40 border border-white/15 rounded-2xl p-3 text-xs font-mono">
                <div>
                  <span className="text-white/60 block">COLLEGE RECORD:</span>
                  <span className="text-gta-yellow font-bold text-sm">9+ CGPA (1st &amp; 2nd Yr)</span>
                </div>
                <div>
                  <span className="text-white/60 block">BOARD EXAMS:</span>
                  <span className="text-gta-cyan font-bold text-sm">94% ICSE • 89% ISC</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/15 text-xs font-mono text-white/80">
                <span>STATUS: {profileData.education.status.toUpperCase()}</span>
                <span className="text-gta-cyan font-bold">UNDERGRADUATE</span>
              </div>
            </div>

            {/* Builder Philosophy Crystal Card */}
            <div className="rounded-3xl ios-crystal-glass p-6 sm:p-8">
              <div className="font-pricedown text-xl sm:text-2xl text-gta-cyan tracking-wider mb-2">
                MISSION DOCTRINE &amp; PHILOSOPHY
              </div>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans font-medium">
                Saurabh Rawat is a Computer Science &amp; Engineering student at Graphic Era Hill University. Driven by practical engineering, he focuses on building systems, exploring AI, and turning ideas into working projects. His experience spans edge computer vision, backend APIs, IoT hardware, and active management contributions in national-level hackathons and technical communities.
              </p>
            </div>

            {/* Focus Badges Crystal Panel */}
            <div className="rounded-3xl ios-crystal-glass p-6">
              <div className="font-pricedown text-sm text-gta-yellow tracking-widest mb-3 uppercase">
                PRIMARY COMBAT FOCUS & RESEARCH DOMAINS
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.focusAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="bg-black/50 border border-white/30 px-3.5 py-1.5 rounded-xl font-pricedown text-xs tracking-widest text-white hover:border-gta-yellow hover:text-gta-yellow transition-colors"
                  >
                    ★ {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Attribute Sliders & Spec Table */}
          <div className="lg:col-span-6 space-y-6">
            {/* Attribute Skill Sliders in Crystal Glass */}
            <div className="rounded-3xl ios-crystal-glass crystal-sheen-sweep p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-6">
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
                    <div className="h-3 w-full bg-black/80 rounded-full border border-white/20 overflow-hidden p-0.5 shadow-inner">
                      <div
                        className={`h-full rounded-full ${stat.color} transition-all duration-1000 shadow-sm`}
                        style={{ width: `${stat.bar}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Spec Table Crystal Card */}
            <div className="rounded-3xl ios-crystal-glass p-6 divide-y divide-white/15">
              {profileData.specs.map((spec, idx) => (
                <div key={idx} className="py-3 flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-pricedown tracking-widest text-white/70">
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
