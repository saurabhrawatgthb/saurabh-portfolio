"use client";

import React from "react";
import { BookOpen, Activity, FileText, CheckCircle2, Shield, Layers } from "lucide-react";
import { researchData } from "@/data/research";

export function Chapter07Research() {
  return (
    <section className="relative min-h-screen w-full px-4 py-20 sm:px-8 font-mono">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-term-green/30 pb-3">
          <div className="flex items-center gap-2 text-sm font-bold text-term-greenBright glow-green-sm">
            <BookOpen className="h-5 w-5" />
            <span>07 // RESEARCH_DATABASE.sci</span>
          </div>
          <span className="text-xs text-archive-muted">SCIENTIFIC DOSSIER: #{researchData.paperCode}</span>
        </div>

        {/* Paper Document Container */}
        <div className="mt-8 border-2 border-term-green/40 bg-crt-black p-6 sm:p-8 shadow-term-green space-y-6">
          {/* Header Metadata */}
          <div className="border-b border-term-green/30 pb-4">
            <div className="flex flex-wrap items-center gap-2 text-[10px] text-term-amber">
              <span>DOMAIN: {researchData.domain}</span>
              <span>•</span>
              <span>SUB-FIELD: {researchData.subField}</span>
            </div>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-archive-paper leading-snug">
              {researchData.title}
            </h2>
            <div className="mt-2 inline-block rounded border border-term-green/40 bg-term-green/10 px-2 py-0.5 text-[10px] text-term-greenBright font-semibold">
              STATUS: {researchData.status}
            </div>
          </div>

          {/* Abstract Block */}
          <div className="border-l-2 border-term-amber bg-crt-surface p-4">
            <div className="text-[10px] uppercase tracking-wider text-term-amber font-bold mb-1">
              [ SCIENTIFIC ABSTRACT ]
            </div>
            <p className="text-xs sm:text-sm text-archive-text leading-relaxed font-sans">
              {researchData.abstract}
            </p>
          </div>

          {/* Telemetry Metrics Benchmarks */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {researchData.systemMetrics.map((metric, idx) => (
              <div key={idx} className="border border-term-green/30 bg-crt-surface p-3 text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-term-greenBright glow-green-sm font-mono">
                  {metric.value}
                </div>
                <div className="text-[9px] text-term-amber font-semibold">{metric.unit}</div>
                <div className="mt-1 text-[8px] text-archive-muted uppercase">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Methodology Phases Breakdown */}
          <div className="border border-term-green/20 bg-crt-surface p-4">
            <div className="text-[10px] uppercase text-term-green font-bold tracking-wider mb-3">
              EXPERIMENTAL METHODOLOGY & PIPELINE PHASES
            </div>
            <div className="space-y-3">
              {researchData.methodology.map((m, idx) => (
                <div key={idx} className="border-l border-term-green/40 pl-3">
                  <div className="text-xs font-bold text-archive-paper">{m.phase}</div>
                  <p className="text-xs text-archive-muted font-sans mt-0.5">{m.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Findings List */}
          <div className="border border-term-green/20 bg-crt-surface p-4">
            <div className="text-[10px] uppercase text-term-amber font-bold tracking-wider mb-2">
              VERIFIED EXPERIMENTAL FINDINGS
            </div>
            <ul className="space-y-1.5 list-disc list-inside text-xs text-archive-text font-sans">
              {researchData.keyFindings.map((finding, idx) => (
                <li key={idx} className="leading-relaxed">
                  {finding}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
