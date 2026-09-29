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
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#08090d] text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="pt-20">
        {/* What We Do */}
        <WhatWeDo />

        {/* How We Work: 01 to 05 */}
        <HowWeWork />

        {/* Theweb Approach: 5 Principles */}
        <ThewebApproach />

        {/* Technology Stack */}
        <Technology />

        {/* Contact CTA */}
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
