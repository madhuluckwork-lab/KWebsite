"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { ContactCard } from "@/components/ui/contact-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

export function FinalCta() {
  return (
    <section id="schedule" className="relative scroll-mt-20 bg-[#060a1a] py-20 sm:py-28 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-900/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-teal/5 blur-3xl" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ContactCard
            title="Get in touch"
            description="If you have any questions about Klaimos or need help getting started, please fill out the form. We do our best to respond within 1 business day."
            className="bg-[#0a0f2a] border-white/10 text-white rounded-xl max-w-5xl mx-auto"
            formSectionClassName="bg-[#0d1230] border-white/5"
            contactInfo={[
              {
                icon: MailIcon,
                label: "Email",
                value: "contact@klaimos.ai",
              },
              {
                icon: PhoneIcon,
                label: "Phone",
                value: "+1 (800) 555-0199",
              },
              {
                icon: MapPinIcon,
                label: "Address",
                value: "San Francisco, CA",
                className: "col-span-2 lg:col-span-1",
              },
            ]}
          >
            <form className="w-full space-y-4">
              <div className="flex flex-col gap-2">
                <Label className="text-white/70">Name</Label>
                <Input
                  type="text"
                  placeholder="Your name"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-teal/50"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-white/70">Email</Label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-teal/50"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-white/70">Phone</Label>
                <Input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-teal/50"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-white/70">Message</Label>
                <Textarea
                  placeholder="Tell us about your practice..."
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-teal/50"
                />
              </div>
              <button
                type="button"
                className="w-full rounded-md bg-gradient-to-r from-teal-500 to-emerald-500 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:from-teal-600 hover:to-emerald-600 hover:shadow-lg hover:shadow-teal-500/25"
              >
                Submit
              </button>
            </form>
          </ContactCard>
        </motion.div>
      </Container>
      {/* Minimal footer */}
      <div className="mt-16 border-t border-white/5 pt-8">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/20">
            <div className="flex items-center gap-2">
              <img src="/klaimos_logo.png" alt="Klaimos" className="h-5 w-auto object-contain brightness-0 invert" />
              <span>&copy; {new Date().getFullYear()} Klaimos. All rights reserved.</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-teal transition-colors">Terms</a>
              <a href="#" className="hover:text-teal transition-colors">Privacy</a>
              <a href="#about" className="hover:text-teal transition-colors">About</a>
              <a href="#faq" className="hover:text-teal transition-colors">FAQ</a>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
