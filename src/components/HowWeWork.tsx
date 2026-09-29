"use client";

import { useState } from "react";
import { Search, Compass, Palette, Code2, TrendingUp, Check } from "lucide-react";

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: "01",
      title: "Understand",
      short: "We learn about your business, users and goals.",
      icon: Search,
      badge: "Discovery & Alignment",
      details:
        "Before thinking about screens, features or technology, the reason behind the project needs to be clear. What is the problem? Who is it for? What should it achieve? We conduct stakeholder discussions, user interviews, and competitive landscape assessments.",
      deliverables: ["Product Vision Brief", "User Personas & Pain Points", "Technical Scope & Boundaries"],
    },
    {
      num: "02",
      title: "Define",
      short: "We turn the problem into a clear direction.",
      icon: Compass,
      badge: "Strategy & Architecture",
      details:
        "We synthesize insights into a tangible roadmap. No guesswork, no bloated scopes. We outline information architecture, system logic, user journeys, and technical feasibility so that everyone is moving toward one unified goal.",
      deliverables: ["User Journey Flows", "System Architecture Blueprint", "Feature Prioritization Matrix"],
    },
    {
      num: "03",
      title: "Design",
      short: "We create the experience, interface and visual system.",
      icon: Palette,
      badge: "UX & Visual Craft",
      details:
        "Good design should make complicated things feel simple. From wireframes to pixel-perfect Figma prototypes, we build responsive visual systems, intuitive micro-interactions, and design tokens that feel effortless to navigate.",
      deliverables: ["Interactive Clickable Prototype", "Figma Design System & Tokens", "Component Library Spec"],
    },
    {
      num: "04",
      title: "Build",
      short: "We turn the design into a reliable digital product.",
      icon: Code2,
      badge: "Engineering & QA",
      details:
        "There is no favourite technology for the sake of having one. Whether Next.js, React, Node, AI integrations, or custom backends, we write maintainable TypeScript code with strict type-safety, clean architecture, and rapid load times.",
      deliverables: ["Production Next.js / React Code", "Optimized API Integrations", "End-to-End Testing & QA"],
    },
    {
      num: "05",
      title: "Improve",
      short: "We launch, learn and keep improving.",
      icon: TrendingUp,
      badge: "Continuous Evolution",
      details:
        "The first version doesn't have to be perfect. Launch something useful. See how people respond. Learn from it. Make it better. We monitor Core Web Vitals, gather telemetry, fix edge cases, and iterate with real-world feedback.",
      deliverables: ["Telemetry & Performance Audits", "User Behavior Analytics", "Iterative Feature Sprints"],
    },
  ];

  return (
    <section id="how-we-work" className="py-24 sm:py-32 relative border-t border-slate-200/80 dark:border-white/[0.06] bg-slate-50/50 dark:bg-transparent transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-3 uppercase tracking-wider">
            How We Work
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            From idea to something people can actually use.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A transparent, collaborative, and battle-tested five-stage execution process that turns ambiguity into launch-ready digital products.
          </p>
        </div>

        {/* Step Navigation Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? "bg-blue-600/10 dark:bg-blue-600/20 border-blue-600 dark:border-blue-500 shadow-md shadow-blue-500/10"
                    : "bg-white dark:bg-white/[0.02] border-slate-200 dark:border-white/[0.06] hover:bg-slate-100 dark:hover:bg-white/[0.05]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-400 dark:text-slate-500"
                    }`}
                  >
                    {step.num}
                  </span>
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-400 dark:text-slate-500"
                    }`}
                  />
                </div>
                <h4
                  className={`text-sm sm:text-base font-bold ${
                    isActive ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {step.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Panel */}
        <div className="bg-white dark:bg-[#121626]/80 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-blue-500/20 shadow-xl dark:shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                  Phase {steps[activeStep].num}
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                  {steps[activeStep].badge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {steps[activeStep].title} — {steps[activeStep].short}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {steps[activeStep].details}
              </p>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-3 font-semibold">
                  Key Milestones & Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {steps[activeStep].deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 p-3.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-xs font-medium text-slate-900 dark:text-slate-100 shadow-sm"
                    >
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-72 shrink-0 flex flex-col justify-center items-center p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white mb-4 shadow-xl">
                {(() => {
                  const CurrentIcon = steps[activeStep].icon;
                  return <CurrentIcon className="w-8 h-8" />;
                })()}
              </div>
              <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                Phase {steps[activeStep].num} of 05
              </h5>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Continuous transparency and direct access to designers and engineers.
              </p>
              <div className="flex gap-2">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-slate-200 dark:bg-white/[0.06] hover:bg-slate-300 dark:hover:bg-white/[0.1] text-slate-800 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  Prev
                </button>
                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
