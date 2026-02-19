// src/components/services/layouts/QualityAssuranceLayout.tsx
import React from 'react';
import { CheckCircle, Bug, ShieldAlert, Zap, ArrowLeft, Activity, TerminalSquare, SearchCode } from 'lucide-react';
import Link from 'next/link';
import EstimateCTA from '../../estimate/EstimateCTA';

export default function QualityAssuranceLayout() {
  return (
    <div className="bg-[#020504] min-h-screen text-white pt-32 font-mono relative overflow-hidden selection:bg-emerald-500/30">
      
      {/* Background Ambience (Subtle green telemetry glows) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-900/20 blur-[150px] rounded-[100%] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Navigation */}
        <Link href="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-emerald-400 mb-12 transition-colors font-bold uppercase tracking-widest text-xs font-sans">
          <ArrowLeft size={16} /> Back to Services
        </Link>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-32">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-6 font-sans text-xs uppercase tracking-widest font-bold">
              <CheckCircle size={16} /> Zero-Defect Releases
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1] font-sans">
              Deploy with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                Absolute Confidence.
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10 font-sans">
              Bugs in production cost thousands. We implement rigorous manual testing and automated regression suites to guarantee your software works flawlessly under extreme stress.
            </p>

            <div className="grid grid-cols-2 gap-6">
                 <div className="bg-[#060D0A] border border-emerald-900/50 p-6 rounded-2xl">
                    <Bug className="text-red-500 mb-4" size={28} />
                    <h4 className="text-3xl font-black text-white mb-1 font-sans">99.9%</h4>
                    <p className="text-sm text-gray-500 font-sans">Crash-Free Rate</p>
                 </div>
                 <div className="bg-[#060D0A] border border-emerald-900/50 p-6 rounded-2xl">
                    <Activity className="text-emerald-500 mb-4" size={28} />
                    <h4 className="text-3xl font-black text-white mb-1 font-sans">10x</h4>
                    <p className="text-sm text-gray-500 font-sans">Faster QA Cycles</p>
                 </div>
            </div>
          </div>

          {/* Right Visual: The "Automated Test Runner" Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
             <div className="w-full max-w-lg bg-[#0A0E12] border border-white/10 rounded-xl shadow-2xl overflow-hidden relative group">
                
                {/* Window Controls */}
                <div className="bg-[#151B22] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    </div>
                    <div className="text-xs text-gray-500 flex items-center gap-2">
                        <TerminalSquare size={14} /> cypress_runner.js
                    </div>
                </div>

                {/* Terminal Content (Simulated Tests) */}
                <div className="p-6 text-sm md:text-base space-y-4 font-mono">
                    <div className="text-gray-400">Running: <span className="text-white">user_authentication.spec.js</span></div>
                    
                    <div className="space-y-2 pl-4 border-l border-white/10">
                        <div className="flex items-center gap-3 text-emerald-400">
                            <CheckCircle size={16} /> <span className="text-gray-300">Should render login page</span> <span className="text-gray-600 text-xs">(12ms)</span>
                        </div>
                        <div className="flex items-center gap-3 text-emerald-400">
                            <CheckCircle size={16} /> <span className="text-gray-300">Should accept valid credentials</span> <span className="text-gray-600 text-xs">(45ms)</span>
                        </div>
                        <div className="flex items-center gap-3 text-emerald-400">
                            <CheckCircle size={16} /> <span className="text-gray-300">Should redirect to secure dashboard</span> <span className="text-gray-600 text-xs">(112ms)</span>
                        </div>
                        <div className="flex items-center gap-3 text-red-500">
                            <Bug size={16} /> <span className="text-gray-300">Should reject SQL injection</span> <span className="text-gray-600 text-xs">(Caught!)</span>
                        </div>
                        <div className="flex items-center gap-3 text-emerald-400 pt-2">
                            <ShieldAlert size={16} /> <span className="text-emerald-500 font-bold">Vulnerability patched automatically.</span>
                        </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/5 text-gray-400">
                        <span className="text-emerald-500 font-bold">4 passing</span> (2s)
                        <br />
                        <span className="text-emerald-500 animate-pulse">Ready for Production Deployment 🚀</span>
                    </div>
                </div>
             </div>
          </div>
        </div>

        {/* QA Methodology Grid */}
        <div className="mb-24">
            <h2 className="text-3xl font-bold mb-10 text-center font-sans">Comprehensive Testing Protocols</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { icon: SearchCode, title: "Automated Regression", desc: "We write Cypress and Jest scripts to ensure new code never breaks existing features." },
                { icon: Bug, title: "Manual Exploratory", desc: "Human QA engineers actively try to break your application using unpredictable user behaviors." },
                { icon: Zap, title: "Load & Stress Testing", desc: "Simulating thousands of concurrent users to ensure your servers don't crash during a launch." },
                { icon: ShieldAlert, title: "Security Auditing", desc: "Scanning for OWASP Top 10 vulnerabilities, XSS, and SQL injections before hackers find them." }
            ].map((feat, i) => (
                <div key={i} className="bg-[#050A08] border border-emerald-900/30 p-8 rounded-2xl hover:bg-[#0A120E] hover:border-emerald-500/50 transition-all duration-300 group">
                    <feat.icon className="text-emerald-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
                    <h3 className="text-xl font-bold mb-3 font-sans">{feat.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-sans">{feat.desc}</p>
                </div>
            ))}
            </div>
        </div>

        {/* The Testing Stack */}
        <div className="text-center mb-10 border-t border-emerald-900/30 pt-16">
            <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-8 font-sans">Our Testing Stack</p>
            <div className="flex flex-wrap justify-center gap-4">
                {["Cypress", "Jest", "Selenium", "Postman", "Appium", "JMeter", "BrowserStack"].map((tech, idx) => (
                    <span key={idx} className="px-6 py-3 rounded-full bg-emerald-950/30 border border-emerald-900/50 text-emerald-300 font-mono text-sm">
                        {tech}
                    </span>
                ))}
            </div>
        </div>

      </div>

      {/* Dynamic CTA using the Emerald Theme */}
      <EstimateCTA themeColor="emerald" title="Estimate Your QA Suite" />
    </div>
  );
}