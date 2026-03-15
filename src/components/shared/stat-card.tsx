"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <motion.div
      className="relative text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <div className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
        {value}
      </div>
      <div className="mt-2 text-sm font-medium text-slate-400">{label}</div>
    </motion.div>
  );
}
