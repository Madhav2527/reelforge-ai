import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "ReelForge AI - AI-Powered Viral Video Creation",
  description: "Generate viral reel scripts, captions, hooks, and content calendars instantly. The ultimate AI SaaS for small businesses, creators, and agencies.",
  keywords: "AI video creation, reel script generator, viral hooks, instagram reels, tiktok ads, AI marketing SaaS",
  authors: [{ name: "ReelForge Team" }],
  openGraph: {
    title: "ReelForge AI - Create Viral Videos in Seconds",
    description: "AI-powered tool for generating reel scripts, captions, and ad copy.",
    url: "https://reelforge.ai",
    siteName: "ReelForge AI",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ReelForge AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
