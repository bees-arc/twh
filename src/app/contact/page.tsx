import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Theweb — Have Something in Mind? Let's Build It",
  description:
    "Start your project inquiry with Theweb Agency. Direct access to designers and engineers. Fast 24-hour turnaround.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#06080e] text-white">
      <Navbar />

      <main className="pt-20">
        {/* Interactive Contact Project Builder */}
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
