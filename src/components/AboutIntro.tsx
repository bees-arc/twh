"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutIntro() {
  return (
    <section
      id="about-intro"
      className="py-24 sm:py-36 relative border-t border-white/10 backdrop-blur-md bg-black/45 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 mb-4 uppercase tracking-wider backdrop-blur-sm">
            About Theweb
          </div>

          {/* Heading split into 4 parts with original text-gradient-accent color */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            <span className="block">Theweb started</span>
            <span className="block">with a simple idea:</span>
            <span className="block text-gradient-accent">technology</span>
            <span className="block text-gradient-accent">should be useful.</span>
          </h2>

          {/* Description */}
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8">
            Theweb didn&apos;t begin with a business plan. It grew from years of exploring design, technology and the possibilities that come from bringing the two together.
          </p>

          {/* Redirect Button aligned to the left side */}
          <div className="flex justify-start pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase bg-white text-slate-950 hover:bg-cyan-300 hover:text-black transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] group cursor-pointer"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
