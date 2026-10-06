"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24" />
    </svg>
  );
}

interface StoryLine {
  id: string;
  content: ReactNode;
}

interface StoryBlock {
  type: "paragraph" | "quote";
  id?: string;
  quoteText?: string;
  lines?: StoryLine[];
}

export default function FounderStoryContent() {
  const lineRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [activeLines, setActiveLines] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleScroll = () => {
      // Trigger threshold: when line reaches 75% of viewport height
      const triggerY = window.innerHeight * 0.75;
      const updated: { [key: string]: boolean } = {};

      Object.entries(lineRefs.current).forEach(([id, el]) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < triggerY) {
          updated[id] = true;
        }
      });

      setActiveLines(updated);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const storyBlocks: StoryBlock[] = [
    {
      type: "paragraph",
      lines: [
        {
          id: "2019-1",
          content:
            "In 2019, things started simply: experimenting with technology, design, and digital media in university hackathons and creative workshops.",
        },
        {
          id: "2019-2",
          content:
            "Every weekend brought a new experiment, whether an interactive prototype or a community initiative.",
        },
      ],
    },
    {
      type: "paragraph",
      lines: [
        {
          id: "2021-1",
          content:
            "By 2021, the focus sharpened into purpose-driven UX and product engineering.",
        },
        {
          id: "2021-2",
          content: (
            <>
              That focus crystallized into{" "}
              <strong className="font-bold">Habarala</strong> — an agritech platform
              solving real-world agricultural problems for smallholder farmers.
            </>
          ),
        },
        {
          id: "2021-3",
          content:
            "The project gained international recognition, winning the Southeast Asia Region Championship and advancing as a World Finalist in the prestigious Microsoft Imagine Cup.",
        },
        {
          id: "2021-4",
          content: (
            <>
              It was the moment technology shifted from what <em>could</em> be built
              to what <em>should</em> be solved.
            </>
          ),
        },
      ],
    },
    {
      type: "paragraph",
      lines: [
        {
          id: "2022-1",
          content: (
            <>
              In 2022, an internship under{" "}
              <strong className="font-bold">Babette</strong> marked the first step
              beyond Sri Lanka.
            </>
          ),
        },
        {
          id: "2022-2",
          content:
            "What began as a short-term international opportunity grew into a deep long-term professional partnership.",
        },
        {
          id: "2022-3",
          content: (
            <>
              In fact, the name <em>&ldquo;Theweb&rdquo;</em> was originally given by
              Babette — an idea that was still taking shape.
            </>
          ),
        },
      ],
    },
    {
      type: "paragraph",
      lines: [
        {
          id: "exp-1",
          content:
            "Over the next two years, that relationship expanded into over 90 digital design and development projects for Norwegian businesses across logistics, finance, health, and enterprise SaaS.",
        },
      ],
    },
    {
      type: "paragraph",
      lines: [
        {
          id: "2023-1",
          content: "In 2023, Theweb Agency was formally established.",
        },
        {
          id: "2023-2",
          content:
            "Today, we work with ambitious founders and established enterprises across the world, bringing the same core philosophy to every line of code and every pixel:",
        },
      ],
    },
    {
      type: "quote",
      id: "quote-block",
      quoteText:
        "“Technology should be useful. If it doesn't make life easier, faster, or more understandable for the person using it, it isn't finished yet.”",
    },
    {
      type: "paragraph",
      lines: [
        {
          id: "values-1",
          content:
            "As we grow, the vision remains anchored in the same core values: quiet confidence, radical honesty, and relentless craft.",
        },
        {
          id: "values-2",
          content:
            "We believe that world-class digital products can be engineered from anywhere in the world when driven by genuine empathy and clear communication.",
        },
      ],
    },
    {
      type: "paragraph",
      lines: [
        {
          id: "journey-1",
          content: "Every project is a chapter in this ongoing journey.",
        },
        {
          id: "journey-2",
          content:
            "We continue to learn, iterate, and build alongside people who share our passion for creating things that matter.",
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back Navigation directly on the page */}
      <div className="mb-10 sm:mb-12">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to About Theweb</span>
        </Link>
      </div>

      {/* Full-Page Story Header: Image stretches to match exact height of the text */}
      <header className="flex flex-col sm:flex-row sm:items-stretch gap-6 sm:gap-8 mb-12 sm:mb-16">
        <div className="relative w-36 sm:w-44 md:w-52 self-stretch rounded-2xl overflow-hidden border border-slate-200 dark:border-white/20 shrink-0 shadow-lg bg-slate-100 dark:bg-slate-900 min-h-[160px]">
          <Image
            src="/Croped.png"
            alt="Ravindu Dananjith - Theweb Founder"
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 208px"
            priority
          />
        </div>

        <div className="flex flex-col justify-center flex-1">
          <span className="text-xs font-semibold px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 uppercase tracking-wider inline-block mb-3 w-fit">
            The Founder Narrative
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            From Sri Lanka to Norway &amp; Beyond
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2.5 font-medium leading-relaxed">
            How curiosity, community, and purpose gave birth to Theweb Agency. By Ravindu Dananjith.
          </p>
        </div>
      </header>

      {/* Clean Editorial Divider */}
      <div className="border-t border-slate-200 dark:border-white/10 mb-12 sm:mb-16" />

      {/* Line-by-Line Scroll-Illuminated Story Flow */}
      <div className="space-y-8 sm:space-y-10">
        {storyBlocks.map((block, bIdx) => {
          if (block.type === "quote") {
            const isActive = !!activeLines[block.id || "quote-block"];
            return (
              <div
                key={bIdx}
                ref={(el) => {
                  lineRefs.current[block.id || "quote-block"] = el;
                }}
                className={`my-12 sm:my-16 p-8 sm:p-12 rounded-3xl border-l-4 transition-all duration-700 ease-out ${
                  isActive
                    ? "bg-blue-500/[0.08] border-blue-500 text-slate-950 dark:text-white opacity-100 scale-100 shadow-sm"
                    : "bg-transparent border-slate-300 dark:border-white/10 text-slate-400/35 dark:text-white/20 opacity-30 scale-[0.99]"
                }`}
              >
                <blockquote className="font-medium text-xl sm:text-2xl lg:text-[26px] italic leading-relaxed text-center">
                  {block.quoteText}
                </blockquote>
              </div>
            );
          }

          return (
            <div key={bIdx} className="space-y-3 sm:space-y-3.5">
              {block.lines?.map((line) => {
                const isActive = !!activeLines[line.id];
                return (
                  <p
                    key={line.id}
                    ref={(el) => {
                      lineRefs.current[line.id] = el;
                    }}
                    className={`text-lg sm:text-xl lg:text-[22px] leading-relaxed transition-colors duration-500 ease-out ${
                      isActive
                        ? "text-slate-900 dark:text-slate-100"
                        : "text-slate-400/35 dark:text-white/20"
                    }`}
                  >
                    {line.content}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Bottom Actions Bar (Reveals smoothly on scroll) */}
      <div
        ref={(el) => {
          lineRefs.current["footer-actions"] = el;
        }}
        className={`mt-16 sm:mt-24 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4 transition-all duration-700 ease-out ${
          activeLines["footer-actions"]
            ? "opacity-100 translate-y-0"
            : "opacity-30 translate-y-2 text-slate-400/35 dark:text-white/20"
        }`}
      >
        <Link
          href="/about"
          className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white cursor-pointer transition-colors"
        >
          ← Back to About Theweb
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/dananjith"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-[#0A66C2] dark:text-[#38BDF8] bg-blue-500/10 hover:bg-[#0A66C2] hover:text-white dark:bg-white/[0.05] dark:hover:bg-[#0A66C2] dark:hover:text-white border border-blue-500/20 transition-all shadow-sm"
            title="Connect on LinkedIn"
          >
            <LinkedInIcon className="w-4 h-4" />
            <span>LinkedIn Profile</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-slate-900 text-white dark:bg-white dark:text-black hover:opacity-90 transition-all shadow-sm"
          >
            <span>Let&apos;s Build Together</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
