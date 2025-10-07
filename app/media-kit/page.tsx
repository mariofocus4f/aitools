'use client'

import { Download, Users, TrendingUp, Target, Star, Zap, Mail, Calendar, Globe, BarChart3 } from 'lucide-react'
import Link from 'next/link'

export default function MediaKitPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Media Kit{' '}
            <span className="gradient-primary bg-clip-text text-transparent">
              TrustyAI
            </span>
          </h1>
          <p className="text-xl text-muted mb-8 max-w-3xl mx-auto">
            Wszystkie materiały potrzebne do promocji Twojego narzędzia AI. 
            Loga, statystyki, informacje o audytorium i gotowe do użycia materiały graficzne.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center gap-2">
              <Download className="w-5 h-5" />
              Pobierz pełny Media Kit (ZIP)
            </button>
            <Link href="/contact">
              <button className="btn-secondary flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Skontaktuj się z nami
              </button>
            </Link>
          </div>
        </div>

        {/* Platform Statistics */}
        <div className="glass-card rounded-2xl p-8 shadow-card mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Statystyki platformy</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-primary-500 mb-2">10,000+</div>
              <p className="text-sm text-muted">Użytkowników miesięcznie</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent-blue" />
              </div>
              <div className="text-3xl font-bold text-primary-500 mb-2">300%</div>
              <p className="text-sm text-muted">Wzrost ruchu (6 miesięcy)</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-success" />
              </div>
              <div className="text-3xl font-bold text-primary-500 mb-2">85%</div>
              <p className="text-sm text-muted">Profesjonalistów IT</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-accent-purple" />
              </div>
              <div className="text-3xl font-bold text-primary-500 mb-2">4.8/5</div>
              <p className="text-sm text-muted">Ocena zaufania</p>
            </div>
          </div>
        </div>

        {/* Audience Demographics */}
        <div className="glass-card rounded-2xl p-8 shadow-card mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Charakterystyka audytorium</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary-500" />
                Zawody
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted">Deweloperzy</span>
                  <span className="font-semibold">35%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted">Product Managerowie</span>
                  <span className="font-semibold">20%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted">Marketingowcy</span>
                  <span className="font-semibold">15%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted">Designerzy</span>
                  <span className="font-semibold">12%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted">Inne</span>
                  <span className="font-semibold">18%</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary-500" />
                Lokalizacja
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted">Polska</span>
                  <span className="font-semibold">60%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted">Europa</span>
                  <span className="font-semibold">25%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted">Ameryka Północna</span>
                  <span className="font-semibold">10%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted">Inne</span>
                  <span className="font-semibold">5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Assets */}
        <div className="glass-card rounded-2xl p-8 shadow-card mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Materiały marki</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Logo */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-accent-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">TA</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Logo TrustyAI</h3>
              <p className="text-sm text-muted mb-4">
                Logo w różnych formatach i rozmiarach
              </p>
              <button className="btn-secondary text-sm">
                <Download className="w-4 h-4 mr-2" />
                Pobierz (PNG, SVG)
              </button>
            </div>
            
            {/* Color Palette */}
            <div className="text-center">
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="w-16 h-16 bg-primary-500 rounded-lg"></div>
                <div className="w-16 h-16 bg-accent-blue rounded-lg"></div>
                <div className="w-16 h-16 bg-accent-purple rounded-lg"></div>
                <div className="w-16 h-16 bg-success rounded-lg"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Paleta kolorów</h3>
              <p className="text-sm text-muted mb-4">
                Kolory marki w formatach HEX, RGB, CMYK
              </p>
              <button className="btn-secondary text-sm">
                <Download className="w-4 h-4 mr-2" />
                Pobierz paletę
              </button>
            </div>
            
            {/* Typography */}
            <div className="text-center">
              <div className="space-y-2 mb-4">
                <div className="text-2xl font-bold">TrustyAI</div>
                <div className="text-lg font-semibold">Nagłówki</div>
                <div className="text-sm">Tekst podstawowy</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Typografia</h3>
              <p className="text-sm text-muted mb-4">
                Fonty i style tekstu marki
              </p>
              <button className="btn-secondary text-sm">
                <Download className="w-4 h-4 mr-2" />
                Pobierz fonty
              </button>
            </div>
          </div>
        </div>

        {/* Screenshots */}
        <div className="glass-card rounded-2xl p-8 shadow-card mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Zrzuty ekranu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 mb-4">
                <div className="text-center text-muted">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-700 dark:to-slate-600 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-semibold">Strona główna</span>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Strona główna</h3>
              <p className="text-sm text-muted mb-4">
                Hero section, polecane narzędzia, kategorie
              </p>
              <button className="btn-secondary text-sm">
                <Download className="w-4 h-4 mr-2" />
                Pobierz (1920x1080)
              </button>
            </div>
            
            <div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 mb-4">
                <div className="text-center text-muted">
                  <div className="w-full h-48 bg-gradient-to-br from-green-100 to-blue-100 dark:from-slate-700 dark:to-slate-600 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-semibold">Kategorie</span>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Strona kategorii</h3>
              <p className="text-sm text-muted mb-4">
                Lista narzędzi w kategorii z filtrami
              </p>
              <button className="btn-secondary text-sm">
                <Download className="w-4 h-4 mr-2" />
                Pobierz (1920x1080)
              </button>
            </div>
          </div>
        </div>

        {/* Press Kit */}
        <div className="glass-card rounded-2xl p-8 shadow-card mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Press Kit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Informacje o platformie</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium">Nazwa:</span> TrustyAI
                </div>
                <div>
                  <span className="font-medium">URL:</span> https://trustyai.pl
                </div>
                <div>
                  <span className="font-medium">Założona:</span> 2024
                </div>
                <div>
                  <span className="font-medium">Lokalizacja:</span> Polska
                </div>
                <div>
                  <span className="font-medium">Język:</span> Polski
                </div>
                <div>
                  <span className="font-medium">Kategoria:</span> Katalog narzędzi AI
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Opis platformy</h3>
              <p className="text-sm text-muted mb-4">
                TrustyAI to zaufany katalog narzędzi sztucznej inteligencji, 
                który pomaga profesjonalistom znaleźć najlepsze rozwiązania AI 
                dla swoich projektów. Platforma oferuje szczegółowe recenzje, 
                porównania narzędzi i gotowe prompty AI.
              </p>
              <p className="text-sm text-muted">
                Nasza misja to demokratyzacja dostępu do technologii AI poprzez 
                edukację i pomoc w wyborze odpowiednich narzędzi.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="glass-card rounded-2xl p-8 shadow-card mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Kontakt dla mediów</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary-500" />
                Kontakt
              </h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium">Email:</span> media@trustyai.pl
                </div>
                <div>
                  <span className="font-medium">Telefon:</span> +48 XXX XXX XXX
                </div>
                <div>
                  <span className="font-medium">Czas odpowiedzi:</span> 24h
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary-500" />
                Dostępność
              </h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium">Poniedziałek - Piątek:</span> 9:00 - 17:00
                </div>
                <div>
                  <span className="font-medium">Weekend:</span> Na żądanie
                </div>
                <div>
                  <span className="font-medium">Języki:</span> Polski, Angielski
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download All */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Pobierz wszystko</h2>
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            Kompletny Media Kit w jednym pliku ZIP. Zawiera wszystkie loga, 
            zrzuty ekranu, statystyki i materiały graficzne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center gap-2">
              <Download className="w-5 h-5" />
              Pobierz pełny Media Kit (ZIP, 25MB)
            </button>
            <Link href="/contact">
              <button className="btn-secondary flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Skontaktuj się z nami
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
