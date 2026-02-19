"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, ArrowRight, Loader2 } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
// 1. IMPORT EMAILJS
import emailjs from '@emailjs/browser';

// 1. FORM COMPONENT (Handles the logic)
function ContactForm() {
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan');
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-fill the service based on URL
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
    
    // 2. PREPARE DATA FOR EMAILJS
    const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
    };

    try {
        // 3. SEND EMAIL
        await emailjs.send(
            'service_paa3prc',                 // <--- YOUR SERVICE ID (Added)
            'template_7la5mg7',     // <--- PASTE TEMPLATE ID HERE
            templateParams,
            '2qlYhtRtoHlKTCyz9'       // <--- PASTE PUBLIC KEY HERE
        );

        // Success Message
        alert(`Thank you ${formData.name}! Your message has been sent successfully.`);
        
        // Reset Form
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });

    } catch (error) {
        console.error('FAILED...', error);
        alert("Something went wrong. Please try again or message us on WhatsApp.");
    } finally {
        setIsSubmitting(false);
    }
  };

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
                    className="w-full bg-[#0B1215] border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-cyan-400 transition-all peer"
                    placeholder=" " 
                />
                <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-400 bg-[#0B1215] px-1 pointer-events-none transform -translate-y-1/2 scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-90 peer-focus:-translate-y-6">
                    Your Name
                </label>
            </div>

            {/* Phone */}
            <div className="relative group">
                <input 
                    type="tel" 
                    name="phone"
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#0B1215] border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-cyan-400 transition-all peer"
                    placeholder=" " 
                />
                <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-400 bg-[#0B1215] px-1 pointer-events-none transform -translate-y-1/2 scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-90 peer-focus:-translate-y-6">
                    Phone Number
                </label>
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
                className="w-full bg-[#0B1215] border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-cyan-400 transition-all peer"
                placeholder=" "
            />
            <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-400 bg-[#0B1215] px-1 pointer-events-none transform -translate-y-1/2 scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-90 peer-focus:-translate-y-6">
                Email Address
            </label>
        </div>

        {/* Service Selection (Auto-filled) */}
        <div className="relative group">
            <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-[#0B1215] border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-cyan-400 appearance-none cursor-pointer"
            >
                <option value="" disabled>Select a Service</option>
                <optgroup label="Monthly Retainers">
                    <option value="Standard Care">Standard Care (₹15k)</option>
                    <option value="Growth Partner">Growth Partner (₹35k)</option>
                    <option value="Market Dominance">Market Dominance (₹75k)</option>
                </optgroup>
                <optgroup label="Development">
                    <option value="Landing Page">Landing Page Dev</option>
                    <option value="Business Website">Business Website Dev</option>
                    <option value="Custom Enterprise Solution">Custom Enterprise Solution</option>
                </optgroup>
                <option value="Hourly Consultation">Hourly Consultation</option>
                <option value="Other">Other Inquiry</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 group-hover:text-cyan-400 transition-colors">
                ▼
            </div>
        </div>

        {/* Message */}
        <div className="relative group">
            <textarea 
                name="message" 
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#0B1215] border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-cyan-400 transition-all placeholder-transparent peer resize-none"
                placeholder=" "
            ></textarea>
            <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-400 bg-[#0B1215] px-1 pointer-events-none transform -translate-y-1/2 scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-90 peer-focus:-translate-y-6">
                Tell us about your project...
            </label>
        </div>

        <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
        >
            {isSubmitting ? (
                <>
                    <Loader2 className="animate-spin" size={18} /> Sending...
                </>
            ) : (
                <>
                    Send Message <Send size={18} />
                </>
            )}
        </button>
    </form>
  );
}

// 2. MAIN PAGE COMPONENT (The Layout)
export default function ContactPage() {
  return (
    <div className="bg-[#010506] text-white min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT COLUMN: Info & Socials */}
        <div className="animate-fade-in-left space-y-10">
            <div>
                <p className="text-cyan-400 font-bold uppercase tracking-widest mb-4">Contact Us</p>
                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                    Let's Build <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                        Something Great.
                    </span>
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                    Whether you have a specific project in mind or just want to explore what's possible, we're ready to listen.
                </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
                <a href="mailto:hello@scriptcode.com" className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group cursor-pointer">
                    <div className="p-4 bg-blue-500/20 rounded-full text-blue-400 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                        <Mail size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400 mb-1">Email Us</p>
                        <p className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">scriptcode.innovation@gmail.com</p>
                    </div>
                    <ArrowRight className="ml-auto text-gray-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 duration-300" />
                </a>

                <a href="https://wa.me/918100300910" target="_blank" className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-green-500/10 hover:border-green-500/30 transition-all group cursor-pointer">
                    <div className="p-4 bg-green-500/20 rounded-full text-green-400 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                        <MessageCircle size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400 mb-1">WhatsApp (Fastest)</p>
                        <p className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">+91 8100 300 910</p>
                    </div>
                    <ArrowRight className="ml-auto text-gray-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 duration-300" />
                </a>
            </div>

            <div className="flex items-center gap-3 text-gray-500 text-sm border-t border-white/10 pt-8 mt-8">
                <MapPin size={18} className="text-purple-500" />
                <span>Based in India, Serving Clients Globally.</span>
            </div>
        </div>

        {/* RIGHT COLUMN: The Form */}
        <div className="bg-[#060b10]/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-fade-in-right relative overflow-hidden">
            {/* Form Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none"></div>
            
            <Suspense fallback={
                <div className="h-96 flex items-center justify-center text-gray-500 flex-col gap-4">
                    <Loader2 className="animate-spin text-cyan-400" size={32} />
                    <p>Loading form...</p>
                </div>
            }>
                <ContactForm />
            </Suspense>
        </div>

      </div>
    </div>
  );
}