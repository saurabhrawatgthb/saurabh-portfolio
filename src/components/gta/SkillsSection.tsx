"use client";

import React from "react";
import { Cpu, Zap, Shield, Target, Code2, Layers } from "lucide-react";
import { skillModules } from "@/data/skills";

export function SkillsSection() {
  const slotColors = [
    "border-gta-pink text-gta-pink",
    "border-gta-cyan text-gta-cyan",
    "border-gta-yellow text-gta-yellow",
    "border-gta-red text-gta-red",
    "border-gta-orange text-gta-orange",
  ];

  return (
    <section id="skills" className="relative min-h-screen w-full px-4 sm:px-8 md:px-16 py-24 text-white font-sans select-none">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-4 border-white pb-4 mb-10">
          <div>
            <div className="font-pricedown text-gta-cyan text-xl tracking-widest uppercase">
              WEAPONS & CAPABILITY INVENTORY
            </div>
            <h2 className="font-pricedown text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-none gta-text-outline">
              SKILLS
            </h2>
          </div>
          <div className="bg-gta-cyan px-4 py-2 rounded-2xl text-black font-pricedown text-lg tracking-widest shadow-hard">
            5 ARSENAL MODULES LOADED
          </div>
        </div>

        {/* Arsenal Grid Layout in Crystal Glass */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillModules.map((module, idx) => {
            const colorClass = slotColors[idx % slotColors.length];
            return (
              <div
                key={module.id}
                className="rounded-3xl ios-crystal-glass crystal-sheen-sweep p-6 sm:p-8 hover:scale-[1.02] transition-all duration-300 transform relative group"
              >
                {/* Slot Tag */}
                <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-4">
                  <span className="font-pricedown text-xs tracking-widest text-white/60">
                    SLOT 0{idx + 1} // [{module.code}]
                  </span>
                  <span className="bg-white/10 text-gta-yellow font-pricedown text-[10px] px-2 py-0.5 rounded-lg tracking-wider">
                    {module.status}
                  </span>
                </div>

                {/* Module Title */}
                <h3 className="font-pricedown text-2xl sm:text-3xl text-white group-hover:text-gta-yellow transition-colors leading-tight mb-2">
                  {module.name}
                </h3>

                <p className="text-xs text-white/75 font-sans mb-6 line-clamp-2">
                  {module.description}
                </p>

                {/* Skill Items */}
                <div className="space-y-2 border-t border-white/15 pt-4">
                  {module.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-black/50 rounded-xl border border-white/15 p-2.5 flex items-center justify-between hover:border-white/40 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-gta-yellow font-bold text-xs">★</span>
                        <span className="font-pricedown text-sm tracking-wider text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="font-mono text-[9px] text-white/60 bg-black/80 px-2 py-0.5 rounded-md">
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
