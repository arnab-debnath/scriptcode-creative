// src/components/home/ContactSection.tsx
"use client";

import React, { useState } from "react";

const ContactSection: React.FC = () => {
    const [selectedService, setSelectedService] = useState<string | null>(null);

    const services: string[] = [
        "Web Development",
        "CMS Website",
        "E-commerce Stores",
        "Digital Markeing",
    ];

    return (
        <section className="w-full bg-[#071b23] py-32">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
                {/* LEFT SIDE */}
                <div>
                    <h2 className="text-4xl md:text-6xl font-semibold leading-tight relative">
                        Ready to build <br />
                        Game <span className="text-red-500">—</span> Changing <br />
                        Apps<span className="text-red-500">?</span>
                    </h2>
                </div>
                
                {/* RIGHT SIDE */}
                <div>
                    {/* SERVICE OPTIONS */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        {services.map((service, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => setSelectedService(service)}
                                className={`border rounded-lg p-4 text-sm ml-2 mb-2 transition 
                                    ${selectedService === service 
                                        ? "bg-red-500 text-white border-red-500" 
                                        : "bg-transparent text-white border-gray-600 hover:bg-red-500/10 hover:border-red-500"
                                    }`}
                            >
                                {service}
                            </button>
                        ))}
                    </div>
                    {/* CONTACT FORM */}
                    <form className="space-y-6">
                        <input 
                            type="text" 
                            placeholder="Your Name"
                            className="w-full bg-transparent border-b border-gray-600 py-3 focus:outline-none focus:border-red-500"
                        />
                        <input 
                            type="email" 
                            placeholder="Your Email"
                            className="w-full bg-transparent border-b border-gray-600 py-3 focus:outline-none focus:border-red-500"
                        />
                        <input 
                            type="text" 
                            placeholder="Phone Number"
                            className="w-full bg-transparent border-b border-gray-600 py-3 focus:outline-none focus:border-red-500"
                        />
                        <textarea 
                            placeholder="How can we help you?"
                            rows={4}
                            className="w-full bg-transparent border-b border-gray-600 py-3 focus:outline-none focus:border-red-500"
                        ></textarea>

                        <div className="flex justify-between items-center text-sm text-gray-400">
                            <span>Attach a file (— max size 20MB)</span>
                            <input type="file" className="hidden" />
                        </div>
                        <button
                            type="submit"
                            className="w-full border border-red-500 py-4 rounded-lg hover:bg-red-500/10 transition"
                        >
                            Let's build it
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;