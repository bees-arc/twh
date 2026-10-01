"use client";

import { useState, useRef } from "react";
import {
  Milestone,
  Award,
  Globe,
  HeartHandshake,
  Rocket,
  Sparkles,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

export default function AboutStory() {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const milestoneButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleSelectMilestone = (idx: number) => {
    setSelectedMilestone(idx);
    milestoneButtonRefs.current[idx]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const handlePrev = () => {
    if (selectedMilestone > 0) {
      handleSelectMilestone(selectedMilestone - 1);
    }
  };

  const handleNext = () => {
    if (selectedMilestone < timeline.length - 1) {
      handleSelectMilestone(selectedMilestone + 1);
    }
  };

  const timeline = [
    {
      year: "2019",
      title: "Starting to explore",
      icon: Milestone,
      badge: "The Spark",
      lead: "Experimenting with code, design, and digital media.",
      paragraphs: [
        "The journey began through university and community projects, experimenting with technology, design and digital media.",
        "From building small projects to getting involved in hackathons, workshops and creative communities, each experience opened up something new to explore.",
      ],
      tag: "University & Hackathons",
    },
    {
      year: "2021 – 2022",
      title: "Building with purpose",
      icon: Award,
      badge: "Microsoft Imagine Cup World Finalist",
      lead: "UX, product design and technology solving real-world challenges.",
      paragraphs: [
        "UX, product design and technology became a bigger part of the journey. Projects such as Habarala brought together design and technology to address real-world problems.",
        "This eventually led to the Microsoft Imagine Cup, where the project became a Southeast Asia Region Champion and World Finalist.",
        "It was a turning point: technology became less about what could be built and more about what could be solved.",
      ],
      tag: "Habarala & SEA Champion",
    },
    {
      year: "2022",
      title: "The first step beyond Sri Lanka",
      icon: HeartHandshake,
      badge: "The Origin of Theweb",
      lead: "International collaboration with Babette.",
      paragraphs: [
        "Another important chapter began with an internship under Babette. It was the first international work experience and the first opportunity to work closely with someone from another country, on real projects for international clients.",
        "What started as an internship grew into a long-term professional relationship. Babette became an important part of the journey, introducing new opportunities, supporting new ideas and helping open the door to a much bigger world of international work.",
        "And there was one small detail that would eventually become something much bigger: The name “Theweb” came from Babette. At the time, it was simply a name for an idea that was still taking shape.",
      ],
      tag: "Babette & International Work",
    },
    {
      year: "2022 – 2023",
      title: "Looking beyond Sri Lanka",
      icon: Globe,
      badge: "90+ Norwegian Projects",
      lead: "Expanding UX and digital design for Scandinavian businesses.",
      paragraphs: [
        "That first international opportunity led to more. The work expanded into UX and digital design for Norwegian businesses, working across different industries, teams and projects.",
        "More than 90 projects brought new perspectives on design, collaboration and problem-solving, while showing what was possible from Sri Lanka while working with people around the world.",
      ],
      tag: "Cross-Border Scale",
    },
    {
      year: "2023",
      title: "Theweb Agency Established",
      icon: Rocket,
      badge: "The Platform",
      lead: "The name had existed before the company. The story came first.",
      paragraphs: [
        "After years of projects, experiments and learning, those experiences came together under one name: Theweb Agency was established.",
        "What started as an individual journey became a platform for working with businesses, building digital products and turning ideas into something real.",
        "The name had existed before the company. The experience came before the business. The story came first. The company grew from it.",
      ],
      tag: "Official Agency Launch",
    },
    {
      year: "Today",
      title: "The Journey Continues",
      icon: Sparkles,
      badge: "Useful Technology",
      lead: "Websites, digital products, UX, technology, AI and beyond.",
      paragraphs: [
        "The journey continues through websites, digital products, UX, technology, AI and everything in between.",
        "The tools continue to change. The projects continue to evolve. The people and places along the way continue to shape what comes next.",
        "But the original idea remains the same: Technology should be useful.",
      ],
      tag: "Next-Gen Impact",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative border-t border-slate-200 dark:border-white/[0.06] bg-white dark:bg-[#080a11] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Intro */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3 uppercase tracking-wider">
            About Theweb
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Theweb started with a simple idea: <br />
            <span className="text-gradient-accent">technology should be useful.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Theweb didn&apos;t begin with a business plan. It grew from years of exploring design, technology and the possibilities that come from bringing the two together.
          </p>
        </div>

        {/* Timeline Navigation Strip with Expand-on-hover Year Pills */}
        <div className="relative mb-10">
          <div
            ref={scrollContainerRef}
            className="flex flex-wrap items-center gap-2.5 sm:gap-3 py-1"
          >
            {timeline.map((item, idx) => {
              const isSelected = selectedMilestone === idx;
              return (
                <button
                  key={item.year}
                  ref={(el) => {
                    milestoneButtonRefs.current[idx] = el;
                  }}
                  onClick={() => handleSelectMilestone(idx)}
                  className={`group relative px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center ${
                    isSelected
                      ? "bg-slate-900 text-white dark:bg-white dark:text-black shadow-md ring-2 ring-slate-900/10 dark:ring-white/20"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-white/[0.04] dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.06]"
                  }`}
                >
                  <span className="font-mono">{item.year}</span>
                  {/* Expands to reveal title on hover or when selected */}
                  <span
                    className={`overflow-hidden transition-all duration-300 ease-out whitespace-nowrap font-normal inline-block ${
                      isSelected
                        ? "max-w-[500px] opacity-100 ml-1.5 pr-1"
                        : "max-w-0 opacity-0 group-hover:max-w-[500px] group-hover:opacity-100 group-hover:ml-1.5 group-hover:pr-1"
                    }`}
                  >
                    <span className="opacity-50 mr-1.5">|</span>
                    <span>{item.title}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Milestone Showcase */}
        {(() => {
          const current = timeline[selectedMilestone];
          const Icon = current.icon;
          return (
            <div className="bg-slate-50 dark:bg-[#0e121f] rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-blue-500/25 shadow-sm dark:shadow-none relative overflow-hidden mb-16">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="font-mono text-base font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1 rounded-full">
                      {current.year}
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-200/70 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 border border-slate-300/60 dark:border-white/[0.08]">
                      {current.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    {current.title}
                  </h3>

                  <p className="text-base sm:text-lg font-medium text-blue-600 dark:text-blue-300 mb-6">
                    {current.lead}
                  </p>

                  <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    {current.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </div>

                <div className="lg:w-80 shrink-0 p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.08] shadow-sm dark:shadow-none flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Milestone Focus</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal mb-4">
                      {current.tag}
                    </p>
                    <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 mb-6">
                      Step {selectedMilestone + 1} of {timeline.length} in Theweb origin story
                    </div>
                  </div>

                  {/* Prev / Next controls inside the card */}
                  <div className="flex items-center gap-2 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                    <button
                      onClick={handlePrev}
                      disabled={selectedMilestone === 0}
                      className="flex-1 py-2 px-3 rounded-xl border border-slate-200 dark:border-white/[0.08] text-xs font-semibold text-slate-700 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Previous</span>
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={selectedMilestone === timeline.length - 1}
                      className="flex-1 py-2 px-3 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 text-xs font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-90 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <span>Next</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Complete Chronological Timeline Cards */}
        <div className="relative border-l border-slate-200 dark:border-white/[0.1] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {timeline.map((item, idx) => (
            <div key={item.year} className="relative group">
              {/* Timeline Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-colors ${
                  selectedMilestone === idx
                    ? "bg-blue-600 border-white shadow-md scale-125"
                    : "bg-slate-200 dark:bg-[#08090d] border-slate-400 dark:border-slate-600 group-hover:border-blue-500"
                }`}
              />

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                  {item.year}
                </span>
                <span className="text-lg font-bold text-slate-900 dark:text-white">
                  — {item.title}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">({item.badge})</span>
              </div>

              <div className="space-y-2 text-slate-600 dark:text-slate-400 text-sm max-w-3xl leading-relaxed">
                {item.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
