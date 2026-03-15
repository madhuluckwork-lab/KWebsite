"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { HERO_STATS } from "@/lib/constants";
import {
  Mic, Brain, ShieldCheck, Clock, Fingerprint, Lock,
  BarChart3, Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface GlowGridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

function GlowGridItem({ area, icon, title, description }: GlowGridItemProps) {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-white/10 p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
          autoRotate={true}
          autoRotateSpeed={40}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-white/5 bg-[#0d1538] p-6 shadow-sm md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-white/10 bg-white/5 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-white">
                {title}
              </h3>
              <p className="text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-white/50">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export function Scribing() {
  return (
    <section id="smarter" className="relative scroll-mt-20 bg-navy-gradient text-white py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-[0.03]" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/5 blur-3xl" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <MotionWrapper>
            <span className="inline-block border border-white/10 bg-white/5 py-1 px-4 rounded-lg text-sm font-medium text-white/60 mb-5">
              Why Klaimos
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
              The Smarter Way to Manage Your Revenue Cycle
            </h2>
            <p className="mt-6 text-white/40 text-lg leading-relaxed">
              We make healthcare billing simple and powerful. With AI-driven coding, tailored insights, and secure digital tools.
            </p>
          </MotionWrapper>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {HERO_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center"
            >
              <motion.div
                className="text-4xl font-bold text-teal"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 200 }}
              >
                {stat.value}
              </motion.div>
              <div className="mt-2 text-sm text-white/40">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Glowing Effect Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            <GlowGridItem
              area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
              icon={<Mic className="h-4 w-4 text-white/70" />}
              title="Voice-Powered Scribing"
              description="Eliminate documentation burden with real-time voice-powered scribing across 40+ medical specialties."
            />
            <GlowGridItem
              area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
              icon={<Clock className="h-4 w-4 text-white/70" />}
              title="Results Within Minutes"
              description="Get expert coding support anytime. One-on-one consultations with professional, reliable guidance."
            />
            <GlowGridItem
              area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
              icon={<Brain className="h-4 w-4 text-white/70" />}
              title="AI That Understands Context"
              description="Our engine understands procedures, anatomical relationships, and clinical intent — not just keywords. Recommendations based on your unique data and practice patterns."
            />
            <GlowGridItem
              area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
              icon={<Fingerprint className="h-4 w-4 text-white/70" />}
              title="Personalized Approach"
              description="Insights tailored to your practice. Plans designed for your workflow. Track progress easily."
            />
            <GlowGridItem
              area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
              icon={<Lock className="h-4 w-4 text-white/70" />}
              title="Trusted & Secure"
              description="Industry-standard privacy, encrypted data storage, and complete HIPAA-compliant confidentiality for every patient record."
            />
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <InteractiveHoverButton
            text="Get Started"
            href="#schedule"
            className="w-40 text-sm border-white/20 bg-white text-navy mx-auto"
          />
        </motion.div>
      </Container>
    </section>
  );
}
