import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import WhatWeDo from "@/components/WhatWeDo";
import HowWeWork from "@/components/HowWeWork";
import ThewebApproach from "@/components/ThewebApproach";
import AboutIntro from "@/components/AboutIntro";
import Founder from "@/components/Founder";
import Technology from "@/components/Technology";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Insights from "@/components/Insights";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#08090d] text-slate-900 dark:text-white transition-colors duration-300 selection:bg-cyan-500 selection:text-black">
      {/* Fixed Navigation Bar */}
      <Navbar />

      <main className="relative">
        {/* Hero Section with Live Stats & Statement */}
        <Hero />

        {/* About Intro Section with link to full story */}
        <AboutIntro />

        {/* Featured Work & Interactive Case Studies */}
        <FeaturedWork />

        {/* What We Do: Digital Products, Websites, Brand & Experience */}
        <WhatWeDo />

        {/* How We Work: 01 Understand -> 05 Improve */}
        <HowWeWork />

        {/* Theweb Approach: 5 Core Principles */}
        <ThewebApproach />

        {/* Founder Spotlight & Detailed Background Modal */}
        <Founder />

        {/* Technology: Pragmatic Stack & Tools */}
        <Technology />

        {/* Partners & Worldwide Clients */}
        <Partners />

        {/* Testimonials from Norwegian Partners & International Competitions */}
        <Testimonials />

        {/* Insights & Articles */}
        <Insights />

        {/* Main CTA: Have something in mind? Let's build it. */}
        <ContactCTA />
      </main>

      {/* Global Footer with Live Timezones & Quick Links */}
      <Footer />
    </div>
  );
}
