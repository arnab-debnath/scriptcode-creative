"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  Code2, Globe, Smartphone, Terminal, PenTool, MonitorSmartphone, 
  CheckCircle, Eye, ShieldCheck, Briefcase, BarChart, MoreHorizontal,
  Paperclip, Loader2, Sparkles, LucideIcon 
} from 'lucide-react';
import emailjs from '@emailjs/browser';

// 1. Updated Service List to match your Engineering Architecture
type ServiceItem = {
  id: string;
  name: string;
  icon: LucideIcon;
};

const services: ServiceItem[] = [
  { id: 'custom-software', name: 'Custom Software', icon: Code2 },
  { id: 'web-development', name: 'Web Development', icon: Globe },
  { id: 'mobile-development', name: 'Mobile Apps', icon: Smartphone },
  { id: 'devops-as-a-service', name: 'DevOps & Cloud', icon: Terminal },
  { id: 'ui-ux-design', name: 'UI/UX Design', icon: PenTool },
  { id: 'code-audit', name: 'Code Audit', icon: ShieldCheck },
  { id: 'quality-assurance', name: 'QA Testing', icon: CheckCircle },
  { id: 'it-consulting', name: 'IT Consulting', icon: Briefcase },
  { id: 'other', name: 'Other / Custom', icon: MoreHorizontal },
];

const budgets = [
  "< $5,000", 
  "$5,000 - $15,000", 
  "$15,000 - $50,000", 
  "$50,000+"
];

