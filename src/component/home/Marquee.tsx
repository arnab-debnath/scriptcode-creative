// src/components/home/Marquee.tsx
import React from 'react';

interface MarqueeProps {
    text: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text }) => {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 py-3">
        <div className="whitespace-nowrap animate-marquee text-white font-semibold text-lg">
        {text} &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; {text} &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; {text} &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; {text}
        </div>
    </div>
  );
};

export default Marquee;