import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | ScriptCODE',
  description: 'Privacy Policy for ScriptCODE Innovation and ScriptCODE .Creative',
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#030305] min-h-screen text-gray-300 pt-32 pb-24 px-6 font-sans selection:bg-blue-500 selection:text-white">
      <div className="max-w-3xl mx-auto">
        
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 text-sm font-bold uppercase tracking-widest">
            <ArrowLeft size={16} /> Back to Home
        </Link>

        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">Privacy Policy.</h1>
        <p className="text-sm text-blue-400 mb-12 uppercase tracking-widest font-bold">Last Updated: February 2026</p>
        
        <div className="space-y-10 text-lg leading-relaxed">
            <section>
                <p>
                    At ScriptCODE Innovation and ScriptCODE .Creative ("ScriptCODE", "we", "us", or "our"), we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our websites and tell you about your privacy rights and how the law protects you.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. The Data We Collect About You</h2>
                <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li><strong className="text-gray-200">Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                    <li><strong className="text-gray-200">Contact Data:</strong> includes billing address, email address, and telephone numbers.</li>
                    <li><strong className="text-gray-200">Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting, and operating system.</li>
                    <li><strong className="text-gray-200">Usage Data:</strong> includes information about how you use our website, products, and services.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Personal Data</h2>
                <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                    <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                    <li>Where we need to comply with a legal obligation.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
                <p>
                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Links</h2>
                <p>
                    Our websites may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
                <p>
                    If you have any questions about this privacy policy or our privacy practices, please contact us at: <br/>
                    <a href="mailto:scriptcode.innovation@gmail.com" className="text-blue-400 hover:text-blue-300 font-bold mt-2 inline-block">scriptcode.innovation@gmail.com</a>
                </p>
            </section>
        </div>
      </div>
    </div>
  );
}