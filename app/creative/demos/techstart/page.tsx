"use client";

import React from 'react';
import { 
  TrendingUp, Users, MousePointer2, BarChart3, 
  Share2, Play, ChevronRight, Zap, Target, Instagram
} from 'lucide-react';
import BackToLab from '../../components/BackToLab';

export default function TechStartDemo() {
  return (
    <div className="bg-[#020617] text-white font-sans selection:bg-[#E1306C] selection:text-white overflow-x-hidden">
      
      {/* 1. ANALYTICS STRIP */}
      <div className="bg-gradient-to-r from-[#E1306C] to-[#FCAF45] py-2 px-6 overflow-hidden border-b border-white/10">
        <div className="flex justify-center gap-12 animate-pulse">
          <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
            <TrendingUp size={12} /> Engagement Rate: +14.2%
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
            <Users size={12} /> Organic Reach: 450k+
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
            <BarChart3 size={12} /> Conversion: 8.4%
          </span>
        </div>
      </div>

      {/* 2. TECHSTART NAV */}
      <nav className="h-20 flex items-center justify-between px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center font-black text-xl">T</div>
          <span className="text-xl font-black tracking-tighter uppercase">TechStart<span className="text-[#E1306C]">.</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
          <a href="#" className="hover:text-white">The Method</a>
          <a href="#" className="hover:text-white">Analytics</a>
          <a href="#" className="hover:text-white text-[#E1306C]">Case Studies</a>
        </div>
        <button className="bg-white text-black px-5 py-2 rounded text-[10px] font-black uppercase tracking-widest hover:bg-[#E1306C] hover:text-white transition-colors">
          Audit My Brand
        </button>
      </nav>

      {/* 3. HERO SECTION */}
      <section className="pt-20 pb-32 px-6 relative">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-600/10 blur-[150px] rounded-full -z-10"></div>
        
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <Zap size={12} className="text-[#FCAF45]" /> Algorithm Optimized
          </div>
          
          <h1 className="text-5xl md:text-[6rem] font-black leading-[0.9] tracking-tighter uppercase mb-8">
            Stop Guessing. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E1306C] via-[#FCAF45] to-white">Start Growing.</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            We turn generic social media into high-performance sales engines. Data-backed strategies for brands that demand actual ROI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#E1306C] text-white px-10 py-5 rounded font-black uppercase text-sm tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-2">
              Book Blueprint Call <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 4. THE BLUEPRINT (Feature Grid) */}
      <section className="py-24 px-6 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            { 
              title: "The Hook Method", 
              icon: <MousePointer2 className="text-[#E1306C]" />, 
              desc: "Stop the scroll in 0.5 seconds with high-contrast visual engineering." 
            },
            { 
              title: "Value Stacking", 
              icon: <Target className="text-[#FCAF45]" />, 
              desc: "Turn passive followers into active advocates through educational carousels." 
            },
            { 
              title: "Retention Logic", 
              icon: <Share2 className="text-blue-400" />, 
              desc: "Engineered captions designed to maximize 'Saves'—the algorithm's secret fuel." 
            }
          ].map((item, idx) => (
            <div key={idx} className="p-8 border border-white/5 rounded-2xl bg-[#020617] hover:border-[#E1306C]/50 transition-colors">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-black uppercase tracking-tighter mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. LIVE CASE STUDY MOCKUP */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-tight">
              Visual <span className="text-[#E1306C]">Psychology</span> <br /> Meets Data.
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 text-[#E1306C]"><Zap size={20} /></div>
                <div>
                  <h4 className="font-black uppercase text-xs tracking-widest mb-1">Color Theory</h4>
                  <p className="text-gray-400 text-sm">Strategic use of #E1306C to trigger immediate brain attention.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 text-[#E1306C]"><Instagram size={20} /></div>
                <div>
                  <h4 className="font-black uppercase text-xs tracking-widest mb-1">Grid Management</h4>
                  <p className="text-gray-400 text-sm">Balanced layouts that convert 3-second profile visits into followers.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Abstract Grid Visual */}
          <div className="w-full lg:w-1/2 grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="aspect-square bg-white/5 rounded-lg border border-white/5 overflow-hidden group relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#E1306C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-full h-full flex items-center justify-center opacity-20 group-hover:opacity-100 transition-opacity">
                  {i % 2 === 0 ? <Play size={20} /> : <BarChart3 size={20} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-white text-black p-12 rounded-[2rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5"><TrendingUp size={200} /></div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 relative z-10">Scale Your Brand.</h2>
          <p className="text-lg font-bold mb-8 opacity-60 relative z-10 italic">Stop playing with social media. Start using it as a weapon.</p>
          <button className="bg-[#E1306C] text-white px-10 py-5 rounded font-black uppercase text-sm tracking-widest hover:bg-black transition-colors relative z-10">
            Get My Growth Audit
          </button>
        </div>
      </section>

      {/* EXIT COMPONENT */}
      <BackToLab />

      <footer className="py-20 border-t border-white/5 text-center text-gray-600 text-[10px] font-black uppercase tracking-[0.5em]">
        © 2026 ScriptCode Creative • Data-Led Growth
      </footer>

    </div>
  );
}