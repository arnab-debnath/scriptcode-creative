// src/components/home/WhyChoose.tsx
import React from 'react';

const WhyChoose: React.FC = () => {
    return (
        <section className="w-full bg-black py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
                {/* LEFT SIDE - Image */}
                <div className="relative flex justify-center items-center">

                    {/* Glow Container */}
                    <div className="absolute flex justify-center items-center">
                        <div className="w-[26rem] h-[26rem]
                                        bg-gradient-to-tr from-purple-600 via-pink-500 to-blue-500
                                        blur-[120px] opacity-40 rounded-full">
                        </div>
                    </div>

                    {/* PNG */}
                    <img
                        src="/images/whychoose.png"
                        alt="Why Choose Visual"
                        className="relative w-72 md:w-80 lg:w-96 object-contain z-10 float"
                    />

                </div>

                {/* RIGHT SIDE - Text */}
                <div>
                    <p className="text-l tracking-widest font-semibold text-gray-400 mb-6">
                        WHY CHOOSE US?
                    </p>
                    <h2 className="text-4xl md:text-4xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white">
                        WE'RE DESIGNING <br />
                        <span className="text-white">THE FUTURE</span>
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;