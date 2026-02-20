"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { Mail, MapPin, Send, MessageCircle, ArrowRight, Loader2, Code2 } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import emailjs from '@emailjs/browser';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Our Engineering Team',
  description: 'Ready to build scalable, high-performance software? Share your project requirements with our engineering team. Based in India, engineering globally.',
  keywords: ['contact software agency', 'hire software engineers India', 'custom software development inquiry', 'IT consulting contact', 'enterprise software developers'],
};

// 1. FORM COMPONENT
function ContactForm() {
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (plan) {
      setFormData(prev => ({ ...prev, service: decodeURIComponent(plan) }));
    }
  }, [plan]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
    };

    try {
        await emailjs.send(
            'service_paa3prc',                 
            'template_7la5mg7',     
            templateParams,
            '2qlYhtRtoHlKTCyz9'       
        );
        alert(`Thank you ${formData.name}! Your message has been sent successfully. Our engineering team will review it shortly.`);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
        console.error('FAILED...', error);
        alert("Something went wrong. Please try again or message us directly on WhatsApp.");
    } finally {
        setIsSubmitting(false);
    }
  };

  // Shared input styling for that clean, SaaS decorum
  const inputBaseStyle = "w-full bg-[#0D1117] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all peer placeholder-transparent";
  const labelBaseStyle = "absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 bg-[#0D1117] px-1 pointer-events-none transform -translate-y-1/2 scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-90 peer-focus:-translate-y-6 rounded-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="relative group">
                <input 
                    type="text" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={inputBaseStyle}
                    placeholder="Your Name" 
                />
                <label className={labelBaseStyle}>Your Name</label>
            </div>

            {/* Phone */}
            <div className="relative group">
                <input 
                    type="tel" 
                    name="phone"
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputBaseStyle}
                    placeholder="Phone Number" 
                />
                <label className={labelBaseStyle}>Phone Number</label>
            </div>
        </div>

        {/* Email */}
        <div className="relative group">
            <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputBaseStyle}
                placeholder="Email Address"
            />
            <label className={labelBaseStyle}>Email Address</label>
        </div>

        {/* UPDATED: Engineering Service Categories */}
        <div className="relative group">
            <select 
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-[#0D1117] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none cursor-pointer"
            >
                <option value="" disabled>Select Engineering Service</option>
                <optgroup label="Development Solutions">
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="Web Application Engineering">Web Application Engineering</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="E-Commerce Architecture">E-Commerce Architecture</option>
                </optgroup>
                <optgroup label="Infrastructure & Tech">
                    <option value="DevOps & Cloud Migration">DevOps & Cloud Migration</option>
                    <option value="API Development & Integration">API Development & Integration</option>
                    <option value="AI & Machine Learning">AI & Machine Learning</option>
                </optgroup>
                <optgroup label="Advisory">
                    <option value="IT Consulting & Strategy">IT Consulting & Strategy</option>
                    <option value="System Architecture Audit">System Architecture Audit</option>
                </optgroup>
                <option value="Other">Other Technical Inquiry</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                ▼
            </div>
        </div>

        {/* Message */}
        <div className="relative group">
            <textarea 
                name="message" 
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className={`${inputBaseStyle} resize-none`}
                placeholder="Project Details"
            ></textarea>
            <label className={labelBaseStyle}>Project Details & Requirements...</label>
        </div>

        <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
        >
            {isSubmitting ? (
                <>
                    <Loader2 className="animate-spin" size={18} /> Sending Details...
                </>
            ) : (
                <>
                    Submit Inquiry <Send size={18} />
                </>
            )}
        </button>
    </form>
  );
}

// 2. MAIN PAGE COMPONENT
export default function ContactPage() {
  return (
    <div className="bg-[#02040A] text-white min-h-screen pt-32 pb-24 px-6 overflow-hidden relative">
      
      {/* Refined Technical Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
        
        {/* LEFT COLUMN: Info */}
        <div className="lg:col-span-5 space-y-10">
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
                    <Code2 size={16} /> Engineering Solutions
                </div>
                <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                    Architect Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        Next Advantage.
                    </span>
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Ready to build scalable, high-performance software? Share your project requirements with our engineering team, and we'll help you map out the perfect architecture.
                </p>
            </div>

            {/* Direct Contact Cards - Cleaner UI */}
            <div className="space-y-4">
                <a href="mailto:scriptcode.innovation@gmail.com" className="flex items-center gap-5 p-5 rounded-2xl bg-[#0D1117] border border-white/5 hover:border-blue-500/30 transition-all group cursor-pointer">
                    <div className="p-3 bg-white/5 rounded-xl text-gray-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-all">
                        <Mail size={22} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium mb-1">Email Our Team</p>
                        <p className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">scriptcode.innovation@gmail.com</p>
                    </div>
                </a>

                <a href="https://wa.me/918100300910" target="_blank" className="flex items-center gap-5 p-5 rounded-2xl bg-[#0D1117] border border-white/5 hover:border-green-500/30 transition-all group cursor-pointer">
                    <div className="p-3 bg-white/5 rounded-xl text-gray-400 group-hover:text-green-400 group-hover:bg-green-500/10 transition-all">
                        <MessageCircle size={22} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium mb-1">Direct WhatsApp (Fastest)</p>
                        <p className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">+91 8100 300 910</p>
                    </div>
                </a>
            </div>

            <div className="flex items-center gap-3 text-gray-500 text-sm pt-4">
                <MapPin size={18} className="text-blue-500" />
                <span>Based in India, Engineering Globally.</span>
            </div>
        </div>

        {/* RIGHT COLUMN: The Form */}
        <div className="lg:col-span-7 bg-[#050810] p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative">
            <h3 className="text-2xl font-bold mb-8 text-white">Project Inquiry</h3>
            <Suspense fallback={
                <div className="h-96 flex items-center justify-center text-gray-500 flex-col gap-4">
                    <Loader2 className="animate-spin text-blue-500" size={32} />
                    <p>Loading secure form...</p>
                </div>
            }>
                <ContactForm />
            </Suspense>
        </div>

      </div>
    </div>
  );
}