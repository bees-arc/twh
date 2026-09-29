import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08090d",
};

export const metadata: Metadata = {
  title: "Theweb Agency — Turn Your Ideas Into Powerful Websites",
  description:
    "We build modern, high-performance websites and digital solutions that help businesses grow, get noticed and reach the world.",
  keywords: [
    "Theweb",
    "Modern Websites",
    "Digital Solutions",
    "Global Reach",
    "Next.js Agency",
    "UX Design",
    "Norway",
    "Sri Lanka",
  ],
  authors: [{ name: "Theweb Agency" }],
  icons: {
    icon: "/nav-logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#08090d] text-[#f8fafc] font-sans antialiased selection:bg-cyan-500 selection:text-black flex flex-col">
        {children}
      </body>
    </html>
  );
}
