"use client";

import React, { useState } from "react";
import { Radio, Mail, Send, CheckCircle2, Zap } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon, LeetCodeIcon } from "@/components/icons/SocialIcons";
import { profileData } from "@/data/profile";
import { sounds } from "@/components/sound/SoundEngine";

export function SignalContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lastSentTime, setLastSentTime] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot.trim().length > 0) {
      setIsSent(true);
      return;
    }

    const cleanName = name.trim().slice(0, 100);
    const cleanEmail = email.trim().slice(0, 120);
    const cleanMessage = message.trim().slice(0, 2500);

    if (!cleanName || !cleanMessage) {
      setErrorMessage("Please complete all required fields.");
      return;
    }

    if (cleanEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setErrorMessage("Please provide a valid return email address or leave it blank.");
      return;
    }

    const now = Date.now();
    if (now - lastSentTime < 20000) {
      const waitSec = Math.ceil((20000 - (now - lastSentTime)) / 1000);
      setErrorMessage(`Rate limit: Transmission pipeline cooling down. Please wait ${waitSec}s.`);
      return;
    }

    sounds.playPowerOn();
    setIsSending(true);
    setErrorMessage(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profileData.socials.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail || "No return email specified",
          message: cleanMessage,
          _subject: `🚨 Portfolio Transmission from ${cleanName}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        sounds.playAccessGranted();
        setIsSending(false);
        setIsSent(true);
        setLastSentTime(Date.now());
        setName("");
        setEmail("");
        setMessage("");
      } else {
        sounds.playGlitch();
        setIsSending(false);
        setErrorMessage("Transmission could not be delivered. Please try again or use direct email.");
      }
    } catch {
      sounds.playGlitch();
      setIsSending(false);
      setErrorMessage("Network error occurred. Please try again or reach out via direct email.");
    }
  };

  return (
    <section id="contact" className="relative min-h-screen w-full px-4 sm:px-8 md:px-16 py-24 bg-gta-dark text-white font-sans select-none">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-4 border-white pb-4 mb-10">
          <div>
            <div className="font-pricedown text-gta-cyan text-xl tracking-widest uppercase">
              TRANSMISSION FREQUENCY // OPEN COMMS
            </div>
            <h2 className="font-pricedown text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-none gta-text-outline">
              SIGNAL & TRANSMISSION
            </h2>
          </div>
          <div className="bg-gta-cyan text-black font-pricedown px-4 py-2 text-lg tracking-widest shadow-hard">
            DIRECT PIPE OPEN
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Social Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gta-cardDark border-4 border-gta-cyan p-6 md:p-8 shadow-hard">
              <div className="font-pricedown text-sm text-gta-cyan tracking-widest mb-2 uppercase">
                VERIFIED TARGET CHANNELS
              </div>
              <h3 className="font-pricedown text-3xl text-white mb-2">
                BROADCAST CODES
              </h3>
              <p className="text-sm text-white/80 font-sans mb-6">
                Direct channels for engineering recruitment, technical collaboration, system architectures, or AI research.
              </p>

              <div className="space-y-3">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-black border-2 border-white/20 p-4 font-pricedown text-base tracking-wider hover:border-gta-yellow hover:text-gta-yellow transition-all shadow-hard"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="h-5 w-5 text-gta-yellow" />
                    <span>GITHUB // saurabhrawatgthb</span>
                  </div>
                  <span className="text-xs">↗</span>
                </a>

                <a
                  href={profileData.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-black border-2 border-white/20 p-4 font-pricedown text-base tracking-wider hover:border-gta-pink hover:text-gta-pink transition-all shadow-hard"
                >
                  <div className="flex items-center gap-3">
                    <LeetCodeIcon className="h-5 w-5 text-gta-pink" />
                    <span>LEETCODE // dugganboss</span>
                  </div>
                  <span className="text-xs">↗</span>
                </a>

                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-black border-2 border-white/20 p-4 font-pricedown text-base tracking-wider hover:border-gta-cyan hover:text-gta-cyan transition-all shadow-hard"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="h-5 w-5 text-gta-cyan" />
                    <span>LINKEDIN // Saurabh Rawat</span>
                  </div>
                  <span className="text-xs">↗</span>
                </a>

                <a
                  href={profileData.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-black border-2 border-white/20 p-4 font-pricedown text-base tracking-wider hover:border-white hover:text-white transition-all shadow-hard"
                >
                  <div className="flex items-center gap-3">
                    <XIcon className="h-5 w-5 text-white" />
                    <span>X // @SaurabhRawattt</span>
                  </div>
                  <span className="text-xs">↗</span>
                </a>

                <a
                  href={`mailto:${profileData.socials.email}`}
                  className="flex items-center justify-between bg-black border-2 border-gta-red/60 p-4 font-pricedown text-base tracking-wider text-gta-red hover:bg-gta-red hover:text-white transition-all shadow-hard"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    <span>EMAIL // DIRECT PIPE</span>
                  </div>
                  <span className="text-xs">SEND ↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Mission Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="bg-gta-cardDark border-4 border-gta-pink p-6 md:p-8 shadow-hard">
              <div className="border-b-2 border-white/10 pb-4 mb-6">
                <div className="font-pricedown text-xs text-gta-pink tracking-widest uppercase">
                  DIRECT MISSION TRANSMITTER
                </div>
                <h3 className="font-pricedown text-3xl text-white gta-text-outline">
                  DISPATCH PACKET TO SAURABH
                </h3>
              </div>

              {isSent ? (
                <div className="bg-black border-2 border-gta-yellow p-8 text-center space-y-4 my-8 shadow-hard">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-gta-yellow animate-bounce" />
                  <div className="font-pricedown text-2xl text-gta-yellow tracking-wider">
                    TRANSMISSION DISPATCHED TO SAURABH
                  </div>
                  <p className="text-sm text-white/80 font-sans">
                    Your packet has been successfully queued. Saurabh will respond shortly.
                  </p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="bg-white text-black font-pricedown px-6 py-2 tracking-widest text-sm hover:bg-gta-yellow transition-all shadow-hard"
                  >
                    SEND ANOTHER PACKET
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Anti-bot Honeypot field */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="_security_trap"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block font-pricedown text-xs tracking-widest text-white/70 mb-2 uppercase">
                      OPERATOR / YOUR IDENTITY:
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Lead Engineer / Recruiter"
                      className="w-full bg-black border-2 border-white/20 p-3 text-sm text-white font-sans focus:border-gta-pink outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-pricedown text-xs tracking-widest text-white/70 mb-2 uppercase">
                      RETURN SIGNAL CHANNEL / EMAIL (OPTIONAL):
                    </label>
                    <input
                      type="email"
                      maxLength={120}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@organization.com"
                      className="w-full bg-black border-2 border-white/20 p-3 text-sm text-white font-sans focus:border-gta-pink outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-pricedown text-xs tracking-widest text-white/70 mb-2 uppercase">
                      MISSION PAYLOAD / MESSAGE:
                    </label>
                    <textarea
                      required
                      rows={4}
                      maxLength={2500}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Transmission regarding systems engineering, full-stack roles, or project collaborations..."
                      className="w-full bg-black border-2 border-white/20 p-3 text-sm text-white font-sans focus:border-gta-pink outline-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="bg-red-500/20 border-2 border-red-500 p-3 text-xs text-red-200 font-sans">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-gta-hotPink hover:bg-white text-white hover:text-black py-4 font-pricedown text-lg tracking-widest transition-all shadow-hard-pink disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSending ? (
                      <span>DISPATCHING TRANSMISSION...</span>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>DISPATCH MISSION PACKET</span>
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
