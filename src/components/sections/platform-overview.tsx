"use client";

import { motion } from "framer-motion";
import {
  Mic, Brain, ShieldCheck, FileText, BarChart3, Plug,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { BrowserFrame } from "@/components/shared/browser-frame";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { StaggerContainer, StaggerItem } from "@/components/shared/motion-wrapper";
import { SHOWCASE_CARDS } from "@/lib/constants";

/* ---- animated background elements for each bento card ---- */

function WaveformBg() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-20 overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
        <path d="M0 100 Q50 60 100 100 T200 100 T300 100 T400 100" stroke="#2ab5a3" strokeWidth="2" fill="none" opacity="0.5" />
        <path d="M0 110 Q50 70 100 110 T200 110 T300 110 T400 110" stroke="#0f1b44" strokeWidth="1.5" fill="none" opacity="0.3" />
        {Array.from({ length: 30 }).map((_, i) => (
          <rect key={i} x={i * 13 + 5} y={80 + Math.sin(i * 0.5) * 30} width="4" height={20 + Math.sin(i * 0.7) * 15} rx="2" fill="#0f1b44" opacity="0.15" />
        ))}
      </svg>
    </div>
  );
}

function NeuralNetBg() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-15 overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
        {/* Nodes */}
        {[[80,60],[160,120],[240,80],[320,140],[120,200],[200,240],[280,200],[360,260]].map(([cx,cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="8" fill="#0f1b44" opacity="0.3" />
            <circle cx={cx} cy={cy} r="3" fill="#2ab5a3" opacity="0.6" />
          </g>
        ))}
        {/* Connections */}
        <line x1="80" y1="60" x2="160" y2="120" stroke="#0f1b44" strokeWidth="1" opacity="0.2" />
        <line x1="160" y1="120" x2="240" y2="80" stroke="#0f1b44" strokeWidth="1" opacity="0.2" />
        <line x1="240" y1="80" x2="320" y2="140" stroke="#2ab5a3" strokeWidth="1" opacity="0.3" />
        <line x1="120" y1="200" x2="200" y2="240" stroke="#0f1b44" strokeWidth="1" opacity="0.2" />
        <line x1="200" y1="240" x2="280" y2="200" stroke="#0f1b44" strokeWidth="1" opacity="0.2" />
        <line x1="160" y1="120" x2="120" y2="200" stroke="#2ab5a3" strokeWidth="1" opacity="0.15" />
        <line x1="240" y1="80" x2="280" y2="200" stroke="#0f1b44" strokeWidth="1" opacity="0.15" />
        <line x1="320" y1="140" x2="360" y2="260" stroke="#0f1b44" strokeWidth="1" opacity="0.2" />
      </svg>
    </div>
  );
}

