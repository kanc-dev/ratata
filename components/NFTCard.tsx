'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface NFTData {
  name: string;
  image: string;
  attributes: Array<{ trait_type: string; value: string }>;
  owner: string;
  price: number;
}

const DEMO_NFT_DATA: NFTData = {
  name: 'Genesis Ratata #39',
  image: '/ratata-profile.jpg',
  attributes: [
    { trait_type: 'Rarity', value: 'Rare' },
    { trait_type: 'Accessory', value: 'Party Hat' },
    { trait_type: 'Food', value: 'Golden Cheese' }
  ],
  owner: 'ratata_owner',
  price: 0.05
};

export default function NFTCard() {
  const [nftData, setNftData] = useState<NFTData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading NFT data
    setTimeout(() => {
      setNftData(DEMO_NFT_DATA);
      setLoading(false);
    }, 1000);
  }, []);

  const handleBuyNFT = () => {
    window.open('https://launchmynft.io/sol/20845', '_blank');
  };

  if (loading) {
    return (
      <div className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-2xl">
        <div className="flex items-center justify-center h-80 bg-gray-100 rounded-lg">
          <div className="animate-pulse text-gray-400">Loading NFT...</div>
        </div>
        <div className="mt-4">
          <h4 className="font-bold">Loading...</h4>
          <p className="text-sm text-gray-500">Fetching NFT data...</p>
        </div>
      </div>
    );
  }

  if (!nftData) return null;

  const attributes = nftData.attributes.map(attr => attr.value).join(' • ');
  const rarityTrait = nftData.attributes.find(attr => attr.trait_type === 'Rarity');
  const rarity = rarityTrait ? rarityTrait.value : 'Common';

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-2xl">
      <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={nftData.image}
          alt={nftData.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
          priority
        />
      </div>
      <div className="mt-4">
        <h4 className="font-bold">{nftData.name}</h4>
        <p className="text-sm text-gray-500">{rarity} — {attributes}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm">Owner: @{nftData.owner}</span>
          <button
            onClick={handleBuyNFT}
            className="inline-flex items-center gap-2 px-3 py-2 bg-yellow-300 rounded shadow hover:shadow-md transition cursor-pointer"
          >
            Buy • {nftData.price} SOL
          </button>
        </div>
      </div>
    </div>
  );
}
