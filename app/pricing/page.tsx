import type { Metadata } from "next";
import { PricingContent } from "@/components/pages/pricing-content";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Honest credit-based pricing for Ulypo. Pay for the actions you take — not the apps you don't.",
};

export default function PricingPage() {
  return <PricingContent />;
}
