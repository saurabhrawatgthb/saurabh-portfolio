"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, Terminal as TerminalIcon, CornerDownLeft } from "lucide-react";
import { sounds } from "@/components/sound/SoundEngine";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { skillModules } from "@/data/skills";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSoundToggle?: () => void;
}

interface LogLine {
  id: string;
  type: "input" | "output" | "system" | "error" | "success";
  text: string;
}

export function TerminalModal({ isOpen, onClose, onSoundToggle }: TerminalModalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<LogLine[]>([
    { id: "1", type: "system", text: "THE SAURABH FILES // COMMAND CONSOLE v2.4.0 [ROOT]" },
    { id: "2", type: "system", text: "TYPE 'help' TO QUERY AVAILABLE SYSTEM COMMANDS." },
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      sounds.playAccessGranted();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    sounds.playKeyClick();
    const cleanCmd = cmd.trim().toLowerCase();
    const newHistory = [...history, { id: Date.now().toString(), type: "input" as const, text: `> ${cmd}` }];

    if (!cleanCmd) {
      setHistory(newHistory);
      return;
    }

    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    switch (cleanCmd) {
      case "help":
        newHistory.push(
          { id: Math.random().toString(), type: "output", text: "AVAILABLE SYSTEM COMMANDS:" },
          { id: Math.random().toString(), type: "output", text: "  about         - Display operator identity & academic dossier" },
          { id: Math.random().toString(), type: "output", text: "  projects      - Query classified projects archive" },
          { id: Math.random().toString(), type: "output", text: "  skills        - List active modular skill engines" },
          { id: Math.random().toString(), type: "output", text: "  experience    - Output institutional experience logs" },
          { id: Math.random().toString(), type: "output", text: "  research      - Output road anomaly CV research dossier" },
          { id: Math.random().toString(), type: "output", text: "  contact       - Display communication coordinates & links" },
          { id: Math.random().toString(), type: "output", text: "  status        - Print hardware & telemetry metrics" },
          { id: Math.random().toString(), type: "output", text: "  clear / cls   - Clear console output screen" },
          { id: Math.random().toString(), type: "output", text: "  exit          - Close interactive terminal" },
          { id: Math.random().toString(), type: "output", text: "  sudo <cmd>    - Execute privileged root instructions" }
        );
        break;

      case "about":
      case "identity":
      case "whoami":
        newHistory.push(
          { id: Math.random().toString(), type: "success", text: `[IDENTITY]: ${profileData.name} (${profileData.codename})` },
          { id: Math.random().toString(), type: "output", text: `[DEGREE]: ${profileData.education.degree} in ${profileData.education.field}` },
          { id: Math.random().toString(), type: "output", text: `[INSTITUTION]: ${profileData.education.institution}` },
          { id: Math.random().toString(), type: "output", text: `[MISSION]: ${profileData.tagline}` }
        );
        break;

      case "projects":
        newHistory.push(
          { id: Math.random().toString(), type: "success", text: "CLASSIFIED PROJECT ARCHIVE:" },
          ...projectsData.map((p) => ({
            id: Math.random().toString(),
            type: "output" as const,
            text: `  [${p.id}] ${p.title} // ${p.category} -> STATUS: ${p.status}`,
          }))
        );
        break;

      case "skills":
        newHistory.push(
          { id: Math.random().toString(), type: "success", text: "SYSTEM SKILL MODULES:" },
          ...skillModules.map((m) => ({
            id: Math.random().toString(),
            type: "output" as const,
            text: `  [${m.code}] ${m.name} (${m.skills.map((s) => s.name).join(", ")})`,
          }))
        );
        break;

      case "experience":
        newHistory.push(
          { id: Math.random().toString(), type: "success", text: "ARCHIVAL EXPERIENCE LOGS:" },
          { id: Math.random().toString(), type: "output", text: "  - IEEE Student Branch: Backend & Technical Contributor" },
          { id: Math.random().toString(), type: "output", text: "  - Technieeeks: Backend Manager" },
          { id: Math.random().toString(), type: "output", text: "  - Graph-e-thon 2.0: Registration Manager (500+ participants)" },
          { id: Math.random().toString(), type: "output", text: "  - CISCT Conference: Proceedings & Technical Operations" },
          { id: Math.random().toString(), type: "output", text: "  - Saarthi '25: Hackathon Squad Operations" }
        );
        break;

      case "research":
        newHistory.push(
          { id: Math.random().toString(), type: "success", text: "[RESEARCH DOSSIER: POTHOLE-GEO-CV-2024]" },
          { id: Math.random().toString(), type: "output", text: "  Automated Asphalt Defect Detection & Geo-Spatial Mapping via Edge CV" },
          { id: Math.random().toString(), type: "output", text: "  Key Metrics: Frame Latency < 28ms | 94.2% Bandwidth Savings" }
        );
        break;

      case "contact":
        newHistory.push(
          { id: Math.random().toString(), type: "success", text: "COMMUNICATION SIGNAL CHANNELS:" },
          { id: Math.random().toString(), type: "output", text: `  GitHub:   ${profileData.socials.github}` },
          { id: Math.random().toString(), type: "output", text: `  LeetCode: ${profileData.socials.leetcode}` },
          { id: Math.random().toString(), type: "output", text: `  LinkedIn: ${profileData.socials.linkedin}` },
          { id: Math.random().toString(), type: "output", text: `  X:        ${profileData.socials.x}` },
          { id: Math.random().toString(), type: "output", text: `  Email:    ${profileData.socials.email}` }
        );
        break;

      case "status":
        newHistory.push(
          { id: Math.random().toString(), type: "success", text: "HARDWARE TELEMETRY & SYSTEM HEALTH:" },
          { id: Math.random().toString(), type: "output", text: `  NODE: ${profileData.systemNode} | STATUS: OPTIMAL` },
          { id: Math.random().toString(), type: "output", text: `  ARCHIVE INTEGRITY: 100% UNCOMPROMISED` },
          { id: Math.random().toString(), type: "output", text: `  SYSTEM MEMORY CHECK: 0x7FFF_FFFF PASS` }
        );
        break;

      case "sudo access_saurabh":
      case "sudo su":
      case "sudo":
        sounds.playAccessGranted();
        newHistory.push(
          { id: Math.random().toString(), type: "success", text: "[ROOT ACCESS CONFIRMED] Permission Granted. Welcome, Operator." },
          { id: Math.random().toString(), type: "output", text: "Classification override active. All engineering archives unlocked." }
        );
        break;

      case "matrix":
        sounds.playGlitch();
        newHistory.push(
          { id: Math.random().toString(), type: "system", text: "01010011 01000001 01010101 01010010 01000001 01000010 01001000" },
          { id: Math.random().toString(), type: "system", text: "SYSTEM OVERCLOCK: INJECTING REALITY PROTOCOL..." },
          { id: Math.random().toString(), type: "success", text: "MATRIX INJECTION COMPLETE." }
        );
        break;

      case "clear":
      case "cls":
        setHistory([{ id: "1", type: "system", text: "THE SAURABH FILES // CONSOLE BUFFER CLEARED." }]);
        setInput("");
        return;

      case "exit":
      case "quit":
        onClose();
        return;

      default:
        sounds.playGlitch();
        newHistory.push({
          id: Math.random().toString(),
          type: "error",
          text: `COMMAND NOT RECOGNIZED: '${cmd}'. Type 'help' for available diagnostic commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Escape") {
      onClose();
    } else {
      sounds.playKeyClick();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-crt-darkest/90 p-4 backdrop-blur-sm">
      <div className="relative flex h-[80vh] w-full max-w-3xl flex-col border border-term-green/60 bg-crt-black shadow-term-green">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-term-green/30 bg-crt-surface px-3 py-2">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold text-term-green">
            <TerminalIcon className="h-4 w-4 animate-pulse" />
            <span>SAURABH_OS // TERMINAL [ROOT_DIAGNOSTICS]</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-archive-muted">ESC TO CLOSE</span>
            <button
              onClick={onClose}
              data-cursor="CLOSE"
              className="border border-term-red/40 bg-term-red/10 p-1 text-term-red hover:bg-term-red hover:text-crt-black transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Output Console */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 font-mono text-xs space-y-1.5 bg-grid-pattern">
          {history.map((log) => (
            <div
              key={log.id}
              className={`leading-relaxed break-words ${
                log.type === "input"
                  ? "text-term-amber font-semibold"
                  : log.type === "system"
                  ? "text-archive-muted"
                  : log.type === "success"
                  ? "text-term-greenBright font-bold glow-green-sm"
                  : log.type === "error"
                  ? "text-term-red font-semibold"
                  : "text-archive-text"
              }`}
            >
              {log.text}
            </div>
          ))}
        </div>

        {/* Command Input Prompt */}
        <div className="flex items-center gap-2 border-t border-term-green/30 bg-crt-dark px-3 py-2">
          <span className="font-mono text-xs font-bold text-term-green">SR_ROOT:~$</span>
          <input
            ref={inputRef}
            type="text"
            maxLength={120}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type 'help' or command..."
            className="flex-1 bg-transparent font-mono text-xs text-term-greenBright outline-none placeholder:text-archive-darkMuted"
            autoFocus
          />
          <button
            onClick={() => handleCommand(input)}
            data-cursor="SEND_CMD"
            className="border border-term-green/40 bg-term-green/10 px-2 py-1 font-mono text-[10px] text-term-green hover:bg-term-green hover:text-crt-black transition-colors"
          >
            <CornerDownLeft className="h-3 w-3 inline mr-1" />
            EXEC
          </button>
        </div>
      </div>
    </div>
  );
}
