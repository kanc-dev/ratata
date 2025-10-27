# 🚀 Quick Start - Deploy Ratata dengan Docker

Panduan super cepat untuk deploy website Ratata menggunakan Docker di VPS.

## ⚡ 3 Langkah Deploy

### 1️⃣ Install Docker di VPS

```bash
# Login ke VPS
ssh root@YOUR_VPS_IP

# Install Docker (one-liner)
curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh

# Install Docker Compose plugin
sudo apt install docker-compose-plugin -y

# Verify
docker --version
docker compose version
```

### 2️⃣ Clone & Deploy

```bash
# Clone repository
cd /var/www
git clone https://github.com/kanc-dev/ratata.git
cd ratata

# Make script executable
chmod +x deploy-docker.sh

# Deploy!
./deploy-docker.sh
```

✅ **Website sekarang berjalan di port 5000!**

Test: `curl http://localhost:5000`

### 3️⃣ Setup Nginx Reverse Proxy

```bash
# Install Nginx
sudo apt install nginx -y

# Copy config
sudo cp nginx-example.conf /etc/nginx/sites-available/ratata

# Edit domain
sudo nano /etc/nginx/sites-available/ratata
# Ganti YOUR_DOMAIN.com dengan domain Anda

# Enable site
sudo ln -s /etc/nginx/sites-available/ratata /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

✅ **Website live di http://YOUR_DOMAIN.com**

---

## 🔒 Bonus: Setup SSL (1 Menit)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d YOUR_DOMAIN.com -d www.YOUR_DOMAIN.com
```

✅ **Website sekarang HTTPS!** 🎉

---

## 🔄 Update Website

Ketika ada update code baru:

```bash
cd /var/www/ratata
./deploy-docker.sh
```

Atau manual:

```bash
git pull
docker compose down
docker compose up -d --build
```

---

## 📊 Monitoring

### View logs

```bash
docker compose logs -f
```

### Check status

```bash
docker compose ps
```

### Interactive commands

```bash
./docker-commands.sh
```

---

## 🛠️ Useful Commands

```bash
# Start
npm run docker:up

# Stop
npm run docker:down

# Restart
npm run docker:restart

# View logs
npm run docker:logs

# Rebuild
npm run docker:rebuild
```

---

## 📝 Struktur Port

- **5000** - Docker container (internal)
- **80** - Nginx HTTP (public)
- **443** - Nginx HTTPS (public)

Traffic flow: User → Nginx (80/443) → Docker (5000) → Next.js App

---

## 🆘 Troubleshooting

### Container tidak start?

```bash
docker compose logs
```

### Port 5000 sudah dipakai?

```bash
sudo lsof -i :5000
# Kill process atau ganti port di docker-compose.yml
```

### Nginx error?

```bash
sudo nginx -t
sudo systemctl status nginx
sudo tail -f /var/log/nginx/ratata-error.log
```

---

## 📚 Documentation

Butuh detail lebih lengkap? Baca:
- [Docker Deployment Guide](./DOCKER-DEPLOYMENT.md) - Full documentation
- [README](./README.md) - Project overview

---

## 🎉 Done!

Website Ratata sekarang live dengan Docker! 🐭🚀

**Quick recap:**
1. ✅ Docker installed
2. ✅ App running di port 5000
3. ✅ Nginx routing traffic
4. ✅ SSL enabled (optional)

**Update workflow:**
```bash
cd /var/www/ratata && git pull && ./deploy-docker.sh
```

Simple! 🎯
