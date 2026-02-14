// src/app/services/page.tsx
import type { Metadata } from 'next';
import ServicesClient from './ServiceClient'; // Import the client component

// 1. NOW THIS WORKS (Because this file is a Server Component)
export const metadata: Metadata = {
  title: 'Services | ScriptCode',
  description: 'Choose between Premium Custom Development or Fast-Growth Budget Solutions.',
};

// 2. This component just renders the client part
export default function ServicesPage() {
  return <ServicesClient />;
}