// page.tsx
import React, { Suspense } from 'react';
import { Mail, MapPin, MessageCircle, Code2, Loader2 } from 'lucide-react';
import type { Metadata } from 'next';
import ContactForm from './ContactForm'; // Importing the client component we just made

export const metadata: Metadata = {
  title: 'Contact Our Engineering Team',
  description: 'Ready to build scalable, high-performance software? Share your project requirements with our engineering team. Based in India, engineering globally.',
  keywords: ['contact software agency', 'hire software engineers India', 'custom software development inquiry', 'IT consulting contact', 'enterprise software developers'],
};

export default function ContactPage() {
  return (
    <div className="bg-[#02040A] text-white min-h-screen pt-32 pb-24 px-6 overflow-hidden relative">
      
      {/* Refined Technical Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
        
        {/* LEFT COLUMN: Info */}
        <div className="lg:col-span-5 space-y-10">
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
                    <Code2 size={16} /> Engineering Solutions
                </div>
                <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                    Architect Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        Next Advantage.
                    </span>
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Ready to build scalable, high-performance software? Share your project requirements with our engineering team, and we&apos;ll help you map out the perfect architecture.
                </p>
            </div>

            {/* Direct Contact Cards - Cleaner UI */}
            <div className="space-y-4">
                <a href="mailto:scriptcode.innovation@gmail.com" className="flex items-center gap-5 p-5 rounded-2xl bg-[#0D1117] border border-white/5 hover:border-blue-500/30 transition-all group cursor-pointer">
                    <div className="p-3 bg-white/5 rounded-xl text-gray-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-all">
                        <Mail size={22} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium mb-1">Email Our Team</p>
                        <p className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">scriptcode.innovation@gmail.com</p>
                    </div>
                </a>

                <a href="https://wa.me/918100300910" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-5 rounded-2xl bg-[#0D1117] border border-white/5 hover:border-green-500/30 transition-all group cursor-pointer">
                    <div className="p-3 bg-white/5 rounded-xl text-gray-400 group-hover:text-green-400 group-hover:bg-green-500/10 transition-all">
                        <MessageCircle size={22} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium mb-1">Direct WhatsApp (Fastest)</p>
                        <p className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">+91 8100 300 910</p>
                    </div>
                </a>
            </div>

            <div className="flex items-center gap-3 text-gray-500 text-sm pt-4">
                <MapPin size={18} className="text-blue-500" />
                <span>Based in India, Engineering Globally.</span>
            </div>
        </div>

        {/* RIGHT COLUMN: The Form */}
        <div className="lg:col-span-7 bg-[#050810] p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative">
            <h3 className="text-2xl font-bold mb-8 text-white">Project Inquiry</h3>
            <Suspense fallback={
                <div className="h-96 flex items-center justify-center text-gray-500 flex-col gap-4">
                    <Loader2 className="animate-spin text-blue-500" size={32} />
                    <p>Loading secure form...</p>
                </div>
            }>
                {/* The client component is rendered here safely */}
                <ContactForm /> 
            </Suspense>
        </div>

      </div>
    </div>
  );
}