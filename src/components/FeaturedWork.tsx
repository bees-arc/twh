"use client";

import { useState } from "react";
import { ArrowUpRight, Award, ExternalLink, X, Layers, Sparkles, CheckCircle } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  category: "Digital Products" | "Websites" | "Brand & Experience" | "AI & Social Impact";
  tagline: string;
  summary: string;
  badge?: string;
  metrics: string;
  client: string;
  year: string;
  deliverables: string[];
  techStack: string[];
  fullStory: {
    problem: string;
    solution: string;
    impact: string;
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: "habarala",
    title: "Habarala — AgriTech Platform",
    category: "AI & Social Impact",
    tagline: "Microsoft Imagine Cup Southeast Asia Champion & World Finalist",
    badge: "Imagine Cup World Finalist",
    summary:
      "Bringing design and technology together to solve real-world agricultural problems. What started as an exploration became an internationally acclaimed platform.",
    metrics: "World Finalist • SEA Champion",
    client: "Imagine Cup / Global Agritech",
    year: "2021 – 2022",
    deliverables: ["Product Strategy", "UX/UI Architecture", "Mobile App", "AI Crop Diagnostics", "Field Research"],
    techStack: ["Next.js", "Computer Vision", "Python", "React Native", "Cloud APIs"],
    fullStory: {
      problem:
        "Rural farmers face severe crop failure due to late disease identification, complicated technical tools, and language barriers that standard agritech apps fail to address.",
      solution:
        "We built Habarala with a hyper-accessible vernacular interface, instant AI camera diagnostics, and actionable prevention pathways that require zero technical literacy.",
      impact:
        "Awarded Southeast Asia Region Champion and represented the region on the global stage at the Microsoft Imagine Cup World Finals, proving technology is most powerful when it is genuinely useful.",
    },
  },
  {
    id: "norway-initiatives",
    title: "Norwegian Business Digital Suite",
    category: "Websites",
    tagline: "90+ Digital & UX Projects for Norwegian Enterprises",
    badge: "90+ Projects Delivered",
    summary:
      "Long-term international collaboration with Babette and Norwegian companies, delivering bespoke digital products, Scandinavian UX simplicity, and reliable web platforms.",
    metrics: "90+ Live Deployments",
    client: "Norwegian Enterprises & Babette",
    year: "2022 – 2024",
    deliverables: ["High-Conversion Websites", "UX Audits", "E-commerce Platforms", "Brand Guidelines"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS", "Figma"],
    fullStory: {
      problem:
        "Fast-growing Scandinavian businesses required rapid turnarounds on modern web experiences without sacrificing minimalist aesthetic rigor and strict accessibility compliance.",
      solution:
        "Established a cross-border design-and-code pipeline combining thoughtful user journeys, clean codebases, and seamless performance optimization.",
      impact:
        "Successfully delivered across 90+ projects in varied domains, forging a trusted international partnership that ultimately laid the foundation for Theweb Agency.",
    },
  },
  {
    id: "vibe-crm",
    title: "Vibe CRM & Enterprise Portal",
    category: "Digital Products",
    tagline: "Scalable Operations & Claim Management Engine",
    badge: "Enterprise SaaS",
    summary:
      "A high-throughput enterprise dashboard simplifying insurance inquiries, multi-tier claims, and real-time policy adjustments with instant search.",
    metrics: "Sub-second Search • 40% Efficiency Gain",
    client: "Fintech & Corporate Enterprise",
    year: "2023 – 2024",
    deliverables: ["Role-Based Access Control", "Dynamic Table Sorter", "Claim Workflows", "API Layer"],
    techStack: ["React", "Next.js App Router", "TypeScript", "Tailwind CSS", "REST/GraphQL"],
    fullStory: {
      problem:
        "Legacy enterprise systems caused slow claim processing, buried critical customer inquiry data, and frustrated internal operational teams.",
      solution:
        "Designed an intuitive web portal with streamlined hydration gates, predictive search, keyboard navigation, and real-time state synchronizations.",
      impact:
        "Reduced operational handling times significantly, empowering non-technical staff to process complex claim documents effortlessly.",
    },
  },
  {
    id: "brand-experience-pulse",
    title: "Aura Brand & Visual Identity",
    category: "Brand & Experience",
    tagline: "Comprehensive Multi-Device Design System & Identity",
    badge: "Design System",
    summary:
      "Creating clarity from complexity. A modular design language engineered for startups and enterprises seeking cohesive digital touchpoints.",
    metrics: "120+ Components • 100% Tokenized",
    client: "Global Tech Collective",
    year: "2023",
    deliverables: ["Design Tokens", "Typography Hierarchy", "Interactive Micro-animations", "Component Library"],
    techStack: ["Figma Tokens", "CSS Modules", "Tailwind", "Storybook", "Motion UX"],
    fullStory: {
      problem:
        "Fragmented brand touchpoints across mobile apps, marketing websites, and internal tools were diluting customer trust.",
      solution:
        "Created an end-to-end design system with unified typography, light/dark luminous themes, accessibility-first contrast ratios, and interactive component guidelines.",
      impact:
        "Halved frontend development turnaround time while elevating perceived brand premium across all product touchpoints.",
    },
  },
];

