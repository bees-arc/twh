"use client";

import { useState } from "react";
import { Cpu, Layout, BrainCircuit, Server } from "lucide-react";

export default function Technology() {
  const techCategories = [
    {
      name: "Frontend & Fullstack",
      icon: Layout,
      description: "Fast, resilient, and accessible web experiences.",
      stacks: [
        { name: "Next.js", tag: "App Router / SSR", highlight: true },
        { name: "React 19", tag: "Component Architecture", highlight: true },
        { name: "TypeScript", tag: "Type-Safe Contracts", highlight: true },
        { name: "Tailwind CSS", tag: "Utility & Design Tokens" },
        { name: "Vanilla CSS", tag: "Custom Motion & Canvas" },
        { name: "Vue.js", tag: "Progressive Framework" },
      ],
    },
    {
      name: "Design & UX Engineering",
      icon: Cpu,
      description: "Pixel-perfect systems that bridge design and engineering.",
      stacks: [
        { name: "Figma", tag: "Design Systems & Auto-layout", highlight: true },
        { name: "Design Tokens", tag: "Cross-platform Tokens", highlight: true },
        { name: "Micro-interactions", tag: "Delightful UX" },
        { name: "Accessibility", tag: "WCAG 2.1 Standards" },
        { name: "Storybook", tag: "Component Documentation" },
      ],
    },
    {
      name: "AI & Automation",
      icon: BrainCircuit,
      description: "Pragmatic intelligence embedded into everyday workflows.",
      stacks: [
        { name: "AI & LLM APIs", tag: "OpenAI / Claude / Gemini", highlight: true },
        { name: "Computer Vision", tag: "Diagnostics & Detection", highlight: true },
        { name: "Python", tag: "Data & ML Pipelines" },
        { name: "Agentic Workflows", tag: "Intelligent Automation" },
      ],
    },
    {
      name: "Backend, Cloud & CMS",
      icon: Server,
      description: "Reliable data persistence and sub-second global delivery.",
      stacks: [
        { name: "Node.js", tag: "Server Runtimes" },
        { name: "Supabase / PostgreSQL", tag: "Relational Data & Auth", highlight: true },
        { name: "Vercel / AWS", tag: "Edge Infrastructure", highlight: true },
        { name: "REST & GraphQL", tag: "API Contracts" },
        { name: "WordPress & Headless CMS", tag: "Flexible Editorial CMS" },
      ],
    },
  ];

  return (
    <section id="technology" className="py-24 sm:py-32 relative border-t border-slate-200 dark:border-white/[0.06] bg-white dark:bg-[#08090d] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-3 uppercase tracking-wider">
            Technology & Stack
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Use the right tools. No dogma.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            There is no favourite technology for the sake of having one. WordPress, React, Next.js, AI, automation or something custom — the tools depend on what the project actually needs to succeed.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.name}
                className="bg-slate-50 dark:bg-[#0e121f] rounded-3xl p-8 border border-slate-200 dark:border-white/[0.08] shadow-sm dark:shadow-none hover:border-slate-300 dark:hover:border-white/[0.18] transition-all duration-300"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-3 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-cyan-600 dark:text-cyan-400 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{cat.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{cat.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  {cat.stacks.map((tech) => (
                    <div
                      key={tech.name}
                      className={`p-3.5 rounded-2xl border transition-all duration-200 ${
                        tech.highlight
                          ? "bg-blue-50 dark:bg-blue-600/10 border-blue-200 dark:border-blue-500/30 text-blue-950 dark:text-white"
                          : "bg-white dark:bg-white/[0.02] border-slate-200 dark:border-white/[0.06] text-slate-800 dark:text-slate-300"
                      }`}
                    >
                      <div className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">{tech.name}</div>
                      <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">{tech.tag}</div>
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
