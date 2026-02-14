// src/app/about/page.tsx
import React from 'react';
import { Code, Users, Cpu, Globe, Rocket, Zap } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | ScriptCode',
  description: 'Building the future of digital innovation.',
};

export default function AboutPage() {
  return (
    <div className="relative bg-[#060b10] text-white min-h-screen overflow-hidden">
      
      {/* --- BACKGROUND GLOWS (Ambient Lighting) --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 pt-32 pb-20">
        
        {/* 1. HERO SECTION */}
        <section className="max-w-5xl mx-auto px-6 text-center mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 border border-white-500/30 rounded-full bg-cyan-500/10 text-red-400 text-sm font-semibold tracking-wider uppercase backdrop-blur-md">
            Who We Are
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
            Architects of the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
              Digital Future.
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            We don't just write code. We build <span className="text-white font-semibold">engines for growth</span>. 
            ScriptCode is where technical precision meets creative chaos to forge products that define industries.
          </p>
        </section>

        {/* 2. STATS / CORE VALUES (Glass Cards) */}
        

        <section className="max-w-7xl mx-auto px-6 mb-32">

          <div className="grid md:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-blue-500/50 transition duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <Globe className="relative w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition duration-300" />
                  <h3 className="relative text-2xl font-bold mb-3 text-white">Global Impact</h3>
                  <p className="relative text-gray-400 leading-relaxed">
                    Empowering businesses across continents with scalable, borderless digital infrastructure.
                  </p>
              </div>

              {/* Card 2 */}
              <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-purple-500/50 transition duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <Rocket className="relative w-12 h-12 text-purple-400 mb-6 group-hover:scale-110 transition duration-300" />
                  <h3 className="relative text-2xl font-bold mb-3 text-white">Rapid Innovation</h3>
                  <p className="relative text-gray-400 leading-relaxed">
                    Moving fast without breaking things. We deploy production-ready code at startup speed.
                  </p>
              </div>

              {/* Card 3 */}
              <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-pink-500/50 transition duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <Zap className="relative w-12 h-12 text-pink-400 mb-6 group-hover:scale-110 transition duration-300" />
                  <h3 className="relative text-2xl font-bold mb-3 text-white">Performance First</h3>
                  <p className="relative text-gray-400 leading-relaxed">
                    Obsessed with optimization. Every millisecond counts, and every pixel matters.
                  </p>
              </div>

          </div>
        </section>


        {/* 3. TECH STACK (Modern Grid) */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">Our <span className="text-purple-500">Arsenal</span></h2>
            <p className="text-gray-400 mt-4 md:mt-0">The tools we use to conquer complexity.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {['Next.js', 'React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'MongoDB', 'PostgreSQL', 'Tailwind', 'Figma', 'Java', 'Vercel'].map((tech) => (
                  <div key={tech} className="flex items-center justify-center py-6 border border-white/5 bg-white/[0.02] rounded-xl hover:bg-white/[0.08] hover:border-white/20 transition cursor-default">
                      <span className="font-mono text-sm md:text-base font-medium text-gray-300 hover:text-white">{tech}</span>
                  </div>
              ))}
          </div>
        </section>

        {/* HOW WE WORK DEMO AGLIE */}

        <section className="max-w-7xl mx-auto px-6 mb-32">

              <div className='mb-10 mt-10'>
                <h2 className="px-2 font-semibold text-2xl">
                    How we work:
                </h2>
                <p className="text-gray-400 px-2">
                We follow the{" "}
                <Link 
                    href="/process" 
                    className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30 hover:decoration-blue-300 transition-all"
                >
                    agile development methodology
                </Link>
                {" "}to ensure flexibility and speed.
                </p>
              </div>


          <div className="grid md:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-blue-500/50 transition duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <Globe className="relative w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition duration-300" />
                  <h3 className="relative text-2xl font-bold mb-3 text-white">Knowledge</h3>
                  <p className="relative text-gray-400 leading-relaxed">
                    We can confidently and precisely take on a variety of projects thanks to the broad range of technologies, frameworks, and programming languages that our team of talented engineers is proficient in.

                  </p>
              </div>

              {/* Card 2 */}
              <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-purple-500/50 transition duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <Rocket className="relative w-12 h-12 text-purple-400 mb-6 group-hover:scale-110 transition duration-300" />
                  <h3 className="relative text-2xl font-bold mb-3 text-white">Custom Solutions</h3>
                  <p className="relative text-gray-400 leading-relaxed">
                    We tackle each job individually because we recognize that every business is different. We collaborate closely with our clients to create custom solutions that support their goals and objectives, whether we're creating a new application or improving an old one.
                  </p>
              </div>

              {/* Card 3 */}
              <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-pink-500/50 transition duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <Zap className="relative w-12 h-12 text-pink-400 mb-6 group-hover:scale-110 transition duration-300" />
                  <h3 className="relative text-2xl font-bold mb-3 text-white">All our talents at your service</h3>
                  <p className="relative text-gray-400 leading-relaxed">
                    The development team will provide you full-cycle development services or get started at any project stage with as many experts as you need.
                  </p>
              </div>
                {/* Card 4 */}
              <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-blue-500/50 transition duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <Cpu className="relative w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition duration-300" />
                  <h3 className="relative text-2xl font-bold mb-3 text-white">Assurance of Quality</h3>
                  <p className="relative text-gray-400 leading-relaxed">
                    Our entire operation is centered around quality. We use strict quality control procedures to guarantee the stability, dependability, and bug-free nature of our products. We are dedicated to quality from the very beginning of the development process to the very end—final delivery.
                  </p>
              </div>

                {/* Card 5 */}
              <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-blue-500/50 transition duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <Code className="relative w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition duration-300" />
                  <h3 className="relative text-2xl font-bold mb-3 text-white">On-Time Delivery</h3>
                  <p className="relative text-gray-400 leading-relaxed">
                    We recognize the value of adhering to deadlines and make every effort to complete projects on schedule. We can respond rapidly to changing needs and deliver results swiftly without sacrificing quality thanks to our agile development style.
                  </p>
              </div>
                {/* Card 6 */}
              <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-blue-500/50 transition duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <Users className="relative w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition duration-300" />
                  <h3 className="relative text-2xl font-bold mb-3 text-white">Client-Centric Approach</h3>
                  <p className="relative text-gray-400 leading-relaxed">
                    Our main goal is establishing enduring, solid connections with our clients. Throughout the development process, we place a high value on cooperation, open communication, and openness to make sure that our clients are constantly aware and participating.
                  </p>
              </div>

          </div>
        </section>

        

        {/* 4. TEAM SECTION (Creative Layout) */}
        <section className="max-w-7xl mx-auto px-6 text-center">
           <h2 className="text-3xl md:text-5xl font-bold mb-16">The <span className="text-red-500">Masterminds</span></h2>
           
           <div className="grid md:grid-cols-2 gap-12 items-center bg-gradient-to-r from-gray-900 to-[#0B1215] border border-gray-800 rounded-[3rem] p-12 relative overflow-hidden">
              {/* Decorative Blur */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full pointer-events-none"></div>

              <div className="text-left relative z-10">
                <h3 className="text-3xl font-bold mb-4">Join the Elite</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  We are a collective of senior engineers, award-winning designers, and strategic thinkers. 
                  Currently expanding our core team.
                </p>
                <Link href="/">
                <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition cursor-pointer">
                  View Open Positions
                </button>
                </Link>
              </div>

              {/* Placeholder for Team Image or Grid */}
              <div className="relative h-64 w-full bg-white/5 rounded-2xl border border-dashed border-gray-700 flex items-center justify-center">
                  <p className="text-gray-500 text-sm uppercase tracking-widest">
                    [ Team Photo Gallery ]
                  </p>
              </div>
           </div>
        </section>

      </div>
    </div>
  );
}