"use client";

import React, { useState } from "react";
import { Volume2, VolumeX, Menu, X } from "lucide-react";
import { sounds } from "@/components/sound/SoundEngine";

interface GlassNavbarProps {
  isVisible: boolean;
}

export function GlassNavbar({ isVisible }: GlassNavbarProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { label: "PLAYER", href: "#player" },
    { label: "PROJECTS", href: "#projects" },
    { label: "SKILLS", href: "#skills" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "RESEARCH", href: "#research" },
    { label: "ACHIEVEMENTS", href: "#achievements" },
    { label: "STATS", href: "#stats" },
    { label: "FAQ", href: "#faq" },
    { label: "CONTACT", href: "#contact" },
  ];

  const toggleAudio = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    sounds.playKeyClick();
    setIsMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-700 max-w-7xl mx-auto ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-12 pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-3 rounded-2xl bg-black/45 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.15)] relative overflow-hidden">
        {/* Subtle internal gradient highlight */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#c66bff]/10 via-[#ff5fa8]/10 to-[#ff9840]/10 pointer-events-none" />

        {/* Brand Name in Pricedown */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="relative z-10 font-pricedown text-2xl sm:text-3xl text-white hover:text-gta-pink transition-colors tracking-wider"
        >
          SAURABH RAWAT
        </a>

        {/* Desktop Game Menu Links with Expanding Hover Pill */}
        <nav className="hidden xl:flex items-center gap-1.5 relative z-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="relative px-3 py-1 rounded-lg font-pricedown text-sm tracking-wider text-white/80 transition-all duration-200 group overflow-hidden"
            >
              {/* Expanding White Highlight on Hover */}
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out -z-10" />
              <span className="relative z-10 transition-colors duration-200 group-hover:text-black font-bold">
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        {/* Audio Toggle & Mobile Menu */}
        <div className="flex items-center gap-3 relative z-10">
          <button
            onClick={toggleAudio}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-pricedown text-xs tracking-wider border transition-all ${
              isMuted
                ? "border-white/20 bg-black/40 text-white/70 hover:border-gta-pink hover:text-gta-pink"
                : "border-gta-cyan bg-gta-cyan/20 text-gta-cyan shadow-gta-cyan"
            }`}
          >
            {isMuted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5 animate-pulse" />}
            <span className="hidden sm:inline">{isMuted ? "MUTE" : "AUDIO ON"}</span>
          </button>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="xl:hidden p-2 text-white border border-white/20 rounded-xl bg-black/40"
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="xl:hidden mt-2 p-4 rounded-2xl bg-black/90 backdrop-blur-2xl border border-white/20 flex flex-col gap-2 shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-pricedown text-base tracking-wider text-white/90 hover:text-gta-yellow px-3 py-2 rounded-lg hover:bg-white/10"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
