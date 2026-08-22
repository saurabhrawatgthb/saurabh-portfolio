"use client";

import React from "react";
import { ChevronDown, Zap } from "lucide-react";
import { profileData } from "@/data/profile";
import { sounds } from "@/components/sound/SoundEngine";

export function HeroSection() {
  const scrollToPlayer = () => {
    sounds.playFileOpen();
    const el = document.getElementById("player");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-end px-4 sm:px-8 md:px-16 pb-16 pt-32 select-none">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Slanted Comic Pill */}
        <div className="inline-flex items-center gap-2 bg-gta-yellow px-4 py-1 font-pricedown text-black text-sm tracking-widest -rotate-1 mb-4 shadow-hard rounded-lg">
          <Zap className="h-4 w-4 fill-black" />
          <span>PROTAGONIST DOSSIER // DEHRADUN CHAPTER</span>
        </div>

        {/* Oversized Pricedown Typography */}
        <h1 className="font-pricedown text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] uppercase leading-none tracking-tight text-white gta-text-outline-lg">
          SAURABH <span className="text-gta-pink gta-text-outline-lg">RAWAT</span>
        </h1>

        {/* iOS Crystal Water Mirror Content Panel */}
        <div className="mt-6 max-w-3xl rounded-3xl ios-crystal-glass crystal-sheen-sweep p-6 sm:p-8">
          {/* Subtle liquid rainbow reflection */}
          <div className="absolute inset-0 liquid-mirror-bg opacity-25 pointer-events-none" />

          <div className="relative z-10">
            <div className="font-pricedown text-xl sm:text-2xl text-gta-cyan tracking-wider">
              COMPUTER SCIENCE • BUILDER • ENGINEER
            </div>
            <p className="mt-2 text-sm sm:text-base text-white/95 font-sans leading-relaxed font-semibold">
              &ldquo;{profileData.tagline}&rdquo;
            </p>
            <div className="mt-3 text-xs sm:text-sm text-gta-yellow font-mono">
              ★ B.Tech CSE @ Graphic Era University // AI, Computer Vision, Systems & IoT
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={scrollToPlayer}
            className="group flex items-center gap-3 bg-gta-hotPink hover:bg-white text-white hover:text-black px-8 py-3.5 rounded-2xl font-pricedown text-lg tracking-widest transition-all shadow-hard-pink transform hover:-translate-y-0.5"
          >
            <span>ENTER PLAYER DOSSIER</span>
            <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </button>

          <a
            href="#projects"
            className="flex items-center gap-2 ios-crystal-glass hover:bg-gta-yellow text-white hover:text-black px-6 py-3.5 rounded-2xl font-pricedown text-lg tracking-widest transition-all shadow-hard"
          >
            <span>EXPLORE MISSIONS</span>
          </a>
        </div>
      </div>
    </section>
  );
}
