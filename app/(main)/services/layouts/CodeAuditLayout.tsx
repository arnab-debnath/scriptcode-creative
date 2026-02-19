// src/components/services/layouts/CodeAuditLayout.tsx
import React from 'react';
import { Search, ShieldAlert, FileCode2, Activity, ArrowLeft, AlertTriangle, Lock, Gauge } from 'lucide-react';
import Link from 'next/link';
import EstimateCTA from '../../estimate/EstimateCTA';

export default function CodeAuditLayout() {
  return (
    <div className="bg-[#03070C] min-h-screen text-white pt-32 font-mono relative overflow-hidden selection:bg-cyan-500/30">
      
      {/* Background Ambience (Deep scanner blue) */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-cyan-900/10 blur-[150px] rounded-[100%] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Navigation */}
        <Link href="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-cyan-400 mb-12 transition-colors font-bold uppercase tracking-widest text-xs font-sans">
          <ArrowLeft size={16} /> Back to Services
        </Link>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-32">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-6 font-sans text-xs uppercase tracking-widest font-bold">
              <Search size={16} /> Deep-Dive Diagnostics
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1] font-sans">
              Uncover the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Technical Truth.
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10 font-sans">
              Is your codebase a ticking time bomb? We perform forensic-level audits to uncover hidden security vulnerabilities, technical debt, and architectural bottlenecks before they break your business.
            </p>

            <div className="flex flex-wrap gap-4">
                 <div className="bg-[#0A121A] border border-cyan-900/50 px-6 py-4 rounded-xl flex items-center gap-4">
                    <ShieldAlert className="text-amber-500" size={24} />
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-sans font-bold">Security</p>
                        <p className="font-bold text-white font-sans">OWASP Top 10</p>
                    </div>
                 </div>
                 <div className="bg-[#0A121A] border border-cyan-900/50 px-6 py-4 rounded-xl flex items-center gap-4">
                    <Activity className="text-blue-500" size={24} />
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-sans font-bold">Performance</p>
                        <p className="font-bold text-white font-sans">O(n) Optimization</p>
                    </div>
                 </div>
            </div>
          </div>

          {/* Right Visual: The "Code Scanner" Mockup (Built with Tailwind) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
             <div className="w-full max-w-lg bg-[#0D1117] border border-white/10 rounded-xl shadow-2xl overflow-hidden relative group">
                
                {/* Simulated Scanner Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)] animate-[scan_3s_ease-in-out_infinite] z-20 opacity-50"></div>

                {/* Editor Header */}
                <div className="bg-[#161B22] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="text-xs text-gray-500 flex items-center gap-2">
                        <FileCode2 size={14} /> api/controllers/auth.ts
                    </div>
                </div>

                {/* Editor Body with "Caught" Vulnerabilities */}
                <div className="p-6 text-xs md:text-sm font-mono overflow-hidden">
                    <div className="flex text-gray-500 mb-1"><span className="w-8 text-right pr-4">12</span> <span className="text-purple-400">export const</span> <span className="text-blue-400">loginUser</span> = <span className="text-purple-400">async</span> (req, res) {`=>`} {`{`}</div>
                    <div className="flex text-gray-500 mb-1"><span className="w-8 text-right pr-4">13</span> &nbsp;&nbsp;<span className="text-purple-400">const</span> {`{`} email, password {`}`} = req.body;</div>
                    
                    {/* The Bug Line */}
                    <div className="relative mt-2">
                        <div className="absolute inset-0 bg-red-500/10 border-y border-red-500/30 -mx-6 px-6 pointer-events-none"></div>
                        <div className="flex text-gray-300 relative z-10 py-1">
                            <span className="w-8 text-right pr-4 text-red-500 font-bold">14</span> 
                            &nbsp;&nbsp;<span className="text-purple-400">const</span> user = <span className="text-purple-400">await</span> db.query(<span className="text-green-400">`SELECT * FROM users WHERE email = '`</span> + email + <span className="text-green-400">`'`</span>);
                        </div>
                    </div>
                    
                    {/* The Tooltip / Warning */}
                    <div className="ml-12 mt-2 mb-4 bg-red-950/50 border border-red-900 rounded p-3 text-red-300 flex gap-3 relative z-10">
                        <AlertTriangle size={16} className="shrink-0 mt-0.5 text-red-500" />
                        <div>
                            <span className="font-bold text-red-400">CRITICAL: SQL Injection Vulnerability</span>
                            <br/>
                            <span className="text-gray-400 mt-1 block">Unsanitized user input directly concatenated into SQL query. Use parameterized queries immediately.</span>
                        </div>
                    </div>

                    <div className="flex text-gray-500 mb-1"><span className="w-8 text-right pr-4">15</span> &nbsp;&nbsp;<span className="text-purple-400">if</span> (!user) <span className="text-purple-400">return</span> res.status(<span className="text-orange-400">404</span>).send(<span className="text-green-400">'Not Found'</span>);</div>
                    <div className="flex text-gray-500 mb-1"><span className="w-8 text-right pr-4">16</span> {`}`}</div>
                </div>

                {/* Audit Score Footer */}
                <div className="bg-[#161B22] border-t border-white/5 p-4 flex justify-between items-center text-xs font-sans">
                    <div className="flex gap-4">
                        <span className="flex items-center gap-1 text-red-400"><Lock size={14}/> Sec Rating: F</span>
                        <span className="flex items-center gap-1 text-amber-400"><Gauge size={14}/> Debt: 45 Days</span>
                    </div>
                    <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">Analysis Complete</span>
                </div>
             </div>
          </div>
        </div>

        {/* Audit Methodology Grid */}
        <div className="mb-24">
            <h2 className="text-3xl font-bold mb-10 text-center font-sans">What We Analyze</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { icon: ShieldAlert, title: "Security Vulnerabilities", desc: "We scan for SQL injections, XSS, exposed API keys, and insecure authentication flows." },
                { icon: FileCode2, title: "Architecture Review", desc: "Analyzing microservices, database schemas, and state management for infinite scalability." },
                { icon: Gauge, title: "Performance Profiling", desc: "Identifying memory leaks, expensive database queries, and massive render blocking payloads." },
                { icon: AlertTriangle, title: "Technical Debt", desc: "A comprehensive report detailing bad practices, missing tests, and outdated dependencies." }
            ].map((feat, i) => (
                <div key={i} className="bg-white/[0.02] border border-cyan-900/30 p-8 rounded-2xl hover:bg-cyan-950/20 hover:border-cyan-500/50 transition-all duration-300 group">
                    <feat.icon className="text-cyan-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
                    <h3 className="text-xl font-bold mb-3 font-sans">{feat.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-sans">{feat.desc}</p>
                </div>
            ))}
            </div>
        </div>

        {/* The Auditing Stack */}
        <div className="text-center mb-10 border-t border-cyan-900/30 pt-16">
            <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-8 font-sans">Our Forensic Tools</p>
            <div className="flex flex-wrap justify-center gap-4">
                {["SonarQube", "Snyk", "AWS Inspector", "ESLint", "Datadog", "New Relic", "Burp Suite"].map((tech, idx) => (
                    <span key={idx} className="px-6 py-3 rounded-full bg-cyan-950/30 border border-cyan-900/50 text-cyan-300 font-mono text-sm">
                        {tech}
                    </span>
                ))}
            </div>
        </div>

      </div>

      {/* Dynamic CTA using the Cyan Theme */}
      <EstimateCTA themeColor="cyan" title="Request a Codebase Audit" />
      
      {/* Required CSS for the Scanner Line Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
            0%, 100% { top: 0; opacity: 0; }
            10% { opacity: 1; }
            90% { top: 100%; opacity: 1; }
        }
      `}} />
    </div>
  );
}