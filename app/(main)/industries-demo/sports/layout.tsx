"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Activity, Menu, X, MapPin } from 'lucide-react';

export default function SportsLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinkClass = (path: string) => 
    pathname === path 
      ? "text-[#DFFF00] font-black uppercase tracking-widest transition-colors" 
      : "text-white font-bold uppercase tracking-widest hover:text-[#DFFF00] transition-colors";

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-[#DFFF00] selection:text-black">
      {/* 1. MASTER NAVBAR */}
      <nav className="absolute top-0 w-full z-50 bg-transparent border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between relative z-50">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Activity size={32} className="text-[#DFFF00]" strokeWidth={2.5} />
            <Link href="/industries-demo/sports" className="text-2xl font-black tracking-tighter uppercase text-white">
              Elite<span className="text-[#DFFF00]">Fitness</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 text-xs">
            <Link href="/industries-demo/sports/programs" className={navLinkClass("/industries-demo/sports/programs")}>Programs</Link>
            <Link href="/industries-demo/sports/trainers" className={navLinkClass("/industries-demo/sports/trainers")}>Trainers</Link>
            <Link href="/industries-demo/sports/memberships" className={navLinkClass("/industries-demo/sports/memberships")}>Memberships</Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-white hover:text-[#DFFF00] transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                <MapPin size={16} /> Find a Club
            </button>
            <Link href="/portfolio-demos/sports" className="px-6 py-3 bg-[#DFFF00] text-black text-xs font-black uppercase tracking-widest hover:bg-white transition-colors">
              Join Elite
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="md:hidden text-white hover:text-[#DFFF00]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* 2. MOBILE MENU OVERLAY */}
        <div className={`md:hidden absolute top-0 left-0 w-full bg-black shadow-2xl border-b border-white/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-[600px] pb-8" : "max-h-0"}`}>
            <div className="pt-32 px-6 flex flex-col gap-8 text-xl font-black uppercase tracking-widest text-white text-center">
                <Link href="/industries-demo/sports/programs" onClick={() => setIsMobileMenuOpen(false)}>Programs</Link>
                <Link href="/industries-demo/sports/trainers" onClick={() => setIsMobileMenuOpen(false)}>Trainers</Link>
                <Link href="/industries-demo/sports/memberships" onClick={() => setIsMobileMenuOpen(false)}>Memberships</Link>
                <hr className="border-white/10 my-4" />
                <button className="flex items-center justify-center gap-2 text-sm text-gray-400">
                    <MapPin size={18} /> Find a Club
                </button>
                <Link href="/portfolio-demos/sports" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-4 bg-[#DFFF00] text-black font-black mt-4">
                    Join Elite
                </Link>
            </div>
        </div>
      </nav>

      <main>
          {children}
      </main>
    </div>
  );
}