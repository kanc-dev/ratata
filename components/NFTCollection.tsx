'use client';

import Image from 'next/image';
import { useState } from 'react';

interface NFT {
  id: number;
  name: string;
  image: string;
  rarity: string;
}

const nftImages = [
  { id: 1, name: 'Ratata #1', image: '/nft/ChatGPT Image 27 Okt 2025, 13.18.51.png', rarity: 'Rare' },
  { id: 2, name: 'Ratata #2', image: '/nft/ChatGPT Image 27 Okt 2025, 13.18.56.png', rarity: 'Epic' },
  { id: 3, name: 'Ratata #3', image: '/nft/ChatGPT Image 27 Okt 2025, 13.19.01.png', rarity: 'Common' },
  { id: 4, name: 'Ratata #4', image: '/nft/ChatGPT Image 27 Okt 2025, 13.19.06.png', rarity: 'Rare' },
  { id: 5, name: 'Ratata #5', image: '/nft/ChatGPT Image 27 Okt 2025, 13.19.11.png', rarity: 'Legendary' },
  { id: 6, name: 'Ratata #6', image: '/nft/ChatGPT Image 27 Okt 2025, 13.19.18.png', rarity: 'Epic' },
  { id: 7, name: 'Ratata #7', image: '/nft/ChatGPT Image 27 Okt 2025, 13.19.22.png', rarity: 'Rare' },
  { id: 8, name: 'Ratata #8', image: '/nft/Generated Image October 27, 2025 - 1_33PM (1).png', rarity: 'Common' },
  { id: 9, name: 'Ratata #9', image: '/nft/Generated Image October 27, 2025 - 1_33PM (2).png', rarity: 'Rare' },
  { id: 10, name: 'Ratata #10', image: '/nft/Generated Image October 27, 2025 - 1_33PM (3).png', rarity: 'Epic' },
  { id: 11, name: 'Ratata #11', image: '/nft/Generated Image October 27, 2025 - 1_33PM (4).png', rarity: 'Legendary' },
  { id: 12, name: 'Ratata #12', image: '/nft/Generated Image October 27, 2025 - 1_33PM (5).png', rarity: 'Rare' },
  { id: 13, name: 'Ratata #13', image: '/nft/Generated Image October 27, 2025 - 1_33PM (6).png', rarity: 'Common' },
  { id: 14, name: 'Ratata #14', image: '/nft/Generated Image October 27, 2025 - 1_33PM.png', rarity: 'Epic' },
  { id: 15, name: 'Ratata #15', image: '/nft/Generated Image October 27, 2025 - 1_34PM (1).png', rarity: 'Rare' },
  { id: 16, name: 'Ratata #16', image: '/nft/Generated Image October 27, 2025 - 1_34PM (2).png', rarity: 'Common' },
  { id: 17, name: 'Ratata #17', image: '/nft/Generated Image October 27, 2025 - 1_34PM.png', rarity: 'Legendary' },
  { id: 18, name: 'Ratata #18', image: '/nft/Generated Image October 27, 2025 - 1_41PM.png', rarity: 'Epic' },
  { id: 19, name: 'Ratata #19', image: '/nft/Generated Image October 27, 2025 - 1_44PM.png', rarity: 'Rare' },
  { id: 20, name: 'Ratata #20', image: '/nft/Generated Image October 27, 2025 - 1_45PM.png', rarity: 'Common' },
  { id: 21, name: 'Ratata #21', image: '/nft/Generated Image October 27, 2025 - 1_50PM (1).png', rarity: 'Epic' },
  { id: 22, name: 'Ratata #22', image: '/nft/Generated Image October 27, 2025 - 1_50PM.png', rarity: 'Rare' },
  { id: 23, name: 'Ratata #23', image: '/nft/Generated Image October 27, 2025 - 1_52PM.png', rarity: 'Legendary' },
  { id: 24, name: 'Ratata #24', image: '/nft/Generated Image October 27, 2025 - 1_56PM.png', rarity: 'Epic' },
  { id: 25, name: 'Ratata #25', image: '/nft/Generated Image October 27, 2025 - 2_02PM.png', rarity: 'Rare' },
  { id: 26, name: 'Ratata #26', image: '/nft/Generated Image October 27, 2025 - 2_04PM.png', rarity: 'Common' },
];

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case 'Legendary':
      return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white';
    case 'Epic':
      return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white';
    case 'Rare':
      return 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white';
    default:
      return 'bg-gray-200 text-gray-700';
  }
};

export default function NFTCollection() {
  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const filteredNFTs = filter === 'All'
    ? nftImages
    : nftImages.filter(nft => nft.rarity === filter);

  return (
    <section id="collection" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">NFT Collection</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Explore our Genesis collection of 1,111 unique Ratata NFTs
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['All', 'Legendary', 'Epic', 'Rare', 'Common'].map((rarity) => (
            <button
              key={rarity}
              onClick={() => setFilter(rarity)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === rarity
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                  : 'glass hover:shadow-lg'
              }`}
            >
              {rarity}
            </button>
          ))}
        </div>
      </div>

      {/* NFT Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredNFTs.map((nft) => (
          <div
            key={nft.id}
            onClick={() => setSelectedNFT(nft)}
            className="glass rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="relative aspect-square">
              <Image
                src={nft.image}
                alt={nft.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{nft.name}</h3>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getRarityColor(nft.rarity)}`}>
                {nft.rarity}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href="https://launchmynft.io/sol/20845"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
        >
          <span>🎨</span>
          View Full Collection
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      {/* Modal for selected NFT */}
      {selectedNFT && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedNFT(null)}
        >
          <div className="glass rounded-3xl overflow-hidden max-w-2xl w-full transform transition-all" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-square">
              <Image
                src={selectedNFT.image}
                alt={selectedNFT.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{selectedNFT.name}</h3>
                <span className={`px-4 py-2 rounded-full text-sm font-bold ${getRarityColor(selectedNFT.rarity)}`}>
                  {selectedNFT.rarity}
                </span>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://launchmynft.io/sol/20845"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold text-center hover:shadow-xl transition-all"
                >
                  Mint Now
                </a>
                <button
                  onClick={() => setSelectedNFT(null)}
                  className="px-6 py-3 glass rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
