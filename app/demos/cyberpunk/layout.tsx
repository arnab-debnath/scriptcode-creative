// app/demos/cyberpunk/layout.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function CyberpunkLayout({ children }: { children: React.ReactNode }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu automatically when the route changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden">
      
      {/* GLITCHY NAVBAR */}
      <nav className="fixed w-full z-50 top-0 flex justify-between items-center px-6 md:px-12 py-6 bg-gradient-to-b from-black/90 via-black/50 to-transparent backdrop-blur-[2px]">
        
        {/* Logo */}
        <Link href="/demos/cyberpunk" className="text-2xl md:text-3xl font-black italic tracking-tighter">
          CYBER<span className="text-cyan-400">PUNK</span>
          <span className="text-yellow-400 text-sm ml-1">_2099</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-sm font-bold uppercase tracking-widest text-white/80">
          <Link href="#" className="hover:text-yellow-400 transition-colors relative group">
            Trailers
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
          </Link>
          
          {/* Updated Factions Link with Active State */}
          <Link href="/demos/cyberpunk/factions" className="hover:text-cyan-400 transition-colors relative group">
            Factions
            <span className={`absolute -bottom-2 left-0 h-0.5 bg-cyan-400 transition-all ${pathname === '/demos/cyberpunk/factions' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          
          <Link href="#" className="hover:text-pink-500 transition-colors relative group">
            Cyberware
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
          </Link>
        </div>

        {/* Pre-Order Button (Skewed Gaming Style) */}
        <div className="hidden md:block">
          <button className="bg-yellow-400 text-black px-8 py-2.5 font-black uppercase text-sm tracking-widest skew-x-[-15deg] hover:bg-white transition-all shadow-[0_0_20px_rgba(250,204,21,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] group">
             <span className="skew-x-[15deg] inline-block group-hover:scale-105 transition-transform">Pre-Order Now</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-yellow-400" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8 backdrop-blur-md">
          <Link href="#" className="text-3xl font-black uppercase tracking-widest hover:text-yellow-400">Trailers</Link>
          
          {/* Updated Factions Mobile Link with Active State */}
          <Link 
            href="/demos/cyberpunk/factions" 
            className={`text-3xl font-black uppercase tracking-widest hover:text-cyan-400 transition-colors ${pathname === '/demos/cyberpunk/factions' ? 'text-cyan-400' : ''}`}
          >
            Factions
          </Link>
          
          <Link href="#" className="text-3xl font-black uppercase tracking-widest hover:text-pink-500">Cyberware</Link>
          <button className="mt-8 bg-yellow-400 text-black px-12 py-4 font-black uppercase text-xl tracking-widest skew-x-[-15deg]">
             <span className="skew-x-[15deg] inline-block">Pre-Order Now</span>
          </button>
        </div>
      )}

      {/* MAIN CONTENT AREA */}
      <main className="relative w-full">
        {children}
      </main>

    </div>
  );
}