"use client";

import React from "react";
import { getResumeData } from "@/data/resumeConfig";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/icons/SocialIcons";

interface ResumeDocumentProps {
  className?: string;
}

export function ResumeDocument({ className = "" }: ResumeDocumentProps) {
  const data = getResumeData();

  return (
    <div
      className={`bg-white text-slate-900 font-sans shadow-2xl rounded-sm p-5 sm:p-7 max-w-4xl mx-auto border border-slate-200 select-text print:shadow-none print:border-none print:p-0 print:m-0 print:max-w-none print:text-black ${className}`}
      id="resume-printable-doc"
    >
      {/* Recruiter-Grade Single-Page Print Stylesheet Hook */}
      <style jsx global>{`
        @media print {
          @page {
            margin: 5mm 7mm;
            size: A4 portrait;
          }
          body {
            background: #ffffff !important;
            color: #000000 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .no-print {
            display: none !important;
          }
          .page-break-inside-avoid {
            break-inside: avoid;
            page-break-inside: avoid;
          }
          a {
            text-decoration: none !important;
            color: inherit !important;
          }
        }
      `}</style>

      {/* 1. HEADER & CONTACT INFORMATION (ATS COMPLIANT) */}
      <header className="border-b-2 border-slate-950 pb-1.5 mb-2">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1">
          <div>
            <h1 className="text-2xl sm:text-[25px] font-black tracking-tight text-slate-950 uppercase font-sans leading-none">
              {data.name}
            </h1>
            <p className="text-[11px] font-bold text-slate-700 mt-1 tracking-wide">
              Computer Science &amp; Engineering Student • Aspiring Software Development Engineer (SDE)
            </p>
          </div>

          <div className="text-[10px] text-slate-600 sm:text-right font-medium leading-tight space-y-0.5">
            <div className="flex items-center sm:justify-end gap-2.5 flex-wrap">
              <span className="flex items-center gap-1">
                <Phone className="w-2.5 h-2.5 text-slate-700 shrink-0" />
                <a href={`tel:${data.phone.replace(/\s+/g, "")}`} className="hover:underline text-slate-950 font-mono font-bold">
                  {data.phone}
                </a>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-2.5 h-2.5 text-slate-700 shrink-0" />
                <a href={`mailto:${data.email}`} className="hover:underline text-slate-950 font-mono font-bold">
                  {data.email}
                </a>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5 text-slate-700 shrink-0" />
                <span>{data.location}</span>
              </span>
            </div>

            <div className="flex items-center sm:justify-end gap-2 text-slate-800 font-mono text-[10px] flex-wrap pt-0.5">
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black flex items-center gap-1 hover:underline font-bold"
              >
                <GithubIcon className="w-2.5 h-2.5" /> GitHub
              </a>
              <span>•</span>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black flex items-center gap-1 hover:underline font-bold"
              >
                <LinkedinIcon className="w-2.5 h-2.5" /> LinkedIn
              </a>
              <span>•</span>
              <a
                href={data.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black flex items-center gap-1 hover:underline font-bold"
              >
                <LeetCodeIcon className="w-2.5 h-2.5" /> LeetCode
              </a>
              <span>•</span>
              <a
                href={data.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black flex items-center gap-1 hover:underline font-bold"
              >
                <Globe className="w-2.5 h-2.5 text-slate-700" /> Portfolio
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 2. EDUCATION */}
      <section className="mb-2 page-break-inside-avoid">
        <h2 className="text-[10px] font-black uppercase tracking-widest text-slate-950 border-b border-slate-300 pb-0.5 mb-1 flex items-center justify-between">
          <span>EDUCATION</span>
          <span className="text-[8.5pt] font-mono text-slate-500 font-normal normal-case">Undergraduate Record</span>
        </h2>
        <div className="space-y-0.5 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-[11px]">
            <div>
              <span className="font-bold text-slate-950">{data.education[0]?.institution}</span>
              <span className="text-slate-800"> — {data.education[0]?.degree}</span>
              <span className="text-slate-900 font-bold ml-1.5 bg-slate-100 px-1 py-0.2 rounded border border-slate-200 text-[9.5px]">
                {data.education[0]?.details[0]}
              </span>
            </div>
            <div className="text-slate-600 font-mono text-[9.5px] shrink-0 font-semibold">
              {data.education[0]?.status}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-[9.5px] text-slate-700 pt-0.5">
            <div>
              <span className="font-semibold text-slate-900">{data.education[1]?.institution}</span>: {data.education[1]?.degree} ({data.education[1]?.details[0]})
            </div>
            <div>
              <span className="font-semibold text-slate-900">{data.education[2]?.institution}</span>: {data.education[2]?.degree} ({data.education[2]?.details[0]})
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SKILLS */}
      <section className="mb-2 page-break-inside-avoid">
        <h2 className="text-[10px] font-black uppercase tracking-widest text-slate-950 border-b border-slate-300 pb-0.5 mb-1">
          TECHNICAL SKILLS
        </h2>
        <div className="space-y-0.5 text-[10px]">
          {data.skillsByCategory.map((cat, idx) => (
            <div key={idx} className="flex gap-1.5 leading-tight">
              <span className="font-bold text-slate-950 shrink-0 w-32">
                {cat.category}:
              </span>
              <span className="text-slate-800">
                {cat.skills.join(", ")}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SOFTWARE ENGINEERING PROJECTS */}
      <section className="mb-2">
        <h2 className="text-[10px] font-black uppercase tracking-widest text-slate-950 border-b border-slate-300 pb-0.5 mb-1.5">
          SOFTWARE ENGINEERING PROJECTS
        </h2>
        <div className="space-y-1.5">
          {data.technicalProjects.map((proj, idx) => (
            <div key={idx} className="page-break-inside-avoid">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 leading-tight">
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <span className="font-bold text-slate-950 text-[11px]">
                    {proj.title}
                  </span>
                  <span className="text-[9.5px] text-slate-600 font-semibold italic">
                    — {proj.tagline}
                  </span>
                </div>
              </div>
              <ul className="list-disc list-outside ml-3.5 space-y-0.5 text-[9.5px] sm:text-[10px] text-slate-800 leading-snug mt-0.5">
                {proj.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 5. LEADERSHIP & ACHIEVEMENTS */}
      <section className="mb-0.5 page-break-inside-avoid">
        <h2 className="text-[10px] font-black uppercase tracking-widest text-slate-950 border-b border-slate-300 pb-0.5 mb-1">
          LEADERSHIP &amp; ACHIEVEMENTS
        </h2>
        <div className="space-y-1 text-[9.5px] sm:text-[10px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
            {data.leadership.map((lead, idx) => (
              <div key={idx} className="border-l-2 border-slate-900 pl-1.5 leading-snug">
                <div>
                  <span className="font-bold text-slate-950">{lead.organization}</span> — <span className="font-mono font-semibold text-slate-800">{lead.role}</span>
                </div>
                <div className="text-slate-600 text-[9px] italic">
                  Events: {lead.events}
                </div>
                <div className="text-slate-800 text-[9px] mt-0.5">
                  {lead.bullets[0]}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 pt-1 mt-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-0.5 text-[9px] sm:text-[9.5px]">
              {data.hackathons.map((hack, idx) => (
                <div key={idx} className="flex items-start gap-1 leading-snug">
                  <span className="text-slate-950 font-bold">•</span>
                  <div>
                    {hack.status ? (
                      <span className="font-bold text-slate-950 bg-slate-100 px-1 py-0.2 rounded mr-1 border border-slate-200 text-[8.5px]">
                        {hack.status}
                      </span>
                    ) : null}
                    <span className="font-bold text-slate-950">{hack.title}</span>
                    <span className="text-slate-700"> — {hack.description || hack.organisation}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
