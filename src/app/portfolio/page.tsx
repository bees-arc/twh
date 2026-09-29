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
    <div className="relative min-h-screen bg-[#08090d] text-white selection:bg-cyan-500 selection:text-black">
      <Navbar />

      <main className="pt-28 sm:pt-36">
        {/* Page Hero Header */}
        <section className="relative py-16 sm:py-24 border-b border-white/[0.06] overflow-hidden bg-grid-pattern">
          <div className="bg-glow-radial w-[500px] h-[500px] bg-cyan-600 top-0 right-1/3 opacity-15" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 mb-4 uppercase tracking-wider">
                Portfolio & Proven Track Record
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
                Work that solves <br />
                <span className="text-gradient-accent">real problems.</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                From Microsoft Imagine Cup World Finalist agritech solutions to 90+ international digital products for Norwegian businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Case Studies with Interactive Modal & Filter */}
        <FeaturedWork />

        {/* Partners & Clients */}
        <Partners />

        {/* Testimonials */}
        <Testimonials />

        {/* Insights */}
        <Insights />

        {/* Call to Action */}
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
