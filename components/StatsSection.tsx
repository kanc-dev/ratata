'use client';

import { useEffect, useState } from 'react';

interface StatItemProps {
  label: string;
  value: string;
  icon: string;
  color: string;
}

function StatItem({ label, value, icon, color }: StatItemProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className={`glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 ${color}`}>
        <div className="text-4xl mb-3">{icon}</div>
        <div className="text-3xl font-bold mb-2 gradient-text">{value}</div>
        <div className="text-sm text-gray-600 font-medium">{label}</div>
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 gradient-text">Ratata by Numbers</h2>
        <p className="text-gray-600 text-lg">Join thousands of rat lovers building the future</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatItem
          icon="🎨"
          value="1,111"
          label="Genesis NFTs"
          color="hover:shadow-purple-200"
        />
        <StatItem
          icon="💰"
          value="$RATA"
          label="Token Symbol"
          color="hover:shadow-yellow-200"
        />
        <StatItem
          icon="👥"
          value="10K+"
          label="Holders"
          color="hover:shadow-pink-200"
        />
        <StatItem
          icon="⚡"
          value="100%"
          label="Community Driven"
          color="hover:shadow-blue-200"
        />
      </div>
    </section>
  );
}
