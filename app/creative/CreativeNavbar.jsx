"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function CreativeNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // --- SCROLL LISTENER ---
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide this navbar if we are inside a Demo page
  if (pathname?.includes("/creative/demos")) {
    return null;
  }

  return (
    <>
      {/* --- DESKTOP & MOBILE NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out h-20 ${
          scrolled 
          ? 'bg-[#030305]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/50' 
          : 'bg-transparent border-b border-transparent shadow-none'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
            
            {/* 1. LOGO TRANSFORMATION */}
            <Link href="/creative" className="flex items-center group relative z-50 h-full">
                
                {/* A. SHORT LOGO (Hidden at top, Slides in on scroll) */}
                <div className={`flex items-center overflow-hidden transition-all duration-500 ${
                    scrolled ? 'max-w-[200px] opacity-100 translate-x-0' : 'max-w-0 opacity-0 -translate-x-4'
                }`}>
                    <img 
                        src="/images/scshortlogo.png" 
                        alt="ScriptCode Icon" 
                        className="w-10 h-10 object-contain brightness-0 invert mix-blend-screen" 
                    />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 font-black text-sm md:text-lg whitespace-nowrap tracking-tight">
                        .Creative
                    </span>
                </div>

                {/* B. FULL LOGO (Visible at top, Slides out on scroll) */}
                <div className={`flex items-center overflow-hidden transition-all duration-500 ${
                    scrolled ? 'max-w-0 opacity-0 translate-x-4' : 'max-w-[300px] opacity-100 translate-x-0'
                }`}>
                    <div className="flex items-center">
                        <img 
                            src="/images/scriptcodelogo.png" 
                            alt="ScriptCode Logo" 
                            className="w-auto h-6 object-contain" 
                        /> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 font-black ml-1 text-sm md:text-lg tracking-tight">
                            .Creative
                        </span>
                    </div>
                </div>
            </Link>

            {/* 2. Desktop Menu (Premium Underline Hover Effects) */}
            <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-400 uppercase tracking-widest">
                <Link href="/creative/about" className="relative group hover:text-white transition-colors py-2">
                    Agency
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/creative/services" className="relative group hover:text-white transition-colors py-2">
                    Services
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/creative/pricing" className="relative group text-amber-400/80 hover:text-amber-400 transition-colors py-2">
                    Pricing
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/creative/work" className="relative group hover:text-white transition-colors py-2">
                    Concept Lab
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </div>

            {/* 3. Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
                <Link href="/creative/contact">
                    <button className="bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full font-black px-6 py-2.5 text-sm hover:scale-105 transition-transform duration-300 flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(251,191,36,0.2)] hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]">
                        Start Growth <ArrowRight size={16} />
                    </button>
                </Link>
            </div>

            {/* 4. Mobile Toggle Button */}
            <button 
                className="md:hidden text-white p-2 relative z-50 hover:text-amber-400 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY (Brutalist Style) --- */}
      <div className={`fixed inset-0 z-40 bg-[#030305]/95 backdrop-blur-2xl transition-transform duration-500 ease-[0.22,1,0.36,1] md:hidden flex flex-col justify-center items-center ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="flex flex-col space-y-8 text-center relative z-10 w-full px-8">
                <Link href="/creative/about" onClick={() => setIsOpen(false)} className="text-4xl font-black text-white hover:text-amber-400 transition-colors uppercase tracking-tighter">Agency</Link>
                <Link href="/creative/services" onClick={() => setIsOpen(false)} className="text-4xl font-black text-white hover:text-amber-400 transition-colors uppercase tracking-tighter">Services</Link>
                <Link href="/creative/pricing" onClick={() => setIsOpen(false)} className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 uppercase tracking-tighter">Pricing</Link>
                <Link href="/creative/work" onClick={() => setIsOpen(false)} className="text-4xl font-black text-white hover:text-amber-400 transition-colors uppercase tracking-tighter">Concept Lab</Link>
                
                <div className="pt-12 w-full">
                    <Link href="/creative/contact" onClick={() => setIsOpen(false)}>
                        <button className="w-full py-5 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full text-xl font-black flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(251,191,36,0.3)]">
                            Start Growth <ArrowRight size={20} />
                        </button>
                    </Link>
                </div>
            </div>
      </div>
    </>
  );
}