"use client";

import React, { useState } from 'react';
import { 
  Check, X, Star, Smartphone, Globe, Zap, 
  ShoppingCart, Search, PenTool, Layout 
} from 'lucide-react';
import Link from 'next/link';

// ==========================================
// 1. DATA: THE PRICING MENU (Indian Market Focused)
// ==========================================

const wordpressPricing = [
  {
    name: "Starter / Landing",
    price: "₹4,999",
    idealFor: "Doctors, Profiles, Landing Pages",
    badge: "Limited Offer",
    features: ["1-3 Page Website", "Mobile Responsive", "WhatsApp Chat Button", "1 Week Support", "Delivery: 3-4 Days"],
    missing: ["SEO Optimization", "Logo Design"],
    popular: false
  },
  {
    name: "Business Standard",
    price: "₹9,999",
    idealFor: "Small Businesses & Startups",
    badge: "Best Seller",
    features: ["5-7 Page Premium Design", "SEO Friendly Structure", "Blog/News Section", "1 Month Free Support", "Delivery: 7 Days"],
    missing: ["E-commerce Functionality"],
    popular: true
  },
  {
    name: "Enterprise / E-com",
    price: "₹19,999",
    idealFor: "Large Agencies & Shops",
    badge: null,
    features: ["10-15 Pages or E-com", "Payment Gateway Setup", "Speed Optimization", "Admin Training", "3 Months Support"],
    missing: [],
    popular: false
  }
];

const shopifyPricing = [
  {
    name: "Store Launch",
    price: "₹14,999",
    idealFor: "Dropshippers, New Brands",
    features: [
      "Premium Theme Setup",
      "Upload up to 20 Products",
      "Payment Gateway (Razorpay/COD)",
      "Basic Apps (Review, WhatsApp)",
      "Delivery: 7 Days"
    ],
    missing: ["Custom Coding", "Logo Design"],
    color: "green"
  },
  {
    name: "Brand Scale",
    price: "₹29,999",
    idealFor: "D2C Brands, Clothing Labels",
    popular: true,
    features: [
      "Custom Homepage Design",
      "Upload up to 50 Products",
      "Advanced Apps (Upsell, Email)",
      "Speed Optimization",
      "Insta/FB Shop Setup",
      "1 Month Marketing Guide",
      "Delivery: 14 Days"
    ],
    missing: [],
    color: "orange"
  }
];

const socialMediaPricing = [
  {
    name: "Visibility",
    price: "₹9,999/mo",
    idealFor: "Keeping the page active",
    features: [
      "12 Graphics / Month",
      "Page Management (FB/Insta)",
      "Festival Posts",
      "Basic Caption Writing",
      "Monthly Reporting"
    ],
    missing: ["Reels Creation", "Ad Management", "Daily Engagement"], // <--- Added this
    color: "pink"
  },
  {
    name: "Viral Growth",
    price: "₹19,999/mo",
    idealFor: "Getting leads & followers",
    popular: true,
    features: [
      "12 Graphics + 4 Reels / Month",
      "Story Management (Daily)",
      "Hashtag Strategy",
      "Comment Engagement",
      "Ad Campaign Setup (Ads extra)",
      "Competitor Analysis"
    ],
    missing: [], // <--- Added this (empty array is fine)
    color: "red"
  }
];

