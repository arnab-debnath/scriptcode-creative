"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Footer from './Footer'; // Import your Engineering Footer

export default function FooterWrapper() {
  const pathname = usePathname();

  // Hide the engineering footer on BOTH the creative site and the demo sites
  if (pathname?.startsWith('/creative') || 
      pathname?.startsWith('/portfolio-demos') ||
      pathname?.startsWith('/industries-demo') 
    ) {
    return null;
  }

  // If they are on the main engineering site, show the engineering footer
  return <Footer />;
}