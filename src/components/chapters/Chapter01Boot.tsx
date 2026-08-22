"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Shield, ArrowRight, CornerDownLeft, Sparkles } from "lucide-react";
import { sounds } from "@/components/sound/SoundEngine";

interface Chapter01BootProps {
  onEnter: () => void;
  isUnlocked: boolean;
}

export function Chapter01Boot({ onEnter, isUnlocked }: Chapter01BootProps) {
  const [bootStep, setBootStep] = useState(0);
  const [dots, setDots] = useState("");

  const bootLogs = [
    "BIOS RUNTIME v4.08 [REL_2026] // ARCHIVE KERNEL INITIALIZED",
    "CHECKING MEMORY INTEGRITY... 0x7FFF_FFFF_FFFF [OK]",
    "MOUNTING ENCRYPTED VOLUME /dev/saurabh_rawat_records",
    "LOADING PERSONAL IDENTITY FILE... [OK]",
    "LOADING PROJECT DATABASE & CV SIMULATORS... [OK]",
    "LOADING RESEARCH LOGS & EXPERIENCE DATA... [OK]",
    "SYSTEM STATUS: ALL ARCHIVES DECRYPTED & ONLINE.",
  ];

  useEffect(() => {
    if (isUnlocked) return;

    // Power on sound
    sounds.playPowerOn();

    const interval = setInterval(() => {
      setBootStep((prev) => {
        if (prev < bootLogs.length) {
          sounds.playKeyClick();
          return prev + 1;
        }
        clearInterval(interval);
        sounds.playAccessGranted();
        return prev;
      });
    }, 450);

    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 300);

    return () => {
      clearInterval(interval);
      clearInterval(dotInterval);
    };
  }, [isUnlocked, bootLogs.length]);

  const handleEnterClick = () => {
    sounds.playAccessGranted();
    onEnter();
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center bg-crt-darkest p-4 text-center font-mono">
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Main Terminal Frame */}
      <div className="relative z-10 w-full max-w-2xl border-2 border-term-green/60 bg-crt-black p-6 shadow-term-green">
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between border-b border-term-green/30 pb-3 text-left text-xs">
          <div className="flex items-center gap-2 text-term-green font-bold glow-green-sm">
            <Terminal className="h-4 w-4" />
            <span>SAURABH_RAWAT.OS // SYSTEM BOOT</span>
          </div>
          <span className="text-[10px] text-archive-muted">SECURE ARCHIVE NODE SR-001</span>
        </div>

        {/* Boot sequence logs stream */}
        <div className="my-6 min-h-[180px] space-y-2 text-left text-xs">
          <div className="text-term-amber font-bold glow-amber">
            &gt; SYSTEM INITIALIZATION SEQUENCE IN PROGRESS{dots}
          </div>

          {bootLogs.slice(0, bootStep).map((log, index) => (
            <div
              key={index}
              className={`leading-relaxed ${
                index === bootLogs.length - 1
                  ? "text-term-greenBright font-bold glow-green-sm"
                  : "text-archive-text"
              }`}
            >
              <span className="text-term-green/60 mr-2">&gt;</span>
              {log}
            </div>
          ))}
        </div>

        {/* Enter Archive Trigger */}
        {bootStep >= bootLogs.length ? (
          <div className="mt-6 space-y-4 border-t border-term-green/30 pt-6 animate-pulse">
            <div className="text-sm font-bold text-term-amber glow-amber uppercase tracking-widest">
              ACCESS REQUIRED // ROOT AUTHORIZATION CONFIRMED
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleEnterClick}
                data-cursor="ENTER_ARCHIVE"
                className="group relative flex items-center gap-3 border-2 border-term-greenBright bg-term-green/20 px-8 py-3.5 font-bold text-term-greenBright shadow-term-green transition-all hover:bg-term-green hover:text-crt-black hover:scale-105"
              >
                <Shield className="h-5 w-5 text-term-greenBright group-hover:text-crt-black" />
                <span className="text-sm uppercase tracking-wider">[ ENTER ARCHIVE ]</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <p className="text-[10px] text-archive-muted">
              PRESS <strong className="text-archive-paper">ENTER</strong> OR CLICK TO ACCESS CLASSIFIED FILE REPOSITORIES
            </p>
          </div>
        ) : (
          <div className="mt-4 text-[11px] text-archive-muted">
            INITIALIZING CORE SENSORS & ARCHIVE REPOSITORIES...
          </div>
        )}
      </div>
    </section>
  );
}
