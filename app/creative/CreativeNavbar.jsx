"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // <--- 1. Import this
import { ArrowRight, Menu, X, Sparkles } from 'lucide-react';

export default function CreativeNavbar() {
  const pathname = usePathname(); // <--- 2. Get current URL
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

  // <--- 3. THE FIX: Hide this navbar if we are inside a Demo page
  // This ensures the Agency Navbar doesn't cover the Client's site
  if (pathname?.includes("/creative/demos")) {
    return null;
  }

  return (
    <>
      {/* --- DESKTOP & MOBILE NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out h-20 ${
          scrolled 
          ? 'bg-transparent backdrop-blur-xl border-b border-white/10 shadow-lg' 
          : 'bg-transparent border-b border-transparent shadow-none'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
            
            {/* 1. LOGO TRANSFORMATION */}
            <Link href="/creative" className="flex items-center group relative z-50 h-full">
                
                {/* A. SHORT LOGO (Hidden at top, Slides in on scroll) */}
                <div className={`flex items-center overflow-hidden transition-all ${
                    scrolled ? 'max-w-[200px] opacity-100 translate-x-0' : 'max-w-0 opacity-0 -translate-x-4'
                }`}>
                    <img 
                        src="/images/scshortlogo.png" 
                        alt="ScriptCode Icon" 
                        className="w-10 h-10 object-contain brightness-0 invert mix-blend-screen" 
                    />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400 font-bold text-sm md:text-base whitespace-nowrap">
                        .Creative
                    </span>
                </div>

                {/* B. FULL LOGO (Visible at top, Slides out on scroll) */}
                <div className={`flex items-center overflow-hidden  ${
                    scrolled ? 'max-w-0 opacity-0 translate-x-4' : 'max-w-[300px] opacity-100 translate-x-0'
                }`}>
                    <div className="flex items-center">
                        <img 
                            src="/images/scriptcodelogo.png" 
                            alt="ScriptCode Logo" 
                            className="w-auto h-6 object-contain" 
                        /> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400 font-bold ml-1 text-sm md:text-base">
                            . Creative
                        </span>
                    </div>
                </div>
            </Link>

            {/* 2. Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                <Link href="/creative/about" className="hover:text-white hover:scale-105 transition-all">Creative Home</Link>
                <Link href="/creative/services" className="hover:text-white hover:scale-105 transition-all">Services</Link>
                <Link href="/creative/pricing" className="hover:text-purple-300 hover:scale-105 transition-all">Pricing</Link>
                <Link href="/creative/work" className="hover:text-white hover:scale-105 transition-all">Concept Lab</Link>
            </div>

            {/* 3. Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
                <Link href="/creative/contact">
                    <button className="bg-white text-black rounded-full font-bold px-6 py-2.5 text-sm hover:bg-purple-50 transition-all flex items-center gap-2 cursor-pointer">
                        Start Growth <ArrowRight size={16} />
                    </button>
                </Link>
            </div>

            {/* 4. Mobile Toggle Button */}
            <button 
                className="md:hidden text-white p-2 relative z-50"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} />}
            </button>
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div className={`fixed inset-0 z-40 bg-[#050511]/95 backdrop-blur-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="flex flex-col space-y-8 text-center relative z-10 w-full px-8">
                <Link href="/creative" onClick={() => setIsOpen(false)} className="text-3xl font-bold text-white hover:text-purple-400 transition-colors">Agency Home</Link>
                <Link href="/creative/services" onClick={() => setIsOpen(false)} className="text-3xl font-bold text-white hover:text-purple-400 transition-colors">Services</Link>
                <Link href="/creative/pricing" onClick={() => setIsOpen(false)} className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Monthly Packages</Link>
                <Link href="/creative/work" onClick={() => setIsOpen(false)} className="text-3xl font-bold text-white hover:text-purple-400 transition-colors">Our Work</Link>
                
                <div className="pt-8 w-full">
                    <Link href="/creative/contact" onClick={() => setIsOpen(false)}>
                        <button className="w-full py-4 bg-white text-black rounded-full text-xl font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            Start Growth <ArrowRight size={20} />
                        </button>
                    </Link>
                </div>
            </div>
      </div>
    </>
  );
}