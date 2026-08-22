"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Menu, X, ShieldAlert } from "lucide-react";
import { sounds } from "@/components/sound/SoundEngine";

interface GameNavProps {
  isVisible: boolean;
}

export function GameNav({ isVisible }: GameNavProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("player");

  const navLinks = [
    { label: "PLAYER", href: "#player" },
    { label: "MISSIONS", href: "#missions" },
    { label: "ARSENAL", href: "#arsenal" },
    { label: "LOGS", href: "#experience" },
    { label: "RESEARCH", href: "#research" },
    { label: "EVIDENCE", href: "#achievements" },
    { label: "SIGNAL", href: "#contact" },
  ];

  const toggleSound = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    sounds.playKeyClick();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      } bg-black/85 backdrop-blur-md border-b border-white/10 px-4 md:px-8 py-3`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Title */}
        <a
          href="#top"
          onClick={(e) => scrollToSection(e, "#top")}
          className="group flex items-center gap-2"
        >
          <span className="font-pricedown text-2xl md:text-3xl text-white group-hover:text-gta-pink transition-colors tracking-wider">
            SAURABH RAWAT
          </span>
          <span className="bg-gta-hotPink text-white font-pricedown text-[10px] px-1.5 py-0.5 rounded-[2px] tracking-widest hidden sm:inline">
            ONLINE
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="font-pricedown text-sm tracking-widest text-white/80 hover:text-gta-yellow transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gta-yellow hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Audio Toggle & Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSound}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-pricedown tracking-widest border transition-all ${
              isMuted
                ? "border-white/30 text-white/60 hover:border-gta-pink hover:text-gta-pink"
                : "border-gta-cyan bg-gta-cyan/15 text-gta-cyan shadow-gta-cyan"
            }`}
          >
            {isMuted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5 animate-pulse" />}
            <span>{isMuted ? "MUTE" : "AUDIO ON"}</span>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 text-white hover:text-gta-pink border border-white/20"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-3 pb-2 bg-black/95">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="font-pricedown text-base tracking-widest text-white/90 hover:text-gta-yellow px-2 py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
