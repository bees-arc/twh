import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import WhatWeDo from "@/components/WhatWeDo";
import HowWeWork from "@/components/HowWeWork";
import ThewebApproach from "@/components/ThewebApproach";
import AboutStory from "@/components/AboutStory";
import Founder from "@/components/Founder";
import Technology from "@/components/Technology";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Insights from "@/components/Insights";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08090d] text-white selection:bg-blue-600 selection:text-white">
      {/* Fixed Navigation Bar */}
      <Navbar />

      <main className="relative">
        {/* Hero Section with Live Stats & Statement */}
        <Hero />

        {/* Featured Work & Interactive Case Studies */}
        <FeaturedWork />

        {/* What We Do: Digital Products, Websites, Brand & Experience */}
        <WhatWeDo />

        {/* How We Work: 01 Understand -> 05 Improve */}
        <HowWeWork />

        {/* Theweb Approach: 5 Core Principles */}
        <ThewebApproach />

        {/* About Theweb: Story & Interactive Milestones (2019 - Today) */}
        <AboutStory />

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
