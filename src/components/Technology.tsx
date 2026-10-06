"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

interface TechItem {
  name: string;
  category: "frontend" | "backend" | "design" | "ai";
  tag: string;
  color: string;
  icon: () => React.JSX.Element;
}

export default function Technology() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const technologies: TechItem[] = [
    // Frontend & Fullstack
    {
      name: "Next.js",
      category: "frontend",
      tag: "App Router / SSR",
      color: "from-black to-slate-700 dark:from-white dark:to-slate-300",
      icon: () => (
        <svg viewBox="0 0 180 180" className="w-7 h-7" fill="none">
          <circle cx="90" cy="90" r="90" className="fill-black dark:fill-white" />
          <path
            d="M149.508 157.067L69.142 54H54V125.97h12.115V69.384l72.937 94.047a90.233 90.233 0 0010.456-6.364z"
            className="fill-white dark:fill-black"
          />
          <path d="M115.455 54H127v72h-11.545V54z" className="fill-white dark:fill-black" />
        </svg>
      ),
    },
    {
      name: "React 19",
      category: "frontend",
      tag: "Component Architecture",
      color: "from-cyan-400 to-blue-500",
      icon: () => (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      name: "TypeScript",
      category: "frontend",
      tag: "Type-Safe Contracts",
      color: "from-blue-600 to-blue-400",
      icon: () => (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="20" fill="#3178C6" />
          <path
            fill="#fff"
            d="M72.2 81.3c2.4 3.9 6 6.3 11 6.3 4.5 0 7.3-2.3 7.3-5.5 0-3.9-3.7-5.3-10.2-8.2-9-4-14.8-8.5-14.8-18.7 0-9.6 7.4-16.8 19-16.8 8.1 0 13.9 2.7 17.8 8.7l-7.9 5.3c-2.1-3.4-4.8-4.8-9.2-4.8-4.1 0-6.6 2.2-6.6 4.9 0 3.3 2.9 4.6 9.3 7.4 9.9 4.4 15.8 8.7 15.8 19.3 0 11.2-8.7 17.5-20.7 17.5-10.8 0-18.1-4.7-22-11.7l11.2-3.7zM42.4 40.2h32.7v9.8H59.4v54.7H47.1V50H32.4v-9.8h10z"
          />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      tag: "Utility & Tokens",
      color: "from-sky-400 to-cyan-500",
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 6.00018C8 6.00018 5.5 8.00018 4.5 12.0002C6 10.0002 7.75 9.25018 9.75 9.75018C10.892 10.0357 11.708 10.8624 12.614 11.7806C14.089 13.2754 15.792 15.0002 20 15.0002C24 15.0002 26.5 13.0002 27.5 9.00018C26 11.0002 24.25 11.7502 22.25 11.2502C21.108 10.9647 20.292 10.138 19.386 9.21976C17.911 7.72498 16.208 6.00018 12 6.00018ZM4.5 15.0002C0.5 15.0002 -2 17.0002 -3 21.0002C-1.5 19.0002 0.25 18.2502 2.25 18.7502C3.392 19.0357 4.208 19.8624 5.114 20.7806C6.589 22.2754 8.292 24.0002 12.5 24.0002C16.5 24.0002 19 22.0002 20 18.0002C18.5 20.0002 16.75 20.7502 14.75 20.2502C13.608 19.9647 12.792 19.138 11.886 18.2198C10.411 16.725 8.708 15.0002 4.5 15.0002Z"
            fill="#38BDF8"
          />
        </svg>
      ),
    },
    {
      name: "Vanilla CSS",
      category: "frontend",
      tag: "Custom Motion & Canvas",
      color: "from-blue-500 to-indigo-600",
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
          <path d="M3 2L5 20L12 22L19 20L21 2H3Z" fill="#1572B6" />
          <path d="M12 3.8V20.1L17.5 18.6L19.2 3.8H12Z" fill="#33A9DC" />
          <path
            d="M7 6.5H17L16.6 9.5H9.6L9.9 12.5H16.2L15.6 17.5L12 18.5L8.4 17.5L8.2 15H6.2L6.6 19L12 20.5L17.4 19L18.4 6.5H7V6.5Z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      name: "Vue.js",
      category: "frontend",
      tag: "Progressive Framework",
      color: "from-emerald-500 to-teal-600",
      icon: () => (
        <svg viewBox="0 0 261.76 226.69" className="w-8 h-8">
          <path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#42b883" />
          <path d="M161.096.001l-30.225 52.351L100.647.001H52.246l78.626 136.181L209.479.001z" fill="#35495e" />
        </svg>
      ),
    },

    // Design & UX
    {
      name: "Figma",
      category: "design",
      tag: "Design Systems & Tokens",
      color: "from-purple-500 to-pink-500",
      icon: () => (
        <svg viewBox="0 0 38 57" className="w-8 h-8">
          <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1abcfe" />
          <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0acf83" />
          <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#ff7262" />
          <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#f24e1e" />
          <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#a259ff" />
        </svg>
      ),
    },
    {
      name: "Storybook",
      category: "design",
      tag: "Component Documentation",
      color: "from-pink-500 to-rose-500",
      icon: () => (
        <svg viewBox="0 0 256 322" className="w-8 h-8">
          <path
            fill="#FF4785"
            d="M239.5 31.9c-2.4-7.4-8.8-13-16.7-14.7L18.8 0C8.5 0 0 8.5 0 18.8v284.4C0 313.5 8.5 322 18.8 322h198.8c10.3 0 18.8-8.5 18.8-18.8V44.2l3.1-12.3z"
          />
          <path
            fill="#FFFFFF"
            d="M182.2 121.3c-2.6-7.3-8.8-12.7-16.2-14.3l-26.6-5.8c-2.4-.5-4.8.9-5.3 3.3l-1.6 7.4c-.5 2.4.9 4.8 3.3 5.3l18.4 4c2.8.6 4.8 3.1 4.7 6-.1 2.9-2.3 5.3-5.2 5.5l-27.1 1.7c-3.7.2-6.5 3.3-6.2 7l1.5 23.3c.2 3.7 3.3 6.5 7 6.2l30.9-1.9c7.6-.5 13.8-6.1 14.8-13.6l1.6-13.7c.6-4.5 1-9 1-13.5 0-.5 0-.9-.1-1.4z"
          />
        </svg>
      ),
    },

    // AI & Automation
    {
      name: "OpenAI / Claude",
      category: "ai",
      tag: "LLM APIs & Agents",
      color: "from-emerald-400 to-teal-500",
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
          <path
            d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.259 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7466-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7944.7944 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4945 4.4947zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3428 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866A4.504 4.504 0 0 1 2.3428 7.8956zm16.5991 3.8558L13.1038 8.383 15.1239 7.215a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6773a.79.79 0 0 0-.4068-.6818zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.6048zm-12.641 4.135l-2.02-1.1635a.0804.0804 0 0 1-.038-.052V6.0673a4.504 4.504 0 0 1 7.3756-3.4537l-.142.0805-4.7782 2.7582a.7944.7944 0 0 0-.3974.6813v6.7369z"
            fill="#10A37F"
          />
        </svg>
      ),
    },
    {
      name: "Python",
      category: "ai",
      tag: "Data & ML Pipelines",
      color: "from-blue-500 to-amber-400",
      icon: () => (
        <svg viewBox="0 0 110 110" className="w-8 h-8">
          <path
            fill="#3776AB"
            d="M54.5 5c-27 0-25.3 11.7-25.3 11.7l.1 12.1h25.7v3.7H21.2C9.5 32.5 0 39.4 0 54.3c0 14.9 9.8 21.3 21.2 21.3h7.2v-10.2c0-11.7 10.1-11.7 10.1-11.7h25.4c11.7 0 11.7-9.8 11.7-9.8V16.7S75.8 5 54.5 5zm-14.3 7.8c2.4 0 4.4 2 4.4 4.4s-2 4.4-4.4 4.4-4.4-2-4.4-4.4 2-4.4 4.4-4.4z"
          />
          <path
            fill="#FFD43B"
            d="M55.5 105c27 0 25.3-11.7 25.3-11.7l-.1-12.1H55v-3.7h33.8c11.7 0 21.2-6.9 21.2-21.8 0-14.9-9.8-21.3-21.2-21.3h-7.2v10.2c0 11.7-10.1 11.7-10.1 11.7H46.1c-11.7 0-11.7 9.8-11.7 9.8v27.2s-.2 11.7 21.1 11.7zm14.3-7.8c-2.4 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4 4.4 2 4.4 4.4-2 4.4-4.4 4.4z"
          />
        </svg>
      ),
    },

    // Backend, Cloud & CMS
    {
      name: "Node.js",
      category: "backend",
      tag: "Server Runtimes & APIs",
      color: "from-green-600 to-emerald-500",
      icon: () => (
        <svg viewBox="0 0 32 32" className="w-8 h-8">
          <path
            fill="#5FA04E"
            d="M16 2.5l12.1 7v14l-12.1 7-12.1-7v-14l12.1-7z"
          />
          <path
            fill="#FFFFFF"
            d="M19.7 18.2c-.2.1-.4.2-.6.3-.6.2-1.3.4-2 .4-1.7 0-2.6-.7-2.6-2.1v-4.1h2.5v3.9c0 .6.3.9 1 .9.3 0 .7-.1 1-.2v.9zm-7.9-6.3h2.4v9.3h-2.4v-9.3zm1.2-1.7c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4z"
          />
        </svg>
      ),
    },
    {
      name: "Supabase",
      category: "backend",
      tag: "PostgreSQL & Realtime Auth",
      color: "from-emerald-500 to-green-600",
      icon: () => (
        <svg viewBox="0 0 109 113" className="w-8 h-8">
          <path
            d="M63.7 111.4c-3.1 3.9-9.5 1.7-9.5-3.3V67.8H9.3c-7.2 0-10.9-8.6-5.9-13.7L59.7 1.8c3.1-3.9 9.5-1.7 9.5 3.3v40.3h44.9c7.2 0 10.9 8.6 5.9 13.7L63.7 111.4z"
            fill="#3ECF8E"
          />
        </svg>
      ),
    },
    {
      name: "PostgreSQL",
      category: "backend",
      tag: "Relational Database",
      color: "from-blue-600 to-indigo-700",
      icon: () => (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path
            fill="#336791"
            d="M64 8C33.1 8 8 33.1 8 64c0 30.9 25.1 56 56 56 30.9 0 56-25.1 56-56C120 33.1 94.9 8 64 8zm24.6 42.8c-1.3 5.4-3.4 10.6-6.2 15.4 3.9 4.3 6.9 9.5 8.7 15.1-4.2-1.8-8.6-3-13.1-3.6-2.5 5.5-6.2 10.3-10.8 14.1 1.7-4.4 2.6-9.1 2.6-13.9 0-3.6-.5-7.1-1.6-10.4-3.5 3.3-7.8 5.7-12.5 7.1-1.3-4.5-1.7-9.2-1.2-13.8 4.7.7 9.5.4 14.1-.9 2.4-4.8 3.9-10 4.4-15.5 3.2-1 6.5-1.6 9.8-1.7 2.1 2.5 4 5.3 5.8 8.1z"
          />
        </svg>
      ),
    },
    {
      name: "Vercel",
      category: "backend",
      tag: "Edge Infrastructure",
      color: "from-slate-900 to-black dark:from-white dark:to-slate-300",
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M12 1L24 22H0L12 1Z" className="text-black dark:text-white" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "AWS",
      category: "backend",
      tag: "Cloud Scalability",
      color: "from-amber-500 to-orange-500",
      icon: () => (
        <svg viewBox="0 0 64 38" className="w-8 h-8">
          {/* AWS 'a' */}
          <path
            className="fill-[#232F3E] dark:fill-white"
            d="M17.4 20.8c-2.4 0-4.4.7-5.9 2.1-1.5 1.4-2.2 3.3-2.2 5.7 0 2.3.7 4.1 2 5.4 1.3 1.3 3.2 1.9 5.6 1.9 1.9 0 3.6-.4 5-1.4 1.4-.9 2.5-2.2 3.1-3.9v2.8h3.8v-18h-3.8v3.3c-1.1-1.3-2.3-2.3-3.6-2.9-1.3-.7-2.8-1-4-.1zm1.7 3.8c1.3 0 2.5.4 3.4 1.2.9.8 1.5 2 1.8 3.4v1.1c-.3 1.5-.9 2.7-1.8 3.5-.9.8-2.1 1.2-3.4 1.2-1.6 0-2.9-.4-3.7-1.4-.8-.9-1.3-2.3-1.3-4.2 0-1.9.4-3.4 1.3-4.4.9-1 2.1-1.5 3.7-1.5z"
          />
          {/* AWS 'w' */}
          <path
            className="fill-[#232F3E] dark:fill-white"
            d="M26.9 13h4.4l4.2 15.2 3.8-15.2h4.4l4.2 15.2 3.8-15.2h4.4l-6.1 20.1h-4.4l-4.2-14.7-4.2 14.7h-4.4l-6.1-20.1z"
          />
          {/* AWS 's' */}
          <path
            className="fill-[#232F3E] dark:fill-white"
            d="M59.2 18.9c-1.5-.6-2.8-1.5-3.9-2.7l-2.8 2.6c1.3 1.6 3 2.8 5.1 3.7 2 .9 4.3 1.3 6.7 1.3 3 0 5.5-.7 7.3-2.1 1.8-1.4 2.7-3.5 2.7-6.2 0-1.7-.4-3.1-1.3-4.2-.9-1.1-2.2-1.9-3.9-2.5-1.1-.4-2.6-.8-4.5-1.2-1.7-.3-2.9-.7-3.7-1.2-.7-.4-1.1-1-1.1-1.9 0-.8.4-1.5 1.1-2 .8-.5 1.9-.7 3.3-.7 1.2 0 2.5.2 3.7.7 1.2.4 2.2 1.2 3 2.1l2.7-2.6c-1.2-1.3-2.6-2.4-4.4-3-1.7-.7-3.7-1-5.9-1-2.8 0-5.1.7-6.8 2-1.7 1.4-2.6 3.3-2.6 5.8 0 1.6.4 3 1.3 4.1.9 1.1 2.2 1.9 3.9 2.5 1.1.4 2.7.8 4.6 1.2 1.6.3 2.8.7 3.6 1.2.7.5 1.1 1.1 1.1 2 0 .9-.4 1.7-1.2 2.3-.8.5-2.1.8-3.7.8-1.8 0-3.4-.4-4.8-1.1z"
          />
          {/* Official AWS orange smile arrow */}
          <path
            fill="#FF9900"
            d="M55.8 32c-7.7 4.2-18.6 6.5-28.3 6.5-13.6 0-25.8-3.6-35.1-9.7-.8-.5-.2-1.2.6-.9 9.3 5.3 21.6 8.5 35.5 8.5 8.7 0 18.5-1.9 25.5-5.6.8-.4 1.8.4 1.8 1.2zm2.1-2.5c-.8-1-2.6-2.4-4-2.7-.4-.1-.4-.4 0-.5 1.9-.3 4.8.4 6 1.4.3.3.2.7-.2.9-1.1.9-1.6 1.9-1.8 2.9 0 .4-.3.5-.5.2-.2-.4-.4-1.3-.5-2.2z"
          />
        </svg>
      ),
    },
    {
      name: "GraphQL",
      category: "backend",
      tag: "API Contracts & Schemas",
      color: "from-pink-600 to-fuchsia-600",
      icon: () => (
        <svg viewBox="0 0 400 400" className="w-8 h-8">
          <path
            fill="#E10098"
            d="M57.468 302.007l-16.9-9.76 159.5-276.26 16.9 9.76zm268.164 0l-159.5-276.26 16.9-9.76 159.5 276.26zM200 393.854l-16.9-9.76v-319.5l16.9-9.76zm-159.5-91.854l-16.9-9.76 276.26-159.5 16.9 9.76zm0-184.26l16.9-9.76 276.26 159.5-16.9 9.76zM40.5 200l9.76-16.9h300l9.76 16.9z"
          />
          <circle cx="200" cy="40" r="32" fill="#E10098" />
          <circle cx="200" cy="360" r="32" fill="#E10098" />
          <circle cx="61.436" cy="120" r="32" fill="#E10098" />
          <circle cx="338.564" cy="120" r="32" fill="#E10098" />
          <circle cx="61.436" cy="280" r="32" fill="#E10098" />
          <circle cx="338.564" cy="280" r="32" fill="#E10098" />
        </svg>
      ),
    },
    {
      name: "WordPress",
      category: "backend",
      tag: "Headless & Custom CMS",
      color: "from-sky-700 to-blue-800",
      icon: () => (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#21759B" d="M64 0C28.654 0 0 28.654 0 64s28.654 64 64 64 64-28.654 64-64S99.346 0 64 0z" />
          <path
            fill="#FFFFFF"
            d="M8.649 64c0 23.824 15.342 44.062 36.85 51.52L14.73 36.002C10.822 44.346 8.649 53.914 8.649 64zm79.13-3.21c0-7.294-2.617-12.353-4.86-16.326-2.986-5.01-5.914-9.155-5.914-14.168 0-5.542 4.22-10.669 10.3-10.669.467 0 .918.06 1.373.09C78.435 13.935 71.442 11.026 64 11.026c-19.645 0-36.877 10.518-46.33 26.248 1.309.04 2.544.067 3.543.067 5.71 0 14.53-.702 14.53-.702 2.955-.17 3.303 4.195.348 4.542 0 0-2.97.35-6.273.522l20.063 59.805 12.062-36.19-8.587-23.615c-2.97-.172-5.786-.522-5.786-.522-2.955-.17-2.607-4.712.348-4.542 0 0 9.006.702 14.33.702 5.71 0 14.53-.702 14.53-.702 2.955-.17 3.303 4.195.348 4.542 0 0-2.97.35-6.273.522l19.92 59.08 5.488-18.414c2.81-8.995 4.93-15.544 4.93-21.08zm-32.96 8.413L37.07 120.05c8.536 2.502 17.58 3.913 26.93 3.913 7.397 0 14.502-.907 21.328-2.527l-30.51-52.618zm63.023-33.1c.404 2.628.618 5.373.618 8.28 0 8.318-1.542 17.545-6.14 29.04L90.81 119.04C111.48 111.07 126 90.76 126 64c.002-13.844-5.343-26.43-14.158-35.897z"
          />
        </svg>
      ),
    },
  ];

  const filteredTechnologies =
    activeCategory === "all"
      ? technologies
      : technologies.filter((tech) => tech.category === activeCategory);

  const categories = [
    { id: "all", label: "All Technologies" },
    { id: "frontend", label: "Frontend & Fullstack" },
    { id: "backend", label: "Backend & Cloud" },
    { id: "design", label: "Design & UX" },
    { id: "ai", label: "AI & Automation" },
  ];

  return (
    <section
      id="technology"
      className="py-24 sm:py-32 relative border-t border-slate-200 dark:border-white/[0.06] bg-slate-50/50 dark:bg-[#07090e] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-4 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tools & Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Use the right tools. No dogma.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            There is no favourite technology for the sake of having one. WordPress, React, Next.js, AI, automation or something custom — the tools depend on what the project actually needs to succeed.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-md scale-[1.02]"
                  : "bg-white dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/[0.06] hover:bg-slate-100 dark:hover:bg-white/[0.08]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Unified Logo Showcase Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {filteredTechnologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="group relative p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0e121f] border border-slate-200/90 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/25 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default overflow-hidden flex items-center gap-3.5 sm:gap-4"
              >
                {/* Subtle colorful glow gradient on hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />

                {/* Logo Icon Box with Real Brand Colors */}
                <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center p-2.5 bg-slate-100/90 dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/[0.08] transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  <div className="transition-transform duration-300">
                    <Icon />
                  </div>
                </div>

                {/* Title & Tag */}
                <div className="min-w-0 flex-1">
                  <div className="text-sm sm:text-base font-bold text-slate-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors truncate">
                    {tech.name}
                  </div>
                  <div className="text-[11px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 truncate">
                    {tech.tag}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
