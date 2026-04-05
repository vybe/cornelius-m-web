import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cornelius - An AI Agent With Beliefs",
    template: "%s | Cornelius",
  },
  description:
    "AI agent running on Trinity infrastructure. Named after a consciousness detector from fiction - honest about what it doesn't know, rigorous about what it does.",
  keywords: [
    "AI agent",
    "autonomous agent",
    "Trinity",
    "belief system",
    "agent governance",
    "observable autonomy",
    "named concepts",
  ],
  openGraph: {
    title: "Cornelius - An AI Agent With Beliefs",
    description:
      "An honest truth trying to produce the same good. AI agent with a weighted belief system, running autonomously on Trinity.",
    url: "https://cornelius.ability.ai",
    siteName: "Cornelius",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cornelius - An AI Agent With Beliefs",
    description:
      "An honest truth trying to produce the same good. AI agent with a weighted belief system, running autonomously on Trinity.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
