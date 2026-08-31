"use client";

import React from "react";
import { Activity, ShieldCheck, Zap, Code2, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon, LeetCodeIcon } from "@/components/icons/SocialIcons";
import { profileData } from "@/data/profile";

export function StatsSection() {
  const statsChannels = [
    {
      name: "GITHUB REPOSITORY",
      handle: "saurabhrawatgthb",
      tag: "SOURCE REPOSITORIES & COMMITS",
      url: profileData.socials.github,
      icon: GithubIcon,
      color: "border-gta-yellow text-gta-yellow",
      hoverBg: "hover:border-gta-yellow",
    },
    {
      name: "LEETCODE SOLVER",
      handle: "dugganboss",
      tag: "DATA STRUCTURES & ALGORITHMS",
      url: profileData.socials.leetcode,
      icon: LeetCodeIcon,
      color: "border-gta-pink text-gta-pink",
      hoverBg: "hover:border-gta-pink",
    },
    {
      name: "LINKEDIN NETWORK",
      handle: "Saurabh Rawat",
      tag: "PEER & TECHNICAL NETWORK",
      url: profileData.socials.linkedin,
      icon: LinkedinIcon,
      color: "border-gta-cyan text-gta-cyan",
      hoverBg: "hover:border-gta-cyan",
    },
    {
      name: "X (TWITTER) FEED",
      handle: "@SaurabhRawattt",
      tag: "TECH TRANSMISSIONS & UPDATES",
      url: profileData.socials.x,
      icon: XIcon,
      color: "border-white text-white",
      hoverBg: "hover:border-white",
    },
  ];

  return (
    <section id="stats" className="relative min-h-[70vh] w-full px-4 sm:px-8 md:px-16 py-24 text-white font-sans select-none">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-4 border-white pb-4 mb-10">
          <div>
            <div className="font-pricedown text-gta-cyan text-xl tracking-widest uppercase">
              LIVE PROFILE CHANNELS // VERIFIED BROADCAST
            </div>
            <h2 className="font-pricedown text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-none gta-text-outline">
              PLAYER STATS
            </h2>
          </div>
          <div className="bg-gta-cyan text-black px-4 py-2 rounded-2xl font-pricedown text-lg tracking-widest shadow-hard">
            4 ACTIVE TELEMETRY STREAMS
          </div>
        </div>

        {/* Profile Channels Grid in Crystal Glass */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsChannels.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-3xl ios-crystal-glass crystal-sheen-sweep p-6 ${item.hoverBg} transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl bg-black/60 border ${item.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-pricedown text-xs text-white/50 group-hover:text-white transition-colors">
                      CONNECT ↗
                    </span>
                  </div>

                  <h3 className="font-pricedown text-2xl text-white group-hover:text-gta-yellow transition-colors">
                    {item.name}
                  </h3>

                  <div className="font-mono text-sm text-gta-yellow font-bold mt-1">
                    {item.handle}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/15 text-xs font-mono text-white/70">
                  {item.tag}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
