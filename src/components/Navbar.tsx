"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "SERVICES", href: "/services" },
    { label: "PORTFOLIO", href: "/portfolio" },
    { label: "CONTACT", href: "/contact" },
  ];

  // In non-home pages, always keep background styled for clarity
  const isHomePage = pathname === "/";
  const isLight = theme === "light";
  const shouldShowSolidBg = scrolled || !isHomePage;

  const logoSrc = isLight && shouldShowSolidBg ? "/nav-logo-dark.webp" : "/nav-logo-white.webp";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldShowSolidBg
          ? isLight
            ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/80 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            : "bg-[#06080e]/90 backdrop-blur-xl border-b border-cyan-500/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        {/* Theweb Official Logo Image */}
        <Link href="/" className="flex items-center group">
          <div className="relative h-7 sm:h-8 w-32 sm:w-36 flex items-center">
            <Image
              src={logoSrc}
              alt="Theweb Agency"
              width={145}
              height={34}
              className="object-contain h-full w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            const linkTextColor =
              isLight && shouldShowSolidBg
                ? isActive
                  ? "text-blue-600 font-bold"
                  : "text-slate-600 hover:text-slate-900"
                : isActive
                ? "text-white font-bold"
                : "text-slate-300 hover:text-white";

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative text-xs font-semibold tracking-wider transition-colors duration-200 py-1 ${linkTextColor}`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] rounded-full animate-in fade-in" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button, Theme Toggle & Mobile Trigger */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Light and Dark Theme"
            className={`p-2.5 rounded-full border transition-all duration-300 flex items-center justify-center cursor-pointer ${
              isLight && shouldShowSolidBg
                ? "bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200"
                : "bg-cyan-950/40 border-cyan-500/30 text-cyan-300 hover:bg-cyan-900/50 hover:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
            }`}
            title={theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-300 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-blue-600 transition-transform hover:-rotate-12" />
            )}
          </button>

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/40 hover:border-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] group"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl border ${
              isLight && shouldShowSolidBg
                ? "bg-slate-100 border-slate-300 text-slate-800"
                : "bg-cyan-950/40 border-cyan-500/30 text-cyan-300 hover:text-white"
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden backdrop-blur-2xl border-b px-6 py-6 transition-all duration-300 ${
            isLight
              ? "bg-white/95 border-slate-200"
              : "bg-[#06080e]/95 border-cyan-500/20"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold tracking-wider py-1 ${
                    isActive
                      ? "text-blue-500 font-bold"
                      : isLight
                      ? "text-slate-800 hover:text-blue-600"
                      : "text-slate-200 hover:text-cyan-400"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-slate-200/20 flex items-center justify-between">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-xs font-semibold text-slate-400"
              >
                {theme === "dark" ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-blue-600" />}
                <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
              </button>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex justify-center items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
