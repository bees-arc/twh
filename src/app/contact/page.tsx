import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import { Mail, Clock, MessageSquare, ShieldCheck, Globe2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Theweb — Have Something in Mind? Let's Build It",
  description:
    "Start your project inquiry with Theweb Agency. Direct access to designers and engineers. Fast 24-hour turnaround.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#08090d] text-white selection:bg-cyan-500 selection:text-black">
      <Navbar />

      <main className="pt-28 sm:pt-36">
        {/* Page Hero Header */}
        <section className="relative py-16 sm:py-20 border-b border-white/[0.06] overflow-hidden bg-grid-pattern">
          <div className="bg-glow-radial w-[500px] h-[500px] bg-blue-600 top-0 left-1/3 opacity-15" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-4 uppercase tracking-wider">
                Get in Touch
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
                Have something in mind? <br />
                <span className="text-gradient-accent">Let&apos;s build it.</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                Whether you have a crisp specification, an urgent challenge, or simply a question — we would love to hear from you.
              </p>
            </div>

            {/* Quick Guarantees Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              <div className="glass-panel p-5 rounded-2xl border border-white/[0.08] flex items-center gap-3">
                <Clock className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-white">24h Response</div>
                  <div className="text-xs text-slate-400">Guaranteed swift reply</div>
                </div>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-white/[0.08] flex items-center gap-3">
                <Globe2 className="w-5 h-5 text-blue-400 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-white">Global Reach</div>
                  <div className="text-xs text-slate-400">Sri Lanka ⇄ Norway & Worldwide</div>
                </div>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-white/[0.08] flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-white">No Dogma</div>
                  <div className="text-xs text-slate-400">Pragmatic scoping & pricing</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Contact Project Builder */}
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
