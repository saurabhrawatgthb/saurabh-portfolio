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
  const strokeTextRef = useRef<SVGTextElement>(null);
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
    const strokeText = strokeTextRef.current;
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

      // Dramatic exponential scaling of both the SVG masked text cutout and the crisp stroke outline
      const scaleTargets = strokeText ? [text, strokeText] : text;

      tl.fromTo(
        scaleTargets,
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

      // Smoothly fade out the crisp stroke border as letters become large portals
      if (strokeText) {
        tl.to(
          strokeText,
          {
            opacity: 0,
            duration: 0.35,
            ease: "power1.out",
          },
          0.32
        );
      }

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
        {/* Fullscreen SVG with Masked Cutout and Refined Bright Outline */}
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
              {/* Mask: White preserves solid black overlay, Black text cuts transparent aperture */}
              <mask id="saurabh-title-mask">
                <rect width="1920" height="1080" fill="white" />
                <text
                  ref={textRef}
                  x="960"
                  y={isMobile ? "480" : "550"}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="black"
                  className="font-pricedown uppercase"
                  style={{
                    fontFamily: "Pricedown, Impact, sans-serif",
                    fontSize: isMobile ? "145px" : "110px",
                    fontWeight: 900,
                    letterSpacing: isMobile ? "2px" : "4px",
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

              {/* Refined Sharp Glowing Border Filter */}
              <filter id="bright-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#ffffff" floodOpacity="0.85" />
              </filter>
            </defs>

            {/* Black overlay cutout by the mask directly looking through to PersistentBackground */}
            <rect
              width="1920"
              height="1080"
              fill="#000000"
              mask="url(#saurabh-title-mask)"
            />

            {/* Crisp, Thin, Sleek Bright Border Outline around SAURABH RAWAT */}
            <text
              ref={strokeTextRef}
              x="960"
              y={isMobile ? "480" : "550"}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="none"
              stroke="#ffffff"
              strokeWidth={isMobile ? "2.5" : "2"}
              strokeLinejoin="round"
              strokeLinecap="round"
              filter="url(#bright-glow)"
              className="font-pricedown uppercase pointer-events-none"
              style={{
                fontFamily: "Pricedown, Impact, sans-serif",
                fontSize: isMobile ? "145px" : "110px",
                fontWeight: 900,
                letterSpacing: isMobile ? "2px" : "4px",
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
