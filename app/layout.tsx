// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Or your preferred font
import "./globals.css";
import Navbar from "../src/component/layout/Navbar";
import FooterWrapper from "../src/component/layout/FooterWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ScriptCode - Transforming Ideas into Digital Success",
  description: "Your partner in Digital Innovation. Web Development, App Design, and Marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-[#060b10]">
            {children}
        </main>
        <FooterWrapper />
      </body>
    </html>
  );
}