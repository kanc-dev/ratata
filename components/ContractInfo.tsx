'use client';

import { useState } from 'react';

export default function ContractInfo() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="glass rounded-2xl p-8 shadow-xl">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Official Contract Address</h3>
          <p className="text-gray-600">Verified on Solana Blockchain</p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="bg-white/50 rounded-lg px-6 py-4 font-mono text-sm break-all max-w-2xl">
            {contractAddress}
          </div>
          <button
            onClick={copyToClipboard}
            className="px-6 py-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all hover:scale-105 shadow-lg"
          >
            {copied ? (
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Copied!
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </span>
            )}
          </button>
        </div>

        {/* Trust Signals */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center opacity-60">
          <div className="text-center">
            <div className="text-2xl mb-1">🔒</div>
            <p className="text-xs font-medium">Audited</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-1">💎</div>
            <p className="text-xs font-medium">Verified</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-1">🌐</div>
            <p className="text-xs font-medium">Solscan</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-1">📊</div>
            <p className="text-xs font-medium">DexScreener</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-1">🚀</div>
            <p className="text-xs font-medium">Jupiter</p>
          </div>
        </div>
      </div>
    </section>
  );
}
