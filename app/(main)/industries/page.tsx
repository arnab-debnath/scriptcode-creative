// src/app/industries/page.tsx
import React from 'react';
import { industries } from "../../../src/data/industries"; 
import IndustryCard from "../../../src/component/home/IndustriesCard"; 
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Industry-Specific Software Solutions',
  description: 'Discover how ScriptCode Innovation engineers specialized software, applications, and digital platforms for Healthcare, FinTech, Education, Real Estate, and more.',
  keywords: ['industry software solutions', 'healthcare app development', 'fintech software engineering', 'enterprise software development', 'B2B software solutions'],
};

export default function IndustriesPage() {
  
  // 1. SPLIT DATA AFTER THE 4TH ITEM
  const topIndustries = industries.slice(0, 4); // Items 0, 1, 2, 3
  const bottomIndustries = industries.slice(4); // Item 4 onwards

  return (
    <div className="bg-[#010506] text-white min-h-screen">
      
      <section className="py-20 px-6 max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
            <h1 className="relative z-10 text-5xl md:text-7xl font-black mb-6">
            Software Solutions<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-700">
                for Business
            </span>
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Transforming industries with scalable, secure, and high-performance digital solutions.
            </p>
        </div>

        {/* 2. TOP GRID (First 4 Items) */}
        {/* Use grid-cols-2 so it looks like a 2x2 box before the banner */}
        <div className='md:px-20'>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
            {topIndustries.map((industry) => (
              <IndustryCard 
                  key={industry.id} 
                  name={industry.title}
                  description={industry.shortDescription} 
                  image={industry.image}
                  tags={industry.tags}
                  relatedSite={industry.relatedSite}
              />
            ))}
        </div>

        {/* 3. THE MIDDLE "CTA" BANNER */}
        <div className="w-full relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-4 py-4 md:p-16 text-center mb-16 shadow-2xl shadow-purple-900/20">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-100 mix-blend-overlay"></div>
            
            <div className="relative z-10 max-w-3xl px-2 mx-auto">
                <h2 className="text-2xl md:text-4xl font-black text-white mb-6">
                    Ready to Build for Your Industry?
                </h2>
                <p className="text-white/95 text-sm md:text-[1rem]  leading-relaxed mb-8 font-normal">
                    From healthcare to fintech and beyond, we design scalable digital systems tailored to your business needs.
                </p>
                <Link href="/estimate">
                    <button className="bg-white text-indigo-800 px-4 md:px-8 py-3 md:py-5 rounded-2xl font-bold text-m hover:bg-gray-100 transition-transform hover:scale-105 shadow-lg cursor-pointer">
                        Start Your Project
                    </button>
                </Link>
            </div>
        </div>

        {/* 4. BOTTOM GRID (Remaining Items) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {bottomIndustries.map((industry) => (
              <IndustryCard 
                  key={industry.id} 
                  name={industry.title}
                  description={industry.shortDescription} 
                  image={industry.image}
                  tags={industry.tags}
                  relatedSite={industry.relatedSite}
              />
            ))}
        </div>
        </div>

      </section>
    </div>
  );
}