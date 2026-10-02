"use client";

import { Sparkles } from "lucide-react";

interface PartnerItem {
  id: string;
  name: string;
  logo: string;
  bgType: "dark" | "light"; // "dark" = black bg, "light" = white bg
}

// Ordered strictly in alternating sequence: Black -> White -> Black -> White -> Black -> White -> Black
const partners: PartnerItem[] = [
  {
    id: "keeperspecialisten",
    name: "Keeperspecialisten",
    logo: "/Website/Partner%20logos/White%20Version.png",
    bgType: "dark", // 1. Black card (White logo)
  },
  {
    id: "muskelklinikken",
    name: "Muskelklinikken",
    logo: "/Website/Partner%20logos/mkb.svg",
    bgType: "light", // 2. White card (Dark logo)
  },
  {
    id: "ambuluwawa",
    name: "Ambuluwawa",
    logo: "/Website/Partner%20logos/White%20Logo.svg",
    bgType: "dark", // 3. Black card (White logo)
  },
  {
    id: "nihi",
    name: "NIHI",
    logo: "/Website/Partner%20logos/Logo%20(1).svg",
    bgType: "light", // 4. White card (Dark logo)
  },
  {
    id: "autoways",
    name: "Autoways",
    logo: "/Website/Partner%20logos/White%20version.svg",
    bgType: "dark", // 5. Black card (White logo)
  },
  {
    id: "zenoase",
    name: "Zenoase",
    logo: "/Website/Partner%20logos/Pale%20Taupe.svg",
    bgType: "light", // 6. White card (Dark logo)
  },
  {
    id: "creamy",
    name: "Creamy",
    logo: "/Website/Partner%20logos/Updted%20Creamy_1.svg",
    bgType: "dark", // 7. Black card (White/creamy logo)
  },
];

export default function Partners() {
  return (
    <section
      id="partners"
      className="py-20 sm:py-28 relative border-t border-slate-200 dark:border-white/[0.06] bg-slate-50 dark:bg-[#07080d] transition-colors duration-300 overflow-hidden"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[320px] bg-blue-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Partners & Collaborators</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Trusted by visionary teams worldwide.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Collaborating seamlessly across time zones, from Oslo to Colombo, delivering bespoke digital platforms and high-impact digital experiences.
          </p>
        </div>

        {/* Direct Partner Logos Grid - Alternating: Black -> White -> Black -> White -> Black -> White -> Black */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-5 items-stretch">
          {partners.map((partner) => {
            const isDarkCard = partner.bgType === "dark";

            return (
              <div
                key={partner.id}
                className={`group relative h-32 sm:h-36 rounded-2xl p-5 flex items-center justify-center transition-all duration-300 hover:-translate-y-1.5 cursor-default ${
                  isDarkCard
                    ? "bg-[#0b0e17] border border-white/10 shadow-lg shadow-black/25 hover:border-blue-400/50 hover:shadow-blue-500/10"
                    : "bg-white border border-slate-200/90 shadow-sm hover:border-blue-500/40 hover:shadow-xl"
                }`}
                title={partner.name}
              >
                {/* Logo Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 sm:max-h-14 w-auto max-w-[130px] object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>

        {/* Continuous Smooth Infinite Marquee Ticker */}
        <div className="relative mt-12 overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee gap-6 sm:gap-8 items-center">
            {[...partners, ...partners].map((partner, index) => {
              const isDarkCard = partner.bgType === "dark";

              return (
                <div
                  key={`marquee-${partner.id}-${index}`}
                  className={`h-20 sm:h-24 min-w-[160px] sm:min-w-[180px] rounded-xl px-6 flex items-center justify-center transition-all duration-300 ${
                    isDarkCard
                      ? "bg-[#0b0e17] border border-white/10 shadow-md"
                      : "bg-white border border-slate-200/90 shadow-sm"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-9 sm:max-h-10 w-auto max-w-[120px] object-contain"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
