"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { StaggerContainer, StaggerItem } from "@/components/shared/motion-wrapper";
import { ToothIcon } from "@/components/shared/dental-illustrations";
import { SPECIALTIES } from "@/lib/constants";

export function Specialties() {
  return (
    <section
      id="specialties"
      className="relative scroll-mt-20 py-24 sm:py-32 bg-gradient-to-b from-white via-purple-50/30 to-white"
    >
      <div className="section-divider absolute inset-x-0 top-0" />

      {/* Decorative tooth */}
      <div className="absolute bottom-8 left-8 opacity-[0.03] -rotate-12">
        <ToothIcon className="w-40 h-40" />
      </div>

      <Container>
        <SectionHeader
          badge="Specialty Specialization"
          title="Purpose-Built for Interventional Radiology"
          subtitle="Klaimos was designed from the ground up to handle the coding complexity of Interventional Radiology. From vascular access to TIPS procedures and beyond."
        />

        <p className="mx-auto mb-14 max-w-3xl text-center text-sm text-slate-400">
          While our foundation is in IR, Klaimos&apos;s architecture supports
          expansion to additional procedural specialties.
        </p>

        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SPECIALTIES.map((specialty) => {
            const Icon = specialty.icon;
            return (
              <StaggerItem key={specialty.title}>
                <motion.div
                  className="group card-premium flex gap-5 rounded-2xl p-6"
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-200/50"
                    whileHover={{ rotate: -5, scale: 1.1 }}
                  >
                    <Icon className="h-7 w-7 text-purple-500 transition-colors group-hover:text-purple-600" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-700 group-hover:text-purple-700 transition-colors">
                      {specialty.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400 group-hover:text-slate-500 transition-colors leading-relaxed">
                      {specialty.description}
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
