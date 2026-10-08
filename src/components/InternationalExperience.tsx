"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Globe2 } from "lucide-react";

interface ExperienceItem {
  id: string;
  country: string;
  year?: string;
  tagline: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  place: string;
  image: string;
  featuredImage: string;
  facts: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "norway",
    country: "Norway",
    year: "90+ Projects",
    tagline: "Norway",
    title: "90+ projects",
    place: "Norway",
    shortDesc:
      "UX and digital design work with Norwegian businesses and teams.",
    fullDesc:
      "Norway became a major turning point in Ravindu’s professional journey. What started as an opportunity to work in digital design grew into more than 90 UX and digital design projects with Norwegian businesses and teams. The experience introduced new ways of working, communicating and solving problems, while showing that skills developed in Sri Lanka could create value internationally.",
    image: "/experiences/norway-card.jpg",
    featuredImage: "/experiences/norway-featured.jpg",
    facts: [
      "90+ UX & digital design projects",
      "Norwegian businesses & teams",
      "New ways of working & solving problems",
      "Global value from Sri Lankan skills",
    ],
  },
  {
    id: "bangladesh",
    country: "Bangladesh",
    year: "2025",
    tagline: "Bangladesh · 2025",
    title: "YSALI 2025",
    place: "Dhaka, Bangladesh",
    shortDesc:
      "A leadership and cultural exchange experience with young leaders from across South Asia.",
    fullDesc:
      "In 2025, Theweb’s Director, Sajana Helanjith, represented Sri Lanka at the Young South Asian Leaders Initiative in Dhaka, Bangladesh. The experience connected him with young leaders from across South Asia and created opportunities to exchange ideas around leadership, innovation and entrepreneurship. It also strengthened Theweb’s connection to a wider international community.",
    image: "/Daka.jpg.jpeg",
    featuredImage: "/Daka.jpg.jpeg",
    facts: [
      "Young South Asian Leaders Initiative",
      "Exchange in Dhaka, Bangladesh",
      "Leadership, innovation & entrepreneurship",
      "Wider international community",
    ],
  },
  {
    id: "uae",
    country: "United Arab Emirates",
    tagline: "United Arab Emirates",
    title: "Sharjah Expo",
    place: "Sharjah, UAE",
    shortDesc:
      "Supporting digital work and international business opportunities at the Middle East Rubber & Tyre Expo in Sharjah.",
    fullDesc:
      "The Middle East became another chapter through Theweb’s participation in the Middle East Rubber & Tyre Expo in Sharjah, UAE. Working alongside Sri Lankan businesses at an international B2B event offered valuable insight into global markets, business communication and opportunities. It was also an opportunity to support Sri Lankan businesses as they presented themselves to an international audience.",
    image: "/experiences/uae-card.jpg",
    featuredImage: "/experiences/uae-featured.jpg",
    facts: [
      "Middle East Rubber & Tyre Expo",
      "International B2B event presence",
      "Global market & communication insights",
      "Supporting Sri Lankan enterprises",
    ],
  },
  {
    id: "usa",
    country: "United States",
    tagline: "United States",
    title: "YSALI America",
    place: "United States",
    shortDesc:
      "International leadership, learning, and professional experiences through the Young South Asian Leaders Initiative.",
    fullDesc:
      "The United States became part of Ravindu’s journey through the Young South Asian Leaders Initiative and its international exchange opportunities. The experience brought new perspectives on leadership, technology, entrepreneurship and community development. Meeting people from different backgrounds and learning from international organisations expanded his understanding of what is possible and strengthened his interest in building meaningful connections beyond Sri Lanka.",
    image: "/YSALI America.jpeg",
    featuredImage: "/YSALI America.jpeg",
    facts: [
      "Young South Asian Leaders Initiative",
      "Leadership, technology & entrepreneurship",
      "International exchange & learning",
      "Global connections beyond Sri Lanka",
    ],
  },
];

