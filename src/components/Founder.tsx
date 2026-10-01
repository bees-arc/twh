"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Quote, X } from "lucide-react";

export default function Founder() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="founder" className="py-24 sm:py-32 relative border-t border-slate-200 dark:border-white/[0.06] bg-slate-50 dark:bg-[#090b12] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 mb-3 uppercase tracking-wider">
            Leadership & Vision
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Meet the Founder
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From university experiments in Sri Lanka to global stages and 90+ international projects.
          </p>
        </div>

        {/* Founder Card */}
        <div className="bg-white dark:bg-[#0e121f] rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-white/[0.08] shadow-sm dark:shadow-none relative overflow-hidden">
          <Quote className="absolute -top-3 -right-3 w-32 h-32 text-slate-100 dark:text-white/[0.02] pointer-events-none select-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Visual Column */}
            <div className="lg:col-span-5 flex flex-col justify-between items-center sm:items-start h-full">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] flex-1 min-h-[340px] sm:min-h-[380px] rounded-3xl overflow-hidden border border-slate-200 dark:border-white/[0.15] bg-slate-100 dark:bg-slate-900 shadow-xl group">
                <Image
                  src="/Croped.png"
                  alt="Ravindu Dananjith - Theweb Founder"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 280px, 320px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs font-mono text-white tracking-wider">
                    Ravindu Dananjith
                  </span>
                </div>
              </div>

              {/* Founder Identity - Aligned with buttons on the right */}
              <div className="text-center sm:text-left w-full max-w-[320px] pt-6">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Ravindu Dananjith
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-1 uppercase tracking-wider">
                  Founder &amp; UX Lead
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                    &quot;The tools continue to change. The curiosity stays the same.&quot;
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                    Theweb began not in a corporate boardroom, but out of genuine fascination for what happens when thoughtful design meets purposeful engineering. From building early hackathon concepts in Sri Lanka to representing the nation as a Southeast Asia Champion and World Finalist in the Microsoft Imagine Cup, the goal was always clarity over novelty.
                  </p>

                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                    Later, partnering with Babette on Norwegian enterprise platforms taught us that world-class digital work can originate from anywhere when grounded in empathy, transparent communication, and relentless craft.
                  </p>
                </div>
              </div>

              {/* Actions & Read More Trigger */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-6">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-slate-900 text-white dark:bg-white dark:text-black hover:opacity-90 transition-all cursor-pointer shadow-md"
                >
                  <span>Read Full Founder Story</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/[0.1] transition-all"
                >
                  <span>Connect Directly</span>
                </a>

                {/* LinkedIn Profile */}
                <a
                  href="https://www.linkedin.com/in/dananjith"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ravindu Dananjith on LinkedIn"
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full text-xs sm:text-sm font-medium text-[#0A66C2] dark:text-[#38BDF8] bg-blue-500/10 hover:bg-[#0A66C2] hover:text-white dark:bg-white/[0.05] dark:hover:bg-[#0A66C2] dark:hover:text-white border border-blue-500/20 dark:border-white/[0.1] transition-all duration-300 shadow-sm group"
                  title="Connect on LinkedIn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 transition-transform group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24" />
                  </svg>
                  <span className="font-semibold">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Story Detail Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in">
          <div className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-white dark:bg-[#0e121f] text-slate-900 dark:text-white rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-white/20 shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-white/[0.08] hover:bg-slate-200 dark:hover:bg-white/[0.15] text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6 pr-10">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/20 shrink-0 shadow-md">
                <Image
                  src="/Croped.png"
                  alt="Theweb Founder"
                  fill
                  className="object-cover object-top"
                  sizes="80px"
                />
              </div>
              <div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 uppercase tracking-wider">
                  The Founder Narrative
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  From Sri Lanka to Norway & Beyond
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  How curiosity, community, and purpose gave birth to Theweb Agency.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                In 2019, things started simply: experimenting with technology, design, and digital media in university hackathons and creative workshops. Every weekend brought a new experiment, whether an interactive prototype or a community initiative.
              </p>
              <p>
                By 2021, the focus sharpened into purpose-driven UX and product engineering. That focus crystallized into <strong>Habarala</strong> — an agritech platform solving real-world agricultural problems for smallholder farmers. The project gained international recognition, winning the Southeast Asia Region Championship and advancing as a World Finalist in the prestigious Microsoft Imagine Cup. It was the moment technology shifted from what <em>could</em> be built to what <em>should</em> be solved.
              </p>
              <p>
                In 2022, an internship under <strong>Babette</strong> marked the first step beyond Sri Lanka. What began as a short-term international opportunity grew into a deep long-term professional partnership. In fact, the name <em>“Theweb”</em> was originally given by Babette — an idea that was still taking shape.
              </p>
              <p>
                Over the next two years, that relationship expanded into over 90 digital design and development projects for Norwegian businesses across logistics, finance, health, and enterprise SaaS.
              </p>
              <p>
                In 2023, Theweb Agency was formally established. Today, we work with ambitious founders and established enterprises across the world, bringing the same core philosophy to every line of code and every pixel:
              </p>
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-900 dark:text-white font-medium italic">
                &quot;Technology should be useful. If it doesn&apos;t make life easier, faster, or more understandable for the person using it, it isn&apos;t finished yet.&quot;
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between">
              <button
                onClick={() => setModalOpen(false)}
                className="text-xs text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white cursor-pointer"
              >
                Close Story
              </button>
              <a
                href="/contact"
                onClick={() => setModalOpen(false)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-slate-900 text-white dark:bg-white dark:text-black hover:opacity-90"
              >
                <span>Let&apos;s Build Together</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
