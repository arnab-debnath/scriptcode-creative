// src/app/page.tsx
import Hero from "../src/component/home/Hero";
import Marquee from "../src/component/home/Marquee";
import ServicesGrid from "../src/component/home/ServiceGrid";
import IndustriesGrid from "../src/component/home/IndustriesGrid";
import Transparency from "../src/component/home/Transparency";
import WhyChoose from "../src/component/home/WhyChoose";
import ContactSection from "../src/component/home/ContactSection";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#062b30] to-[#071B23] text-white flex flex-col gap-0">
      {/* Navbar is already in layout.tsx, so we don't need it here */}
      
      <Hero />
      <Marquee text="empower • innovate • transform • progress • inspire"  />
      <ServicesGrid />
      <Marquee text="web development • mobile apps • ui/ux design • custom software • digital marketing" />
      <Transparency />
      <Marquee text="transparency • integrity • excellence • collaboration" />
      <IndustriesGrid />
      <Marquee text="healthcare • education • fintech • real estate • enterprise" />
      <WhyChoose />
      <Marquee text="let's build something amazing together" />
      <ContactSection />
      
      {/* Footer is already in layout.tsx */}
    </div>
  );
}