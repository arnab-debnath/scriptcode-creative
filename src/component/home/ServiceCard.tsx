// src/components/home/ServiceCard.tsx
import React from 'react';
import { ArrowUpRight, LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
    id: string;          // Required for internal routing
    title: string;
    description: string;
    image: string;
    icon?: LucideIcon;
    externalLink?: string; // Correctly defined in props
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, image, icon: Icon, externalLink }) => {
    const isExternal = !!externalLink;

    // We define the inner content once to keep the code clean
    const CardInner = (
        <section className="group relative w-full h-[320px] md:h-[280px] rounded-2xl overflow-hidden border border-white/10 bg-[#060b10] cursor-pointer">
            <div className="absolute inset-0">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020609] via-[#020609]/60 to-transparent"></div>
            </div>
            
            <div className="relative z-10 h-full p-8 flex flex-col justify-end items-start">
                <div className="mb-auto -mt-2 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                    {Icon && <Icon size={24} className="text-cyan-400" />}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    {title}
                </h3>
                
                <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                    {description}
                </p>

                <div className="flex items-center gap-2 text-sm font-bold text-red-500 group-hover:text-white transition-colors">
                    <span>{isExternal ? "Visit Digital Agency" : "Explore Service"}</span>
                    <ArrowUpRight size={16} />
                </div>
            </div>
        </section>
    );

    // LOGIC: If externalLink exists, use <a>, otherwise use Next.js <Link>
    if (isExternal) {
        return (
            <a href={externalLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                {CardInner}
            </a>
        );
    }

    return (
        <Link href={`/services/${id}`} className="block w-full">
            {CardInner}
        </Link>
    );
};

export default ServiceCard;