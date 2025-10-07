'use client'

import { useState } from 'react'
import { mockCategories } from '@/lib/mockData'
import Link from 'next/link'
import { getToolsByCategory } from '@/lib/mockData'
import { Sparkles, TrendingUp, Search, X } from 'lucide-react'

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState('')

  // Filtruj kategorie na podstawie wyszukiwania
  const filteredCategories = mockCategories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (category.description && category.description.toLowerCase().includes(searchQuery.toLowerCase()))
  )

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
              
              {/* Sidebar Search */}
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Szukaj..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-9 pr-8 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-2 flex items-center"
                  >
                    <X className="h-4 w-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                  </button>
                )}
              </div>
              
              <nav className="space-y-2">
                {filteredCategories.map(category => {
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
              <p className="text-xl text-muted mb-6">
                Przeglądaj {mockCategories.length} kategorii narzędzi AI
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Szukaj kategorii..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <X className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                  </button>
                )}
              </div>
              
              {searchQuery && (
                <div className="mt-4 text-sm text-muted">
                  Znaleziono {filteredCategories.length} z {mockCategories.length} kategorii
                </div>
              )}
            </div>

            {filteredCategories.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCategories.map(category => {
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
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">Nie znaleziono kategorii</h3>
                <p className="text-muted mb-4">
                  Spróbuj zmienić zapytanie wyszukiwania
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Wyczyść wyszukiwanie
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

