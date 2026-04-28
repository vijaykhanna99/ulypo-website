import { Hero } from "@/components/home/hero";
import { AgentStrip } from "@/components/home/agent-strip";
import { Logos } from "@/components/home/logos";
import { Agents } from "@/components/home/agents";
import { Features } from "@/components/home/features";
import { HowItWorks } from "@/components/home/how-it-works";
import { Showcase } from "@/components/home/showcase";
import { Testimonials } from "@/components/home/testimonials";
import { PricingTeaser } from "@/components/home/pricing-teaser";
import { FAQ } from "@/components/home/faq";
import { CTA } from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AgentStrip />
      <Logos />
      <Agents />
      <Features />
      <HowItWorks />
      <Showcase />
      <Testimonials />
      <PricingTeaser />
      <FAQ />
      <CTA />
    </>
  );
}
