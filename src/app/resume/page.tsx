"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ResumeDocument } from "@/components/resume/ResumeDocument";
import { generateAtsPlainText } from "@/data/resumeConfig";
import { Printer, ArrowLeft, Copy, Check, FileText, Download } from "lucide-react";

export default function ResumePage() {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = async () => {
    const text = generateAtsPlainText();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans py-8 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white print:text-black">
      {/* Floating Toolbar (Hidden when printing) */}
      <div className="no-print max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-4 rounded-2xl shadow-xl">
        <Link
          href="/#resume"
          className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handleCopyText}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all shadow-sm"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "Copied ATS Text!" : "Copy Plain Text"}</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 transition-all shadow-lg hover:shadow-amber-400/20 active:scale-95"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Main Resume Paper Container */}
      <div className="max-w-4xl mx-auto">
        <ResumeDocument />
      </div>

      {/* Footer info (Hidden when printing) */}
      <div className="no-print text-center text-xs text-slate-500 mt-8">
        Live-synchronized document generated dynamically from portfolio system telemetry.
      </div>
    </div>
  );
}
