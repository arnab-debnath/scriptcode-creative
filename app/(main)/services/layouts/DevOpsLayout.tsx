// src/components/services/layouts/DevOpsLayout.tsx
import React from 'react';
import { Cloud, GitBranch, Terminal, Server, ArrowLeft, RefreshCw, Cpu, Activity, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import EstimateCTA from '../../estimate/EstimateCTA';

export default function DevOpsLayout() {
  return (
    <div className="bg-[#02040A] min-h-screen text-white pt-32 font-mono relative overflow-hidden selection:bg-purple-500/30">
      
      {/* Background Ambience (Deep Cloud Blue/Purple) */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-purple-900/15 blur-[150px] rounded-[100%] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-900/10 blur-[150px] rounded-[100%] pointer-events-none"></div>

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
              <RefreshCw size={16} className="animate-spin-slow" /> Continuous Delivery
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1] font-sans">
              Automate the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Infrastructure.
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10 font-sans">
              Stop deploying manually. We architect highly available, auto-scaling cloud infrastructure and automated CI/CD pipelines so your engineering team can focus on writing code, not fighting servers.
            </p>

            <div className="grid grid-cols-2 gap-4">
                 <div className="bg-[#090C15] border border-cyan-900/50 p-5 rounded-2xl flex flex-col gap-2">
                    <Activity className="text-cyan-400" size={24} />
                    <span className="font-bold text-white text-lg font-sans">99.99%</span>
                    <span className="text-xs text-gray-500 font-sans">Guaranteed Uptime SLA</span>
                 </div>
                 <div className="bg-[#090C15] border border-purple-900/50 p-5 rounded-2xl flex flex-col gap-2">
                    <Server className="text-purple-400" size={24} />
                    <span className="font-bold text-white text-lg font-sans">Infinite</span>
                    <span className="text-xs text-gray-500 font-sans">Auto-Scaling Capacity</span>
                 </div>
            </div>
          </div>

          {/* Right Visual: The "CI/CD Pipeline" Mockup (Built with Tailwind) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
             <div className="w-full max-w-md bg-[#0D1117] border border-white/10 p-8 rounded-2xl shadow-2xl relative font-sans">
                
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
                    <Terminal className="text-cyan-400" size={20} /> Deployment Pipeline
                </h3>

                {/* Simulated CI/CD Flow */}
                <div className="space-y-3">
                    
                    {/* Step 1: Commit */}
                    <div className="bg-[#161B22] border border-white/5 p-4 rounded-xl flex items-center justify-between group hover:border-cyan-500/50 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400"><GitBranch size={20} /></div>
                            <div>
                                <h4 className="font-bold text-sm text-white">git push origin main</h4>
                                <p className="text-xs text-gray-500 mt-0.5">Triggered by developer</p>
                            </div>
                        </div>
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Success</span>
                    </div>

                    <div className="flex justify-center -my-1 opacity-50"><ArrowDown className="text-gray-600" size={16} /></div>

                    {/* Step 2: Build & Test */}
                    <div className="bg-[#161B22] border border-white/5 p-4 rounded-xl flex items-center justify-between group hover:border-purple-500/50 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400"><Cpu size={20} /></div>
                            <div>
                                <h4 className="font-bold text-sm text-white">Automated Test Suite</h4>
                                <p className="text-xs text-gray-500 mt-0.5">Running Jest & Cypress</p>
                            </div>
                        </div>
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Success</span>
                    </div>

                    <div className="flex justify-center -my-1 opacity-50"><ArrowDown className="text-gray-600" size={16} /></div>

                    {/* Step 3: Containerize (Active Step) */}
                    <div className="bg-gradient-to-r from-[#161B22] to-[#0D1117] border border-cyan-500/50 p-4 rounded-xl flex items-center justify-between relative shadow-[0_0_20px_rgba(34,211,238,0.15)] overflow-hidden">
                        {/* Scanning beam effect */}
                        <div className="absolute inset-y-0 left-0 w-1 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                        
                        <div className="flex items-center gap-4 ml-2">
                            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 animate-pulse"><Server size={20} /></div>
                            <div>
                                <h4 className="font-bold text-sm text-white">Docker Build</h4>
                                <p className="text-xs text-cyan-400 mt-0.5">Packaging container image...</p>
                            </div>
                        </div>
                        <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded animate-pulse">Running</span>
                    </div>

                    <div className="flex justify-center -my-1 opacity-50"><ArrowDown className="text-gray-600" size={16} /></div>

                    {/* Step 4: Deploy */}
                    <div className="bg-[#161B22] border border-white/5 p-4 rounded-xl flex items-center justify-between opacity-50">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-500"><Cloud size={20} /></div>
                            <div>
                                <h4 className="font-bold text-sm text-white">Deploy to Kubernetes</h4>
                                <p className="text-xs text-gray-500 mt-0.5">Rolling update strategy</p>
                            </div>
                        </div>
                        <span className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">Pending</span>
                    </div>

                </div>

             </div>
          </div>
        </div>

        {/* DevOps Capabilities Grid */}
        <div className="mb-24">
            <h2 className="text-3xl font-bold mb-10 text-center font-sans">Infrastructure Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { icon: RefreshCw, title: "CI/CD Pipelines", desc: "Automated workflows using GitHub Actions or GitLab CI to test and deploy code in minutes." },
                { icon: Server, title: "Infrastructure as Code", desc: "Provisioning servers using Terraform and Ansible so your infrastructure is version-controlled." },
                { icon: Cloud, title: "Cloud Architecture", desc: "Designing AWS, Azure, or GCP environments optimized for cost, security, and global latency." },
                { icon: Activity, title: "Monitoring & Alerts", desc: "Setting up Datadog or Prometheus to catch production errors before your users do." }
            ].map((feat, i) => (
                <div key={i} className="bg-white/[0.02] border border-cyan-900/30 p-8 rounded-2xl hover:bg-cyan-950/20 hover:border-cyan-500/50 transition-all duration-300 group">
                    <feat.icon className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform" size={32} />
                    <h3 className="text-xl font-bold mb-3 font-sans">{feat.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-sans">{feat.desc}</p>
                </div>
            ))}
            </div>
        </div>

        {/* The DevOps Stack */}
        <div className="text-center mb-10 border-t border-cyan-900/30 pt-16">
            <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-8 font-sans">The DevOps Stack</p>
            <div className="flex flex-wrap justify-center gap-4">
                {["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Linux", "Datadog", "Nginx"].map((tech, idx) => (
                    <span key={idx} className="px-6 py-3 rounded-full bg-purple-950/30 border border-purple-900/50 text-purple-300 font-mono text-sm">
                        {tech}
                    </span>
                ))}
            </div>
        </div>

      </div>

      {/* Dynamic CTA using the Purple Theme */}
      <EstimateCTA themeColor="purple" title="Architect Your Cloud" />
    </div>
  );
}