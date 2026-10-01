"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutIntro() {
  return (
    <section className="py-24 sm:py-36 relative border-t border-slate-200 dark:border-white/[0.06] bg-slate-50/50 dark:bg-[#08090d] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3 uppercase tracking-wider">
            About Theweb
          </div>

          {/* Heading with size matching About page */}
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Theweb started with a simple idea: <br />
            <span className="text-gradient-accent">technology should be useful.</span>
          </h2>

          {/* Description with size matching About page */}
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
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
