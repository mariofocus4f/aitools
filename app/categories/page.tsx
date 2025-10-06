import { mockCategories } from '@/lib/mockData'
import Link from 'next/link'
import { getToolsByCategory } from '@/lib/mockData'
import { Sparkles, TrendingUp } from 'lucide-react'

export default function CategoriesPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Mobile Navigation */}
          <div className="lg:hidden order-1 mb-6">
            <div className="glass-card rounded-2xl p-4 shadow-card">
              <h3 className="font-bold mb-3 text-sm">Szybka nawigacja</h3>
              <div className="grid grid-cols-2 gap-2">
                {mockCategories.slice(0, 6).map(category => {
                  const toolCount = getToolsByCategory(category.slug).length
                  return (
                    <a
                      key={category.id}
                      href={`#${category.slug}`}
                      className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-surface transition text-xs group"
                    >
                      <span className="text-sm">{category.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium group-hover:text-primary-500 transition truncate">
                          {category.name}
                        </p>
                        <p className="text-xs text-muted">{toolCount}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <aside className="lg:col-span-1 order-2 lg:order-1">
            <div className="glass-card rounded-2xl p-6 shadow-card sticky top-20">
              <h3 className="font-bold mb-4">Szybka nawigacja</h3>
              <nav className="space-y-2">
                {mockCategories.map(category => {
                  const toolCount = getToolsByCategory(category.slug).length
                  return (
                    <a
                      key={category.id}
                      href={`#${category.slug}`}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface transition text-sm group"
                    >
                      <span className="text-xl">{category.icon}</span>
                      <div className="flex-1">
                        <p className="font-medium group-hover:text-primary-500 transition">
                          {category.name}
                        </p>
                        <p className="text-xs text-muted">{toolCount} narzędzi</p>
                      </div>
                    </a>
                  )
                })}
              </nav>

              <div className="mt-6 pt-6 border-t border-border">
                <Link href="/prompts">
                  <button className="btn-primary w-full text-sm flex items-center justify-center gap-2">
                    <Sparkles size={16} />
                    Zobacz prompty
                  </button>
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 order-3 lg:order-2">
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-4">Wszystkie kategorie</h1>
              <p className="text-xl text-muted">
                Przeglądaj {mockCategories.length} kategorii narzędzi AI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockCategories.map(category => {
                const toolCount = getToolsByCategory(category.slug).length
                
                return (
                  <div key={category.id} id={category.slug}>
                    <Link href={`/category/${category.slug}`}>
                      <div className="glass-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all group cursor-pointer h-full">
                        <div className="text-5xl mb-4">{category.icon}</div>
                        <h2 className="text-2xl font-bold mb-2 group-hover:text-primary-500 transition">
                          {category.name}
                        </h2>
                        <p className="text-muted mb-4">
                          {category.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted">
                            {toolCount} {toolCount === 1 ? 'narzędzie' : 'narzędzi'}
                          </span>
                          <span className="text-primary-500 group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

