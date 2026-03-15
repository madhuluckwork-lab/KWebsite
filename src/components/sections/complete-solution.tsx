"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { StaggerContainer, StaggerItem } from "@/components/shared/motion-wrapper";
import { SOLUTION_FEATURES } from "@/lib/constants";

export function CompleteSolution() {
  return (
    <section id="why-klaimos" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="section-divider absolute inset-x-0 top-0" />

      <Container>
        <SectionHeader
          badge="Why Klaimos"
          title="The Complete Solution — Not Just Another Tool"
        />

        <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {SOLUTION_FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={feature.title}>
                <motion.div
                  className="group flex gap-5 rounded-2xl p-6 transition-all duration-500 hover:bg-purple-50/50"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 transition-all duration-500 group-hover:from-purple-200 group-hover:to-indigo-200 group-hover:shadow-lg group-hover:shadow-purple-200/50"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="h-7 w-7 text-purple-500 transition-colors group-hover:text-purple-600" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-700 group-hover:text-purple-700 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400 group-hover:text-slate-500 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
