// src/app/services/page.tsx
import type { Metadata } from 'next';
import ServicesClient from './ServiceClient'; 

export const metadata: Metadata = {
  title: 'Enterprise Software & Web App Engineering',
  description: 'ScriptCode Innovation engineers high-performance web applications, custom enterprise software, and scalable cloud architecture for businesses demanding technical excellence.',
  keywords: ['enterprise software development', 'high-performance web apps', 'custom software engineering', 'scalable cloud architecture', 'full-stack development'],
};

export default function ServicesPage() {
  return <ServicesClient />;
}