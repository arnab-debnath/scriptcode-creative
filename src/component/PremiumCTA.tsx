// src/components/PremiumCTA.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Rocket } from 'lucide-react';

export default function PremiumCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-t border-white/5 mt-12">
      {/* Cinematic Glowing Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050B0D]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
        
        {/* The "Hook" Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-bold mb-8 shadow-lg shadow-cyan-500/10">
          <Rocket size={16} />
          <span>Let's Build Together</span>
        </div>
        
        {/* The Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
          Ready to architect your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            digital advantage?
          </span>
        </h2>
        
        {/* The Pitch (The "Why Us") */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          Stop settling for generic templates that limit your growth. Give ScriptCode Innovation the chance to engineer a custom, high-performance platform that scales your revenue and dominates your market.
        </p>
        
        {/* The Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link href="/estimate" className="w-full sm:w-auto">
            <button className="px-4 md:px-8 py-4 w-full rounded-full bg-white text-black font-extrabold text-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 group cursor-pointer">
              Start Your Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          
          <Link href="/portfolio" className="w-full sm:w-auto">
            <button className="px-8 py-4 w-full rounded-full bg-transparent border-2 border-white/20 text-white font-bold text-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300 cursor-pointer">
              Explore Our Work
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}