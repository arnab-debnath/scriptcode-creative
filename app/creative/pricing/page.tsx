"use client";

import React, { useState, useEffect } from 'react';
import { 
  Check, X, Star, Search, Layers, Server, 
  ArrowRight, Sparkles, Globe, ShoppingCart, Smartphone, RefreshCw, Layout, Zap 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { vh } from 'framer-motion';

// ==========================================
// DATA: ONE-TIME PROJECTS (Development)
// ==========================================

const wordpressPricing = [
  {
    name: "Starter / Landing",
    price: "₹4,999",
    idealFor: "Doctors, Profiles, Landing Pages",
    badge: "Limited Offer", // Special Red Badge
    features: [
      "1-3 Page Website",
      "Mobile Responsive Design",
      "WhatsApp Chat Button",
      "Contact Form",
      "1 Week Support",
      "Delivery: 3-4 Days"
    ],
    missing: ["SEO Optimization", "Logo Design", "Admin Panel Training"],
    color: "blue",
    popular: false
  },
  {
    name: "Business Standard",
    price: "₹9,999",
    idealFor: "Small Businesses & Startups",
    badge: "Best Seller",
    features: [
      "5-7 Page Premium Design",
      "SEO Friendly Structure",
      "Blog/News Section",
      "Social Media Integration",
      "1 Month Free Support",
      "Delivery: 7 Days"
    ],
    missing: ["E-commerce Functionality"],
    color: "purple",
    popular: true
  },
  {
    name: "Enterprise / E-com",
    price: "₹19,999",
    idealFor: "Large Agencies & Shops",
    badge: null,
    features: [
      "10-15 Pages or E-commerce",
      "Payment Gateway Setup",
      "Speed Optimization (90+ Score)",
      "Google Map & Analytics",
      "Admin Training Session",
      "3 Months Free Support"
    ],
    missing: [],
    color: "orange",
    popular: false
  }
];

const shopifyPricing = [
  {
    name: "Store Launch",
    price: "₹14,999",
    idealFor: "Dropshippers & New Brands",
    badge: null,
    features: [
      "Premium Theme Setup",
      "Upload 15 Products",
      "Payment Gateway (COD/Online)",
      "Legal Pages Setup",
      "Delivery: 5-7 Days"
    ],
    missing: ["Custom Branding", "Email Automation"],
    color: "green",
    popular: false
  },
  {
    name: "Brand Growth",
    price: "₹24,999",
    idealFor: "Clothing & D2C Brands",
    badge: "Most Popular",
    features: [
      "Custom Homepage Design",
      "Upload 50 Products",
      "Review & Upsell Apps",
      "Insta/FB Shop Integration",
      "Speed Optimization",
      "Delivery: 10 Days"
    ],
    missing: [],
    color: "orange",
    popular: true
  },
  {
    name: "Scale / Custom",
    price: "₹44,999",
    idealFor: "High Volume Stores",
    badge: null,
    features: [
      "Custom Coded Sections",
      "Email Marketing Setup (Klaviyo)",
      "Advanced SEO Setup",
      "Migration from other platforms",
      "1 Month Marketing Consultation",
      "Priority Support"
    ],
    missing: [],
    color: "purple",
    popular: false
  }
];

const socialMediaPricing = [
  {
    name: "Starter Presence",
    price: "₹9,999/mo",
    idealFor: "Keeping the page active",
    badge: null,
    features: [
      "12 High-Quality Graphics",
      "Content Calendar",
      "Page Management (FB/Insta)",
      "Festival Wishes",
      "Monthly Reporting"
    ],
    missing: ["Reels Creation", "Ad Management"],
    color: "pink",
    popular: false
  },
  {
    name: "Growth Mode",
    price: "₹19,999/mo",
    idealFor: "Getting Leads & Followers",
    badge: "Recommended",
    features: [
      "12 Graphics + 4 Reels",
      "Story Management (Daily)",
      "Hashtag Strategy",
      "Comment Engagement",
      "Ad Campaign Setup",
      "Competitor Analysis"
    ],
    missing: [],
    color: "red",
    popular: true
  },
  {
    name: "Viral Dominance",
    price: "₹34,999/mo",
    idealFor: "Aggressive Brand Building",
    badge: null,
    features: [
      "15 Graphics + 8 Reels",
      "Influencer Outreach",
      "Dedicated Account Manager",
      "Advanced Ad Optimization",
      "Community Building",
      "Weekly Strategy Calls"
    ],
    missing: [],
    color: "purple",
    popular: false
  }
];

// ==========================================
// DATA: MONTHLY SUBSCRIPTIONS (Maintenance)
// ==========================================
const websitePlans = [
  {
    name: "Basic Maintenance",
    price: { inr: "₹2,999", usd: "$39" },
    period: "/month",
    description: "Essential health checks.",
    features: ["Uptime Monitoring", "Broken Link Fixes", "2 Minor Updates/mo", "Monthly Backup", "Email Support"],
    highlight: false
  },
  {
    name: "Standard Care",
    price: { inr: "₹5,999", usd: "$79" },
    period: "/month",
    description: "Perfect for growing brands.",
    features: ["Everything in Basic", "5 Content Updates/mo", "Security Patching", "Plugin Updates", "Priority Support"],
    highlight: true
  },
  {
    name: "Advanced Care",
    price: { inr: "₹9,999", usd: "$129" },
    period: "/month",
    description: "For high-traffic sites.",
    features: ["Everything in Standard", "Unlimited Minor Updates", "Speed Optimization", "Database Tuning", "Emergency Fixes"],
    highlight: false
  }
];

const seoPlans = [
  {
    name: "Starter SEO",
    price: { inr: "₹4,999", usd: "$69" },
    period: "/month",
    description: "Local city ranking.",
    features: ["10 Keywords Tracked", "Google My Business", "On-Page Fixes", "Monthly Report"],
    highlight: false
  },
  {
    name: "Growth SEO",
    price: { inr: "₹9,999", usd: "$149" },
    period: "/month",
    description: "National reach.",
    features: ["25 Keywords Tracked", "Competitor Analysis", "Technical SEO Audits", "Content Optimization", "Detailed Reporting"],
    highlight: true
  },
  {
    name: "Pro Dominance",
    price: { inr: "₹17,999", usd: "$249" },
    period: "/month",
    description: "Market takeover.",
    features: ["50 Keywords Tracked", "Backlink Strategy", "Speed Optimization", "CRO Suggestions", "24/7 Priority Support"],
    highlight: false
  }
];

const bundlePlans = [
  {
    name: "Starter Bundle",
    price: { inr: "₹7,999", usd: "$99" },
    period: "/month",
    description: "Web Care + Basic SEO.",
    features: ["Basic Web Maintenance", "Starter SEO Plan", "Unified Reporting", "Save ~₹1,000/mo"],
    highlight: false
  },
  {
    name: "Growth Bundle",
    price: { inr: "₹14,999", usd: "$199" },
    period: "/month",
    description: "Standard Care + Growth SEO.",
    features: ["Standard Web Care", "Growth SEO Plan", "Priority Support", "Save ~₹1,000/mo"],
    highlight: true
  },
  {
    name: "Pro Bundle",
    price: { inr: "₹24,999", usd: "$349" },
    period: "/month",
    description: "Total digital management.",
    features: ["Advanced Web Care", "Pro SEO Plan", "Dedicated Manager", "Save ~₹3,000/mo"],
    highlight: false
  }
];

export default function CreativePricing() {
  const [pricingMode, setPricingMode] = useState<'project' | 'retainer'>('project');
  const [projectCategory, setProjectCategory] = useState<'web' | 'store' | 'social'>('web');
  const [retainerCategory, setRetainerCategory] = useState<'website' | 'seo' | 'bundle'>('website');
  const [currency, setCurrency] = useState<'INR' | 'USD'>('USD');

  useEffect(() => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timeZone.includes("Kolkata") || timeZone.includes("Calcutta") || timeZone.includes("India")) {
        setCurrency('INR');
    }
  }, []);

  const getProjectData = () => {
    if (projectCategory === 'web') return wordpressPricing;
    if (projectCategory === 'store') return shopifyPricing;
    return socialMediaPricing;
  };

  const getRetainerData = () => {
    if (retainerCategory === 'seo') return seoPlans;
    if (retainerCategory === 'bundle') return bundlePlans;
    return websitePlans;
  };

  return (
    <div className="bg-[#050511] text-white min-h-screen pt-28 md:pt-32 pb-20 px-4 md:px-6 font-sans selection:bg-purple-500 selection:text-white">
      
      {/* 1. HEADER & MAIN TOGGLE */}
      <div className="text-center mb-12 max-w-4xl mx-auto">
         <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold mb-6 uppercase tracking-widest">
            <Image 
                src="/images/scshortlogo.png" 
                alt="ScriptCode Mark" 
                width={16}
                height={16}
                className=" object-contain brightness-0 invert" 
            /> Transparent Pricing
         </div>
         <h1 className="text-4xl md:text-6xl font-black mb-6">
            Choose Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Growth Plan.
            </span>
         </h1>

         {/* --- MAIN SWITCHER (Optimized for Mobile) --- */}
        <div className="flex justify-center mb-10 px-2">
          <div className="bg-white/5 p-1 rounded-2xl md:rounded-full inline-flex relative w-full max-w-[350px] md:w-auto border border-white/10">
            
            {/* Animated Background Slider */}
            <div 
              className={`absolute top-1 bottom-1 transition-all duration-300 ease-in-out bg-white rounded-xl md:rounded-full ${
                pricingMode === 'project' 
                  ? 'left-1 w-[calc(50%-4px)]' 
                  : 'left-[calc(50%+2px)] w-[calc(50%-4px)]'
              }`}
            ></div>

            {/* Project Button */}
            <button 
              onClick={() => setPricingMode('project')}
              className={`flex-1 md:flex-none px-4 md:px-8 py-3 rounded-xl md:rounded-full text-xs md:text-base font-black transition-colors flex items-center justify-center gap-2 relative z-10 cursor-pointer ${
                pricingMode === 'project' ? 'text-black' : 'text-gray-500 hover:text-white'
              }`}
            >
              <Layout size={14} className="md:w-4 md:h-4" /> 
              <span className="whitespace-nowrap uppercase tracking-tighter md:tracking-normal">One-Time</span>
            </button>

            {/* Monthly Button */}
            <button 
              onClick={() => setPricingMode('retainer')}
              className={`flex-1 md:flex-none px-4 md:px-8 py-3 rounded-xl md:rounded-full text-xs md:text-base font-black transition-colors flex items-center justify-center gap-2 relative z-10 cursor-pointer ${
                pricingMode === 'retainer' ? 'text-black' : 'text-gray-500 hover:text-white'
              }`}
            >
              <RefreshCw size={14} className="md:w-4 md:h-4" /> 
              <span className="whitespace-nowrap uppercase tracking-tighter md:tracking-normal">Monthly</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. SUB-CATEGORY TABS */}
      <div className="max-w-xl mx-auto mb-12 overflow-x-auto">
        <div className="flex justify-center gap-2 min-w-max px-4">
            {pricingMode === 'project' ? (
                <>
                    <button onClick={() => setProjectCategory('web')} className={`px-5 py-2.5 rounded-full text-sm font-bold border transition-all flex items-center gap-2 cursor-pointer ${projectCategory === 'web' ? 'bg-blue-600 border-blue-500 text-white' : 'border-white/10 text-gray-400 hover:bg-white/5'}`}><Globe size={16}/> WordPress</button>
                    <button onClick={() => setProjectCategory('store')} className={`px-5 py-2.5 rounded-full text-sm font-bold border transition-all flex items-center gap-2 cursor-pointer ${projectCategory === 'store' ? 'bg-green-600 border-green-500 text-white' : 'border-white/10 text-gray-400 hover:bg-white/5'}`}><ShoppingCart size={16}/> Shopify</button>
                    <button onClick={() => setProjectCategory('social')} className={`px-5 py-2.5 rounded-full text-sm font-bold border transition-all flex items-center gap-2 cursor-pointer ${projectCategory === 'social' ? 'bg-pink-600 border-pink-500 text-white' : 'border-white/10 text-gray-400 hover:bg-white/5'}`}><Smartphone size={16}/> Social Media</button>
                </>
            ) : (
                <>
                    <button onClick={() => setRetainerCategory('website')} className={`px-5 py-2.5 rounded-full text-sm font-bold border transition-all flex items-center gap-2 cursor-pointer ${retainerCategory === 'website' ? 'bg-purple-600 border-purple-500 text-white' : 'border-white/10 text-gray-400 hover:bg-white/5'}`}><Server size={16}/> Maintenance</button>
                    <button onClick={() => setRetainerCategory('seo')} className={`px-5 py-2.5 rounded-full text-sm font-bold border transition-all flex items-center gap-2 v ${retainerCategory === 'seo' ? 'bg-indigo-600 border-indigo-500 text-white' : 'border-white/10 text-gray-400 hover:bg-white/5'}`}><Search size={16}/> SEO</button>
                    <button onClick={() => setRetainerCategory('bundle')} className={`px-5 py-2.5 rounded-full text-sm font-bold border transition-all flex items-center gap-2 cursor-pointer ${retainerCategory === 'bundle' ? 'bg-orange-600 border-orange-500 text-white' : 'border-white/10 text-gray-400 hover:bg-white/5'}`}><Layers size={16}/> Bundle</button>
                </>
            )}
        </div>
      </div>

      {/* 3. PRICING CARDS DISPLAY */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        
        {(pricingMode === 'project' ? getProjectData() : getRetainerData()).map((plan: any, idx) => (
            <div key={idx} className={`relative p-8 rounded-[2.5rem] border transition-all duration-300 flex flex-col ${
                (plan.popular || plan.highlight || plan.badge)
                ? 'bg-[#0B0B1A] border-yellow-400/50 shadow-[0_0_30px_rgba(250,204,21,0.1)] z-10 scale-100 md:scale-105' 
                : 'bg-[#0B0B1A]/50 border-white/10 hover:border-white/20'
            }`}>
                
                {/* --- CUSTOM BADGE (For Offers/Popular) --- */}
                {/* Special styling for "Limited Offer" (Red) vs others (Yellow) */}
                {(plan.badge || plan.popular || plan.highlight) && (
                    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1 shadow-lg whitespace-nowrap ${
                        plan.badge === "Limited Offer" 
                        ? "bg-red-500 text-white animate-pulse" 
                        : "bg-yellow-400 text-black"
                    }`}>
                        {(plan.badge === "Limited Offer") ? <Zap size={12} fill="currentColor" /> : <Star size={12} fill="currentColor" />}
                        {plan.badge || "Best Value"}
                    </div>
                )}

                <div className="mb-4">
                    <h3 className="text-xl font-bold mb-1 text-white">{plan.name}</h3>
                    <p className="text-gray-400 text-xs md:text-sm">{plan.idealFor || plan.description}</p>
                </div>

                <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl md:text-4xl font-black text-white">
                        {typeof plan.price === 'object' 
                            ? (currency === 'INR' ? plan.price.inr : plan.price.usd) 
                            : plan.price
                        }
                    </span>
                    {plan.period && <span className="text-gray-500 text-sm">{plan.period}</span>}
                </div>

                <Link href={`/creative/contact?package=${encodeURIComponent(plan.name)}`} className="mb-8 w-full">
                    <button className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        (plan.badge || plan.popular || plan.highlight)
                        ? 'bg-white text-black hover:bg-gray-200' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}>
                        {plan.badge === "Limited Offer" ? "Claim Offer" : "Choose Plan"} <ArrowRight size={16} />
                    </button>
                </Link>

                {/* Features List */}
                <div className="space-y-4 flex-grow">
                    {plan.features.map((feature: string, fIdx: number) => (
                        <div key={fIdx} className="flex items-start gap-3 text-sm text-gray-300">
                            <Check size={16} className={`mt-0.5 min-w-[16px] ${
                                (plan.popular || plan.badge) ? 'text-yellow-400' : 'text-gray-500'
                            }`} />
                            <span className="leading-snug">{feature}</span>
                        </div>
                    ))}
                    
                    {/* Missing Features (Crossed Out) */}
                    {plan.missing && plan.missing.map((missing: string, mIdx: number) => (
                        <div key={mIdx} className="flex items-start gap-3 text-sm text-gray-600 line-through decoration-gray-600">
                            <X size={16} className="mt-0.5 min-w-[16px]" />
                            <span>{missing}</span>
                        </div>
                    ))}
                </div>

            </div>
        ))}
      </div>

    </div>
  );
}