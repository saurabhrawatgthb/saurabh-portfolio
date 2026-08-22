"use client";

import React from "react";
import { BookOpen, Activity, FileText, CheckCircle2 } from "lucide-react";
import { researchData } from "@/data/research";

export function ResearchSection() {
  return (
    <section id="research" className="relative min-h-screen w-full px-4 sm:px-8 md:px-16 py-24 text-white font-sans select-none">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-4 border-white pb-4 mb-10">
          <div>
            <div className="font-pricedown text-gta-yellow text-xl tracking-widest uppercase">
              SCIENTIFIC INVESTIGATION // EDGE COMPUTER VISION
            </div>
            <h2 className="font-pricedown text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-none gta-text-outline">
              RESEARCH
            </h2>
          </div>
          <div className="bg-gta-yellow text-black font-pricedown px-4 py-2 rounded-xl text-lg tracking-widest shadow-hard">
            #{researchData.paperCode}
          </div>
        </div>

        {/* Research Paper Glass Card */}
        <div className="rounded-3xl bg-black/45 backdrop-blur-xl border-2 border-gta-yellow/80 p-6 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)]">
          <div className="border-b border-white/10 pb-6 mb-6">
            <div className="flex items-center gap-2 font-pricedown text-xs text-gta-cyan tracking-widest uppercase">
              <span>DOMAIN: {researchData.domain}</span>
              <span>•</span>
              <span>SUB-FIELD: {researchData.subField}</span>
            </div>

            <h3 className="mt-2 font-pricedown text-3xl sm:text-5xl text-white gta-text-outline leading-tight">
              {researchData.title}
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              <div className="inline-block bg-gta-yellow text-black rounded font-pricedown text-xs px-3 py-1 tracking-wider font-bold">
                STATUS: {researchData.status}
              </div>
              <div className="inline-block bg-gta-cyan/20 border border-gta-cyan text-gta-cyan rounded font-pricedown text-xs px-3 py-1 tracking-wider">
                PATENT CONCEPT: UNICARD SMART HARDWARE
              </div>
            </div>
          </div>

          {/* Abstract */}
          <div className="bg-black/60 rounded-2xl border-l-4 border-gta-pink p-5 mb-8">
            <div className="font-pricedown text-base text-gta-pink tracking-widest mb-2 uppercase">
              [ SCIENTIFIC ABSTRACT ]
            </div>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans font-medium">
              {researchData.abstract}
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {researchData.systemMetrics.map((metric, idx) => (
              <div key={idx} className="bg-black/60 rounded-2xl border border-white/20 p-4 text-center">
                <div className="font-pricedown text-3xl sm:text-4xl text-gta-yellow">
                  {metric.value}
                </div>
                <div className="font-pricedown text-xs text-gta-cyan tracking-wider">{metric.unit}</div>
                <div className="text-[10px] text-white/60 font-mono mt-1 uppercase">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Methodology Breakdown */}
          <div className="bg-black/60 rounded-2xl border border-white/20 p-6">
            <div className="font-pricedown text-lg text-gta-cyan tracking-wider mb-4 uppercase">
              EXPERIMENTAL METHODOLOGY & PIPELINE PHASES
            </div>
            <div className="space-y-4">
              {researchData.methodology.map((m, idx) => (
                <div key={idx} className="border-l-2 border-gta-cyan pl-4">
                  <div className="font-pricedown text-base text-white tracking-wider">{m.phase}</div>
                  <p className="text-xs sm:text-sm text-white/70 font-sans mt-0.5">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
