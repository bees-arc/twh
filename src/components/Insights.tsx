"use client";

import { ArrowUpRight, Clock, BookOpen } from "lucide-react";

export default function Insights() {
  const articles = [
    {
      title: "The first version doesn't have to be perfect: The Build-Learn-Improve loop.",
      summary:
        "Launch something genuinely useful. See how people respond. Learn from it and refine. Why waiting for perfection is the biggest obstacle to user adoption.",
      date: "Spring 2026",
      readTime: "4 min read",
      category: "Product Mindset",
    },
    {
      title: "From Sri Lanka to Norway: What 90+ cross-border projects taught us.",
      summary:
        "Lessons in radical transparency, timezone orchestration, and Scandinavian design restraint while collaborating closely with Babette and Norwegian enterprises.",
      date: "Winter 2025",
      readTime: "6 min read",
      category: "Culture & Collaboration",
    },
    {
      title: "Start with the why: How Habarala made it to the Microsoft Imagine Cup World Stage.",
      summary:
        "Technology becomes less about what could be built and more about what could be solved. A reflection on designing for real-world agricultural communities.",
      date: "Retrospective",
      readTime: "5 min read",
      category: "Social Impact & AI",
    },
  ];

  return (
    <section id="insights" className="py-24 sm:py-32 relative border-t border-white/[0.06] bg-[#090b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3 uppercase tracking-wider">
              Insights & Perspectives
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Thinking out loud.
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm sm:text-base">
            Reflections on product engineering, cross-border design, and the evolving role of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item) => (
            <article
              key={item.title}
              className="glass-panel glass-panel-hover rounded-3xl p-8 border border-white/[0.08] flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Clock className="w-3 h-3" />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {item.summary}
                </p>
              </div>

              <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">{item.date}</span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:text-blue-300">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
