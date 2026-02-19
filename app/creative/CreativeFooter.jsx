import React from 'react';
import Link from 'next/link';
import { ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function CreativeFooter() {
  return (
    <footer className="bg-[#030305] border-t border-white/5 pt-32 pb-10 text-white relative overflow-hidden font-sans">
      
      {/* Massive Brutalist Background Text */}
      <div className="absolute top-10 left-0 w-full overflow-hidden whitespace-nowrap pointer-events-none opacity-20 flex select-none">
          <span className="text-[15rem] font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-800 to-transparent leading-none">
              SCRIPTCODE.CREATIVE 
          </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top CTA Section WITH PURE PNG LOGO */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-white/10 pb-16 gap-8">
            <div>
                {/* --- FULL PNG LOGO ADDED HERE --- */}
                <Link href="/creative" className="inline-block mb-10 group">
                    <img 
                        src="/images/scriptcodelogo.png" 
                        alt="ScriptCode Creative Logo" 
                        className="h-10 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" 
                    />
                </Link>

                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">Dominate <br/> Your Market.</h2>
                <p className="text-amber-400 font-bold uppercase tracking-widest text-sm">Stop blending in. Start scaling.</p>
            </div>
            <Link href="/creative/contact">
                <button className="bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full font-black px-8 py-4 text-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2 shadow-[0_0_30px_rgba(251,191,36,0.2)] hover:shadow-[0_0_40px_rgba(251,191,36,0.4)]">
                    Book a Strategy Call <ArrowRight size={20} />
                </button>
            </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            
            <div>
                <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6">The Agency</h4>
                <ul className="space-y-4 text-gray-400 font-medium">
                    <li><Link href="/creative/about" className="hover:text-amber-400 transition-colors">Our Ethos</Link></li>
                    <li><Link href="/creative/pricing" className="hover:text-amber-400 transition-colors">Pricing & Packages</Link></li>
                    <li><Link href="/creative/work" className="hover:text-amber-400 transition-colors">Concept Lab</Link></li>
                    <li><Link href="/creative/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6">Capabilities</h4>
                <ul className="space-y-4 text-gray-400 font-medium">
                    <li><Link href="/creative/services" className="hover:text-amber-400 transition-colors">UI/UX Design</Link></li>
                    <li><Link href="/creative/services" className="hover:text-amber-400 transition-colors">SEO Dominance</Link></li>
                    <li><Link href="/creative/services" className="hover:text-amber-400 transition-colors">Paid Social Scaling</Link></li>
                    <li><Link href="/creative/services" className="hover:text-amber-400 transition-colors">E-Commerce Dev</Link></li>
                </ul>
            </div>

            <div className="lg:col-span-2 flex flex-col items-start lg:items-end text-left lg:text-right">
                <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6">Social Proof</h4>
                <div className="flex gap-4 mb-8">
                    <a href="https://www.instagram.com/scriptcode.innovation/" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-amber-400 hover:text-black transition-all duration-300"><Instagram size={20} /></a>
                    <a href="https://www.linkedin.com/company/scriptcode-innovation/" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-amber-400 hover:text-black transition-all duration-300"><Linkedin size={20} /></a>
                    <a href="https://x.com/Scriptcodeinn" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-amber-400 hover:text-black transition-all duration-300"><Twitter size={20} /></a>
                </div>
                
                {/* Ecosystem Cross-Link */}
                <div className="bg-[#0A0A14] border border-amber-900/30 p-5 rounded-2xl w-full lg:w-72">
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-widest block mb-2">Need Custom Software?</span>
                    <Link href="/" className="text-white hover:text-amber-400 transition-colors flex items-center justify-between group">
                        <span className="font-bold">ScriptCODE Innovation</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-amber-400" />
                    </Link>
                </div>
            </div>

        </div>

        {/* Bottom Bar WITH INLINE LOGO */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm font-medium">
          
          <div className="flex items-center gap-2">
              <span>© {new Date().getFullYear()}</span>
              <Link href="/creative" className="flex items-center gap-1.5 group">
                  <img 
                      src="/images/scriptcodelogo.png" 
                      alt="ScriptCode Logo" 
                      className="h-3.5 w-auto object-contain brightness-0 invert opacity-50 group-hover:opacity-100 transition-opacity" 
                  />
                  <span className="opacity-70 group-hover:opacity-100 group-hover:text-amber-400 transition-all">.Creative</span>
              </Link>
          </div>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}