// src/components/layout/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#060b10] py-10 text-center text-gray-500">
      {/* You can add your real footer content here later */}
      <p>&copy; {new Date().getFullYear()} ScriptCode Innovation. All rights reserved.</p>
    </footer>
  );
};

export default Footer;