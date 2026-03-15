"use client";

import { cn } from "@/lib/utils";
import { MotionWrapper } from "./motion-wrapper";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({ badge, title, subtitle, centered = true, light = false }: SectionHeaderProps) {
  return (
    <MotionWrapper className={cn("mb-14", centered && "text-center")}>
      {badge && (
        <span className="mb-5 inline-block rounded-full border border-navy/10 bg-navy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-navy">
          {badge}
        </span>
      )}
      <h2 className={cn(
        "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
        light ? "text-white" : "text-navy"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mx-auto mt-5 max-w-2xl text-lg leading-relaxed",
          light ? "text-white/60" : "text-slate-500",
          !centered && "mx-0"
        )}>
          {subtitle}
        </p>
      )}
    </MotionWrapper>
  );
}
