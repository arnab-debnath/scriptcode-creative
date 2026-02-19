// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Instagram, Facebook, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#02040A] border-t border-white/10 pt-20 pb-10 text-sm font-sans relative overflow-hidden">
      
      {/* Subtle tech background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-900/10 blur-[120px] rounded-[100%] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column (Spans 2 cols) */}
          <div className="lg:col-span-2">
            
            {/* LOGO IMPLEMENTATION */}
            <Link href="/" className="inline-block mb-6">
                <img 
                    src="/images/scriptcodelogo.png" 
                    alt="ScriptCode Innovation Logo" 
                    className="h-8 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" 
                />
            </Link>
            
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              Architecting scalable, high-performance software for modern enterprises. We don't just write code; we build infrastructure that powers your future.
            </p>
            
            {/* Extended Social Icons */}
            <div className="flex flex-wrap items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/50 transition-all"><Github size={18} /></a>
              <a href="https://www.linkedin.com/company/scriptcode-innovation/" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/50 transition-all"><Linkedin size={18} /></a>
              <a href="https://x.com/Scriptcodeinn" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/50 transition-all"><Twitter size={18} /></a>
              <a href="https://www.instagram.com/scriptcodeinn/" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/50 transition-all"><Instagram size={18} /></a>
              <a href="https://www.facebook.com/scriptcodeinnovation/" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/50 transition-all"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Engineering Services */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Engineering</h4>
            <ul className="space-y-4 text-gray-500">
              <li><Link href="/services/custom-software" className="hover:text-blue-400 transition-colors">Custom Software</Link></li>
              <li><Link href="/services/web-development" className="hover:text-blue-400 transition-colors">Web Applications</Link></li>
              <li><Link href="/services/mobile-development" className="hover:text-blue-400 transition-colors">Mobile Development</Link></li>
              <li><Link href="/services/devops-as-a-service" className="hover:text-blue-400 transition-colors">DevOps & Cloud</Link></li>
              <li><Link href="/services/it-consulting" className="hover:text-blue-400 transition-colors">IT Consulting</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4 text-gray-500">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">All Services</Link></li>
              <li><Link href="/industries" className="hover:text-blue-400 transition-colors">All Industries</Link></li>
              <li><Link href="/estimate" className="hover:text-blue-400 transition-colors">Get an Estimate</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Ecosystem */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Connect</h4>
            <ul className="space-y-4 text-gray-500 mb-8">
              <li className="flex items-center gap-2"><Mail size={16} /> scriptcode.innovation@gmail.com</li>
            </ul>
            
            {/* Ecosystem Cross-Link */}
            <div className="bg-[#0D1117] border border-blue-900/30 p-4 rounded-xl">
                <span className="text-xs text-blue-400 font-bold uppercase tracking-widest block mb-2">Need Marketing?</span>
                <Link href="/creative" className="text-white hover:text-blue-300 transition-colors flex items-center justify-between group">
                    <span className="font-semibold text-sm">Visit ScriptCODE.Creative</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-xs">
          <p>© {new Date().getFullYear()} ScriptCode Innovation. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}