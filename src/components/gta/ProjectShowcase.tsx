"use client";

import React, { useState } from "react";
import { Folder, ExternalLink, ShieldCheck, Target, Eye, Layers, ChevronRight, Zap } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { projectsData, ProjectItem } from "@/data/projects";
import { RakshakSimulator } from "@/components/simulators/RakshakSimulator";
import { UniCardSimulator } from "@/components/simulators/UniCardSimulator";
import { PotholeSimulator } from "@/components/simulators/PotholeSimulator";
import { QuizSimulator } from "@/components/simulators/QuizSimulator";
import { sounds } from "@/components/sound/SoundEngine";

export function ProjectShowcase() {
  const [activeMissionId, setActiveMissionId] = useState<string>("PROJECT_001");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const missionColorMap: Record<string, { border: string; text: string; bg: string; badge: string }> = {
    PROJECT_001: { border: "border-gta-red", text: "text-gta-red", bg: "bg-gta-red", badge: "bg-gta-red text-white" },
    PROJECT_002: { border: "border-gta-cyan", text: "text-gta-cyan", bg: "bg-gta-cyan", badge: "bg-gta-cyan text-black" },
    PROJECT_003: { border: "border-gta-yellow", text: "text-gta-yellow", bg: "bg-gta-yellow", badge: "bg-gta-yellow text-black" },
    PROJECT_004: { border: "border-gta-orange", text: "text-gta-orange", bg: "bg-gta-orange", badge: "bg-gta-orange text-white" },
    PROJECT_005: { border: "border-gta-pink", text: "text-gta-pink", bg: "bg-gta-pink", badge: "bg-gta-pink text-white" },
    PROJECT_006: { border: "border-gta-cyanBright", text: "text-gta-cyanBright", bg: "bg-gta-cyanBright", badge: "bg-gta-cyanBright text-black" },
    PROJECT_007: { border: "border-white", text: "text-white", bg: "bg-white", badge: "bg-white text-black" },
  };

  const currentProject = projectsData.find((p) => p.id === activeMissionId) || projectsData[0];
  const colorTheme = missionColorMap[currentProject.id] || missionColorMap.PROJECT_001;

  const handleSelectMission = (id: string) => {
    sounds.playKeyClick();
    setActiveMissionId(id);
  };

  return (
    <section id="projects" className="relative min-h-screen w-full px-4 sm:px-8 md:px-16 py-24 text-white font-sans select-none">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-4 border-white pb-4 mb-10">
          <div>
            <div className="font-pricedown text-gta-yellow text-xl tracking-widest uppercase">
              CLASSIFIED OPERATIONS // HEISTS & PROTOTYPES
            </div>
            <h2 className="font-pricedown text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-none gta-text-outline">
              PROJECTS
            </h2>
          </div>
          <div className="bg-gta-hotPink px-4 py-2 rounded-xl text-white font-pricedown text-lg tracking-widest shadow-hard">
            {projectsData.length} ACTIVE CASE FILES
          </div>
        </div>

        {/* Mission Selector Tabs */}
        <div className="flex gap-2.5 overflow-x-auto pb-4 scrollbar-none">
          {projectsData.map((project, idx) => {
            const isSelected = project.id === activeMissionId;
            const theme = missionColorMap[project.id] || missionColorMap.PROJECT_001;
            return (
              <button
                key={project.id}
                onClick={() => handleSelectMission(project.id)}
                className={`flex-shrink-0 px-5 py-3 rounded-xl border transition-all font-pricedown tracking-wider text-left backdrop-blur-xl ${
                  isSelected
                    ? `${theme.border} bg-black/75 ${theme.text} scale-105 shadow-[0_8px_32px_rgba(0,0,0,0.5)]`
                    : "border-white/20 bg-black/40 text-white/70 hover:border-white hover:text-white"
                }`}
              >
                <div className="text-xs opacity-70">MISSION 0{idx + 1}</div>
                <div className="text-lg md:text-xl font-bold">{project.title}</div>
              </button>
            );
          })}
        </div>

        {/* Active Mission Glass Dossier */}
        <div className={`mt-6 rounded-3xl bg-black/50 backdrop-blur-2xl border-2 ${colorTheme.border} p-6 sm:p-8 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] relative overflow-hidden`}>
          {/* Internal gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

          {/* Mission Top Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/20 pb-6 mb-6 relative z-10">
            <div>
              <div className="flex items-center gap-2 font-pricedown text-sm tracking-widest text-white/60 uppercase">
                <Target className={`h-4 w-4 ${colorTheme.text}`} />
                <span>OPERATION // {currentProject.id}</span>
                <span>•</span>
                <span className={colorTheme.text}>{currentProject.category}</span>
              </div>

              <h3 className="mt-2 font-pricedown text-4xl sm:text-6xl md:text-7xl uppercase text-white gta-text-outline leading-none">
                {currentProject.title}
              </h3>

              <div className={`mt-2 font-pricedown text-lg sm:text-xl ${colorTheme.text} tracking-wider`}>
                {currentProject.tagline}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  sounds.playFileOpen();
                  setActiveModalProject(currentProject);
                }}
                className={`flex items-center gap-2 border ${colorTheme.border} bg-black/60 rounded-xl px-5 py-2.5 font-pricedown text-sm tracking-widest ${colorTheme.text} hover:bg-white hover:text-black transition-all shadow-hard`}
              >
                <Eye className="h-4 w-4" />
                <span>MISSION BRIEFING</span>
              </button>

              {currentProject.github && (
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-black border border-white rounded-xl px-4 py-2.5 font-pricedown text-sm tracking-widest hover:bg-gta-yellow transition-all shadow-hard"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>SRC REPO</span>
                </a>
              )}
            </div>
          </div>

          {/* Interactive Project Simulator Embedded */}
          <div className="mb-8 relative z-10">
            <div className="flex items-center justify-between font-pricedown text-xs tracking-widest text-white/60 mb-2 uppercase">
              <span>LIVE SYSTEM TELEMETRY & SIMULATOR</span>
              <span className={colorTheme.text}>STATUS: ACTIVE SYSTEM</span>
            </div>

            {currentProject.simulatorType === "rakshak" && <RakshakSimulator />}
            {currentProject.simulatorType === "unicard" && <UniCardSimulator />}
            {currentProject.simulatorType === "pothole" && <PotholeSimulator />}
            {currentProject.simulatorType === "quiz" && <QuizSimulator />}
            {currentProject.simulatorType === "generic" && (
              <div className="bg-black/60 rounded-2xl border border-white/20 p-6 text-center space-y-3">
                <div className="font-pricedown text-xl text-gta-yellow tracking-wider">
                  {currentProject.title} // ENTERPRISE DATA PIPELINE
                </div>
                <p className="text-sm text-white/80 max-w-2xl mx-auto font-sans">
                  {currentProject.brief}
                </p>
                <div className="bg-black/80 rounded-xl border border-white/10 p-3 max-w-2xl mx-auto text-left text-xs font-mono text-gta-cyan">
                  FLOW: {currentProject.architecture.flowSummary}
                </div>
              </div>
            )}
          </div>

          {/* Problem & Solution Glass Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 relative z-10">
            <div className="rounded-2xl bg-black/60 border border-gta-red/60 p-5 shadow-hard">
              <div className="font-pricedown text-lg text-gta-red tracking-widest mb-2 uppercase">
                [ THE THREAT / PROBLEM ]
              </div>
              <p className="text-sm text-white/90 font-medium leading-relaxed font-sans">
                {currentProject.problem}
              </p>
            </div>

            <div className="rounded-2xl bg-black/60 border border-gta-cyan/60 p-5 shadow-hard">
              <div className="font-pricedown text-lg text-gta-cyan tracking-widest mb-2 uppercase">
                [ THE COUNTER-MEASURE / SOLUTION ]
              </div>
              <p className="text-sm text-white/90 font-medium leading-relaxed font-sans">
                {currentProject.solution}
              </p>
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="border-t border-white/10 pt-4 flex flex-wrap items-center gap-2 relative z-10">
            <span className="font-pricedown text-xs tracking-widest text-white/60 mr-2 uppercase">
              DEPLOYED ARSENAL:
            </span>
            {currentProject.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="bg-black/70 border border-white/30 px-3 py-1 rounded-lg font-pricedown text-xs tracking-wider text-white hover:border-gta-yellow hover:text-gta-yellow transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Detail Modal Dossier */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl">
          <div className="relative max-h-[90vh] w-full max-w-4xl rounded-3xl bg-black/85 border-4 border-gta-yellow p-6 md:p-8 shadow-[0_16px_50px_rgba(0,0,0,0.8)] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-6">
              <div>
                <span className="font-pricedown text-xs text-gta-yellow tracking-widest uppercase">
                  CLASSIFIED BRIEFING // {activeModalProject.id}
                </span>
                <h4 className="font-pricedown text-3xl md:text-5xl text-white gta-text-outline">
                  {activeModalProject.title}
                </h4>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="border border-white/40 rounded-xl bg-gta-red text-white px-4 py-2 font-pricedown hover:bg-white hover:text-black transition-colors"
              >
                ✕ CLOSE
              </button>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-black/70 border border-white/20 p-5">
                <div className="font-pricedown text-lg text-gta-cyan tracking-wider mb-3">
                  SYSTEM ARCHITECTURE BREAKDOWN
                </div>
                <div className="space-y-3">
                  {activeModalProject.architecture.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="bg-gta-cyan text-black rounded font-pricedown px-2 py-0.5 text-xs font-bold">
                        0{idx + 1}
                      </span>
                      <div>
                        <div className="font-pricedown text-base text-white tracking-wider">
                          {step.node}
                        </div>
                        <div className="text-xs text-white/70 font-sans">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-black/70 border border-white/20 p-5">
                <div className="font-pricedown text-lg text-gta-yellow tracking-wider mb-3">
                  VERIFIED MISSION HIGHLIGHTS
                </div>
                <ul className="space-y-2 list-disc list-inside text-sm text-white/80 font-sans">
                  {activeModalProject.keyFeatures.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="bg-gta-yellow text-black rounded-xl font-pricedown px-6 py-2.5 text-base tracking-widest hover:bg-white transition-all shadow-hard"
              >
                DISMISS BRIEFING
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
