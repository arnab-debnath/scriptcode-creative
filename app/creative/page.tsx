"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion'; 
import { 
  ArrowRight, Sparkles, Star, Globe, 
  Zap, Layout, TrendingUp, CheckCircle, 
  Target, MousePointerClick, ArrowUpRight, ChevronDown
} from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function CreativeHome() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
        question: "How long until we see actual ROI?",
        answer: "Paid ads (Meta/Google) can generate returns within the first 14-30 days. For organic SEO and content scaling, we ask for a 90-day runway to establish dominance and rewrite the search rankings in your favor."
    },
    {
        question: "Do you work with early-stage startups?",
        answer: "Yes, but we are selective. We partner with brands that have a proven product-market fit and are ready to pour fuel on the fire. If you are still figuring out what you sell, we aren't the right fit yet."
    },
    {
        question: "Are there long-term lock-in contracts?",
        answer: "No. We believe in earning your business every single month. While we recommend a 3-month commitment for data to mature, our retainers operate on a flexible, results-driven basis."
    }
  ];

  return (
    <div className="bg-[#030305] text-white min-h-screen font-sans selection:bg-amber-400 selection:text-black overflow-hidden">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: scroll-left 25s linear infinite;
            display: flex;
            width: max-content;
            will-change: transform; 
        }
        .text-stroke {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.25);
            color: transparent;
        }
        .text-stroke:hover {
            -webkit-text-stroke: 1px #fbbf24;
            color: #fbbf24;
            text-shadow: 0 0 20px rgba(251, 191, 36, 0.4);
        }
      `}} />

      {/* 1. HERO SECTION */}
      {/* Adjusted padding for mobile (pt-24 instead of pt-32) */}
      <section className="relative pt-24 md:pt-32 pb-16 px-4 md:px-6 min-h-[90vh] flex items-center">
        
        <div 
          className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[800px] h-[300px] md:h-[800px] rounded-full pointer-events-none z-0"
          style={{ background: 'radial-gradient(circle, rgba(120,53,15,0.15) 0%, rgba(0,0,0,0) 70%)' }}
        ></div>
        <div 
          className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full pointer-events-none z-0"
          style={{ background: 'radial-gradient(circle, rgba(124,45,18,0.1) 0%, rgba(0,0,0,0) 70%)' }}
        ></div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
            
            <motion.div className="text-left lg:col-span-7" variants={staggerContainer} initial="hidden" animate="visible">
                <motion.div variants={fadeUp} className="inline-block mb-6 md:mb-8">
                    <span className="px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-white/10 bg-white/5 text-amber-400 text-[10px] sm:text-xs md:text-sm font-bold flex items-center gap-2 backdrop-blur-md shadow-[0_0_30px_rgba(251,191,36,0.15)]">
                        <Star size={14} fill="currentColor" /> Elite Digital Growth
                    </span>
                </motion.div>

                {/* FLUID TEXT: Drop base size to text-5xl for mobile */}
                <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-black mb-6 md:mb-8 leading-[0.85] tracking-tighter uppercase text-white">
                    Design.<br />
                    Market.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Dominate.</span>
                </motion.h1>
                
                {/* FLUID TEXT: Drop base size to text-base for mobile */}
                <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl xl:text-2xl text-gray-400 mb-8 md:mb-10 max-w-xl leading-relaxed font-medium">
                    We don't just run ads. We engineer aggressive growth systems that turn traffic into disproportionate revenue.
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-stretch sm:items-center w-full sm:w-auto">
                    <Link href="/creative/pricing" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-6 py-4 md:px-8 md:py-5 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full font-black text-base md:text-lg hover:scale-105 transition-all shadow-[0_0_40px_rgba(251,191,36,0.3)] flex items-center justify-center gap-2 cursor-pointer">
                            Start Scaling <ArrowRight size={18} />
                        </button>
                    </Link>
                    
                    <div className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-3 px-5 py-3 md:px-6 md:py-4 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
                        <div className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                        </div>
                        <span className="text-xs md:text-sm font-bold text-gray-300 tracking-widest uppercase">Accepting Clients</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* HERO VISUALS (Hidden on mobile anyway, so untouched) */}
            <motion.div 
              className="relative h-[600px] hidden lg:block lg:col-span-5"
              initial={{ opacity: 0, scale: 0.95, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
                <div className="absolute top-12 left-0 w-72 h-80 bg-[#0A0A14] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-500 z-10 group flex flex-col justify-between p-8">
                    <div className="flex justify-between items-start">
                        <div className="w-14 h-14 bg-amber-400/10 rounded-full flex items-center justify-center text-amber-400">
                            <TrendingUp size={28} />
                        </div>
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Growth Targets</span>
                    </div>
                    <div>
                        <h4 className="text-6xl font-black text-white mb-2">Max.</h4>
                        <p className="text-gray-400 text-sm font-medium">We design systems built entirely around conversion.</p>
                    </div>
                </div>
                
                <div className="absolute bottom-12 right-0 w-64 h-64 bg-gradient-to-br from-amber-400 to-orange-500 text-black rounded-[2rem] p-8 flex flex-col justify-between shadow-[0_0_50px_rgba(251,191,36,0.25)] transform rotate-3 hover:rotate-0 transition-all z-20">
                     <div className="flex justify-between items-start">
                        <Sparkles size={36} />
                        <span className="text-5xl font-black">100%</span>
                     </div>
                     <div>
                        <p className="font-black text-2xl leading-tight mb-3 uppercase tracking-tight">Pure Dedication</p>
                        <div className="flex gap-2 items-center text-sm font-bold bg-black/10 px-4 py-2 rounded-lg w-fit">
                            <CheckCircle size={16} /> Data-Driven
                        </div>
                     </div>
                </div>
            </motion.div>
        </div>
      </section>

      {/* 1.5 Infinite Marquee */}
      {/* Reduced text size for mobile from 5xl to 3xl */}
      <section className="py-6 md:py-8 border-y border-white/10 bg-black overflow-hidden relative flex items-center">
          <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
          
          <div className="animate-marquee items-center">
              {[...Array(4)].map((_, i) => (
                  <React.Fragment key={i}>
                      <span className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-stroke transition-all duration-300 mx-4 md:mx-12 cursor-default">Shopify Partners</span>
                      <Star className="text-amber-400 shrink-0 w-4 h-4 md:w-6 md:h-6" />
                      <span className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-stroke transition-all duration-300 mx-4 md:mx-12 cursor-default">Meta Ads</span>
                      <Star className="text-amber-400 shrink-0 w-4 h-4 md:w-6 md:h-6" />
                      <span className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-stroke transition-all duration-300 mx-4 md:mx-12 cursor-default">Google Premier</span>
                      <Star className="text-amber-400 shrink-0 w-4 h-4 md:w-6 md:h-6" />
                      <span className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-stroke transition-all duration-300 mx-4 md:mx-12 cursor-default">Next.js Experts</span>
                      <Star className="text-amber-400 shrink-0 w-4 h-4 md:w-6 md:h-6" />
                  </React.Fragment>
              ))}
          </div>
      </section>

      {/* 2. THE STICKY SCROLL SECTION */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-black relative border-b border-white/5">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start relative">
            
            <div className="w-full lg:w-1/2 lg:sticky lg:top-32 h-auto lg:h-[80vh] flex flex-col justify-between mb-12 lg:mb-0 z-10">
                <div>
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 text-amber-400 font-mono text-[10px] sm:text-sm uppercase tracking-widest mb-4 md:mb-6">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-400"></div> The Methodology
                    </motion.div>
                    
                    {/* FLUID TEXT: 5xl on mobile prevents horizontal scroll breaking */}
                    <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[9rem] xl:text-[10rem] font-black uppercase tracking-tighter leading-[0.9] md:leading-[0.8] text-white">
                        How It <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-black text-stroke">Works.</span>
                    </motion.h2>
                </div>

                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="w-full max-w-md aspect-video bg-[#0A0A14] border border-white/10 rounded-2xl shadow-2xl mt-12 hidden lg:flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
                    <div className="flex flex-col items-center gap-4 relative z-10 opacity-50">
                        <Target size={48} className="text-amber-400" />
                        <span className="font-mono text-sm tracking-widest text-amber-400">TARGET ACQUIRED</span>
                    </div>
                </motion.div>
            </div>

            <div className="w-full lg:w-1/2 lg:pt-[10vh] pb-[10vh] flex flex-col gap-12 lg:gap-[20vh] relative z-20">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} className="min-h-auto lg:min-h-[40vh]">
                    <span className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-4 md:mb-6 block leading-none opacity-80">/ 01</span>
                    <h3 className="text-2xl md:text-5xl font-black mb-4 md:mb-6 text-white leading-tight uppercase tracking-tight">The Blueprint.</h3>
                    <p className="text-gray-400 text-base md:text-xl leading-relaxed font-medium">
                        We analyze your market, dissect your competitors, and build a bespoke multi-channel strategy. Whether it's SEO, paid social, or email marketing, we map out the exact blueprint to hit your revenue targets.
                    </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} className="min-h-auto lg:min-h-[40vh]">
                    <span className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-4 md:mb-6 block leading-none opacity-80">/ 02</span>
                    <h3 className="text-2xl md:text-5xl font-black mb-4 md:mb-6 text-white leading-tight uppercase tracking-tight">The Creative.</h3>
                    <p className="text-gray-400 text-base md:text-xl leading-relaxed font-medium">
                        Data without design is useless. Our UI/UX team crafts high-converting landing pages, thumb-stopping ad creatives, and brand assets that command authority and build instant trust with your audience.
                    </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} className="min-h-auto lg:min-h-[40vh]">
                    <span className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-4 md:mb-6 block leading-none opacity-80">/ 03</span>
                    <h3 className="text-2xl md:text-5xl font-black mb-4 md:mb-6 text-white leading-tight uppercase tracking-tight">The Scale.</h3>
                    <p className="text-gray-400 text-base md:text-xl leading-relaxed font-medium">
                        Once live, our algorithms and performance marketers take over. We rigorously A/B test, kill losing ads, scale winning campaigns, and provide you with a transparent dashboard showing your exact ROI.
                    </p>
                </motion.div>
            </div>
         </div>
      </section>

      {/* 2.5 THE CONCEPT LAB */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-[#05050A]">
          <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
                  <div>
                    {/* FLUID TEXT: 4xl on mobile */}
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-3 md:mb-4">Concept Lab.</h2>
                    <p className="text-gray-400 text-base md:text-xl font-medium max-w-lg">High-end theoretical builds. We engineer these concepts to showcase our elite standard of design, logic, and conversion strategy.</p>
                  </div>
                  <Link href="/creative/work" className="inline-flex items-center gap-2 text-amber-400 hover:text-white font-bold uppercase tracking-widest text-xs md:text-sm transition-colors border-b border-amber-400 hover:border-white pb-1 group shrink-0 mt-4 md:mt-0">
                      Explore Concept Lab <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  
                  {/* Card 1: Frenzy Streetwear */}
                  <Link href="/creative/demos/frenzy" className="group block focus:outline-none focus:ring-4 focus:ring-amber-500/50 rounded-[2rem] md:rounded-[2.5rem]">
                      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }} className="relative rounded-[2rem] md:rounded-[2.5rem] bg-[#0A0A14] border border-white/5 overflow-hidden h-[400px] md:h-[450px] shadow-2xl">
                          <Image 
                              src="/services/creative-project/frenzystreet.png" 
                              alt="Frenzy Streetwear Concept" 
                              fill
                              sizes="(max-width: 1024px) 100vw, 50vw"
                              className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/70 to-transparent z-10"></div>
                          
                          {/* PADDING FIX: p-6 instead of p-10 on mobile */}
                          <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-20">
                              <div className="flex flex-wrap gap-2 md:gap-3 mb-3 md:mb-4">
                                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-bold uppercase rounded-full tracking-widest">E-Commerce</span>
                                  <span className="bg-white/10 text-white px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-bold uppercase rounded-full backdrop-blur-md border border-white/10 tracking-widest">D2C Concept</span>
                              </div>
                              <h3 className="text-2xl md:text-4xl font-black text-white mb-2 group-hover:text-amber-400 transition-colors">Frenzy Streetwear</h3>
                              <p className="text-gray-300 font-medium flex items-center gap-2 md:gap-3 text-sm md:text-lg flex-wrap">
                                  <span className="text-white font-bold">Conversion Optimized UI</span> <span className="text-amber-500/50 hidden sm:inline">|</span> <span>Advanced Meta Strategy</span>
                              </p>
                          </div>
                          
                          <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                              <ArrowUpRight size={24} className="text-amber-400" />
                          </div>
                      </motion.div>
                  </Link>

                  {/* Card 2: Medicore Health */}
                  <Link href="/creative/demos/medicore" className="group block focus:outline-none focus:ring-4 focus:ring-amber-500/50 rounded-[2rem] md:rounded-[2.5rem]">
                      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }} className="relative rounded-[2rem] md:rounded-[2.5rem] bg-[#0A0A14] border border-white/5 overflow-hidden h-[400px] md:h-[450px] shadow-2xl">
                          <Image 
                              src="/services/creative-project/medicorehealth.png" 
                              alt="Medicore Health Concept" 
                              fill
                              sizes="(max-width: 1024px) 100vw, 50vw"
                              className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/70 to-transparent z-10"></div>
                          
                          <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-20">
                              <div className="flex flex-wrap gap-2 md:gap-3 mb-3 md:mb-4">
                                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-bold uppercase rounded-full tracking-widest">Healthcare</span>
                                  <span className="bg-white/10 text-white px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-bold uppercase rounded-full backdrop-blur-md border border-white/10 tracking-widest">Lead Gen Concept</span>
                              </div>
                              <h3 className="text-2xl md:text-4xl font-black text-white mb-2 group-hover:text-amber-400 transition-colors">Medicore Health</h3>
                              <p className="text-gray-300 font-medium flex items-center gap-2 md:gap-3 text-sm md:text-lg flex-wrap">
                                  <span className="text-white font-bold">High-Fidelity Funnels</span> <span className="text-amber-500/50 hidden sm:inline">|</span> <span>Lead Architecture</span>
                              </p>
                          </div>

                          <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                              <ArrowUpRight size={24} className="text-amber-400" />
                          </div>
                      </motion.div>
                  </Link>

                  {/* Card 3: TechStart Growth */}
                  <Link href="/creative/demos/techstart" className="group block lg:col-span-2 focus:outline-none focus:ring-4 focus:ring-amber-500/50 rounded-[2rem] md:rounded-[2.5rem]">
                      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }} className="relative rounded-[2rem] md:rounded-[2.5rem] bg-[#0A0A14] border border-white/5 overflow-hidden h-[400px] md:h-[450px] shadow-2xl">
                          <Image 
                              src="/services/creative-project/techstart.png" 
                              alt="TechStart Concept" 
                              fill
                              sizes="100vw"
                              className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 object-center" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/70 to-transparent z-10"></div>
                          
                          <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-20">
                              <div className="flex flex-wrap gap-2 md:gap-3 mb-3 md:mb-4">
                                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-bold uppercase rounded-full tracking-widest">B2B SaaS</span>
                                  <span className="bg-white/10 text-white px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-bold uppercase rounded-full backdrop-blur-md border border-white/10 tracking-widest">Pipeline Concept</span>
                              </div>
                              <h3 className="text-2xl md:text-5xl font-black text-white mb-2 group-hover:text-amber-400 transition-colors">TechStart Growth</h3>
                              <p className="text-gray-300 font-medium flex items-center gap-2 md:gap-3 text-sm md:text-lg flex-wrap">
                                  <span className="text-white font-bold">Authority Content Strategy</span> <span className="text-amber-500/50 hidden sm:inline">|</span> <span>LinkedIn Ads Funnel</span>
                              </p>
                          </div>

                          <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                              <ArrowUpRight size={24} className="text-amber-400" />
                          </div>
                      </motion.div>
                  </Link>

              </div>
          </div>
      </section>

      {/* 3. CORE AGENCY PRINCIPLES */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-[#030305] border-t border-white/5">
          <div className="max-w-7xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
              >
                  {/* PADDING FIX: p-6 on mobile, p-10 on desktop */}
                  <div className="bg-[#0A0A14] border border-white/5 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 text-center hover:border-amber-500/30 transition-colors">
                      <h4 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter">100%</h4>
                      <p className="text-amber-400 font-bold tracking-widest uppercase text-xs md:text-sm">In-House Talent</p>
                  </div>
                  <div className="bg-[#0A0A14] border border-white/5 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 text-center hover:border-amber-500/30 transition-colors">
                      <h4 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter">Zero</h4>
                      <p className="text-amber-400 font-bold tracking-widest uppercase text-xs md:text-sm">Hidden Fees</p>
                  </div>
                  <div className="bg-[#0A0A14] border border-white/5 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 text-center hover:border-amber-500/30 transition-colors">
                      <h4 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter">Infinite</h4>
                      <p className="text-amber-400 font-bold tracking-widest uppercase text-xs md:text-sm">Scalability</p>
                  </div>
              </motion.div>
          </div>
      </section>

      {/* 4. CORE SERVICES GRID */}
      <section className="py-20 md:py-24 px-4 md:px-6 bg-[#0A0A14] relative rounded-t-[2.5rem] md:rounded-t-[5rem] mt-[-1.5rem] md:mt-[-2rem] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 md:mb-6 uppercase tracking-tighter">The Arsenal.</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium">Everything you need to scale, under one roof.</p>
            </div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                
                <Link href="/creative/work">
                    <motion.div variants={fadeUp} className="bg-black border border-white/5 h-56 md:h-64 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 hover:border-amber-500/50 transition-colors group cursor-pointer flex flex-col justify-between">
                        <Layout className="text-white group-hover:text-amber-400 transition-colors" size={28} />
                        <div>
                            <h3 className="text-2xl md:text-3xl font-black mb-1 md:mb-2 uppercase tracking-tight">UI/UX</h3>
                            <p className="text-gray-500 text-sm md:text-base font-medium">Websites that convert.</p>
                        </div>
                    </motion.div>
                </Link>

                <motion.div variants={fadeUp} className="bg-gradient-to-br from-amber-400 to-orange-500 text-black h-56 md:h-64 rounded-[1.5rem] md:rounded-[2rem] lg:rounded-tr-[4rem] p-6 md:p-8 flex flex-col justify-between">
                    <TrendingUp size={28} />
                    <div>
                        <h3 className="text-2xl md:text-3xl font-black mb-1 md:mb-2 uppercase tracking-tight">SEO Growth</h3>
                        <p className="text-black/80 text-sm md:text-base font-bold">Dominate Google Search.</p>
                    </div>
                </motion.div>

                <motion.div variants={fadeUp} className="bg-white text-black h-56 md:h-64 rounded-[1.5rem] md:rounded-[2rem] lg:rounded-bl-[4rem] p-6 md:p-8 flex flex-col justify-between">
                    <MousePointerClick className="text-black" size={28} />
                    <div>
                        <h3 className="text-2xl md:text-3xl font-black mb-1 md:mb-2 uppercase tracking-tight">Social Ads</h3>
                        <p className="text-gray-600 text-sm md:text-base font-bold">Meta, TikTok, & Google.</p>
                    </div>
                </motion.div>

                <Link href="/creative/work">
                    <motion.div variants={fadeUp} className="bg-black border border-white/5 h-56 md:h-64 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 hover:border-amber-500/50 transition-colors group cursor-pointer flex flex-col justify-between">
                        <Globe className="text-white group-hover:text-amber-400 transition-colors" size={28} />
                        <div>
                            <h3 className="text-2xl md:text-3xl font-black mb-1 md:mb-2 uppercase tracking-tight">Web Dev</h3>
                            <p className="text-gray-500 text-sm md:text-base font-medium">Shopify & Next.js experts.</p>
                        </div>
                    </motion.div>
                </Link>
            </motion.div>
        </div>
      </section>

      {/* 4.5 Brutalist FAQ */}
      <section className="py-20 md:py-24 px-4 md:px-6 bg-black">
          <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                  <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 md:mb-6 uppercase tracking-tighter">Direct Answers.</h2>
                  <p className="text-gray-400 text-lg md:text-xl font-medium">No fluff, just the facts about how we operate.</p>
              </div>

              <div className="border-t border-white/10">
                  {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-white/10 group">
                          <button 
                              onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                              className="w-full py-6 md:py-8 text-left flex justify-between items-center outline-none focus:outline-none"
                          >
                              {/* TEXT FIX: Dropped to text-xl for mobile */}
                              <h3 className={`text-xl md:text-3xl font-bold uppercase tracking-tight pr-6 md:pr-8 transition-colors ${activeFaq === index ? 'text-amber-400' : 'text-white group-hover:text-gray-300'}`}>
                                  {faq.question}
                              </h3>
                              <ChevronDown size={28} className={`shrink-0 transition-transform duration-300 ${activeFaq === index ? 'rotate-180 text-amber-400' : 'text-gray-600'}`} />
                          </button>
                          
                          <div className={`grid transition-all duration-300 ease-in-out ${activeFaq === index ? 'grid-rows-[1fr] opacity-100 pb-6 md:pb-8' : 'grid-rows-[0fr] opacity-0'}`}>
                              <div className="overflow-hidden">
                                  <p className="text-gray-400 text-base md:text-xl leading-relaxed max-w-3xl">
                                      {faq.answer}
                                  </p>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-[#0A0A14]">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="max-w-6xl mx-auto bg-gradient-to-r from-amber-400 to-orange-500 rounded-[2rem] md:rounded-[3rem] p-8 md:p-24 text-center relative overflow-hidden shadow-[0_0_80px_rgba(251,191,36,0.15)]"
        >
            <div className="relative z-10 text-black">
                <h2 className="text-4xl sm:text-5xl md:text-[6rem] font-black mb-4 md:mb-6 uppercase tracking-tighter leading-[0.9]">Ready to <br/> Scale?</h2>
                <p className="text-base sm:text-xl md:text-2xl font-bold mb-8 md:mb-10 max-w-2xl mx-auto opacity-80">
                    Get a dedicated team working on your brand today. No delays, just aggressive execution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/creative/pricing" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-8 py-4 md:px-12 md:py-6 bg-black text-white rounded-full font-black text-lg md:text-xl hover:scale-105 transition-transform shadow-2xl focus:outline-none focus:ring-4 focus:ring-black/50 cursor-pointer">
                            View Pricing
                        </button>
                    </Link>
                </div>
            </div>
            <div 
              className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 mix-blend-overlay rounded-full pointer-events-none z-0"
              style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)' }}
            ></div>
        </motion.div>
      </section>

    </div>
  );
}