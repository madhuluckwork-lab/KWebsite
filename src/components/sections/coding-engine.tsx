"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { MotionWrapper, StaggerContainer, StaggerItem } from "@/components/shared/motion-wrapper";
import { WORKFLOW_STEPS } from "@/lib/constants";
import { Workflow, Scale, RefreshCw, BookOpen } from "lucide-react";

export function CodingEngine() {
  return (
    <section id="coding-engine" className="relative scroll-mt-20 bg-white overflow-hidden">
      <div className="section-divider absolute inset-x-0 top-0" />

      {/* Container Scroll Animation */}
      <ContainerScroll
        titleComponent={
          <div className="space-y-4">
            <span className="inline-block border border-navy/10 bg-navy/5 py-1 px-4 rounded-lg text-sm font-medium text-navy">
              Intelligent Coding Engine
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy">
              Precision Coding,{" "}
              <span className="text-teal">Powered by AI</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-500">
              Our AI understands procedure context, anatomical placement, and clinical intent — extracting the specific details that determine correct code selection.
            </p>
          </div>
        }
      >
        {/* Inside the 3D scroll card: Coding dashboard mockup */}
        <div className="h-full w-full bg-white p-4 md:p-6 overflow-y-auto">
          {/* Workflow pipeline */}
          <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <img src="/klaimos_logo.png" alt="Klaimos" className="h-8 w-8 object-contain" />
              <span className="text-sm font-semibold text-navy">Klaimos Coding Engine</span>
            </div>
            <motion.span
              className="shimmer rounded-full border border-emerald-200 bg-emerald-50 px-3 py-0.5 text-xs font-semibold text-emerald-600"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              98.2% Confidence
            </motion.span>
          </div>

          {/* Workflow steps row */}
          <div className="flex items-center justify-between mb-6 px-2">
            {WORKFLOW_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="flex flex-col items-center text-center gap-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 bg-slate-50">
                    <Icon className="h-4 w-4 text-navy" />
                  </div>
                  <span className="text-[10px] font-medium text-slate-600">{step.label}</span>
                  {i < WORKFLOW_STEPS.length - 1 && (
                    <div className="absolute" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Results grid */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: "Encounters", value: "27,043", color: "text-navy" },
              { label: "Avg. Reimbursement", value: "$73.8", color: "text-emerald-600" },
              { label: "Claim Turnaround", value: "18 Days", color: "text-teal" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 text-center">
                <div className={`text-2xl font-bold ${item.color}`}>{item.value}</div>
                <div className="text-[10px] text-slate-400 mt-1">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Code output rows */}
          <div className="space-y-2">
            {[
              { code: "99214", desc: "Office Visit, Est. Patient, Moderate", confidence: "98%" },
              { code: "36247", desc: "Selective Catheter Placement, 2nd Order", confidence: "96%" },
              { code: "75625", desc: "Aortography, Abdominal", confidence: "94%" },
              { code: "37228", desc: "Revascularization, Tibial/Peroneal", confidence: "97%" },
            ].map((row) => (
              <div key={row.code} className="flex items-center justify-between rounded-lg border border-slate-50 bg-slate-50/30 px-4 py-2.5">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="border-navy/10 text-navy text-[10px] font-mono">{row.code}</Badge>
                  <span className="text-xs text-slate-600">{row.desc}</span>
                </div>
                <span className="text-xs font-semibold text-emerald-500">{row.confidence}</span>
              </div>
            ))}
          </div>
        </div>
      </ContainerScroll>

      {/* Key Differentiators below the scroll animation */}
      <div className="relative -mt-40 pb-20 sm:pb-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <MotionWrapper>
              <h3 className="text-3xl font-bold text-navy mb-4">Key Differentiators</h3>
              <p className="text-slate-500 mb-6">
                What sets Klaimos apart from traditional coding solutions — intelligence that goes beyond simple code lookup.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Workflow, title: "Procedure Intelligence", desc: "Distinguishes between similar procedures based on anatomical placement and approach." },
                  { icon: Scale, title: "Confidence Scoring", desc: "Every code prediction includes a confidence score for human review." },
                  { icon: RefreshCw, title: "Audit-Ready Rationale", desc: "AI explains code selections with clinical documentation references." },
                  { icon: BookOpen, title: "Modifier Logic", desc: "Automatically applies appropriate modifiers based on documentation." },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="group flex gap-3 items-start">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal/10">
                        <Icon className="h-4 w-4 text-teal" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-navy group-hover:text-teal transition-colors">{item.title}</div>
                        <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </MotionWrapper>

            <StaggerContainer className="grid grid-cols-2 gap-4">
              {[
                { icon: Workflow, title: "Procedure Intelligence", desc: "Distinguishes procedures based on anatomical placement.", num: "01" },
                { icon: Scale, title: "Confidence Scoring", desc: "Every prediction includes a confidence score for review.", num: "02" },
                { icon: RefreshCw, title: "Audit-Ready Rationale", desc: "AI explains code selections with documentation references.", num: "03" },
                { icon: BookOpen, title: "Modifier Logic", desc: "Applies appropriate modifiers based on documentation.", num: "04" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={item.title}>
                    <motion.div
                      className="group relative rounded-2xl border border-slate-100 bg-white p-5 transition-all duration-500 hover:border-teal/30 hover:shadow-xl hover:shadow-teal/5"
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="absolute top-3 right-4 text-3xl font-bold text-slate-100 group-hover:text-teal/10 transition-colors">{item.num}</span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10 mb-4 transition-all duration-300 group-hover:bg-teal/20 group-hover:scale-110">
                        <Icon className="h-5 w-5 text-teal" />
                      </div>
                      <h4 className="text-sm font-semibold text-navy group-hover:text-teal transition-colors">{item.title}</h4>
                      <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </Container>
      </div>
    </section>
  );
}
