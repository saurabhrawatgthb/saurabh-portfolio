"use client";

import React from "react";
import { FileCode, GraduationCap, Cpu, Layers, CheckCircle2, Bookmark } from "lucide-react";
import { profileData } from "@/data/profile";

export function Chapter03Identity() {
  return (
    <section className="relative min-h-screen w-full px-4 py-20 sm:px-8 font-mono">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-term-green/30 pb-3">
          <div className="flex items-center gap-2 text-sm font-bold text-term-greenBright glow-green-sm">
            <FileCode className="h-5 w-5" />
            <span>03 // IDENTITY_FILE.exe</span>
          </div>
          <span className="text-xs text-archive-muted">ARCHIVE RECORD: #SR-IDENTITY-2026</span>
        </div>

        {/* Dossier Card Container */}
        <div className="mt-8 border-2 border-term-green/40 bg-crt-black p-6 sm:p-8 shadow-term-green">
          {/* Header File Stamp */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-dashed border-term-green/30 pb-6">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-archive-muted">FILE SUBJECT</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-archive-paper">
                {profileData.name}
              </h2>
              <div className="text-xs text-term-amber font-semibold mt-0.5">
                CODENAME: {profileData.codename}
              </div>
            </div>

            <div className="rounded border border-term-green/40 bg-term-green/10 px-3 py-1.5 text-right">
              <div className="text-[9px] text-archive-muted uppercase">SYSTEM STATUS</div>
              <div className="text-xs font-bold text-term-greenBright flex items-center gap-1.5 justify-end">
                <span className="h-2 w-2 rounded-full bg-term-green animate-pulse" />
                {profileData.status} // BUILDING
              </div>
            </div>
          </div>

          {/* Academic Dossier Block */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="md:col-span-6 space-y-4">
              <div className="border border-term-green/30 bg-crt-surface p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-term-green">
                  <GraduationCap className="h-4 w-4" />
                  <span>ACADEMIC CREDENTIALS</span>
                </div>
                
                <div className="mt-3 space-y-1.5 text-xs">
                  <div className="text-archive-paper font-bold text-sm">
                    {profileData.education.degree} in {profileData.education.field}
                  </div>
                  <div className="text-term-amber font-semibold">
                    {profileData.education.institution}
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-archive-muted pt-2 border-t border-term-green/20">
                    <span>PERIOD: {profileData.education.period}</span>
                    <span className="text-term-green font-bold">STATUS: {profileData.education.status}</span>
                  </div>
                </div>
              </div>

              {/* Bio Narrative */}
              <div className="p-4 border border-term-green/20 bg-crt-dark">
                <div className="text-[10px] text-archive-muted uppercase tracking-wider">
                  ENGINEERING PHILOSOPHY & OBJECTIVE
                </div>
                <p className="mt-2 text-xs sm:text-sm text-archive-text leading-relaxed font-sans">
                  Saurabh is a Computer Science Engineer and builder who specializes in architecting practical, resilient systems. Rather than viewing software in isolation, his work spans artificial intelligence, computer vision pipelines, IoT embedded hardware, and high-concurrency distributed backends designed for real-world reliability.
                </p>
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="md:col-span-6 space-y-4">
              <div className="border border-term-green/30 bg-crt-surface p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-term-amber">
                  <Layers className="h-4 w-4" />
                  <span>SYSTEM SPECIFICATIONS & RECORD</span>
                </div>

                <div className="mt-3 divide-y divide-term-green/20 text-xs">
                  {profileData.specs.map((spec, index) => (
                    <div key={index} className="flex justify-between py-2">
                      <span className="text-archive-muted text-[10px]">{spec.label}:</span>
                      <span className="text-archive-paper font-semibold text-right text-[11px]">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Focus Areas Badges */}
              <div className="border border-term-green/20 bg-crt-dark p-4">
                <div className="text-[10px] text-archive-muted uppercase tracking-wider mb-2">
                  ACTIVE RESEARCH & DEVELOPMENT DOMAINS
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {profileData.focusAreas.map((area, index) => (
                    <span
                      key={index}
                      className="border border-term-green/30 bg-term-green/10 px-2 py-1 text-[10px] font-semibold text-term-green"
                    >
                      [{area}]
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
