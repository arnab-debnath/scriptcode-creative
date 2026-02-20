// app/demos/cyberpunk/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { Crosshair, Cpu, Zap, ChevronRight, Play } from 'lucide-react';

export default function CyberpunkLandingPage() {
  return (
    <div className="pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden pt-20">
        {/* Background Image Optimized with Next.js Image */}
        <div className="absolute inset-0 w-full h-full bg-neutral-900 border-b border-yellow-400/30">
          <Image 
            src="/portfolio/game.jpg" 
            alt="Cyberpunk Cityscape" 
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60 mix-blend-luminosity scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-start">
          <span className="bg-yellow-400 text-black px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-4 md:mb-6 animate-pulse inline-block">
            System Override Initiated
          </span>
          
          {/* FLUID TYPOGRAPHY: Starts at 4xl for mobile, scales up to 9rem for massive desktops */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter leading-[0.85] mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Welcome To <br />
            <span className="text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.4)]">Nightfall.</span>
          </h1>
          
          {/* FLUID TEXT: text-sm on mobile, text-xl on desktop */}
          <p className="max-w-xl text-sm sm:text-base md:text-xl text-white/80 font-medium mb-8 md:mb-10 border-l-4 border-cyan-400 pl-4">
            The megacorps own the sky. The gangs rule the streets. Modify your body, hack the mainframe, and burn the city to the ground.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            {/* BUTTON SCALING: Smaller padding and text on mobile */}
            <button className="w-full sm:w-auto bg-yellow-400 text-black px-6 py-3 md:px-10 md:py-4 font-black uppercase text-base md:text-lg tracking-widest skew-x-[-15deg] hover:bg-white transition-all shadow-[0_0_20px_rgba(250,204,21,0.4)] group flex items-center justify-center gap-3">
               <span className="skew-x-[15deg] inline-block group-hover:scale-105 transition-transform">Watch Trailer</span>
               <Play size={18} className="skew-x-[15deg] fill-black md:w-5 md:h-5" />
            </button>
            <p className="text-[10px] md:text-xs font-mono text-white/50 uppercase tracking-widest flex items-center justify-center sm:justify-start gap-2 mt-2 sm:mt-0">
               <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span> Live Worldwide Sep 2099
            </p>
          </div>
        </div>
      </section>

      {/* 2. GAMEPLAY FEATURES */}
      <section className="py-16 md:py-32 container mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Rewrite Your <span className="text-cyan-400">Code.</span>
          </h2>
          <p className="text-white/60 font-mono text-xs md:text-sm max-w-2xl mx-auto px-4">
            WARNING: High-risk neuro-implants detected. Proceed with caution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-[#0A0A0A] border border-white/10 p-6 md:p-8 hover:border-yellow-400 transition-colors group relative overflow-hidden cursor-pointer">
            <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <Crosshair size={40} className="text-yellow-400 mb-4 md:mb-6 group-hover:scale-110 transition-transform md:w-12 md:h-12" strokeWidth={1} />
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-wide mb-2 md:mb-3">Lethal Combat</h3>
            <p className="text-white/50 text-xs md:text-sm leading-relaxed">
              Master an arsenal of smart-weapons, thermal katanas, and military-grade cybernetics. Turn your body into the ultimate weapon.
            </p>
          </div>

          <div className="bg-[#0A0A0A] border border-white/10 p-6 md:p-8 hover:border-cyan-400 transition-colors group relative overflow-hidden cursor-pointer">
            <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <Cpu size={40} className="text-cyan-400 mb-4 md:mb-6 group-hover:scale-110 transition-transform md:w-12 md:h-12" strokeWidth={1} />
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-wide mb-2 md:mb-3">Neural Hacking</h3>
            <p className="text-white/50 text-xs md:text-sm leading-relaxed">
              Breach security subnets, hijack enemy optics, and manipulate the city's infrastructure from the shadows.
            </p>
          </div>

          <div className="bg-[#0A0A0A] border border-white/10 p-6 md:p-8 hover:border-pink-500 transition-colors group relative overflow-hidden cursor-pointer">
            <div className="absolute top-0 left-0 w-full h-1 bg-pink-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <Zap size={40} className="text-pink-500 mb-4 md:mb-6 group-hover:scale-110 transition-transform md:w-12 md:h-12" strokeWidth={1} />
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-wide mb-2 md:mb-3">Seamless Open World</h3>
            <p className="text-white/50 text-xs md:text-sm leading-relaxed">
              Explore a massive, vertical metropolis without a single loading screen. Every alleyway hides a secret.
            </p>
          </div>
        </div>
      </section>

      {/* 3. PRE-ORDER BANNER */}
      <section className="container mx-auto px-6 md:px-12">
        <div className="bg-yellow-400 p-6 sm:p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-10 w-px h-full bg-black/20 skew-x-[15deg]"></div>
          <div className="absolute top-0 right-12 w-px h-full bg-black/20 skew-x-[15deg]"></div>
          
          <div className="relative z-10 text-center md:text-left w-full md:w-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tighter mb-2">Secure Your Copy</h2>
            <p className="text-black/70 font-bold text-sm md:text-base max-w-md mx-auto md:mx-0">
              Pre-order the Ultimate Edition to unlock the "Neon Phantom" weapon skin and 48-hour early access.
            </p>
          </div>

          <button className="w-full md:w-auto bg-black text-white px-8 py-4 md:px-10 md:py-5 font-black uppercase text-lg md:text-xl tracking-widest skew-x-[-15deg] hover:bg-neutral-800 transition-colors relative z-10 shrink-0 shadow-2xl flex items-center justify-center gap-2">
             <span className="skew-x-[15deg] inline-block">Buy Now</span>
             <ChevronRight className="skew-x-[15deg]" />
          </button>
        </div>
      </section>

    </div>
  );
}