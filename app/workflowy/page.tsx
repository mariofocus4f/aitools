import { Metadata } from 'next'
import Link from 'next/link'
import { 
  getFeaturedWorkflows, 
  getPopularWorkflows, 
  promptRoles,
  workflowPrompts 
} from '@/lib/workflowyData'
// Usunięto importy komponentów UI - zastąpione prostymi elementami HTML
import { Clock, Star, Users, Zap, Copy, ExternalLink, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Prompty & Workflowy | TrustyAI - Gotowe rozwiązania AI',
  description: 'Odkryj gotowe prompty i workflow AI. Od use-case do rozwiązania w minutach. Sprawdzone kombinacje promptów + narzędzi dla Twojej roli zawodowej.',
  keywords: 'prompty AI, workflow AI, automatyzacja, ChatGPT prompty, Midjourney prompty, AI use cases',
  openGraph: {
    title: 'Prompty & Workflowy | TrustyAI',
    description: 'Gotowe rozwiązania AI - od potrzeby do implementacji w minutach',
    type: 'website',
  },
}

export default function WorkflowyPage() {
  const featuredWorkflows = getFeaturedWorkflows()
  const popularWorkflows = getPopularWorkflows()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Unikalna funkcja TrustyAI
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Prompty & Workflowy
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Od <span className="font-semibold text-blue-600 dark:text-blue-400">"potrzebuję zrobić X z AI"</span> do <span className="font-semibold text-green-600 dark:text-green-400">"mam działające rozwiązanie"</span> w minutach
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="#featured-workflows" className="block">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-2">
                <Copy className="w-5 h-5" />
                Przeglądaj workflow
              </button>
            </Link>
            <Link href="#roles-section" className="block">
              <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center gap-2">
                <Users className="w-5 h-5" />
                Prompty według roli
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{workflowPrompts.length}+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Gotowych workflow</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">4</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Główne role</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Kategorii</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">10k+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Użyć miesięcznie</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Workflows */}
      <section id="featured-workflows" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Najpopularniejsze workflow
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Sprawdzone kombinacje promptów + narzędzi, które działają
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWorkflows.map((workflow) => (
              <div key={workflow.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700">
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                      {workflow.category.replace('-', ' ')}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{workflow.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                    {workflow.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {workflow.description}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {workflow.estimatedTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {workflow.usageCount.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {workflow.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link href={`/workflowy/${workflow.id}`} className="block">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 group">
                        Zobacz workflow
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Prompty według roli zawodowej
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Znajdź prompty dopasowane do Twojej pracy i branży
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {promptRoles.map((role) => (
              <div key={role.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-4">{role.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{role.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {role.description}
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {role.workflows.length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Gotowych workflow
                  </div>
                  <Link href={`/workflowy`} className="block">
                    <button className="w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                      Przeglądaj
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Jak to działa?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Od potrzeby do rozwiązania w 3 prostych krokach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Wybierz use-case
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Znajdź workflow dopasowany do Twojego zadania - od tworzenia prezentacji po analizę kodu
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Skopiuj prompt
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Gotowy, przetestowany prompt z instrukcjami krok po kroku i pro tips
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Użyj narzędzia
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Wklej w rekomendowane narzędzie AI i otrzymaj profesjonalny wynik
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Gotowy na automatyzację z AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Dołącz do tysięcy profesjonalistów, którzy już oszczędzają godziny dzięki naszym workflow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#featured-workflows" className="block">
              <button className="px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-medium transition-colors flex items-center gap-2">
                <Copy className="w-5 h-5" />
                Rozpocznij teraz
              </button>
            </Link>
            <Link href="#featured-workflows" className="block">
              <button className="px-6 py-3 border border-white text-white hover:bg-white/10 rounded-lg font-medium transition-colors flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Zobacz przykłady
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
