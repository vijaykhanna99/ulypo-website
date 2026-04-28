import type { Metadata } from "next";
import { AboutContent } from "@/components/pages/about-content";

export const metadata: Metadata = {
  title: "About",
  description: "Ulypo is building the AI Life Agent every person deserves — one that doesn't just talk, but actually gets things done.",
};

export default function AboutPage() {
  return <AboutContent />;
}
