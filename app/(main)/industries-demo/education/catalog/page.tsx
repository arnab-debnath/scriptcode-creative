"use client";

import React from 'react';
import { Filter, Star, PlayCircle } from 'lucide-react';
import Link from 'next/link';

export default function CatalogPage() {
  return (
    <div className="pt-8 pb-24 px-6 max-w-7xl mx-auto font-sans text-[#1C1D1F]">
      
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4">Web Development Courses</h1>
        <div className="flex items-center gap-4 text-sm mb-6 border-b border-gray-200 pb-4">
            <span className="font-bold flex items-center gap-1"><Star size={16} fill="#b4690e" className="text-[#b4690e]" /> 4.6</span>
            <span className="text-gray-600">3,450,120 learners</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* SIDEBAR FILTERS (Clean, Light Mode) */}
        <aside className="w-full lg:w-64 shrink-0">
            <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-2">
                <div className="flex items-center gap-2 font-bold text-lg">
                    <Filter size={20} /> Filter
                </div>
                <button className="text-sm text-blue-600 font-bold hover:text-blue-800">Clear</button>
            </div>
            
            <div className="space-y-6">
                {/* Topic Filter */}
                <div>
                    <h3 className="font-bold text-lg mb-3">Topic</h3>
                    <div className="space-y-2">
                        {['Web Development', 'JavaScript', 'React JS', 'CSS', 'Next.js'].map((topic, i) => (
                            <label key={i} className="flex items-center gap-3 text-[#1C1D1F] cursor-pointer text-sm">
                                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900" defaultChecked={i === 0 || i === 4} />
                                {topic}
                                <span className="text-gray-500 ml-auto text-xs">(1,{9 - i}00)</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Level Filter */}
                <div className="pt-4 border-t border-gray-200">
                    <h3 className="font-bold text-lg mb-3">Level</h3>
                    <div className="space-y-2">
                        {['All Levels', 'Beginner', 'Intermediate', 'Expert'].map((level, i) => (
                            <label key={i} className="flex items-center gap-3 text-[#1C1D1F] cursor-pointer text-sm">
                                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
                                {level}
                                <span className="text-gray-500 ml-auto text-xs">({8 - i}40)</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </aside>

        {/* COURSE LIST (Horizontal Layout for Catalog) */}
        <div className="flex-1 space-y-4">
            
            {/* List Item 1 */}
            <Link href="/industries-demo/education/catalog" className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 hover:bg-gray-50 transition-colors group cursor-pointer relative">
                <div className="w-full sm:w-64 h-36 bg-gray-200 shrink-0 relative overflow-hidden flex items-center justify-center text-blue-800 font-bold bg-gradient-to-br from-blue-100 to-white">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                    Next.js Enterprise
                </div>
                <div className="flex-1">
                    <h3 className="font-bold text-[#1C1D1F] text-lg leading-tight mb-1 group-hover:text-blue-800">
                        The Complete Next.js Developer Course (w/ App Router)
                    </h3>
                    <p className="text-sm text-gray-700 mb-1 line-clamp-2">Learn Next.js from the ground up and build full-stack ReactJS apps. Includes RSC, tRPC, and Prisma.</p>
                    <p className="text-xs text-gray-500 mb-2">Academind by Maximilian Schwarzmüller</p>
                    <div className="flex items-center gap-1 mb-1">
                        <span className="text-sm font-bold text-[#b4690e]">4.8</span>
                        <div className="flex text-[#b4690e]"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
                        <span className="text-xs text-gray-500">(34,210)</span>
                    </div>
                    <div className="text-xs text-gray-500 flex items-center gap-2">
                        38 total hours • 341 lectures • All Levels
                    </div>
                </div>
                <div className="text-right flex flex-col items-end shrink-0 pt-1">
                    <div className="font-bold text-[#1C1D1F] text-lg">₹3,499</div>
                    <div className="text-sm text-gray-500 line-through">₹4,999</div>
                    <div className="mt-2 inline-block bg-[#eceb98] text-[#3d3c0a] text-xs font-bold px-2 py-1">Bestseller</div>
                </div>
            </Link>

            {/* List Item 2 */}
            <Link href="/industries-demo/education/catalog" className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 hover:bg-gray-50 transition-colors group cursor-pointer">
                <div className="w-full sm:w-64 h-36 bg-gray-200 shrink-0 relative overflow-hidden flex items-center justify-center text-purple-800 font-bold bg-gradient-to-br from-purple-100 to-white">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                    Full-Stack React
                </div>
                <div className="flex-1">
                    <h3 className="font-bold text-[#1C1D1F] text-lg leading-tight mb-1 group-hover:text-blue-800">
                        React - The Complete Guide (incl Hooks, React Router, Redux)
                    </h3>
                    <p className="text-sm text-gray-700 mb-1 line-clamp-2">Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!</p>
                    <p className="text-xs text-gray-500 mb-2">Academind by Maximilian Schwarzmüller</p>
                    <div className="flex items-center gap-1 mb-1">
                        <span className="text-sm font-bold text-[#b4690e]">4.6</span>
                        <div className="flex text-[#b4690e]"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
                        <span className="text-xs text-gray-500">(198,210)</span>
                    </div>
                    <div className="text-xs text-gray-500 flex items-center gap-2">
                        50.5 total hours • 610 lectures • All Levels
                    </div>
                </div>
                <div className="text-right flex flex-col items-end shrink-0 pt-1">
                    <div className="font-bold text-[#1C1D1F] text-lg">₹3,499</div>
                    <div className="text-sm text-gray-500 line-through">₹4,999</div>
                </div>
            </Link>

            {/* List Item 3 */}
            <Link href="/industries-demo/education/catalog" className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 hover:bg-gray-50 transition-colors group cursor-pointer">
                <div className="w-full sm:w-64 h-36 bg-gray-200 shrink-0 relative overflow-hidden flex items-center justify-center text-emerald-800 font-bold bg-gradient-to-br from-emerald-100 to-white">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                    MERN Stack Master
                </div>
                <div className="flex-1">
                    <h3 className="font-bold text-[#1C1D1F] text-lg leading-tight mb-1 group-hover:text-blue-800">
                        MERN Stack Front To Back: Full Stack React, Redux & Node.js
                    </h3>
                    <p className="text-sm text-gray-700 mb-1 line-clamp-2">Build and deploy a social network with Node.js, Express, React, Redux & MongoDB. Fully updated!</p>
                    <p className="text-xs text-gray-500 mb-2">Brad Traversy</p>
                    <div className="flex items-center gap-1 mb-1">
                        <span className="text-sm font-bold text-[#b4690e]">4.7</span>
                        <div className="flex text-[#b4690e]"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
                        <span className="text-xs text-gray-500">(45,900)</span>
                    </div>
                    <div className="text-xs text-gray-500 flex items-center gap-2">
                        12 total hours • 73 lectures • Intermediate
                    </div>
                </div>
                <div className="text-right flex flex-col items-end shrink-0 pt-1">
                    <div className="font-bold text-[#1C1D1F] text-lg">₹2,999</div>
                </div>
            </Link>

        </div>
      </div>
    </div>
  );
}