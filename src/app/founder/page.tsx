import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "Founder Story — From Sri Lanka to Norway & Beyond | Theweb Agency",
  description:
    "How curiosity, community, and purpose gave birth to Theweb Agency. The personal story of Ravindu Dananjith.",
};

export default function FounderPage() {
  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#08090d] text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="pt-28 pb-20 sm:pt-36 sm:pb-28">
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

          {/* Full-Page Story Header (Direct on page, no card enclosure) */}
          <header className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/20 shrink-0 shadow-lg bg-slate-100 dark:bg-slate-900">
              <Image
                src="/Croped.png"
                alt="Ravindu Dananjith - Theweb Founder"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 96px, 112px"
                priority
              />
            </div>

            <div>
              <span className="text-xs font-semibold px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 uppercase tracking-wider inline-block mb-3">
                The Founder Narrative
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                From Sri Lanka to Norway &amp; Beyond
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 font-medium">
                How curiosity, community, and purpose gave birth to Theweb Agency. By Ravindu Dananjith.
              </p>
            </div>
          </header>

          {/* Clean Editorial Divider */}
          <div className="border-t border-slate-200 dark:border-white/10 mb-12 sm:mb-16" />

          {/* Full-Page Story Content Flowing Naturally Across the Page */}
          <div className="space-y-8 text-slate-700 dark:text-slate-300 text-lg sm:text-xl leading-relaxed">
            <p>
              In 2019, things started simply: experimenting with technology, design, and digital media in university hackathons and creative workshops. Every weekend brought a new experiment, whether an interactive prototype or a community initiative.
            </p>

            <p>
              By 2021, the focus sharpened into purpose-driven UX and product engineering. That focus crystallized into <strong className="text-slate-950 dark:text-white font-bold">Habarala</strong> — an agritech platform solving real-world agricultural problems for smallholder farmers. The project gained international recognition, winning the Southeast Asia Region Championship and advancing as a World Finalist in the prestigious Microsoft Imagine Cup. It was the moment technology shifted from what <em>could</em> be built to what <em>should</em> be solved.
            </p>

            <p>
              In 2022, an internship under <strong className="text-slate-950 dark:text-white font-bold">Babette</strong> marked the first step beyond Sri Lanka. What began as a short-term international opportunity grew into a deep long-term professional partnership. In fact, the name <em className="text-slate-950 dark:text-white">&ldquo;Theweb&rdquo;</em> was originally given by Babette — an idea that was still taking shape.
            </p>

            <p>
              Over the next two years, that relationship expanded into over 90 digital design and development projects for Norwegian businesses across logistics, finance, health, and enterprise SaaS.
            </p>

            <p>
              In 2023, Theweb Agency was formally established. Today, we work with ambitious founders and established enterprises across the world, bringing the same core philosophy to every line of code and every pixel:
            </p>

            {/* Pull Quote Callout directly on the page */}
            <div className="my-12 sm:my-16 p-8 sm:p-12 rounded-3xl bg-blue-500/[0.05] border-l-4 border-blue-500 dark:bg-blue-500/[0.08] text-slate-950 dark:text-white font-medium text-xl sm:text-2xl italic leading-relaxed">
              &ldquo;Technology should be useful. If it doesn&apos;t make life easier, faster, or more understandable for the person using it, it isn&apos;t finished yet.&rdquo;
            </div>

            {/* Continuing Story Section */}
            <p>
              As we grow, the vision remains anchored in the same core values: quiet confidence, radical honesty, and relentless craft. We believe that world-class digital products can be engineered from anywhere in the world when driven by genuine empathy and clear communication.
            </p>

            <p>
              Every project is a chapter in this ongoing journey. We continue to learn, iterate, and build alongside people who share our passion for creating things that matter.
            </p>
          </div>

          {/* Bottom Actions Bar directly on page */}
          <div className="mt-14 sm:mt-20 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
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

        {/* Global Contact CTA */}
        <div className="mt-24 sm:mt-32">
          <ContactCTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}
