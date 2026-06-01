import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "VibeAnything — Build anything. Ship everything.",
  description:
    "AI tools, automation agents, and web apps by Jim Brouwer. UK-based developer and founder of VibeAnything.",
  metadataBase: new URL("https://vibe-anything.com"),
  openGraph: {
    title: "VibeAnything",
    description: "AI tools, automation agents, and web apps — built fast, shipped for real.",
    url: "https://vibe-anything.com",
    siteName: "VibeAnything",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeAnything",
    description: "AI tools, automation agents, and web apps — built fast, shipped for real.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full bg-[#0a0a0b] text-white">{children}</body>
    </html>
  );
}
