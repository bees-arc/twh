"use client";

import { useState } from "react";
import { Globe2, ShieldCheck, Sparkles, ExternalLink } from "lucide-react";

interface PartnerItem {
  id: string;
  name: string;
  location: string;
  industry: string;
  scope: string;
  badge: string;
  logoUrl: string;
  lightLogoUrl?: string;
  logoClass?: string;
  cardLogoClass?: string;
}

const partners: PartnerItem[] = [
  {
    id: "muskelklinikken",
    name: "Muskelklinikken",
    location: "Oslo, Norway",
    industry: "Sports Medicine & Rehabilitation",
    scope: "Bespoke Web Platform & Patient Booking UX",
    badge: "Nordic Healthcare Partner",
    logoUrl: "/Website/Partner%20logos/mkb.svg",
    lightLogoUrl: "/Website/Partner%20logos/mkb.svg",
    logoClass: "dark:brightness-150 dark:contrast-125",
  },
  {
    id: "nihi",
    name: "NIHI",
    location: "Norway",
    industry: "Sports & Health Education",
    scope: "Digital Academy & Course Registration Portal",
    badge: "Education & Certification",
    logoUrl: "/Website/Partner%20logos/Logo%20(1).svg",
    lightLogoUrl: "/Website/Partner%20logos/Logo%20(1).svg",
    logoClass: "dark:brightness-200 dark:contrast-125",
  },
  {
    id: "keeperspecialisten",
    name: "Keeperspecialisten",
    location: "Norway",
    industry: "Elite Goalkeeper Academy",
    scope: "Academy Platform & Clinic Booking",
    badge: "Sports & Training",
    logoUrl: "/Website/Partner%20logos/White%20Version.png",
    lightLogoUrl: "/Website/Partner%20logos/Blue%20Version.png",
  },
  {
    id: "autoways",
    name: "Autoways",
    location: "Colombo, Sri Lanka",
    industry: "Commercial Fleet & Automotive",
    scope: "High-Throughput Catalog & B2B Quotations",
    badge: "Commercial Logistics",
    logoUrl: "/Website/Partner%20logos/White%20version.svg",
    lightLogoUrl: "/Website/Partner%20logos/Red%20version.svg",
  },
  {
    id: "ambuluwawa",
    name: "Ambuluwawa",
    location: "Sri Lanka",
    industry: "Biodiversity & Heritage",
    scope: "Immersive Visitor Experience & Digital Guide",
    badge: "Eco-Tourism Landmark",
    logoUrl: "/Website/Partner%20logos/White%20Logo.svg",
    lightLogoUrl: "/Website/Partner%20logos/White%20Logo.svg",
    cardLogoClass: "light:invert",
  },
  {
    id: "zenoase",
    name: "Zenoase",
    location: "Scandinavia",
    industry: "Wellness & Lifestyle",
    scope: "Minimalist E-Commerce & Brand Architecture",
    badge: "Scandinavian Brand",
    logoUrl: "/Website/Partner%20logos/Pale%20Taupe.svg",
    lightLogoUrl: "/Website/Partner%20logos/Pale%20Taupe.svg",
    logoClass: "dark:brightness-125",
  },
  {
    id: "creamy",
    name: "Creamy",
    location: "International",
    industry: "Creative Studio & Brand",
    scope: "Visual Identity & Digital Experience",
    badge: "Creative Collective",
    logoUrl: "/Website/Partner%20logos/Updted%20Creamy_1.svg",
    lightLogoUrl: "/Website/Partner%20logos/Updted%20Creamy_1.svg",
    logoClass: "dark:brightness-125",
  },
];

export default function Partners() {
  const [activePartner, setActivePartner] = useState<string | null>(null);

  return (
    <section
      id="partners"
      className="py-24 relative border-t border-slate-200 dark:border-white/[0.06] bg-slate-50 dark:bg-[#07080d] transition-colors duration-300 overflow-hidden"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-blue-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Partners & Global Network</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Trusted by visionary teams worldwide.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
            Collaborating seamlessly across time zones, from Oslo to Colombo, delivering bespoke digital platforms and world-class digital products.
          </p>
        </div>

        {/* Dynamic Partner Logo Strip / Ticker */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-[#0b0e18]/80 backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.08] shadow-sm">
          <div className="text-xs uppercase tracking-widest font-semibold text-slate-400 dark:text-slate-500 mb-6 text-center">
            Recognized & Trusted Worldwide
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 items-center justify-items-center">
            {partners.map((partner) => (
              <div
                key={`strip-${partner.id}`}
                className="group relative flex items-center justify-center p-3 w-full h-16 rounded-2xl bg-slate-100/60 hover:bg-slate-200/60 dark:bg-white/[0.03] dark:hover:bg-white/[0.08] border border-slate-200/50 dark:border-white/[0.06] transition-all duration-300"
                title={partner.name}
              >
                <div className="relative w-full h-10 flex items-center justify-center">
                  {/* Dark mode logo */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className={`max-h-8 sm:max-h-9 w-auto max-w-[110px] object-contain hidden dark:block opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 ${
                      partner.logoClass || ""
                    }`}
                  />
                  {/* Light mode logo */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.lightLogoUrl || partner.logoUrl}
                    alt={partner.name}
                    className={`max-h-8 sm:max-h-9 w-auto max-w-[110px] object-contain block dark:hidden opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 ${
                      partner.id === "ambuluwawa" ? "invert brightness-0" : ""
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Partner Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {partners.map((partner) => (
            <div
              key={partner.id}
              onMouseEnter={() => setActivePartner(partner.id)}
              onMouseLeave={() => setActivePartner(null)}
              className="bg-white dark:bg-[#0e1220] p-6 rounded-2xl border border-slate-200 dark:border-white/[0.08] shadow-sm hover:shadow-xl dark:shadow-none hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Top: Logo Container & Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="h-11 w-32 flex items-center justify-center px-3 py-1.5 rounded-xl bg-slate-100/90 dark:bg-white/[0.07] border border-slate-200/80 dark:border-white/[0.08] shadow-xs">
                    {/* Dark mode logo in card */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={partner.logoUrl}
                      alt={partner.name}
                      className={`max-h-7 max-w-full object-contain hidden dark:block opacity-90 group-hover:opacity-100 transition-opacity ${
                        partner.logoClass || ""
                      }`}
                    />
                    {/* Light mode logo in card */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={partner.lightLogoUrl || partner.logoUrl}
                      alt={partner.name}
                      className={`max-h-7 max-w-full object-contain block dark:hidden opacity-90 group-hover:opacity-100 transition-opacity ${
                        partner.id === "ambuluwawa" ? "invert brightness-0" : ""
                      }`}
                    />
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-right whitespace-nowrap">
                    {partner.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                  {partner.industry}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {partner.scope}
                </p>
              </div>

              {/* Card Footer: Location & Verified Icon */}
              <div className="pt-3.5 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-1.5 text-[11px]">
                  <Globe2 className="w-3.5 h-3.5 text-blue-500" />
                  {partner.location}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
