"use client";

import React from 'react';
import Link from 'next/link';
import { Star, PlayCircle, Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function EducationLanding() {
  return (
    <div className="pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="bg-white py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="flex-1">
                <h1 className="text-4xl md:text-5xl lg:text-[56px] font-serif font-bold text-[#1C1D1F] mb-4 leading-tight">
                    Skills that drive you forward.
                </h1>
                <p className="text-lg text-gray-700 mb-8 max-w-xl">
                    Technology and the world of work change fast—with us, you’re faster. Get the skills to achieve your goals and stay competitive.
                </p>
                <div className="flex items-center gap-4">
                    <button className="px-6 py-3 bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors text-base">
                        Plan your career path
                    </button>
                </div>
            </div>
            
            {/* Hero Image Mockup (Clean, Light) */}
            <div className="flex-1 w-full relative h-[300px] md:h-[450px] bg-[#F7F9FA] border border-gray-200 flex items-center justify-center p-8 overflow-hidden shadow-sm">
                <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply opacity-20"></div>
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply opacity-20"></div>
                
                <div className="bg-white p-6 shadow-xl border border-gray-100 max-w-sm w-full relative z-10 transform rotate-2">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center mb-4 rounded">
                        <PlayCircle size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-[#1C1D1F]">Web Development Bootcamp 2026</h3>
                    <p className="text-sm text-gray-600 mb-4">By Dr. Angela Yu • 65.5 total hours</p>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-600 w-3/4 h-full"></div>
                    </div>
                    <p className="text-xs font-bold text-gray-500 mt-2 text-right">75% Complete</p>
                </div>
            </div>
        </div>
      </section>

      {/* 2. SOCIAL PROOF */}
      <section className="bg-gray-50 py-12 px-6 border-y border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
            <p className="text-lg font-bold text-gray-500 mb-6">
                Trusted by over 15,000 companies and millions of learners around the world
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
                <div className="text-2xl font-black text-[#1C1D1F]">Volkswagen</div>
                <div className="text-2xl font-bold text-[#1C1D1F] font-serif">Samsung</div>
                <div className="text-2xl font-black text-[#1C1D1F] tracking-tighter">Cisco</div>
                <div className="text-2xl font-bold text-[#1C1D1F] tracking-widest uppercase">Vimeo</div>
                <div className="text-2xl font-bold text-[#1C1D1F]">P&G</div>
            </div>
        </div>
      </section>

      {/* 3. BROAD SELECTION OF COURSES */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1C1D1F] mb-2 font-serif">A broad selection of courses</h2>
        <p className="text-lg text-gray-700 mb-8">Choose from over 210,000 online video courses with new additions published every month.</p>

        {/* Mock Tabs */}
        <div className="flex gap-6 border-b border-gray-200 mb-8 overflow-x-auto pb-2 font-bold text-gray-500">
            <button className="text-[#1C1D1F] border-b-2 border-[#1C1D1F] pb-2 whitespace-nowrap">Web Development</button>
            <button className="hover:text-[#1C1D1F] transition-colors whitespace-nowrap">Data Science</button>
            <button className="hover:text-[#1C1D1F] transition-colors whitespace-nowrap">Leadership</button>
            <button className="hover:text-[#1C1D1F] transition-colors whitespace-nowrap">IT Certifications</button>
        </div>

        {/* COURSE GRID (Udemy Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            
            {/* Course Card 1 */}
            <Link href="/industries-demo/education/catalog" className="group cursor-pointer flex flex-col">
                <div className="h-40 w-full bg-gray-200 border border-gray-200 mb-3 overflow-hidden relative">
                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
                    {/* Placeholder for real image */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-white flex items-center justify-center text-blue-800 font-bold">React & Next.js</div>
                </div>
                <h3 className="font-bold text-[#1C1D1F] leading-tight mb-1 group-hover:text-blue-800 line-clamp-2">
                    The Complete Next.js Developer Course (w/ App Router)
                </h3>
                <p className="text-xs text-gray-500 mb-1">Academind by Maximilian Schwarzmüller</p>
                <div className="flex items-center gap-1 mb-1">
                    <span className="text-sm font-bold text-[#b4690e]">4.8</span>
                    <div className="flex text-[#b4690e]"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
                    <span className="text-xs text-gray-500">(34,210)</span>
                </div>
                <div className="font-bold text-[#1C1D1F] flex items-center gap-2">
                    ₹3,499 <span className="text-sm font-normal text-gray-500 line-through">₹4,999</span>
                </div>
                <div className="mt-2 inline-block bg-[#eceb98] text-[#3d3c0a] text-xs font-bold px-2 py-1">Bestseller</div>
            </Link>

            {/* Course Card 2 */}
            <Link href="/industries-demo/education/catalog" className="group cursor-pointer flex flex-col">
                <div className="h-40 w-full bg-gray-200 border border-gray-200 mb-3 overflow-hidden relative">
                    <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-transparent transition-colors"></div>
                    <div className="w-full h-full bg-gradient-to-br from-purple-100 to-white flex items-center justify-center text-purple-800 font-bold">Python Bootcamp</div>
                </div>
                <h3 className="font-bold text-[#1C1D1F] leading-tight mb-1 group-hover:text-blue-800 line-clamp-2">
                    100 Days of Code: The Complete Python Pro Bootcamp
                </h3>
                <p className="text-xs text-gray-500 mb-1">Dr. Angela Yu</p>
                <div className="flex items-center gap-1 mb-1">
                    <span className="text-sm font-bold text-[#b4690e]">4.7</span>
                    <div className="flex text-[#b4690e]"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
                    <span className="text-xs text-gray-500">(189,400)</span>
                </div>
                <div className="font-bold text-[#1C1D1F]">
                    ₹3,499
                </div>
                <div className="mt-2 inline-block bg-[#eceb98] text-[#3d3c0a] text-xs font-bold px-2 py-1">Bestseller</div>
            </Link>

            {/* Course Card 3 */}
            <Link href="/industries-demo/education/catalog" className="group cursor-pointer flex flex-col">
                <div className="h-40 w-full bg-gray-200 border border-gray-200 mb-3 overflow-hidden relative">
                    <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors"></div>
                    <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-white flex items-center justify-center text-emerald-800 font-bold">AWS Certified</div>
                </div>
                <h3 className="font-bold text-[#1C1D1F] leading-tight mb-1 group-hover:text-blue-800 line-clamp-2">
                    Ultimate AWS Certified Solutions Architect Associate
                </h3>
                <p className="text-xs text-gray-500 mb-1">Stephane Maarek | AWS Certified Cloud</p>
                <div className="flex items-center gap-1 mb-1">
                    <span className="text-sm font-bold text-[#b4690e]">4.7</span>
                    <div className="flex text-[#b4690e]"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
                    <span className="text-xs text-gray-500">(98,210)</span>
                </div>
                <div className="font-bold text-[#1C1D1F]">
                    ₹2,999
                </div>
            </Link>

            {/* Course Card 4 */}
            <Link href="/industries-demo/education/catalog" className="group cursor-pointer flex flex-col hidden sm:flex">
                <div className="h-40 w-full bg-gray-200 border border-gray-200 mb-3 overflow-hidden relative">
                    <div className="absolute inset-0 bg-rose-900/10 group-hover:bg-transparent transition-colors"></div>
                    <div className="w-full h-full bg-gradient-to-br from-rose-100 to-white flex items-center justify-center text-rose-800 font-bold">UI/UX Design</div>
                </div>
                <h3 className="font-bold text-[#1C1D1F] leading-tight mb-1 group-hover:text-blue-800 line-clamp-2">
                    Complete Web & Mobile Designer in 2026: UI/UX, Figma
                </h3>
                <p className="text-xs text-gray-500 mb-1">Andrei Neagoie, Daniel Schifano</p>
                <div className="flex items-center gap-1 mb-1">
                    <span className="text-sm font-bold text-[#b4690e]">4.6</span>
                    <div className="flex text-[#b4690e]"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
                    <span className="text-xs text-gray-500">(12,400)</span>
                </div>
                <div className="font-bold text-[#1C1D1F]">
                    ₹3,499
                </div>
            </Link>
        </div>

        <button className="border border-gray-900 px-4 py-2 font-bold text-[#1C1D1F] hover:bg-gray-50 transition-colors">
            Explore Web Development
        </button>
      </section>

    </div>
  );
}