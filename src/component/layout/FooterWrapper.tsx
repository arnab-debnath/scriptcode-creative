"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Footer from './Footer'; // Import your Engineering Footer

export default function FooterWrapper() {
  const pathname = usePathname();

  // If the user is on the creative site, return nothing (hide the engineering footer)
  if (pathname?.startsWith('/creative')) {
    return null;
  }

  // If they are on the main engineering site, show the engineering footer
  return <Footer />;
}