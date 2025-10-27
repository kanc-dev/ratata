'use client';

import { useEffect, useState } from 'react';
import NFTCard from './NFTCard';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <div className={`space-y-8 transform transition-all duration-1000 ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-medium">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            Live on Solana
          </div>

          {/* Main heading */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              <span className="gradient-text">Ratata</span>
              <br />
              <span className="text-gray-900">The Cutest Chaos</span>
              <br />
              <span className="text-gray-900">on Solana</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Born in the tunnels of Solana, Ratata blends humor and heart in a collection of charming NFTs and a community-driven token.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#mint"
              className="group px-8 py-4 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <span>Mint NFTs</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#chart"
              className="px-8 py-4 glass rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <span>View Chart</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </a>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-6 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">1,111</div>
              <div className="text-sm text-gray-600">NFTs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">$RATA</div>
              <div className="text-sm text-gray-600">Token</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">Solana</div>
              <div className="text-sm text-gray-600">Chain</div>
            </div>
          </div>
        </div>

        {/* Right side - NFT Card */}
        <div className={`flex justify-center transform transition-all duration-1000 delay-300 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <div className="animate-float">
            <NFTCard />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
