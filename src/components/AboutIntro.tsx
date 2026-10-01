"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutIntro() {
  return (
    <section className="py-24 sm:py-36 relative border-t border-slate-200 dark:border-white/[0.06] bg-slate-50/50 dark:bg-[#08090d] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-left">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-6 uppercase tracking-wider">
            About Theweb
          </div>

          {/* Heading with larger typography */}
          <h2 className="text-4xl sm:text-6xl md:text-[68px] font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 sm:mb-8 leading-[1.12]">
            Theweb started with a simple idea: <br />
            <span className="text-gradient-accent">technology should be useful.</span>
          </h2>

          {/* Description with larger, clear typography */}
          <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-2xl md:text-[22px] leading-relaxed mb-10 max-w-3xl">
            Theweb didn&apos;t begin with a business plan. It grew from years of exploring design, technology and the possibilities that come from bringing the two together.
          </p>
        </div>

        {/* Redirect Button aligned to the right */}
        <div className="flex justify-end pt-2">
          <Link
            href="/about"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-lg group cursor-pointer"
          >
            <span>Learn More About Us</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
