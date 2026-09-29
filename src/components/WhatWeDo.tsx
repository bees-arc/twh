"use client";

import { useState } from "react";
import { Laptop, Globe, Sparkles, ArrowRight, CheckCircle2, Layers } from "lucide-react";

export default function WhatWeDo() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const services = [
    {
      id: "digital-products",
      num: "01",
      title: "Digital Products",
      tagline: "Built to solve real problems and scale effortlessly.",
      description:
        "We turn complex domain logic into intuitive, reliable digital products. From SaaS platforms and enterprise management systems to custom web applications, we focus on clarity, fast performance, and frictionless workflows.",
      icon: Laptop,
      color: "from-blue-500/20 to-cyan-500/10",
      accent: "text-blue-400",
      borderAccent: "border-blue-500/30",
      capabilities: [
        "SaaS & Web Applications",
        "Enterprise Portals & CRM Dashboards",
        "Role-Based Access & Data Workflows",
        "API Architecture & Microservices",
        "Real-Time Interaction & Automation",
        "Performance & Hydration Optimization",
      ],
      deliverable: "Production-ready, battle-tested software designed for end-user adoption.",
    },
    {
      id: "websites",
      num: "02",
      title: "Websites",
      tagline: "Speed, storytelling, and high-conversion engineering.",
      description:
        "Modern websites shouldn't just look stunning — they must load in milliseconds, communicate value in seconds, and rank flawlessly. We build Next.js powered platforms that elevate your brand and turn curious visitors into loyal clients.",
      icon: Globe,
      color: "from-purple-500/20 to-blue-500/10",
      accent: "text-purple-400",
      borderAccent: "border-purple-500/30",
      capabilities: [
        "High-Impact Marketing & Brand Websites",
        "Next.js App Router Architecture",
        "Headless CMS Integration",
        "SEO Optimization & Core Web Vitals (95+)",
        "Responsive & Fluid Typography Systems",
        "Interactive Animations & Micro-Interactions",
      ],
      deliverable: "Blazing fast, aesthetically elevated digital storefronts that convert.",
    },
    {
      id: "brand-experience",
      num: "03",
      title: "Brand & Experience",
      tagline: "Making complicated things feel remarkably simple.",
      description:
        "Good design is not decoration; it is clarification. We craft comprehensive visual systems, UX journeys, and design languages that bring coherence to your brand across all digital touchpoints.",
      icon: Sparkles,
      color: "from-cyan-500/20 to-emerald-500/10",
      accent: "text-cyan-400",
      borderAccent: "border-cyan-500/30",
      capabilities: [
        "Product & Visual Identity Systems",
        "UX Research & User Journey Mapping",
        "Figma Design Systems & Token Architecture",
        "Wireframing & High-Fidelity Prototyping",
        "Accessibility (WCAG 2.1) Audits & Compliance",
        "Interactive UI Guidelines & Style Guides",
      ],
      deliverable: "Enduring design systems that bridge strategy, empathy, and engineering.",
    },
  ];

  return (
    <section id="what-we-do" className="py-24 sm:py-32 relative border-t border-white/[0.06] bg-[#090b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3 uppercase tracking-wider">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Everything your digital product needs to thrive.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            We don&apos;t build for the sake of buzzwords. We build useful, resilient, and visually captivating solutions tailored to your unique objectives.
          </p>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHoveredOrActive = activeTab === index;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveTab(index)}
                className={`glass-panel rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative overflow-hidden cursor-default ${
                  isHoveredOrActive
                    ? `${service.borderAccent} shadow-2xl bg-[#121626]/90`
                    : "border-white/[0.07] hover:border-white/[0.15]"
                }`}
              >
                {/* Subtle gradient corner glow */}
                <div
                  className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br ${service.color} blur-3xl pointer-events-none transition-opacity duration-300 ${
                    isHoveredOrActive ? "opacity-100" : "opacity-30"
                  }`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-sm font-bold text-slate-500">
                      {service.num}
                    </span>
                    <div className={`p-3 rounded-2xl bg-white/[0.05] border border-white/[0.08] ${service.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-400 mb-6">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2.5 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      Capabilities & Core Focus:
                    </span>
                    {service.capabilities.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${service.accent}`} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-6 border-t border-white/[0.06]">
                  <p className="text-xs text-slate-400 mb-4 italic">
                    &quot;{service.deliverable}&quot;
                  </p>
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 text-xs font-semibold ${service.accent} hover:underline`}
                  >
                    <span>Discuss {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
