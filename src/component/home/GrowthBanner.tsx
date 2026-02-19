// src/components/home/GrowthBanner.tsx
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const GrowthBanner: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-purple-900/40 via-[#0B0B1A] to-pink-900/20 border border-white/10 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 group">
        
        {/* Glow Effect */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full group-hover:bg-purple-600/30 transition-all duration-700"></div>
        
        <div className="relative z-10 max-w-2xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-[10px] font-bold uppercase tracking-widest mb-4">
            <Sparkles size={12} /> Beyond Engineering
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 uppercase italic tracking-tighter">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Scale</span> Your Product?
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Engineering is the foundation, but growth is the mission. Our specialized Creative Lab handles high-impact Digital Marketing to turn your technical product into a market leader.
          </p>
        </div>

        <div className="relative z-10">
          <a 
            href="https://creative.scriptcode.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 pl-8 pr-4 py-4 bg-white text-black rounded-full font-black uppercase tracking-widest text-sm hover:bg-purple-500 hover:text-white transition-all duration-300 group/btn shadow-xl shadow-purple-500/10"
          >
            Visit Digital Agency
            <div className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full group-hover/btn:rotate-45 transition-transform">
              <ArrowRight size={18} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GrowthBanner;