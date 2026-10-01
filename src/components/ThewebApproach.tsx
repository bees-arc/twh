"use client";

import { HelpCircle, Compass, Eye, Wrench, RefreshCw } from "lucide-react";

export default function ThewebApproach() {
  const principles = [
    {
      num: "01",
      title: "Start with the why.",
      icon: HelpCircle,
      tag: "Purpose First",
      text: "Before thinking about screens, features or technology, the reason behind the project needs to be clear.",
      questions: ["Define the core problem", "Identify target users", "Clarify measurable outcomes"],
      accent: "text-blue-600 dark:text-blue-400",
    },
    {
      num: "02",
      title: "Explore before deciding.",
      icon: Compass,
      tag: "Divergence & Testing",
      text: "The first idea is rarely the final one. Different directions are explored, tested and challenged before settling on something worth building.",
      questions: ["Challenge assumptions early", "Prototype alternative journeys", "Validate with real user context"],
      accent: "text-purple-600 dark:text-purple-400",
    },
    {
      num: "03",
      title: "Make it understandable.",
      icon: Eye,
      tag: "Clarity Over Complexity",
      text: "Good design should make complicated things feel simple. From a website to a digital product, every interaction should have a reason to exist.",
      questions: ["Eliminate visual clutter", "Predictable mental models", "Purpose-driven micro-interactions"],
      accent: "text-cyan-600 dark:text-cyan-400",
    },
    {
      num: "04",
      title: "Use the right tools.",
      icon: Wrench,
      tag: "No Dogma",
      text: "There is no favourite technology for the sake of having one. WordPress, React, Next.js, AI, automation or something built from scratch, the tools depend on what the project actually needs.",
      questions: ["Engineered for longevity", "Cost-effective scalability", "Performance matched to need"],
      accent: "text-amber-600 dark:text-amber-400",
    },
    {
      num: "05",
      title: "Build, learn, improve.",
      icon: RefreshCw,
      tag: "Agile Evolution",
      text: "The first version doesn't have to be perfect. Launch something useful. See how people respond. Learn from it. Make it better. That mindset has shaped the work from the beginning, from early experiments and student projects to international digital products and businesses.",
      questions: ["Fast feedback loops", "Live telemetry over guesswork", "The curiosity stays the same"],
      accent: "text-emerald-600 dark:text-emerald-400",
    },
  ];

  return (
    <section id="approach" className="py-24 sm:py-32 relative border-t border-slate-200 dark:border-white/[0.06] bg-slate-50 dark:bg-[#07090e] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Narrative Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4 uppercase tracking-wider">
            Theweb Approach
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">
            There is no single way to build something.
          </h2>

          <div className="bg-white dark:bg-[#0e121f] p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/[0.08] shadow-sm dark:shadow-none text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 text-left">
            <p className="font-light">
              Some projects start with a clear idea. Some start with a problem. Some start with a rough sketch, a conversation, or simply a question: <span className="text-slate-900 dark:text-white font-medium italic">“Could this work?”</span>
            </p>
            <p className="text-slate-500 dark:text-slate-400">
              The approach stays flexible. The goal is not to force every project through the same process, but to find the right way forward. The process changes with every project. The curiosity stays the same.
            </p>
          </div>
        </div>

        {/* 5 Approach Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            const isLast = idx === principles.length - 1;
            return (
              <div
                key={p.num}
                className={`bg-white dark:bg-[#0e121f] rounded-3xl p-7 sm:p-8 flex flex-col justify-between border border-slate-200 dark:border-white/[0.08] shadow-sm dark:shadow-none transition-all duration-300 hover:shadow-lg dark:hover:border-white/20 ${
                  isLast ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                      Principle {p.num}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/[0.06]">
                      {p.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] ${p.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {p.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {p.text}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/[0.06] space-y-2">
                  {p.questions.map((q) => (
                    <div key={q} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className={`w-1.5 h-1.5 rounded-full ${p.accent}`} />
                      <span>{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
