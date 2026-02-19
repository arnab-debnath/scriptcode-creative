"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, Sparkles, Star, Globe, 
  Zap, Layout, TrendingUp, CheckCircle 
} from 'lucide-react';

export default function CreativeHome() {
  return (
    <div className="bg-[#050511] text-white min-h-screen font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      {/* Changed: Adjusted padding and alignment for mobile */}
      <section className="relative pt-28 pb-12 px-4 md:px-6 min-h-[85vh] flex items-center">
        
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-indigo-900/20 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-900/10 blur-[80px] md:blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
            
            {/* LEFT: Text Content */}
            <div className="text-left">
                {/* Floating Sticker */}
                <div className="inline-block -rotate-6 mb-6">
                    <span className="px-3 py-1.5 md:px-4 md:py-1.5 rounded-full border border-white/20 bg-white/5 text-yellow-400 text-xs md:text-sm font-bold flex items-center gap-2 backdrop-blur-md">
                        <Star size={12} fill="currentColor" /> World Class Design
                    </span>
                </div>

                {/* Changed: Font sizes scaled down for mobile */}
                <h1 className="text-4xl sm:text-5xl md:text-8xl font-black mb-6 leading-[0.95] md:leading-[0.9] tracking-tight">
                    Digital <br />
                    <span className="relative inline-block">
                        Agency
                        <svg className="absolute w-full h-3 md:h-4 -bottom-1 md:-bottom-2 left-0 text-yellow-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="5,5" />
                        </svg>
                    </span>
                </h1>
                
                <p className="text-base md:text-xl text-indigo-200 mb-8 md:mb-10 max-w-lg leading-relaxed">
                    Full-service growth support that modern brands need. We turn traffic into revenue and clicks into customers.
                </p>

                {/* Changed: Button layout stacks on very small screens, side-by-side on mobile */}
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <Link href="/creative/pricing" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-yellow-400 text-black rounded-full font-black text-base md:text-lg hover:bg-yellow-300 hover:scale-105 transition-all shadow-[0_0_20px_rgba(250,204,21,0.4)] flex items-center justify-center gap-2 cursor-pointer">
                            View Packages <ArrowRight size={18} />
                        </button>
                    </Link>
                    
                    {/* Status Badge */}
                    <div className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                        <div className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </div>
                        <span className="text-xs md:text-sm font-bold text-white tracking-wide">Accepting New Projects</span>
                    </div>
                </div>
            </div>

            {/* RIGHT: Bento Grid (Hidden on Mobile, Visible Desktop) */}
            <div className="relative h-[600px] hidden lg:block">
                {/* ... (Kept Desktop Image Code Same) ... */}
                {/* Image 1 */}
                <div className="absolute top-10 left-10 w-64 h-80 bg-gray-900 rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl transform rotate-[-3deg] hover:rotate-0 transition-all duration-500 z-10 group">
                    <img src="/creative/seogrow.png" alt="SEO" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                    <div className="absolute inset-0 bg-indigo-900/40 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                    <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                        <span className="text-3xl font-bold">SEO</span>
                        <span className="text-sm text-gray-300">Ranking #1</span>
                    </div>
                </div>
                {/* Image 2 */}
                <div className="absolute top-0 right-10 w-48 h-48 bg-gray-800 rounded-[2rem] rounded-tr-[4rem] border border-white/10 overflow-hidden shadow-2xl z-0">
                    <div className="w-full h-full bg-gradient-to-br from-pink-500 to-purple-600 opacity-80"></div>
                </div>
                {/* Dedication Card */}
                <div className="absolute bottom-20 right-0 w-60 h-64 bg-white text-black rounded-[2rem] p-6 flex flex-col justify-between shadow-2xl transform rotate-[3deg] hover:rotate-0 transition-all z-20">
                     <div className="flex justify-between items-start">
                        <Sparkles className="text-yellow-500" size={32} />
                        <span className="text-4xl font-black">100%</span>
                     </div>
                     <div>
                        <p className="font-bold text-lg leading-tight">Project Dedication</p>
                        <div className="flex gap-2 items-center mt-2 text-sm text-gray-600 font-medium">
                            <CheckCircle size={16} className="text-green-600" />
                            On-Time Delivery
                        </div>
                     </div>
                </div>
                {/* Stamp */}
                <div className="absolute bottom-10 left-20 w-32 h-32 rounded-full border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center animate-spin-slow">
                    <Globe size={24} className="text-white" />
                </div>
            </div>
        </div>
      </section>

      {/* 2. "WE ARE CREATIVE" SECTION */}
      {/* Changed: Stacked columns for mobile */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-[#0B0B1A] relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                    We Are A Creative <br />
                    <span className="text-indigo-400">Growth Agency</span>
                </h2>
                <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
                    ScriptCode Creative started with a vision: to solve business problems with beautiful design and aggressive marketing. We don't just build websites; we build revenue engines.
                </p>
                <Link href="/creative/contact">
                    <button className="w-full md:w-auto px-8 py-4 border border-yellow-400 text-yellow-400 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition-all cursor-pointer">
                        Let's Talk Business
                    </button>
                </Link>
            </div>

            {/* Right Grid (4-part grid) */}
            {/* Changed: Adjusted gap and sizing for mobile */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-gray-800 h-40 md:h-48 rounded-2xl md:rounded-[2rem] p-4 md:p-6 hover:bg-indigo-900 transition-colors group cursor-pointer">
                    <Layout className="text-white mb-3 md:mb-4 group-hover:scale-110 transition-transform" size={28} />
                    <h3 className="text-base md:text-xl font-bold">UI/UX Design</h3>
                </div>
                <div className="bg-gray-800 h-40 md:h-48 rounded-2xl md:rounded-[2rem] md:rounded-tr-[4rem] p-4 md:p-6 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
                    <TrendingUp className="mb-3 md:mb-4" size={28} />
                    <h3 className="text-base md:text-xl font-bold">SEO Growth</h3>
                </div>
                <div className="bg-white text-black h-40 md:h-48 rounded-2xl md:rounded-[2rem] md:rounded-bl-[4rem] p-4 md:p-6">
                    <Zap className="mb-3 md:mb-4 text-yellow-500" size={28} fill="currentColor" />
                    <h3 className="text-base md:text-xl font-bold">Social Ads</h3>
                </div>
                <div className="bg-gray-800 h-40 md:h-48 rounded-2xl md:rounded-[2rem] p-4 md:p-6 hover:bg-indigo-900 transition-colors group cursor-pointer">
                    <Globe className="text-white mb-3 md:mb-4 group-hover:scale-110 transition-transform" size={28} />
                    <h3 className="text-base md:text-xl font-bold">Web Dev</h3>
                </div>
            </div>
        </div>
      </section>

      {/* 3. CTA BANNER */}
      {/* Changed: Reduced padding for mobile */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-yellow-400 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10 text-black">
                <h2 className="text-3xl md:text-6xl font-black mb-4 md:mb-6">Ready to Scale?</h2>
                <p className="text-lg md:text-xl font-medium mb-8 md:mb-10 max-w-xl mx-auto opacity-80">
                    Get a dedicated team working on your brand today. No delays.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/creative/pricing" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-10 py-4 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform shadow-xl cursor-pointer">
                            View Pricing
                        </button>
                    </Link>
                    <Link href="/creative/contact" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-black text-black rounded-full font-bold hover:bg-black hover:text-white transition-colors cursor-pointer">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
            {/* Abstract Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white mix-blend-overlay opacity-30 blur-[80px] rounded-full pointer-events-none"></div>
        </div>
      </section>

    </div>
  );
}