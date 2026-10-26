"use client";

import React from "react";
import { getResumeData } from "@/data/resumeConfig";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon, XIcon } from "@/components/icons/SocialIcons";

interface ResumeDocumentProps {
  className?: string;
}

export function ResumeDocument({ className = "" }: ResumeDocumentProps) {
  const data = getResumeData();

  return (
    <div
      className={`bg-white text-slate-900 font-sans shadow-2xl rounded-sm p-6 sm:p-9 max-w-4xl mx-auto border border-slate-200 select-text print:shadow-none print:border-none print:p-0 print:m-0 print:max-w-none print:text-black ${className}`}
      id="resume-printable-doc"
    >
      {/* Recruiter-Grade Print Stylesheet Hook */}
      <style jsx global>{`
        @media print {
          @page {
            margin: 7mm 9mm;
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

      {/* HEADER & CONTACT INFORMATION (OPTIMIZED FOR RECRUITERS & ATS) */}
      <header className="border-b-2 border-slate-900 pb-2.5 mb-3">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 uppercase font-sans leading-none">
              {data.name}
            </h1>
            <p className="text-xs sm:text-sm font-bold text-slate-700 mt-1 tracking-wide">
              {data.title} • {data.institution}
            </p>
          </div>

          <div className="text-[11px] sm:text-xs text-slate-600 sm:text-right font-medium leading-tight space-y-0.5">
            <div className="flex items-center sm:justify-end gap-3 flex-wrap">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-slate-700 shrink-0" />
                <a href={`tel:${data.phone.replace(/\s+/g, "")}`} className="hover:underline text-slate-900 font-mono font-semibold">
                  {data.phone}
                </a>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-slate-700 shrink-0" />
                <a href={`mailto:${data.email}`} className="hover:underline text-slate-900 font-mono font-semibold">
                  {data.email}
                </a>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-700 shrink-0" />
                <span>{data.location}</span>
              </span>
            </div>

            <div className="flex items-center sm:justify-end gap-2 text-slate-700 font-mono text-[11px] flex-wrap pt-0.5">
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black flex items-center gap-1 hover:underline font-bold"
              >
                <GithubIcon className="w-3 h-3" /> GitHub
              </a>
              <span>•</span>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black flex items-center gap-1 hover:underline font-bold"
              >
                <LinkedinIcon className="w-3 h-3" /> LinkedIn
              </a>
              <span>•</span>
              <a
                href={data.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black flex items-center gap-1 hover:underline font-bold"
              >
                <LeetCodeIcon className="w-3 h-3" /> LeetCode
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* EDUCATION */}
      <section className="mb-2.5 page-break-inside-avoid">
        <h2 className="text-[11px] font-extrabold uppercase tracking-widest text-slate-950 border-b border-slate-300 pb-0.5 mb-1.5 flex items-center justify-between">
          <span>EDUCATION</span>
          <span className="text-[9px] font-mono text-slate-500 font-normal normal-case">Undergraduate Record</span>
        </h2>
        <div className="space-y-1 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
            <div>
              <span className="font-bold text-slate-950">{data.education[0]?.institution}</span>
              <span className="text-slate-800"> — {data.education[0]?.degree}</span>
              <div className="text-slate-700 font-semibold text-[11px]">
                {data.education[0]?.details.join(" • ")}
              </div>
            </div>
            <div className="text-slate-600 font-mono text-[11px] shrink-0 font-medium">
              {data.education[0]?.status}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-[11px] text-slate-700 pt-0.5 border-t border-slate-100">
            <div>
              <span className="font-semibold text-slate-900">{data.education[1]?.institution}</span>: {data.education[1]?.degree} ({data.education[1]?.details[0]})
            </div>
            <div>
              <span className="font-semibold text-slate-900">{data.education[2]?.institution}</span>: {data.education[2]?.degree} ({data.education[2]?.details[0]})
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL COMPETENCIES / SKILLS */}
      <section className="mb-2.5 page-break-inside-avoid">
        <h2 className="text-[11px] font-extrabold uppercase tracking-widest text-slate-950 border-b border-slate-300 pb-0.5 mb-1.5">
          TECHNICAL SKILLS
        </h2>
        <div className="space-y-0.5 text-xs">
          {data.skillsByCategory.map((cat, idx) => (
            <div key={idx} className="flex gap-1.5 text-[11px] leading-tight">
              <span className="font-bold text-slate-950 shrink-0 w-36">
                {cat.category}:
              </span>
              <span className="text-slate-800">
                {cat.skills.join(", ")}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNICAL EXPERIENCE / PROJECTS */}
      <section className="mb-2.5">
        <h2 className="text-[11px] font-extrabold uppercase tracking-widest text-slate-950 border-b border-slate-300 pb-0.5 mb-2">
          TECHNICAL EXPERIENCE &amp; PROJECTS
        </h2>
        <div className="space-y-2">
          {data.technicalProjects.map((proj, idx) => (
            <div key={idx} className="page-break-inside-avoid">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <span className="font-bold text-slate-950 text-xs sm:text-[13px]">
                    {proj.title}
                  </span>
                  <span className="text-[11px] text-slate-600 font-semibold italic">
                    — {proj.tagline}
                  </span>
                </div>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-0.5 text-[11px] text-slate-800 leading-snug mt-0.5">
                {proj.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* MANAGEMENT & LEADERSHIP EXPERIENCE */}
      <section className="mb-2.5 page-break-inside-avoid">
        <h2 className="text-[11px] font-extrabold uppercase tracking-widest text-slate-950 border-b border-slate-300 pb-0.5 mb-2">
          MANAGEMENT &amp; LEADERSHIP EXPERIENCE
        </h2>
        <div className="space-y-2">
          {data.leadership.map((lead, idx) => (
            <div key={idx} className="page-break-inside-avoid border-l-2 border-slate-800 pl-2.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <span className="font-bold text-slate-950 text-xs sm:text-[13px]">{lead.organization}</span>
                <span className="text-[11px] font-mono font-bold text-slate-800">{lead.role}</span>
              </div>
              <div className="text-slate-600 text-[11px] font-medium italic mb-0.5">
                Key Initiatives: {lead.events}
              </div>
              <ul className="list-disc list-outside ml-3.5 space-y-0.5 text-[11px] text-slate-800 leading-snug">
                {lead.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* HACKATHON ACHIEVEMENTS */}
      <section className="mb-1 page-break-inside-avoid">
        <h2 className="text-[11px] font-extrabold uppercase tracking-widest text-slate-950 border-b border-slate-300 pb-0.5 mb-1.5">
          HACKATHON ACHIEVEMENTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-[11px]">
          {data.hackathons.map((hack, idx) => (
            <div key={idx} className="flex items-start gap-1.5 leading-snug">
              <span className="text-slate-950 font-bold">•</span>
              <div>
                {hack.status ? (
                  <span className="font-bold text-slate-950 bg-slate-100 px-1 py-0.2 rounded mr-1 border border-slate-200">
                    {hack.status}
                  </span>
                ) : null}
                <span className="font-bold text-slate-950">{hack.title}</span>
                <span className="text-slate-700"> — {hack.description || hack.organisation}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
