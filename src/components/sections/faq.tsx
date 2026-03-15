"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { FAQ_ITEMS } from "@/lib/constants";

export function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-20 py-20 sm:py-28 bg-[#f5f7fb]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <MotionWrapper>
            <div>
              <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl leading-tight">
                Everything You Need to Know
              </h2>
              <p className="mt-4 text-slate-500">
                Find quick answers to the most frequently asked questions about our services.
              </p>
              <div className="mt-6">
                <InteractiveHoverButton
                  text="See all questions"
                  href="#schedule"
                  className="w-48 text-sm border-navy/20 bg-white text-navy"
                />
              </div>
            </div>
          </MotionWrapper>

          {/* Right - Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Accordion defaultValue={[0]} className="space-y-3">
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem
                  key={i}
                  className="rounded-xl border border-slate-200 bg-white px-6 overflow-hidden transition-all hover:border-navy/20"
                >
                  <AccordionTrigger className="text-left text-sm font-semibold text-navy py-4 hover:text-orange transition-colors [&[data-state=open]]:text-orange">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-slate-500 leading-relaxed pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
