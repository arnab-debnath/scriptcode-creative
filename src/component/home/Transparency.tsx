// src/components/home/Transparency.tsx
import React from 'react';

const Transparency: React.FC = () => {
    return (
        <section className="max-w-6xl px-6 py-32 relative  overflow-hidden">

            {/* Title */}
            <div className="mb-16">
                <div className="flex items-center gap-4 mb-4">
                    <span className="w-8 md:w-16 h-1 bg-red-500 block"></span>
                    <h2 className="text-2xl md:text-5xl font-semibold">
                        Transparency at Our  Core
                    </h2>
                    <svg className="absolute left-16 md:left-82 w-[250px] h-[150px] md:w-[450px] md:h-[350px] rotate-170 animate-fadeOrbit float" 
                            viewBox="0 0 500 250"
                            fill="none"
                            >
                            <ellipse cx="250" cy="125" rx="200" ry="80" stroke="white" strokeWidth="1" opacity="0.7" />
                            <ellipse cx="250" cy="130" rx="190" ry="80" stroke="white" strokeWidth="1" opacity="0.4" />
                        </svg>
                </div>
            </div>
            {/* Content */}
            <div className="relative">
                {/*Curly Braces*/}
                <div className="absolute -left-2 md:left-24 top-0 text-red-500 text-6xl md:text-8xl font-light">
                    {"{"}
                </div>

                {/*Main Text*/}
                <div className="pl-6 md:pl-48">
                    <p className="text-2xl md:text-4xl font-medium leading-snug max-w-3xl">
                        We make our <br />
                        process <br />
                        transparent and <br />
                        our progress <br />
                        easy to follow— <br />
                        so you’re always <br />
                        in the loop
                        <span className="text-red-500 ml-2 blink-cursor">|</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Transparency;