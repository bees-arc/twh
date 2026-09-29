import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutStory from "@/components/AboutStory";
import Founder from "@/components/Founder";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import { Sparkles, Globe2, Award, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "About Theweb — Our Journey, Philosophy & Founder",
  description:
    "Theweb started with a simple idea: technology should be useful. From university hackathons and Microsoft Imagine Cup to 90+ Norwegian projects and beyond.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#08090d] text-white selection:bg-cyan-500 selection:text-black">
      <Navbar />

      <main className="pt-28 sm:pt-36">
        {/* Page Hero Header */}
        <section className="relative py-16 sm:py-24 border-b border-white/[0.06] overflow-hidden bg-grid-pattern">
          <div className="bg-glow-radial w-[500px] h-[500px] bg-blue-600 top-0 right-1/4 opacity-15" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-4 uppercase tracking-wider">
                Our Story & Philosophy
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
                The journey behind <br />
                <span className="text-gradient-accent">Theweb Agency.</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                Theweb didn&apos;t begin with a business plan. It grew from years of exploring design, technology and the possibilities that come from bringing the two together.
              </p>
            </div>

            {/* Quick Fact Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="glass-panel p-5 rounded-2xl border border-white/[0.08]">
                <Sparkles className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-white">2019</div>
                <div className="text-xs text-slate-400">First experiments & hackathons</div>
              </div>
              <div className="glass-panel p-5 rounded-2xl border border-white/[0.08]">
                <Award className="w-5 h-5 text-amber-400 mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-white">Imagine Cup</div>
                <div className="text-xs text-slate-400">SEA Champion & World Finalist</div>
              </div>
              <div className="glass-panel p-5 rounded-2xl border border-white/[0.08]">
                <HeartHandshake className="w-5 h-5 text-purple-400 mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-white">Babette</div>
                <div className="text-xs text-slate-400">Anchor partnership in Norway</div>
              </div>
              <div className="glass-panel p-5 rounded-2xl border border-white/[0.08]">
                <Globe2 className="w-5 h-5 text-emerald-400 mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-white">90+ Projects</div>
                <div className="text-xs text-slate-400">International deployments</div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Timeline & Philosophy */}
        <AboutStory />

        {/* Founder Spotlight & Journey */}
        <Founder />

        {/* Call to Action */}
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
