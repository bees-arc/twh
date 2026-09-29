"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Award, Quote, X, Mail } from "lucide-react";

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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/[0.15] bg-gradient-to-br from-blue-100 dark:from-blue-900/40 via-purple-100 dark:via-purple-900/20 to-slate-200 dark:to-slate-900 shadow-lg flex items-center justify-center group mb-6">
                <div className="text-center p-6">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-3xl font-bold text-blue-600 dark:text-white mb-3">
                    TW
                  </div>
                  <span className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase tracking-widest block font-semibold">
                    Theweb Founder
                  </span>
                  <span className="text-[11px] text-blue-600 dark:text-blue-400 block mt-1">
                    Imagine Cup World Finalist
                  </span>
                </div>
              </div>

              {/* Accreditations */}
              <div className="space-y-2 w-full max-w-xs">
                <div className="flex items-center gap-2 text-xs text-slate-800 dark:text-slate-300 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] p-2.5 rounded-xl">
                  <Award className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0" />
                  <span>Microsoft Imagine Cup SEA Champion</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-800 dark:text-slate-300 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] p-2.5 rounded-xl">
                  <Award className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>90+ International Deployments</span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7">
              <Quote className="w-10 h-10 text-blue-600/20 dark:text-blue-400/30 mb-4" />

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                &quot;The tools continue to change. The curiosity stays the same.&quot;
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Theweb began not in a corporate boardroom, but out of genuine fascination for what happens when thoughtful design meets purposeful engineering. From building early hackathon concepts in Sri Lanka to representing the nation as a Southeast Asia Champion and World Finalist in the Microsoft Imagine Cup, the goal was always clarity over novelty.
              </p>

              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
                Later, partnering with Babette on Norwegian enterprise platforms taught us that world-class digital work can originate from anywhere when grounded in empathy, transparent communication, and relentless craft.
              </p>

              {/* Actions & Read More Trigger */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-slate-900 text-white dark:bg-white dark:text-black hover:opacity-90 transition-all cursor-pointer shadow-md"
                >
                  <span>Read Full Founder Story</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/[0.1] transition-all"
                >
                  <span>Connect Directly</span>
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

            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 uppercase tracking-wider">
              The Founder Narrative
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-4 mb-2">
              From Sri Lanka to Norway & Beyond
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              How curiosity, community, and purpose gave birth to Theweb Agency.
            </p>

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
