'use client'

import { Users, Target, Star, Zap, Heart, Award, Globe, TrendingUp, CheckCircle, Lightbulb } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            O{' '}
            <span className="gradient-primary bg-clip-text text-transparent">
              TrustyAI
            </span>
          </h1>
          <p className="text-xl text-muted mb-8 max-w-3xl mx-auto">
            Jesteśmy zespołem pasjonatów technologii AI, którzy wierzą, że sztuczna inteligencja 
            może zmienić sposób, w jaki pracujemy i tworzymy. Nasza misja to pomóc Ci znaleźć 
            najlepsze narzędzia AI dla Twoich potrzeb.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass-card rounded-2xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold">Nasza misja</h2>
            </div>
            <p className="text-muted leading-relaxed">
              Demokratyzujemy dostęp do technologii AI poprzez edukację i pomoc w wyborze 
              odpowiednich narzędzi. Chcemy, aby każdy profesjonalista mógł łatwo znaleźć 
              i wykorzystać potencjał sztucznej inteligencji w swojej pracy.
            </p>
          </div>
          
          <div className="glass-card rounded-2xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent-blue/10 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-accent-blue" />
              </div>
              <h2 className="text-2xl font-bold">Nasza wizja</h2>
            </div>
            <p className="text-muted leading-relaxed">
              Stworzyć największą i najbardziej zaufaną platformę do odkrywania narzędzi AI 
              w Polsce. Chcemy być miejscem, gdzie decyzje o wyborze technologii AI są 
              podejmowane na podstawie rzetelnych informacji i doświadczeń.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="glass-card rounded-2xl p-8 shadow-card mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Nasza historia</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-muted leading-relaxed mb-6">
              TrustyAI powstało z potrzeby. Jako profesjonaliści pracujący z technologiami AI, 
              często spotykaliśmy się z problemem znalezienia odpowiednich narzędzi dla naszych 
              projektów. Rynek narzędzi AI rozwija się w zawrotnym tempie - każdego dnia 
              pojawiają się nowe rozwiązania, a wybór odpowiedniego narzędzia staje się coraz 
              trudniejszy.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Zauważyliśmy, że brakuje centralnego miejsca, gdzie można by znaleźć rzetelne 
              informacje o narzędziach AI, porównać je ze sobą i zrozumieć, które najlepiej 
              sprawdzą się w konkretnych zastosowaniach. Postanowiliśmy to zmienić.
            </p>
            <p className="text-muted leading-relaxed">
              Dziś TrustyAI to platforma, która pomaga tysiącom profesjonalistów w Polsce 
              i za granicą znaleźć najlepsze narzędzia AI. Każde narzędzie w naszym katalogu 
              jest weryfikowane przez nasz zespół ekspertów, a użytkownicy mogą liczyć na 
              rzetelne recenzje i porównania.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="glass-card rounded-2xl p-8 shadow-card mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Nasze wartości</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Rzetelność</h3>
              <p className="text-muted">
                Każde narzędzie jest testowane przez nasz zespół. Nie akceptujemy 
                płatnych recenzji - nasze opinie są obiektywne i uczciwe.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Społeczność</h3>
              <p className="text-muted">
                Wierzymy w siłę społeczności. Nasze recenzje i rekomendacje są 
                tworzone przez ekspertów dla ekspertów.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innowacja</h3>
              <p className="text-muted">
                Śledzimy najnowsze trendy w AI i jako pierwsi informujemy o 
                przełomowych narzędziach i technologiach.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pasja</h3>
              <p className="text-muted">
                Kochamy to, co robimy. Nasza pasja do technologii AI napędza 
                nas do ciągłego ulepszania platformy.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Jakość</h3>
              <p className="text-muted">
                Stawiamy na jakość, nie na ilość. Każde narzędzie w naszym 
                katalogu przeszło rygorystyczny proces weryfikacji.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Dostępność</h3>
              <p className="text-muted">
                Wierzymy, że najlepsze narzędzia AI powinny być dostępne dla 
                wszystkich, niezależnie od budżetu czy poziomu zaawansowania.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="glass-card rounded-2xl p-8 shadow-card mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Nasz zespół</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">MK</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Mariusz K.</h3>
              <p className="text-sm text-muted mb-3">Założyciel & CEO</p>
              <p className="text-sm text-muted">
                10+ lat w branży tech, ekspert AI/ML. Wcześniej w Google, 
                Microsoft i kilku startupach AI.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-accent-purple to-success rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">AK</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Anna K.</h3>
              <p className="text-sm text-muted mb-3">Head of Content</p>
              <p className="text-sm text-muted">
                Dziennikarka tech z 8-letnim doświadczeniem. Specjalizuje się 
                w recenzjach narzędzi AI i trendach technologicznych.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-success to-accent-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">PT</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Piotr T.</h3>
              <p className="text-sm text-muted mb-3">Lead Developer</p>
              <p className="text-sm text-muted">
                Full-stack developer z pasją do AI. Tworzy narzędzia, które 
                pomagają użytkownikom w odkrywaniu najlepszych rozwiązań AI.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="glass-card rounded-2xl p-8 shadow-card mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Nasze osiągnięcia</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">500+</div>
              <p className="text-sm text-muted">Zweryfikowanych narzędzi AI</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">10,000+</div>
              <p className="text-sm text-muted">Użytkowników miesięcznie</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">50+</div>
              <p className="text-sm text-muted">Recenzji eksperckich</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">95%</div>
              <p className="text-sm text-muted">Zadowolonych użytkowników</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="glass-card rounded-2xl p-8 shadow-card mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Skontaktuj się z nami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Masz pytania?</h3>
              <p className="text-muted mb-6">
                Jesteśmy tutaj, aby pomóc. Skontaktuj się z nami, jeśli masz pytania 
                dotyczące narzędzi AI, chcesz zgłosić nowe narzędzie lub masz sugestie 
                dotyczące naszej platformy.
              </p>
              <Link href="/contact">
                <button className="btn-primary">
                  Napisz do nas
                </button>
              </Link>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Chcesz dołączyć?</h3>
              <p className="text-muted mb-6">
                Szukamy pasjonatów AI, którzy chcą pomóc w budowaniu najlepszej 
                platformy do odkrywania narzędzi AI. Sprawdź nasze otwarte pozycje.
              </p>
              <Link href="/contact">
                <button className="btn-secondary">
                  Zobacz oferty pracy
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Dołącz do społeczności TrustyAI</h2>
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            Bądź na bieżąco z najnowszymi narzędziami AI i trendami technologicznymi. 
            Dołącz do tysięcy profesjonalistów, którzy już ufają naszym rekomendacjom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <button className="btn-primary flex items-center gap-2">
                <Star className="w-5 h-5" />
                Odkryj narzędzia AI
              </button>
            </Link>
            <Link href="/workflowy">
              <button className="btn-secondary flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Zobacz prompty
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