export default function FeaturedWork() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  const categories = ["All", "Digital Products", "Websites", "Brand & Experience", "AI & Social Impact"];

  const filteredStudies =
    selectedFilter === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.category === selectedFilter);

  return (
    <section id="work" className="py-24 sm:py-32 relative border-t border-slate-200 dark:border-white/[0.06] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3 uppercase tracking-wider">
              Featured Work & Case Studies
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Work that makes an impact.
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-md text-sm sm:text-base leading-relaxed">
            Every project has a reason to exist. Explore selected digital products, platforms, and experiences crafted with purpose and precision.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedFilter === category
                  ? "bg-slate-900 text-white dark:bg-white dark:text-black font-semibold shadow-md"
                  : "bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.04] text-slate-700 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.06]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalStudy(project)}
              className="bg-white dark:bg-[#101422]/80 rounded-3xl p-7 sm:p-9 flex flex-col justify-between cursor-pointer group border border-slate-200 dark:border-white/[0.08] hover:border-blue-500/40 shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/20">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-600 dark:text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                      <Award className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">{project.tagline}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{project.summary}</p>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/[0.04] px-2.5 py-1 rounded-md border border-slate-200 dark:border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-slate-200 dark:border-white/[0.06]">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {project.metrics}
                  </span>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {activeModalStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0f1320] text-slate-900 dark:text-white rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-white/20 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalStudy(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-white/[0.08] hover:bg-slate-200 dark:hover:bg-white/[0.15] text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                {activeModalStudy.category}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3">
                {activeModalStudy.title}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-1">
                {activeModalStudy.tagline}
              </p>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] mb-8">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 block">Client</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">{activeModalStudy.client}</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 block">Timeline</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">{activeModalStudy.year}</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 block">Key Result</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">{activeModalStudy.metrics}</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 block">Deliverables</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">{activeModalStudy.deliverables.length} core outputs</span>
              </div>
            </div>

            {/* Problem / Solution / Impact */}
            <div className="space-y-6 mb-8">
              <div className="border-l-2 border-red-500/60 pl-4 py-1">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1">The Challenge</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{activeModalStudy.fullStory.problem}</p>
              </div>

              <div className="border-l-2 border-blue-500/60 pl-4 py-1">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1">The Approach & Solution</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{activeModalStudy.fullStory.solution}</p>
              </div>

              <div className="border-l-2 border-emerald-500/60 pl-4 py-1">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1">Impact & Outcome</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{activeModalStudy.fullStory.impact}</p>
              </div>
            </div>

            {/* Deliverables List */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-3">Key Deliverables</h4>
              <div className="flex flex-wrap gap-2">
                {activeModalStudy.deliverables.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] px-3 py-1.5 rounded-lg"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-6 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between">
              <button
                onClick={() => setActiveModalStudy(null)}
                className="text-xs text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white cursor-pointer"
              >
                ← Back to projects
              </button>
              <a
                href="#contact"
                onClick={() => setActiveModalStudy(null)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-slate-900 text-white dark:bg-white dark:text-black hover:opacity-90 transition-opacity"
              >
                <span>Discuss a similar project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
