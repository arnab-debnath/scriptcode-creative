// src/components/home/IndustryCard.tsx
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

// Define the interface for props
interface Tag {
    name: string;
    link: string;
}

interface RelatedSite {
    name: string;
    link: string;
}

interface IndustryCardProps {
    name: string;
    image: string;
    description: string;
    tags?: Tag[];
    relatedSite?: RelatedSite;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ name, image, description, tags, relatedSite }) => {
  return (
    <div className="group bg-[#0B1215] border border-gray-800 rounded-2xl p-2 md:p-4 flex flex-col items-start h-full hover:border-gray-600 transition duration-300">
      
      {/* 1. IMAGE SECTION */}
      <div className='w-full overflow-hidden rounded-xl mb-6'>
        <img 
            src={image} 
            alt={name}
            className="w-full h-52 object-cover transform group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* 2. TITLE & DESCRIPTION */}
      <h3 className="text-2xl font-bold text-white mb-3">
        {name}  
      </h3>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* 3. TAGS / SUB-LINKS */}
      {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-4 mb-6">
            {tags.map((tag, index) => (
                <Link 
                    key={index} 
                    href={tag.link}
                    className="flex items-center text-xs font-medium text-gray-300 hover:text-white transition-colors"
                >
                    {tag.name}
                    <ArrowUpRight size={12} className="ml-1 text-gray-500" />
                </Link>
            ))}
          </div>
      )}

      {/* 4. RELATED SITES */}
        {relatedSite && relatedSite.name && (
        <div className="mt-auto pt-2">
            <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
                Related Sites
            </p>
                <Link 
                    href={relatedSite.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-gray-700 hover:bg-gray-600 text-gray-200 text-xs font-semibold px-4 py-1.5 rounded-full transition-colors"
                >
                    {relatedSite.name}
                </Link>
        </div>
        )}
      
    </div>
  );
};

export default IndustryCard;