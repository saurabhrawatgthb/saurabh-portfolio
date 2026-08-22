"use client";

import React from "react";
import { Award, ShieldCheck, CheckCircle2, Bookmark, Trophy, Code2 } from "lucide-react";
import { achievementsData } from "@/data/achievements";

export function Chapter08Achievements() {
  return (
    <section className="relative min-h-screen w-full px-4 py-20 sm:px-8 font-mono">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-term-green/30 pb-3">
          <div className="flex items-center gap-2 text-sm font-bold text-term-greenBright glow-green-sm">
            <Award className="h-5 w-5" />
            <span>08 // ACHIEVEMENT_FILES.rec</span>
          </div>
          <span className="text-xs text-archive-muted">VERIFIED RECORDS: 6 REPOSITORIES</span>
        </div>

        {/* Achievement Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="group border-2 border-term-green/30 bg-crt-black p-5 transition-all hover:border-term-green/80 hover:bg-crt-surface shadow-term-green flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-term-green/20 pb-2.5">
                  <span className="text-[9px] text-term-amber font-mono font-bold">
                    [{item.code}]
                  </span>
                  <span className="rounded border border-term-green/40 bg-term-green/10 px-1.5 py-0.5 text-[8px] text-term-green font-semibold">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Organization */}
                <div className="mt-3">
                  <h3 className="text-sm font-bold text-archive-paper leading-snug">
                    {item.title}
                  </h3>
                  <div className="text-xs text-term-amber font-semibold mt-1">
                    {item.organization}
                  </div>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs text-archive-text font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Footer Verification Stamp */}
              <div className="mt-4 border-t border-dashed border-term-green/20 pt-3 flex items-center justify-between text-[9px] text-archive-muted">
                <span>{item.date}</span>
                <span className="text-term-greenBright font-semibold flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  VERIFIED
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
