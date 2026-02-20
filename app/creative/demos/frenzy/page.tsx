"use client";

import React, { useState, useEffect } from 'react';
import BackToLab from '../../components/BackToLab';
import Image from 'next/image';
import { 
  ShoppingBag, Zap, Flame, ArrowRight, 
  Instagram, Twitter, Menu, X, Star, Clock
} from 'lucide-react';
import Link from 'next/link';

export default function FrenzyDemo() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white font-sans selection:bg-[#FF5F00] selection:text-white overflow-x-hidden">
      
      {/* 1. URGENCY BAR */}
      <div className="bg-[#FF5F00] text-black py-2 px-6 overflow-hidden whitespace-nowrap border-b border-black">
        <div className="inline-block animate-marquee font-black uppercase tracking-tighter text-sm">
          LTD DROP SOLD OUT IN 4 MINS • NEXT DROP COMING SOON • FREE SHIPPING ON ALL ORDERS OVER ₹2999 • LTD DROP SOLD OUT IN 4 MINS •
        </div>
      </div>

      {/* 2. FRENZY NAVBAR */}
      <nav className={`fixed top-9 w-full z-50 transition-all duration-300 px-6 ${
        scrolled ? 'h-16' : 'h-20'
      }`}>
        <div className={`max-w-7xl mx-auto h-full flex items-center justify-between px-8 rounded-2xl transition-all ${
          scrolled ? 'bg-black/80 backdrop-blur-xl border border-white/10' : 'bg-transparent'
        }`}>
          <div className="text-2xl font-black tracking-tighter italic">
            FRENZY<span className="text-[#FF5F00]">.</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-xs font-black uppercase tracking-widest">
            <a href="#drop" className="hover:text-[#FF5F00] transition-colors">The Drop</a>
            <a href="#collections" className="hover:text-[#FF5F00] transition-colors">Collections</a>
            <a href="#about" className="hover:text-[#FF5F00] transition-colors">Our Story</a>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative group">
              <ShoppingBag size={22} className="group-hover:text-[#FF5F00] transition-colors" />
              <span className="absolute -top-2 -right-2 bg-[#FF5F00] text-black text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
            <Menu size={24} className="md:hidden" />
          </div>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20">

        <BackToLab />
        {/* Background Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden -z-10">
          <h2 className="text-[25vw] font-black text-white/[0.03] leading-none select-none">FRENZY</h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#FF5F00]/10 text-[#FF5F00] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-[#FF5F00]/20">
              <Flame size={12} /> Winter '26 Collection
            </div>
            <h1 className="text-6xl md:text-[7rem] font-black leading-[0.85] tracking-tighter uppercase mb-8">
              Chaos <br />
              <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '2px white' }}>Is The</span> <br />
              <span className="text-[#FF5F00]">New Norm.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-md mb-10 font-medium">
              Frenzy Streetwear represents the raw energy of the urban underground. Born in the streets, engineered for the bold.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#FF5F00] text-black px-10 py-5 rounded-sm font-black uppercase tracking-tighter text-lg hover:bg-white transition-all flex items-center justify-center gap-3 group">
                Shop The Drop <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          {/* Featured Product Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#FF5F00]/20 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative aspect-[4/5] bg-zinc-900 border border-white/5 overflow-hidden">
               {/* UPDATED: Next.js Image component with priority */}
               <Image 
                 src="/services/creative-project/frenzy/hoodie.jpg" 
                 alt="Streetwear Hero" 
                 fill
                 priority
                 sizes="(max-width: 768px) 100vw, 50vw"
                 className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
               />
               <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/60 backdrop-blur-md border border-white/10">
                 <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[#FF5F00] font-black text-xs uppercase mb-1">Coming Soon</p>
                      <h3 className="text-2xl font-black italic tracking-tighter uppercase leading-none">Vortex Oversized Hoodie</h3>
                    </div>
                    <p className="text-2xl font-black">₹4,499</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOMO STATS / FEATURES */}
      <section className="py-20 border-y border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Limited Edition", value: "300 Pcs", icon: <Zap className="text-[#FF5F00]" size={20}/> },
            { label: "Avg. Delivery", value: "48 Hours", icon: <Clock className="text-[#FF5F00]" size={20}/> },
            { label: "GSM Quality", value: "450 Heavy", icon: <Star className="text-[#FF5F00]" size={20}/> },
            { label: "Community", value: "10k+ Strong", icon: <Instagram className="text-[#FF5F00]" size={20}/> },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="mb-4">{item.icon}</div>
              <p className="text-2xl font-black mb-1">{item.value}</p>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. COLLECTION PREVIEW */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Newest <span className="text-[#FF5F00]">Arrivals</span></h2>
            </div>
            <Link href="#" className="text-sm font-black uppercase border-b-2 border-[#FF5F00] pb-1 hover:text-[#FF5F00] transition-colors">View All</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Stealth Cargo", price: "₹3,999", img: "/services/creative-project/frenzy/cargo.webp" },
              { name: "Frenzy Signature Tee", price: "₹1,999", img: "/services/creative-project/frenzy/tees.jpg" },
              { name: "Urban Tech Jacket", price: "₹6,499", img: "/services/creative-project/frenzy/jacket.jpg" },
            ].map((p, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden bg-zinc-900 mb-6 relative">
                  {/* UPDATED: Next.js Image component for grid items */}
                  <Image 
                    src={p.img} 
                    alt={p.name} 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" 
                  />
                  <button className="absolute bottom-0 left-0 right-0 py-4 bg-[#FF5F00] text-black font-black uppercase text-sm translate-y-full group-hover:translate-y-0 transition-transform">Add to Cart</button>
                </div>
                <div className="flex justify-between items-start">
                  <h4 className="text-xl font-bold uppercase tracking-tighter italic">{p.name}</h4>
                  <p className="font-black text-[#FF5F00]">{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SOCIAL PROOF / CTA */}
      <section className="py-24 bg-[#FF5F00] text-black overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black opacity-5 select-none pointer-events-none">FZY</div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">Join The Frenzy <br /> Movement.</h2>
          <p className="text-xl font-bold mb-10 max-w-lg mx-auto leading-tight italic">Be the first to know about secret drops, exclusive events, and limited restocks.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              className="px-8 py-5 bg-black text-white rounded-sm font-bold w-full md:w-96 border-none focus:ring-2 focus:ring-white outline-none"
            />
            <button className="px-10 py-5 bg-white text-black font-black uppercase hover:bg-black hover:text-white transition-all">Submit</button>
          </div>
        </div>
      </section>

      <footer className="py-20 px-6 border-t border-white/5 text-center">
         <div className="text-4xl font-black italic tracking-tighter mb-8">FRENZY<span className="text-[#FF5F00]">.</span></div>
         <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.5em] mb-8">Crafted by ScriptCode Creative</p>
         <div className="flex justify-center gap-8">
            <Instagram size={24} className="hover:text-[#FF5F00] cursor-pointer transition-colors" />
            <Twitter size={24} className="hover:text-[#FF5F00] cursor-pointer transition-colors" />
         </div>
      </footer>

      {/* Custom Keyframes for Marquee */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}