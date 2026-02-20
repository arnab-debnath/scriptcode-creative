// app/demos/architecture/layout.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function NeonArchitectLayout({ children }: { children: React.ReactNode }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Index', path: '/demos/architecture' },
    { name: 'Archive', path: '/demos/architecture/archive' },
    { name: 'Studio', path: '#' },
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-cyan-500 selection:text-black relative overflow-hidden">
      
      {/* FULL SCREEN MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 bg-[#050505] z-[100] transition-transform duration-500 flex flex-col justify-center px-8 ${isMobileOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <button 
          onClick={() => setIsMobileOpen(false)}
          className="absolute top-8 right-6 text-white hover:text-cyan-400 transition-colors"
        >
          <X size={32} strokeWidth={1} />
        </button>
        
        <nav className="flex flex-col gap-8">
          {navLinks.map((link, idx) => (
            <Link 
              key={link.name} 
              href={link.path}
              className="text-5xl font-black uppercase tracking-tighter hover:text-cyan-400 transition-colors flex items-center gap-4"
            >
              <span className="text-sm font-mono text-white/30 tracking-widest font-light">0{idx + 1}</span>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Architectural Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute left-1/4 top-0 bottom-0 border-l border-white/20"></div>
        <div className="absolute left-2/4 top-0 bottom-0 border-l border-white/20"></div>
        <div className="absolute left-3/4 top-0 bottom-0 border-l border-white/20"></div>
        <div className="absolute top-1/3 left-0 right-0 border-t border-white/20"></div>
        <div className="absolute top-2/3 left-0 right-0 border-t border-white/20"></div>
      </div>

      {/* Floating Minimalist Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-8 flex justify-between items-center mix-blend-difference">
        <Link href="/demos/architecture" className="text-xl font-black tracking-[0.3em] uppercase z-50 relative">
          Neon<span className="text-transparent text-stroke-white text-stroke-1 ml-2">Arch</span>
        </Link>

        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              href={item.path} 
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                pathname === item.path ? 'text-cyan-400' : 'text-white/70 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button 
          onClick={() => setIsMobileOpen(true)}
          className="md:hidden text-white hover:text-cyan-400 transition-colors z-50 relative"
        >
          <Menu size={28} strokeWidth={1.5} />
        </button>
      </header>

      {/* Socials / Coordinates Fixed Elements */}
      <div className="fixed bottom-8 left-6 md:left-12 z-40 text-[10px] font-mono tracking-widest text-white/40 uppercase rotate-180 hidden sm:block" style={{ writingMode: 'vertical-rl' }}>
        LAT 35.6762° N / LON 139.6503° E
      </div>

      <div className="fixed bottom-8 right-6 md:right-12 z-40 flex gap-4 text-[10px] font-mono tracking-widest text-white/40 uppercase">
        <Link href="#" className="hover:text-white transition-colors">IG</Link>
        <Link href="#" className="hover:text-white transition-colors">X</Link>
        <Link href="#" className="hover:text-white transition-colors">IN</Link>
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 w-full h-screen overflow-y-auto scroll-smooth">
        {children}
      </main>

    </div>
  );
}