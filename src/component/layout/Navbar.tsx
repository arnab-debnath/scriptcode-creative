// src/components/layout/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link"; // Changed from react-router-dom

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${
        scrolled
          ? "bg-transparent backdrop-blur-md shadow-md border-b border-white/10" 
          : "bg-transparent backdrop-blur-sm" 
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-6 flex justify-between items-center">
        {/* LOGO */}
        <div>
            <Link href="/">
          <img
            src="/images/scriptcodelogo.png"
            alt="ScriptCode Logo"
            className="h-6 md:h-8 object-contain"
          />
          </Link>
        </div>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden lg:flex items-center justify-between gap-10 text-sm font-medium text-gray-300">
          <Link href="/about" className="hover:text-white transition">
            About ScriptCode
          </Link>
          <Link href="/services" className="hover:text-white transition">
            Services
          </Link>
          <Link href="/industries" className="hover:text-white transition">
            Industries
          </Link>
          <Link href="/resources" className="hover:text-white transition">
            Resources
          </Link>
          <Link href="/portfolio" className="hover:text-white transition">
            Portfolio
          </Link>
        </nav>

        {/* GRADIENT BUTTON */}
          <Link href="/estimate">
        <div className="hidden lg:block">
          <button className="px-6 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition text-white cursor-pointer">
            Get Estimate
          </button>
        </div>
        </Link>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gray-300"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE NAV LINKS */}
      {open && (
        <div className="lg:hidden bg-[#071B23]/95 backdrop-blur-xl border-t border-gray-700 px-6 py-6 space-y-6 flex flex-col h-screen text-gray-300 absolute w-full top-full left-0">
          <Link
            href="/"
            className="block text-white text-lg"
            onClick={() => setOpen(false)}
          >
            About ScriptCode
          </Link>
          <Link
            href="/services"
            className="block text-white text-lg"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/industries"
            className="block text-white text-lg"
            onClick={() => setOpen(false)}
          >
            Industries
          </Link>
          <Link
            href="/resources"
            className="block text-white text-lg"
            onClick={() => setOpen(false)}
          >
            Resources
          </Link>
          <Link
            href="/portfolio"
            className="block text-white text-lg"
            onClick={() => setOpen(false)}
          >
            Portfolio
          </Link>

          <button className="w-full px-6 py-3 rounded-md bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium">
            Get Estimate
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;