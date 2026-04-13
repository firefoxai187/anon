import type { Metadata } from "next";
import { Geist, Space_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Justin.md | Growth Specialist",
  description: "Growth specialist & Web3 native. Turning ideas into the talk of CT.",
  openGraph: {
    title: "Justin.md | Growth Specialist",
    description: "Growth specialist & Web3 native. Turning ideas into the talk of CT.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Justin.md — Growth Specialist",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin.md | Growth Specialist",
    description: "Growth specialist & Web3 native. Turning ideas into the talk of CT.",
    images: ["/images/og-image.png"],
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";
import TopBar from "@/components/TopBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark h-full antialiased">
      <body
        className={`${geistSans.variable} ${spaceMono.variable} font-sans bg-background text-foreground min-h-full flex flex-col selection:bg-accent/30 selection:text-accent`}
      >
        <ThemeProvider>
          <div className="fixed inset-0 pointer-events-none z-[40] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
          <div className="fixed inset-0 pointer-events-none z-[40] bg-scanlines opacity-[0.02] mix-blend-overlay" />
          <TopBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
