"use client";

import { motion } from "framer-motion";

export function BrowserFrame() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
      className="relative mx-auto max-w-5xl perspective-[1200px]"
    >
      {/* Outer glow */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-b from-navy/20 via-transparent to-transparent blur-2xl" />

      {/* Computer frame */}
      <div className="relative rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-navy/10 overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/80 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-8">
            <div className="flex items-center justify-center gap-2 rounded-lg bg-white border border-slate-200 px-4 py-1.5 text-xs text-slate-400 max-w-md mx-auto">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              app.klaimos.ai/templates
            </div>
          </div>
        </div>

        {/* Product UI */}
        <div className="flex h-[420px] md:h-[500px] lg:h-[560px] overflow-hidden">
          {/* Sidebar */}
          <div className="hidden md:flex w-56 shrink-0 flex-col border-r border-slate-100 bg-slate-50/50">
            {/* Logo */}
            <div className="flex items-center gap-2 px-4 py-4 border-b border-slate-100">
              <img src="/klaimos_logo.png" alt="Klaimos" className="h-7 w-7 object-contain" />
              <span className="text-sm font-semibold text-navy">klaimos.ai</span>
              <div className="ml-auto">
                <div className="h-5 w-5 rounded bg-slate-100" />
              </div>
            </div>

            {/* New Session */}
            <div className="px-3 py-3">
              <div className="flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-3 py-2 text-xs font-medium text-white">
                + New Session
              </div>
            </div>

            {/* Nav items */}
            <nav className="flex flex-col gap-0.5 px-3">
              {[
                { icon: "🎙", label: "Sessions", active: false },
                { icon: "📋", label: "Templates", active: true },
                { icon: "🔗", label: "Connectors", active: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                    item.active
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  <span className="text-sm">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </nav>

            {/* Spacer */}
            <div className="flex-1" />

            {/* User */}
            <div className="border-t border-slate-100 p-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-600">DC</div>
                <div>
                  <div className="text-xs font-medium text-slate-700">Dr. Sarah Chen</div>
                  <div className="text-[10px] text-slate-400">clinician</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sessions List */}
          <div className="hidden lg:flex w-64 shrink-0 flex-col border-r border-slate-100">
            <div className="px-3 py-3 border-b border-slate-100">
              <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[10px] text-slate-400">
                🔍 Search sessions...
              </div>
            </div>
            <div className="px-3 py-2 border-b border-slate-100">
              <div className="flex items-center gap-1 rounded-lg bg-slate-50 px-3 py-1.5 text-[10px] text-slate-500">
                All Sessions ▾
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              {[
                { name: "New Consultation – Maria S.", time: "3d ago", type: "General Practice", dot: "bg-blue-400" },
                { name: "Intake Assessment – David L.", time: "2d ago", type: "Psychiatry", dot: "bg-blue-400" },
                { name: "Follow-up – Hypertension R...", time: "2d ago · 5:00", type: "Cardiology", dot: "bg-red-400" },
                { name: "Therapy Session – CBT Wee...", time: "2d ago · 45:00", type: "Psychiatry", dot: "bg-red-400" },
                { name: "Pediatric Well-Child Visit", time: "1d ago · 25:00", type: "Pediatrics", dot: "bg-red-400" },
                { name: "Telehealth – Skin Rash Follo...", time: "3d ago · 22:00", type: "Dermatology", dot: "bg-amber-400" },
                { name: "Procedure Note – Wound Cl...", time: "4d ago · 35:00", type: "Emergency", dot: "bg-amber-400" },
                { name: "Annual Physical – Robert K.", time: "Mar 8, 2026 · 50:00", type: "General Practice", dot: "bg-green-400" },
              ].map((s) => (
                <div key={s.name} className="flex items-start gap-2 px-3 py-2.5 border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                  <div className="pt-1"><div className={`h-1.5 w-1.5 rounded-full ${s.dot}`} /></div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-medium text-slate-700 truncate">{s.name}</div>
                    <div className="text-[9px] text-slate-400">{s.time} · {s.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content - Templates */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-sm">📋</div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">Templates</div>
                  <div className="text-[10px] text-slate-400">Browse, create, and manage clinical note templates</div>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2 rounded-lg bg-blue-500 px-3 py-1.5 text-[10px] font-medium text-white">
                + Create Template
              </div>
            </div>

            {/* Search & Filters */}
            <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-3">
              <div className="flex-1 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-1.5 text-[10px] text-slate-400">
                🔍 Search templates...
              </div>
              <div className="hidden sm:flex gap-2">
                <div className="rounded-lg border border-slate-200 px-3 py-1.5 text-[10px] text-slate-500">All Categories ▾</div>
                <div className="rounded-lg border border-slate-200 px-3 py-1.5 text-[10px] text-slate-500">All Creators ▾</div>
              </div>
            </div>

            {/* Favorites */}
            <div className="flex-1 overflow-hidden px-5 py-4">
              <div className="text-[10px] text-slate-400 mb-3 flex items-center gap-1">⭐ Favourites (6)</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                {[
                  { tags: ["General", "Klaimos.ai"], name: "SOAP Note", desc: "Standard Subjective-Objective-Assessment-Plan format...", uses: "342 uses" },
                  { tags: ["Therapy", "Klaimos.ai"], name: "DAP Note", desc: "Data-Assessment-Plan format commonly used...", uses: "287 uses" },
                  { tags: ["General", "Klaimos.ai"], name: "History & Physical", desc: "Comprehensive history and physical examination...", uses: "198 uses" },
                  { tags: ["Therapy", "Klaimos.ai"], name: "CBT Session", desc: "Cognitive Behavioral Therapy session note...", uses: "178 uses" },
                  { tags: ["Psychiatry", "Klaimos.ai"], name: "Intake Assessment", desc: "Comprehensive initial assessment for new patients...", uses: "145 uses" },
                  { tags: ["General", "My Template"], name: "Telehealth Visit", desc: "Documentation template for synchronous video...", uses: "312 uses" },
                ].map((t) => (
                  <motion.div
                    key={t.name}
                    whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
                    className="rounded-xl border border-slate-100 p-3.5 transition-colors hover:border-blue-200 cursor-pointer"
                  >
                    <div className="flex gap-1.5 mb-2">
                      {t.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded px-1.5 py-0.5 text-[8px] font-medium ${
                            tag === "Klaimos.ai"
                              ? "bg-blue-50 text-blue-600 border border-blue-200"
                              : tag === "My Template"
                              ? "bg-green-50 text-green-600 border border-green-200"
                              : "bg-slate-50 text-slate-500 border border-slate-200"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="ml-auto text-slate-300 text-xs">☆</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-700 mb-1">{t.name}</div>
                    <div className="text-[9px] text-slate-400 leading-relaxed mb-2 line-clamp-2">{t.desc}</div>
                    <div className="text-[9px] text-slate-400 flex items-center gap-1">📊 {t.uses}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stand/base */}
      <div className="mx-auto mt-0 flex flex-col items-center">
        <div className="h-6 w-24 bg-gradient-to-b from-slate-200 to-slate-300 rounded-b-sm" />
        <div className="h-2 w-40 bg-gradient-to-b from-slate-300 to-slate-200 rounded-b-full" />
      </div>

      {/* Reflection */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-b from-navy/5 to-transparent blur-xl rounded-full" />
    </motion.div>
  );
}
