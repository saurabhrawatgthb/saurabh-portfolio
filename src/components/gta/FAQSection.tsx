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
        "Saurabh is a Computer Science Engineer and software builder pursuing his B.Tech at Graphic Era University. He specializes in designing robust, scalable systems spanning artificial intelligence, computer vision pipelines, IoT embedded hardware, and high-concurrency backend architectures.",
    },
    {
      question: "What technologies does Saurabh work with?",
      answer:
        "His core stack includes Python, C++, Java, JavaScript, TypeScript, Next.js (App Router), React 19, FastAPI, Node.js, PostgreSQL, SQLite, OpenCV, Face Recognition, Docker, Git/GitHub, and IoT microcontrollers.",
    },
    {
      question: "What projects has he built?",
      answer:
        "Major projects include RAKSHAK (an AI-powered camera network and trajectory prediction system for missing child alerts), UNICARD (a universal smart identity & payment hardware card concept), Pothole Detection & Road Telemetry (edge computer vision system), University Lending Platform (Java backend asset request workflow), and a Real-Time Assessment Quiz Platform (concurrent WebSocket architecture).",
    },
    {
      question: "What areas does he work in?",
      answer:
        "His primary focus areas are Artificial Intelligence & LLMs, Computer Vision & Geo-Spatial Mapping, High-Concurrency APIs, Distributed Software Pipelines, and Internet of Things (IoT) hardware prototyping.",
    },
    {
      question: "Is Saurabh available for collaboration?",
      answer:
        "Yes! Saurabh is actively open to impactful software engineering roles, systems building opportunities, open-source initiatives, and research collaborations.",
    },
    {
      question: "How can I contact him?",
      answer:
        "You can reach out directly using the transmission form in the Contact section, or connect via GitHub (saurabhrawatgthb), LinkedIn, LeetCode (dugganboss), or X (@SaurabhRawattt).",
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
