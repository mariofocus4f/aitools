# TrustyAI - AI Tools Directory

**TrustyAI** to zaufany katalog narzędzi AI z funkcją wyszukiwania, filtrowania, porównywania i afiliacji. Projekt stworzony zgodnie ze specyfikacją techniczną Crusor Lab.

## 🚀 Funkcje MVP

### Dla użytkowników:
- ✅ Wyszukiwarka pełnotekstowa z filtrami
- ✅ Strony kategorii z sortowaniem
- ✅ Szczegółowe karty narzędzi
- ✅ Porównywarka narzędzi (2-4 równocześnie)
- ✅ Formularz zgłaszania nowych narzędzi
- ✅ Newsletter "Top 10 Weekly AI Tools"
- ✅ Sekcje: Featured, Most Popular, Highest Affiliate Payouts

### Design System (Liquid Design):
- 🎨 Paleta Ocean-Teal + Iris gradient
- 🌓 Dark/Light mode z localStorage
- 💧 Płynne kształty, glass-morphism, blob animations
- ♿ Accessibility (AA/AAA contrast, keyboard navigation)
- 📱 Fully responsive (mobile-first)

## 🛠 Stack technologiczny

- **Frontend**: Next.js 14 (App Router, SSR, ISR)
- **Styling**: Tailwind CSS + custom design tokens
- **Icons**: Lucide React
- **UI Components**: Headless UI
- **TypeScript**: Full type safety
- **Animation**: Framer Motion + CSS transitions

## 📦 Instalacja

```bash
# Zainstaluj zależności
npm install

# Uruchom dev server
npm run dev

# Build produkcyjny
npm run build

# Start produkcyjny
npm start
```

Aplikacja będzie dostępna pod adresem: `http://localhost:3000`

## 📁 Struktura projektu

```
aitools/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles + CSS variables
│   ├── category/[slug]/   # Category pages
│   ├── tool/[slug]/       # Tool detail pages
│   ├── compare/           # Comparison tool
│   └── submit/            # Submission form
├── components/            # React components
│   ├── Navbar.tsx
│   ├── ToolCard.tsx
│   ├── SearchInput.tsx
│   ├── NewsletterCard.tsx
│   └── ThemeProvider.tsx
├── types/                 # TypeScript definitions
│   └── index.ts
├── lib/                   # Utilities & data
│   └── mockData.ts        # Mock data (temporary)
└── public/                # Static assets
```

## 🎨 Design System

### Kolory (CSS Variables)

**Light Mode:**
- `--bg`: #FFFFFF
- `--surface`: #FFFFFF
- `--text`: #0B0F14
- `--muted`: #5F6B7A
- `--border`: #E6EAF0

**Dark Mode:**
- `--bg`: #0B0F14
- `--surface`: #121820
- `--text`: #E9EEF5
- `--muted`: #9BA8B7
- `--border`: #1E2833

**Primary (Ocean-Teal):** 50-900 scale  
**Accent:** Blue (#5B8CFF) → Purple (#9B5BFF) gradient

### Komponenty UI

- `btn-primary`: Gradient primary CTA
- `btn-secondary`: Outline secondary button
- `glass-card`: Glassmorphism card
- `input-field`: Styled form input
- `gradient-primary`: Hero gradient

## 📊 Modele danych

### Tool
```typescript
{
  id: string
  name: string
  domain: string
  slug: string
  shortDescription: string
  longDescription: string
  features: string[]
  pricingModels: ('free' | 'freemium' | 'subscription' | 'pay_per_use')[]
  categories: Category[]
  tags: string[]
  integrations: string[]
  affiliateProgram?: AffiliateProgram
  verifiedByEditor: boolean
  screenshots: string[]
  createdAt: Date
  updatedAt: Date
}
```

### AffiliateProgram
```typescript
{
  id: string
  toolId: string
  commissionType: 'CPA' | 'recurring' | 'fixed'
  commissionValue: number
  cookieWindowDays: number
  network: string
  affiliateLink: string
  estimatedEpc: number
  lastChecked: Date
}
```

## 🔜 Roadmap (90 dni)

### ✅ Etap 1 (Tydzień 1-3) - UKOŃCZONY
- [x] Projekt UI/UX (liquid design)
- [x] Modele danych TypeScript
- [x] Homepage + 3 kategorie
- [x] Navbar + Footer
- [x] Theme toggle (dark/light)

### 🚧 Etap 2 (Tydzień 4-7) - W TRAKCIE
- [ ] Integracja z bazą danych (PostgreSQL)
- [ ] API routes (REST)
- [ ] Wyszukiwarka + filtry
- [ ] Panel moderacji zgłoszeń
- [ ] Elasticsearch integration

### 📅 Etap 3 (Tydzień 8-10)
- [ ] Porównywarka (rozszerzona)
- [ ] Newsletter integration (Mailchimp/ConvertKit)
- [ ] Redirecty afiliacyjne z tracking
- [ ] Analytics (Plausible + custom events)

### 📅 Etap 4 (Tydzień 11-12)
- [ ] Monetyzacja (featured listings, sponsored)
- [ ] Dashboard analityczny (EPC, clicks)
- [ ] SEO optimization (sitemap, structured data)
- [ ] Performance optimization (Lighthouse >90)

## 💰 Monetyzacja

1. **Afiliacja**: Linki partnerskie (recurring + CPA)
2. **Featured Listings**: 399-2499 PLN / 14 dni
3. **Newsletter Sponsorowany**: 1500-4500 PLN per issue
4. **Launch Boost Packages**: 30-day promo bundle

## 📈 KPI

- **EPC/Session**: Główny wskaźnik przychodowy
- **Qualified Affiliate Clicks**: Kliknięcia w reflinki
- **CTR z kart narzędzi**: Efektywność opisów
- **Conversion rate z submitów**: Jakość zgłoszeń

## 🔒 Bezpieczeństwo

- [ ] reCAPTCHA na formularzach
- [ ] Rate limiting
- [ ] Domain validation
- [ ] HTTPS only
- [ ] CSP headers

## 📝 Licencja

Proprietary - Crusor Lab © 2025

## 👥 Zespół

**Crusor Lab / Finanse**  
Wersja: 1.0 (2025-10-06)

---

**Status projektu**: 🚧 MVP Development (Etap 1 ukończony)

