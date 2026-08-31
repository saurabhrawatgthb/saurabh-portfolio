"use client";

import React, { useState } from "react";
import { CheckCircle2, Award, Trophy, GraduationCap, Users, Network, ChevronRight } from "lucide-react";
import { achievementsData, AchievementItem } from "@/data/achievements";
import { sounds } from "@/components/sound/SoundEngine";

type CategoryFilter = "ALL" | "ACADEMICS" | "HACKATHONS" | "ORGANISATIONAL EXPERIENCE" | "TECHNICAL COMMUNITY";

export function AchievementSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("ALL");
  const [selectedHub, setSelectedHub] = useState<"ALL" | "IEEE" | "TBI" | "TDH">("ALL");

  const categories: CategoryFilter[] = [
    "ALL",
    "ACADEMICS",
    "HACKATHONS",
    "ORGANISATIONAL EXPERIENCE",
    "TECHNICAL COMMUNITY",
  ];

  const filteredItems =
    activeCategory === "ALL"
      ? achievementsData
      : achievementsData.filter((item) => item.category === activeCategory);

  const topMilestones = [
    { label: "1ST & 2ND YR CGPA", value: "9+", sub: "GRAPHIC ERA HILL UNIV", color: "text-gta-yellow", border: "border-gta-yellow" },
    { label: "HIGH SCHOOL (ICSE)", value: "94%", sub: "ICSE BOARD EXAM", color: "text-gta-pink", border: "border-gta-pink" },
    { label: "INTERMEDIATE (ISC)", value: "89%", sub: "ISC BOARD EXAM", color: "text-gta-cyan", border: "border-gta-cyan" },
    { label: "PRAXIS 2.0", value: "FINALIST", sub: "GOOGLE DEVELOPER GROUPS", color: "text-gta-hotPink", border: "border-gta-hotPink" },
    { label: "ET X GENAI", value: "SEMIFINALIST", sub: "ECONOMIC TIMES", color: "text-amber-400", border: "border-amber-400" },
    { label: "NEURAL NEXUS", value: "FINALIST", sub: "GRAFEST 2026 AI/ML", color: "text-emerald-400", border: "border-emerald-400" },
  ];

  const networkHubs = [
    {
      id: "IEEE",
      name: "IEEE STUDENT BRANCH",
      institution: "Graphic Era Hill University",
      role: "MEMBER",
      color: "border-gta-pink text-gta-pink",
      bg: "bg-gta-pink/10",
      connections: [
        { name: "TECHNIEEEKS'25", type: "Annual Research Paper Workshop", role: "Active Contributor & Volunteer" },
        { name: "SAARTHI'25", type: "National-Level 24-Hr Hackathon", role: "Organising & Management Committee" },
        { name: "CISCT CONF", type: "International Conference", role: "Volunteer" },
        { name: "TECHNIEEEKS'26", type: "Annual Research Paper Workshop", role: "Active Contributor & Volunteer" },
      ],
    },
    {
      id: "TBI",
      name: "TBI (TECH BUSINESS INCUBATOR)",
      institution: "Graphic Era University",
      role: "MEMBER",
      color: "border-gta-yellow text-gta-yellow",
      bg: "bg-gta-yellow/10",
      connections: [
        { name: "GRAPH-E-THON 2.0", type: "48-Hour National Hackathon", role: "Management Committee" },
        { name: "GRAPH-E-THON 3.0", type: "72-Hour National Hackathon", role: "Management Committee" },
      ],
    },
    {
      id: "TDH",
      name: "TDH (THE DESIGNNOVATION HUB)",
      institution: "Graphic Era University",
      role: "MEMBER",
      color: "border-gta-cyan text-gta-cyan",
      bg: "bg-gta-cyan/10",
      connections: [
        { name: "DESIGN INNOVATION", type: "Prototyping & Design Thinking", role: "Member" },
      ],
    },
  ];

  return (
    <section id="achievements" className="relative min-h-screen w-full px-4 sm:px-8 md:px-16 py-24 text-white font-sans select-none">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-4 border-white pb-4 mb-10">
          <div>
            <div className="font-pricedown text-gta-pink text-xl tracking-widest uppercase">
              CONFIRMED EVIDENCE &amp; MERIT RECORDS
            </div>
            <h2 className="font-pricedown text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-none gta-text-outline">
              ACHIEVEMENTS
            </h2>
          </div>
          <div className="bg-gta-pink text-white font-pricedown px-4 py-2 rounded-2xl text-lg tracking-widest shadow-hard">
            {achievementsData.length} VERIFIED STAMPS
          </div>
        </div>

        {/* 01. Large Typography Milestone Showcase */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {topMilestones.map((m, idx) => (
            <div
              key={idx}
              className={`rounded-2xl ios-crystal-glass p-4 border ${m.border} flex flex-col justify-between text-center hover:scale-105 transition-transform shadow-lg`}
            >
              <div className="text-[10px] font-pricedown tracking-wider text-white/70">
                {m.label}
              </div>
              <div className={`font-pricedown text-3xl sm:text-4xl my-1 ${m.color} leading-none gta-text-outline`}>
                {m.value}
              </div>
              <div className="text-[9px] font-mono text-white/60 truncate">
                {m.sub}
              </div>
            </div>
          ))}
        </div>

        {/* 02. Hackathon Trajectory Flow Summary */}
        <div className="rounded-3xl ios-crystal-glass p-6 sm:p-8 mb-12 border border-white/20">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/15 pb-3 mb-4">
            <div className="flex items-center gap-2 text-gta-yellow">
              <Trophy className="h-5 w-5" />
              <span className="font-pricedown text-lg sm:text-xl tracking-wider text-white">
                NATIONAL-LEVEL HACKATHONS &amp; COMPETITIONS RECORD
              </span>
            </div>
            <span className="font-mono text-xs text-gta-cyan font-bold">
              VERIFIED CONTEST RESULTS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-2xl bg-black/50 border border-gta-pink p-4 flex flex-col justify-between">
              <div className="text-xs font-pricedown tracking-wider text-gta-pink">GOOGLE DEV GROUPS</div>
              <div className="font-pricedown text-2xl text-white my-1">PRAXIS 2.0</div>
              <div className="inline-block self-start px-2 py-0.5 rounded bg-gta-pink text-white font-pricedown text-xs tracking-wider font-bold">
                FINALIST
              </div>
            </div>

            <div className="rounded-2xl bg-black/50 border border-gta-yellow p-4 flex flex-col justify-between">
              <div className="text-xs font-pricedown tracking-wider text-gta-yellow">ECONOMIC TIMES</div>
              <div className="font-pricedown text-2xl text-white my-1">ET X GENAI</div>
              <div className="inline-block self-start px-2 py-0.5 rounded bg-gta-yellow text-black font-pricedown text-xs tracking-wider font-bold">
                SEMIFINALIST
              </div>
            </div>

            <div className="rounded-2xl bg-black/50 border border-gta-cyan p-4 flex flex-col justify-between">
              <div className="text-xs font-pricedown tracking-wider text-gta-cyan">GRAFEST 2026</div>
              <div className="font-pricedown text-2xl text-white my-1">NEURAL NEXUS AI/ML</div>
              <div className="inline-block self-start px-2 py-0.5 rounded bg-gta-cyan text-black font-pricedown text-xs tracking-wider font-bold">
                FINALIST
              </div>
            </div>

            <div className="rounded-2xl bg-black/50 border border-white/30 p-4 flex flex-col justify-between">
              <div className="text-xs font-pricedown tracking-wider text-white/70">MULTIPLE NATIONAL S鬥RINTS</div>
              <div className="font-pricedown text-lg text-white my-1 leading-snug">
                GREEN BHARAT • NSUT'26 • HACK THE WINTER • FINLIT
              </div>
              <div className="inline-block self-start px-2 py-0.5 rounded bg-white/20 text-white font-pricedown text-xs tracking-wider font-bold">
                PARTICIPANT / SELECTED
              </div>
            </div>
          </div>
        </div>

        {/* 03. Section 41: THE NETWORK Visual Organization Map */}
        <div className="rounded-3xl ios-crystal-glass crystal-sheen-sweep p-6 sm:p-8 mb-12 border border-gta-cyan/40 relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gta-cyan/20 border border-gta-cyan text-gta-cyan">
                <Network className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-pricedown text-2xl sm:text-3xl text-white tracking-wider">
                  THE NETWORK // TECHNICAL COMMUNITY ECOSYSTEM
                </h3>
                <p className="text-xs font-mono text-white/75 mt-0.5">
                  Core university hubs connected to research workshops, national hackathons, and conferences.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {(["ALL", "IEEE", "TBI", "TDH"] as const).map((hub) => (
                <button
                  key={hub}
                  onClick={() => {
                    sounds.playKeyClick();
                    setSelectedHub(hub);
                  }}
                  className={`px-3 py-1 rounded-xl font-pricedown text-xs tracking-wider transition-all ${
                    selectedHub === hub
                      ? "bg-gta-cyan text-black font-bold shadow-md"
                      : "bg-white/10 text-white/70 hover:text-white"
                  }`}
                >
                  {hub}
                </button>
              ))}
            </div>
          </div>

          {/* Network Hub Nodes Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {networkHubs
              .filter((h) => selectedHub === "ALL" || selectedHub === h.id)
              .map((hub) => (
                <div
                  key={hub.id}
                  className={`rounded-2xl border ${hub.color} ${hub.bg} p-5 flex flex-col justify-between relative`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-pricedown text-xs tracking-widest bg-black/60 px-2.5 py-0.5 rounded-md text-white">
                        HUB NODE // {hub.id}
                      </span>
                      <span className="font-pricedown text-xs tracking-widest text-gta-yellow font-bold">
                        ROLE: {hub.role}
                      </span>
                    </div>

                    <h4 className="font-pricedown text-xl text-white tracking-wide">
                      {hub.name}
                    </h4>
                    <p className="text-xs text-white/80 font-mono mb-4">
                      {hub.institution}
                    </p>

                    {/* Outgoing Connected Events */}
                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <div className="text-[10px] font-pricedown tracking-widest text-white/60 uppercase">
                        CONNECTED INITIATIVES &amp; EVENTS:
                      </div>
                      {hub.connections.map((conn, cIdx) => (
                        <div
                          key={cIdx}
                          className="bg-black/40 rounded-xl p-2.5 border border-white/10 hover:border-white/30 transition-all flex items-start justify-between gap-2"
                        >
                          <div>
                            <div className="font-pricedown text-sm text-white flex items-center gap-1">
                              <span className="text-gta-cyan">↳</span> {conn.name}
                            </div>
                            <div className="text-[11px] text-white/70 font-sans">
                              {conn.type}
                            </div>
                          </div>
                          <span className="text-[10px] font-mono font-bold text-gta-yellow shrink-0 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                            {conn.role}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* 04. Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sounds.playKeyClick();
                setActiveCategory(cat);
              }}
              className={`px-4 py-2 rounded-xl font-pricedown text-xs sm:text-sm tracking-wider transition-all ${
                activeCategory === cat
                  ? "bg-white text-black font-bold shadow-hard"
                  : "ios-crystal-glass text-white/80 hover:text-white hover:border-gta-yellow"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 05. Evidence Collage Grid in Crystal Glass */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            return (
              <div
                key={item.id}
                className="rounded-3xl ios-crystal-glass crystal-sheen-sweep p-6 sm:p-8 hover:border-gta-yellow transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-4">
                    <span className="font-pricedown text-xs text-white/60 tracking-widest">
                      [{item.code}]
                    </span>
                    <span className="border border-gta-yellow text-gta-yellow rounded-lg font-pricedown text-[10px] px-2.5 py-0.5 tracking-wider font-bold">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-pricedown text-2xl sm:text-3xl text-white group-hover:text-gta-yellow transition-colors leading-tight mb-1">
                    {item.title}
                  </h3>

                  <div className="font-pricedown text-sm text-gta-pink tracking-wider mb-3">
                    {item.organization}
                  </div>

                  <p className="text-xs sm:text-sm text-white/85 font-sans leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-white/15 pt-3 flex items-center justify-between text-xs font-mono text-white/70">
                  <span>{item.date}</span>
                  <span className="text-gta-cyan font-bold flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {item.classification === "CLASSIFIED // VERIFIED" ? "VERIFIED" : "EVIDENCE"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

