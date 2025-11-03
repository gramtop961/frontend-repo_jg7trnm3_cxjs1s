import React from 'react';
import HeroSection from './components/HeroSection';
import NarrativeSection from './components/NarrativeSection';
import SupportAndBeforeAfter from './components/SupportAndBeforeAfter';
import SocialProofCTA from './components/SocialProofCTA';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <Header />
      <HeroSection />
      <NarrativeSection />
      <SupportAndBeforeAfter />
      <SocialProofCTA />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200/60">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-600 to-indigo-500" />
          <span className="font-semibold tracking-tight">Envera Group</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#" className="hover:text-gray-900">Solution</a>
          <a href="#" className="hover:text-gray-900">Support</a>
          <a href="#cta" className="hover:text-gray-900">Contact</a>
        </nav>
        <a href="#cta" className="ml-4 inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm shadow-sm hover:shadow">
          Book a Demo
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-600 to-indigo-500" />
          <span>© {new Date().getFullYear()} Envera Group. All rights reserved.</span>
        </div>
        <div className="text-sm text-gray-500">White, bright, and minimal — purpose-driven motion.</div>
      </div>
    </footer>
  );
}
