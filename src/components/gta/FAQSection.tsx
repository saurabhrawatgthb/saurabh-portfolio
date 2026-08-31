"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { sounds } from "@/components/sound/SoundEngine";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Who is Saurabh Rawat?",
      answer:
        "Saurabh Rawat is a Computer Science & Engineering student at Graphic Era Hill University currently pursuing his B.Tech. He maintains a 9+ CGPA across his 1st and 2nd years and is an active builder, hackathon finalist, and technical community member.",
    },
    {
      question: "What is his academic background?",
      answer:
        "He is currently pursuing B.Tech in Computer Science & Engineering at Graphic Era Hill University (9+ CGPA in both 1st and 2nd Year). He previously secured 94% in ICSE High School and 89% in ISC Intermediate.",
    },
    {
      question: "What technical organisations and events is he involved with?",
      answer:
        "Saurabh is a Member of IEEE Student Branch (GEHU), TBI (Technology Business Incubator, GEU), and TDH (The Designnovation Hub, GEU). He served on the Organising & Management Committee for SAARTHI'25 (24-hr national hackathon), the Management Committee for GRAPH-E-THON 2.0 & 3.0, and as an Active Contributor & Volunteer for TechnIEEEks'25, TechnIEEEks'26, and the CISCT International Conference.",
    },
    {
      question: "What are his hackathon achievements?",
      answer:
        "He is a Finalist in PRAXIS 2.0 (Google Developer Groups), Semifinalist in Economic Times X GenAI Hackathon, Finalist in Neural Nexus AI/ML Challenge (Grafest 2026), and selected participant in Hack for Green Bharat, Innovate by NSUT'26, Hack The Winter, and Innovate4FinLit.",
    },
    {
      question: "What projects has he built?",
      answer:
        "Key projects include RAKSHAK (distributed computer-vision and trajectory prediction for missing child alerts), UNICARD (universal smart identity & financial transaction card architecture), Pothole Detection & Road Telemetry (edge computer vision system), University Lending Platform (Java backend asset request engine), and a Real-Time Assessment Quiz Platform (concurrent WebSocket architecture).",
    },
    {
      question: "How can I contact him?",
      answer:
        "You can call directly at +91 6395982464, transmit a message via the Contact section, or connect on GitHub (saurabhrawatgthb), LinkedIn (Saurabh Rawat), LeetCode (dugganboss), or X (@SaurabhRawattt).",
    },
  ];

  const handleToggle = (index: number) => {
    sounds.playKeyClick();
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative min-h-[80vh] w-full px-4 sm:px-8 md:px-16 py-24 text-white font-sans select-none">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-4 border-white pb-4 mb-10">
          <div>
            <div className="font-pricedown text-gta-yellow text-xl tracking-widest uppercase">
              FREQUENTLY ASKED QUERIES // INTEL
            </div>
            <h2 className="font-pricedown text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-none gta-text-outline">
              FAQ
            </h2>
          </div>
          <div className="bg-gta-yellow text-black px-4 py-2 rounded-2xl font-pricedown text-lg tracking-widest shadow-hard">
            {faqs.length} QUERIES ANSWERED
          </div>
        </div>

        {/* Accordion Stack in Crystal Glass */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-3xl ios-crystal-glass overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/10 transition-colors group"
                >
                  <span className="font-pricedown text-xl sm:text-2xl text-white group-hover:text-gta-yellow transition-colors tracking-wide">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-6 w-6 text-gta-yellow transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-gta-pink" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/15 text-sm sm:text-base text-white/90 font-sans leading-relaxed font-medium animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