function EstimateFormContent() {
  const searchParams = useSearchParams();
  
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', message: '', link: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // AUTO-FILL LOGIC: Reads the URL (e.g., /estimate?service=devops-as-a-service)
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam && services.some(s => s.id === serviceParam)) {
      setSelectedServices([serviceParam]);
    }
  }, [searchParams]);

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Map IDs back to readable names for the email
    const readableServices = selectedServices
        .map(id => services.find(s => s.id === id)?.name)
        .filter(Boolean)
        .join(", ");

    const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: readableServices || "None Selected", 
        budget: selectedBudget || "Not Specified",
        message: formData.message,
        link: formData.link,
    };

    try {
        await emailjs.send(
            'service_paa3prc',            
            'template_7la5mg7',           
            templateParams,
            '2qlYhtRtoHlKTCyz9'           
        );
        alert("Estimate Request Sent! We'll be in touch shortly.");
        setFormData({ name: '', email: '', phone: '', message: '', link: '' });
        setSelectedServices([]);
        setSelectedBudget("");
    } catch (error) {
        console.error(error);
        alert("Failed to send. Please try again or email us directly.");
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#010506] text-white min-h-screen pt-32 pb-20 px-6 overflow-hidden selection:bg-red-500/30">
      
      {/* Background Ambience (Updated to red/blue engineering theme) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        
        {/* LEFT COLUMN: The Interactive Form */}
        <div className="lg:col-span-8">
            <div className="mb-10">
                <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
                    Estimate Your <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">Architecture.</span>
                </h1>
                <p className="text-gray-400 text-lg">
                    Select your engineering requirements below to help us calculate a precise timeline and budget.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-12">
                
                {/* 1. Services Grid */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm border border-white/10">1</span>
                        What are we building?
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {services.map((service) => {
                            const isSelected = selectedServices.includes(service.id);
                            const Icon = service.icon; 
                            
                            return (
                                <div 
                                    key={service.id}
                                    onClick={() => toggleService(service.id)}
                                    className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center gap-3 text-center group ${
                                        isSelected 
                                            ? "bg-blue-600/20 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]" 
                                            : "bg-[#0B1215] border-white/10 hover:bg-white/5 hover:border-white/20"
                                    }`}
                                >
                                    <Icon size={32} className={`transition-colors ${isSelected ? "text-blue-400" : "text-gray-500 group-hover:text-white"}`} />
                                    <span className={`font-medium text-sm md:text-base ${isSelected ? "text-white" : "text-gray-400 group-hover:text-white"}`}>
                                        {service.name}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* 2. Budget Selection */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm border border-white/10">2</span>
                        Expected Budget
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {budgets.map((budget) => (
                            <div 
                                key={budget}
                                onClick={() => setSelectedBudget(budget)}
                                className={`cursor-pointer py-4 px-2 rounded-xl border text-center text-sm font-bold transition-all ${
                                    selectedBudget === budget
                                        ? "bg-red-500/20 border-red-500 text-red-400"
                                        : "bg-[#0B1215] border-white/10 text-gray-400 hover:border-white/30"
                                }`}
                            >
                                {budget}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Project Details */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm border border-white/10">3</span>
                        Technical Details
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} className="w-full bg-[#0B1215] border border-white/10 rounded-lg p-4 text-white focus:border-blue-500 outline-none transition-colors" />
                        <input type="email" name="email" placeholder="Work Email" required value={formData.email} onChange={handleChange} className="w-full bg-[#0B1215] border border-white/10 rounded-lg p-4 text-white focus:border-blue-500 outline-none transition-colors" />
                        <input type="tel" name="phone" placeholder="Phone Number (Optional)" value={formData.phone} onChange={handleChange} className="w-full bg-[#0B1215] border border-white/10 rounded-lg p-4 text-white focus:border-blue-500 outline-none transition-colors md:col-span-2" />
                    </div>
                    
                    <textarea name="message" rows={5} placeholder="Describe your architecture requirements, goals, or current bottlenecks..." value={formData.message} onChange={handleChange} className="w-full bg-[#0B1215] border border-white/10 rounded-lg p-4 text-white focus:border-blue-500 outline-none transition-colors resize-none mb-4"></textarea>

                    <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors">
                            <Paperclip size={18} />
                        </div>
                        <input type="url" name="link" placeholder="Paste link to technical docs, Figma, or codebase (Optional)" value={formData.link} onChange={handleChange} className="w-full bg-[#0B1215] border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white focus:border-blue-500 outline-none transition-colors" />
                    </div>
                </div>

                {/* Submit Button */}
                <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-gradient-to-r from-blue-600 to-red-600 rounded-xl font-black uppercase tracking-widest text-lg hover:scale-[1.01] active:scale-[0.99] transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? <><Loader2 className="animate-spin" /> Compiling...</> : <><Sparkles /> Request Architecture Estimate</>}
                </button>
            </form>
        </div>

        {/* RIGHT COLUMN: The Roadmap */}
        <div className="lg:col-span-4 space-y-8 mt-12 lg:mt-0">
            <div className="bg-[#0B1215] border border-white/10 p-8 rounded-3xl sticky top-32">
                <h3 className="text-xl font-bold text-white mb-8">The Engineering Process</h3>
                <div className="relative space-y-8 pl-8 border-l border-white/10">
                    <div className="relative">
                        <div className="absolute -left-[39px] top-0 w-5 h-5 rounded-full bg-blue-500 border-4 border-[#0B1215]"></div>
                        <h4 className="font-bold text-white mb-2">1. Technical Audit</h4>
                        <p className="text-sm text-gray-400">Our senior architects review your brief and assess feasibility.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[39px] top-0 w-5 h-5 rounded-full bg-purple-500 border-4 border-[#0B1215]"></div>
                        <h4 className="font-bold text-white mb-2">2. Architecture Call</h4>
                        <p className="text-sm text-gray-400">A 30-min deep dive into tech stacks, scaling requirements, and security.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[39px] top-0 w-5 h-5 rounded-full bg-red-500 border-4 border-[#0B1215]"></div>
                        <h4 className="font-bold text-white mb-2">3. Detailed Blueprint</h4>
                        <p className="text-sm text-gray-400">You receive a scope of work, timeline, and exact budget.</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}

// Wrap in Suspense because we are using useSearchParams()
export default function EstimatePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#010506] flex items-center justify-center text-white"><Loader2 className="animate-spin" /></div>}>
      <EstimateFormContent />
    </Suspense>
  );
}