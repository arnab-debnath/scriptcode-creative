"use client";

import React from 'react';
import { Check } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="pt-20 pb-24 px-6 max-w-6xl mx-auto font-sans text-[#1C1D1F]">
      
      {/* PRICING HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Choose a plan for success</h1>
        <p className="text-lg text-gray-700 mb-8">
            Don't want to buy courses one by one? Get unlimited access to the top 10,000+ courses.
        </p>
      </div>

      {/* PRICING CARDS */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        {/* PERSONAL PLAN */}
        <div className="bg-white border-2 border-gray-200 p-8 hover:border-blue-600 transition-colors flex flex-col h-full shadow-sm">
            <h2 className="text-2xl font-bold mb-2">Personal Plan</h2>
            <p className="text-gray-600 mb-6 text-sm">For you</p>
            <div className="text-sm font-bold text-gray-500 mb-2">Starting at</div>
            <div className="mb-6">
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">₹829</span>
                    <span className="text-gray-600 font-normal">/ month</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Billed monthly or annually. Cancel anytime.</p>
            </div>

            <button className="w-full py-3 bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors mb-8">
                Start subscription
            </button>

            <ul className="space-y-3 mb-10 flex-grow">
                {[
                    'Access to 11,000+ top courses',
                    'Learn in-demand topics (Python, React, Design)',
                    'Downloadable resources & practice exercises',
                    'Mobile app access for offline viewing',
                    'Certificates of completion'
                ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <Check size={20} className="text-[#1C1D1F] shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>

        {/* TEAM PLAN */}
        <div className="bg-[#F7F9FA] border-2 border-gray-200 p-8 flex flex-col h-full">
            <h2 className="text-2xl font-bold mb-2">Team Plan</h2>
            <p className="text-gray-600 mb-6 text-sm">For your team</p>
            <div className="text-sm font-bold text-gray-500 mb-2">Starting at</div>
            <div className="mb-6">
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">₹2,000</span>
                    <span className="text-gray-600 font-normal">/ month per user</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Billed annually. 5 to 20 users.</p>
            </div>

            <button className="w-full py-3 border border-gray-900 bg-white text-[#1C1D1F] font-bold hover:bg-gray-50 transition-colors mb-8">
                Start 14-day free trial
            </button>

            <ul className="space-y-3 mb-10 flex-grow">
                {[
                    'Everything in Personal Plan, plus:',
                    'Team analytics and adoption reports',
                    'Custom logo and branding',
                    'Admin dashboard to manage users',
                    'Assign courses to team members'
                ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <Check size={20} className="text-[#1C1D1F] shrink-0" />
                        <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>

      </div>
    </div>
  );
}