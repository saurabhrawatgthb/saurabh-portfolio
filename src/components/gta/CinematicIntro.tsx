"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface CinematicIntroProps {
  onRevealComplete?: () => void;
}

export function CinematicIntro({ onRevealComplete }: CinematicIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const pin = pinRef.current;
    const text = textRef.current;
    const indicator = scrollIndicatorRef.current;
    const bgImage = bgImageRef.current;
    const overlay = overlayRef.current;

    if (!container || !pin || !text) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIsUnlocked(true);
      onRevealComplete?.();
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
          pin: pin,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;

            // Fade out scroll indicator early
            if (indicator) {
              gsap.to(indicator, {
                opacity: Math.max(0, 1 - progress * 4),
                duration: 0.1,
                overwrite: "auto",
              });
            }

            // Reveal background image gently through the mask
            if (bgImage) {
              gsap.to(bgImage, {
                opacity: Math.min(1, progress * 1.6),
                scale: 1 + progress * 0.12,
                duration: 0.1,
                overwrite: "auto",
              });
            }

            // When progress reaches 98%+, unlock portfolio
            if (progress >= 0.96 && !isUnlocked) {
              setIsUnlocked(true);
              onRevealComplete?.();
            }
          },
        },
      });

      // Dramatic exponential scaling of the SVG masked text
      // Scaling from 1 up to 45+ so the letters encompass the entire screen
      tl.fromTo(
        text,
        {
          scale: 1,
          transformOrigin: "50% 50%",
        },
        {
          scale: 42,
          transformOrigin: "50% 50%",
          ease: "power2.inOut",
          duration: 1,
        }
      );

      // Fade out the overlay at the very end
      if (overlay) {
        tl.to(
          overlay,
          {
            opacity: 0,
            duration: 0.15,
            ease: "power1.out",
          },
          0.88
        );
      }
    }, container);

    return () => {
      ctx.revert();
    };
  }, [onRevealComplete, isUnlocked]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[260vh] bg-black z-40"
      id="intro-container"
    >
      {/* Pinned Viewport Frame */}
      <div
        ref={pinRef}
        className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center select-none"
      >
        {/* Hidden Cinematic Artwork behind the mask */}
        <div
          ref={bgImageRef}
          className="absolute inset-0 w-full h-full opacity-0 pointer-events-none transition-transform will-change-transform"
        >
          {/* Desktop & Mobile Responsive Artwork */}
          <picture className="w-full h-full block">
            <source
              media="(max-width: 768px)"
              srcSet="https://praxis-25.vercel.app/images/Jason_and_Lucia_01_phone.jpg"
            />
            <img
              src="https://praxis-25.vercel.app/images/Jason_and_Lucia_01_landscape.jpg"
              alt="Saurabh Rawat Cinematic Background"
              className="w-full h-full object-cover object-center filter contrast-125 saturate-120"
            />
          </picture>

          {/* Vignette and high-contrast color grading */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
          <div className="absolute inset-0 bg-gta-hotPink/10 mix-blend-overlay" />
        </div>

        {/* Fullscreen SVG with Masked Cutout */}
        <div
          ref={overlayRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Mask: White shows overlay, Black text cuts transparent hole */}
              <mask id="saurabh-title-mask">
                <rect width="1920" height="1080" fill="white" />
                <text
                  ref={textRef}
                  x="960"
                  y="570"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="black"
                  className="font-pricedown uppercase"
                  style={{
                    fontFamily: "Pricedown, Impact, sans-serif",
                    fontSize: "135px",
                    fontWeight: 900,
                    letterSpacing: "4px",
                  }}
                >
                  SAURABH RAWAT
                </text>
              </mask>
            </defs>

            {/* Black overlay cutout by the mask */}
            <rect
              width="1920"
              height="1080"
              fill="#000000"
              mask="url(#saurabh-title-mask)"
            />
          </svg>
        </div>

        {/* Subtle Pulsing Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 pointer-events-none animate-scroll-pulse"
        >
          <span className="font-pricedown text-xs md:text-sm tracking-[0.25em] text-white uppercase text-center">
            SCROLL TO EXPLORE
          </span>
          <span className="text-white text-base md:text-lg">↓</span>
        </div>
      </div>
    </div>
  );
}
