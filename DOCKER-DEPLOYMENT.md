# 🐳 Ratata - Docker Deployment Guide

Panduan lengkap untuk deploy Ratata website menggunakan Docker dan Docker Compose di VPS.

## 🎯 Overview

Deploy Ratata website dengan Docker sangat mudah:
1. **Git pull** - Update code terbaru
2. **Docker build** - Build image dari Dockerfile
3. **Docker compose up** - Start container di port 5000
4. **Nginx reverse proxy** - Route traffic dari port 80/443 ke 5000

---

## 📋 Prerequisites

- VPS dengan Ubuntu 20.04+ atau Debian 10+
- Docker dan Docker Compose installed
- Domain name (optional)
- SSH access ke VPS

---

## 🚀 Quick Start (5 Menit)

### 1. Install Docker di VPS

```bash
# Login ke VPS
ssh root@YOUR_VPS_IP

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo apt install docker-compose-plugin -y

# Verify installation
docker --version
docker compose version
```

### 2. Clone Repository

```bash
cd /var/www
git clone https://github.com/kanc-dev/ratata.git
cd ratata
```

### 3. Deploy dengan Docker

```bash
# Make scripts executable
chmod +x deploy-docker.sh
chmod +x docker-commands.sh

# Deploy
./deploy-docker.sh
```

✅ **Website sekarang berjalan di port 5000!**

Cek dengan: `curl http://localhost:5000`

---

## 📦 Manual Deployment Steps

### 1. Build Docker Image

```bash
docker compose build
```

### 2. Start Container

```bash
docker compose up -d
```

### 3. Check Status

```bash
docker compose ps
docker compose logs -f
```

---

## 🔄 Update & Redeploy

Ketika ada update code baru:

### Otomatis (Recommended)

```bash
./deploy-docker.sh
```

Script ini akan:
1. ✅ Git pull latest changes
2. ✅ Stop existing containers
3. ✅ Rebuild image
4. ✅ Start new containers
5. ✅ Show logs

### Manual

```bash
# Pull latest code
git pull origin main

# Rebuild and restart
docker compose down
docker compose up -d --build
```

---

## 🌐 Setup Nginx Reverse Proxy

Setelah container berjalan di port 5000, setup Nginx untuk routing:

### 1. Install Nginx

```bash
sudo apt install nginx -y
```

### 2. Create Nginx Config

```bash
sudo nano /etc/nginx/sites-available/ratata
```

Paste konfigurasi ini:

```nginx
server {
    listen 80;
    server_name YOUR_DOMAIN.com www.YOUR_DOMAIN.com;

    # Logs
    access_log /var/log/nginx/ratata-access.log;
    error_log /var/log/nginx/ratata-error.log;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json application/javascript;

    # Proxy to Docker container
    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Health check endpoint
    location /health {
        proxy_pass http://localhost:5000/api/health;
        access_log off;
    }

    # Static files caching
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        proxy_pass http://localhost:5000;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

### 3. Enable Site

```bash
sudo ln -s /etc/nginx/sites-available/ratata /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

✅ **Website sekarang dapat diakses via http://YOUR_DOMAIN.com**

### 4. Setup SSL (Optional tapi Recommended)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d YOUR_DOMAIN.com -d www.YOUR_DOMAIN.com

# Auto-renewal test
sudo certbot renew --dry-run
```

✅ **Website sekarang HTTPS: https://YOUR_DOMAIN.com**

---

## 🛠️ Docker Commands Reference

### Using docker-commands.sh (Interactive Menu)

```bash
./docker-commands.sh
```

Menu options:
- **1** - Start containers
- **2** - Stop containers
- **3** - Restart containers
- **4** - View logs
- **5** - View status
- **6** - Rebuild and restart
- **7** - Clean all (remove containers & images)
- **8** - Shell into container
- **9** - Update (git pull + rebuild)
- **0** - Exit

### Manual Commands

```bash
# Start
docker compose up -d

# Stop
docker compose down

# Restart
docker compose restart

# Rebuild
docker compose up -d --build

