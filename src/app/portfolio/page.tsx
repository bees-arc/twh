import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FeaturedWork from "@/components/FeaturedWork";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Insights from "@/components/Insights";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies — Theweb Agency",
  description:
    "Explore our featured digital products, enterprise platforms, and award-winning projects like Habarala and 90+ Norwegian deployments.",
};

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#08090d] text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="pt-20">
        {/* Featured Case Studies with Interactive Modal & Filter */}
        <FeaturedWork />

        {/* Partners & Clients */}
        <Partners />

        {/* Testimonials */}
        <Testimonials />

        {/* Insights */}
        <Insights />

        {/* Contact CTA */}
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
