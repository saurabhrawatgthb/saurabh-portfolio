"use client";

import React, { useState } from "react";
import { Cpu, Zap, Shield, Target, Terminal, Code2 } from "lucide-react";
import { skillModules } from "@/data/skills";
import { sounds } from "@/components/sound/SoundEngine";

export function ArsenalSection() {
  const [activeSlot, setActiveSlot] = useState(0);

  const slotColors = [
    "border-gta-pink text-gta-pink bg-gta-pink",
    "border-gta-cyan text-gta-cyan bg-gta-cyan",
    "border-gta-yellow text-gta-yellow bg-gta-yellow",
    "border-gta-red text-gta-red bg-gta-red",
    "border-gta-orange text-gta-orange bg-gta-orange",
  ];

  return (
    <section id="arsenal" className="relative min-h-screen w-full px-4 sm:px-8 md:px-16 py-24 bg-gta-dark text-white font-sans select-none">
      {/* Halftone BG */}
      <div className="absolute inset-0 bg-halftone opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-4 border-white pb-4 mb-10">
          <div>
            <div className="font-pricedown text-gta-cyan text-xl tracking-widest uppercase">
              WEAPONS & CAPABILITY INVENTORY
            </div>
            <h2 className="font-pricedown text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-none gta-text-outline">
              TECHNICAL ARSENAL
            </h2>
          </div>
          <div className="bg-gta-cyan px-4 py-2 text-black font-pricedown text-lg tracking-widest shadow-hard">
            5 WEAPON SLOTS READY
          </div>
        </div>

        {/* Arsenal Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillModules.map((module, idx) => {
            const colorClass = slotColors[idx % slotColors.length];
            return (
              <div
                key={module.id}
                className="bg-gta-cardDark border-2 border-white/20 p-6 shadow-hard hover:border-white transition-all transform hover:-translate-y-1 relative group"
              >
                {/* Slot Tag */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <span className="font-pricedown text-xs tracking-widest text-white/50">
                    SLOT 0{idx + 1} // [{module.code}]
                  </span>
                  <span className="bg-white/10 text-gta-yellow font-pricedown text-[10px] px-2 py-0.5 tracking-wider">
                    {module.status}
                  </span>
                </div>

                {/* Module Title */}
                <h3 className="font-pricedown text-2xl md:text-3xl text-white group-hover:text-gta-yellow transition-colors leading-tight mb-2">
                  {module.name}
                </h3>

                <p className="text-xs text-white/70 font-sans mb-6 line-clamp-2">
                  {module.description}
                </p>

                {/* Equipment Items */}
                <div className="space-y-2 border-t border-white/10 pt-4">
                  {module.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-black border border-white/10 p-2.5 flex items-center justify-between hover:border-white/40 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-gta-yellow font-bold text-xs">★</span>
                        <span className="font-pricedown text-sm tracking-wider text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="font-mono text-[9px] text-white/50 bg-gta-panel px-1.5 py-0.5">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
