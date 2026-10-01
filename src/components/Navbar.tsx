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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "SERVICES", href: "/services" },
    { label: "PORTFOLIO", href: "/portfolio" },
    { label: "CONTACT", href: "/contact" },
  ];

  const isHomePage = pathname === "/";
  const isLight = theme === "light";
  const shouldShowSolidBg = scrolled || !isHomePage;

  const isLightNavbar = isLight && shouldShowSolidBg;
  const logoSrc = isLightNavbar ? "/logo%20blue.svg" : "/logo%20white.svg";

  return (
    <>
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
            onClick={() => setMobileMenuOpen(true)}
            className={`md:hidden p-2 rounded-xl border cursor-pointer ${
              isLight && shouldShowSolidBg
                ? "bg-slate-100 border-slate-300 text-slate-800"
                : "bg-cyan-950/40 border-cyan-500/30 text-cyan-300 hover:text-white"
            }`}
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>

      {/* FULL-SCREEN 100% SOLID OPAQUE MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-[9999] w-full h-[100dvh] flex flex-col justify-between p-6 sm:p-10 md:hidden overflow-y-auto ${
            isLight
              ? "bg-white text-slate-900"
              : "bg-[#07090e] text-white"
          }`}
          style={{
            backgroundColor: isLight ? "#ffffff" : "#07090e",
            opacity: 1,
          }}
        >
          {/* Top Bar inside Full Screen Menu */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-white/[0.08]">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center"
            >
              <div className="relative h-8 w-36 flex items-center">
                <Image
                  src={isLight ? "/logo%20blue.svg" : "/logo%20white.svg"}
                  alt="Theweb"
                  width={140}
                  height={32}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                  isLight
                    ? "bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200"
                    : "bg-cyan-950/40 border-cyan-500/30 text-cyan-300 hover:bg-cyan-900/50"
                }`}
              >
                {theme === "dark" ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-blue-600" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                  isLight
                    ? "bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200"
                    : "bg-white/[0.06] border-white/[0.1] text-white hover:bg-white/[0.12]"
                }`}
                aria-label="Close Mobile Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation Links with large editorial typography */}
          <div className="flex flex-col justify-center gap-6 my-auto py-8">
            {navItems.map((item, index) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-baseline justify-between py-2 transition-all cursor-pointer"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-cyan-500 font-bold">
                      0{index + 1}
                    </span>
                    <span
                      className={`text-3xl sm:text-4xl font-extrabold tracking-tight transition-colors ${
                        isActive
                          ? "text-blue-600 dark:text-cyan-400"
                          : isLight
                          ? "text-slate-800 group-hover:text-blue-600"
                          : "text-slate-200 group-hover:text-white"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                  <ArrowRight
                    className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 ${
                      isActive
                        ? "text-blue-600 dark:text-cyan-400"
                        : "text-slate-400 opacity-60"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Bottom Area */}
          <div className="pt-6 border-t border-slate-200 dark:border-white/[0.08] flex flex-col gap-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex justify-center items-center gap-3 w-full py-4 rounded-2xl text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.4)] cursor-pointer"
            >
              <span>Let&apos;s Build It Together</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-1">
              <span>Sri Lanka ⇄ Norway</span>
              <a
                href="mailto:info@theweb.lk"
                className="hover:underline text-cyan-600 dark:text-cyan-400"
              >
                info@theweb.lk
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
