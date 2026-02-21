"use client";

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Lock, Server, FileDigit, Key, Fingerprint } from 'lucide-react';

export default function SecurityPage() {
  return (
    <div className="pt-28 md:pt-32 pb-24 px-6 max-w-7xl mx-auto">
      
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck size={40} className="text-emerald-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Security is our foundation.
        </h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
          Healthcare data is the most sensitive information in the world. Medix is architected with defense-in-depth principles to protect Protected Health Information (PHI) at every layer.
        </p>
      </div>

      {/* COMPLIANCE BADGES */}
      <div className="flex flex-wrap justify-center gap-4 mb-20">
          <div className="px-6 py-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 shadow-sm flex items-center gap-2">
              <CheckCircle2 className="text-emerald-500" size={18} /> HIPAA Compliant
          </div>
          <div className="px-6 py-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 shadow-sm flex items-center gap-2">
              <CheckCircle2 className="text-emerald-500" size={18} /> SOC 2 Type II Certified
          </div>
          <div className="px-6 py-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 shadow-sm flex items-center gap-2">
              <CheckCircle2 className="text-emerald-500" size={18} /> GDPR Compliant
          </div>
          <div className="px-6 py-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 shadow-sm flex items-center gap-2">
              <CheckCircle2 className="text-emerald-500" size={18} /> HITRUST CSF Validated
          </div>
      </div>

      {/* SECURITY ARCHITECTURE GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <Lock size={28} className="text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">End-to-End Encryption</h3>
            <p className="text-slate-600 text-sm leading-relaxed">All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Our key management system ensures keys are rotated automatically.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <Server size={28} className="text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Dedicated Infrastructure</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Medix is hosted on highly available, HIPAA-eligible AWS infrastructure with strict logical isolation between tenant databases to prevent cross-contamination.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <Fingerprint size={28} className="text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Identity & Access Management</h3>
            <p className="text-slate-600 text-sm leading-relaxed">We enforce multi-factor authentication (MFA) and support enterprise Single Sign-On (SAML/SSO). Role-based access control (RBAC) follows the principle of least privilege.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <FileDigit size={28} className="text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Audit Logging</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Every action within the Medix platform is securely logged. Administrators have full visibility into who accessed PHI, when, and from what IP address.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm md:col-span-2 relative overflow-hidden flex items-center">
            <div className="absolute inset-0 bg-slate-900 z-0"></div>
            {/* Optional abstract security background image */}
            <div className="absolute inset-0 opacity-20 z-0">
                 <Image 
                    src="/industries/industries-demos/healthcare-demo/security-infrastructure.png"
                    alt="Abstract Security Network"
                    fill
                    className="object-cover"
                />
            </div>
            
            <div className="relative z-10 text-white p-4">
                <Key size={32} className="text-emerald-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Penetration Tested Continuously</h3>
                <p className="text-slate-300 max-w-md mb-6 text-sm leading-relaxed">Our infrastructure undergoes rigorous manual penetration testing by independent third-party cybersecurity firms bi-annually, alongside automated daily vulnerability scanning.</p>
                <button className="text-sm font-bold text-emerald-400 border border-emerald-400/50 px-4 py-2 rounded-full hover:bg-emerald-400/10 transition-colors">
                    Download Latest SOC 2 Report
                </button>
            </div>
        </div>

      </div>
    </div>
  );
}

// Ensure you import CheckCircle2 from lucide-react (Added here for the missing import in the badges)
import { CheckCircle2 } from 'lucide-react';