export default function PricingBrochure() {
  const [category, setCategory] = useState<'web' | 'store' | 'social'>('web');

  return (
    <div className="bg-[#050511] text-white min-h-screen pt-24 md:pt-32 pb-20 px-4 font-sans selection:bg-purple-500">
      
      {/* 1. HEADER SECTION - Matching your screenshots */}
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-[10px] font-bold mb-6 uppercase tracking-widest">
           <Zap size={12} className="text-purple-400" /> Transparent Pricing
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
            Choose Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Growth Plan.
            </span>
        </h1>
      </div>

      {/* 2. CATEGORY TABS - Fixed Position, No Scroll */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 max-w-4xl mx-auto">
        <button 
            onClick={() => setCategory('web')}
            className={`flex-1 md:flex-none min-w-[140px] px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition-all border ${category === 'web' ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20' : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'}`}
        >
            <Globe size={18} /> WordPress
        </button>
        <button 
            onClick={() => setCategory('store')}
            className={`flex-1 md:flex-none min-w-[140px] px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition-all border ${category === 'store' ? 'bg-zinc-800 border-white/10 text-white shadow-lg' : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'}`}
        >
            <ShoppingCart size={18} /> Shopify
        </button>
        <button 
            onClick={() => setCategory('social')}
            className={`flex-1 md:flex-none min-w-[140px] px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition-all border ${category === 'social' ? 'bg-pink-600 border-pink-500 text-white' : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'}`}
        >
            <Smartphone size={18} /> Social Media
        </button>
      </div>

      {/* 3. PRICING GRID - 3 Columns on Large, 1 on Mobile */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {wordpressPricing.map((plan, idx) => (
            <div key={idx} className={`relative bg-[#0B0B1A] border rounded-[2.5rem] p-8 md:p-10 flex flex-col transition-all duration-500 ${plan.popular ? 'border-yellow-400 shadow-[0_0_40px_rgba(250,204,21,0.1)] scale-100 lg:scale-105 z-10' : 'border-white/10'}`}>
                
                {/* DYNAMIC BADGE STYLING */}
                {plan.badge && (
                    <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-1 shadow-2xl whitespace-nowrap ${
                        plan.badge === "Limited Offer" ? "bg-red-500 text-white animate-pulse" : "bg-yellow-400 text-black"
                    }`}>
                        {plan.badge === "Limited Offer" ? <Zap size={12} fill="currentColor" /> : <Star size={12} fill="currentColor" />}
                        {plan.badge}
                    </div>
                )}

                <div className="mb-8">
                    <h3 className="text-2xl font-black mb-2 uppercase italic tracking-tighter">{plan.name}</h3>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{plan.idealFor}</p>
                </div>

                <div className="text-5xl font-black mb-10 text-white tracking-tighter">
                    {plan.price}
                </div>

                <div className="flex-grow space-y-4 mb-12">
                    {plan.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3 text-sm text-gray-300">
                            <Check size={18} className="text-green-500 mt-0.5 shrink-0" />
                            <span>{feature}</span>
                        </div>
                    ))}
                    {plan.missing.map((missing, mIdx) => (
                        <div key={mIdx} className="flex items-start gap-3 text-sm text-gray-700 line-through decoration-gray-800">
                            <X size={18} className="mt-0.5 shrink-0" />
                            <span>{missing}</span>
                        </div>
                    ))}
                </div>

                <Link 
                  href={`/creative/contact?service=${encodeURIComponent(plan.name)}&budget=${encodeURIComponent(plan.price)}`} 
                  className="mt-auto"
                >
                  <button className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${
                    plan.popular 
                    ? 'bg-yellow-400 text-black hover:bg-white shadow-lg shadow-yellow-400/20' 
                    : 'bg-white text-black hover:bg-purple-500 hover:text-white'
                  }`}>
                    Choose Plan
                  </button>
                </Link>
            </div>
        ))}
      </div>

      {/* 4. ADD-ONS - Structured Responsive Grid */}
      <div className="max-w-5xl mx-auto mt-24 pt-12 border-t border-white/10">
        <h3 className="text-2xl font-black text-center mb-10 uppercase tracking-widest italic">Optional Add-Ons</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
                { item: "Logo Design", cost: "₹2,500" },
                { item: "Visiting Card", cost: "₹999" },
                { item: "Domain Name", cost: "₹999/yr" },
                { item: "Premium Hosting", cost: "₹3,500/yr" },
            ].map((addon, i) => (
                <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-purple-500/50 transition-all group">
                    <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1 group-hover:text-purple-400 transition-colors">{addon.item}</div>
                    <div className="text-2xl font-black text-yellow-400 tracking-tighter">{addon.cost}</div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}