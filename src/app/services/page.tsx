import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import WhatWeDo from "@/components/WhatWeDo";
import HowWeWork from "@/components/HowWeWork";
import ThewebApproach from "@/components/ThewebApproach";
import Technology from "@/components/Technology";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services & Capabilities — Theweb Agency",
  description:
    "Explore our capabilities in Digital Products, High-Performance Websites, and Brand & Experience design. From idea to something people can actually use.",
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#08090d] text-white selection:bg-cyan-500 selection:text-black">
      <Navbar />

      <main className="pt-28 sm:pt-36">
        {/* Page Hero Header */}
        <section className="relative py-16 sm:py-24 border-b border-white/[0.06] overflow-hidden bg-grid-pattern">
          <div className="bg-glow-radial w-[500px] h-[500px] bg-purple-600 top-0 left-1/4 opacity-15" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20 mb-4 uppercase tracking-wider">
                Services, Process & Approach
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
                From idea to something <br />
                <span className="text-gradient-accent">people can actually use.</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                We craft purpose-built digital products, blazing-fast websites, and cohesive brand systems that solve real problems and drive lasting growth.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <WhatWeDo />

        {/* How We Work: 01 to 05 */}
        <HowWeWork />

        {/* Theweb Approach: 5 Principles */}
        <ThewebApproach />

        {/* Technology Stack */}
        <Technology />

        {/* Call to Action */}
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
