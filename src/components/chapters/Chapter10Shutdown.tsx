"use client";

import React from "react";
import { Power, RotateCcw, CheckCircle2, Shield, Heart } from "lucide-react";
import { sounds } from "@/components/sound/SoundEngine";

interface Chapter10ShutdownProps {
  onRestart: () => void;
}

export function Chapter10Shutdown({ onRestart }: Chapter10ShutdownProps) {
  const handleRestartClick = () => {
    sounds.playPowerOn();
    onRestart();
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center bg-crt-darkest px-4 py-20 text-center font-mono">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl border-2 border-term-green/50 bg-crt-black p-8 shadow-term-green">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-term-green/30 pb-3 text-xs">
          <span className="text-term-green font-bold glow-green-sm">
            10 // ARCHIVE_SESSION_SUMMARY.log
          </span>
          <span className="text-[10px] text-archive-muted">STANDBY_MODE</span>
        </div>

        {/* Telemetry Report Summary */}
        <div className="my-8 space-y-4 text-left text-xs">
          <div className="text-sm font-extrabold text-term-greenBright glow-green-sm tracking-wider uppercase">
            &gt; ARCHIVE SESSION TELEMETRY: COMPLETE
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-center">
            <div className="border border-term-green/20 bg-crt-surface p-2.5">
              <div className="text-lg font-bold text-term-green">07</div>
              <div className="text-[8px] text-archive-muted uppercase">FILES ACCESSED</div>
            </div>

            <div className="border border-term-green/20 bg-crt-surface p-2.5">
              <div className="text-lg font-bold text-term-amber">05</div>
              <div className="text-[8px] text-archive-muted uppercase">SYSTEMS TESTED</div>
            </div>

            <div className="border border-term-green/20 bg-crt-surface p-2.5">
              <div className="text-lg font-bold text-term-cyan">01</div>
              <div className="text-[8px] text-archive-muted uppercase">RESEARCH PAPERS</div>
            </div>

            <div className="border border-term-green/20 bg-crt-surface p-2.5">
              <div className="text-lg font-bold text-term-greenBright">100%</div>
              <div className="text-[8px] text-archive-muted uppercase">INTEGRITY PASS</div>
            </div>
          </div>

          <div className="border-l-2 border-term-green bg-crt-surface p-4 text-archive-text mt-4">
            <div className="text-xs font-bold text-term-green">SAURABH RAWAT</div>
            <div className="text-[11px] text-archive-muted font-sans mt-0.5">
              &ldquo;Engineering robust architectures, building intelligent models, and turning software ideas into deployed reality.&rdquo;
            </div>
          </div>
        </div>

        {/* Blinking Standby Terminal Prompt */}
        <div className="my-6 text-xs text-term-amber font-mono">
          <span>SR_OS_STANDBY &gt; SYSTEM AWAITING NEXT DIRECTIVE</span>
          <span className="animate-blink font-bold ml-1 text-term-greenBright">_</span>
        </div>

        {/* Restart Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 border-t border-term-green/30 pt-6">
          <button
            onClick={handleRestartClick}
            data-cursor="REBOOT"
            className="flex items-center gap-2 border-2 border-term-green bg-term-green/20 px-6 py-2.5 text-xs font-bold text-term-greenBright hover:bg-term-green hover:text-crt-black transition-all"
          >
            <RotateCcw className="h-4 w-4" />
            <span>[ RESTART ARCHIVE SESSION ]</span>
          </button>
        </div>

        {/* Footer info */}
        <div className="mt-8 text-[10px] text-archive-muted flex items-center justify-center gap-1">
          <span>ARCHIVED BY SAURABH RAWAT // 2026</span>
        </div>
      </div>
    </section>
  );
}
