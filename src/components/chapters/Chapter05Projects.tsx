"use client";

import React, { useState } from "react";
import { Folder, ExternalLink, Eye, Layers, ShieldCheck, X, Activity, Play } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { projectsData, ProjectItem } from "@/data/projects";
import { RakshakSimulator } from "@/components/simulators/RakshakSimulator";
import { UniCardSimulator } from "@/components/simulators/UniCardSimulator";
import { PotholeSimulator } from "@/components/simulators/PotholeSimulator";
import { QuizSimulator } from "@/components/simulators/QuizSimulator";
import { sounds } from "@/components/sound/SoundEngine";

export function Chapter05Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("PROJECT_001");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const currentProject = projectsData.find((p) => p.id === selectedProjectId) || projectsData[0];

  const handleSelectProject = (p: ProjectItem) => {
    sounds.playKeyClick();
    setSelectedProjectId(p.id);
  };

  const handleOpenModal = (p: ProjectItem) => {
    sounds.playFileOpen();
    setActiveModalProject(p);
  };

  return (
    <section className="relative min-h-screen w-full px-4 py-20 sm:px-8 font-mono">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-term-green/30 pb-3">
          <div className="flex items-center gap-2 text-sm font-bold text-term-greenBright glow-green-sm">
            <Folder className="h-5 w-5" />
            <span>05 // PROJECT_ARCHIVE.db</span>
          </div>
          <span className="text-xs text-archive-muted">CLASSIFIED CASE FILES: 7 ENTRIES STORED</span>
        </div>

        {/* Project Selector Bar (Case File tabs) */}
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {projectsData.map((project) => {
            const isSelected = project.id === selectedProjectId;
            return (
              <button
                key={project.id}
                onClick={() => handleSelectProject(project)}
                data-cursor={`CASE_${project.id}`}
                className={`flex-shrink-0 border px-3 py-2 text-left transition-all ${
                  isSelected
                    ? "border-term-green bg-term-green/20 text-term-greenBright shadow-term-green"
                    : "border-term-green/30 bg-crt-black text-archive-muted hover:border-term-green/60 hover:text-archive-paper"
                }`}
              >
                <div className="flex items-center justify-between gap-3 text-[10px]">
                  <span className="font-bold">[{project.id}]</span>
                  <span className={`text-[8px] px-1 py-0.2 border ${
                    project.id === "PROJECT_001" ? "border-term-red text-term-red" : "border-term-green/40 text-term-green"
                  }`}>
                    {project.badge}
                  </span>
                </div>
                <div className="mt-1 text-xs font-bold text-archive-paper">
                  {project.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Project Case File Frame */}
        <div className="mt-6 border-2 border-term-green/40 bg-crt-black p-6 sm:p-8 shadow-term-green">
          {/* File Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-term-green/30 pb-6">
            <div>
              <div className="flex items-center gap-2 text-[10px] text-archive-muted uppercase tracking-wider">
                <span>CASE FILE: {currentProject.id}</span>
                <span>•</span>
                <span className="text-term-amber">{currentProject.category}</span>
              </div>
              <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold text-archive-paper">
                {currentProject.title}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-term-green font-semibold">
                {currentProject.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => handleOpenModal(currentProject)}
                data-cursor="VIEW_FILE"
                className="flex items-center gap-1.5 border border-term-amber bg-term-amber/15 px-3 py-1.5 text-xs font-bold text-term-amber hover:bg-term-amber hover:text-crt-black transition-colors"
              >
                <Eye className="h-4 w-4" />
                <span>[ VIEW CLASSIFIED DOSSIER ]</span>
              </button>

              {currentProject.github && (
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="EXT_GITHUB"
                  className="flex items-center gap-1.5 border border-term-green/40 bg-crt-surface px-3 py-1.5 text-xs text-term-green hover:bg-term-green hover:text-crt-black transition-colors"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>SRC REPO</span>
                </a>
              )}
            </div>
          </div>

          {/* Interactive Project Simulator embed */}
          <div className="mt-6">
            <div className="flex items-center justify-between text-[10px] text-archive-muted mb-2">
              <span>INTERACTIVE SYSTEM SIMULATOR & TELEMETRY</span>
              <span className="text-term-green font-mono">STATUS: OPERATIONAL</span>
            </div>

            {currentProject.simulatorType === "rakshak" && <RakshakSimulator />}
            {currentProject.simulatorType === "unicard" && <UniCardSimulator />}
            {currentProject.simulatorType === "pothole" && <PotholeSimulator />}
            {currentProject.simulatorType === "quiz" && <QuizSimulator />}
            {currentProject.simulatorType === "generic" && (
              <div className="border border-term-green/30 bg-crt-surface p-6 text-center space-y-3">
                <div className="text-sm font-bold text-term-green glow-green-sm">
                  {currentProject.title} // ENTERPRISE ARCHITECTURE PIPELINE
                </div>
                <div className="text-xs text-archive-text max-w-xl mx-auto font-sans">
                  {currentProject.brief}
                </div>
                <div className="bg-crt-black border border-term-green/20 p-3 max-w-2xl mx-auto text-left text-xs font-mono">
                  <div className="text-archive-muted text-[10px] mb-1">SYSTEM DATAFLOW:</div>
                  <div className="text-term-amber font-semibold">{currentProject.architecture.flowSummary}</div>
                </div>
              </div>
            )}
          </div>

          {/* Core Brief & Problem / Solution Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="border border-term-green/20 bg-crt-surface p-4 space-y-2">
              <div className="text-[10px] font-bold text-term-red uppercase tracking-wider">
                [ PROBLEM SPECIFICATION ]
              </div>
              <p className="text-xs text-archive-text leading-relaxed font-sans">
                {currentProject.problem}
              </p>
            </div>

            <div className="border border-term-green/20 bg-crt-surface p-4 space-y-2">
              <div className="text-[10px] font-bold text-term-greenBright uppercase tracking-wider">
                [ ENGINEERING SOLUTION ]
              </div>
              <p className="text-xs text-archive-text leading-relaxed font-sans">
                {currentProject.solution}
              </p>
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="mt-6 border-t border-term-green/20 pt-4">
            <div className="text-[10px] uppercase text-archive-muted tracking-wider mb-2">
              DEPLOYED TECHNOLOGIES & RUNTIMES
            </div>
            <div className="flex flex-wrap gap-2">
              {currentProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="border border-term-green/30 bg-term-green/10 px-2.5 py-1 text-xs text-term-green font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Classified Project Detail Dossier Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-crt-darkest/95 p-4 backdrop-blur-md">
          <div className="relative flex max-h-[88vh] w-full max-w-4xl flex-col border-2 border-term-amber/80 bg-crt-black p-6 shadow-term-amber overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-term-amber/40 pb-4">
              <div>
                <span className="text-[10px] text-term-amber font-mono">
                  CLASSIFIED DOCUMENT // {activeModalProject.id}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-archive-paper">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => {
                  sounds.playKeyClick();
                  setActiveModalProject(null);
                }}
                data-cursor="CLOSE"
                className="border border-term-red/40 bg-term-red/10 p-1.5 text-term-red hover:bg-term-red hover:text-crt-black transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Architecture Steps Breakdown */}
            <div className="mt-6 space-y-6 text-xs">
              <div className="border border-term-green/30 bg-crt-surface p-4">
                <div className="text-[10px] text-term-green font-bold uppercase mb-2">
                  DETAILED SYSTEM ARCHITECTURE PIPELINE
                </div>
                <div className="space-y-3">
                  {activeModalProject.architecture.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="rounded bg-term-green/20 px-1.5 py-0.5 text-[10px] font-bold text-term-green">
                        0{idx + 1}
                      </span>
                      <div>
                        <div className="font-bold text-archive-paper">{step.node}</div>
                        <div className="text-archive-muted text-[11px] font-sans">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features List */}
              <div className="border border-term-green/30 bg-crt-surface p-4">
                <div className="text-[10px] text-term-amber font-bold uppercase mb-2">
                  VERIFIED SYSTEM CAPABILITIES & FEATURES
                </div>
                <ul className="space-y-1.5 list-disc list-inside text-archive-text font-sans">
                  {activeModalProject.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlight Metric */}
              {activeModalProject.highlightMetric && (
                <div className="flex items-center justify-between border border-term-green/40 bg-term-green/10 p-3">
                  <span className="text-archive-muted">{activeModalProject.highlightMetric.label}:</span>
                  <span className="text-sm font-bold text-term-greenBright glow-green-sm">
                    {activeModalProject.highlightMetric.value}
                  </span>
                </div>
              )}
            </div>

            {/* Modal Close Button */}
            <div className="mt-6 border-t border-term-amber/30 pt-4 flex justify-end">
              <button
                onClick={() => {
                  sounds.playKeyClick();
                  setActiveModalProject(null);
                }}
                data-cursor="CLOSE"
                className="border border-term-amber bg-term-amber/20 px-6 py-2 text-xs font-bold text-term-amber hover:bg-term-amber hover:text-crt-black transition-colors"
              >
                [ CLOSE CLASSIFIED DOSSIER ]
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
