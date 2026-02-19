import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | ScriptCODE',
  description: 'Terms of Service for ScriptCODE Innovation and ScriptCODE .Creative',
};

export default function TermsOfService() {
  return (
    <div className="bg-[#030305] min-h-screen text-gray-300 pt-32 pb-24 px-6 font-sans selection:bg-blue-500 selection:text-white">
      <div className="max-w-3xl mx-auto">
        
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 text-sm font-bold uppercase tracking-widest">
            <ArrowLeft size={16} /> Back to Home
        </Link>

        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">Terms of Service.</h1>
        <p className="text-sm text-blue-400 mb-12 uppercase tracking-widest font-bold">Last Updated: February 2026</p>
        
        <div className="space-y-10 text-lg leading-relaxed">
            <section>
                <p>
                    Welcome to ScriptCODE. These terms of service outline the rules and regulations for the use of ScriptCODE Innovation and ScriptCODE .Creative's websites and services. By accessing this website and engaging our services, we assume you accept these terms and conditions. Do not continue to use ScriptCODE if you do not agree to take all of the terms and conditions stated on this page.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Services Rendered</h2>
                <p>
                    ScriptCODE provides custom software engineering, web development, IT consulting, and digital marketing services. The specific scope, deliverables, timelines, and fees for any project will be outlined in a separate Statement of Work (SOW) or formal agreement signed by both parties. 
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property</h2>
                <p>
                    Unless otherwise stated, ScriptCODE and/or its licensors own the intellectual property rights for all material on our websites. All intellectual property rights are reserved. 
                    <br/><br/>
                    For client projects, upon full and final payment of all invoices, the intellectual property rights of the final deliverables (source code, designs, and marketing assets) will be transferred to the client, subject to any open-source licenses or third-party tools used during development.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
                <p className="mb-4">When working with us or using our site, you agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li>Republish material from our site without prior consent.</li>
                    <li>Sell, rent, or sub-license material from ScriptCODE.</li>
                    <li>Use our services or code to conduct illegal, fraudulent, or harmful activities.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
                <p>
                    In no event shall ScriptCODE, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of our website or services, whether such liability is under contract. ScriptCODE shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law & Jurisdiction</h2>
                <p>
                    These Terms will be governed by and interpreted in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.
                </p>
            </section>
        </div>
      </div>
    </div>
  );
}