"use client";

import React, { useState } from "react";
import { CreditCard, Cpu, Wifi, ShieldCheck, Lock, RefreshCw } from "lucide-react";
import { sounds } from "@/components/sound/SoundEngine";

type CardMode = "IDENTITY" | "ACCESS" | "PAYMENT" | "IOT";

export function UniCardSimulator() {
  const [activeMode, setActiveMode] = useState<CardMode>("IDENTITY");
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [lastAuthToken, setLastAuthToken] = useState("0x9F3E_88A2_C10B");
  const [handshakeStatus, setHandshakeStatus] = useState<"IDLE" | "SUCCESS" | "VERIFYING">("IDLE");

  const handleModeChange = (mode: CardMode) => {
    sounds.playKeyClick();
    setActiveMode(mode);
    setHandshakeStatus("IDLE");
  };

  const triggerNfcTap = () => {
    sounds.playRadarPing();
    setIsTransmitting(true);
    setHandshakeStatus("VERIFYING");

    setTimeout(() => {
      sounds.playAccessGranted();
      const randomHex = "0x" + Array.from({ length: 3 }, () => Math.floor(Math.random() * 65535).toString(16).toUpperCase().padStart(4, "0")).join("_");
      setLastAuthToken(randomHex);
      setHandshakeStatus("SUCCESS");
      setIsTransmitting(false);
    }, 900);
  };

  return (
    <div className="border border-term-green/40 bg-crt-dark p-4 font-mono text-xs shadow-term-green">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-term-green/30 pb-3">
        <div className="flex items-center gap-2">
          <CreditCard className="h-4 w-4 text-term-amber" />
          <span className="text-term-amber font-bold glow-amber">
            UNICARD // MULTI-APPLET SECURE HARDWARE
          </span>
        </div>
        <span className="text-[10px] text-archive-muted">SECURE ELEMENT: ATECC608A PROTOCOL</span>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-12 items-center">
        {/* Left: Interactive Hardware Card Graphic */}
        <div className="md:col-span-6 flex justify-center">
          <div className="relative h-48 w-80 rounded-xl border-2 border-term-green/60 bg-gradient-to-br from-crt-surface via-crt-black to-crt-dark p-4 shadow-2xl transition-transform duration-300 hover:scale-105">
            {/* Background PCB Antenna Traces */}
            <div className="absolute inset-0 rounded-xl bg-grid-pattern opacity-20 pointer-events-none" />
            
            {/* Card Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-term-green font-bold text-[11px] glow-green-sm">
                <Wifi className="h-3.5 w-3.5 rotate-90" />
                <span>UNICARD OS</span>
              </div>
              <span className="rounded border border-term-amber/40 bg-term-amber/10 px-1.5 py-0.5 text-[9px] text-term-amber font-semibold">
                MODE: {activeMode}
              </span>
            </div>

            {/* Smart Microcontroller Chip */}
            <div className="mt-4 flex items-center gap-3">
              <div className="relative h-10 w-12 rounded border border-term-amber/80 bg-gradient-to-tr from-amber-700/40 to-amber-400/40 p-1 flex items-center justify-center shadow-sm">
                <Cpu className="h-6 w-6 text-term-amber" />
                <div className="absolute inset-x-1 top-1/2 h-[1px] bg-term-amber/40" />
                <div className="absolute inset-y-1 left-1/2 w-[1px] bg-term-amber/40" />
              </div>
              <div className="text-[10px] text-archive-muted">
                <div>CHIP ID: SR-NFC-99</div>
                <div className="text-term-greenBright font-semibold text-[9px]">ENCRYPTED EEPROM</div>
              </div>
            </div>

            {/* Embossed Card Holder Credentials */}
            <div className="mt-6 flex items-end justify-between">
              <div>
                <div className="text-[8px] text-archive-darkMuted uppercase">CARD HOLDER</div>
                <div className="text-[11px] font-bold text-archive-paper tracking-wider">SAURABH RAWAT</div>
              </div>
              <div className="text-right">
                <div className="text-[8px] text-archive-darkMuted uppercase">NODE CLEARANCE</div>
                <div className="text-[10px] font-bold text-term-green">ROOT // LEVEL 5</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Mode Controller & Terminal Handshake Simulation */}
        <div className="md:col-span-6 space-y-4">
          <div>
            <span className="text-[10px] text-archive-muted">SELECT ACTIVE APPLET SCHEMA:</span>
            <div className="mt-1.5 grid grid-cols-2 gap-2">
              {(["IDENTITY", "ACCESS", "PAYMENT", "IOT"] as CardMode[]).map((mode) => (
                <button
                  key={mode}
                  onClick={() => handleModeChange(mode)}
                  data-cursor={`MODE_${mode}`}
                  className={`border px-2 py-1.5 text-left text-[10px] font-bold transition-colors ${
                    activeMode === mode
                      ? "border-term-amber bg-term-amber/20 text-term-amber shadow-term-amber"
                      : "border-term-green/30 bg-crt-surface text-archive-muted hover:border-term-green/60 hover:text-term-green"
                  }`}
                >
                  [{mode}]
                </button>
              ))}
            </div>
          </div>

          {/* NFC Tap Terminal Action */}
          <div className="border border-term-green/20 bg-crt-surface p-3 space-y-2">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-archive-muted">TERMINAL TELEMETRY:</span>
              <span className={handshakeStatus === "SUCCESS" ? "text-term-green font-bold" : "text-archive-muted"}>
                {handshakeStatus === "SUCCESS" ? "AUTH GRANTED (180ms)" : handshakeStatus === "VERIFYING" ? "COMPUTING TOKEN..." : "READY"}
              </span>
            </div>

            <div className="flex justify-between items-center bg-crt-black px-2 py-1 border border-term-green/20 text-[10px]">
              <span className="text-archive-muted">ROLLING CRYPTOGRAM:</span>
              <span className="font-mono text-term-greenBright font-bold">{lastAuthToken}</span>
            </div>

            <button
              onClick={triggerNfcTap}
              disabled={isTransmitting}
              data-cursor="NFC_TAP"
              className="w-full flex items-center justify-center gap-2 border border-term-green bg-term-green/20 py-2 text-center font-bold text-term-greenBright hover:bg-term-green hover:text-crt-black transition-colors disabled:opacity-50"
            >
              {isTransmitting ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Lock className="h-3.5 w-3.5" />}
              <span>{isTransmitting ? "TRANSMITTING NFC CHALLENGE..." : "SIMULATE CONTACTLESS NFC TAP"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
