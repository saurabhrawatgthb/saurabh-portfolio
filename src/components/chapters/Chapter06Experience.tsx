"use client";

import React from "react";
import { History, ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";
import { experienceLog } from "@/data/experience";

export function Chapter06Experience() {
  return (
    <section className="relative min-h-screen w-full px-4 py-20 sm:px-8 font-mono">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-term-green/30 pb-3">
          <div className="flex items-center gap-2 text-sm font-bold text-term-greenBright glow-green-sm">
            <History className="h-5 w-5" />
            <span>06 // EXPERIENCE_LOG.dat</span>
          </div>
          <span className="text-xs text-archive-muted">INSTITUTIONAL NODES ACCESSED: 6 RECORDS</span>
        </div>

        {/* Archival Records Timeline */}
        <div className="mt-8 space-y-6">
          {experienceLog.map((item) => (
            <div
              key={item.id}
              className="group border-2 border-term-green/30 bg-crt-black p-5 sm:p-6 transition-all hover:border-term-green/80 hover:bg-crt-surface shadow-term-green"
            >
              {/* Record Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-term-green/20 pb-3">
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded bg-term-green/10 border border-term-green/40 px-2 py-0.5 font-bold text-term-green">
                    [{item.year}]
                  </span>
                  <span className="font-bold text-archive-paper text-sm">
                    {item.organization}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[10px]">
                  <span className="border border-term-amber/40 bg-term-amber/10 px-2 py-0.5 text-term-amber font-semibold">
                    {item.badge}
                  </span>
                  <span className="hidden sm:inline text-term-green font-bold flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    {item.status}
                  </span>
                </div>
              </div>

              {/* Role & Scope */}
              <div className="mt-3">
                <div className="text-xs sm:text-sm font-bold text-term-amber">
                  ROLE: {item.role}
                </div>
                <div className="mt-1 text-xs text-archive-muted">
                  SCOPE: {item.scope}
                </div>
              </div>

              {/* Impact Bullet Points */}
              <div className="mt-4 space-y-1.5 border-t border-dashed border-term-green/20 pt-3 text-xs text-archive-text font-sans">
                {item.impact.map((point, index) => (
                  <div key={index} className="flex items-start gap-2 leading-relaxed">
                    <ChevronRight className="h-3.5 w-3.5 text-term-green flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Skills Applied Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                {item.skillsApplied.map((skill, index) => (
                  <span
                    key={index}
                    className="border border-term-green/20 bg-crt-darkest px-2 py-0.5 text-[9px] text-term-green font-mono"
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
