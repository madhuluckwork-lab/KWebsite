"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StaggerContainer, StaggerItem } from "@/components/shared/motion-wrapper";
import { INTEGRATIONS } from "@/lib/constants";
import { Plus } from "lucide-react";

export function Integrations() {
  return (
    <section id="integrations" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="section-divider absolute inset-x-0 top-0" />

      <Container>
        <SectionHeader
          badge="Integrations"
          title="Seamlessly Connected to Your Ecosystem"
          subtitle="Klaimos integrates with your existing EHR and clearinghouse infrastructure — no rip-and-replace required."
        />

        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INTEGRATIONS.map((integration) => (
            <StaggerItem key={integration.name}>
              <motion.div
                className={`group rounded-2xl p-6 h-full transition-all duration-500 ${
                  integration.name === "More Integrations"
                    ? "border-2 border-dashed border-purple-200 hover:border-purple-400 hover:bg-purple-50/50"
                    : "card-premium"
                }`}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {integration.badge ? (
                  <span className="mb-3 inline-block rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600">
                    {integration.badge}
                  </span>
                ) : (
                  <motion.div
                    className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-dashed border-purple-300"
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    transition={{ type: "spring" }}
                  >
                    <Plus className="h-4 w-4 text-purple-400" />
                  </motion.div>
                )}
                <h3 className="mb-2 text-base font-semibold text-slate-700 group-hover:text-purple-700 transition-colors">
                  {integration.name}
                </h3>
                <p className="mb-4 text-sm text-slate-400 group-hover:text-slate-500 transition-colors">
                  {integration.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {integration.tags.map((tag) =>
                    tag === "Contact Us" ? (
                      <Button
                        key={tag}
                        variant="outline"
                        size="sm"
                        className="h-7 text-xs border-purple-200 text-purple-600 hover:bg-purple-50"
                        render={<a href="#schedule" />}
                      >
                        Contact Us
                      </Button>
                    ) : (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs border-purple-100 text-slate-500"
                      >
                        {tag}
                      </Badge>
                    )
                  )}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
