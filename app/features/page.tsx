import type { Metadata } from "next";
import { FeaturesContent } from "@/components/pages/features-content";

export const metadata: Metadata = {
  title: "Features — Ulypo",
  description: "7 specialized AI agents in one conversation. Book, translate, plan, find, and act — Ulypo handles the real-world details.",
};

export default function FeaturesPage() {
  return <FeaturesContent />;
}
