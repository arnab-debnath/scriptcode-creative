"use client";

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import { 
  Mail, Phone, Send, MessageCircle, 
  Sparkles, Loader2, ShieldCheck, Zap,
  Globe, BarChart3, Palette, Layout, ShoppingCart
} from 'lucide-react';

export default function CreativeContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'SEO Growth (Ranking)',
    budget: '₹10k - ₹25k',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // IMPORTANT: These keys (left side) must match the {{placeholders}} 
    // you have created in your EmailJS template dashboard.
    const templateParams = {
        name: formState.name,
        from_name: formState.name,
        email: formState.email,         
        from_email: formState.email,    
        phone: formState.phone,         
        service: formState.service,     // In EmailJS use {{service}}
        budget: formState.budget,       // In EmailJS use {{budget}}
        message: formState.message      
    };

    try {
        await emailjs.send(
            'service_paa3prc',       
            'template_7la5mg7',      
            templateParams,
            '2qlYhtRtoHlKTCyz9'      
        );
        alert(`Thank you ${formState.name}! Brief received. We will contact you shortly.`);
        setFormState({
            name: '', email: '', phone: '', 
            service: 'SEO Growth (Ranking)', budget: '₹10k - ₹25k', message: ''
        });
    } catch (error) {
        console.error('FAILED...', error);
        alert("Something went wrong. Please try again or reach out on WhatsApp: +91 81003 00910");
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#050511] text-white min-h-screen pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 font-sans selection:bg-purple-500">
      
      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold mb-6 uppercase tracking-widest">
          <Image 
              src="/images/scshortlogo.png" 
              alt="ScriptCode" 
              width={12} 
              height={12} 
              className="h-3 w-auto brightness-0 invert" 
          /> Start Your Success Story
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
          Let’s Build Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Digital Vision.
          </span>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
        
        {/* LEFT SIDE: TRUST & INFO */}
        <div className="lg:col-span-2 space-y-6 md:space-y-8">
          <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[2rem] relative overflow-hidden group">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-purple-400">
              <Sparkles size={20} /> Why ScriptCode?
            </h3>
            <ul className="space-y-6">
              {[
                { title: "Engineering Mindset", desc: "We build scalable, high-performance systems for your growth." },
                { title: "Transparent ROI", desc: "Data-led creative decisions that drive measurable results." },
                { title: "Fast Support", desc: "Direct access via WhatsApp for instant communication." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 shadow-[0_0_10px_purple]"></div>
                  <div>
                    <h4 className="font-bold text-sm text-white">{item.title}</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 border border-white/10 rounded-[2rem] bg-gradient-to-br from-purple-900/20 to-transparent">
              <div className="flex items-center gap-3 text-green-400 mb-4">
                <ShieldCheck size={20} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Secure & Confidential</span>
              </div>
              <p className="text-xs text-gray-500 italic">
                "Your business strategies and data are protected by strict privacy protocols."
              </p>
          </div>
        </div>

        {/* RIGHT SIDE: THE FORM */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="bg-[#0B0B1A] border border-white/10 p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] relative shadow-2xl space-y-6">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500/20 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6 relative z-10">
              <input 
                type="text" required value={formState.name}
                className="w-full bg-[#050511] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 transition-all"
                placeholder="Full Name"
                onChange={(e) => setFormState({...formState, name: e.target.value})}
              />
              <input 
                type="tel" required value={formState.phone}
                className="w-full bg-[#050511] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 transition-all"
                placeholder="WhatsApp Number"
                onChange={(e) => setFormState({...formState, phone: e.target.value})}
              />
            </div>

            <input 
              type="email" required value={formState.email}
              className="w-full bg-[#050511] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 transition-all relative z-10"
              placeholder="Email Address"
              onChange={(e) => setFormState({...formState, email: e.target.value})}
            />

            {/* Service Selection Tiles */}
            <div className="space-y-4 relative z-10">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Service Interested In</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { id: 'SEO Growth (Ranking)', label: 'SEO', icon: <Globe size={14}/> },
                  { id: 'Social Media (Reels/Post)', label: 'Social', icon: <BarChart3 size={14}/> },
                  { id: 'Shopify Store Setup', label: 'Shopify', icon: <ShoppingCart size={14}/> },
                  { id: 'WordPress Website', label: 'WordPress', icon: <Layout size={14}/> },
                  { id: 'Branding & Logo', label: 'Branding', icon: <Palette size={14}/> },
                  { id: 'Paid Ads (FB/Google)', label: 'Paid Ads', icon: <Zap size={14}/> },
                ].map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setFormState({...formState, service: service.id})}
                    className={`flex items-center justify-center gap-2 p-3 rounded-xl border transition-all text-[10px] md:text-xs font-bold ${
                      formState.service === service.id 
                      ? 'bg-purple-600 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]' 
                      : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/30'
                    }`}
                  >
                    {service.icon} {service.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2 relative z-10">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Budget Range</label>
              <div className="relative">
                <select 
                  value={formState.budget}
                  className="w-full bg-[#050511] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 transition-colors appearance-none cursor-pointer"
                  onChange={(e) => setFormState({...formState, budget: e.target.value})}
                >
                  <option value="₹10k - ₹25k">₹10k - ₹25k</option>
                  <option value="₹25k - ₹50k">₹25k - ₹50k</option>
                  <option value="₹50k - ₹1 Lakh">₹50k - ₹1 Lakh</option>
                  <option value="₹1 Lakh+">₹1 Lakh+</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
              </div>
            </div>

            <textarea 
              required value={formState.message}
              className="w-full bg-[#050511] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 transition-all h-32 resize-none relative z-10"
              placeholder="Briefly describe your project..."
              onChange={(e) => setFormState({...formState, message: e.target.value})}
            ></textarea>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-black uppercase tracking-widest text-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 relative z-10"
            >
              {isSubmitting ? (
                <><Loader2 className="animate-spin" size={20} /> Sending...</>
              ) : (
                <><Send size={20} /> Launch Project</>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}