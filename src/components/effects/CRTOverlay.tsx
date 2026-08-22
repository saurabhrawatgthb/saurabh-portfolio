"use client";

import React, { useState } from "react";

export function CRTOverlay() {
  const [crtEnabled, setCrtEnabled] = useState(true);

  if (!crtEnabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Scanline pattern */}
      <div className="absolute inset-0 scanlines-overlay opacity-60" />
      
      {/* Subtle CRT corner curvature and vignette */}
      <div className="absolute inset-0 crt-vignette" />
      
      {/* Sweeping scanline bar */}
      <div className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-term-green/5 to-transparent animate-sweep opacity-40" />

      {/* Screen edge bezel lines */}
      <div className="absolute inset-0 border border-term-green/10 shadow-crt-screen" />
    </div>
  );
}
