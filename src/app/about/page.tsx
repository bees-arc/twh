import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutStory from "@/components/AboutStory";
import Founder from "@/components/Founder";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Theweb — Our Journey, Philosophy & Founder",
  description:
    "Theweb started with a simple idea: technology should be useful. From university hackathons and Microsoft Imagine Cup to 90+ Norwegian projects and beyond.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#08090d] text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="pt-20">
        {/* Full Story & Chronological Timeline */}
        <AboutStory />

        {/* Founder Spotlight & Journey */}
        <Founder />

        {/* Contact CTA */}
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
