// src/components/home/ContactSection.tsx
"use client";

import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { Loader2, Paperclip, X } from "lucide-react";

const ContactSection: React.FC = () => {
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // UPDATED: Now stores the actual File object, not just the string name
    const [file, setFile] = useState<File | null>(null); 

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const services: string[] = [
        "Custom Software",
        "Web Applications",
        "Mobile Apps",
        "Cloud & DevOps",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // UPDATED: Capture the File object
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // ==========================================
            // TODO: FUTURE API FILE UPLOAD LOGIC HERE
            // ==========================================
            let fileUrl = ""; 
            if (file) {
                // Example of how you will send this to your future API:
                /*
                const uploadData = new FormData();
                uploadData.append("file", file);
                
                const uploadResponse = await fetch("/api/upload", {
                    method: "POST",
                    body: uploadData,
                });
                const result = await uploadResponse.json();
                fileUrl = result.fileUrl; // Get the secure URL from your DB/Storage
                */
               console.log("Ready to upload file:", file.name);
            }
            // ==========================================

            // EmailJS Payload
            const templateParams = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                service: selectedService || "Not specified",
                message: formData.message,
                // Uncomment this once your API is ready so the link goes to your email:
                // attached_file_link: fileUrl || "No file attached", 
            };

            // Send notification via EmailJS
            await emailjs.send(
                'service_paa3prc',                 
                'template_7la5mg7',     
                templateParams,
                '2qlYhtRtoHlKTCyz9'       
            );

            alert(`Thank you ${formData.name}! We will get back to you shortly.`);
            
            // Reset Form
            setFormData({ name: '', email: '', phone: '', message: '' });
            setSelectedService(null);
            setFile(null); 

        } catch (error) {
            console.error('FAILED...', error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="w-full bg-[#02040A] border-t border-white/5 py-32">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
                
                {/* LEFT SIDE */}
                <div>
                    <h2 className="text-5xl md:text-7xl font-bold leading-tight relative text-white tracking-tight">
                        Ready to build <br />
                        Next <span className="text-blue-500">—</span> Gen <br />
                        Software<span className="text-blue-500">?</span>
                    </h2>
                    <p className="text-gray-400 mt-6 max-w-sm text-lg">
                        Tell us about your project. Our engineering team is ready to architect your solution.
                    </p>
                </div>
                
                {/* RIGHT SIDE */}
                <div>
                    {/* SERVICE OPTIONS */}
                    <div className="flex flex-wrap gap-3 mb-10">
                        {services.map((service, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => setSelectedService(service)}
                                className={`border rounded-lg px-5 py-3 text-sm font-medium transition-all duration-300
                                    ${selectedService === service 
                                        ? "bg-blue-600 text-white border-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]" 
                                        : "bg-transparent text-gray-300 border-gray-700 hover:bg-blue-500/10 hover:border-blue-500 hover:text-white"
                                    }`}
                            >
                                {service}
                            </button>
                        ))}
                    </div>

                    {/* CONTACT FORM */}
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <input 
                            type="text" 
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                        <input 
                            type="email" 
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                        <input 
                            type="tel" 
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="w-full bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                        <textarea 
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="How can we help you?"
                            rows={4}
                            className="w-full bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        ></textarea>

                        {/* FILE ATTACHMENT UI */}
                        <div className="flex justify-between items-center text-sm">
                            <label className="cursor-pointer text-gray-500 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                <Paperclip size={16} className="group-hover:rotate-12 transition-transform" />
                                {/* Render the file name if a file is selected */}
                                <span>{file ? file.name : "Attach a file (— max size 20MB)"}</span>
                                <input 
                                    type="file" 
                                    className="hidden" 
                                    onChange={handleFileChange}
                                    accept=".pdf,.doc,.docx,.jpg,.png,.zip"
                                />
                            </label>
                            
                            {file && (
                                <button 
                                    type="button" 
                                    onClick={() => setFile(null)}
                                    className="text-red-400 hover:text-red-300 flex items-center gap-1"
                                >
                                    <X size={14} /> Remove
                                </button>
                            )}
                        </div>
                        
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full border border-blue-500 text-white font-semibold py-4 rounded-lg hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        >
                            {isSubmitting ? <><Loader2 className="animate-spin" size={18}/> Sending...</> : "Let's build it"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;