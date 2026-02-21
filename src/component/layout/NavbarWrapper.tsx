"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar'; 

export default function NavbarWrapper() {
  const pathname = usePathname();

  // Hide the engineering navbar on BOTH the creative site and the demo sites
  if (pathname?.startsWith('/creative') || 
      pathname?.startsWith('/portfolio-demos') ||
      pathname?.startsWith('/industries-demo')
    ) {
    return null;
  }

  // If they are on the main engineering site, show the engineering navbar
  return <Navbar />;
}