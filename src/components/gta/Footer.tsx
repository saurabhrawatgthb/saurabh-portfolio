"use client";

import React from "react";
import { RotateCcw } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon, LeetCodeIcon } from "@/components/icons/SocialIcons";
import { profileData } from "@/data/profile";
import { sounds } from "@/components/sound/SoundEngine";

interface FooterProps {
  onReplay: () => void;
}

export function Footer({ onReplay }: FooterProps) {
  const handleReplayClick = () => {
    sounds.playPowerOn();
    onReplay();
  };

  return (
    <footer className="relative min-h-[85vh] w-full flex flex-col items-center justify-center px-4 sm:px-8 py-24 text-white font-sans text-center select-none">
      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        {/* Slanted Comic Stamp */}
        <div className="inline-block bg-gta-yellow text-black font-pricedown text-xl md:text-2xl px-6 py-2 rounded-2xl tracking-widest -rotate-2 shadow-hard">
          ★ 100% COMPLETION STATS ★
        </div>

        {/* Huge Mission Complete Banner */}
        <h2 className="font-pricedown text-6xl sm:text-8xl md:text-9xl tracking-tight text-white uppercase gta-text-outline-lg leading-none">
          MISSION <span className="text-gta-pink">COMPLETE</span>
        </h2>

        <div className="font-pricedown text-2xl sm:text-4xl text-gta-yellow tracking-wider">
          SAURABH RAWAT
        </div>

        <p className="text-base sm:text-xl text-white/90 font-medium max-w-xl mx-auto font-sans">
          THANKS FOR EXPLORING.
        </p>

        {/* Social Links in Crystal Glass */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-2xl ios-crystal-glass hover:border-gta-yellow text-white px-5 py-2.5 font-pricedown text-sm tracking-widest shadow-hard transition-all"
          >
            <GithubIcon className="h-4 w-4 text-gta-yellow" />
            <span>GITHUB</span>
          </a>

          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-2xl ios-crystal-glass hover:border-gta-cyan text-white px-5 py-2.5 font-pricedown text-sm tracking-widest shadow-hard transition-all"
          >
            <LinkedinIcon className="h-4 w-4 text-gta-cyan" />
            <span>LINKEDIN</span>
          </a>

          <a
            href={profileData.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-2xl ios-crystal-glass hover:border-gta-pink text-white px-5 py-2.5 font-pricedown text-sm tracking-widest shadow-hard transition-all"
          >
            <LeetCodeIcon className="h-4 w-4 text-gta-pink" />
            <span>LEETCODE</span>
          </a>

          <a
            href={profileData.socials.x}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-2xl ios-crystal-glass hover:border-white text-white px-5 py-2.5 font-pricedown text-sm tracking-widest shadow-hard transition-all"
          >
            <XIcon className="h-4 w-4" />
            <span>X (TWITTER)</span>
          </a>
        </div>

        {/* Replay Experience Button */}
        <div className="pt-8">
          <button
            onClick={handleReplayClick}
            className="inline-flex items-center gap-3 bg-gta-yellow hover:bg-white text-black px-10 py-4 rounded-2xl font-pricedown text-xl tracking-widest shadow-hard transition-all transform hover:-translate-y-1"
          >
            <RotateCcw className="h-6 w-6" />
            <span>REPLAY EXPERIENCE</span>
          </button>
        </div>

        <div className="pt-8 text-xs font-mono text-white/50">
          ENGINEERED BY SAURABH RAWAT // 2026
        </div>
      </div>
    </footer>
  );
}
