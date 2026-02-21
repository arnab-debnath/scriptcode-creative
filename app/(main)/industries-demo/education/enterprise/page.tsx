"use client";

import React from 'react';
import { Target, Users, LayoutDashboard, ArrowRight } from 'lucide-react';

export default function EnterprisePage() {
  return (
    <div className="font-sans text-[#1C1D1F]">
      
      {/* HERO SECTION (Dark contrast block to separate from consumer site) */}
      <section className="bg-[#1C1D1F] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                    Upskill your team. <br/> Outpace the competition.
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                    Provide your employees with unlimited access to the top 20,000+ courses. Track progress, manage licenses, and build custom learning paths.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-6 py-4 bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-colors">
                        Request a demo
                    </button>
                    <button className="px-6 py-4 bg-transparent border border-white text-white font-bold text-lg hover:bg-white/10 transition-colors">
                        Discover plans
                    </button>
                </div>
            </div>
            
            {/* Dashboard Mockup */}
            <div className="bg-white rounded-lg p-6 shadow-2xl text-[#1C1D1F]">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-lg">Admin Insights</h3>
                    <span className="text-sm font-bold text-blue-600 border border-blue-600 px-3 py-1 rounded">Export CSV</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#F7F9FA] p-4 rounded">
                        <div className="text-sm text-gray-600 mb-1">Total Hours Watched</div>
                        <div className="text-3xl font-bold">14,230</div>
                        <div className="text-xs text-green-700 font-bold mt-1">↑ 12% this month</div>
                    </div>
                    <div className="bg-[#F7F9FA] p-4 rounded">
                        <div className="text-sm text-gray-600 mb-1">Active Users</div>
                        <div className="text-3xl font-bold">892</div>
                        <div className="text-xs text-green-700 font-bold mt-1">↑ 5% this month</div>
                    </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-bold text-sm mb-3">Top Trending Skills</h4>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3"><div className="w-full bg-gray-200 h-2 rounded overflow-hidden"><div className="bg-blue-600 w-[85%] h-full"></div></div><span className="text-sm font-bold w-20">Python</span></div>
                        <div className="flex items-center gap-3"><div className="w-full bg-gray-200 h-2 rounded overflow-hidden"><div className="bg-blue-600 w-[65%] h-full"></div></div><span className="text-sm font-bold w-20">React</span></div>
                        <div className="flex items-center gap-3"><div className="w-full bg-gray-200 h-2 rounded overflow-hidden"><div className="bg-blue-600 w-[45%] h-full"></div></div><span className="text-sm font-bold w-20">AWS</span></div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* TRUST LOGOS */}
      <section className="py-12 bg-gray-50 border-b border-gray-200 px-6">
        <div className="max-w-7xl mx-auto">
            <p className="text-center font-bold text-gray-500 mb-8 uppercase tracking-widest text-sm">Trusted by 50% of the Fortune 100</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale">
                <div className="text-2xl font-black text-[#1C1D1F]">Apple</div>
                <div className="text-2xl font-bold text-[#1C1D1F] font-serif">Box</div>
                <div className="text-2xl font-black text-[#1C1D1F] tracking-tighter">Aflac</div>
                <div className="text-2xl font-bold text-[#1C1D1F] tracking-widest uppercase">Kaiser Permanente</div>
            </div>
        </div>
      </section>

      {/* ENTERPRISE FEATURES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">Everything your team needs to succeed</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center md:text-left">
                <div className="w-16 h-16 bg-[#F7F9FA] rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                    <Target size={28} className="text-[#1C1D1F]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Goal-oriented learning</h3>
                <p className="text-gray-700 leading-relaxed">Assign courses to specific teams, create custom learning paths, and align upskilling with your company's strategic technical goals.</p>
            </div>
            <div className="text-center md:text-left">
                <div className="w-16 h-16 bg-[#F7F9FA] rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                    <LayoutDashboard size={28} className="text-[#1C1D1F]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Actionable analytics</h3>
                <p className="text-gray-700 leading-relaxed">Get a clear picture of employee engagement. Track course completions, active hours, and identify knowledge gaps across your organization.</p>
            </div>
            <div className="text-center md:text-left">
                <div className="w-16 h-16 bg-[#F7F9FA] rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                    <Users size={28} className="text-[#1C1D1F]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Enterprise-grade admin</h3>
                <p className="text-gray-700 leading-relaxed">Frictionless deployment with Single Sign-On (SSO), seamless LMS integrations, and dedicated Customer Success managers.</p>
            </div>
        </div>
      </section>

    </div>
  );
}