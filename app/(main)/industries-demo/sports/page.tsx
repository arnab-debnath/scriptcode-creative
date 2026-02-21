"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';

export default function SportsLanding() {
  return (
    <div className="bg-black pb-24 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-zinc-900 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] z-10"></div>
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <Image 
                src="/industries/industries-demos/sports-demo/hero-bg.png" 
                alt="Elite Fitness Training"
                fill
                priority
                className="object-cover opacity-40"
            />
        </div>

        <div className="relative z-20 text-center max-w-5xl mx-auto mt-20">
            <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black uppercase tracking-tighter leading-[0.85] mb-6">
                Defy <br /> <span className="text-transparent border-text">Your Limits</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-medium max-w-2xl mx-auto mb-10 tracking-wide">
                Premium facilities. World-class coaching. A community built on relentless progress. Welcome to the new standard of fitness.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/industries-demo/sports/memberships" className="px-10 py-4 bg-[#DFFF00] text-black font-black uppercase tracking-widest text-sm hover:bg-white transition-all w-full sm:w-auto">
                    Start Your Journey
                </Link>
                <button className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm hover:text-[#DFFF00] transition-colors">
                    <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center">
                        <Play size={16} className="ml-1" />
                    </div>
                    Watch Anthem
                </button>
            </div>
        </div>
      </section>

      {/* 2. BRAND PHILOSOPHY MARQUEE */}
      <section className="bg-[#DFFF00] py-4 overflow-hidden border-y-4 border-white">
        <div className="flex whitespace-nowrap gap-8 animate-marquee text-black font-black uppercase tracking-tighter text-3xl">
            <span>No Excuses • Push Harder • Elite Performance • Relentless • Break Boundaries • Own Your Power •</span>
            <span>No Excuses • Push Harder • Elite Performance • Relentless • Break Boundaries • Own Your Power •</span>
        </div>
      </section>

      {/* 3. PROGRAMS PREVIEW */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 text-white">Signature <br/><span className="text-gray-500">Programs</span></h2>
            </div>
            <Link href="/industries-demo/sports/programs" className="flex items-center gap-2 text-[#DFFF00] font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">
                View All Classes <ArrowRight size={16} />
            </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            {/* Class 1 */}
            <div className="group relative h-[450px] bg-zinc-900 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10"></div>
                <Image 
                    src="/industries/industries-demos/sports-demo/class-hiit.png" 
                    alt="HIIT Class"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-black via-black/80 to-transparent">
                    <div className="text-[#DFFF00] text-xs font-black uppercase tracking-widest mb-2">High Intensity</div>
                    <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-2">Ignite HIIT</h3>
                    <p className="text-gray-400 text-sm font-medium mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">45 minutes of absolute metabolic conditioning. Burn calories long after you leave.</p>
                    <div className="flex items-center justify-between border-t border-white/20 pt-4 mt-4">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">View Schedule</span>
                        <ChevronRight className="text-[#DFFF00]" size={20} />
                    </div>
                </div>
            </div>

            {/* Class 2 */}
            <div className="group relative h-[450px] bg-zinc-900 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10"></div>
                <Image 
                    src="/industries/industries-demos/sports-demo/class-strength.png" 
                    alt="Strength Class"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-black via-black/80 to-transparent">
                    <div className="text-[#DFFF00] text-xs font-black uppercase tracking-widest mb-2">Strength</div>
                    <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-2">Iron Forge</h3>
                    <p className="text-gray-400 text-sm font-medium mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Heavy lifting, progressive overload, and pure power development.</p>
                    <div className="flex items-center justify-between border-t border-white/20 pt-4 mt-4">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">View Schedule</span>
                        <ChevronRight className="text-[#DFFF00]" size={20} />
                    </div>
                </div>
            </div>

            {/* Class 3 */}
            <div className="group relative h-[450px] bg-zinc-900 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10"></div>
                <Image 
                    src="/industries/industries-demos/sports-demo/class-recovery.png" 
                    alt="Recovery Class"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-black via-black/80 to-transparent">
                    <div className="text-[#DFFF00] text-xs font-black uppercase tracking-widest mb-2">Recovery</div>
                    <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-2">Zenith Flow</h3>
                    <p className="text-gray-400 text-sm font-medium mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Active recovery, mobility, and deep tissue stretching to keep you performing.</p>
                    <div className="flex items-center justify-between border-t border-white/20 pt-4 mt-4">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">View Schedule</span>
                        <ChevronRight className="text-[#DFFF00]" size={20} />
                    </div>
                </div>
            </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .border-text {
            -webkit-text-stroke: 2px #ffffff;
            color: transparent;
        }
      `}} />

    </div>
  );
}