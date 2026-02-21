"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Layers } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="bg-[#F6F9FC] min-h-screen font-sans selection:bg-[#635BFF]/30 text-[#425466]">
      
     

      {/* 2. PRICING HERO */}
      <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-black text-[#0A2540] mb-6 tracking-tight">
          Always know what you pay.
        </h1>
        <p className="text-xl leading-relaxed font-medium max-w-2xl mx-auto">
          Integrated per-transaction pricing with no hidden fees. Start for free, and pay only for what you use as your business scales.
        </p>
      </section>

      {/* 3. PRICING CARDS */}
      <section className="px-6 max-w-5xl mx-auto pb-32">
        <div className="grid md:grid-cols-2 gap-8 relative z-10">
            
            {/* Pay As You Go Card */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col h-full">
                <h2 className="text-2xl font-bold text-[#0A2540] mb-2">Integrated</h2>
                <p className="text-[#425466] mb-8">A complete payments platform engineered for growth.</p>
                
                <div className="mb-8 border-b border-gray-100 pb-8">
                    <div className="flex items-baseline gap-1 text-[#0A2540]">
                        <span className="text-5xl font-black tracking-tighter">2.9%</span>
                        <span className="text-2xl font-bold">+ 30¢</span>
                    </div>
                    <p className="text-sm text-[#425466] mt-2">per successful card charge</p>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                    {[
                        "135+ currencies and payment methods",
                        "Local acquiring in 45+ countries",
                        "3D Secure authentication",
                        "Card network routing optimization",
                        "Real-time reporting dashboards"
                    ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <Check size={20} className="text-[#00D4FF] shrink-0" />
                            <span className="text-[#425466] font-medium">{feature}</span>
                        </li>
                    ))}
                </ul>

                <button className="w-full py-4 rounded-full bg-[#635BFF] text-white font-bold hover:bg-[#5851DE] transition-colors shadow-md mt-auto">
                    Get started
                </button>
            </div>

            {/* Custom/Enterprise Card */}
            <div className="bg-[#0A2540] rounded-2xl p-8 md:p-10 shadow-xl shadow-[#0A2540]/20 flex flex-col h-full relative overflow-hidden">
                {/* Subtle background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#635BFF]/20 blur-3xl rounded-full pointer-events-none"></div>
                
                <h2 className="text-2xl font-bold text-white mb-2 relative z-10">Customized</h2>
                <p className="text-gray-300 mb-8 relative z-10">Design a custom package for your business with volume discounts.</p>
                
                <div className="mb-8 border-b border-gray-700 pb-8 relative z-10">
                    <div className="text-5xl font-black text-white tracking-tighter">
                        Custom
                    </div>
                    <p className="text-sm text-gray-400 mt-2">tailored to your payment volume</p>
                </div>

                <ul className="space-y-4 mb-10 flex-grow relative z-10">
                    {[
                        "Volume discounts on payment processing",
                        "Country-specific rates",
                        "Interchange pricing options",
                        "Dedicated technical account manager",
                        "24/7 priority phone support"
                    ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <Check size={20} className="text-[#00D4FF] shrink-0" />
                            <span className="text-gray-300 font-medium">{feature}</span>
                        </li>
                    ))}
                </ul>

                <button className="w-full py-4 rounded-full bg-white text-[#0A2540] font-bold hover:bg-gray-100 transition-colors shadow-md mt-auto relative z-10 flex items-center justify-center gap-2 group">
                    Contact sales <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

        </div>
      </section>
    </div>
  );
}