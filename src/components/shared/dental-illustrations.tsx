"use client";

import { motion } from "framer-motion";

export function ToothIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M50 8C35 8 22 18 18 32C14 46 16 58 22 70C28 82 32 94 36 108C38 114 44 118 50 118C56 118 62 114 64 108C68 94 72 82 78 70C84 58 86 46 82 32C78 18 65 8 50 8Z"
        fill="url(#tooth-grad)"
        stroke="#7c3aed"
        strokeWidth="2.5"
        initial={{ pathLength: 0, fillOpacity: 0 }}
        whileInView={{ pathLength: 1, fillOpacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.path
        d="M38 38C42 44 50 48 50 48C50 48 58 44 62 38"
        stroke="#a78bfa"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      {/* Sparkle */}
      <motion.circle
        cx="42" cy="28" r="3"
        fill="white"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.8, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.4 }}
      />
      <defs>
        <linearGradient id="tooth-grad" x1="18" y1="8" x2="82" y2="118">
          <stop offset="0%" stopColor="#f3f0ff" />
          <stop offset="100%" stopColor="#e9e5f5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function DentalToolsIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Mirror tool */}
        <motion.g
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <line x1="80" y1="60" x2="80" y2="200" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round" />
          <circle cx="80" cy="50" r="22" fill="#f3f0ff" stroke="#7c3aed" strokeWidth="2" />
          <circle cx="80" cy="50" r="15" fill="#ede9fe" stroke="#a78bfa" strokeWidth="1.5" />
        </motion.g>

        {/* Explorer/probe */}
        <motion.g
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <line x1="160" y1="40" x2="160" y2="200" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round" />
          <path d="M160 40 Q165 30 158 22" stroke="#7c3aed" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </motion.g>

        {/* Tooth in center */}
        <motion.g
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
        >
          <path
            d="M260 70C248 70 238 78 235 88C232 98 234 106 238 114C242 122 245 130 248 140C249 144 253 146 258 146C263 146 267 144 268 140C271 130 274 122 278 114C282 106 284 98 281 88C278 78 268 70 258 70Z"
            fill="url(#tooth-center)" stroke="#7c3aed" strokeWidth="2"
          />
          {/* Sparkle on tooth */}
          <circle cx="252" cy="82" r="2.5" fill="white" opacity="0.9" />
        </motion.g>

        {/* Bracket/brace */}
        <motion.g
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <rect x="320" y="80" width="40" height="20" rx="4" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />
          <line x1="310" y1="90" x2="370" y2="90" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
          <rect x="330" y="85" width="8" height="10" rx="2" fill="#7c3aed" />
          <rect x="342" y="85" width="8" height="10" rx="2" fill="#7c3aed" />
        </motion.g>

        {/* Floating plus signs */}
        <motion.text
          x="130" y="260" fill="#c4b5fd" fontSize="20" fontWeight="bold"
          animate={{ y: [260, 250, 260] }}
          transition={{ duration: 3, repeat: Infinity }}
        >+</motion.text>
        <motion.text
          x="300" y="240" fill="#c4b5fd" fontSize="16" fontWeight="bold"
          animate={{ y: [240, 230, 240] }}
          transition={{ duration: 4, repeat: Infinity }}
        >+</motion.text>

        <defs>
          <linearGradient id="tooth-center" x1="235" y1="70" x2="281" y2="146">
            <stop offset="0%" stopColor="#f5f3ff" />
            <stop offset="100%" stopColor="#ede9fe" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function SmileIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer glow circle */}
      <motion.circle
        cx="100" cy="100" r="90"
        fill="url(#smile-bg)"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
      />
      {/* Teeth row */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {[60, 76, 92, 108, 124].map((x, i) => (
          <rect key={i} x={x} y="85" width="12" height="16" rx="3" fill="white" stroke="#e9e5f5" strokeWidth="1" />
        ))}
      </motion.g>
      {/* Smile arc */}
      <motion.path
        d="M55 95 Q100 140 145 95"
        stroke="#7c3aed"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      {/* Sparkles */}
      <motion.circle cx="60" cy="60" r="4" fill="#c4b5fd"
        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle cx="150" cy="55" r="3" fill="#a78bfa"
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.3, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />
      <motion.circle cx="155" cy="130" r="2.5" fill="#c4b5fd"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
      <defs>
        <radialGradient id="smile-bg" cx="100" cy="100" r="90">
          <stop offset="0%" stopColor="#f5f3ff" />
          <stop offset="100%" stopColor="#ede9fe" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function DentalChairIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 300 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Chair base */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Base */}
        <rect x="100" y="240" width="100" height="12" rx="6" fill="#e9e5f5" />
        <rect x="140" y="200" width="20" height="44" rx="4" fill="#d8d3ee" />
        {/* Seat */}
        <rect x="60" y="150" width="140" height="55" rx="12" fill="url(#chair-seat)" stroke="#c4b5fd" strokeWidth="1.5" />
        {/* Backrest */}
        <rect x="50" y="60" width="60" height="100" rx="12" fill="url(#chair-back)" stroke="#c4b5fd" strokeWidth="1.5" transform="rotate(-10 50 60)" />
        {/* Headrest */}
        <rect x="35" y="40" width="45" height="35" rx="10" fill="url(#chair-head)" stroke="#a78bfa" strokeWidth="1.5" transform="rotate(-10 35 40)" />
      </motion.g>

      {/* Light arm */}
      <motion.g
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <line x1="200" y1="80" x2="250" y2="40" stroke="#c4b5fd" strokeWidth="3" strokeLinecap="round" />
        <line x1="250" y1="40" x2="260" y2="60" stroke="#c4b5fd" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="260" cy="68" rx="18" ry="10" fill="#ede9fe" stroke="#a78bfa" strokeWidth="1.5" />
        {/* Light beam */}
        <motion.path
          d="M250 78 L230 140 L290 140 Z"
          fill="url(#light-beam)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </motion.g>

      {/* Cross/medical symbol */}
      <motion.g
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <rect x="235" y="170" width="20" height="6" rx="3" fill="#7c3aed" opacity="0.4" />
        <rect x="242" y="163" width="6" height="20" rx="3" fill="#7c3aed" opacity="0.4" />
      </motion.g>

      <defs>
        <linearGradient id="chair-seat" x1="60" y1="150" x2="200" y2="205">
          <stop offset="0%" stopColor="#f5f3ff" />
          <stop offset="100%" stopColor="#ede9fe" />
        </linearGradient>
        <linearGradient id="chair-back" x1="50" y1="60" x2="110" y2="160">
          <stop offset="0%" stopColor="#ede9fe" />
          <stop offset="100%" stopColor="#e4e0f4" />
        </linearGradient>
        <linearGradient id="chair-head" x1="35" y1="40" x2="80" y2="75">
          <stop offset="0%" stopColor="#ddd6fe" />
          <stop offset="100%" stopColor="#c4b5fd" />
        </linearGradient>
        <linearGradient id="light-beam" x1="260" y1="78" x2="260" y2="140">
          <stop offset="0%" stopColor="rgba(253,224,71,0.15)" />
          <stop offset="100%" stopColor="rgba(253,224,71,0)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function FloatingTeeth() {
  const teeth = [
    { x: "5%", y: "20%", size: "w-8 h-8", delay: 0, duration: 5 },
    { x: "85%", y: "15%", size: "w-6 h-6", delay: 1, duration: 6 },
    { x: "75%", y: "70%", size: "w-7 h-7", delay: 2, duration: 4.5 },
    { x: "15%", y: "75%", size: "w-5 h-5", delay: 0.5, duration: 5.5 },
    { x: "90%", y: "45%", size: "w-6 h-6", delay: 1.5, duration: 7 },
    { x: "50%", y: "85%", size: "w-5 h-5", delay: 3, duration: 6 },
  ];

  return (
    <>
      {teeth.map((t, i) => (
        <motion.div
          key={i}
          className={`absolute ${t.size} opacity-[0.06]`}
          style={{ left: t.x, top: t.y }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: t.duration,
            repeat: Infinity,
            delay: t.delay,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 100 120" fill="currentColor" className="w-full h-full text-purple-600">
            <path d="M50 8C35 8 22 18 18 32C14 46 16 58 22 70C28 82 32 94 36 108C38 114 44 118 50 118C56 118 62 114 64 108C68 94 72 82 78 70C84 58 86 46 82 32C78 18 65 8 50 8Z" />
          </svg>
        </motion.div>
      ))}
    </>
  );
}
