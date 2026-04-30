import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LanguageProvider } from "@/components/language-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ulypo.ai"),
  title: {
    default: "Ulypo — Your AI Life Agent",
    template: "%s · Ulypo",
  },
  description:
    "We're building an AI that doesn't just talk — it gets real-world things done. Book restaurants, bridge language barriers, decode tax steps, find what's nearby, all from one conversation.",
  keywords: [
    "Ulypo",
    "AI Life Agent",
    "AI agent",
    "AI assistant",
    "AI booking",
    "AI travel planner",
    "AI surprise video",
    "voice translation",
    "AI counselor",
    "PWA",
  ],
  openGraph: {
    title: "Ulypo — Your AI Life Agent",
    description:
      "Book restaurants, bridge language barriers, decode tax steps, and find what you need nearby — Ulypo guides you through life's high-friction moments.",
    url: "https://ulypo.ai",
    siteName: "Ulypo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ulypo — Your AI Life Agent",
    description:
      "One guided experience for bookings, translations, tax steps, and discovering what's nearby. That's Ulypo.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <LanguageProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
