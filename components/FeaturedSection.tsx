'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function FeaturedSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Meet Ratata</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The cutest rat on the Solana blockchain, ready to steal your heart (and cheese)
        </p>
      </div>

      <div className={`grid md:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Image Side */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <div className="relative glass rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-300">
            <div className="relative aspect-square">
              <Image
                src="/ratata-profile.jpg"
                alt="Ratata - The Cutest Rat on Solana"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="space-y-6">
          <div className="glass rounded-2xl p-6 hover:shadow-xl transition-all">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🎨</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Hand-Crafted Art</h3>
                <p className="text-gray-600">
                  Each Ratata NFT is uniquely designed with love and attention to detail. No two rats are exactly alike!
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 hover:shadow-xl transition-all">
            <div className="flex items-start gap-4">
              <div className="text-4xl">💎</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Rare Traits</h3>
                <p className="text-gray-600">
                  Discover unique accessories, expressions, and special features that make your Ratata one of a kind.
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 hover:shadow-xl transition-all">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🧀</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Cheese Rewards</h3>
                <p className="text-gray-600">
                  Hold your Ratata to earn $RATA tokens and exclusive rewards. The more you hold, the more cheese you get!
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href="https://launchmynft.io/sol/20845"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              Mint Your Ratata
            </a>
            <a
              href="#about"
              className="px-8 py-4 glass rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
