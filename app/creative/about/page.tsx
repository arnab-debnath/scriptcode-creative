"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Rocket, Target, Zap, 
  ArrowRight, Heart, Globe, Code, Server, Layout 
} from 'lucide-react';

export default function CreativeAbout() {
  return (
    <div className="bg-[#050511] text-white min-h-screen pt-32 pb-20 px-6 font-sans selection:bg-pink-500 selection:text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <div className="max-w-5xl mx-auto text-center mb-24 relative">
         {/* Background Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>

         {/* --- CUSTOM BADGE WITH SHORT LOGO --- */}
         <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-300 text-xs font-bold mb-8 uppercase tracking-widest relative z-10">
            {/* The Custom Short Logo */}
            <Image 
                src="/images/scshortlogo.png" 
                alt="ScriptCode Mark" 
                width={20} // Replaces w-5
                height={20} // Replaces h-5
                className="object-contain brightness-0 invert" 
            />
            <span>The New Standard</span>
         </div>
         
         <h1 className="relative z-10 text-4xl md:text-7xl font-black mb-8 leading-tight">
            Engineers First. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500">
                Creators Second.
            </span>
         </h1>
         
         <p className="relative z-10 text-indigo-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            ScriptCode Innovation started as a software engineering firm. Now, we are bringing that same <b>precision, data, and logic</b> to the world of creative marketing.
         </p>
      </div>

      {/* 2. THE "ENGINEERING ADVANTAGE" STRIP */}
      <div className="max-w-6xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
                { label: "Code Quality", value: "100%", icon: <Code size={20} className="text-blue-400" /> },
                { label: "Server Uptime", value: "99.9%", icon: <Server size={20} className="text-purple-400" /> },
                { label: "Design Logic", value: "Data-Led", icon: <Layout size={20} className="text-pink-400" /> },
                { label: "Innovation", value: "AI-First", icon: <Zap size={20} className="text-yellow-400" /> },
            ].map((stat, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-3 md:p-6 rounded-2xl text-center hover:bg-white/10 transition-colors">
                    <div className="flex justify-center mb-2">{stat.icon}</div>
                    <div className="text-2xl md:text-3xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
            ))}
        </div>
      </div>

      {/* 3. OUR PHILOSOPHY (Split Layout) */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center mb-32">
        {/* Left: Text */}
        <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Why Choose a <br />
                <span className="text-purple-400">Tech-First Agency?</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                    Most digital marketing agencies are messy. They use bloated templates, ignore site speed, and guess what works.
                </p>
                <p className="text-white font-medium border-l-4 border-yellow-400 pl-4">
                    We approach marketing like software engineering: Break it down, optimize the code, and test the results.
                </p>
                <p>
                    We might be new to the "Agency" game, but we are veterans in building complex software. When we build a website, it doesn't just look good—it ranks on Google, loads instantly, and converts visitors into customers.
                </p>
            </div>
            
            <div className="mt-8 flex gap-4">
                <Link href="/creative/work">
                    <button className="px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors cursor-pointer">
                        See Our Capabilities
                    </button>
                </Link>
            </div>
        </div>

        {/* Right: Abstract Visual */}
        <div className="relative">
            <div className="aspect-square bg-gradient-to-tr from-purple-600 to-blue-600 rounded-[3rem] rotate-3 opacity-80 blur-2xl absolute inset-0"></div>
            <div className="relative bg-[#0B0B1A] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl">
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                            <Code size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">No Spaghetti Code</h3>
                            <p className="text-sm text-gray-400">We write clean, semantic code that Google loves to rank.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 shrink-0">
                            <Target size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Fresh Perspective</h3>
                            <p className="text-sm text-gray-400">We don't use "old agency tactics." We use modern AI tools and trends.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 shrink-0">
                            <Globe size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Hungry for Results</h3>
                            <p className="text-sm text-gray-400">Since we are growing, every single client matters to us. You aren't just a number.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* 4. OUR PROCESS */}
      <div className="max-w-7xl mx-auto mb-24">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Methodology</h2>
            <p className="text-gray-400">From concept to launch, powered by logic.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
            {[
                { step: "01", title: "Analyze", desc: "We audit your competitors and find gaps in the market." },
                { step: "02", title: "Architect", desc: "We structure the website/campaign for maximum efficiency." },
                { step: "03", title: "Build", desc: "Our engineers code the solution pixel-perfectly." },
                { step: "04", title: "Deploy", desc: "We launch, monitor analytics, and optimize live." },
            ].map((item, idx) => (
                <div key={idx} className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-900/10 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl group-hover:opacity-20 transition-opacity">
                        {item.step}
                    </div>
                    <div className="relative z-10">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-6 flex items-center justify-center font-bold text-sm">
                            {item.step}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* 5. CTA SECTION */}
      <div className="max-w-5xl mx-auto text-center bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 relative overflow-hidden">
         <div className="relative z-10">
            <h2 className="text-2xl md:text-5xl font-black mb-4 md:mb-6 leading-tight">
                Be Our Next Success Story
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-lg mx-auto">
                We are looking for ambitious partners to grow with. Let's build something extraordinary.
            </p>
            <Link href="/creative/contact">
                <button className="w-full md:w-auto md:px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 mx-auto cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    Start Your Project <ArrowRight size={20} />
                </button>
            </Link>
         </div>
      </div>

    </div>
  );
}