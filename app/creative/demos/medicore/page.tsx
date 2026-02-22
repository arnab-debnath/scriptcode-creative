"use client";

import React from 'react';
import Image from 'next/image';
import BackToLab from '../../components/BackToLab';
import { 
  Phone, Clock, MapPin, ShieldCheck, 
  Stethoscope, Activity, Heart, ArrowRight, 
  Star, MessageCircle, CheckCircle2, 
} from 'lucide-react';
import Link from 'next/link';
import DemoFooterCredit from '@/src/DemoFooterCredit';
import { div } from 'framer-motion/client';

export default function MediCoreDemo() {
  return (
    <div>
    <div className="bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-700">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-blue-600 text-white py-2 px-6 text-center text-xs md:text-sm font-medium tracking-wide">
        <span className="opacity-90">Emergency Care Available 24/7 —</span> 
        <Link href="tel:+910000000000" className="underline ml-1 hover:text-blue-100 transition-colors">Call +91 000 000 0000</Link>
      </div>

      {/* 2. MEDICORE NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 h-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                    <Heart fill="currentColor" size={20} />
                </div>
                <span className="text-2xl font-bold tracking-tight text-slate-950">Medi<span className="text-blue-600">Core</span></span>
            </div>
            <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600 uppercase tracking-wider">
                <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
                <a href="#doctors" className="hover:text-blue-600 transition-colors">Specialists</a>
                <a href="#about" className="hover:text-blue-600 transition-colors">About Us</a>
                <button className="bg-slate-950 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">
                    Book Appointment
                </button>
            </div>
            <button className="lg:hidden text-slate-900">
                <Activity size={24} />
            </button>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      
      <section className="relative pb-32 overflow-hidden">
        <BackToLab />
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 translate-x-1/4 pointer-events-none -z-10"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-blue-200/20 blur-[100px] rounded-full pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                    <ShieldCheck size={14} /> ISO 9001:2026 Certified
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-950 leading-[1.1] mb-8">
                    Healthcare <br />
                    <span className="text-blue-600">Reimagined</span> for <br />
                    the Digital Age.
                </h1>
                <p className="text-slate-600 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
                    Experience world-class medical expertise combined with cutting-edge technology. Faster results, better care, and 24/7 digital support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 flex items-center justify-center gap-2">
                        Book Your Visit <ArrowRight size={20} />
                    </button>
                    <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                        View Our Doctors
                    </button>
                </div>

                {/* Trust Badges - UPDATED TO CSS MONOGRAMS */}
                <div className="mt-12 flex items-center gap-6">
                    <div className="flex -space-x-3">
                        {['SJ', 'AL', 'MR', 'DK'].map((initials, i) => (
                            <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center overflow-hidden">
                                {initials}
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className="flex text-yellow-400 mb-1"><Star size={14} fill="currentColor"/> <Star size={14} fill="currentColor"/> <Star size={14} fill="currentColor"/> <Star size={14} fill="currentColor"/> <Star size={14} fill="currentColor"/></div>
                        <p className="text-sm font-bold text-slate-950">4.9/5 from 2,000+ Patients</p>
                    </div>
                </div>
            </div>

            {/* Hero Image Mockup Area */}
            <div className="relative">
                {/* UPDATED: Added aspect-[4/3] to contain the fill Image properly */}
                <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-8 border-white">
                    <Image 
                        src="/services/creative-project/health/hero.jpg" 
                        alt="Modern Clinic" 
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>
                {/* Floating Card 1 */}
                <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 hidden md:block animate-bounce-slow">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center">
                            <CheckCircle2 size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Reports</p>
                            <p className="text-lg font-bold text-slate-950">Instantly Online</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 4. STATS SECTION (The "Professional" Look) */}
      <section className="bg-slate-950 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
                { val: "24/7", label: "Care Available" },
                { val: "15min", label: "Avg Wait Time" },
                { val: "50+", label: "Specialists" },
                { val: "100%", label: "Digital Records" },
            ].map((stat, idx) => (
                <div key={idx} className="text-center">
                    <p className="text-4xl md:text-5xl font-black text-white mb-2">{stat.val}</p>
                    <p className="text-blue-400 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
                </div>
            ))}
        </div>
      </section>

      {/* 5. SERVICES GRID */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Expertise</h2>
                <h3 className="text-4xl md:text-5xl font-black text-slate-950">Quality Care for Everyone.</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Cardiology", icon: <Heart size={32}/>, desc: "Comprehensive heart care using modern diagnostics and expert analysis." },
                    { title: "Diagnostics", icon: <Activity size={32}/>, desc: "State-of-the-art laboratory services with online report access." },
                    { title: "Tele-Consult", icon: <MessageCircle size={32}/>, desc: "Connect with our top doctors from the comfort of your home 24/7." },
                ].map((s, idx) => (
                    <div key={idx} className="p-10 rounded-[2.5rem] border border-slate-100 bg-white hover:bg-blue-600 group transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-blue-200">
                        <div className="text-blue-600 mb-6 group-hover:text-white transition-colors">{s.icon}</div>
                        <h4 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{s.title}</h4>
                        <p className="text-slate-600 leading-relaxed group-hover:text-blue-100 transition-colors mb-6">{s.desc}</p>
                        <div className="flex items-center gap-2 text-blue-600 group-hover:text-white font-bold text-sm">
                            Learn More <ArrowRight size={16} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 6. FLOATING WHATSAPP BUTTON (Highly Functional) */}
      <div className="fixed bottom-48 right-8 z-[100]">
        <Link href="https://wa.me/910000000000" className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform">
            <Phone size={20} fill="currentColor" />
            <span className="font-bold">Book via WhatsApp</span>
        </Link>
      </div>


    </div>
     <DemoFooterCredit brand="creative"/>
    </div>
  );
}