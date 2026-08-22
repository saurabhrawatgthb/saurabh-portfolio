"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { experienceLog } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative min-h-screen w-full px-4 sm:px-8 md:px-16 py-24 text-white font-sans select-none">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-4 border-white pb-4 mb-10">
          <div>
            <div className="font-pricedown text-gta-pink text-xl tracking-widest uppercase">
              OPERATIONAL TIMELINE // MISSIONS SERVED
            </div>
            <h2 className="font-pricedown text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-none gta-text-outline">
              EXPERIENCE
            </h2>
          </div>
          <div className="bg-gta-pink px-4 py-2 rounded-2xl text-white font-pricedown text-lg tracking-widest shadow-hard">
            {experienceLog.length} CHAPTERS LOGGED
          </div>
        </div>

        {/* Timeline Stack in Crystal Glass */}
        <div className="space-y-6">
          {experienceLog.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl ios-crystal-glass crystal-sheen-sweep p-6 md:p-8 hover:border-gta-yellow transition-all duration-300 relative group"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/15 pb-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-gta-yellow text-black rounded-lg font-pricedown text-xs px-2.5 py-0.5 tracking-wider font-bold">
                      {item.year}
                    </span>
                    <span className="font-pricedown text-xs text-gta-cyan tracking-widest uppercase">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-pricedown text-2xl md:text-4xl text-white group-hover:text-gta-yellow transition-colors">
                    {item.organization}
                  </h3>
                  <div className="font-pricedown text-base sm:text-lg text-gta-pink tracking-wider mt-0.5">
                    ROLE: {item.role}
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-gta-cyan justify-end font-bold">
                    <CheckCircle2 className="h-4 w-4 text-gta-cyan" />
                    {item.status}
                  </div>
                </div>
              </div>

              <div className="text-xs text-white/75 font-sans mb-4">
                <strong>SCOPE:</strong> {item.scope}
              </div>

              {/* Impact Bullet Points */}
              <div className="space-y-2 border-t border-white/15 pt-4">
                {item.impact.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-sm text-white/90 font-medium">
                    <span className="text-gta-yellow font-bold mt-0.5">▶</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Skills Tags */}
              <div className="mt-4 flex flex-wrap gap-2 pt-2">
                {item.skillsApplied.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-black/50 rounded-xl border border-white/20 px-3 py-1 font-pricedown text-xs tracking-wider text-white/85"
                  >
                    #{skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