function ShieldBg() {
  return (
    <div className="absolute -right-8 -top-8 opacity-10">
      <svg className="w-48 h-48" viewBox="0 0 200 200" fill="none">
        <path d="M100 20 L170 60 V120 C170 160 140 185 100 195 C60 185 30 160 30 120 V60 Z" stroke="#0f1b44" strokeWidth="3" fill="none" />
        <path d="M100 40 L150 70 V115 C150 145 130 165 100 175 C70 165 50 145 50 115 V70 Z" stroke="#2ab5a3" strokeWidth="2" fill="none" opacity="0.5" />
        <path d="M80 110 L95 125 L125 85" stroke="#0f1b44" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function ChartBg() {
  return (
    <div className="absolute inset-0 flex items-end justify-center p-8 opacity-15 overflow-hidden">
      <svg className="w-full h-32" viewBox="0 0 300 100" fill="none">
        <path d="M0 80 L40 65 L80 70 L120 45 L160 50 L200 30 L240 35 L280 15 L300 20" stroke="#2ab5a3" strokeWidth="2.5" fill="none" />
        <path d="M0 80 L40 65 L80 70 L120 45 L160 50 L200 30 L240 35 L280 15 L300 20 V100 H0 Z" fill="url(#chart-fill)" />
        <defs>
          <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2ab5a3" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#2ab5a3" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Dots on line */}
        {[[0,80],[80,70],[160,50],[240,35],[300,20]].map(([cx,cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill="#2ab5a3" opacity="0.6" />
        ))}
      </svg>
    </div>
  );
}

function ClaimsBg() {
  return (
    <div className="absolute -right-10 -top-10 opacity-10">
      <svg className="w-52 h-52" viewBox="0 0 200 200" fill="none">
        <rect x="30" y="20" width="120" height="160" rx="8" stroke="#0f1b44" strokeWidth="2" />
        <line x1="50" y1="60" x2="130" y2="60" stroke="#0f1b44" strokeWidth="2" opacity="0.5" />
        <line x1="50" y1="80" x2="130" y2="80" stroke="#0f1b44" strokeWidth="2" opacity="0.3" />
        <line x1="50" y1="100" x2="110" y2="100" stroke="#0f1b44" strokeWidth="2" opacity="0.3" />
        <line x1="50" y1="120" x2="100" y2="120" stroke="#2ab5a3" strokeWidth="2" opacity="0.4" />
        <rect x="50" y="38" width="30" height="10" rx="2" fill="#2ab5a3" opacity="0.3" />
        <circle cx="130" cy="150" r="15" stroke="#2ab5a3" strokeWidth="2" fill="none" opacity="0.4" />
        <path d="M125 150 L128 153 L135 145" stroke="#2ab5a3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      </svg>
    </div>
  );
}

function PlugBg() {
  return (
    <div className="absolute -right-6 -top-6 opacity-10">
      <svg className="w-40 h-40" viewBox="0 0 200 200" fill="none">
        <circle cx="70" cy="100" r="35" stroke="#0f1b44" strokeWidth="2" />
        <circle cx="130" cy="100" r="35" stroke="#2ab5a3" strokeWidth="2" />
        <path d="M70 65 Q100 80 130 65" stroke="#0f1b44" strokeWidth="1.5" fill="none" opacity="0.4" />
        <path d="M70 135 Q100 120 130 135" stroke="#0f1b44" strokeWidth="1.5" fill="none" opacity="0.4" />
        {/* Arrows */}
        <path d="M95 90 L105 100 L95 110" stroke="#2ab5a3" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
      </svg>
    </div>
  );
}

const bentoFeatures = [
  {
    Icon: Mic,
    name: "Voice-Powered Scribing",
    description: "Eliminate documentation burden with real-time voice-powered scribing. Create clinically accurate documentation instantly while maintaining patient focus.",
    href: "#scribing",
    cta: "Learn more",
    background: <WaveformBg />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Brain,
    name: "Intelligent Coding Engine",
    description: "AI-powered CPT and ICD-10 coding that comprehends clinical context and coding rules with expert-level precision.",
    href: "#coding-engine",
    cta: "Learn more",
    background: <NeuralNetBg />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: ShieldCheck,
    name: "Compliance Validation",
    description: "Every code validated against CCI edits, MUE limits, and health plan rules.",
    href: "#coding-engine",
    cta: "Learn more",
    background: <ShieldBg />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: BarChart3,
    name: "Analytics Dashboard",
    description: "Track coding accuracy, claim status, denial rates with real-time analytics.",
    href: "#features",
    cta: "Learn more",
    background: <ChartBg />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: FileText,
    name: "Claims Management",
    description: "Manage, submit, and track claims through the complete lifecycle with real-time status updates and automated follow-ups.",
    href: "#features",
    cta: "Learn more",
    background: <ClaimsBg />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export function PlatformOverview() {
  return (
    <section id="about" className="relative scroll-mt-20">
      {/* About intro */}
      <div className="py-20 sm:py-24 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">Who We Are</span>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl leading-tight">
              We Don&apos;t Just Create Solutions — We Create Transformations That Change Lives.
            </h2>
            <p className="mt-6 text-slate-500 leading-relaxed max-w-2xl mx-auto">
              We are a forward-thinking company dedicated to transforming healthcare revenue cycles into powerful digital experiences that solve today&apos;s challenges and prepare practices for tomorrow.
            </p>
          </motion.div>

          {/* Product Screenshot in Browser Frame */}
          <div className="mt-14">
            <BrowserFrame />
          </div>
        </Container>
      </div>

      {/* Showcase stat cards */}
      <div className="pb-8 bg-white">
        <Container>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SHOWCASE_CARDS.map((card, i) => (
              <StaggerItem key={card.title}>
                <motion.div
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy to-navy-light p-8 text-white card-lift min-h-[280px] flex flex-col justify-between"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/5" />
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-white/5" />
                  <div>
                    <span className="text-xs uppercase tracking-widest text-white/40">{card.label}</span>
                    <motion.div
                      className="mt-2 text-5xl font-bold text-teal"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
                    >
                      {card.stat}
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <p className="mt-1 text-sm text-white/50">{card.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </div>

      {/* Bento Grid Features */}
      <div id="features" className="scroll-mt-20 py-20 sm:py-28 bg-[#f5f7fb]">
        <Container>
          <SectionHeader
            badge="Platform Features"
            title="Advanced Healthcare Solutions for Every Need"
            subtitle="Get access to a full range of AI-powered coding services—from routine procedures to advanced diagnostics—delivered with convenience and clarity."
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <BentoGrid className="lg:grid-rows-3">
              {bentoFeatures.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
              ))}
            </BentoGrid>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
