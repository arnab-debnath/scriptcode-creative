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
      <Marquee text="empower &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; innovate &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; transform &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; progress &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; inspire &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; •"  />
      <ServicesGrid />
      <Marquee text="web development &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; mobile apps &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ui/ux design &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; custom software &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; digital marketing &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; •" />
      <Transparency />
      <Marquee text="transparency &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; integrity &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; excellence &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; collaboration &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; •" />
      <IndustriesGrid />
      <Marquee text="healthcare&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  • &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; education &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; fintech &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; real estate &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; enterprise &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; •" />
      <WhyChoose />
      
      <ContactSection />
      
      {/* Footer is already in layout.tsx */}
    </div>
  );
}