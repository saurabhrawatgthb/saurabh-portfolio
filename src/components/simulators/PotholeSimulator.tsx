"use client";

import React, { useState } from "react";
import { AlertTriangle, MapPin, Gauge, Video, RefreshCw, Eye } from "lucide-react";
import { sounds } from "@/components/sound/SoundEngine";

export function PotholeSimulator() {
  const [isScanning, setIsScanning] = useState(false);
  const [severity, setSeverity] = useState<"MODERATE" | "CRITICAL" | "MILD">("CRITICAL");
  const [gpsCoords, setGpsCoords] = useState("30.3165° N, 78.0322° E");
  const [confidence, setConfidence] = useState(94.8);
  const [depthEst, setDepthEst] = useState("7.4 cm");

  const triggerScan = () => {
    sounds.playRadarPing();
    setIsScanning(true);

    setTimeout(() => {
      sounds.playGlitch();
      const severities: ("MODERATE" | "CRITICAL" | "MILD")[] = ["MILD", "MODERATE", "CRITICAL"];
      const newSev = severities[Math.floor(Math.random() * severities.length)];
      setSeverity(newSev);
      setConfidence(parseFloat((91 + Math.random() * 7).toFixed(1)));
      setDepthEst(`${(4 + Math.random() * 5).toFixed(1)} cm`);
      setGpsCoords(`30.${3100 + Math.floor(Math.random() * 90)}° N, 78.${300 + Math.floor(Math.random() * 90)}° E`);
      setIsScanning(false);
      sounds.playAccessGranted();
    }, 1200);
  };

  return (
    <div className="border border-term-green/40 bg-crt-dark p-4 font-mono text-xs shadow-term-green">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-term-green/30 pb-3">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-term-red" />
          <span className="text-term-red font-bold glow-red">
            POTHOLE TELEMETRY // EDGE COMPUTER VISION
          </span>
        </div>
        <button
          onClick={triggerScan}
          disabled={isScanning}
          data-cursor="SCAN_ROAD"
          className="flex items-center gap-1.5 border border-term-green bg-term-green/10 px-3 py-1 font-bold text-term-greenBright hover:bg-term-green hover:text-crt-black transition-colors disabled:opacity-50"
        >
          {isScanning ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Eye className="h-3.5 w-3.5" />}
          <span>{isScanning ? "PROCESSING FRAME..." : "RE-SCAN ROAD SEGMENT"}</span>
        </button>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-12">
        {/* Simulated Dashcam Video Frame */}
        <div className="relative h-56 md:col-span-7 border border-term-green/30 bg-crt-black overflow-hidden flex items-center justify-center">
          {/* Horizon & Perspective Road Lines */}
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="h-28 w-full bg-gradient-to-t from-crt-surface to-transparent" />
          </div>

          {/* Perspective grid road */}
          <div className="absolute bottom-0 h-32 w-full bg-grid-pattern opacity-40" />

          {/* Sweeping optical scanning beam */}
          <div className="absolute inset-x-0 h-1 bg-term-green/80 shadow-term-green animate-sweep" />

          {/* Road Defect Bounding Contour Box */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="h-20 w-36 rounded border-2 border-dashed border-term-red bg-term-red/15 p-1 flex flex-col justify-between animate-pulse">
              <div className="flex items-center justify-between text-[8px] text-term-red font-bold">
                <span>[ANOMALY_03]</span>
                <span>{confidence}% CONF</span>
              </div>
              <div className="text-center text-[10px] font-bold text-term-red glow-red">
                SEVERITY: {severity}
              </div>
              <div className="text-right text-[8px] text-term-amber">
                DEPTH: {depthEst}
              </div>
            </div>
          </div>

          {/* HUD Overlay Markers */}
          <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-crt-darkest/90 border border-term-green/20 px-1.5 py-0.5 text-[9px] text-archive-muted">
            <Video className="h-3 w-3 text-term-red animate-pulse" />
            <span>OPTICAL SENSOR: 30 FPS</span>
          </div>

          <div className="absolute bottom-2 right-2 bg-crt-darkest/90 border border-term-green/20 px-1.5 py-0.5 text-[9px] text-term-green">
            OPENCV_CONTOUR_V4
          </div>
        </div>

        {/* Telemetry Metrics Panel */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-3 border border-term-green/20 bg-crt-surface p-3">
          <div className="space-y-2">
            <div className="text-[10px] text-archive-muted border-b border-term-green/20 pb-1">
              GEO-SPATIAL MUNICIPAL DISPATCH LOG
            </div>

            <div className="space-y-1 text-[10px]">
              <div className="flex items-center justify-between">
                <span className="text-archive-muted flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-term-amber" /> GPS COORDINATES:
                </span>
                <span className="font-mono text-term-amber font-bold">{gpsCoords}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-archive-muted flex items-center gap-1">
                  <Gauge className="h-3 w-3 text-term-green" /> ESTIMATED DEPTH:
                </span>
                <span className="font-mono text-archive-paper font-bold">{depthEst}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-archive-muted">EDGE LATENCY:</span>
                <span className="font-mono text-term-greenBright font-bold">24.2 ms / frame</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-archive-muted">DEDUPLICATION:</span>
                <span className="font-mono text-term-green font-bold">HAVERSINE FILTER PASS</span>
              </div>
            </div>
          </div>

          <div className="rounded border border-term-red/30 bg-term-red/10 p-2 text-[10px]">
            <span className="text-term-red font-bold">DISPATCH TRIGGER:</span>
            <p className="text-archive-text mt-0.5">
              Automated road repair ticket queued for municipal maintenance fleet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
