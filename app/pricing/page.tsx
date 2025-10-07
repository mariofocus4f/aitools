'use client'

import { Check, Star, TrendingUp, Users, Target, Zap } from 'lucide-react'
import Link from 'next/link'

export default function PricingPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cennik reklam w{' '}
            <span className="gradient-primary bg-clip-text text-transparent">
              TrustyAI
            </span>
          </h1>
          <p className="text-xl text-muted mb-8 max-w-3xl mx-auto">
            Dotrzyj do tysięcy profesjonalistów poszukujących narzędzi AI. 
            Nasza platforma to miejsce, gdzie decyzje o wyborze technologii są podejmowane.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary-500" />
              <span>10,000+ użytkowników miesięcznie</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary-500" />
              <span>Wysokiej jakości audytorium</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary-500" />
              <span>Rosnący ruch organiczny</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Featured Tool Card */}
          <div className="glass-card rounded-2xl p-8 shadow-card border-2 border-primary-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Najpopularniejsze
              </span>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Featured Tool</h3>
              <p className="text-muted mb-4">Promocja narzędzia w sekcji polecanych</p>
              <div className="text-4xl font-bold text-primary-500 mb-2">$299</div>
              <p className="text-sm text-muted">za miesiąc</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-success flex-shrink-0" />
                <span>Pozycja w sekcji "Polecane narzędzia"</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-success flex-shrink-0" />
                <span>Badge "Polecane przez redakcję"</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-success flex-shrink-0" />
                <span>Wysokiej jakości logo i opis</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-success flex-shrink-0" />
                <span>Statystyki kliknięć</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-success flex-shrink-0" />
                <span>Priorytet w wynikach wyszukiwania</span>
              </li>
            </ul>
            <Link href="/contact" className="block">
              <button className="w-full btn-primary">
                Skontaktuj się z nami
              </button>
            </Link>
          </div>

          {/* Category Sponsorship */}
          <div className="glass-card rounded-2xl p-8 shadow-card">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Sponsor kategorii</h3>
              <p className="text-muted mb-4">Sponsoring całej kategorii narzędzi</p>
              <div className="text-4xl font-bold text-primary-500 mb-2">$199</div>
              <p className="text-sm text-muted">za miesiąc</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-success flex-shrink-0" />
                <span>Logo w nagłówku kategorii</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-success flex-shrink-0" />
                <span>Pierwsza pozycja w kategorii</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-success flex-shrink-0" />
                <span>Dedykowana strona kategorii</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-success flex-shrink-0" />
                <span>Newsletter mention</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-success flex-shrink-0" />
                <span>Raport miesięczny</span>
              </li>
            </ul>
            <Link href="/contact" className="block">
              <button className="w-full btn-secondary">
                Dowiedz się więcej
              </button>
            </Link>
          </div>

          {/* Banner Ad */}
          <div className="glass-card rounded-2xl p-8 shadow-card">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Banner reklamowy</h3>
              <p className="text-muted mb-4">Reklama w sidebarze lub headerze</p>
              <div className="text-4xl font-bold text-primary-500 mb-2">$99</div>
              <p className="text-sm text-muted">za miesiąc</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-success flex-shrink-0" />
                <span>Banner 300x250px</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-success flex-shrink-0" />
                <span>Wszystkie strony</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-success flex-shrink-0" />
                <span>Responsive design</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-success flex-shrink-0" />
                <span>Statystyki wyświetleń</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-success flex-shrink-0" />
                <span>Możliwość A/B testów</span>
              </li>
            </ul>
            <Link href="/contact" className="block">
              <button className="w-full btn-secondary">
                Rozpocznij kampanię
              </button>
            </Link>
          </div>
        </div>

        {/* Additional Services */}
        <div className="glass-card rounded-2xl p-8 shadow-card mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Dodatkowe usługi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Recenzja narzędzia</h3>
                <p className="text-muted mb-3">
                  Szczegółowa recenzja Twojego narzędzia AI z testami i oceną.
                </p>
                <div className="text-2xl font-bold text-primary-500">$149</div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-accent-blue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Newsletter sponsorowany</h3>
                <p className="text-muted mb-3">
                  Dedykowany newsletter o Twoim narzędziu do 5,000+ subskrybentów.
                </p>
                <div className="text-2xl font-bold text-primary-500">$199</div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Kampania social media</h3>
                <p className="text-muted mb-3">
                  Promocja na naszych kanałach społecznościowych (Twitter, LinkedIn).
                </p>
                <div className="text-2xl font-bold text-primary-500">$99</div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-accent-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Webinar sponsorowany</h3>
                <p className="text-muted mb-3">
                  Organizacja webinaru o Twoim narzędziu z promocją w newsletterze.
                </p>
                <div className="text-2xl font-bold text-primary-500">$299</div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="glass-card rounded-2xl p-8 shadow-card mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Dlaczego TrustyAI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Wysokiej jakości audytorium</h3>
              <p className="text-muted">
                Nasi użytkownicy to profesjonaliści, deweloperzy i decydenci biznesowi 
                aktywnie poszukujący rozwiązań AI.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Rosnący ruch</h3>
              <p className="text-muted">
                Platforma rozwija się dynamicznie. W ciągu ostatnich 6 miesięcy 
                ruch wzrósł o 300%.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Zaufanie i wiarygodność</h3>
              <p className="text-muted">
                Każde narzędzie jest weryfikowane przez nasz zespół ekspertów. 
                Użytkownicy ufają naszym rekomendacjom.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Gotowy na start?</h2>
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            Skontaktuj się z nami, aby omówić najlepszą strategię promocji 
            Twojego narzędzia AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="btn-primary flex items-center gap-2">
                <Users className="w-5 h-5" />
                Skontaktuj się z nami
              </button>
            </Link>
            <Link href="/media-kit">
              <button className="btn-secondary flex items-center gap-2">
                <Star className="w-5 h-5" />
                Pobierz Media Kit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
