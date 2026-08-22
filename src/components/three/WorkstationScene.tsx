"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { sounds } from "@/components/sound/SoundEngine";
import { ChevronDown, Sparkles, Terminal, Volume2, VolumeX } from "lucide-react";

interface WorkstationSceneProps {
  onEnterArchive: () => void;
}

export function WorkstationScene({ onEnterArchive }: WorkstationSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isEntering, setIsEntering] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Terminal screen state inside 3D CRT texture
  const screenCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const screenTextureRef = useRef<THREE.CanvasTexture | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // 1. Offscreen 2D Canvas for CRT Screen Texture
    const sCanvas = document.createElement("canvas");
    sCanvas.width = 1024;
    sCanvas.height = 768;
    screenCanvasRef.current = sCanvas;

    const sCtx = sCanvas.getContext("2d");
    const screenTexture = new THREE.CanvasTexture(sCanvas);
    screenTexture.minFilter = THREE.LinearFilter;
    screenTexture.magFilter = THREE.LinearFilter;
    screenTextureRef.current = screenTexture;

    // Function to draw dynamic terminal onto CRT screen texture
    let blink = 0;
    const renderScreenText = (progress: number) => {
      if (!sCtx) return;
      blink = (blink + 1) % 60;
      const isCursorOn = blink < 30;

      // Dark phosphor background
      sCtx.fillStyle = "#060907";
      sCtx.fillRect(0, 0, sCanvas.width, sCanvas.height);

      // CRT Scanline pattern
      sCtx.fillStyle = "rgba(0, 0, 0, 0.25)";
      for (let i = 0; i < sCanvas.height; i += 4) {
        sCtx.fillRect(0, i, sCanvas.width, 2);
      }

      // Phosphor text glow
      sCtx.font = "bold 32px monospace";
      sCtx.fillStyle = "#34d399";
      sCtx.shadowColor = "#34d399";
      sCtx.shadowBlur = 12;

      sCtx.fillText("SAURABH FILE SYSTEM", 60, 90);
      sCtx.font = "24px monospace";
      sCtx.fillStyle = "#22c55e";
      sCtx.fillText("VERSION 1.0.4 [ARCHIVE KERNEL]", 60, 135);
      sCtx.fillText("NODE: SR-001 // CLEARANCE: ROOT", 60, 175);

      sCtx.strokeStyle = "rgba(52, 211, 153, 0.4)";
      sCtx.lineWidth = 2;
      sCtx.beginPath();
      sCtx.moveTo(60, 205);
      sCtx.lineTo(964, 205);
      sCtx.stroke();

      sCtx.fillStyle = "#fbbf24";
      sCtx.shadowColor = "#fbbf24";
      sCtx.fillText("C:\\SAURABH>", 60, 270);

      // Progress-based typed command
      if (progress < 0.6) {
        sCtx.fillStyle = "#e4e8e1";
        sCtx.fillText(isCursorOn ? "_" : " ", 235, 270);
      } else if (progress < 0.75) {
        sCtx.fillStyle = "#e4e8e1";
        sCtx.fillText("open archive", 235, 270);
        sCtx.fillStyle = "#34d399";
        sCtx.fillText("SEARCHING DIRECTORIES...", 60, 330);
      } else if (progress < 0.9) {
        sCtx.fillStyle = "#e4e8e1";
        sCtx.fillText("execute archive", 235, 270);
        sCtx.fillStyle = "#34d399";
        sCtx.fillText("ARCHIVE FOUND. ACCESS GRANTED.", 60, 330);
        sCtx.fillStyle = "#fbbf24";
        sCtx.fillText("INITIALIZING NEURAL INTERFACE...", 60, 380);
      } else {
        sCtx.fillStyle = "#4ade80";
        sCtx.shadowBlur = 24;
        sCtx.font = "bold 38px monospace";
        sCtx.fillText(">> ENTERING ARCHIVE <<", 60, 350);
        sCtx.font = "24px monospace";
        sCtx.fillText("PLEASE STAND BY...", 60, 410);
      }

      sCtx.shadowBlur = 0;
      screenTexture.needsUpdate = true;
    };

    // 2. Three.js Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#050706");
    scene.fog = new THREE.FogExp2("#050706", 0.18);

    const width = mountRef.current.clientWidth || window.innerWidth;
    const height = mountRef.current.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 50);
    camera.position.set(0, 0.05, 1.0); // Close to screen initially

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    mountRef.current.appendChild(renderer.domElement);

    // 3. Lighting Setup
    // CRT Screen Light (casting phosphor green glow)
    const crtLight = new THREE.PointLight(0x34d399, 2.5, 3.5);
    crtLight.position.set(0, 0.2, 0.35);
    scene.add(crtLight);

    // Warm Desk Lamp Spotlight
    const lampSpot = new THREE.SpotLight(0xffb054, 8.0, 7.0, Math.PI / 4, 0.45, 1.2);
    lampSpot.position.set(1.4, 1.6, 0.5);
    lampSpot.target.position.set(0, -0.3, 0);
    lampSpot.castShadow = true;
    lampSpot.shadow.mapSize.width = 1024;
    lampSpot.shadow.mapSize.height = 1024;
    lampSpot.shadow.bias = -0.001;
    scene.add(lampSpot);
    scene.add(lampSpot.target);

    // Dim Ambient Mood Fill
    const ambientLight = new THREE.AmbientLight(0x16221c, 0.8);
    scene.add(ambientLight);

    // 4. Procedural 3D Environment Meshes
    // Wooden / Matte Workstation Desk
    const deskGeo = new THREE.BoxGeometry(4.5, 0.1, 2.4);
    const deskMat = new THREE.MeshStandardMaterial({
      color: 0x1a1614,
      roughness: 0.65,
      metalness: 0.15,
    });
    const desk = new THREE.Mesh(deskGeo, deskMat);
    desk.position.set(0, -0.55, 0);
    desk.receiveShadow = true;
    scene.add(desk);

    // CRT Monitor Chassis Group
    const crtGroup = new THREE.Group();
    scene.add(crtGroup);

    // CRT Outer Bezel Housing (Beige/Dark Matte Retro Plastic)
    const bezelGeo = new THREE.BoxGeometry(1.2, 0.95, 0.85);
    const bezelMat = new THREE.MeshStandardMaterial({
      color: 0x222623,
      roughness: 0.5,
      metalness: 0.1,
    });
    const bezel = new THREE.Mesh(bezelGeo, bezelMat);
    bezel.position.set(0, 0.1, -0.15);
    bezel.castShadow = true;
    bezel.receiveShadow = true;
    crtGroup.add(bezel);

    // Curved CRT Front Glass Screen
    const screenGeo = new THREE.PlaneGeometry(0.9, 0.68, 16, 16);
    // Slight curvature
    const posAttr = screenGeo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const x = posAttr.getX(i);
      const y = posAttr.getY(i);
      const z = -(x * x * 0.08 + y * y * 0.08);
      posAttr.setZ(i, z);
    }
    screenGeo.computeVertexNormals();

    const screenMat = new THREE.MeshStandardMaterial({
      map: screenTexture,
      emissive: 0x34d399,
      emissiveMap: screenTexture,
      emissiveIntensity: 0.9,
      roughness: 0.2,
      metalness: 0.3,
    });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(0, 0.14, 0.28);
    crtGroup.add(screen);

    // Monitor Stand Base
    const standGeo = new THREE.CylinderGeometry(0.2, 0.24, 0.15, 24);
    const standMat = new THREE.MeshStandardMaterial({ color: 0x1a1d1b, roughness: 0.6 });
    const stand = new THREE.Mesh(standGeo, standMat);
    stand.position.set(0, -0.42, -0.1);
    stand.castShadow = true;
    crtGroup.add(stand);

    // Power LED indicator
    const ledGeo = new THREE.SphereGeometry(0.012, 12, 12);
    const ledMat = new THREE.MeshBasicMaterial({ color: 0x4ade80 });
    const led = new THREE.Mesh(ledGeo, ledMat);
    led.position.set(0.42, -0.3, 0.28);
    crtGroup.add(led);

    // Retro Mechanical Keyboard
    const kbGeo = new THREE.BoxGeometry(0.85, 0.04, 0.28);
    const kbMat = new THREE.MeshStandardMaterial({ color: 0x1c211e, roughness: 0.7 });
    const keyboard = new THREE.Mesh(kbGeo, kbMat);
    keyboard.position.set(0, -0.48, 0.5);
    keyboard.rotation.x = 0.08;
    keyboard.castShadow = true;
    keyboard.receiveShadow = true;
    scene.add(keyboard);

    // Mouse & Pad
    const padGeo = new THREE.BoxGeometry(0.3, 0.005, 0.35);
    const padMat = new THREE.MeshStandardMaterial({ color: 0x111613, roughness: 0.9 });
    const pad = new THREE.Mesh(padGeo, padMat);
    pad.position.set(0.65, -0.495, 0.5);
    pad.receiveShadow = true;
    scene.add(pad);

    const mouseGeo = new THREE.BoxGeometry(0.09, 0.035, 0.14);
    const mouseMat = new THREE.MeshStandardMaterial({ color: 0x222824, roughness: 0.6 });
    const mouse = new THREE.Mesh(mouseGeo, mouseMat);
    mouse.position.set(0.65, -0.47, 0.5);
    mouse.castShadow = true;
    scene.add(mouse);

    // Desk Lamp Housing
    const lampGroup = new THREE.Group();
    lampGroup.position.set(1.4, 0, 0.2);
    scene.add(lampGroup);

    const lampBaseGeo = new THREE.CylinderGeometry(0.12, 0.14, 0.03, 20);
    const lampBaseMat = new THREE.MeshStandardMaterial({ color: 0x3d2b1f, roughness: 0.4, metalness: 0.8 });
    const lampBase = new THREE.Mesh(lampBaseGeo, lampBaseMat);
    lampBase.position.set(0, -0.48, 0);
    lampBase.castShadow = true;
    lampGroup.add(lampBase);

    const lampShadeGeo = new THREE.ConeGeometry(0.16, 0.24, 20, 1, true);
    const lampShade = new THREE.Mesh(lampShadeGeo, lampBaseMat);
    lampShade.position.set(0, 1.45, 0.3);
    lampShade.rotation.x = Math.PI / 3;
    lampGroup.add(lampShade);

    // Subtle atmospheric dust particles
    const dustCount = 80;
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPos[i] = (Math.random() - 0.5) * 3;
      dustPos[i + 1] = Math.random() * 1.5 - 0.4;
      dustPos[i + 2] = Math.random() * 2 - 0.5;
    }
    dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPos, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0xffb74d,
      size: 0.015,
      transparent: true,
      opacity: 0.4,
    });
    const dust = new THREE.Points(dustGeo, dustMat);
    scene.add(dust);

    // 5. Scroll & Camera Interpolation Logic
    let currentScroll = 0;
    let targetScroll = 0;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      targetScroll += e.deltaY * 0.0008;
      targetScroll = Math.max(0, Math.min(1.05, targetScroll));
    };

    // Touch support for mobile scroll simulation
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const deltaY = touchStartY - e.touches[0].clientY;
      touchStartY = e.touches[0].clientY;
      targetScroll += deltaY * 0.002;
      targetScroll = Math.max(0, Math.min(1.05, targetScroll));
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // 6. Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth scroll interpolation
      currentScroll += (targetScroll - currentScroll) * 0.08;
      setScrollProgress(Math.min(1, Math.max(0, currentScroll)));

      // Render updated text to CRT canvas
      renderScreenText(currentScroll);

      // Camera Path Interpolation:
      // 0% -> Close to monitor (z: 0.95, y: 0.14)
      // 30-60% -> Dolly out, showing room, desk, lamp (z: 3.2, y: 0.65, x: 0.3)
      // 70-95% -> Dolly in toward screen center
      // 100% -> Cross directly through the monitor glass (z: 0.28)
      let camX = 0;
      let camY = 0.14;
      let camZ = 0.95;
      let fov = 35;

      if (currentScroll < 0.6) {
        const t = currentScroll / 0.6;
        // Ease out dolly back
        const ease = t * (2 - t);
        camX = THREE.MathUtils.lerp(0, 0.45, ease);
        camY = THREE.MathUtils.lerp(0.14, 0.65, ease);
        camZ = THREE.MathUtils.lerp(0.95, 3.1, ease);
        fov = THREE.MathUtils.lerp(35, 42, ease);
      } else {
        const t = (currentScroll - 0.6) / 0.4;
        // Fast cinematic plunge into screen
        const plunge = Math.pow(t, 2.5);
        camX = THREE.MathUtils.lerp(0.45, 0, t);
        camY = THREE.MathUtils.lerp(0.65, 0.14, t);
        camZ = THREE.MathUtils.lerp(3.1, 0.29, plunge);
        fov = THREE.MathUtils.lerp(42, 28, plunge);
      }

      camera.position.set(camX, camY, camZ);
      camera.lookAt(0, 0.14, 0.28);
      camera.fov = fov;
      camera.updateProjectionMatrix();

      // CRT Light flicker
      crtLight.intensity = 2.4 + Math.sin(elapsed * 18) * 0.15;

      // Dust motes gentle drift
      const pos = dust.geometry.attributes.position.array as Float32Array;
      for (let i = 1; i < pos.length; i += 3) {
        pos[i] += Math.sin(elapsed + i) * 0.0005;
      }
      dust.geometry.attributes.position.needsUpdate = true;

      // Screen entry threshold trigger
      if (currentScroll >= 0.99 && !isEntering) {
        setIsEntering(true);
        sounds.playPowerOn();
        sounds.playAccessGranted();
        setTimeout(() => {
          onEnterArchive();
        }, 600);
      }

      renderer.render(scene, camera);
    };

    animate();

    // 7. Resize Handler
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth || window.innerWidth;
      const h = mountRef.current.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.innerHTML = "";
      }
    };
  }, [onEnterArchive, isEntering]);

  const toggleSound = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
  };

  const handleDirectEnter = () => {
    sounds.playPowerOn();
    sounds.playAccessGranted();
    setIsEntering(true);
    setTimeout(() => {
      onEnterArchive();
    }, 400);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-crt-darkest font-mono select-none">
      {/* 3D WebGL Canvas Viewport */}
      <div ref={mountRef} className="absolute inset-0 h-full w-full" />

      {/* Screen Entry Phosphor Flare Transition */}
      <div
        className={`pointer-events-none fixed inset-0 z-50 bg-term-green transition-opacity duration-700 ${
          isEntering ? "opacity-90" : "opacity-0"
        }`}
      />

      {/* Top Floating Telemetry & Controls */}
      <header className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 border border-term-green/40 bg-crt-darkest/90 px-3 py-1.5 backdrop-blur-md text-xs text-term-green font-bold glow-green-sm pointer-events-auto">
          <Terminal className="h-4 w-4 animate-pulse" />
          <span>SAURABH_OS // WORKSTATION TERMINAL</span>
        </div>

        <div className="flex items-center gap-3 pointer-events-auto">
          <button
            onClick={toggleSound}
            data-cursor="TOGGLE_AUDIO"
            className="flex items-center gap-1.5 border border-term-green/40 bg-crt-darkest/90 px-3 py-1.5 text-xs text-term-green hover:bg-term-green hover:text-crt-black transition-colors"
          >
            {isMuted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
            <span className="hidden sm:inline">{isMuted ? "SOUND OFF" : "SOUND ON"}</span>
          </button>

          <button
            onClick={handleDirectEnter}
            data-cursor="BYPASS_3D"
            className="flex items-center gap-1.5 border border-term-amber bg-term-amber/15 px-3 py-1.5 text-xs font-bold text-term-amber hover:bg-term-amber hover:text-crt-black transition-colors"
          >
            <span>[ BYPASS INTRO ]</span>
          </button>
        </div>
      </header>

      {/* Bottom Scroll HUD Instruction */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-center pointer-events-none">
        <div className="flex items-center gap-2 border border-term-green/30 bg-crt-darkest/90 px-4 py-2 text-xs text-archive-paper backdrop-blur-md shadow-term-green">
          <ChevronDown className="h-4 w-4 text-term-greenBright animate-bounce" />
          <span>
            {scrollProgress < 0.6
              ? "SCROLL TO PULL BACK & REVEAL WORKSTATION"
              : scrollProgress < 0.95
              ? "SCROLL FURTHER TO DIVE INTO THE CRT SCREEN"
              : "ENTERING DIGITAL ARCHIVE..."}
          </span>
        </div>

        {/* Scroll Progress Bar Indicator */}
        <div className="h-1 w-48 overflow-hidden rounded bg-crt-dark border border-term-green/30">
          <div
            className="h-full bg-term-green transition-all duration-75"
            style={{ width: `${Math.round(scrollProgress * 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
