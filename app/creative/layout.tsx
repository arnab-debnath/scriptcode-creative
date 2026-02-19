import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import CreativeNavbar from "./CreativeNavbar"; // <--- Import the file we just created

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
      <footer className="border-t border-white/10 bg-black py-12 text-center">
        <p className="text-gray-500 text-sm">
            Part of the <span className="text-white font-bold">ScriptCode Ecosystem</span>.
            <br />
            <Link href="/" className="text-purple-400 hover:underline mt-2 inline-block">
                Looking for Software Engineering? &rarr;
            </Link>
        </p>
      </footer>

    </div>
  );
}