'use client';

import { useState } from 'react';

declare global {
  interface Window {
    solana?: any;
  }
}

export default function WalletConnect() {
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [connected, setConnected] = useState(false);

  const connectWallet = async () => {
    try {
      if (typeof window !== 'undefined' && window.solana && window.solana.isPhantom) {
        const resp = await window.solana.connect({ onlyIfTrusted: false });
        const publicKey = resp.publicKey.toString();
        setWalletAddress(`${publicKey.slice(0, 4)}...${publicKey.slice(-4)}`);
        setConnected(true);
      } else {
        if (confirm('Phantom Wallet not found. Install Phantom?')) {
          window.open('https://phantom.app', '_blank');
        }
      }
    } catch (err) {
      console.error('Wallet connection failed:', err);
      alert('Connection failed. See console for details.');
    }
  };

  const mintNFT = async () => {
    try {
      if (typeof window === 'undefined' || !window.solana || !window.solana.isPhantom) {
        throw new Error('Phantom not available');
      }

      const provider = window.solana;
      const pubkey = provider.publicKey;

      if (!pubkey) {
        throw new Error('Wallet not connected');
      }

      alert('Minting... (This is a placeholder. Integrate real mint program to enable.)');

      setTimeout(() => {
        alert('Mint placeholder completed. Connect to real Solana program for actual minting.');
      }, 2000);
    } catch (err) {
      console.error('Mint failed:', err);
      alert('Mint failed (placeholder). Integrate real mint program to enable.');
    }
  };

  return (
    <section id="mint" className="mt-12 bg-gradient-to-br from-purple-100 to-yellow-100 p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold">🎨 Minting</h3>
      <p className="text-gray-700 mt-2">
        Genesis Mint — 1,111 Ratata NFTs. Connect your wallet to mint.
      </p>

      <div className="mt-6 flex gap-3 flex-wrap">
        {!connected ? (
          <button
            onClick={connectWallet}
            className="px-6 py-3 rounded-full bg-yellow-300 font-medium shadow hover:shadow-lg transition"
          >
            Connect Wallet
          </button>
        ) : (
          <button
            onClick={mintNFT}
            className="px-6 py-3 rounded-full border bg-white text-gray-700 hover:bg-gray-50 transition"
          >
            Mint Ratata NFT
          </button>
        )}
      </div>

      {walletAddress && (
        <p className="text-sm text-gray-600 mt-3">Connected: {walletAddress}</p>
      )}
    </section>
  );
}
