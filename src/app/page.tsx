import { Hero } from "@/components/sections/hero";
import { PlatformOverview } from "@/components/sections/platform-overview";
import { Scribing } from "@/components/sections/scribing";
import { CodingEngine } from "@/components/sections/coding-engine";
import { Testimonials } from "@/components/sections/testimonials";
import { HowItWorks } from "@/components/sections/how-it-works";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <PlatformOverview />
      <Scribing />
      <CodingEngine />
      <Testimonials />
      <HowItWorks />
      <FinalCta />
    </main>
  );
}
