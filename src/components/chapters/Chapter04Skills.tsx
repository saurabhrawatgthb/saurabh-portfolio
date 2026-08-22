"use client";

import React, { useState } from "react";
import { Cpu, Terminal, CheckCircle2, Shield, Activity, RefreshCw } from "lucide-react";
import { skillModules, SkillModule } from "@/data/skills";
import { sounds } from "@/components/sound/SoundEngine";

export function Chapter04Skills() {
  const [selectedModule, setSelectedModule] = useState<SkillModule>(skillModules[0]);
  const [isScanning, setIsScanning] = useState(false);

  const handleSelectModule = (mod: SkillModule) => {
    sounds.playKeyClick();
    setIsScanning(true);
    setSelectedModule(mod);

    setTimeout(() => {
      sounds.playRadarPing();
      setIsScanning(false);
    }, 400);
  };

  return (
    <section className="relative min-h-screen w-full px-4 py-20 sm:px-8 font-mono">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-term-green/30 pb-3">
          <div className="flex items-center gap-2 text-sm font-bold text-term-greenBright glow-green-sm">
            <Cpu className="h-5 w-5" />
            <span>04 // SKILL_MATRIX.diag</span>
          </div>
          <span className="text-xs text-archive-muted">DIAGNOSTIC SUBSYSTEM CHECK: 5 MODULES ONLINE</span>
        </div>

        {/* Modular Diagnostics Container */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left: Module Selector Tabs */}
          <div className="lg:col-span-4 space-y-2">
            <div className="text-[10px] uppercase text-archive-muted tracking-wider mb-2">
              SELECT SUBSYSTEM MODULE
            </div>

            {skillModules.map((mod) => {
              const isSelected = selectedModule.id === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => handleSelectModule(mod)}
                  data-cursor={`MOD_${mod.code}`}
                  className={`w-full text-left p-3 border transition-all ${
                    isSelected
                      ? "border-term-green bg-term-green/15 text-term-greenBright shadow-term-green"
                      : "border-term-green/20 bg-crt-black text-archive-muted hover:border-term-green/50 hover:text-archive-text"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold">[{mod.code}]</span>
                    <span className={`text-[9px] px-1 py-0.5 border ${
                      mod.status === "OPTIMIZED"
                        ? "border-term-amber text-term-amber"
                        : "border-term-green/40 text-term-green"
                    }`}>
                      {mod.status}
                    </span>
                  </div>
                  <div className="mt-1 text-xs font-semibold text-archive-paper">
                    {mod.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Module Diagnostic Terminal */}
          <div className="lg:col-span-8 border-2 border-term-green/40 bg-crt-black p-6 shadow-term-green flex flex-col justify-between">
            <div>
              {/* Module Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-term-green/30 pb-4">
                <div>
                  <span className="text-[10px] text-archive-muted uppercase">ACTIVE HARDWARE / SOFTWARE RUNTIME</span>
                  <h3 className="text-lg font-bold text-term-amber glow-amber">
                    {selectedModule.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  {isScanning ? (
                    <div className="flex items-center gap-1.5 text-xs text-term-amber animate-pulse">
                      <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                      <span>SCANNING...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-xs text-term-greenBright font-bold glow-green-sm">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>MODULE ONLINE</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Progress Scan Bar Simulation */}
              <div className="mt-4 border border-term-green/20 bg-crt-surface p-3">
                <div className="flex justify-between text-[10px] text-archive-muted mb-1">
                  <span>DIAGNOSTIC STATUS:</span>
                  <span className="text-term-green font-mono">[████████████████████] 100% CALIBRATED</span>
                </div>
                <p className="text-xs text-archive-text font-sans">
                  {selectedModule.description}
                </p>
              </div>

              {/* Skill Items Breakdown */}
              <div className="mt-6">
                <div className="text-[10px] uppercase text-archive-muted tracking-wider mb-3">
                  INTEGRATED CAPABILITIES & ENGINE PACKAGES
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedModule.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="border border-term-green/20 bg-crt-surface p-3 transition-colors hover:border-term-green/60"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-archive-paper">{skill.name}</span>
                        <span className="text-[9px] text-term-amber font-mono">[{skill.level}]</span>
                      </div>
                      <div className="mt-1 text-[10px] text-term-green/80 font-mono">
                        &gt; {skill.tag}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Telemetry Footer */}
            <div className="mt-6 border-t border-term-green/20 pt-3 flex items-center justify-between text-[10px] text-archive-muted">
              <span>SYSTEM ARCHIVE KERNEL: SR-MATRIX-OK</span>
              <span className="text-term-green font-semibold">ZERO COMPATIBILITY FAULTS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
