"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, Sparkles } from "lucide-react";

export default function ContactCTA() {
  const [projectType, setProjectType] = useState<string>("Digital Product");
  const [budget, setBudget] = useState<string>("$5k – $15k");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const projectTypes = [
    "Digital Product",
    "Website",
    "Brand & Experience",
    "AI & Automation",
    "Consultation",
  ];

  const budgetOptions = ["< $5k", "$5k – $15k", "$15k – $30k", "$30k+"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative border-t border-slate-200/80 dark:border-white/[0.08] bg-slate-50 dark:bg-[#07080d] transition-colors duration-300">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Value */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-4 uppercase tracking-wider">
              Ready to Collaborate
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
              Have something in mind? <br />
              <span className="text-gradient-accent">Let&apos;s build it.</span>
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Some projects start with a clear idea. Some start with a problem. Some start with a rough sketch, a conversation, or simply a question: <span className="text-slate-900 dark:text-white font-medium italic">“Could this work?”</span>
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Direct collaboration with senior engineers & designers</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Response within 24 hours guaranteed</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Transparent scoping & fixed or sprint-based timelines</span>
              </div>
            </div>

            {/* Quick Contact Badge */}
            <div className="p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] shadow-sm inline-flex flex-col gap-1">
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">
                Direct Email Inquiry
              </span>
              <a
                href="mailto:hello@theweb.agency"
                className="text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>hello@theweb.agency</span>
              </a>
            </div>
          </div>

          {/* Right Column: Project Builder Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#121626]/85 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-white/[0.1] shadow-xl dark:shadow-2xl">
              {submitted ? (
                <div className="text-center py-16 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    Message Received!
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto text-sm leading-relaxed mb-8">
                    Thank you for reaching out. We will review your project details and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage("");
                    }}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.08] dark:hover:bg-white/[0.15] text-slate-900 dark:text-white transition-colors"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Select Service Type */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono text-slate-500 dark:text-slate-400 mb-3 font-semibold">
                      I&apos;m interested in:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setProjectType(type)}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                            projectType === type
                              ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                              : "bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.06]"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Estimated Budget */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono text-slate-500 dark:text-slate-400 mb-3 font-semibold">
                      Estimated Project Budget:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setBudget(opt)}
                          className={`px-3 py-2 rounded-xl text-xs font-medium text-center transition-all cursor-pointer ${
                            budget === opt
                              ? "bg-slate-900 text-white dark:bg-white dark:text-black font-semibold shadow-md"
                              : "bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.06]"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Jensen"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-300 dark:border-white/[0.1] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-300 dark:border-white/[0.1] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Tell us about your project or idea *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="What are you trying to build? What problem are you solving? What timeline are you targeting?"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-300 dark:border-white/[0.1] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-2xl text-sm font-bold bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-black dark:hover:bg-slate-200 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Let&apos;s Build It Together</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
