"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { KlaimosLogo } from "@/components/shared/klaimos-logo";
import { FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative bg-navy text-white overflow-hidden">
      {/* Decorative top image bar - mimics reference */}
      <div className="relative h-48 bg-gradient-to-b from-navy-light to-navy flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <KlaimosLogo height={44} invert />
        </motion.div>
        {/* Decorative circles */}
        <div className="absolute -bottom-8 left-1/4 w-16 h-16 rounded-full bg-orange/5" />
        <div className="absolute -top-4 right-1/3 w-10 h-10 rounded-full bg-white/5" />
      </div>

      <Container className="py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-sm leading-relaxed text-white/30">
              AI-powered revenue cycle management for modern healthcare practices. From voice-powered scribing to automated claims.
            </p>
            <div className="mt-6 flex gap-3">
              {["X", "in", "fb", "ig"].map((s) => (
                <div key={s} className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-xs text-white/40 hover:bg-orange/20 hover:text-orange transition-all cursor-pointer">
                  {s}
                </div>
              ))}
            </div>
          </div>

          {[
            { title: "Product", links: FOOTER_LINKS.product },
            { title: "Support", links: FOOTER_LINKS.support },
            { title: "Company", links: FOOTER_LINKS.company },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/30">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white/40 transition-colors duration-300 hover:text-orange">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8">
          <div className="text-sm text-white/20">
            &copy; {new Date().getFullYear()} Klaimos. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/20 hover:text-orange transition-colors">Terms & Conditions</a>
            <a href="#" className="text-xs text-white/20 hover:text-orange transition-colors">Privacy Policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
