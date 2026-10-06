import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FounderStoryContent from "@/components/FounderStoryContent";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

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
        <FounderStoryContent />

        {/* Global Contact CTA */}
        <div className="mt-24 sm:mt-32">
          <ContactCTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}
