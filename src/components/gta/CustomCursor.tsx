"use client";

import React, { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest("a, button, [role='button'], input, textarea, .interactive-hover");
        setIsHovered(!!interactive);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    let animId: number;
    const render = () => {
      // Smooth fluid interpolation (lerp)
      cursorX += (mouseX - cursorX) * 0.18;
      cursorY += (mouseY - cursorY) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Outer Follower Ring */}
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border border-white/60 transition-[width,height,border-color,background-color] duration-200 ease-out ${
          isHovered
            ? "h-12 w-12 border-gta-pink bg-gta-pink/15 backdrop-blur-[1px]"
            : "h-7 w-7 border-white/40 bg-transparent"
        }`}
        style={{ willChange: "transform" }}
      />
      {/* Center Dot */}
      <div
        ref={dotRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9999] h-1.5 w-1.5 rounded-full transition-colors duration-150 ${
          isHovered ? "bg-gta-yellow" : "bg-white"
        }`}
        style={{ willChange: "transform" }}
      />
    </>
  );
}
