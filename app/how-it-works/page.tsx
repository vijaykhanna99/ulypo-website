import type { Metadata } from "next";
import { HowItWorksContent } from "@/components/pages/how-it-works-content";

export const metadata: Metadata = {
  title: "How it works",
  description: "From sign-in to your first booking in under 60 seconds. See how Ulypo turns a simple ask into a real-world result.",
};

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}
