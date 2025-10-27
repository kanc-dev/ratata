'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-yellow-300 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
            <span className="text-2xl">🐭</span>
          </div>
          <div>
            <h1 className="text-lg font-bold">Ratata</h1>
            <p className="text-xs text-gray-600">Cute • Chaotic • Cheesy</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
          <a href="#collection" className="hover:text-purple-600 transition-colors">Collection</a>
          <a href="#roadmap" className="hover:text-purple-600 transition-colors">Roadmap</a>
          <a href="#chart" className="hover:text-purple-600 transition-colors">Chart</a>
          <a href="#mint" className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            Buy $RATA
          </a>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
