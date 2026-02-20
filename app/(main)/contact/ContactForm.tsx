// ContactForm.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
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

  const inputBaseStyle = "w-full bg-[#0D1117] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all peer placeholder-transparent";
  const labelBaseStyle = "absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 bg-[#0D1117] px-1 pointer-events-none transform -translate-y-1/2 scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-90 peer-focus:-translate-y-6 rounded-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
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