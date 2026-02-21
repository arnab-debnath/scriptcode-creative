"use client";

import React from 'react';
import { Check, X } from 'lucide-react';

export default function MembershipsPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
      
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
          Commit to <span className="text-[#DFFF00]">Greatness</span>
        </h1>
        <p className="text-lg text-gray-400 font-medium tracking-wide uppercase">
          No initiation fees. No annual contracts. Just results.
        </p>
      </div>

      {/* PRICING CARDS */}
      <div className="grid md:grid-cols-3 gap-8 items-center">
        
        {/* DIGITAL PLAN */}
        <div className="bg-[#111] border border-white/10 p-8 flex flex-col h-full hover:border-white/30 transition-colors">
            <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Digital</h2>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6">Train anywhere</p>
            
            <div className="mb-8 border-b border-white/10 pb-8">
                <div className="flex items-baseline gap-1 text-white">
                    <span className="text-5xl font-black tracking-tighter">$39</span>
                    <span className="text-gray-500 text-sm font-bold uppercase">/ Mo</span>
                </div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
                {[
                    'Elite App Access',
                    'Live & On-Demand Classes',
                    'Custom Program Builder',
                ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <Check size={18} className="text-[#DFFF00] shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm font-medium tracking-wide">{feature}</span>
                    </li>
                ))}
                {[
                    'Physical Club Access',
                    'In-Person Group Classes',
                    'Sauna & Recovery Lounge',
                ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 opacity-30">
                        <X size={18} className="text-white shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm font-medium tracking-wide line-through">{feature}</span>
                    </li>
                ))}
            </ul>

            <button className="w-full py-4 bg-white/5 border border-white/20 text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors mt-auto">
                Select Digital
            </button>
        </div>

        {/* ALL-ACCESS PLAN (Highlighted) */}
        <div className="bg-black border-2 border-[#DFFF00] p-8 md:py-12 flex flex-col h-full relative transform md:-translate-y-4 shadow-[0_0_40px_rgba(223,255,0,0.1)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#DFFF00] text-black text-[10px] font-black uppercase tracking-widest px-4 py-1">
                Most Popular
            </div>
            
            <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-2 mt-2">All-Access</h2>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">The Full Experience</p>
            
            <div className="mb-8 border-b border-white/20 pb-8">
                <div className="flex items-baseline gap-1 text-white">
                    <span className="text-6xl font-black tracking-tighter">$199</span>
                    <span className="text-gray-500 text-sm font-bold uppercase">/ Mo</span>
                </div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
                {[
                    'Elite App Access',
                    'Global Club Access',
                    'Unlimited Group Classes',
                    'Sauna & Recovery Lounge',
                    'Guest Passes (2/Mo)'
                ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <Check size={18} className="text-[#DFFF00] shrink-0 mt-0.5" />
                        <span className="text-white text-sm font-medium tracking-wide">{feature}</span>
                    </li>
                ))}
            </ul>

            <button className="w-full py-5 bg-[#DFFF00] text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-colors mt-auto">
                Join All-Access
            </button>
        </div>

        {/* ELITE PLAN */}
        <div className="bg-[#111] border border-white/10 p-8 flex flex-col h-full hover:border-white/30 transition-colors">
            <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Black Card</h2>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6">For the dedicated</p>
            
            <div className="mb-8 border-b border-white/10 pb-8">
                <div className="flex items-baseline gap-1 text-white">
                    <span className="text-5xl font-black tracking-tighter">$499</span>
                    <span className="text-gray-500 text-sm font-bold uppercase">/ Mo</span>
                </div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
                {[
                    'Global Club Access',
                    'Unlimited Group Classes',
                    'Sauna & Recovery Lounge',
                    'Personal Training (4x/Mo)',
                    'Private Locker & Laundry',
                    'Nutrition Consultation'
                ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <Check size={18} className="text-[#DFFF00] shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm font-medium tracking-wide">{feature}</span>
                    </li>
                ))}
            </ul>

            <button className="w-full py-4 bg-white/5 border border-white/20 text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors mt-auto">
                Select Black Card
            </button>
        </div>

      </div>
    </div>
  );
}