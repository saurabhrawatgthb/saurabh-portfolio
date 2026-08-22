"use client";

import React from "react";
import { ChevronDown, Sparkles, Terminal, Shield, Zap } from "lucide-react";
import { profileData } from "@/data/profile";
import { sounds } from "@/components/sound/SoundEngine";

export function HeroSection() {
  const scrollToPlayer = () => {
    sounds.playFileOpen();
    const el = document.getElementById("player");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-end px-4 sm:px-8 md:px-16 pb-16 pt-24 overflow-hidden bg-black select-none">
      {/* High-Contrast Cinematic Backdrop Artwork */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <picture className="w-full h-full block">
          <source
            media="(max-width: 768px)"
            srcSet="https://praxis-25.vercel.app/images/Jason_and_Lucia_01_phone.jpg"
          />
          <img
            src="https://praxis-25.vercel.app/images/Jason_and_Lucia_01_landscape.jpg"
            alt="Saurabh Rawat Cinematic Keyart"
            className="w-full h-full object-cover object-center filter contrast-125 brightness-90 saturate-125 scale-105 transition-transform duration-1000"
          />
        </picture>

        {/* Cinematic Vignette, Duotone Gradient, Halftone Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-halftone opacity-20" />
      </div>

      {/* Hero Typography & Character Badge Frame */}
      <div className="relative z-10 max-w-6xl">
        {/* Slanted Comic Badge */}
        <div className="inline-flex items-center gap-2 bg-gta-yellow px-4 py-1 font-pricedown text-black text-sm md:text-base tracking-widest shadow-hard -rotate-1 mb-4">
          <Zap className="h-4 w-4 fill-black" />
          <span>PROTAGONIST PROFILE // DEHRADUN CHAPTER</span>
        </div>

        {/* Oversized Cinematic Typography */}
        <h1 className="font-pricedown text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] uppercase leading-none tracking-tight text-white gta-text-outline-lg">
          SAURABH <span className="text-gta-pink gta-text-outline-lg">RAWAT</span>
        </h1>

        {/* Role & Mission Tagline */}
        <div className="mt-4 max-w-2xl bg-black/85 border-l-4 border-gta-cyan p-4 backdrop-blur-md shadow-hard-cyan">
          <div className="font-pricedown text-lg sm:text-2xl text-gta-cyan tracking-wider">
            COMPUTER SCIENCE ENGINEER • BUILDER • AI / SYSTEMS
          </div>
          <p className="mt-2 text-sm sm:text-base text-white/90 font-sans leading-relaxed font-semibold">
            &ldquo;{profileData.tagline}&rdquo;
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={scrollToPlayer}
            className="group flex items-center gap-3 bg-gta-hotPink hover:bg-white text-white hover:text-black px-8 py-3.5 font-pricedown text-lg tracking-widest transition-all shadow-hard-pink hover:shadow-hard transform hover:-translate-y-0.5"
          >
            <span>EXPLORE PROFILE DOSSIER</span>
            <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </button>

          <a
            href="#missions"
            className="flex items-center gap-2 bg-black/80 hover:bg-gta-yellow text-white hover:text-black border-2 border-white px-6 py-3.5 font-pricedown text-lg tracking-widest transition-all shadow-hard"
          >
            <span>ACTIVE MISSIONS</span>
          </a>
        </div>
      </div>
    </section>
  );
}
