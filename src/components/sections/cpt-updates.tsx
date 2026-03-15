"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { StaggerContainer, StaggerItem } from "@/components/shared/motion-wrapper";
import { DentalChairIllustration } from "@/components/shared/dental-illustrations";
import { CPT_CARDS } from "@/lib/constants";
import { BookOpen, FileEdit, RefreshCw, ArrowRight } from "lucide-react";

const ICONS = [BookOpen, FileEdit, RefreshCw];

export function CptUpdates() {
  return (
    <section
      id="cpt-2026"
      className="relative scroll-mt-20 py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-dots opacity-10" />
      <div className="orb-light h-[400px] w-[400px] bg-purple-500/15 top-0 left-1/4" />
      <div className="orb-light h-[300px] w-[300px] bg-indigo-400/10 bottom-0 right-1/4" style={{ animationDelay: "7s" }} />

      {/* Dental chair illustration */}
      <motion.div
        className="absolute right-0 bottom-0 opacity-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <DentalChairIllustration className="w-80 h-80" />
      </motion.div>

      <Container className="relative z-10">
        <SectionHeader
          badge="2026 CPT Updates"
          title="Future-Proof Your Revenue Cycle"
          subtitle="The 2026 CPT updates bring significant changes. Klaimos is already updated — both in documentation guidance and code prediction. Your team will be billing correctly from day one."
          light
        />

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CPT_CARDS.map((card, i) => {
            const Icon = ICONS[i];
            return (
              <StaggerItem key={card.title}>
                <motion.div
                  className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/10"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Icon className="h-7 w-7 text-purple-300 group-hover:text-white transition-colors" />
                  </motion.div>
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60 group-hover:text-white/80 transition-colors">
                    {card.description}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button
            size="lg"
            className="gap-2 px-8 py-6 text-base bg-white text-purple-900 border-0 hover:bg-purple-50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
            render={<a href="#schedule" />}
          >
            Get Your 2026 Readiness Assessment
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
