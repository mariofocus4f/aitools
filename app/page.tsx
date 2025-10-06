import { SearchInput } from '@/components/SearchInput'
import { ToolCard } from '@/components/ToolCard'
import { NewsletterCard } from '@/components/NewsletterCard'
import { PromptCard } from '@/components/PromptCard'
import { 
  getFeaturedTools, 
  getNewTools, 
  getHighestEpcTools,
  mockCategories 
} from '@/lib/mockData'
import { getFeaturedPrompts } from '@/lib/promptsData'
import { Sparkles, TrendingUp, Clock, Zap } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const featuredTools = getFeaturedTools()
  const newTools = getNewTools()
  const highEpcTools = getHighestEpcTools()
  const featuredPrompts = getFeaturedPrompts()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated blob background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl animate-blob-drift" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-blob-drift" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-blob-drift" style={{ animationDelay: '4s' }} />
        </div>

        <div className="container mx-auto px-4 pt-20 pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Odkryj najlepsze{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                narzędzia AI
              </span>
            </h1>
            <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
              Zaufany katalog narzędzi AI z funkcją wyszukiwania, porównywania i szczegółowych recenzji.
              Znajdź idealne rozwiązanie dla swojego projektu.
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto mb-8">
              <SearchInput 
                placeholder="Co chcesz zrobić z AI? np. 'napisać artykuł', 'stworzyć logo'..."
              />
            </div>

            {/* Quick chips */}
            <div className="flex flex-wrap gap-2 justify-center">
              {['Pisanie tekstów', 'Generowanie grafik', 'Analiza danych', 'Tworzenie wideo'].map(chip => (
                <button
                  key={chip}
                  className="px-4 py-2 rounded-full glass-card text-sm hover:shadow-card transition"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex gap-4 justify-center flex-wrap">
              <Link href="/categories">
                <button className="btn-primary">
                  Przeglądaj kategorie
                </button>
              </Link>
              <Link href="/submit">
                <button className="btn-secondary">
                  Zgłoś narzędzie
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-16 bg-surface/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="text-primary-500" size={28} />
            <h2 className="text-3xl font-bold">Wyróżnione narzędzia</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} showAffiliateInfo />
            ))}
          </div>
        </div>
      </section>

      {/* New This Week */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="text-accent-blue" size={28} />
            <h2 className="text-3xl font-bold">Nowe w tym tygodniu</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Highest Affiliate Payouts */}
      <section className="py-16 bg-surface/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="text-success" size={28} />
            <h2 className="text-3xl font-bold">Najlepiej płatne programy partnerskie</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highEpcTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} showAffiliateInfo />
            ))}
          </div>
        </div>
      </section>

      {/* Prompts Section */}
      <section className="py-16 bg-surface/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="text-accent-blue" size={28} />
            <h2 className="text-3xl font-bold">Gotowe Prompty AI</h2>
          </div>
          <p className="text-muted mb-8 max-w-3xl">
            Profesjonalne prompty dla Twojej roli. Skopiuj i użyj w ChatGPT, Claude lub innym narzędziu AI.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredPrompts.slice(0, 6).map(prompt => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/prompts">
              <button className="btn-primary flex items-center gap-2 mx-auto">
                <Sparkles size={18} />
                Zobacz wszystkie prompty
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Kategorie narzędzi</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {mockCategories.slice(0, 8).map(category => (
              <Link key={category.id} href={`/category/${category.slug}`}>
                <div className="p-6 rounded-2xl glass-card shadow-card hover:shadow-card-hover transition-all text-center group cursor-pointer">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold group-hover:text-primary-500 transition">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/categories">
              <button className="btn-secondary flex items-center gap-2 mx-auto">
                Zobacz wszystkie kategorie
                <span className="text-xl">→</span>
              </button>
            </Link>
            <p className="text-sm text-muted mt-2">
              + {mockCategories.length - 8} więcej kategorii
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-surface/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <NewsletterCard />
          </div>
        </div>
      </section>
    </div>
  )
}

