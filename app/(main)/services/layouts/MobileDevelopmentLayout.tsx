"use client";

import React, { useState, useEffect } from 'react';
import { Smartphone, Fingerprint, MapPin, WifiOff, BellRing, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import EstimateCTA from '../../estimate/EstimateCTA';

export default function MobileDevelopmentLayout() {
  // 1. Updated Array with your 5 specific JPG mockups
  const mockups = [
    "/services/mobiledev/novapay-mockup.png",   // Fintech
    "/services/mobiledev/aetherai-mockup.png",  // AI Assistant
    "/services/mobiledev/medinova-mockup.png",  // Healthcare
    "/services/mobiledev/velora-mockup.png",    // E-commerce
    "/services/mobiledev/metricly-mockup.png"   // Analytics
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play effect (changes slide every 3.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === mockups.length - 1 ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(timer);
  }, [mockups.length]);

  return (
    <div className="bg-[#010604] min-h-screen text-white pt-32 font-sans relative overflow-hidden selection:bg-emerald-500/30">
      
      {/* Background Ambience */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <Link href="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 mb-12 transition-colors font-bold uppercase tracking-widest text-xs">
          <ArrowLeft size={16} /> Back to Services
        </Link>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-32">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6">
              <Smartphone size={16} /> <span className="text-xs font-bold uppercase tracking-widest">iOS & Android</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
              Native Feel. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                Global Scale.
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Reach your customers directly in their pockets. We engineer buttery-smooth mobile experiences using React Native, ensuring 60fps performance and native gestures across FinTech, Healthcare, and E-commerce.
            </p>
            
            {/* Store Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 opacity-70">
                
                {/* App Store Badge */}
                <div className="px-6 py-3 rounded-xl border border-white/20 flex items-center gap-3 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:opacity-100 transition-all cursor-pointer">
                    {/* Apple Logo SVG */}
                    <svg viewBox="0 0 384 512" className="w-7 h-7 fill-current text-white">
                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                    </svg>
                    <div className="text-left">
                        <div className="text-[10px] uppercase font-bold text-gray-400 leading-none mb-1">Download on the</div>
                        <div className="text-sm font-bold leading-none text-white">App Store</div>
                    </div>
                </div>

                {/* Google Play Badge */}
                <div className="px-6 py-3 rounded-xl border border-white/20 flex items-center gap-3 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:opacity-100 transition-all cursor-pointer">
                    {/* Google Play Logo SVG */}
                    <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current text-white">
                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                    </svg>
                    <div className="text-left">
                        <div className="text-[10px] uppercase font-bold text-gray-400 leading-none mb-1">GET IT ON</div>
                        <div className="text-sm font-bold leading-none text-white">Google Play</div>
                    </div>
                </div>

            </div>
          </div>

          {/* THE 5-IMAGE CAROUSEL */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative group perspective-1000">
             
             {/* Glow behind the phone (Removed the hover flash so it stays clean) */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-[500px] bg-emerald-500/20 blur-3xl rounded-full transition-all duration-700"></div>
             
             {/* Carousel Wrapper - Perfect Size Preserved */}
             <div className="relative z-10 w-full max-w-sm aspect-[1/1.2] md:aspect-[1/1.4] rounded-[2.5rem] overflow-hidden transform rotate-y-[-10deg] rotate-x-[5deg] group-hover:rotate-y-0 group-hover:rotate-x-0 group-hover:scale-105 transition-all duration-700 ease-out">
                 
                 {/* Map through the 5 images */}
                 {mockups.map((src, index) => (
                    <img 
                      key={index}
                      src={src} 
                      alt={`App Mockup ${index + 1}`} 
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                    />
                 ))}

                 {/* GREEN OVERLAY HAS BEEN DELETED COMPLETELY */}
                 
                 {/* Navigation Dots (5 dots) */}
                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {mockups.map((_, index) => (
                        <button 
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentSlide ? 'w-6 bg-emerald-500' : 'bg-black/30 hover:bg-black/60'
                            }`}
                        />
                    ))}
                 </div>
             </div>

          </div>
        </div>

        {/* Mobile Hardware Features Grid */}
        <div className="mb-24">
            <h2 className="text-3xl font-bold mb-10 text-center">Hardware-Level Integrations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { icon: Fingerprint, title: "Biometric Auth", desc: "FaceID and Fingerprint login for banking-grade security and fast access." },
                { icon: MapPin, title: "Geolocation", desc: "Real-time GPS tracking and background location services." },
                { icon: WifiOff, title: "Offline Mode", desc: "Local database syncing so the app works without internet." },
                { icon: BellRing, title: "Push Notifications", desc: "Targeted rich notifications to drive daily active user retention." }
            ].map((feat, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.05] hover:border-emerald-500/30 transition-all duration-300">
                    <feat.icon className="text-emerald-400 mb-6" size={32} />
                    <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
                </div>
            ))}
            </div>
        </div>

      </div>

      <EstimateCTA themeColor="emerald" title="Estimate Your Mobile App" />
    </div>
  );
}