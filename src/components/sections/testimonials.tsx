"use client";

import { motion } from "motion/react";
import { TestimonialsColumn, type TestimonialItem } from "@/components/ui/testimonials-columns";

const testimonials: TestimonialItem[] = [
  {
    text: "The coding accuracy is incredible. I received my procedure codes almost instantly and could easily verify the selections. The team guided me step by step, making the whole experience smooth and stress-free.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Dr. Sarah Mitchell",
    role: "Interventional Radiologist",
  },
  {
    text: "Klaimos's AI coding engine was seamless and professional. The recommendations were tailored to our practice, and the results were clear and actionable.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Dr. James Patterson",
    role: "Practice Manager",
  },
  {
    text: "I can actually see the difference in our revenue cycle after switching to Klaimos. The before & after results are amazing. Our denial rates dropped by 40%.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Dr. Nadia Singh",
    role: "Dental Surgeon",
  },
  {
    text: "The voice-powered scribing is a game-changer. I could dictate my notes naturally and the AI captured everything with near-perfect accuracy. No more late-night documentation.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Dr. Michael Rivera",
    role: "Cardiologist",
  },
  {
    text: "Implementing Klaimos was smooth and quick. The integration with our eClinicalWorks system was seamless, and the team training was effortless.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Amanda Chen",
    role: "IT Director",
  },
  {
    text: "The compliance validation alone has saved us thousands in potential audit penalties. Every code is verified before submission — it's peace of mind.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Dr. Lisa Park",
    role: "Compliance Officer",
  },
  {
    text: "Our claim turnaround went from 45 days to 18 days. The analytics dashboard gives us full visibility into our revenue cycle performance.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Dr. Rafi Khan",
    role: "Family Practice",
  },
  {
    text: "The 2026 CPT readiness feature is outstanding. While other platforms scrambled, Klaimos had us billing correctly from day one of the new codes.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Jennifer Torres",
    role: "Billing Manager",
  },
  {
    text: "The support team is exceptional. They guided us through every step of the setup and continue to provide outstanding ongoing assistance.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Dr. Hassan Ali",
    role: "Orthopedic Surgeon",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section className="relative bg-[#f5f7fb] py-20 sm:py-28">
      <div className="container z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-navy/10 bg-white py-1 px-4 rounded-lg text-sm font-medium text-navy">
              Testimonials
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter mt-5 text-navy text-center">
            What our users say
          </h2>
          <p className="text-center mt-5 text-slate-500">
            See how healthcare practices are transforming their revenue cycles with Klaimos.
          </p>
        </motion.div>

        {/* Scrolling columns */}
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
