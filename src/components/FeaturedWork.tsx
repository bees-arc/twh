"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Award, X, Sparkles, CheckCircle, Eye, Globe2, Layers } from "lucide-react";

export interface FeaturedProject {
  id: string;
  title: string;
  country: string;
  category: string;
  image: string;
  tagline: string;
  shortDesc: string;
  badge?: string;
  metrics: string;
  client: string;
  year: string;
  deliverables: string[];
  techStack: string[];
  fullStory: {
    problem: string;
    solution: string;
    impact: string;
  };
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "muskelklinikken",
    title: "Muskelklinikken",
    country: "Norway",
    category: "Healthcare & Digital Platform",
    image: "/Website/Featured/Group%201507.png",
    tagline: "Totalbehandling & Profesjonell Trening",
    shortDesc: "Elevated Scandinavian clinical platform and seamless patient intake for Oslo's premier physical therapy clinic.",
    badge: "99.8% Patient Satisfaction",
    metrics: "45% Online Booking Growth",
    client: "Muskelklinikken AS (Oslo, Norway)",
    year: "2023 – 2024",
    deliverables: [
      "Bespoke Web Platform",
      "Patient Booking UX",
      "Mobile-First Experience",
      "Clinical Service Pathways",
      "Brand Architecture",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Headless Booking API", "Figma"],
    fullStory: {
      problem:
        "Muskelklinikken required an elevated digital presence matching their stellar reputation as leading physical therapists and performance specialists in Oslo, removing manual friction from patient appointments.",
      solution:
        "Designed a minimalist Scandinavian web ecosystem with frictionless patient intake, specialist profiles, treatment guides, and automated appointment synchronizations.",
      impact:
        "Increased online bookings by 45% within 60 days, establishing a modern digital gateway trusted by top athletes and rehabilitation patients across Norway.",
    },
  },
  {
    id: "nihi",
    title: "NIHI",
    country: "Norway",
    category: "Education & Digital Academy",
    image: "/Website/Featured/Frame%2023-1.png",
    tagline: "Norges Idretts- og Helseinstitutt",
    shortDesc: "Digital academy and course registration portal for Norway's premier sports and health education institute.",
    badge: "Nordic Education Portal",
    metrics: "2x Remote Enrollments",
    client: "NIHI (Norway)",
    year: "2023 – 2024",
    deliverables: [
      "Course Catalog & LMS",
      "Student Enrollment Portal",
      "Modular Curriculum UX",
      "Nordic Design System",
      "High-Speed Edge Delivery",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs"],
    fullStory: {
      problem:
        "Health practitioners and fitness coaches found it cumbersome to navigate multi-tier certification pathways and course registrations across Scandinavian regions through legacy sites.",
      solution:
        "Engineered an intuitive, high-speed educational platform with dynamic course filters, syllabus previews, and streamlined enrollment checkout.",
      impact:
        "Doubled student intake across remote Norwegian counties and reduced administrative admission inquiries by over 60%.",
    },
  },
  {
    id: "avolutiontech",
    title: "Avolutiontech",
    country: "Australia",
    category: "AI & Autonomous Robotics",
    image: "/Website/Featured/Frame%2022.png",
    tagline: "Autonomous Drone Vision & Precision Farming",
    shortDesc: "Autonomous aerial drone telemetry and multispectral computer vision dashboard for modern agriculture.",
    badge: "AI Vision Dashboard",
    metrics: "10,000+ Ha Monitored",
    client: "Avolutiontech (Australia)",
    year: "2023 – 2024",
    deliverables: [
      "Drone Telemetry Dashboard",
      "Multispectral Health Mapping",
      "AI Crop Analytics",
      "Enterprise Web Portal",
      "Real-Time Telemetry UI",
    ],
    techStack: ["Next.js", "Computer Vision", "Python", "WebGL", "REST / WebSockets"],
    fullStory: {
      problem:
        "Commercial agricultural managers and drone operators needed real-time flight telemetry and actionable multispectral crop health insights without needing complex desktop software.",
      solution:
        "Developed a modern cloud-first dashboard with real-time drone mission tracking, automated crop stress heatmaps, and AI anomaly warning triggers.",
      impact:
        "Enabled multi-drone autonomous scheduling across thousands of hectares, empowering commercial farms with 30% faster pest and water stress detection.",
    },
  },
  {
    id: "maleka-morani",
    title: "Maleka Morani",
    country: "USA",
    category: "Brand & High-Fashion",
    image: "/Website/Featured/Frame%2023.png",
    tagline: "International Pageant Icon & Fashion Personality",
    shortDesc: "High-fashion editorial digital portfolio and global sponsorship media kit for Mrs. America contestant.",
    badge: "Global Fashion Editorial",
    metrics: "150K+ Portfolio Views",
    client: "Maleka Morani (USA)",
    year: "2024",
    deliverables: [
      "Haute-Couture Portfolio",
      "Interactive Press Kit",
      "Sponsorship Portal",
      "Cinematic Motion Design",
      "Global CDN Hosting",
    ],
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel Edge", "Responsive Media"],
    fullStory: {
      problem:
        "Needed a sophisticated, high-impact digital presence to anchor international press, runway features, philanthropy initiatives, and corporate sponsorship requests.",
      solution:
        "Built a luxury editorial experience featuring fluid animations, high-resolution media galleries, and direct media kit download access for global journalists.",
      impact:
        "Facilitated major corporate sponsorships and generated widespread media engagement throughout international pageant tours and philanthropic galas.",
    },
  },
  {
    id: "ambuluwawa",
    title: "Ambuluwawa",
    country: "Sri Lanka",
    category: "Tourism & Cultural Heritage",
    image: "/Website/Featured/Frame%2023-2.png",
    tagline: "Biodiversity Complex & Iconic Eco-Sanctuary",
    shortDesc: "Immersive visitor portal and digital trail companion for Sri Lanka's iconic biodiversity mountain sanctuary.",
    badge: "Eco-Tourism Landmark",
    metrics: "300,000+ Digital Visitors",
    client: "Ambuluwawa Biodiversity Complex (Sri Lanka)",
    year: "2023 – 2024",
    deliverables: [
      "Interactive Visitor Guide",
      "Weather & Trail Conditions",
      "Heritage Storytelling UX",
      "Ticketing Information",
      "Mobile Travel Companion",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Interactive Maps", "PWA"],
    fullStory: {
      problem:
        "International tourists and pilgrims needed up-to-date climbing guidelines, weather forecasts, and historical context before visiting the 3,500-foot spiral tower summit.",
      solution:
        "Crafted an immersive visual portal celebrating the biodiversity, architectural history, and safety tips with fast loading speeds across mobile connections.",
      impact:
        "Reached over 300,000 tourists worldwide, elevating Ambuluwawa to one of the most recognized eco-tourism destinations in South Asia.",
    },
  },
  {
    id: "autoways",
    title: "Autoways",
    country: "Sri Lanka",
    category: "Automotive & Commercial Fleet",
    image: "/Website/Featured/Frame%2023-3.png",
    tagline: "Commercial Transport & Heavy-Duty Mobility",
    shortDesc: "High-throughput commercial fleet catalog and B2B quote configurator for heavy-duty automotive solutions.",
    badge: "Commercial Logistics",
    metrics: "3x Faster Quotations",
    client: "Autoways (Sri Lanka)",
    year: "2023 – 2024",
    deliverables: [
      "Heavy-Duty Fleet Catalog",
      "Tire & Parts Finder",
      "B2B RFQ Generator",
      "Corporate Portal",
      "Emergency Service Locator",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Search Algorithm", "REST API"],
    fullStory: {
      problem:
        "Logistics fleets and commercial vehicle owners struggled with outdated phone/paper orders to identify compatible heavy-duty tires and spares.",
      solution:
        "Engineered an automotive catalog with instant vehicle-model and tire-specification matching, automated quote requests, and fast dealer inquiry dispatch.",
      impact:
        "Accelerated quote generation turnaround time by 3x, boosting commercial client conversions and regional distribution efficiency.",
    },
  },
];

export default function FeaturedWork() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalStudy, setActiveModalStudy] = useState<FeaturedProject | null>(null);
  const [activeModalTab, setActiveModalTab] = useState<"story" | "specs">("story");

  useEffect(() => {
    if (activeModalStudy) {
      document.body.style.overflow = "hidden";
      setActiveModalTab("story");
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModalStudy]);

  const categories = ["All", "Healthcare", "Education", "AI & Robotics", "Tourism", "Automotive"];

  const filteredProjects =
    selectedCategory === "All"
      ? featuredProjects
      : featuredProjects.filter((p) =>
          p.category.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  return (
    <section
      id="work"
      className="py-24 sm:py-32 relative border-t border-slate-200 dark:border-white/[0.06] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Featured Work & Selected Projects</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Work that makes an impact.
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-md text-sm sm:text-base leading-relaxed">
            Every project has a reason to exist. Explore selected digital products, platforms, and experiences crafted with purpose, beauty, and precision.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === category
                  ? "bg-slate-900 text-white dark:bg-white dark:text-black font-semibold shadow-md"
                  : "bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.04] text-slate-700 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.06]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 6 Featured Cards Grid - Matches user's reference image style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalStudy(project)}
              className="group relative rounded-[22px] sm:rounded-[26px] overflow-hidden aspect-[9/13] bg-white dark:bg-black border border-slate-200/90 dark:border-white/10 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col justify-end"
            >
              {/* Card Poster Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Permanent soft gradient at bottom: Soft translucent white in light theme, Black in dark theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent dark:from-black/90 dark:via-black/35 dark:to-transparent pointer-events-none transition-opacity duration-300" />

              {/* Normal State: Bottom Title & Country */}
              <div className="relative z-10 p-5 sm:p-6 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white tracking-tight leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-medium mt-0.5">
                  {project.country}
                </p>
              </div>

              {/* Hover State: Frosted glass overlay (Translucent white in light theme, Black in dark theme) */}
              <div className="absolute inset-0 z-20 p-5 sm:p-6 bg-white/75 dark:bg-black/80 backdrop-blur-md flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-blue-600 dark:text-blue-400 mb-1">
                    <Globe2 className="w-3 h-3" />
                    <span>{project.country}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white tracking-tight leading-snug mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-700 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                    {project.shortDesc}
                  </p>

                  {/* View Project Button: Dark button on light overlay, Light button on dark overlay */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalStudy(project);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3.5 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-400 dark:hover:text-black transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal ("wadi wisthraa" - Tabbed, No Ugly Scrollbar) */}
      {activeModalStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xl animate-in fade-in">
          <div className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-white dark:bg-[#0d101c] text-slate-900 dark:text-white rounded-3xl border border-slate-200 dark:border-white/15 shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="p-6 sm:p-8 pb-4 border-b border-slate-100 dark:border-white/[0.08] relative">
              {/* Close Button */}
              <button
                onClick={() => setActiveModalStudy(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-white/[0.08] hover:bg-slate-200 dark:hover:bg-white/[0.15] text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-wrap items-center gap-2 mb-2 pr-10">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  {activeModalStudy.category}
                </span>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08] inline-flex items-center gap-1">
                  <Globe2 className="w-3 h-3 text-blue-500" />
                  {activeModalStudy.country}
                </span>
                {activeModalStudy.badge && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-600 dark:text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                    <Award className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                    {activeModalStudy.badge}
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                {activeModalStudy.title}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1">
                {activeModalStudy.tagline}
              </p>

              {/* Interactive Tabs Header - Eliminates long single-page scroll */}
              <div className="flex items-center gap-2 mt-5">
                <button
                  onClick={() => setActiveModalTab("story")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeModalTab === "story"
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-sm"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-white/[0.05] dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  The Story & Solution
                </button>
                <button
                  onClick={() => setActiveModalTab("specs")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeModalTab === "specs"
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-sm"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-white/[0.05] dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  Deliverables & Tech Stack
                </button>
              </div>
            </div>

            {/* Modal Body - Smoothly scrollable with NO visible scrollbar */}
            <div className="p-6 sm:p-8 overflow-y-auto no-scrollbar flex-1">
              {activeModalTab === "story" ? (
                <div className="space-y-5 animate-in fade-in duration-200">
                  {/* Quick Specs Strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06]">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">Client</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{activeModalStudy.client}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">Timeline</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{activeModalStudy.year}</span>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">Key Result</span>
                      <span className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400">{activeModalStudy.metrics}</span>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="p-4 rounded-2xl bg-red-500/[0.04] border-l-4 border-red-500 dark:bg-red-500/[0.05]">
                    <h4 className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-1">
                      The Challenge
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {activeModalStudy.fullStory.problem}
                    </p>
                  </div>

                  {/* Approach & Solution */}
                  <div className="p-4 rounded-2xl bg-blue-500/[0.04] border-l-4 border-blue-500 dark:bg-blue-500/[0.05]">
                    <h4 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                      The Approach & Solution
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {activeModalStudy.fullStory.solution}
                    </p>
                  </div>

                  {/* Impact & Outcome */}
                  <div className="p-4 rounded-2xl bg-emerald-500/[0.04] border-l-4 border-emerald-500 dark:bg-emerald-500/[0.05]">
                    <h4 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
                      Impact & Outcome
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {activeModalStudy.fullStory.impact}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 animate-in fade-in duration-200">
                  {/* Key Deliverables */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-3">
                      Key Deliverables ({activeModalStudy.deliverables.length} core outputs)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeModalStudy.deliverables.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2.5 text-xs text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.07] px-3.5 py-2.5 rounded-xl"
                        >
                          <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                          <span className="font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies & Tools */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-3">
                      Technologies & Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeModalStudy.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-white/[0.06] px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/[0.08]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact Highlight Banner */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-transparent border border-blue-500/20">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400 block mb-1">
                      Headline Metric
                    </span>
                    <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {activeModalStudy.metrics}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom CTA Bar */}
            <div className="p-5 sm:p-6 border-t border-slate-100 dark:border-white/[0.08] bg-slate-50/50 dark:bg-white/[0.02] flex items-center justify-between">
              <button
                onClick={() => setActiveModalStudy(null)}
                className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white cursor-pointer"
              >
                ← Back to projects
              </button>
              <a
                href="#contact"
                onClick={() => setActiveModalStudy(null)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-slate-900 text-white dark:bg-white dark:text-black hover:opacity-90 transition-opacity shadow-sm"
              >
                <span>Discuss a similar project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

