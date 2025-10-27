# 🐭 Ratata - Cute • Chaotic • Cheesy

![Ratata Banner](public/ratata-profile.jpg)

A playful NFT collection and meme token on Solana. Mint, stake, join the DAO, and collect cheese!

## 🌟 Features

- 🎨 **1,111 Unique NFTs** - Hand-crafted Genesis Ratata collection
- 💎 **$RATA Token** - Community-driven utility token
- 🧀 **Cheese Vault** - Stake and earn rewards
- 🗳️ **DAO Governance** - Community voting and decisions
- 🎮 **Play to Earn** - Mini-game integration (coming soon)
- 🔒 **Audited & Secure** - Smart contracts audited by Solana security partners

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: Docker + Nginx
- **Containerization**: Docker Compose
- **Blockchain**: Solana

## 📦 Installation

### Prerequisites

- Node.js 18+
- npm or yarn

### Local Development

```bash
# Clone repository
git clone https://github.com/kanc-dev/ratata.git
cd ratata

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🚀 Deployment to VPS

### 🐳 Docker Deployment

**Quick Start (3 minutes):**
```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh

# Clone and deploy
git clone https://github.com/kanc-dev/ratata.git
cd ratata

# Build and start
docker compose up -d --build
```

**Documentation:**
- [Quick Start Docker](./QUICKSTART-DOCKER.md) - Get started in 3 minutes
- [Full Docker Guide](./DOCKER-DEPLOYMENT.md) - Complete documentation

## 📜 Available Scripts

### Docker Commands

```bash
# Build image
npm run docker:build

# Start containers
npm run docker:up

# Stop containers
npm run docker:down

# Restart containers
npm run docker:restart

# View logs
npm run docker:logs

# Check status
npm run docker:ps

# Rebuild (full rebuild)
npm run docker:rebuild

# Clean (remove all)
npm run docker:clean
```

## 📁 Project Structure

```
ratata/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── FeaturedSection.tsx
│   ├── NFTCollection.tsx
│   ├── StatsSection.tsx
│   ├── ContractInfo.tsx
│   ├── RoadmapSection.tsx
│   ├── NFTCard.tsx
│   └── WalletConnect.tsx
├── public/               # Static assets
│   ├── nft/             # NFT collection images
│   └── ratata-profile.jpg
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── nginx-example.conf   # Nginx reverse proxy config
└── package.json         # Dependencies

```

## 🎨 NFT Collection

Our Genesis collection features 26 unique Ratata NFTs with varying rarities:

- 🟡 **Legendary** - Ultra rare (< 5%)
- 🟣 **Epic** - Very rare (10-15%)
- 🔵 **Rare** - Uncommon (25-30%)
- ⚪ **Common** - Standard (50%+)

View the full collection at: [launchmynft.io/sol/20845](https://launchmynft.io/sol/20845)

## 🔗 Links

- **Website**: [Coming soon]
- **Twitter**: [Coming soon]
- **Discord**: [Coming soon]
- **LaunchMyNFT**: [launchmynft.io/sol/20845](https://launchmynft.io/sol/20845)
- **DexScreener**: [View Chart](https://dexscreener.com/solana/egwuyrpt8ockfnwzb5vnbt6961xbbsj5uvnwanwa4vry)

## 🛣️ Roadmap

### Phase 1: The Great Escape 🧀 (100% Complete)
- ✅ Launch of Ratata Token ($RATA) on Solana
- ✅ Community formation
- ✅ Genesis NFT Collection release
- ✅ Website launch

### Phase 2: The Cheese Chase 🚀 (62% Complete)
- 🔄 Staking platform for NFT holders
- 🔄 Cheese Vault rewards pool
- ⏳ Limited-edition Merch Drop
- ⏳ Community events

### Phase 3: Rataverse Expansion 🌐 (12% Complete)
- ⏳ 3D avatars for virtual spaces
- ⏳ Gaming platform integration
- ⏳ DAO governance setup
- ⏳ Charity initiatives

### Phase 4: The Cheese Empire 👑 (Coming Soon)
- ⏳ Global marketing campaign
- ⏳ Mobile mini-game
- ⏳ Ratata Marketplace
- ⏳ Multi-chain bridge

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🔒 Security

- Smart contracts audited by Solana security partners
- Liquidity locked for 12 months
- Team tokens vested gradually

## 💬 Support

Need help?
- Check our [Docker Deployment Guide](./DOCKER-DEPLOYMENT.md)
- Join our Discord (coming soon)
- Open an issue on GitHub

---

**Cute. Chaotic. Cheesy. Ratata runs Solana.** 🐭✨

Made with 💜 by the Ratata Team
