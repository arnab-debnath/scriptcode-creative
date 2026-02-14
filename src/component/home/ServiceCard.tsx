// src/components/home/ServiceCard.tsx
import React from 'react';
import { ArrowUpRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
    icon?: LucideIcon; // Type for the icon component
    type?: string;     // Added 'type' prop as it was passed in ServicesGrid
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, icon: Icon, type }) => {
    return (
        <section className="group relative w-full h-[320px] md:h-[280px] rounded-2xl overflow-hidden border border-white/10 bg-[#060b10]">

            {/* 1. BACKGROUND IMAGE OVERLAY */}
            <div className="absolute inset-0">
                <img 
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover opacity-70 group-hover:scale-110 group-hover:opacity-50 transition duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020609] via-[#020609]/60 to-transparent"></div>
            </div>

            {/* 2. CONTENT */}
            <div className="relative z-10 h-full p-8 flex flex-col justify-end items-start">
                
                {/* FLOATING ICON BOX */}
                <div className="mb-auto -mt-2 p-4 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.5)] transition-all">
                    {Icon ? <Icon size={24} className="text-cyan-400" /> : <span className="text-2xl"></span>}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                    {title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                    {description}
                </p>

                 {/* Link */}
                 <div className="flex items-center gap-2 text-sm font-bold text-red-500 group-hover:text-white transition-colors">
                    <span>Explore Service</span>
                    <ArrowUpRight size={16} />
                 </div>
            </div>
        </section>
    );
};

export default ServiceCard;