"use client";

import { useState } from "react";
import { ArrowRight, Play, X } from "lucide-react";

export default function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-between overflow-hidden bg-black"
    >
      {/* Background Image: Recreated Ocean & Glowing TW Rock */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-[center_right] transition-transform duration-1000 scale-105"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Atmospheric Overlays for Depth and Contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#03060c]/90 via-[#03060c]/55 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-[#04070e]/40 pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow Tagline */}
          <div className="mb-5 sm:mb-6">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300 drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]">
              MODERN WEBSITES &nbsp;/&nbsp; SMART SOLUTIONS &nbsp;/&nbsp; GLOBAL REACH
            </span>
          </div>

          {/* Main Headline matching reference */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight leading-[1.05] text-white uppercase mb-6 sm:mb-8">
            <span className="block drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              TURN YOUR
            </span>
            <span className="block drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              IDEAS INTO
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-sky-400 drop-shadow-[0_0_35px_rgba(6,182,212,0.85)]">
              POWERFUL
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 drop-shadow-[0_0_40px_rgba(6,182,212,0.9)]">
              WEBSITES
            </span>
          </h1>

          {/* Subtitle Description */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl mb-9 sm:mb-11 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            We build modern, high-performance websites and digital solutions that help businesses grow, get noticed and reach the world.
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-6 mb-16 sm:mb-20">
            {/* Primary Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400 text-slate-950 hover:opacity-95 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.65)] hover:shadow-[0_0_45px_rgba(6,182,212,0.9)] group cursor-pointer"
            >
              <span>GET STARTED</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Secondary Button: WATCH OUR WORK */}
            <button
              onClick={() => setVideoModalOpen(true)}
              className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-200 hover:text-white group cursor-pointer"
            >
              <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-cyan-950/60 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:border-cyan-300 group-hover:bg-cyan-900/60 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all">
                <Play className="w-4 h-4 fill-cyan-300 translate-x-0.5" />
              </span>
              <span className="border-b border-transparent group-hover:border-cyan-400 transition-colors">
                WATCH OUR WORK
              </span>
            </button>
          </div>
        </div>

        {/* Scroll Down Indicator matching reference */}
        <div className="pt-4 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)] animate-pulse" />
            <span className="w-8 h-[1px] bg-gradient-to-r from-cyan-400/60 to-transparent" />
          </div>
          <a
            href="#work"
            className="text-[10px] sm:text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-slate-400 hover:text-cyan-300 transition-colors"
          >
            SCROLL DOWN
          </a>
        </div>
      </div>

      {/* Video / Reel Showcase Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in">
          <div className="relative w-full max-w-4xl glass-panel rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.2)]">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-slate-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
                Agency Reel & Case Showcase
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Theweb Agency — Work in Motion
              </h3>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-white/[0.1] flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Play className="w-7 h-7 fill-cyan-400 translate-x-0.5" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">
                  Selected Work & Interactive Highlights
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mb-4">
                  From Habarala (Microsoft Imagine Cup World Finalist) to 90+ Norwegian enterprise deployments.
                </p>
                <a
                  href="#work"
                  onClick={() => setVideoModalOpen(false)}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold bg-cyan-400 text-slate-950"
                >
                  <span>Explore Case Studies Below</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
