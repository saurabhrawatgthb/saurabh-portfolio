"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function PersistentBackground() {
  const bgRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const img = imgRef.current;
    if (!img) return;

    // Continuous subtle cinematic zoom and parallax across the entire page scroll
    gsap.to(img, {
      scale: 1.12,
      yPercent: 6,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
      },
    });
  }, []);

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Responsive Artwork: Landscape on Desktop, Portrait on Phone */}
      <picture className="w-full h-full block">
        <source
          media="(max-width: 768px)"
          srcSet="https://praxis-25.vercel.app/images/Jason_and_Lucia_01_phone.jpg"
        />
        <img
          ref={imgRef}
          src="https://praxis-25.vercel.app/images/Jason_and_Lucia_01_landscape.jpg"
          alt="Saurabh Rawat Persistent Cinematic World"
          className="w-full h-full object-cover object-center filter contrast-125 saturate-135 brightness-75 will-change-transform"
        />
      </picture>

      {/* Atmospheric Vignette & Mood Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#c66bff]/10 via-[#ff5fa8]/10 to-[#ff9840]/10 mix-blend-overlay" />
      <div className="absolute inset-0 bg-halftone opacity-20" />
    </div>
  );
}
