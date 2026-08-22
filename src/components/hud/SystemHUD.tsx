"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Terminal as TerminalIcon, ShieldAlert, Cpu, Activity } from "lucide-react";
import { sounds } from "@/components/sound/SoundEngine";
import { TerminalModal } from "./TerminalModal";

interface SystemHUDProps {
  currentChapter: number;
  totalChapters: number;
  chapterTitle: string;
  archiveProgress: number;
}

export function SystemHUD({
  currentChapter,
  totalChapters,
  chapterTitle,
  archiveProgress,
}: SystemHUDProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [systemTime, setSystemTime] = useState("");
  const [konamiUnlocked, setKonamiUnlocked] = useState(false);
  const [cheatToast, setCheatToast] = useState(false);

  // Update real-time system clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setSystemTime(
        now.toTimeString().split(" ")[0] + "." + Math.floor(now.getMilliseconds() / 100)
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 100);
    return () => clearInterval(interval);
  }, []);

  // Konami code detection
  useEffect(() => {
    const sequence = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
    ];
    let index = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === sequence[index]) {
        index++;
        if (index === sequence.length) {
          setKonamiUnlocked(true);
          setCheatToast(true);
          sounds.playAccessGranted();
          setTimeout(() => setCheatToast(false), 5000);
          index = 0;
        }
      } else {
        index = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleSound = () => {
    const newState = sounds.toggleMute();
    setIsMuted(newState);
  };

  return (
    <>
      {/* Top Persistent HUD Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between border-b border-term-green/20 bg-crt-darkest/90 px-3 py-1.5 backdrop-blur-md font-mono text-[11px]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-term-green font-bold glow-green-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-term-green animate-pulse" />
            <span>[SR-001]</span>
          </div>
          <span className="hidden sm:inline text-archive-darkMuted">|</span>
          <div className="hidden sm:flex items-center gap-1 text-archive-text">
            <span className="text-archive-muted">CH_{String(currentChapter).padStart(2, "0")}:</span>
            <span className="text-term-amber uppercase tracking-wider font-semibold">{chapterTitle}</span>
          </div>
        </div>

        {/* System telemetry & Controls */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden md:flex items-center gap-1.5 text-archive-muted text-[10px]">
            <Activity className="h-3 w-3 text-term-green" />
            <span>SYS_TIME:</span>
            <span className="text-archive-paper font-mono">{systemTime}</span>
          </div>

          <div className="hidden sm:flex items-center gap-1 text-[10px] text-term-greenBright font-semibold">
            <Cpu className="h-3 w-3" />
            <span>SYSTEM: ONLINE</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            data-cursor="TOGGLE_AUDIO"
            className={`flex items-center gap-1 border px-2 py-0.5 text-[10px] transition-colors ${
              isMuted
                ? "border-archive-darkMuted/60 text-archive-muted hover:border-term-amber hover:text-term-amber"
                : "border-term-green/60 bg-term-green/10 text-term-green glow-green-sm"
            }`}
            title="Toggle Sound Effects"
          >
            {isMuted ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3" />}
            <span>{isMuted ? "SOUND OFF" : "SOUND ON"}</span>
          </button>

          {/* Terminal Launcher */}
          <button
            onClick={() => setIsTerminalOpen(true)}
            data-cursor="OPEN_CLI"
            className="flex items-center gap-1 border border-term-green/60 bg-term-green/10 px-2 py-0.5 text-[10px] text-term-greenBright hover:bg-term-green hover:text-crt-black transition-colors"
          >
            <TerminalIcon className="h-3 w-3" />
            <span className="hidden xs:inline">&gt;_ CLI</span>
          </button>
        </div>
      </header>

      {/* Bottom Persistent HUD Bar */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between border-t border-term-green/20 bg-crt-darkest/90 px-3 py-1 backdrop-blur-md font-mono text-[10px]">
        <div className="flex items-center gap-3">
          <span className="text-archive-muted">
            CHAPTER <strong className="text-term-greenBright">{String(currentChapter).padStart(2, "0")}</strong> / {String(totalChapters).padStart(2, "0")}
          </span>
          <span className="hidden md:inline text-archive-darkMuted">|</span>
          <span className="hidden md:inline text-archive-muted">
            NODE: <span className="text-term-amber font-mono">DEHRADUN_IN</span>
          </span>
        </div>

        {/* Archive percentage progress */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-archive-muted">ARCHIVE PROGRESS:</span>
            <div className="h-1.5 w-20 overflow-hidden border border-term-green/30 bg-crt-dark">
              <div
                className="h-full bg-term-green transition-all duration-200"
                style={{ width: `${archiveProgress}%` }}
              />
            </div>
          </div>
          <span className="text-term-green font-bold glow-green-sm">{archiveProgress}%</span>
        </div>
      </footer>

      {/* Easter Egg Konami Toast */}
      {cheatToast && (
        <div className="fixed top-12 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 border border-term-amber bg-crt-black/95 px-4 py-2 text-term-amber shadow-term-amber font-mono text-xs animate-bounce">
          <ShieldAlert className="h-4 w-4 text-term-amber" />
          <span>[CHEAT CODE DETECTED]: ROOT ACCESS GRANTED — ALL CLASSIFIED LOGS UNLOCKED.</span>
        </div>
      )}

      {/* Interactive CLI Console Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onSoundToggle={toggleSound}
      />
    </>
  );
}
