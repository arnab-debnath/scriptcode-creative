"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Search, PenTool, Megaphone, ShoppingBag, 
  Video, Globe, ArrowRight, Zap 
} from 'lucide-react';

export default function CreativeServices() {
  const services = [
    {
      title: "SEO & Dominance",
      desc: "We don't just rank you; we help you dominate the search results. Technical SEO, Backlinks, and Content Strategy.",
      icon: Search,
      color: "text-purple-400",
      gradient: "from-purple-500/20 to-blue-500/20"
    },
    {
      title: "Viral Social Media",
      desc: "Short-form video editing (Reels/Shorts) and community management that turns followers into fans.",
      icon: Video,
      color: "text-pink-400",
      gradient: "from-pink-500/20 to-rose-500/20"
    },
    {
      title: "Brand Identity",
      desc: "Logos, typography, and visual languages that make your business look like a Fortune 500 company.",
      icon: PenTool,
      color: "text-yellow-400",
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      title: "Shopify Stores",
      desc: "High-speed, high-converting e-commerce stores designed to sell while you sleep.",
      icon: ShoppingBag,
      color: "text-green-400",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Performance Ads",
      desc: "Facebook & Google Ads with ROAS-focused strategies. We stop the scroll and get the click.",
      icon: Megaphone,
      color: "text-cyan-400",
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "CMS Websites",
      desc: "Beautiful, easy-to-manage websites (WordPress/Webflow) for agencies and portfolios.",
      icon: Globe,
      color: "text-indigo-400",
      gradient: "from-indigo-500/20 to-violet-500/20"
    }
  ];

  return (
    <div className="bg-[#050511] text-white min-h-screen font-sans selection:bg-yellow-400 selection:text-black">
      
      {/* 1. HERO HEADER */}
      <section className="pt-40 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6">
            Everything You Need <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                To Grow Online.
            </span>
        </h1>
        <p className="text-xl text-indigo-200 max-w-2xl mx-auto mb-12">
            We are a full-service creative powerhouse. You bring the product; we bring the noise.
        </p>
      </section>

      {/* 2. BENTO GRID SERVICES */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
                <div key={i} className={`relative p-8 rounded-[2.5rem] bg-[#0B0B1A] border border-white/5 overflow-hidden group hover:-translate-y-2 transition-transform duration-300`}>
                    
                    {/* Hover Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                        <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${s.color}`}>
                            <s.icon size={28} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            {s.desc}
                        </p>
                        <Link href="/creative/pricing" className="inline-flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all">
                            See Packages <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* 3. PROCESS SECTION */}
      <section className="py-24 bg-[#0B0B1A] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-black mb-6">The <span className="text-yellow-400">Growth</span> Protocol</h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        We don't guess. We follow a proven 3-step system to take your brand from unknown to unforgettable.
                    </p>
                    <Link href="/creative/contact">
                        <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors cursor-pointer">
                            Start Your Project
                        </button>
                    </Link>
                </div>

                <div className="md:w-1/2 space-y-6">
                    {[
                        { step: "01", title: "Audit & Strategy", text: "We analyze your current gaps and build a roadmap." },
                        { step: "02", title: "Create & Execute", text: "Our design and content teams go to work." },
                        { step: "03", title: "Scale & Optimize", text: "We look at the data and double down on what works." }
                    ].map((item, idx) => (
                        <div key={idx} className="flex gap-6 items-start p-6 rounded-3xl bg-[#050511] border border-white/5">
                            <span className="text-3xl font-black text-white/10">{item.step}</span>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.text}</p>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}