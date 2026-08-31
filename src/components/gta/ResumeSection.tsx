"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Download,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Layers,
  Award,
  BookOpen,
  Briefcase,
  Zap,
  Printer,
} from "lucide-react";
import { ResumeDocument } from "@/components/resume/ResumeDocument";
import { generateAtsPlainText, getResumeData } from "@/data/resumeConfig";
import { sounds } from "@/components/sound/SoundEngine";

export function ResumeSection() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"preview" | "ats">("preview");
  const data = getResumeData();
  const atsText = generateAtsPlainText();

  const handleCopyText = async () => {
    sounds.playKeyClick();
    try {
      await navigator.clipboard.writeText(atsText);
      sounds.playAccessGranted();
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy ATS text: ", err);
    }
  };

  const handleDownloadTrigger = () => {
    sounds.playFileOpen();
    // Open printable /resume page or trigger print
    window.open("/resume", "_blank");
  };

  return (
    <section
      id="resume"
      className="relative min-h-screen w-full px-4 sm:px-8 md:px-16 py-24 text-white font-sans select-none"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-4 border-white pb-4 mb-12">
          <div>
            <div className="font-pricedown text-gta-hotPink text-xl tracking-widest uppercase">
              CONFIDENTIAL OPERATIVE DOSSIER // REAL-TIME REPO SYNC
            </div>
            <h2 className="font-pricedown text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-none gta-text-outline">
              RESUME
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-gta-pink/20 border border-gta-pink text-gta-pink px-4 py-2 rounded-xl font-pricedown text-sm tracking-widest uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-gta-pink animate-ping" />
              LIVE DATA LINKED
            </div>
            <div className="bg-gta-yellow px-4 py-2 text-black font-pricedown text-lg tracking-widest shadow-hard rounded-xl">
              ATS SCORE: 99 / 100
            </div>
          </div>
        </div>

        {/* Action Controls & Top Meta Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          <div className="lg:col-span-8 rounded-3xl ios-crystal-glass p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-pricedown text-2xl sm:text-3xl text-white tracking-wider">
                CURRICULUM VITAE & TECHNICAL SPECIFICATION
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mt-1 font-medium font-sans">
                Automatically assembled from verified codebase metrics, projects, and mission logs.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleCopyText}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-pricedown text-sm tracking-wider border border-white/30 bg-black/40 text-white hover:border-gta-cyan hover:text-gta-cyan transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-gta-cyan" />
                    <span>COPIED ATS TEXT</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY ATS TEXT</span>
                  </>
                )}
              </button>

              <button
                onClick={handleDownloadTrigger}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-pricedown text-base tracking-wider bg-gta-yellow hover:bg-yellow-300 text-black shadow-hard hover:scale-105 active:scale-95 transition-all font-bold"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD / PRINT PDF</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-3xl ios-crystal-glass p-6 sm:p-8 flex items-center justify-between">
            <div>
              <div className="text-xs font-pricedown tracking-widest text-gta-cyan mb-1">
                SYSTEM REPOSITORY STATUS
              </div>
              <div className="font-mono text-xs text-white/90">
                • {data.featuredProjects.length} Projects Synchronized<br />
                • {data.experience.length} Experience Logs<br />
                • {data.skillsByCategory.reduce((acc, c) => acc + c.skills.length, 0)} Skills Verified
              </div>
            </div>
            <Link
              href="/resume"
              target="_blank"
              className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-110"
              title="Open standalone print view"
            >
              <ExternalLink className="w-5 h-5 text-gta-yellow" />
            </Link>
          </div>
        </div>

        {/* Dual Layout: Interactive Document Preview Window + Side Fast-Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Document Preview Viewport Frame */}
          <div className="lg:col-span-8 space-y-4">
            {/* View Mode Switcher */}
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    sounds.playKeyClick();
                    setActiveTab("preview");
                  }}
                  className={`px-4 py-1.5 rounded-xl font-pricedown text-xs tracking-wider transition-all ${
                    activeTab === "preview"
                      ? "bg-white text-black font-bold shadow-md"
                      : "bg-white/10 text-white/70 hover:text-white"
                  }`}
                >
                  GRAPHICAL A4 PREVIEW
                </button>
                <button
                  onClick={() => {
                    sounds.playKeyClick();
                    setActiveTab("ats");
                  }}
                  className={`px-4 py-1.5 rounded-xl font-pricedown text-xs tracking-wider transition-all ${
                    activeTab === "ats"
                      ? "bg-gta-cyan text-black font-bold shadow-md"
                      : "bg-white/10 text-white/70 hover:text-white"
                  }`}
                >
                  ATS PLAIN TEXT STREAM
                </button>
              </div>

              <div className="text-[11px] font-mono text-white/60 hidden sm:block">
                CLICK ACTIONS TO EXPORT OR PRINT
              </div>
            </div>

            {/* Document Window Container */}
            <div className="rounded-3xl ios-crystal-glass p-3 sm:p-6 border border-white/20 shadow-2xl relative overflow-hidden">
              {activeTab === "preview" ? (
                <div className="max-h-[750px] overflow-y-auto rounded-2xl p-2 sm:p-4 bg-slate-900/60 custom-scrollbar border border-white/10">
                  <ResumeDocument className="shadow-2xl scale-[0.98] sm:scale-100 transform origin-top" />
                </div>
              ) : (
                <div className="max-h-[750px] overflow-y-auto rounded-2xl p-6 bg-black/90 font-mono text-xs text-emerald-400 custom-scrollbar border border-emerald-500/20 leading-relaxed whitespace-pre-wrap select-text">
                  {atsText}
                </div>
              )}
            </div>
          </div>

          {/* Quick Fast-Dossier Highlights Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Education & Degree Card */}
            <div className="rounded-3xl ios-crystal-glass p-6">
              <div className="flex items-center gap-3 mb-3 text-gta-yellow">
                <BookOpen className="w-5 h-5" />
                <span className="font-pricedown text-lg tracking-wider text-white">
                  ACADEMIC FOUNDATION
                </span>
              </div>
              <p className="text-sm font-bold text-white mb-1">
                {data.education[0]?.degree}
              </p>
              <p className="text-xs text-white/80 mb-2">
                {data.education[0]?.institution}
              </p>
              <div className="text-xs font-mono text-gta-cyan font-semibold">
                {data.education[0]?.details[0]} • {data.education[0]?.status}
              </div>
            </div>

            {/* Experience Highlights */}
            <div className="rounded-3xl ios-crystal-glass p-6">
              <div className="flex items-center gap-3 mb-3 text-gta-pink">
                <Briefcase className="w-5 h-5" />
                <span className="font-pricedown text-lg tracking-wider text-white">
                  KEY POSITIONS OF IMPACT
                </span>
              </div>
              <div className="space-y-3 divide-y divide-white/10">
                {data.experience.slice(0, 3).map((exp, idx) => (
                  <div key={idx} className={idx > 0 ? "pt-2.5" : ""}>
                    <div className="text-xs font-bold text-white">
                      {exp.role}
                    </div>
                    <div className="text-xs text-gta-yellow font-pricedown tracking-wider">
                      {exp.organization}
                    </div>
                    <div className="text-[11px] font-mono text-white/60">
                      {exp.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ATS Compliance Checklist */}
            <div className="rounded-3xl ios-crystal-glass p-6 space-y-3">
              <div className="flex items-center gap-3 text-gta-cyan">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-pricedown text-lg tracking-wider text-white">
                  ATS OPTIMIZATION SPECS
                </span>
              </div>
              <ul className="space-y-2 text-xs text-white/85 font-mono">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Standard Semantic Hierarchy</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Vector High-DPI Print Ready</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No Multi-Column Parser Traps</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct Clipboard Plain Text Engine</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
