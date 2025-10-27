'use client';

interface RoadmapPhaseProps {
  phase: number;
  title: string;
  subtitle: string;
  items: string[];
  progress: number;
  color: string;
}

function RoadmapPhase({ phase, title, subtitle, items, progress, color }: RoadmapPhaseProps) {
  return (
    <div className="relative">
      {/* Progress indicator */}
      <div className="absolute -left-4 md:-left-8 top-0 flex flex-col items-center">
        <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center text-white font-bold shadow-lg`}>
          {progress}%
        </div>
        <div className={`w-1 h-full ${color} opacity-30 mt-4`}></div>
      </div>

      {/* Content */}
      <div className="glass rounded-2xl p-6 md:p-8 ml-8 md:ml-12 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center gap-3 mb-4">
          <span className={`px-3 py-1 ${color} text-white text-xs font-bold rounded-full`}>
            Phase {phase}
          </span>
          <span className="text-sm text-gray-500">{progress}% Complete</span>
        </div>

        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-6 italic">{subtitle}</p>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className={`h-2 rounded-full ${color} transition-all duration-1000`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function RoadmapSection() {
  const phases = [
    {
      phase: 1,
      title: "The Great Escape 🧀",
      subtitle: "Where every legend begins... in the sewers.",
      progress: 100,
      color: "bg-yellow-400",
      items: [
        "Launch of Ratata Token ($RATA) on Solana",
        "Community formation on X, Discord & Telegram",
        "Release of Genesis Ratata NFT Collection (1,111 pieces)",
        "Early holder rewards & meme competitions",
        "Partnerships with Solana-based communities"
      ]
    },
    {
      phase: 2,
      title: "The Cheese Chase 🚀",
      subtitle: "Ratata runs faster when it smells opportunity.",
      progress: 62,
      color: "bg-purple-500",
      items: [
        "Staking platform for NFT holders",
        '"Cheese Vault" — rewards pool in $RATA',
        "Limited-edition Ratata Merch Drop (digital + physical)",
        "Expansion of the Ratata Universe (mini lore + comics)",
        "First IRL community event / giveaway"
      ]
    },
    {
      phase: 3,
      title: "Rataverse Expansion 🌐",
      subtitle: "Beyond memes, into the metaverse.",
      progress: 12,
      color: "bg-blue-500",
      items: [
        "Launch of Ratata 3D avatars for use in virtual spaces",
        "NFT integration with Solana gaming platforms",
        "Partnership with indie creators for Ratata-themed art collabs",
        "DAO setup for community governance",
        'Charity initiative: "Rats for Good" — supporting art education'
      ]
    },
    {
      phase: 4,
      title: "The Cheese Empire 👑",
      subtitle: "From funny to legendary.",
      progress: 0,
      color: "bg-pink-500",
      items: [
        "Global marketing & influencer collabs",
        "Ratata mobile mini-game (collect cheese, earn tokens)",
        "Launch of the Ratata Marketplace",
        "Bridge to multi-chain ecosystems",
        "Surprise drops & long-term utility expansion"
      ]
    }
  ];

  return (
    <section id="roadmap" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Ratata Roadmap 2025</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          From the blockchain&apos;s basement to Solana&apos;s spotlight — one cheese at a time.
        </p>
      </div>

      <div className="space-y-12 md:space-y-16">
        {phases.map((phase) => (
          <RoadmapPhase key={phase.phase} {...phase} />
        ))}
      </div>

      <div className="mt-16 glass rounded-2xl p-8 text-center">
        <p className="text-2xl font-bold mb-2">🐀 Tagline</p>
        <p className="text-xl text-gray-700">Cute. Chaotic. Cheesy. Ratata runs Solana.</p>
      </div>
    </section>
  );
}
