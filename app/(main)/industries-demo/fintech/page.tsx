"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code, CreditCard, ShieldCheck, Terminal, Layers } from 'lucide-react';
import DemoFooterCredit from '@/src/DemoFooterCredit';

export default function NovaTradeLanding() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#635BFF]/30 overflow-hidden text-[#425466]">
  
      {/* 2. HERO SECTION (Stripe-style angled background) */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        {/* The classic angled mesh gradient background */}
        <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden -z-10 bg-[#F6F9FC]">
            <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-gradient-to-br from-[#635BFF]/10 via-[#00D4FF]/10 to-transparent rounded-full blur-3xl transform rotate-12"></div>
            <div className="absolute bottom-[20%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-tr from-[#FF7A59]/5 to-transparent rounded-full blur-3xl"></div>
            {/* Diagonal Slash line */}
            <div className="absolute bottom-0 left-0 w-full h-[150px] bg-white transform -skew-y-3 origin-bottom-left z-0"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Column: Copy */}
            <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#635BFF]/10 text-[#635BFF] text-sm font-bold mb-6">
                    <Code size={16} /> API Version 2.4 Now Live
                </div>
                <h1 className="text-5xl lg:text-[80px] font-black text-[#0A2540] mb-8 leading-[1.1] tracking-tight">
                    Financial infrastructure to grow your revenue.
                </h1>
                <p className="text-lg md:text-xl mb-10 leading-relaxed font-medium">
                    Join millions of companies of all sizes—from startups to Fortune 500s—who use NovaTrade's software and APIs to accept payments, send payouts, and manage their businesses online.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <button className="px-6 py-3 w-full sm:w-auto rounded-full bg-[#635BFF] text-white font-bold hover:bg-[#5851DE] transition-colors shadow-lg shadow-[#635BFF]/25 flex items-center justify-center gap-2 group">
                        Start now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-6 py-3 w-full sm:w-auto rounded-full bg-transparent text-[#0A2540] font-bold hover:text-[#635BFF] transition-colors flex items-center justify-center gap-2 group">
                        Contact sales <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Right Column: Code/UI Mockup */}
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl bg-[#0A2540] shadow-2xl overflow-hidden border border-gray-800 flex flex-col hidden md:flex">
                {/* Mock Mac Window Header */}
                <div className="h-10 bg-[#1A365D] flex items-center px-4 gap-2 border-b border-gray-700/50">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                {/* Mock Code */}
                <div className="p-6 font-mono text-sm text-emerald-400 leading-relaxed overflow-hidden">
                    <p className="text-gray-400"># Create a secure payment intent</p>
                    <p><span className="text-pink-400">const</span> stripe = require(<span className="text-yellow-300">'novatrade'</span>)(<span className="text-yellow-300">'sk_test_...'</span>);</p>
                    <br/>
                    <p><span className="text-pink-400">const</span> paymentIntent = <span className="text-pink-400">await</span> stripe.paymentIntents.create(&#123;</p>
                    <p className="pl-4">amount: <span className="text-purple-400">2000</span>,</p>
                    <p className="pl-4">currency: <span className="text-yellow-300">'usd'</span>,</p>
                    <p className="pl-4">automatic_payment_methods: &#123;</p>
                    <p className="pl-8">enabled: <span className="text-purple-400">true</span>,</p>
                    <p className="pl-4">&#125;,</p>
                    <p>&#125;);</p>
                    <br/>
                    <p className="text-gray-400"># Expected Response: 200 OK</p>
                    <p className="text-gray-300">&#123; "status": "succeeded", "id": "pi_123..." &#125;</p>
                </div>
            </div>
        </div>
      </section>

      {/* 3. LOGO CLOUD */}
      <section className="py-12 px-6 max-w-7xl mx-auto border-b border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center opacity-50 grayscale contrast-200">
            {/* Using text placeholders since we don't have SVGs, styled to look like logos */}
            <div className="text-2xl font-black text-center tracking-tighter">Amazon</div>
            <div className="text-2xl font-black text-center tracking-widest uppercase">Salesforce</div>
            <div className="text-2xl font-black text-center font-serif italic">Shopify</div>
            <div className="text-2xl font-black text-center tracking-tight">Google</div>
            <div className="text-2xl font-black text-center hidden lg:block tracking-widest">Uber</div>
        </div>
      </section>

      {/* 4. MODULAR FEATURES (Clean, icon-driven grid) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
            <h2 className="text-[#635BFF] font-bold tracking-wide uppercase text-sm mb-3">Unified Platform</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#0A2540] leading-tight mb-6">
                A fully integrated suite of financial products
            </h3>
            <p className="text-lg">
                We bring together everything that’s required to build websites and apps that accept payments and send payouts globally. NovaTrade’s products power payments for online and in-person retailers, subscriptions businesses, software platforms and marketplaces.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
            <div>
                <div className="w-12 h-12 bg-[#F6F9FC] text-[#635BFF] rounded-xl flex items-center justify-center mb-6 border border-gray-100 shadow-sm">
                    <Terminal size={24} />
                </div>
                <h4 className="text-xl font-bold text-[#0A2540] mb-3">Developer-First APIs</h4>
                <p className="text-[#425466] leading-relaxed mb-4">
                    Our API is carefully organized, comprehensively documented, and highly predictable. Build your integration in minutes, not months.
                </p>
                <span className="text-[#635BFF] font-bold hover:text-[#0A2540] transition-colors cursor-pointer flex items-center gap-1">
                    Read the docs <ArrowRight size={16} />
                </span>
            </div>
            
            <div>
                <div className="w-12 h-12 bg-[#F6F9FC] text-[#00D4FF] rounded-xl flex items-center justify-center mb-6 border border-gray-100 shadow-sm">
                    <CreditCard size={24} />
                </div>
                <h4 className="text-xl font-bold text-[#0A2540] mb-3">Global Conversions</h4>
                <p className="text-[#425466] leading-relaxed mb-4">
                    Our intelligent routing engine dynamically optimizes your payment flows to maximize authorization rates and reduce false declines.
                </p>
                <span className="text-[#635BFF] font-bold hover:text-[#0A2540] transition-colors cursor-pointer flex items-center gap-1">
                    See payment methods <ArrowRight size={16} />
                </span>
            </div>

            <div>
                <div className="w-12 h-12 bg-[#F6F9FC] text-[#FF7A59] rounded-xl flex items-center justify-center mb-6 border border-gray-100 shadow-sm">
                    <ShieldCheck size={24} />
                </div>
                <h4 className="text-xl font-bold text-[#0A2540] mb-3">Fraud Protection</h4>
                <p className="text-[#425466] leading-relaxed mb-4">
                    NovaTrade Radar uses machine learning trained on billions of data points to detect and block fraud before it hits your bottom line.
                </p>
                <span className="text-[#635BFF] font-bold hover:text-[#0A2540] transition-colors cursor-pointer flex items-center gap-1">
                    Explore Radar <ArrowRight size={16} />
                </span>
            </div>
        </div>
      </section>
        
    </div>
  );
}