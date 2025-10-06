# Deployment Guide - BestAITools

## Wdrożenie na produkcję

### 1. Wymagania

- Node.js 18+
- PostgreSQL 14+
- Redis (opcjonalnie, dla cache)
- Elasticsearch 8+ (dla wyszukiwania)

### 2. Zmienne środowiskowe

Skopiuj `.env.example` do `.env` i uzupełnij:

```bash
# Database
DATABASE_URL="postgresql://user:password@host:5432/bestaitools"

# Elasticsearch
ELASTICSEARCH_URL="http://localhost:9200"

# Newsletter (Mailchimp)
MAILCHIMP_API_KEY="your_api_key"
MAILCHIMP_LIST_ID="your_list_id"

# Analytics
PLAUSIBLE_DOMAIN="bestaitools.pl"

# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY="your_site_key"
RECAPTCHA_SECRET_KEY="your_secret_key"

# Cloudinary
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
```

### 3. Instalacja Prisma

```bash
# Zainstaluj Prisma CLI
npm install -D prisma

# Wygeneruj Prisma Client
npx prisma generate

# Migruj bazę danych
npx prisma migrate deploy
```

### 4. Build aplikacji

```bash
# Instalacja zależności
npm ci

# Build Next.js
npm run build

# Uruchom w produkcji
npm start
```

### 5. Wdrożenie na Vercel (Zalecane)

1. Push code do GitHub
2. Połącz repo z Vercel
3. Ustaw zmienne środowiskowe w Vercel Dashboard
4. Deploy automatycznie

```bash
# Lub użyj Vercel CLI
npx vercel --prod
```

### 6. Wdrożenie na VPS/Cloud

#### Nginx configuration

```nginx
server {
    listen 80;
    server_name bestaitools.pl www.bestaitools.pl;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### PM2 Process Manager

```bash
# Install PM2
npm install -g pm2

# Start app
pm2 start npm --name "bestaitools" -- start

# Save PM2 config
pm2 save

# Auto-start on reboot
pm2 startup
```

### 7. PostgreSQL Setup

```sql
-- Create database
CREATE DATABASE bestaitools;

-- Create user
CREATE USER bestaitools_user WITH PASSWORD 'strong_password';

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE bestaitools TO bestaitools_user;
```

### 8. Elasticsearch Setup

```bash
# Docker setup (recommended)
docker run -d \
  --name elasticsearch \
  -p 9200:9200 \
  -e "discovery.type=single-node" \
  -e "xpack.security.enabled=false" \
  elasticsearch:8.11.0

# Create index
curl -X PUT "localhost:9200/tools" -H 'Content-Type: application/json' -d'
{
  "mappings": {
    "properties": {
      "name": { "type": "text" },
      "description": { "type": "text" },
      "tags": { "type": "keyword" },
      "categories": { "type": "keyword" }
    }
  }
}
'
```

### 9. CDN & Assets

#### Cloudflare Setup

1. Dodaj domenę do Cloudflare
2. Ustaw DNS records
3. Włącz caching dla assets
4. Włącz Brotli compression

#### Cloudinary Setup

```bash
# Upload logo placeholders
npm run upload-assets
```

### 10. Monitoring & Analytics

#### Plausible Analytics

```html
<!-- Add to <head> in layout.tsx -->
<script defer data-domain="bestaitools.pl" src="https://plausible.io/js/script.js"></script>
```

#### Error Tracking (Sentry)

```bash
npm install @sentry/nextjs

# Initialize
npx @sentry/wizard@latest -i nextjs
```

### 11. Security Checklist

- [ ] HTTPS enabled (SSL certificate)
- [ ] Environment variables secured
- [ ] Database password strong
- [ ] reCAPTCHA on forms
- [ ] Rate limiting enabled
- [ ] CORS configured
- [ ] CSP headers set
- [ ] SQL injection protection (Prisma)
- [ ] XSS protection

### 12. Performance Optimization

```javascript
// next.config.js
module.exports = {
  compress: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
}
```

### 13. Backup Strategy

```bash
# PostgreSQL backup (daily cron)
0 2 * * * pg_dump bestaitools | gzip > /backups/bestaitools_$(date +\%Y\%m\%d).sql.gz

# Keep last 30 days
find /backups -name "bestaitools_*.sql.gz" -mtime +30 -delete
```

### 14. Scaling

#### Horizontal Scaling

- Deploy to multiple Vercel regions
- Use Cloudflare CDN for global distribution
- Database read replicas for heavy traffic

#### Caching Strategy

```javascript
// Redis caching for API routes
import Redis from 'ioredis'

const redis = new Redis(process.env.REDIS_URL)

// Cache tool data for 1 hour
await redis.setex(`tool:${slug}`, 3600, JSON.stringify(tool))
```

### 15. CI/CD Pipeline

`.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm test
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## Post-Deployment Checklist

- [ ] Sprawdź wszystkie strony działają
- [ ] Test formularza zgłoszenia
- [ ] Test zapisów do newslettera
- [ ] Test redirectów afiliacyjnych
- [ ] Lighthouse score >90
- [ ] Mobile responsiveness
- [ ] Sitemap generuje się poprawnie
- [ ] robots.txt dostępny
- [ ] Analytics tracking działa
- [ ] Error monitoring aktywny
- [ ] Backupy skonfigurowane
- [ ] SSL certificate valid

---

**Wsparcie techniczne**: admin@bestaitools.pl  
**Dokumentacja**: Zobacz README.md dla szczegółów development

