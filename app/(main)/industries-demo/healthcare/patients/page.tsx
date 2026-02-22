"use client";

import React from 'react';
import Image from 'next/image';
import { Stethoscope, Brain, Thermometer, CalendarCheck, FileText, Pill, ArrowRight } from 'lucide-react';

export default function PatientsPage() {
  return (
    <div className="pt-28 md:pt-32 pb-24 px-6 max-w-7xl mx-auto">
      
      {/* HERO SECTION */}
      <section className="bg-blue-50 rounded-[2.5rem] p-8 md:p-16 mb-24 flex flex-col md:flex-row items-center gap-12 border border-blue-100">
        <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                World-class care, <br /> on your schedule.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium max-w-lg">
                Talk to a board-certified doctor in minutes. Get diagnoses, prescriptions, and lab referrals from the comfort of your home.
            </p>
            <div className="flex gap-4">
                <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                    See a Doctor Now
                </button>
            </div>
        </div>
        <div className="flex-1 w-full h-[400px] relative rounded-3xl overflow-hidden shadow-xl border border-white">
            <Image 
                src="/industries/industries-demos/healthcare-demo/patient-care.png"
                alt="Patient receiving virtual care"
                fill
                className="object-cover"
            />
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="mb-24">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive care for every need</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">From late-night fevers to managing chronic conditions, our network of specialists is here for you 24/7/365.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow group cursor-pointer">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Thermometer size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Urgent Care</h3>
                <p className="text-slate-600 leading-relaxed mb-4">Cold & flu, sinus infections, UTIs, and minor injuries. Connect with a provider in under 10 minutes.</p>
                <span className="text-emerald-600 font-bold flex items-center gap-2 text-sm uppercase tracking-wide">Learn More <ArrowRight size={16} /></span>
            </div>

            <div className="bg-white p-4 md:p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow group cursor-pointer">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Stethoscope size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Primary Care</h3>
                <p className="text-slate-600 leading-relaxed mb-4">Annual wellness visits, preventative care, and chronic condition management with a dedicated physician.</p>
                <span className="text-blue-600 font-bold flex items-center gap-2 text-sm uppercase tracking-wide">Learn More <ArrowRight size={16} /></span>
            </div>

            <div className="bg-white p-4 md:p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow group cursor-pointer">
                <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Brain size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Mental Health</h3>
                <p className="text-slate-600 leading-relaxed mb-4">Talk therapy and psychiatry. Get confidential, compassionate support for anxiety, depression, and stress.</p>
                <span className="text-purple-600 font-bold flex items-center gap-2 text-sm uppercase tracking-wide">Learn More <ArrowRight size={16} /></span>
            </div>
        </div>
      </section>

      {/* PATIENT APP FEATURES */}
      <section className="bg-slate-900 rounded-[2.5rem] py-8 px-4 md:p-12 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative z-10">Your health, entirely in your hands</h2>
        
        <div className="grid md:grid-cols-3 gap-12 relative z-10">
            <div className="text-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400">
                    <CalendarCheck size={28} />
                </div>
                <h3 className="text-lg font-bold mb-2">Easy Scheduling</h3>
                <p className="text-slate-400">Book, reschedule, or cancel appointments directly from the Medix app with zero phone calls.</p>
            </div>
            <div className="text-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400">
                    <FileText size={28} />
                </div>
                <h3 className="text-lg font-bold mb-2">Lab Results</h3>
                <p className="text-slate-400">View your comprehensive lab results with easy-to-understand explanations from your doctor.</p>
            </div>
            <div className="text-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400">
                    <Pill size={28} />
                </div>
                <h3 className="text-lg font-bold mb-2">Prescription Renewals</h3>
                <p className="text-slate-400">Request refills with a single tap and have them sent instantly to your local pharmacy.</p>
            </div>
        </div>
      </section>

    </div>
  );
}