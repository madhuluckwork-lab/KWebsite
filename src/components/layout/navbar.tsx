"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { KlaimosLogo } from "@/components/shared/klaimos-logo";
import { MobileNav } from "./mobile-nav";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-white/90 border-b border-slate-100 shadow-lg shadow-navy/5 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex h-14 md:h-20 items-center justify-between">
          <a href="#">
            <KlaimosLogo
              height={90}
              mobileHeight={36}
              invert={!scrolled}
            />
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "animated-underline rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300",
                  scrolled ? "text-slate-600 hover:text-navy" : "text-white/80 hover:text-white"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <InteractiveHoverButton
              text="Book appointment"
              href="#schedule"
              className={cn(
                "w-44 text-sm",
                scrolled
                  ? "border-navy/20 bg-white text-navy"
                  : "border-teal-300/30 bg-teal-500/10 text-teal-100"
              )}
            />
          </div>

          <div className="lg:hidden">
            <MobileNav />
          </div>
        </nav>
      </Container>
    </motion.header>
  );
}
