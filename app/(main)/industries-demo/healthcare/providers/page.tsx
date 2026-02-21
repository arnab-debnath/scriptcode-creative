"use client";

import React from 'react';
import Image from 'next/image';
import { Activity, Clock, Zap, Cpu, Users, Layers } from 'lucide-react';

export default function ProvidersPage() {
  return (
    <div className="pt-28 md:pt-32 pb-24 px-6 max-w-7xl mx-auto">
      
      {/* HERO SECTION */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-sm font-semibold mb-6">
            <Cpu size={16} className="text-blue-600" /> Powered by Medix AI
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
          An EMR you'll actually <span className="text-blue-600">love using.</span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
          We rebuilt the electronic medical record from the ground up. Spend less time charting and more time treating patients with our AI-assisted provider dashboard.
        </p>
        <button className="px-8 py-4 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors shadow-lg">
            Request a Platform Demo
        </button>
      </section>

      {/* DASHBOARD MOCKUP */}
      <section className="mb-24 relative">
        <div className="absolute inset-0 bg-blue-50 rounded-[3rem] transform -skew-y-2 z-0"></div>
        <div className="relative z-10 w-full h-[300px] md:h-[600px] rounded-2xl shadow-2xl border border-slate-200 overflow-hidden bg-white">
            <Image 
                src="/industries/industries-demos/healthcare-demo/provider-dashboard.png"
                alt="Medix Provider EMR Dashboard"
                fill
                className="object-cover object-top"
            />
        </div>
      </section>

      {/* PLATFORM FEATURES */}
      <section className="grid md:grid-cols-2 gap-16 items-center">
        <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Designed to eliminate physician burnout.</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Legacy systems force doctors to become data-entry clerks. Medix uses ambient AI to draft clinical notes during patient visits, reducing documentation time by up to 50%.
            </p>
            
            <div className="space-y-6">
                <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                        <Zap size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-lg">Ambient Clinical Intelligence</h4>
                        <p className="text-slate-600 mt-1">Automatically generates structured SOAP notes from your natural conversations with patients.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                        <Layers size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-lg">Unified Patient Timeline</h4>
                        <p className="text-slate-600 mt-1">See a patient's entire medical history, labs, and previous encounters in a single, scrollable visual timeline.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                        <Clock size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-lg">Automated Billing Codes</h4>
                        <p className="text-slate-600 mt-1">Medix AI suggests accurate ICD-10 and CPT codes based on your clinical documentation to prevent revenue leakage.</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 flex flex-col items-center justify-center text-center h-48">
                <span className="text-4xl font-black text-blue-600 mb-2">-50%</span>
                <span className="text-sm font-bold text-slate-600 uppercase tracking-wide">Charting Time</span>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 flex flex-col items-center justify-center text-center h-48 transform translate-y-8">
                <span className="text-4xl font-black text-emerald-600 mb-2">+15%</span>
                <span className="text-sm font-bold text-slate-600 uppercase tracking-wide">Patient Volume</span>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 flex flex-col items-center justify-center text-center h-48">
                <span className="text-4xl font-black text-purple-600 mb-2">99.9%</span>
                <span className="text-sm font-bold text-slate-600 uppercase tracking-wide">Uptime SLA</span>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 flex flex-col items-center justify-center text-center h-48 transform translate-y-8">
                <span className="text-4xl font-black text-slate-900 mb-2">100%</span>
                <span className="text-sm font-bold text-slate-600 uppercase tracking-wide">HIPAA Compliant</span>
            </div>
        </div>
      </section>
      
    </div>
  );
}