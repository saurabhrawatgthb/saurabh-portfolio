"use client";

import React, { useState, useEffect } from "react";
import { Camera, Scan, ShieldCheck, Cpu, Play, CheckCircle2 } from "lucide-react";
import { sounds } from "@/components/sound/SoundEngine";

interface CameraNode {
  id: string;
  name: string;
  x: number;
  y: number;
  status: "ONLINE" | "TARGET_MATCH" | "PATH_VECTOR";
  matchConfidence?: number;
  time: string;
}

export function RakshakSimulator() {
  const [isScanning, setIsScanning] = useState(false);
  const [activeNode, setActiveNode] = useState<string>("CAM_02");
  const [scanStep, setScanStep] = useState(0);

  const cameraNodes: CameraNode[] = [
    { id: "CAM_01", name: "SECTOR A // NORTH JUNCTION", x: 18, y: 30, status: scanStep >= 1 ? "ONLINE" : "ONLINE", time: "14:22:04" },
    { id: "CAM_02", name: "SECTOR B // CENTRAL SQUARE", x: 48, y: 22, status: scanStep >= 2 ? "TARGET_MATCH" : "ONLINE", matchConfidence: 96.4, time: "14:23:18" },
    { id: "CAM_03", name: "SECTOR C // METRO ENTRANCE", x: 78, y: 35, status: scanStep >= 3 ? "PATH_VECTOR" : "ONLINE", matchConfidence: 89.1, time: "14:24:45" },
    { id: "CAM_04", name: "SECTOR D // SOUTH TRANSIT", x: 62, y: 75, status: scanStep >= 4 ? "PATH_VECTOR" : "ONLINE", time: "FORECAST" },
    { id: "CAM_05", name: "SECTOR E // WEST PLAZA", x: 26, y: 70, status: "ONLINE", time: "MONITORING" },
  ];

  const runSimulation = () => {
    sounds.playPowerOn();
    setIsScanning(true);
    setScanStep(1);

    setTimeout(() => {
      sounds.playRadarPing();
      setScanStep(2);
      setActiveNode("CAM_02");
    }, 1000);

    setTimeout(() => {
      sounds.playAccessGranted();
      setScanStep(3);
      setActiveNode("CAM_03");
    }, 2200);

    setTimeout(() => {
      sounds.playRadarPing();
      setScanStep(4);
      setActiveNode("CAM_04");
      setIsScanning(false);
    }, 3400);
  };

  return (
    <div className="relative border border-term-green/40 bg-crt-dark p-4 font-mono text-xs shadow-term-green">
      {/* Simulator HUD Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-term-green/30 pb-3">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-term-red animate-ping" />
          <span className="text-term-greenBright font-bold glow-green-sm">
            RAKSHAK // TACTICAL SURVEILLANCE MESH
          </span>
          <span className="hidden sm:inline bg-term-green/10 text-term-green text-[10px] px-1.5 py-0.5 border border-term-green/30">
            5 NODES ACTIVE
          </span>
        </div>

        <button
          onClick={runSimulation}
          disabled={isScanning}
          data-cursor="TRIGGER_SCAN"
          className="flex items-center gap-1.5 border border-term-amber bg-term-amber/10 px-3 py-1 font-bold text-term-amber hover:bg-term-amber hover:text-crt-black transition-colors disabled:opacity-50"
        >
          {isScanning ? <Scan className="h-3.5 w-3.5 animate-spin" /> : <Play className="h-3.5 w-3.5" />}
          <span>{isScanning ? "AI PIPELINE COMPUTING..." : "RUN TRAJECTORY SIMULATION"}</span>
        </button>
      </div>

      {/* Main Tactical Grid View */}
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* Left: Interactive Node Map */}
        <div className="relative h-64 lg:col-span-8 border border-term-green/20 bg-crt-darkest overflow-hidden">
          {/* Radar background grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />

          {/* SVG Connection Vectors */}
          <svg className="absolute inset-0 h-full w-full pointer-events-none">
            {/* Base topological edges */}
            <line x1="18%" y1="30%" x2="48%" y2="22%" stroke="#1b3024" strokeWidth="2" strokeDasharray="3,3" />
            <line x1="48%" y1="22%" x2="78%" y2="35%" stroke="#1b3024" strokeWidth="2" strokeDasharray="3,3" />
            <line x1="48%" y1="22%" x2="62%" y2="75%" stroke="#1b3024" strokeWidth="2" strokeDasharray="3,3" />
            <line x1="18%" y1="30%" x2="26%" y2="70%" stroke="#1b3024" strokeWidth="2" strokeDasharray="3,3" />
            <line x1="26%" y1="70%" x2="62%" y2="75%" stroke="#1b3024" strokeWidth="2" strokeDasharray="3,3" />

            {/* Active AI Trajectory Forecast Vector */}
            {scanStep >= 2 && (
              <line
                x1="48%"
                y1="22%"
                x2="78%"
                y2="35%"
                stroke="#fbbf24"
                strokeWidth="2.5"
                className="animate-pulse"
              />
            )}
            {scanStep >= 3 && (
              <line
                x1="78%"
                y1="35%"
                x2="62%"
                y2="75%"
                stroke="#ef4444"
                strokeWidth="3"
                strokeDasharray="4,4"
              />
            )}
          </svg>

          {/* Camera Node Markers */}
          {cameraNodes.map((node) => {
            const isMatch = node.status === "TARGET_MATCH";
            const isPath = node.status === "PATH_VECTOR";
            const isSelected = activeNode === node.id;

            return (
              <button
                key={node.id}
                onClick={() => {
                  sounds.playKeyClick();
                  setActiveNode(node.id);
                }}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                className="group absolute -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-125 focus:outline-none"
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded border transition-all ${
                    isMatch
                      ? "border-term-red bg-term-red/20 text-term-red shadow-lg animate-pulse"
                      : isPath
                      ? "border-term-amber bg-term-amber/20 text-term-amber"
                      : isSelected
                      ? "border-term-greenBright bg-term-green/20 text-term-greenBright"
                      : "border-term-green/40 bg-crt-dark text-term-green/70"
                  }`}
                >
                  <Camera className="h-4 w-4" />
                </div>
                {/* Node Identifier Label */}
                <div className="absolute top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-crt-black/90 border border-term-green/30 px-1 py-0.5 text-[9px] text-archive-text">
                  {node.id}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Live Frame & Vector Diagnostics */}
        <div className="flex flex-col justify-between space-y-3 lg:col-span-4 border border-term-green/20 bg-crt-surface p-3">
          <div>
            <div className="flex items-center justify-between border-b border-term-green/20 pb-2">
              <span className="text-[10px] text-archive-muted">SELECTED SENSOR FEED</span>
              <span className="text-term-amber font-bold">{activeNode}</span>
            </div>

            {/* Simulated Live Frame Crop */}
            <div className="relative mt-2 h-28 w-full border border-dashed border-term-green/40 bg-crt-black flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-30" />
              
              {/* Bounding box simulation */}
              <div className="relative h-16 w-16 border-2 border-term-amber bg-term-amber/10 flex flex-col items-center justify-between p-1 animate-pulse">
                <span className="text-[8px] text-term-amber font-mono font-bold">FACE_MATCH</span>
                <Scan className="h-6 w-6 text-term-amber" />
                <span className="text-[8px] text-term-amber font-mono">
                  {activeNode === "CAM_02" ? "96.4% CONF" : activeNode === "CAM_03" ? "89.1% CONF" : "SEARCHING"}
                </span>
              </div>
            </div>
          </div>

          {/* AI Metrics Table */}
          <div className="space-y-1.5 text-[10px]">
            <div className="flex justify-between text-archive-muted">
              <span>OPENCV VECTOR:</span>
              <span className="text-term-green font-mono">128-D EMBEDDING EXTRACTED</span>
            </div>
            <div className="flex justify-between text-archive-muted">
              <span>PATH ALGORITHM:</span>
              <span className="text-term-green font-mono">DIJKSTRA FORECASTER</span>
            </div>
            <div className="flex justify-between text-archive-muted">
              <span>NEXT ESTIMATED NODE:</span>
              <span className="text-term-red font-bold font-mono">CAM_04 [SOUTH TRANSIT]</span>
            </div>
          </div>

          <div className="border-t border-term-green/20 pt-2 flex items-center justify-between text-[10px]">
            <span className="text-archive-muted flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3 text-term-green" />
              FASTAPI CLOUD SYNC
            </span>
            <span className="text-term-greenBright font-bold">READY</span>
          </div>
        </div>
      </div>
    </div>
  );
}
