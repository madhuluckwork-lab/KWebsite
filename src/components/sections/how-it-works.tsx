"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { FeatureSteps } from "@/components/ui/feature-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { FAQ_ITEMS } from "@/lib/constants";

const featureSteps = [
  {
    step: "Step 1",
    title: "Upload Your Data",
    content: "Easily submit your clinical documentation, lab results, and patient records through our secure HIPAA-compliant platform.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 2",
    title: "Get Personalized Insights",
    content: "Our AI analyzes your data, generates precise CPT and ICD-10 codes, and highlights key patterns for review.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 3",
    title: "Review & Submit",
    content: "Verify AI-generated codes with confidence scores, then submit validated claims directly to payers for faster reimbursement.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 4",
    title: "Track & Optimize",
    content: "Monitor your revenue cycle performance in real-time with analytics dashboards, denial tracking, and actionable recommendations.",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2070&auto=format&fit=crop",
  },
];

export function HowItWorks() {
  return (
    <section id="faq" className="relative scroll-mt-20 bg-[#f5f7fb]">
      {/* Feature Steps */}
      <div className="py-20 sm:py-28">
        <Container>
          <FeatureSteps
            features={featureSteps}
            title="How It Works"
            autoPlayInterval={4000}
            className="p-0 md:p-0"
          />
        </Container>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      {/* FAQ */}
      <div className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <MotionWrapper>
              <div>
                <span className="inline-block border border-navy/10 bg-white py-1 px-4 rounded-lg text-sm font-medium text-navy mb-4">
                  FAQ
                </span>
                <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl leading-tight">
                  Everything You Need to Know
                </h2>
                <p className="mt-4 text-slate-500">
                  Find quick answers to the most frequently asked questions about our services.
                </p>
                <div className="mt-6">
                  <InteractiveHoverButton
                    text="Contact us"
                    href="#schedule"
                    className="w-40 text-sm border-navy/20 bg-white text-navy"
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
                    <AccordionTrigger className="text-left text-sm font-semibold text-navy py-4 hover:text-teal transition-colors [&[data-state=open]]:text-teal">
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
      </div>
    </section>
  );
}
