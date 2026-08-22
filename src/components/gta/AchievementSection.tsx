"use client";

import React from "react";
import { CheckCircle2, Star, Award } from "lucide-react";
import { achievementsData } from "@/data/achievements";

export function AchievementSection() {
  const badgeColors = [
    "border-gta-yellow text-gta-yellow",
    "border-gta-pink text-gta-pink",
    "border-gta-cyan text-gta-cyan",
    "border-gta-red text-gta-red",
    "border-gta-orange text-gta-orange",
    "border-white text-white",
  ];

  return (
    <section id="achievements" className="relative min-h-screen w-full px-4 sm:px-8 md:px-16 py-24 text-white font-sans select-none">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-4 border-white pb-4 mb-10">
          <div>
            <div className="font-pricedown text-gta-pink text-xl tracking-widest uppercase">
              CONFIRMED EVIDENCE & MERIT RECORDS
            </div>
            <h2 className="font-pricedown text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-none gta-text-outline">
              ACHIEVEMENTS
            </h2>
          </div>
          <div className="bg-gta-pink text-white font-pricedown px-4 py-2 rounded-xl text-lg tracking-widest shadow-hard">
            {achievementsData.length} VERIFIED STAMPS
          </div>
        </div>

        {/* Evidence Collage Grid in Glass */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, idx) => {
            const colorClass = badgeColors[idx % badgeColors.length];
            return (
              <div
                key={item.id}
                className="rounded-3xl bg-black/45 backdrop-blur-xl border border-white/20 p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.15)] hover:border-gta-yellow transition-all duration-300 transform hover:-translate-y-1.5 relative flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <span className="font-pricedown text-xs text-white/50 tracking-widest">
                      [{item.code}]
                    </span>
                    <span className={`border ${colorClass} rounded font-pricedown text-[10px] px-2 py-0.5 tracking-wider font-bold`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-pricedown text-2xl sm:text-3xl text-white group-hover:text-gta-yellow transition-colors leading-tight mb-1">
                    {item.title}
                  </h3>

                  <div className="font-pricedown text-sm text-gta-pink tracking-wider mb-3">
                    {item.organization}
                  </div>

                  <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-3 flex items-center justify-between text-xs font-mono text-white/60">
                  <span>{item.date}</span>
                  <span className="text-gta-cyan font-bold flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    VERIFIED
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
