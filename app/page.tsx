import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedSection from '@/components/FeaturedSection';
import StatsSection from '@/components/StatsSection';
import ContractInfo from '@/components/ContractInfo';
import NFTCollection from '@/components/NFTCollection';
import RoadmapSection from '@/components/RoadmapSection';
import WalletConnect from '@/components/WalletConnect';

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Section */}
      <FeaturedSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Contract Info */}
      <ContractInfo />

      <main className="max-w-7xl mx-auto px-6">
        {/* About Section */}
        <section id="about" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">What is Ratata?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ratata is more than just another meme coin. We&apos;re building a vibrant community around adorable rat-themed NFTs and a utility token on Solana.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3">Unique NFTs</h3>
              <p className="text-gray-600">
                1,111 hand-crafted Genesis Ratata NFTs, each with unique traits and personalities. Own a piece of rat history!
              </p>
            </div>

            <div className="glass rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-3">$RATA Token</h3>
              <p className="text-gray-600">
                Community-driven utility token with staking rewards, governance rights, and exclusive perks for holders.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-3">Community First</h3>
              <p className="text-gray-600">
                Join a passionate community of rat lovers. Participate in governance, events, and shape the future of Ratata.
              </p>
            </div>
          </div>
        </section>

        {/* NFT Collection */}
        <NFTCollection />

        {/* Roadmap Section */}
        <RoadmapSection />

        {/* Utility & Ecosystem */}
        <section id="utility" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Utility & Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real utility beyond the memes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-6 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎟</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">NFT Perks</h3>
                  <p className="text-gray-600">
                    Holding Ratata NFTs gives staking boosts & exclusive rewards in $RATA. The rarer your rat, the bigger the cheese!
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🧀</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Cheese Vault</h3>
                  <p className="text-gray-600">
                    Community staking pool where holders earn cheese (rewards) every epoch. Passive income for loyal rats!
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🗳</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">DAO Governance</h3>
                  <p className="text-gray-600">
                    Vote on roadmap direction, partnerships, and charity initiatives. Your voice matters in the Rataverse!
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎮</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Play to Earn</h3>
                  <p className="text-gray-600">
                    Collect cheese, upgrade your Ratata, and earn token rewards in our upcoming mini-game. Fun meets profit!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section id="security" className="py-20">
          <div className="glass rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">🔒 Security & Transparency</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-4xl mb-3">✅</div>
                <h3 className="font-bold mb-2">Audited Contract</h3>
                <p className="text-gray-600 text-sm">
                  Smart contract audited by trusted Solana security partners
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">🔐</div>
                <h3 className="font-bold mb-2">Locked Liquidity</h3>
                <p className="text-gray-600 text-sm">
                  Liquidity locked for 12 months for holder protection
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">⏰</div>
                <h3 className="font-bold mb-2">Vested Tokens</h3>
                <p className="text-gray-600 text-sm">
                  Team tokens vested gradually to maintain trust
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Live Chart Section */}
        <section id="chart" className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">📈 Live Chart & Trading</h3>
          <p className="text-gray-700 mt-2 mb-6">
            Track $RATA token price and trading activity in real-time.
          </p>

          {/* DexScreener Embed */}
          <div className="w-full">
            {/* <iframe
              src="https://dexscreener.com/bsc/0xe501b06868b15bfacbfbf91f84a9607700ae208f?embed=1&theme=dark&trades=0&info=0"
              style={{ width: '100%', height: '500px', border: 0, borderRadius: '12px' }}
              title="DexScreener Chart"
            /> */}
            <iframe
              src="https://dexscreener.com/solana/egwuyrpt8ockfnwzb5vnbt6961xbbsj5uvnwanwa4vry"
              style={{ width: '100%', height: '500px', border: 0, borderRadius: '12px' }}
              title="DexScreener Chart"
            />
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg text-center">
              <p className="text-xs text-gray-600 mb-1">Price</p>
              <p className="text-lg font-bold text-green-600">View Chart</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg text-center">
              <p className="text-xs text-gray-600 mb-1">24h Volume</p>
              <p className="text-lg font-bold text-blue-600">Live Data</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg text-center">
              <p className="text-xs text-gray-600 mb-1">Market Cap</p>
              <p className="text-lg font-bold text-purple-600">On Chain</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg text-center">
              <p className="text-xs text-gray-600 mb-1">Holders</p>
              <p className="text-lg font-bold text-orange-600">Growing</p>
            </div>
          </div>

          {/* Trading Links */}
          <div className="mt-6 flex gap-3 flex-wrap justify-center">
            <a
              href="https://dexscreener.com/bsc/0xe501b06868b15bfacbfbf91f84a9607700ae208f"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-blue-500 text-white font-medium shadow hover:shadow-lg transition"
            >
              📊 View on DexScreener
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-yellow-300 text-gray-900 font-medium shadow hover:shadow-lg transition"
            >
              🥞 Trade on PancakeSwap
            </a>
          </div>
        </section>

        {/* Minting Section */}
        <WalletConnect />

        {/* Footer */}
        <footer className="mt-16 py-8 text-center text-sm text-gray-600 border-t border-gray-200">
          <p>© 2025 Ratata — Built on Solana. All rights reserved.</p>
          <p className="mt-2">
            Join us on
            <a href="#" className="underline hover:text-purple-600"> Discord</a> •
            <a href="#" className="underline hover:text-purple-600"> Twitter</a> •
            <a href="#" className="underline hover:text-purple-600"> Telegram</a>
          </p>
        </footer>

      </main>
    </>
  );
}
