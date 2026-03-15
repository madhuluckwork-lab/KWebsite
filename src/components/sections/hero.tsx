"use client";

import { ShaderCanvas } from "@/components/ui/animated-shader-hero";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Container } from "@/components/shared/container";
import { HERO_FEATURES } from "@/lib/constants";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black flex items-center">
      {/* Animated Shader Background */}
      <ShaderCanvas />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <Container className="text-center">
          {/* Trust Badge */}
          <div className="mb-8 animate-[fade-in-down_0.8s_ease-out_forwards]">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500/10 backdrop-blur-md border border-orange-300/30 rounded-full text-sm">
              <Sparkles className="h-4 w-4 text-amber-300" />
              <span className="text-orange-100">Trusted by 30,000+ healthcare practices</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-2">
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-orange-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent animate-[fade-in-up_0.8s_ease-out_0.2s_forwards] opacity-0"
            >
              AI-Powered Revenue
            </h1>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent animate-[fade-in-up_0.8s_ease-out_0.4s_forwards] opacity-0"
            >
              Cycle Management
            </h1>
          </div>

          {/* Subtitle */}
          <div className="max-w-3xl mx-auto mt-6 animate-[fade-in-up_0.8s_ease-out_0.6s_forwards] opacity-0">
            <p className="text-lg md:text-xl lg:text-2xl text-orange-100/70 font-light leading-relaxed">
              From voice-powered clinical documentation to intelligent code prediction.
              Streamline your entire revenue cycle with Klaimos.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-[fade-in-up_0.8s_ease-out_0.8s_forwards] opacity-0">
            <InteractiveHoverButton
              text="Schedule a Demo"
              href="#schedule"
              className="w-48 text-sm bg-gradient-to-r from-orange-500 to-yellow-500 border-0 text-black font-semibold hover:shadow-xl hover:shadow-orange-500/25"
            />
            <InteractiveHoverButton
              text="See How it Works"
              href="#features"
              className="w-48 text-sm bg-orange-500/10 border-orange-300/30 text-orange-100 backdrop-blur-sm"
            />
          </div>

          {/* Feature cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto animate-[fade-in-up_0.8s_ease-out_1s_forwards] opacity-0">
            {HERO_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group rounded-xl border border-orange-300/10 bg-black/40 backdrop-blur-md p-5 transition-all duration-500 hover:bg-orange-500/5 hover:border-orange-300/20"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 border border-orange-500/20">
                      <Icon className="h-5 w-5 text-orange-400 group-hover:text-amber-300 transition-colors" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-sm font-semibold text-orange-100/90">{feature.title}</h4>
                      <p className="text-xs text-orange-100/35 mt-0.5">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
