"use client";

import { Handshake, Globe2, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Partners() {
  const partnerHighlights = [
    {
      name: "Babette & Nordic Enterprises",
      location: "Oslo, Norway",
      scope: "90+ Digital & UX Deployments",
      badge: "Long-Term Anchor Partner",
    },
    {
      name: "Microsoft Imagine Cup Network",
      location: "Global & Southeast Asia",
      scope: "World Finalist Alumni & Mentors",
      badge: "Innovation Ecosystem",
    },
    {
      name: "Vibe / Enterprise Insurance Suites",
      location: "Colombo & Regional",
      scope: "High-Volume Claims & Operations Portals",
      badge: "Enterprise SaaS",
    },
    {
      name: "Habarala AgriTech Initiative",
      location: "Sri Lanka / International",
      scope: "AI Diagnostics & Accessible Farmer UX",
      badge: "Social Impact Winner",
    },
  ];

  return (
    <section className="py-20 relative border-t border-white/[0.06] bg-[#07080d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2 uppercase tracking-wider">
              Partners & Network
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Trusted by visionary teams worldwide.
            </h3>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Collaborating seamlessly across time zones, from Oslo to Colombo, bringing world-standard digital products to life.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {partnerHighlights.map((partner) => (
            <div
              key={partner.name}
              className="glass-panel p-6 rounded-2xl border border-white/[0.06] hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 inline-block mb-3">
                  {partner.badge}
                </span>
                <h4 className="text-base font-bold text-white mb-1">
                  {partner.name}
                </h4>
                <p className="text-xs text-slate-400 mb-3">{partner.scope}</p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <Globe2 className="w-3 h-3 text-slate-400" />
                  {partner.location}
                </span>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
