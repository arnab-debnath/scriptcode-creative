// src/app/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Software Engineering & Digital Transformation',
  description: 'ScriptCode Innovation architects scalable, high-performance software, web applications, and cloud infrastructure for game-changing enterprises and modern businesses.',
  keywords: ['software development company India', 'custom enterprise software', 'web application engineering', 'IT consulting firm', 'cloud architecture'],
};

// src/app/page.tsx
import Hero from "../../src/component/home/Hero";
import Marquee from "../../src/component/home/Marquee";
import ServicesGrid from "../../src/component/home/ServiceGrid";
import IndustriesGrid from "../../src/component/home/IndustriesGrid";
import Transparency from "../../src/component/home/Transparency";
import WhyChoose from "../../src/component/home/WhyChoose";
import ContactSection from "../../src/component/home/ContactSection";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#062b30] to-[#071B23] text-white flex flex-col gap-0">
      {/* Navbar is already in layout.tsx, so we don't need it here */}
      
      <Hero />
      
      <Marquee items={["Empower", "Innovate", "Transform", "Progress", "Inspire"]} />
      
      <ServicesGrid />
      
      <Marquee items={["Web Development", "Mobile Apps", "UI/UX Design", "Custom Software", "Digital Marketing"]} />
      
      <Transparency />
      
      <Marquee items={["Transparency", "Integrity", "Excellence", "Collaboration", "Precision"]} />
      
      <IndustriesGrid />
      
      <Marquee items={["Healthcare", "Education", "FinTech", "Real Estate", "Enterprise"]} />
      
      <WhyChoose />
      
      <ContactSection />
      
      {/* Footer is already in layout.tsx */}
    </div>
  );
}