# View logs
docker compose logs -f

# View logs (last 100 lines)
docker compose logs -f --tail=100

# Check status
docker compose ps

# Shell into container
docker compose exec ratata-web sh

# Remove everything
docker compose down
docker rmi ratata-website:latest
```

---

## 📊 Monitoring & Logs

### View Real-time Logs

```bash
docker compose logs -f
```

### View Container Stats

```bash
docker stats ratata-web
```

### Health Check

```bash
# Check if container is healthy
docker compose ps

# Check application health
curl http://localhost:5000/api/health
```

### Check Resource Usage

```bash
# Disk usage
docker system df

# Container resource usage
docker stats
```

---

## 🔧 Troubleshooting

### Container won't start

```bash
# Check logs
docker compose logs

# Check if port 5000 is already in use
sudo lsof -i :5000
sudo netstat -tulpn | grep :5000

# Stop conflicting process or change port
```

### Build fails

```bash
# Clean build cache
docker builder prune -af

# Rebuild from scratch
docker compose build --no-cache
```

### Out of disk space

```bash
# Clean unused images
docker image prune -a

# Clean everything
docker system prune -a --volumes

# Check disk usage
docker system df
```

### Container keeps restarting

```bash
# Check logs
docker compose logs --tail=100

# Check container health
docker inspect ratata-web | grep Health -A 10
```

### Can't access website

```bash
# Check if container is running
docker compose ps

# Check if port is accessible
curl http://localhost:5000

# Check Nginx
sudo nginx -t
sudo systemctl status nginx
```

---

## 🔐 Security Best Practices

### 1. Use Non-root User

Dockerfile sudah configured untuk run sebagai non-root user `nextjs`.

### 2. Update Regularly

```bash
# Update base images
docker compose pull
docker compose up -d --build
```

### 3. Limit Resources

Edit `docker-compose.yml`:

```yaml
services:
  ratata-web:
    # ... existing config
    deploy:
      resources:
        limits:
          cpus: '1'
          memory: 512M
        reservations:
          cpus: '0.5'
          memory: 256M
```

### 4. Setup Firewall

```bash
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw enable
```

---

## 📈 Performance Tips

### 1. Enable Nginx Caching

Already configured in Nginx config above.

### 2. Use CDN (Optional)

Consider using Cloudflare for:
- DDoS protection
- Global CDN
- Free SSL

### 3. Monitor with Docker Stats

```bash
# Real-time monitoring
docker stats

# Or use external tools
docker run -d --name=cadvisor -p 8080:8080 \
  -v /:/rootfs:ro \
  -v /var/run:/var/run:ro \
  -v /sys:/sys:ro \
  -v /var/lib/docker/:/var/lib/docker:ro \
  gcr.io/cadvisor/cadvisor:latest
```

---

## 🔄 CI/CD Integration (Optional)

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to VPS

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to VPS
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USER }}
          key: ${{ secrets.VPS_SSH_KEY }}
          script: |
            cd /var/www/ratata
            git pull origin main
            docker compose down
            docker compose up -d --build
```

---

## 📝 Environment Variables (Optional)

Create `.env` file:

```env
NODE_ENV=production
PORT=5000
HOSTNAME=0.0.0.0
```

Update `docker-compose.yml`:

```yaml
services:
  ratata-web:
    env_file:
      - .env
```

---

## 🆘 Support

Need help?
- Check [main README](./README.md)
- Check [PM2 Deployment](./DEPLOYMENT.md) for alternative deployment
- Open issue on GitHub

---

## 📚 Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Next.js Docker Guide](https://nextjs.org/docs/deployment#docker-image)
- [Nginx Documentation](https://nginx.org/en/docs/)

---

## 🎉 Summary

Deployment workflow:

```bash
# One-time setup
1. Install Docker & Docker Compose
2. Clone repository
3. Setup Nginx reverse proxy
4. Setup SSL with Certbot

# Regular updates
cd /var/www/ratata
git pull
./deploy-docker.sh
```

That's it! Your Ratata website is now running in Docker! 🐭🚀
