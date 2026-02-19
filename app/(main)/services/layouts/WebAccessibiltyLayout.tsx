// src/components/services/layouts/WebAccessibilityLayout.tsx
import React from 'react';
import { Eye, Keyboard, Ear, MonitorCheck, ArrowLeft, ShieldCheck, Scale, Users } from 'lucide-react';
import Link from 'next/link';
import EstimateCTA from '../../estimate/EstimateCTA';

export default function WebAccessibilityLayout() {
  return (
    <div className="bg-[#050505] min-h-screen text-white pt-32 font-sans relative overflow-hidden selection:bg-yellow-400/30 selection:text-black">
      
      {/* Background Ambience (High contrast, minimal gradients) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Navigation - Note the custom focus ring thematic to accessibility */}
        <Link 
          href="/services" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors font-bold uppercase tracking-widest text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#050505] rounded-sm"
        >
          <ArrowLeft size={16} /> Back to Services
        </Link>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-32">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 mb-6 font-mono text-sm">
              <ShieldCheck size={16} /> WCAG 2.1 AA Compliant
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
              Design for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                Everyone.
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl mb-8">
              We engineer inclusive digital products that are completely usable by everyone, regardless of ability. Mitigate legal risks and open your platform to millions of new users with uncompromising ADA compliance.
            </p>

            <div className="flex gap-6 mt-8">
                <div className="flex flex-col">
                    <span className="text-3xl font-black text-white mb-1">1B+</span>
                    <span className="text-sm text-gray-400 font-medium">People globally with a disability</span>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div className="flex flex-col">
                    <span className="text-3xl font-black text-white mb-1">ADA</span>
                    <span className="text-sm text-gray-400 font-medium">Strict Legal Compliance</span>
                </div>
            </div>
          </div>

          {/* Right Visual: The "Audit Score" Dashboard */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
             <div className="w-full max-w-md bg-[#0A0A0A] border-2 border-white/10 p-8 rounded-2xl shadow-2xl relative">
                
                {/* Decorative Focus Ring */}
                <div className="absolute -inset-1 border-2 border-yellow-400/50 rounded-2xl blur-sm pointer-events-none"></div>

                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                        <MonitorCheck className="text-blue-400" size={24} />
                        <span className="font-bold text-lg">Lighthouse Audit</span>
                    </div>
                    <span className="text-xs font-mono text-green-400 bg-green-400/10 px-2 py-1 rounded">PASS</span>
                </div>

                {/* Simulated Metrics */}
                <div className="flex justify-center mb-8">
                    <div className="relative flex items-center justify-center w-32 h-32 rounded-full border-8 border-green-500 bg-green-500/10 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                        <span className="text-4xl font-black text-green-400">100</span>
                    </div>
                </div>

                <div className="space-y-4">
                    {[
                        { label: "Color Contrast", value: "WCAG AAA", color: "text-green-400" },
                        { label: "Semantic HTML", value: "Verified", color: "text-green-400" },
                        { label: "Keyboard Nav", value: "Zero Traps", color: "text-green-400" },
                        { label: "ARIA Labels", value: "100% Coverage", color: "text-green-400" }
                    ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                            <span className="text-sm font-medium text-gray-300">{item.label}</span>
                            <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
                        </div>
                    ))}
                </div>

             </div>
          </div>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20">
                <Scale className="text-blue-400 mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-3">Legal Protection</h3>
                <p className="text-gray-400 leading-relaxed">Web accessibility lawsuits are rising rapidly. We ensure your application meets stringent ADA and WCAG 2.1 AA guidelines, protecting your business from costly litigation and compliance penalties.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-yellow-900/20 to-transparent border border-yellow-500/20">
                <Users className="text-yellow-400 mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-3">Market Expansion</h3>
                <p className="text-gray-400 leading-relaxed">Over 15% of the global population experiences some form of disability. By engineering an accessible platform, you instantly improve SEO and open your doors to a massive, heavily underserved market.</p>
            </div>
        </div>

        {/* Engineering Features Grid */}
        <div className="mb-24">
            <h2 className="text-3xl font-bold mb-10 text-center">Accessibility Engineering</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { icon: Ear, title: "Screen Readers", desc: "Flawless optimization for NVDA and VoiceOver using proper ARIA attributes and semantic HTML5." },
                { icon: Keyboard, title: "Keyboard Nav", desc: "Logical tab flows, visible focus rings, and strict elimination of keyboard traps for motor-impaired users." },
                { icon: Eye, title: "Visual Contrast", desc: "Mathematical color contrast adjustments and responsive text scaling for users with low vision." },
                { icon: MonitorCheck, title: "Manual Audits", desc: "We don't just rely on automated tools. Our engineers manually test workflows using assistive technologies." }
            ].map((feat, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/10 p-8 rounded-2xl hover:bg-white/[0.05] hover:border-white/30 transition-all duration-300">
                    <feat.icon className="text-white mb-6" size={32} />
                    <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
                </div>
            ))}
            </div>
        </div>

        {/* The Stack & Tools */}
        <div className="text-center mb-10 border-t border-white/10 pt-16">
            <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-8">Auditing & Testing Stack</p>
            <div className="flex flex-wrap justify-center gap-4">
                {["Axe-Core", "Google Lighthouse", "WAVE", "NVDA", "Apple VoiceOver", "eslint-plugin-jsx-a11y"].map((tech, idx) => (
                    <span key={idx} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 font-mono text-sm">
                        {tech}
                    </span>
                ))}
            </div>
        </div>

      </div>

      {/* Dynamic CTA using the Cyan Theme */}
      <EstimateCTA themeColor="cyan" title="Audit Your Application" />
    </div>
  );
}