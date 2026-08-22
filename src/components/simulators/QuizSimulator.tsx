"use client";

import React, { useState, useEffect } from "react";
import { Users, Zap, Trophy, Send, Server } from "lucide-react";
import { sounds } from "@/components/sound/SoundEngine";

interface Participant {
  id: string;
  name: string;
  score: number;
  deltaMs: number;
  rank: number;
}

export function QuizSimulator() {
  const [questionIndex, setQuestionIndex] = useState(1);
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const [activeSockets, setActiveSockets] = useState(148);
  const [participants, setParticipants] = useState<Participant[]>([
    { id: "P_01", name: "DEV_ALPHA", score: 2850, deltaMs: 210, rank: 1 },
    { id: "P_02", name: "NODE_RUNNER", score: 2710, deltaMs: 340, rank: 2 },
    { id: "P_03", name: "SOCKET_PRO", score: 2640, deltaMs: 410, rank: 3 },
    { id: "P_04", name: "SYSTEMS_LEAD", score: 2490, deltaMs: 520, rank: 4 },
  ]);

  const broadcastQuestion = () => {
    sounds.playPowerOn();
    setIsBroadcasting(true);

    setTimeout(() => {
      sounds.playKeyClick();
      // Randomize leaderboard delta
      setParticipants((prev) => {
        const updated = prev.map((p) => {
          const added = Math.floor(Math.random() * 400) + 100;
          const delta = Math.floor(Math.random() * 500) + 150;
          return {
            ...p,
            score: p.score + added,
            deltaMs: delta,
          };
        });
        updated.sort((a, b) => b.score - a.score);
        return updated.map((p, idx) => ({ ...p, rank: idx + 1 }));
      });
      setQuestionIndex((prev) => prev + 1);
      setActiveSockets(140 + Math.floor(Math.random() * 20));
      setIsBroadcasting(false);
      sounds.playAccessGranted();
    }, 1000);
  };

  return (
    <div className="border border-term-green/40 bg-crt-dark p-4 font-mono text-xs shadow-term-green">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-term-green/30 pb-3">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-term-amber" />
          <span className="text-term-amber font-bold glow-amber">
            REAL-TIME ASSESSMENT // CONCURRENT WEBSOCKET ENGINE
          </span>
        </div>
        <button
          onClick={broadcastQuestion}
          disabled={isBroadcasting}
          data-cursor="BROADCAST_QUESTION"
          className="flex items-center gap-1.5 border border-term-green bg-term-green/10 px-3 py-1 font-bold text-term-greenBright hover:bg-term-green hover:text-crt-black transition-colors disabled:opacity-50"
        >
          <Send className="h-3.5 w-3.5" />
          <span>{isBroadcasting ? "BROADCASTING SOCKET EVENT..." : `BROADCAST QUESTION #${questionIndex + 1}`}</span>
        </button>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-12">
        {/* Left: Concurrent Node Cluster Grid */}
        <div className="md:col-span-6 border border-term-green/20 bg-crt-surface p-3 space-y-3">
          <div className="flex items-center justify-between text-[10px] text-archive-muted">
            <span className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5 text-term-green" /> ACTIVE SOCKET SESSIONS:
            </span>
            <span className="text-term-greenBright font-bold font-mono">{activeSockets} CLIENTS CONNECTED</span>
          </div>

          {/* Node Grid Matrix */}
          <div className="grid grid-cols-10 gap-1.5 h-28 overflow-hidden p-1 bg-crt-black border border-term-green/20">
            {Array.from({ length: 60 }).map((_, i) => (
              <div
                key={i}
                className={`h-2.5 w-2.5 rounded-[1px] transition-colors duration-300 ${
                  isBroadcasting
                    ? i % 2 === 0
                      ? "bg-term-amber animate-ping"
                      : "bg-term-greenBright"
                    : i % 4 === 0
                    ? "bg-term-green"
                    : "bg-term-greenMuted/40"
                }`}
              />
            ))}
          </div>

          {/* Engine Spec */}
          <div className="flex items-center justify-between text-[9px] text-archive-muted border-t border-term-green/20 pt-2">
            <span className="flex items-center gap-1">
              <Server className="h-3 w-3 text-term-amber" /> NODE.JS EVENT LOOP
            </span>
            <span className="text-term-green">FULL-DUPLEX WS</span>
          </div>
        </div>

        {/* Right: Live Dynamic Leaderboard */}
        <div className="md:col-span-6 border border-term-green/20 bg-crt-surface p-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[10px] text-archive-muted border-b border-term-green/20 pb-1.5">
              <span className="flex items-center gap-1">
                <Trophy className="h-3.5 w-3.5 text-term-amber" /> LIVE DELTA LEADERBOARD
              </span>
              <span className="text-term-green font-mono">Q_{String(questionIndex).padStart(2, "0")}</span>
            </div>

            <div className="mt-2 space-y-1.5">
              {participants.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between bg-crt-black px-2 py-1 border border-term-green/20 text-[10px]"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-term-amber font-bold">#{p.rank}</span>
                    <span className="text-archive-paper font-mono">{p.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] text-archive-muted">{p.deltaMs}ms</span>
                    <span className="text-term-greenBright font-bold font-mono">{p.score} PTS</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 text-[9px] text-archive-muted text-right">
            <span>SUB-SECOND SERVER-AUTHORITATIVE RANK CALCULATION</span>
          </div>
        </div>
      </div>
    </div>
  );
}
