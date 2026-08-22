"use client";

import React, { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check for touch device
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [data-cursor], [role='button'], input, textarea");
      if (interactive) {
        setIsHovered(true);
        const customText = interactive.getAttribute("data-cursor");
        if (customText) {
          setCursorText(customText);
        } else if (interactive.tagName === "A" && interactive.getAttribute("target") === "_blank") {
          setCursorText("EXT_SIGNAL ↗");
        } else if (interactive.tagName === "BUTTON" || interactive.getAttribute("role") === "button") {
          setCursorText("EXECUTE");
        } else {
          setCursorText("INTERACT");
        }
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999] transition-transform duration-75 ease-out"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Reticle crosshair */}
      <div
        className={`relative flex items-center justify-center transition-all duration-150 ${
          isHovered ? "h-9 w-9" : "h-5 w-5"
        }`}
      >
        {/* Outer reticle brackets */}
        <div
          className={`absolute inset-0 border transition-all ${
            isHovered
              ? "border-term-amber bg-term-amber/10 scale-100"
              : "border-term-green/70 scale-75"
          }`}
        />
        
        {/* Center dot */}
        <div
          className={`h-1 w-1 rounded-full ${
            isHovered ? "bg-term-amber shadow-term-amber" : "bg-term-green shadow-term-green"
          }`}
        />

        {/* Dynamic HUD label tag */}
        {cursorText && (
          <div className="absolute left-8 top-1/2 -translate-y-1/2 whitespace-nowrap bg-crt-darkest/90 border border-term-amber/80 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-term-amber shadow-sm">
            [{cursorText}]
          </div>
        )}
      </div>
    </div>
  );
}
