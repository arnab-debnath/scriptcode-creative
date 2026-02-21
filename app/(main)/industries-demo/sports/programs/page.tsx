"use client";

import React from 'react';
import Image from 'next/image';
import { Flame, Dumbbell, Wind, Clock } from 'lucide-react';

export default function ProgramsPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      
      {/* HEADER */}
      <div className="mb-16 border-b border-white/10 pb-10">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
          The <span className="text-[#DFFF00]">Programs</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl font-medium tracking-wide">
          Designed by elite athletes. Backed by science. Choose your discipline and push your limits.
        </p>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap gap-4 mb-12">
        <button className="px-6 py-3 bg-[#DFFF00] text-black font-black uppercase tracking-widest text-xs">All Classes</button>
        <button className="px-6 py-3 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:border-[#DFFF00] hover:text-[#DFFF00] transition-colors">Strength</button>
        <button className="px-6 py-3 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:border-[#DFFF00] hover:text-[#DFFF00] transition-colors">Cardio</button>
        <button className="px-6 py-3 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:border-[#DFFF00] hover:text-[#DFFF00] transition-colors">Recovery</button>
      </div>

      {/* PROGRAMS GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Card 1: HIIT */}
        <div className="bg-[#111] border border-white/5 hover:border-[#DFFF00]/50 transition-colors group">
            <div className="h-48 relative overflow-hidden bg-zinc-900">
                <Image 
                    src="/industries/industries-demos/sports-demo/class-hiit.png"
                    alt="HIIT Class"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10"></div>
                <div className="absolute top-4 left-4 z-20 bg-black/80 px-3 py-1 text-[#DFFF00] text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <Flame size={12} /> High Intensity
                </div>
            </div>
            <div className="p-8">
                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-3">Ignite HIIT</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">Absolute metabolic conditioning. Spiked heart rates and maximum calorie burn using kettlebells, rowers, and plyometrics.</p>
                <div className="space-y-3 mb-8">
                    <div className="flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-widest">
                        <span>Duration</span> <span className="text-white flex items-center gap-2"><Clock size={14}/> 45 Min</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-widest">
                        <span>Intensity</span> 
                        <div className="flex gap-1">
                            <div className="w-2 h-4 bg-[#DFFF00]"></div><div className="w-2 h-4 bg-[#DFFF00]"></div><div className="w-2 h-4 bg-[#DFFF00]"></div><div className="w-2 h-4 bg-[#DFFF00]"></div><div className="w-2 h-4 bg-[#DFFF00]"></div>
                        </div>
                    </div>
                </div>
                <button className="w-full py-4 border border-white/20 text-white font-black uppercase tracking-widest text-xs group-hover:bg-[#DFFF00] group-hover:text-black group-hover:border-[#DFFF00] transition-all">
                    View Schedule
                </button>
            </div>
        </div>

        {/* Card 2: Strength */}
        <div className="bg-[#111] border border-white/5 hover:border-[#DFFF00]/50 transition-colors group">
            <div className="h-48 relative overflow-hidden bg-zinc-900">
                <Image 
                    src="/industries/industries-demos/sports-demo/class-strength.png"
                    alt="Strength Class"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10"></div>
                <div className="absolute top-4 left-4 z-20 bg-black/80 px-3 py-1 text-[#DFFF00] text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <Dumbbell size={12} /> Strength
                </div>
            </div>
            <div className="p-8">
                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-3">Iron Forge</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">Progressive overload protocol. Focus on the big three lifts—squat, bench, deadlift—to build raw power and muscle density.</p>
                <div className="space-y-3 mb-8">
                    <div className="flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-widest">
                        <span>Duration</span> <span className="text-white flex items-center gap-2"><Clock size={14}/> 60 Min</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-widest">
                        <span>Intensity</span> 
                        <div className="flex gap-1">
                            <div className="w-2 h-4 bg-[#DFFF00]"></div><div className="w-2 h-4 bg-[#DFFF00]"></div><div className="w-2 h-4 bg-[#DFFF00]"></div><div className="w-2 h-4 bg-[#DFFF00]"></div><div className="w-2 h-4 bg-white/20"></div>
                        </div>
                    </div>
                </div>
                <button className="w-full py-4 border border-white/20 text-white font-black uppercase tracking-widest text-xs group-hover:bg-[#DFFF00] group-hover:text-black group-hover:border-[#DFFF00] transition-all">
                    View Schedule
                </button>
            </div>
        </div>

        {/* Card 3: Recovery */}
        <div className="bg-[#111] border border-white/5 hover:border-[#DFFF00]/50 transition-colors group">
            <div className="h-48 relative overflow-hidden bg-zinc-900">
                <Image 
                    src="/industries/industries-demos/sports-demo/class-recovery.png"
                    alt="Recovery Class"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10"></div>
                <div className="absolute top-4 left-4 z-20 bg-black/80 px-3 py-1 text-[#DFFF00] text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <Wind size={12} /> Recovery
                </div>
            </div>
            <div className="p-8">
                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-3">Zenith Flow</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">Active recovery designed for athletes. Deep tissue mobility, dynamic stretching, and breathwork to optimize repair.</p>
                <div className="space-y-3 mb-8">
                    <div className="flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-widest">
                        <span>Duration</span> <span className="text-white flex items-center gap-2"><Clock size={14}/> 45 Min</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-widest">
                        <span>Intensity</span> 
                        <div className="flex gap-1">
                            <div className="w-2 h-4 bg-[#DFFF00]"></div><div className="w-2 h-4 bg-[#DFFF00]"></div><div className="w-2 h-4 bg-white/20"></div><div className="w-2 h-4 bg-white/20"></div><div className="w-2 h-4 bg-white/20"></div>
                        </div>
                    </div>
                </div>
                <button className="w-full py-4 border border-white/20 text-white font-black uppercase tracking-widest text-xs group-hover:bg-[#DFFF00] group-hover:text-black group-hover:border-[#DFFF00] transition-all">
                    View Schedule
                </button>
            </div>
        </div>

      </div>
    </div>
  );
}