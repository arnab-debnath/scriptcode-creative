"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Video, FileText, Activity, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function HealthcareLanding() {
  return (
    <div className="pb-24 overflow-hidden pt-28 md:pt-32">
      
      {/* 1. HERO SECTION */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Copy */}
            <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6">
                    <Activity size={16} /> Modernizing Healthcare Delivery
                </div>
                <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                    Better care, <br />
                    <span className="text-blue-600">connected.</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                    Medix bridges the gap between patients and providers with secure, high-fidelity telemedicine and intelligent electronic health records.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <button className="px-8 py-4 w-full sm:w-auto rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2">
                        Get Care Now
                    </button>
                    <button className="px-8 py-4 w-full sm:w-auto rounded-full bg-white text-slate-700 font-semibold hover:bg-slate-50 transition-colors border border-slate-200 flex items-center justify-center gap-2 group">
                        For Healthcare Systems <ArrowRight size={18} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Right Image/Mockup */}
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-100 bg-white">
                <Image 
                    src="/industries/industries-demos/healthcare-demo/hero-bg.png" 
                    alt="Doctor on a telemedicine call"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent"></div>
                
                {/* Floating UI Element */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-fade-in-up">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Video size={20} className="text-emerald-600" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-900">Dr. Sarah Chen</p>
                        <p className="text-xs text-slate-500 font-medium">Cardiology • Connecting...</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 2. LOGO CLOUD / TRUST */}
      <section className="py-12 border-y border-slate-200 bg-white px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest text-center md:text-left shrink-0">
                Trusted by Top Health Systems
            </p>
            <div className="flex flex-wrap justify-center gap-10 md:gap-16 opacity-50 grayscale">
                <div className="text-xl font-black text-slate-900 tracking-tighter">Mayo Clinic</div>
                <div className="text-xl font-bold text-slate-900 font-serif">Kaiser Permanente</div>
                <div className="text-xl font-black text-slate-900">Cleveland Clinic</div>
                <div className="text-xl font-bold text-slate-900 tracking-widest uppercase">Mount Sinai</div>
            </div>
        </div>
      </section>

      {/* 3. DUAL PATHWAYS (B2C vs B2B) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">One platform. Two distinct experiences.</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Whether you are seeking care or providing it, our architecture is optimized for your exact workflow.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            
            {/* Patients Pathway */}
            <div className="bg-white rounded-3xl p-10 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-colors group">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Video size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">For Patients</h3>
                <p className="text-slate-600 leading-relaxed mb-8">Access board-certified doctors from the comfort of your home. Manage your prescriptions, view lab results, and book appointments instantly.</p>
                <ul className="space-y-3 mb-10">
                    <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={20} className="text-emerald-500" /> On-demand virtual visits</li>
                    <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={20} className="text-emerald-500" /> Secure digital messaging</li>
                    <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={20} className="text-emerald-500" /> Transparent pricing</li>
                </ul>
                <Link href="/industries-demo/healthcare/patients" className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore Patient Services <ArrowRight size={18} />
                </Link>
            </div>

            {/* Providers Pathway */}
            <div className="bg-slate-900 rounded-3xl p-10 shadow-xl shadow-slate-900/20 border border-slate-800 hover:border-blue-500 transition-colors group text-white">
                <div className="w-14 h-14 bg-slate-800 text-blue-400 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <FileText size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">For Providers</h3>
                <p className="text-slate-300 leading-relaxed mb-8">Streamline your practice with our intelligent EMR. Reduce administrative overhead, automate charting, and focus entirely on patient care.</p>
                <ul className="space-y-3 mb-10">
                    <li className="flex items-center gap-3 text-slate-200 font-medium"><CheckCircle2 size={20} className="text-blue-400" /> AI-assisted charting</li>
                    <li className="flex items-center gap-3 text-slate-200 font-medium"><CheckCircle2 size={20} className="text-blue-400" /> Automated billing workflows</li>
                    <li className="flex items-center gap-3 text-slate-200 font-medium"><CheckCircle2 size={20} className="text-blue-400" /> Seamless lab integrations</li>
                </ul>
                <Link href="/industries-demo/healthcare/providers" className="text-blue-400 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore Provider Tools <ArrowRight size={18} />
                </Link>
            </div>

        </div>
      </section>

      {/* 4. SECURITY HIGHLIGHT */}
      <section className="px-6 max-w-7xl mx-auto">
         <div className="bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 text-blue-600">
                    <ShieldCheck size={32} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Bank-Grade Security & HIPAA Compliant</h3>
                    <p className="text-slate-600">Your health data is encrypted at rest and in transit. We exceed industry standards for data protection.</p>
                </div>
            </div>
            <Link href="/industries-demo/healthcare/security" className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-full shadow-sm hover:shadow-md transition-shadow border border-slate-200 whitespace-nowrap shrink-0">
                View Security Center
            </Link>
         </div>
      </section>
      
    </div>
  );
}