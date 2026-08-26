"use client";

import React, { useState } from "react";
import { Radio, Mail, Send, CheckCircle2, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon, LeetCodeIcon } from "@/components/icons/SocialIcons";
import { profileData } from "@/data/profile";
import { sounds } from "@/components/sound/SoundEngine";

export function Chapter09Contact() {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [isTransmitted, setIsTransmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !message.trim()) return;

    sounds.playPowerOn();
    setIsTransmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profileData.socials.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: senderName.trim(),
          email: senderEmail.trim() || "No return email specified",
          message: message.trim(),
          _subject: `🚨 Portfolio Transmission from ${senderName.trim()}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        sounds.playAccessGranted();
        setIsTransmitting(false);
        setIsTransmitted(true);
        setSenderName("");
        setSenderEmail("");
        setMessage("");
      } else {
        sounds.playGlitch();
        setIsTransmitting(false);
        setErrorMessage("TRANSMISSION ERROR: Payload delivery failed. Re-try or use direct mail protocol.");
      }
    } catch {
      sounds.playGlitch();
      setIsTransmitting(false);
      setErrorMessage("NETWORK ANOMALY: Check uplink connection or dispatch via direct mail.");
    }
  };

  return (
    <section className="relative min-h-screen w-full px-4 py-20 sm:px-8 font-mono">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-term-green/30 pb-3">
          <div className="flex items-center gap-2 text-sm font-bold text-term-greenBright glow-green-sm">
            <Radio className="h-5 w-5 animate-pulse" />
            <span>09 // SIGNAL_TERMINAL.tx</span>
          </div>
          <span className="text-xs text-archive-muted">TRANSMISSION FREQUENCY: 142.850 MHz</span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left: External Signal Links & Profiles */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border-2 border-term-green/40 bg-crt-black p-6 shadow-term-green">
              <div className="text-[10px] uppercase text-archive-muted tracking-wider mb-2">
                VERIFIED COMMUNICATION CHANNELS
              </div>
              <h3 className="text-lg font-bold text-archive-paper">
                BROADCAST COORDINATES
              </h3>
              <p className="mt-1 text-xs text-archive-text font-sans">
                Open communication pipes for engineering inquiries, technical collaboration, systems building, or research.
              </p>

              <div className="mt-6 space-y-2.5">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="EXT_GITHUB"
                  className="flex items-center justify-between border border-term-green/30 bg-crt-surface p-3 transition-colors hover:border-term-greenBright hover:bg-term-green/10"
                >
                  <div className="flex items-center gap-2.5 text-xs text-archive-paper">
                    <GithubIcon className="h-4 w-4 text-term-green" />
                    <span>GITHUB // saurabhrawatgthb</span>
                  </div>
                  <span className="text-[10px] text-term-green">OPEN ↗</span>
                </a>

                <a
                  href={profileData.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="EXT_LEETCODE"
                  className="flex items-center justify-between border border-term-green/30 bg-crt-surface p-3 transition-colors hover:border-term-amber hover:bg-term-amber/10"
                >
                  <div className="flex items-center gap-2.5 text-xs text-archive-paper">
                    <LeetCodeIcon className="h-4 w-4 text-term-amber" />
                    <span>LEETCODE // dugganboss</span>
                  </div>
                  <span className="text-[10px] text-term-amber">OPEN ↗</span>
                </a>

                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="EXT_LINKEDIN"
                  className="flex items-center justify-between border border-term-green/30 bg-crt-surface p-3 transition-colors hover:border-term-cyan hover:bg-term-cyan/10"
                >
                  <div className="flex items-center gap-2.5 text-xs text-archive-paper">
                    <LinkedinIcon className="h-4 w-4 text-term-cyan" />
                    <span>LINKEDIN // Saurabh Rawat</span>
                  </div>
                  <span className="text-[10px] text-term-cyan">OPEN ↗</span>
                </a>

                <a
                  href={profileData.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="EXT_TWITTER"
                  className="flex items-center justify-between border border-term-green/30 bg-crt-surface p-3 transition-colors hover:border-archive-paper hover:bg-archive-darkMuted/20"
                >
                  <div className="flex items-center gap-2.5 text-xs text-archive-paper">
                    <XIcon className="h-4 w-4 text-archive-paper" />
                    <span>X // @SaurabhRawattt</span>
                  </div>
                  <span className="text-[10px] text-archive-paper">OPEN ↗</span>
                </a>

                <a
                  href={`mailto:${profileData.socials.email}`}
                  data-cursor="SEND_MAIL"
                  className="flex items-center justify-between border border-term-red/40 bg-crt-surface p-3 transition-colors hover:border-term-red hover:bg-term-red/10"
                >
                  <div className="flex items-center gap-2.5 text-xs text-archive-paper">
                    <Mail className="h-4 w-4 text-term-red" />
                    <span>EMAIL // DIRECT PIPE</span>
                  </div>
                  <span className="text-[10px] text-term-red">CONNECT ↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Interactive Signal Transmitter Form */}
          <div className="lg:col-span-7">
            <div className="border-2 border-term-green/40 bg-crt-black p-6 sm:p-8 shadow-term-green">
              <div className="flex items-center justify-between border-b border-term-green/30 pb-3">
                <div className="text-xs font-bold text-term-greenBright glow-green-sm flex items-center gap-2">
                  <Terminal className="h-4 w-4" />
                  <span>TRANSMIT PACKET DIRECT TO SAURABH</span>
                </div>
                <span className="text-[10px] text-archive-muted">ENCRYPTED PROTOCOL</span>
              </div>

              {isTransmitted ? (
                <div className="my-10 border border-term-green/60 bg-term-green/10 p-6 text-center space-y-3 animate-pulse">
                  <CheckCircle2 className="mx-auto h-8 w-8 text-term-greenBright" />
                  <div className="text-sm font-bold text-term-greenBright glow-green-sm">
                    SIGNAL PACKET SUCCESSFULLY DISPATCHED
                  </div>
                  <p className="text-xs text-archive-text">
                    Transmission logged into operator buffer. Saurabh will review your signal shortly.
                  </p>
                  <button
                    onClick={() => setIsTransmitted(false)}
                    data-cursor="NEW_SIGNAL"
                    className="border border-term-green px-4 py-1.5 text-xs font-bold text-term-green hover:bg-term-green hover:text-crt-black transition-colors"
                  >
                    TRANSMIT ANOTHER SIGNAL
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs">
                  <div>
                    <label className="block text-[10px] text-archive-muted uppercase mb-1">
                      OPERATOR CODENAME / YOUR NAME:
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Lead Engineer / Recruiter / Collaborator"
                      className="w-full border border-term-green/30 bg-crt-surface p-2.5 text-xs text-archive-paper outline-none focus:border-term-green focus:ring-1 focus:ring-term-green placeholder:text-archive-darkMuted font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-archive-muted uppercase mb-1">
                      RETURN SIGNAL CHANNEL / EMAIL (OPTIONAL):
                    </label>
                    <input
                      type="email"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="your.email@organization.com"
                      className="w-full border border-term-green/30 bg-crt-surface p-2.5 text-xs text-archive-paper outline-none focus:border-term-green focus:ring-1 focus:ring-term-green placeholder:text-archive-darkMuted font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-archive-muted uppercase mb-1">
                      TRANSMISSION PAYLOAD / MESSAGE:
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your transmission regarding projects, technical collaborations, or engineering inquiries..."
                      className="w-full border border-term-green/30 bg-crt-surface p-2.5 text-xs text-archive-paper outline-none focus:border-term-green focus:ring-1 focus:ring-term-green placeholder:text-archive-darkMuted font-sans"
                    />
                  </div>

                  {errorMessage && (
                    <div className="border border-term-red/60 bg-term-red/10 p-2.5 text-xs text-term-red">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isTransmitting}
                    data-cursor="DISPATCH_SIGNAL"
                    className="w-full flex items-center justify-center gap-2 border-2 border-term-greenBright bg-term-green/20 py-3 text-xs font-bold text-term-greenBright hover:bg-term-green hover:text-crt-black transition-all disabled:opacity-50"
                  >
                    {isTransmitting ? (
                      <span>ENCRYPTING & DISPATCHING PACKET...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>[ INITIATE SIGNAL TRANSMISSION ]</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
