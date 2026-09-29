"use client";

import { useState } from "react";
import { Milestone, Award, Globe, HeartHandshake, Rocket, Clock, Sparkles } from "lucide-react";

export default function AboutStory() {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(0);

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
    <section id="about" className="py-24 sm:py-32 relative border-t border-white/[0.06] bg-[#080a11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Intro */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3 uppercase tracking-wider">
            About Theweb
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Theweb started with a simple idea: <br />
            <span className="text-gradient-accent">technology should be useful.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Theweb didn&apos;t begin with a business plan. It grew from years of exploring design, technology and the possibilities that come from bringing the two together.
          </p>
        </div>

        {/* Timeline Navigation Strip */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {timeline.map((item, idx) => (
            <button
              key={item.year}
              onClick={() => setSelectedMilestone(idx)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedMilestone === idx
                  ? "bg-white text-black shadow-lg shadow-white/10"
                  : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
              }`}
            >
              <span>{item.year}</span>
              <span className="ml-2 opacity-60 font-normal">| {item.title}</span>
            </button>
          ))}
        </div>

        {/* Featured Milestone Showcase */}
        {(() => {
          const current = timeline[selectedMilestone];
          const Icon = current.icon;
          return (
            <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-blue-500/25 relative overflow-hidden mb-16">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="font-mono text-base font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1 rounded-full">
                      {current.year}
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                      {current.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4">
                    {current.title}
                  </h3>

                  <p className="text-base sm:text-lg font-medium text-blue-200/90 mb-6">
                    {current.lead}
                  </p>

                  <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {current.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </div>

                <div className="lg:w-80 shrink-0 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">Milestone Focus</h4>
                  <p className="text-xs text-slate-400 leading-normal mb-4">
                    {current.tag}
                  </p>
                  <div className="text-[11px] font-mono text-slate-500">
                    Step {selectedMilestone + 1} of {timeline.length} in Theweb origin story
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Complete Chronological Timeline Cards */}
        <div className="relative border-l border-white/[0.1] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {timeline.map((item, idx) => (
            <div key={item.year} className="relative group">
              {/* Timeline Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-colors ${
                  selectedMilestone === idx
                    ? "bg-blue-500 border-white scale-125"
                    : "bg-[#08090d] border-slate-600 group-hover:border-blue-400"
                }`}
              />

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-blue-400">
                  {item.year}
                </span>
                <span className="text-lg font-bold text-white">
                  — {item.title}
                </span>
                <span className="text-xs text-slate-500">({item.badge})</span>
              </div>

              <div className="space-y-2 text-slate-400 text-sm max-w-3xl leading-relaxed">
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
