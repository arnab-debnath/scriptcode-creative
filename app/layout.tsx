// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import NavbarWrapper from "../src/component/layout/NavbarWrapper"; // <-- UPDATED THIS
import FooterWrapper from "../src/component/layout/FooterWrapper";

const inter = Inter({ subsets: ["latin"] });

// --- UPDATED SEO METADATA ---
export const metadata: Metadata = {
  title: {
    default: "ScriptCode Innovation | High-Performance Software Engineering",
    template: "%s | ScriptCode Innovation" 
  },
  description: "Architecting scalable, high-performance software for modern enterprises. Custom web, mobile, and cloud development.",
  keywords: ["software engineering", "custom software", "web development", "tech agency India", "cloud migration", "IT consulting"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarWrapper /> {/* <-- UPDATED THIS */}
        <main className="min-h-screen bg-[#060b10]">
            {children}
        </main>
        <FooterWrapper />
      </body>
    </html>
  );
}