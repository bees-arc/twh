"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Clock, Globe, Heart } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  const [colomboTime, setColomboTime] = useState<string>("");
  const [osloTime, setOsloTime] = useState<string>("");

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setColomboTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Colombo",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
      setOsloTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Europe/Oslo",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050609] border-t border-white/[0.08] pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2">
            <div className="relative h-8 w-32 mb-4">
              <Image
                src={theme === "light" ? "/nav-logo-dark.webp" : "/nav-logo-white.webp"}
                alt="Theweb Agency"
                width={128}
                height={32}
                className="object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-sm">
              Theweb Agency. Established 2023. Transforming ideas into high-impact digital products, websites, and brand experiences.
            </p>
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] inline-block">
              <p className="text-xs font-mono text-slate-400">
                &ldquo;Technology should be useful.&rdquo;
              </p>
            </div>
          </div>

          {/* Dual Headquarters & World Time */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Time & Presence
            </h4>
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="flex items-center justify-between text-xs text-slate-300 mb-1">
                  <span className="font-semibold text-white">Colombo, LK</span>
                  <span className="font-mono text-blue-400">{colomboTime || "--:--"}</span>
                </div>
                <div className="text-[11px] text-slate-500">UTC+5:30 • Primary Hub</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="flex items-center justify-between text-xs text-slate-300 mb-1">
                  <span className="font-semibold text-white">Oslo, NO</span>
                  <span className="font-mono text-purple-400">{osloTime || "--:--"}</span>
                </div>
                <div className="text-[11px] text-slate-500">UTC+1 • Partner Network</div>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Featured Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  What We Do & Services
                </Link>
              </li>
              <li>
                <Link href="/services#how-we-work" className="hover:text-white transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/services#approach" className="hover:text-white transition-colors">
                  Theweb Approach
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Theweb
                </Link>
              </li>
              <li>
                <Link href="/about#founder" className="hover:text-white transition-colors">
                  Founder Story
                </Link>
              </li>
              <li>
                <Link href="/services#technology" className="hover:text-white transition-colors">
                  Technology Stack
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Inquiries */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Inquiries
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="mailto:hello@theweb.agency"
                  className="text-slate-300 hover:text-white transition-colors font-medium"
                >
                  hello@theweb.agency
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Start a Project Inquiry →
                </a>
              </li>
              <li className="pt-2 text-slate-500 text-[11px]">
                Open for bespoke digital products, full-stack websites & UI/UX systems.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Theweb Agency. All rights reserved. Technology should be useful.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
