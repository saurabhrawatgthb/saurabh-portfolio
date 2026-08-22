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
  const overlayRef = useRef<HTMLDivElement>(null);

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const pin = pinRef.current;
    const text = textRef.current;
    const indicator = scrollIndicatorRef.current;
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

            // Smooth reveal trigger for navigation & main portfolio
            if (progress >= 0.92) {
              if (!isUnlocked) {
                setIsUnlocked(true);
                onRevealComplete?.();
              }
            } else {
              if (isUnlocked) {
                setIsUnlocked(false);
              }
            }
          },
        },
      });

      // Dramatic exponential scaling of the bold SVG masked text cutout
      tl.fromTo(
        text,
        {
          scale: 1,
          transformOrigin: "50% 50%",
        },
        {
          scale: 45,
          transformOrigin: "50% 50%",
          ease: "power2.inOut",
          duration: 1,
        }
      );

      // Fade out the black overlay cleanly at the very end
      if (overlay) {
        tl.to(
          overlay,
          {
            opacity: 0,
            duration: 0.18,
            ease: "power1.out",
          },
          0.82
        );
      }
    }, container);

    return () => {
      ctx.revert();
    };
  }, [onRevealComplete, isUnlocked, isMobile]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[250vh] bg-transparent z-40"
      id="intro-container"
    >
      {/* Pinned Viewport Frame */}
      <div
        ref={pinRef}
        className="relative w-full h-screen overflow-hidden bg-transparent flex items-center justify-center select-none"
      >
        {/* Fullscreen SVG with Bold Masked Cutout (No white border) */}
        <div
          ref={overlayRef}
          className="absolute inset-0 w-full h-full pointer-events-none will-change-opacity"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Mask: White preserves solid black overlay, Ultra-Bold Black text cuts transparent aperture */}
              <mask id="saurabh-title-mask">
                <rect width="1920" height="1080" fill="white" />
                <text
                  ref={textRef}
                  x="960"
                  y={isMobile ? "480" : "550"}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="black"
                  stroke="black"
                  strokeWidth={isMobile ? "12" : "10"}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  className="font-pricedown uppercase"
                  style={{
                    fontFamily: "Pricedown, 'Bebas Neue', Impact, 'Arial Black', sans-serif",
                    fontSize: isMobile ? "160px" : "130px",
                    fontWeight: 900,
                    letterSpacing: isMobile ? "2px" : "4px",
                    paintOrder: "stroke fill",
                  }}
                >
                  {isMobile ? (
                    <>
                      <tspan x="960" dy="-0.55em">
                        SAURABH
                      </tspan>
                      <tspan x="960" dy="1.15em">
                        RAWAT
                      </tspan>
                    </>
                  ) : (
                    "SAURABH RAWAT"
                  )}
                </text>
              </mask>
            </defs>

            {/* Black overlay cutout by the mask directly looking through to PersistentBackground */}
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
