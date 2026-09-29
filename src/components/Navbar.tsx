"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("HOME");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", href: "#hero" },
    { label: "ABOUT", href: "#about" },
    { label: "SERVICES", href: "#what-we-do" },
    { label: "PORTFOLIO", href: "#work" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#06080e]/85 backdrop-blur-lg border-b border-cyan-500/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        {/* Theweb Official White Logo Image */}
        <Link href="#hero" className="flex items-center group">
          <div className="relative h-7 sm:h-8 w-32 sm:w-36 flex items-center">
            <Image
              src="/nav-logo-white.webp"
              alt="Theweb Agency"
              width={145}
              height={34}
              className="object-contain h-full w-auto filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveNav(item.label)}
                className={`relative text-xs font-semibold tracking-wider transition-colors duration-200 py-1 ${
                  isActive ? "text-white font-bold" : "text-slate-300 hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] rounded-full animate-in fade-in" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/40 hover:border-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] group"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#06080e]/95 backdrop-blur-2xl border-b border-cyan-500/20 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveNav(item.label);
                  setMobileMenuOpen(false);
                }}
                className="text-sm font-semibold tracking-wider text-slate-200 hover:text-cyan-400 py-1"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/[0.08]">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex justify-center items-center gap-2 w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
