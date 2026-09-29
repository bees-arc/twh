"use client";

import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      author: "Babette",
      role: "Creative Director & Long-term Partner",
      location: "Oslo, Norway",
      quote:
        "Working together since 2022 has been one of the most rewarding collaborations. The speed, design depth, and relentless curiosity have made Theweb an essential partner across more than 90 projects for our Norwegian clients.",
      tag: "90+ Projects Collaborated",
    },
    {
      author: "Imagine Cup Global Panel",
      role: "Judge & Technical Mentors",
      location: "Microsoft World Finals",
      quote:
        "Habarala stood out because it tackled a real problem with great empathy and rigorous technical execution. The team proved that purpose-built technology from Sri Lanka can compete and inspire on the world stage.",
      tag: "Southeast Asia Champion",
    },
    {
      author: "Henrik S.",
      role: "Head of Product",
      location: "Bergen, Norway",
      quote:
        "Theweb doesn't just deliver mockups and leave. They challenge assumptions, refine UX flows, and deliver robust code that our engineers genuinely enjoy working with. Highly recommended.",
      tag: "SaaS & Web Architecture",
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative border-t border-slate-200 dark:border-white/[0.06] bg-white dark:bg-[#080a10] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 mb-3 uppercase tracking-wider">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Endorsed by collaborators across borders.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Real stories from partners in Norway, international competitions, and enterprise product teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div
              key={r.author}
              className="bg-slate-50 dark:bg-[#0e121f] rounded-3xl p-8 border border-slate-200 dark:border-white/[0.08] shadow-sm dark:shadow-none hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 dark:text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-slate-300 dark:text-white/10 mb-4" />

                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6 italic">
                  &quot;{r.quote}&quot;
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/80 dark:border-white/[0.06]">
                <div className="font-bold text-slate-900 dark:text-white text-base">{r.author}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{r.role}</div>
                <div className="text-[11px] font-mono text-purple-600 dark:text-purple-400 mt-1">{r.location} • {r.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
