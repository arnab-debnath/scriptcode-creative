import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import CreativeNavbar from "./CreativeNavbar"; // <--- Import the file we just created
import CreativeFooter from "./CreativeFooter"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ScriptCode Creative | Growth & Marketing",
  description: "SEO, Branding, and Shopify experts for modern businesses.",
};

export default function CreativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={inter.className}>
      
      {/* --- USE THE NEW NAVBAR COMPONENT --- */}
      {/* This handles the Mobile Menu logic safely */}
      <CreativeNavbar />

      {/* --- PAGE CONTENT --- */}
      <main className="bg-black text-white min-h-screen selection:bg-purple-500 selection:text-white">
        {children}
      </main>

      {/* --- MINI FOOTER --- */}
      <CreativeFooter />


    </div>
  );
}