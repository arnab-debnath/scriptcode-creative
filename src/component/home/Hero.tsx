// src/components/home/Hero.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
const Hero: React.FC = () => {
    // const [showIntro, setShowIntro] = useState(true);
    // const [fadeOut, setFadeOut] = useState(false);

    // useEffect(() => {
    //     const timer1 = setTimeout(() => {
    //         setFadeOut(true);
    //     }, 1000); 

    //     const timer2 = setTimeout(() => {
    //         setShowIntro(false);
    //     }, 1000);

    //     return () => {
    //         clearTimeout(timer1);
    //         clearTimeout(timer2);
    //     };
    // }, []);

    return (
        <>
            {/* {showIntro && (
                <div className={`fixed inset-0 z-[60] bg-black flex items-center justify-center transition-opacity duration-1000 ease-out ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
                    <video 
                        autoPlay 
                        muted 
                        playsInline 
                        className="w-full object-cover"
                    >
                        <source src="/videos/intro.mp4" type="video/mp4" />
                    </video>
                </div>
            )} */}

            {/* ORIGINAL HERO SECTION */}
            <section className="relative min-h-screen w-full bg-gradient-to-r from-[#062b30] to-[#071B23] text-white overflow-hidden flex flex-col justify-center">
            
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-32 pb-20 md:py-25 grid md:grid-cols-2 gap-12 md:gap-0">
                    
                    {/* LEFT SIDE */}
                    <div className="flex flex-col justify-center md:justify-start items-start z-10 relative">
                        <h1 className="text-4xl md:text-6xl lg:text-8xl font-normal leading-[1.1] tracking-wide">
                            Transforming
                            <br />
                            <span className="relative inline-block">
                                Ideas
                                {/* Red Line */}
                                <span className="block absolute left-full top-1/2 mt-3 -translate-y-1/2 ml-4 w-full h-1 bg-gradient-to-r from-red-500 to-red-900"></span>
                            </span>
                            <br />
                            Into Digital
                            <br />
                            <span className="relative inline-block">
                                Success
                                {/* Dots */}
                                <span className="relative inline-block after:absolute after:top-1/2 after:-translate-y-1/2 after:translate-x-1/2 after:right-0 after:mr-2 after:w-1 after:h-1 md:after:w-2 md:after:h-2 after:bg-gradient-to-r after:from-red-500 after:to-red-900 ml-4"></span>
                            </span>
                        </h1>
                    </div>

                    {/* RIGHT SIDE */}
                    
                    <div className="relative flex flex-col items-end justify-center md:justify-end md:pr-10 lg:pr-10 mt-1 md:mt-64">
                        
                        {/* WRAPPER for Text & SVG */}
                            <Link href="/services">
                        <div className="relative w-fit">
                            
                            <p className="relative z-10 text-3xl md:text-4xl lg:text-6xl font-light leading-tight text-justified">
                                Your partner <br /> 
                                in Digital <br />
                                <span className="relative inline-block">
                                    Innovation
                                    {/* Dots */}
                                    <span className="relative inline-block after:absolute after:top-1/2 after:-translate-y-1/2 after:translate-x-1/2 after:right-0 after:mr-2 after:w-1 after:h-1 md:after:w-2 md:after:h-2 after:bg-gradient-to-r after:from-red-500 after:to-red-900 ml-4"></span>
                                    <span className="relative inline-block after:absolute after:top-1/2 after:-translate-y-1/2 after:translate-x-1/2 after:right-0 after:mr-2 after:w-1 after:h-1 md:after:w-2 md:after:h-2 after:bg-gradient-to-r after:from-red-500 after:to-red-900 ml-4"></span>
                                    <span className="relative inline-block after:absolute after:top-1/2 after:-translate-y-1/2 after:translate-x-1/2 after:right-0 after:mr-2 after:w-1 after:h-1 md:after:w-2 md:after:h-2 after:bg-gradient-to-r after:from-red-500 after:to-red-900 ml-4"></span>
                                </span>
                            </p>

                            {/* SVG */}
                            <svg 
                                className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[130%] h-[150%] md:w-[150%] md:h-[160%] opacity-60 pointer-events-none animate-fadeOrbit float" 
                                viewBox="0 0 500 250"
                                fill="none"
                            >
                                <ellipse cx="250" cy="125" rx="220" ry="80" stroke="white" strokeWidth="1" opacity="0.7" />
                                <ellipse cx="250" cy="135" rx="210" ry="90" stroke="white" strokeWidth="1" opacity="0.4" />
                            </svg>
                        </div>
                            </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;