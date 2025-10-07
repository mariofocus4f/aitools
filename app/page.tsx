import { SearchInput } from '@/components/SearchInput'
import { ToolCard } from '@/components/ToolCard'
import { PromptCard } from '@/components/PromptCard'
import { 
  getFeaturedTools, 
  getNewTools, 
  getHighestEpcTools,
  mockCategories 
} from '@/lib/mockData'
import { getFeaturedPrompts } from '@/lib/promptsData'
import { getFeaturedWorkflows } from '@/lib/workflowyData'
import { Sparkles, TrendingUp, Clock, Zap, Copy, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const featuredTools = getFeaturedTools()
  const newTools = getNewTools()
  const highEpcTools = getHighestEpcTools()
  const featuredPrompts = getFeaturedPrompts()
  const featuredWorkflows = getFeaturedWorkflows()

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
              <span className="gradient-primary bg-clip-text text-transparent">
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

      {/* Prompty & Workflowy Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Copy className="w-4 h-4" />
              Unikalna funkcja TrustyAI
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prompty & Workflowy
            </h2>
            <p className="text-lg text-muted mb-8 max-w-3xl mx-auto">
              Od <span className="font-semibold text-blue-600 dark:text-blue-400">"potrzebuję zrobić X z AI"</span> do <span className="font-semibold text-green-600 dark:text-green-400">"mam działające rozwiązanie"</span> w minutach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredWorkflows.slice(0, 3).map(workflow => (
              <div key={workflow.id} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <Copy className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {workflow.category.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Sparkles className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{workflow.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {workflow.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {workflow.description}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {workflow.estimatedTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {workflow.usageCount.toLocaleString()}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Link href={`/workflowy/${workflow.id}`} className="flex-1">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-3 px-4 rounded-lg transition-colors">
                      Zobacz workflow
                    </button>
                  </Link>
                  <Link href={workflow.primaryTool.websiteUrl} target="_blank">
                    <button className="p-3 border border-gray-300 dark:border-slate-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/workflowy">
              <button className="btn-primary flex items-center gap-2 mx-auto">
                <Copy size={18} />
                Przeglądaj wszystkie workflow
              </button>
            </Link>
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
            <Link href="/workflowy">
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {mockCategories.slice(0, 12).map(category => (
              <Link key={category.id} href={`/category/${category.slug}`}>
                <div className="p-6 rounded-2xl glass-card shadow-card hover:shadow-card-hover transition-all text-center group cursor-pointer">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold group-hover:text-primary-500 transition text-sm">
                    {category.name}
                  </h3>
                         <p className="text-xs text-muted mt-1 hidden md:block">
                           {category.description && category.description.length > 50 
                             ? category.description.substring(0, 50) + '...' 
                             : category.description}
                         </p>
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
              + {mockCategories.length - 12} więcej kategorii
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