export default function InternationalExperience() {
  const [selectedId, setSelectedId] = useState<string>("norway");
  const activeExp =
    experiences.find((e) => e.id === selectedId) || experiences[0];

  const handleSelect = (id: string) => {
    setSelectedId(id);
    const featuredElem = document.getElementById("featured-experience");
    if (featuredElem) {
      featuredElem.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-slate-50 dark:bg-[#08090d] text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-white/10 text-xs font-semibold tracking-wider uppercase text-slate-700 dark:text-slate-300 mb-6">
              <Globe2 className="w-3.5 h-3.5 text-blue-500" />
              <span>International Experience</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95] text-slate-950 dark:text-white">
              From Sri Lanka to the world.
            </h2>
          </div>

          <div className="lg:col-span-5 pb-2">
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              The work started in Sri Lanka. The perspective grew through
              international projects, collaborations, leadership programmes and
              new connections across borders.
            </p>
            <div className="mt-6 flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0 animate-pulse" />
              <span>Different places. Different people. Different perspectives.</span>
            </div>
          </div>
        </div>

        {/* Route Line Indicator */}
        <div className="mt-14 sm:mt-16 mb-12 sm:mb-16">
          <div className="relative h-px bg-slate-300 dark:bg-white/15 w-full">
            <span className="absolute -top-1 left-0 w-2.5 h-2.5 rounded-full bg-slate-900 dark:bg-white" />
            <span className="absolute -top-1 right-0 w-2.5 h-2.5 rounded-full bg-blue-500" />
          </div>
          <div className="flex justify-between items-center text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400 mt-3">
            <span>Sri Lanka (Origin)</span>
            <span>International Footprint</span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {experiences.map((item) => {
            const isSelected = item.id === selectedId;
            return (
              <div
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`group relative h-[440px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 shadow-md hover:shadow-2xl hover:-translate-y-1 ${
                  isSelected
                    ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-50 dark:ring-offset-[#08090d]"
                    : "border border-slate-200 dark:border-white/10"
                }`}
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Dark Gradient Overlay for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300" />

                {/* Card Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-white/70 mb-2">
                    {item.tagline}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 line-clamp-3 leading-relaxed">
                    {item.shortDesc}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full border transition-all ${
                        isSelected
                          ? "bg-blue-600 border-blue-500 text-white"
                          : "bg-white/10 border-white/20 text-white/90 group-hover:bg-white group-hover:text-black"
                      }`}
                    >
                      {isSelected ? "Active View" : "View Details"}
                    </span>
                    <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-black group-hover:translate-x-1">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Experience Spotlight */}
        <div
          id="featured-experience"
          className="mt-16 sm:mt-20 p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#e9eee9] dark:bg-[#11131a] border border-slate-200/80 dark:border-white/10 transition-colors duration-300 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Spotlight Image */}
            <div className="lg:col-span-6 relative h-[360px] sm:h-[440px] lg:h-[480px] rounded-2xl overflow-hidden shadow-lg border border-black/5 dark:border-white/10">
              <Image
                src={activeExp.featuredImage}
                alt={activeExp.title}
                fill
                className="object-cover transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Spotlight Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-3">
                <span>Featured Experience</span>
                <span>•</span>
                <span className="text-blue-600 dark:text-blue-400">
                  {activeExp.country}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight mb-2">
                {activeExp.title}
              </h3>

              <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-5">
                {activeExp.place}
              </div>

              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                {activeExp.fullDesc}
              </p>

              {/* Facts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-slate-300/80 dark:border-white/10 mb-8">
                {activeExp.facts.map((fact, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{fact}</span>
                  </div>
                ))}
              </div>

              {/* Interactive Action */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-slate-900 text-white dark:bg-white dark:text-black hover:opacity-90 transition-all shadow-md group"
                >
                  <span>Explore Collaboration</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <div className="flex gap-2">
                  {experiences.map((e) => (
                    <button
                      key={e.id}
                      onClick={() => setSelectedId(e.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                        selectedId === e.id
                          ? "bg-blue-600 text-white shadow-sm"
                          : "bg-black/5 dark:bg-white/10 text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white"
                      }`}
                    >
                      {e.country}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
