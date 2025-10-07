'use client'

import { Check, Users, TrendingUp, Target, Star, Zap, Mail, Calendar, DollarSign } from 'lucide-react'
import Link from 'next/link'

export default function AdvertisePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Reklamuj się w{' '}
            <span className="gradient-primary bg-clip-text text-transparent">
              TrustyAI
            </span>
          </h1>
          <p className="text-xl text-muted mb-8 max-w-3xl mx-auto">
            Dotrzyj do tysięcy profesjonalistów, deweloperów i decydentów biznesowych 
            poszukujących najlepszych narzędzi AI. Nasza platforma to miejsce, 
            gdzie podejmowane są kluczowe decyzje technologiczne.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">10,000+</div>
              <p className="text-sm text-muted">Użytkowników miesięcznie</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">85%</div>
              <p className="text-sm text-muted">Profesjonalistów IT</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">300%</div>
              <p className="text-sm text-muted">Wzrost ruchu (6 miesięcy)</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">4.8/5</div>
              <p className="text-sm text-muted">Ocena zaufania</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="btn-primary flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Skontaktuj się z nami
              </button>
            </Link>
            <Link href="/pricing">
              <button className="btn-secondary flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Zobacz cennik
              </button>
            </Link>
          </div>
        </div>

        {/* Why Advertise With Us */}
        <div className="glass-card rounded-2xl p-8 shadow-card mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Dlaczego warto reklamować się z nami?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Precyzyjne targetowanie</h3>
              <p className="text-muted">
                Nasze audytorium to profesjonaliści aktywnie poszukujący rozwiązań AI. 
                Każdy użytkownik to potencjalny klient.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Szybki wzrost</h3>
              <p className="text-muted">
                Platforma rozwija się dynamicznie. W ciągu ostatnich 6 miesięcy 
                ruch wzrósł o 300%, a liczba użytkowników podwoiła się.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Wysoka wiarygodność</h3>
              <p className="text-muted">
                Każde narzędzie jest weryfikowane przez nasz zespół ekspertów. 
                Użytkownicy ufają naszym rekomendacjom i recenzjom.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Jakościowe audytorium</h3>
              <p className="text-muted">
                85% naszych użytkowników to profesjonaliści IT, deweloperzy, 
                product managerowie i decydenci biznesowi.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Szybka implementacja</h3>
              <p className="text-muted">
                Od podpisania umowy do uruchomienia kampanii mija maksymalnie 48 godzin. 
                Szybko, sprawnie, profesjonalnie.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Elastyczne terminy</h3>
              <p className="text-muted">
                Kampanie od 1 tygodnia do 12 miesięcy. Możliwość dostosowania 
                do Twojego budżetu i celów biznesowych.
              </p>
            </div>
          </div>
        </div>

        {/* Advertising Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Opcje reklamowe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured Tool */}
            <div className="glass-card rounded-2xl p-6 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Featured Tool</h3>
                  <p className="text-sm text-muted">Najwyższa widoczność</p>
                </div>
              </div>
              <p className="text-muted mb-4">
                Twoje narzędzie pojawia się w sekcji "Polecane narzędzia" na stronie głównej 
                z badge'em "Polecane przez redakcję".
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-success flex-shrink-0" />
                  <span>Pozycja w sekcji polecanych</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-success flex-shrink-0" />
                  <span>Badge wiarygodności</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-success flex-shrink-0" />
                  <span>Priorytet w wyszukiwaniu</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-success flex-shrink-0" />
                  <span>Statystyki kliknięć</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary-500 mb-4">$299/miesiąc</div>
              <Link href="/contact">
                <button className="w-full btn-primary">Dowiedz się więcej</button>
              </Link>
            </div>

            {/* Category Sponsorship */}
            <div className="glass-card rounded-2xl p-6 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent-blue/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-accent-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Sponsor kategorii</h3>
                  <p className="text-sm text-muted">Dominacja w kategorii</p>
                </div>
              </div>
              <p className="text-muted mb-4">
                Zostań głównym sponsorem wybranej kategorii narzędzi AI. 
                Twoje logo i narzędzie będą widoczne na pierwszym miejscu.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-success flex-shrink-0" />
                  <span>Logo w nagłówku kategorii</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-success flex-shrink-0" />
                  <span>Pierwsza pozycja w kategorii</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-success flex-shrink-0" />
                  <span>Mention w newsletterze</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-success flex-shrink-0" />
                  <span>Raport miesięczny</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary-500 mb-4">$199/miesiąc</div>
              <Link href="/contact">
                <button className="w-full btn-secondary">Rozpocznij</button>
              </Link>
            </div>

            {/* Banner Ads */}
            <div className="glass-card rounded-2xl p-6 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Banner reklamowy</h3>
                  <p className="text-sm text-muted">Stała widoczność</p>
                </div>
              </div>
              <p className="text-muted mb-4">
                Banner reklamowy w sidebarze lub headerze strony. 
                Widoczny na wszystkich podstronach platformy.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-success flex-shrink-0" />
                  <span>Banner 300x250px</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-success flex-shrink-0" />
                  <span>Wszystkie strony</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-success flex-shrink-0" />
                  <span>Responsive design</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-success flex-shrink-0" />
                  <span>Statystyki wyświetleń</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary-500 mb-4">$99/miesiąc</div>
              <Link href="/contact">
                <button className="w-full btn-secondary">Zamów banner</button>
              </Link>
            </div>

            {/* Newsletter Sponsorship */}
            <div className="glass-card rounded-2xl p-6 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent-purple/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Newsletter sponsorowany</h3>
                  <p className="text-sm text-muted">Bezpośredni kontakt</p>
                </div>
              </div>
              <p className="text-muted mb-4">
                Dedykowany newsletter o Twoim narzędziu wysyłany do 5,000+ 
                aktywnych subskrybentów zainteresowanych AI.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-success flex-shrink-0" />
                  <span>5,000+ subskrybentów</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-success flex-shrink-0" />
                  <span>Dedykowana treść</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-success flex-shrink-0" />
                  <span>Wysokie otwarcia (25%+)</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-success flex-shrink-0" />
                  <span>Statystyki kampanii</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary-500 mb-4">$199/wysyłka</div>
              <Link href="/contact">
                <button className="w-full btn-secondary">Zamów newsletter</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="glass-card rounded-2xl p-8 shadow-card mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Historie sukcesu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">AI Writing Tool</h3>
                  <p className="text-sm text-muted">Featured Tool Campaign</p>
                </div>
              </div>
              <p className="text-muted mb-4">
                "W ciągu 3 miesięcy kampanii Featured Tool nasze rejestracje wzrosły o 400%. 
                TrustyAI to najlepsza inwestycja marketingowa w tym roku."
              </p>
              <div className="text-sm font-medium text-blue-600">
                +400% rejestracji • +250% trialów
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Code Assistant</h3>
                  <p className="text-sm text-muted">Category Sponsorship</p>
                </div>
              </div>
              <p className="text-muted mb-4">
                "Sponsoring kategorii 'Code & Developer Tools' dał nam dominację w segmencie. 
                ROI wyniósł 350% w pierwszym miesiącu."
              </p>
              <div className="text-sm font-medium text-green-600">
                350% ROI • +180% organic traffic
              </div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="glass-card rounded-2xl p-8 shadow-card mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Jak to działa?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Kontakt</h3>
              <p className="text-sm text-muted">
                Skontaktuj się z nami przez formularz lub email. 
                Omówimy Twoje cele i budżet.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-blue">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Propozycja</h3>
              <p className="text-sm text-muted">
                Przygotujemy spersonalizowaną propozycję kampanii 
                dopasowaną do Twoich potrzeb.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-success">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Implementacja</h3>
              <p className="text-sm text-muted">
                Uruchamiamy kampanię w ciągu 48 godzin. 
                Dostarczamy materiały i konfigurujemy tracking.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-purple">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Monitoring</h3>
              <p className="text-sm text-muted">
                Regularne raporty i optymalizacja kampanii. 
                Wspieramy Cię w osiąganiu celów.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Gotowy na start?</h2>
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            Dołącz do grona zadowolonych reklamodawców i zwiększ widoczność 
            swojego narzędzia AI już dziś.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="btn-primary flex items-center gap-2">
                <Mail className="w-5 h-5" />
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
