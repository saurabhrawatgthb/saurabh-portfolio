"use client";

import React from "react";
import { getResumeData } from "@/data/resumeConfig";
import { Mail, MapPin, Phone, Globe, Code, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/icons/SocialIcons";

interface ResumeDocumentProps {
  className?: string;
}

export function ResumeDocument({ className = "" }: ResumeDocumentProps) {
  const data = getResumeData();

  return (
    <div
      className={`bg-white text-slate-900 font-sans shadow-2xl rounded-sm p-8 sm:p-12 max-w-4xl mx-auto border border-slate-200 select-text print:shadow-none print:border-none print:p-0 print:m-0 print:max-w-none print:text-black ${className}`}
      id="resume-printable-doc"
    >
      {/* Print Stylesheet Hook */}
      <style jsx global>{`
        @media print {
          @page {
            margin: 12mm 15mm;
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

      {/* HEADER & CONTACT INFORMATION (ATS VALIDATED) */}
      <header className="border-b-2 border-slate-900 pb-5 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 uppercase font-sans">
              {data.name}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-slate-700 mt-1 tracking-wide">
              {data.title}
            </p>
          </div>
          <div className="text-xs sm:text-sm text-slate-600 space-y-1 sm:text-right font-medium">
            <div className="flex items-center sm:justify-end gap-1.5">
              <Mail className="w-3.5 h-3.5 text-slate-700 shrink-0" />
              <a href={`mailto:${data.email}`} className="hover:underline text-slate-900 font-mono">
                {data.email}
              </a>
            </div>
            {data.phone && (
              <div className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                <span className="font-mono text-slate-900">{data.phone}</span>
              </div>
            )}
            <div className="flex items-center sm:justify-end gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-700 shrink-0" />
              <span>{data.location}</span>
            </div>
            <div className="flex items-center sm:justify-end gap-2.5 pt-1 text-slate-700 font-mono text-xs flex-wrap">
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black flex items-center gap-1 hover:underline"
              >
                <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <span>•</span>
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black flex items-center gap-1 hover:underline"
              >
                <GithubIcon className="w-3.5 h-3.5" /> GitHub
              </a>
              <span>•</span>
              <a
                href={data.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black flex items-center gap-1 hover:underline"
              >
                <Globe className="w-3.5 h-3.5" /> Portfolio
              </a>
              <span>•</span>
              <a
                href={data.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black flex items-center gap-1 hover:underline"
              >
                <LeetCodeIcon className="w-3.5 h-3.5" /> LeetCode
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* SUMMARY */}
      <section className="mb-6 page-break-inside-avoid">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Professional Summary
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed text-justify">
          {data.summary}
        </p>
      </section>

      {/* TECHNICAL SKILLS */}
      <section className="mb-6 page-break-inside-avoid">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
          Technical Competencies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs sm:text-[13px]">
          {data.skillsByCategory.map((cat, idx) => (
            <div key={idx} className="flex gap-2">
              <span className="font-bold text-slate-900 shrink-0">
                {cat.category}:
              </span>
              <span className="text-slate-700 leading-tight">
                {cat.skills.join(", ")}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* KEY PROJECTS */}
      <section className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-3">
          Key Engineering Projects
        </h2>
        <div className="space-y-4">
          {data.featuredProjects.slice(0, 4).map((proj, idx) => (
            <div key={idx} className="page-break-inside-avoid">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-950 text-sm">
                    {proj.title}
                  </span>
                  <span className="text-xs text-slate-500 font-medium italic">
                    — {proj.tagline}
                  </span>
                </div>
                {proj.metrics && (
                  <span className="text-[11px] font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 shrink-0">
                    {proj.metrics}
                  </span>
                )}
              </div>
              <div className="text-[11px] font-mono text-slate-600 mt-0.5 mb-1.5">
                Tech Stack: {proj.technologies.join(" • ")}
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-700 leading-relaxed">
                {proj.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE & LEADERSHIP */}
      <section className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-3">
          Experience & Technical Leadership
        </h2>
        <div className="space-y-4">
          {data.experience.map((exp, idx) => (
            <div key={idx} className="page-break-inside-avoid">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <span className="font-bold text-slate-950 text-sm">
                  {exp.role} <span className="text-slate-600 font-normal">| {exp.organization}</span>
                </span>
                <span className="text-xs font-mono font-medium text-slate-600">
                  {exp.period}
                </span>
              </div>
              <p className="text-xs text-slate-600 italic mt-0.5 mb-1.5">
                {exp.scope}
              </p>
              <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-700 leading-relaxed">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="mb-6 page-break-inside-avoid">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
          Education
        </h2>
        {data.education.map((edu, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-[13px]">
            <div>
              <span className="font-bold text-slate-950">{edu.degree}</span>
              <span className="text-slate-700"> — {edu.institution}</span>
            </div>
            <div className="text-slate-600 font-mono text-xs">
              {edu.period} ({edu.status})
            </div>
          </div>
        ))}
      </section>

      {/* RESEARCH & ACHIEVEMENTS */}
      <section className="page-break-inside-avoid">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
          Research & Honors
        </h2>
        <div className="space-y-2 text-xs text-slate-700">
          {data.research.map((res, idx) => (
            <div key={idx}>
              <div className="font-bold text-slate-900">
                {res.title}
              </div>
              <div className="text-[11px] text-slate-600 font-mono">
                Domain: {res.domain} • Status: {res.status}
              </div>
            </div>
          ))}
          <div className="pt-1.5 space-y-1.5">
            {data.achievements.slice(0, 3).map((ach, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <span className="text-slate-800">
                  <strong className="text-slate-950 font-semibold">• {ach.title}</strong> — {ach.organization}
                </span>
                <span className="text-slate-500 font-mono text-[11px] shrink-0">
                  {ach.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
