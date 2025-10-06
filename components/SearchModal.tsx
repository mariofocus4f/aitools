'use client'

import { useState, useEffect } from 'react'
import { X, Search } from 'lucide-react'
import { mockTools } from '@/lib/mockData'
import { mockPrompts } from '@/lib/promptsData'
import Link from 'next/link'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<'all' | 'tools' | 'prompts'>('all')

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      setQuery('')
      setFilter('all')
    }
  }, [isOpen])

  if (!isOpen) return null

  const filteredTools = mockTools.filter(tool =>
    tool.name.toLowerCase().includes(query.toLowerCase()) ||
    tool.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
    tool.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  ).slice(0, 5)

  const filteredPrompts = mockPrompts.filter(prompt =>
    prompt.title.toLowerCase().includes(query.toLowerCase()) ||
    prompt.description.toLowerCase().includes(query.toLowerCase()) ||
    prompt.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  ).slice(0, 5)

  const showTools = filter === 'all' || filter === 'tools'
  const showPrompts = filter === 'all' || filter === 'prompts'

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative glass-card rounded-2xl shadow-card max-w-3xl w-full max-h-[80vh] overflow-hidden z-10 animate-in fade-in slide-in-from-top-4 duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-surface transition z-10"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Search Input */}
        <div className="p-6 border-b border-border">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Szukaj narzędzi AI, promptów..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-border bg-surface text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
              autoFocus
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm transition ${
                filter === 'all'
                  ? 'bg-primary-500 text-white'
                  : 'glass-card hover:bg-surface'
              }`}
            >
              Wszystko
            </button>
            <button
              onClick={() => setFilter('tools')}
              className={`px-4 py-2 rounded-full text-sm transition ${
                filter === 'tools'
                  ? 'bg-primary-500 text-white'
                  : 'glass-card hover:bg-surface'
              }`}
            >
              Narzędzia
            </button>
            <button
              onClick={() => setFilter('prompts')}
              className={`px-4 py-2 rounded-full text-sm transition ${
                filter === 'prompts'
                  ? 'bg-primary-500 text-white'
                  : 'glass-card hover:bg-surface'
              }`}
            >
              Prompty
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="p-6 overflow-y-auto max-h-96">
          {query.length === 0 ? (
            <div className="text-center py-12 text-muted">
              <Search size={48} className="mx-auto mb-4 opacity-50" />
              <p>Zacznij pisać aby wyszukać...</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Tools Results */}
              {showTools && filteredTools.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-3 text-sm text-muted">Narzędzia AI</h3>
                  <div className="space-y-2">
                    {filteredTools.map(tool => (
                      <Link key={tool.id} href={`/tool/${tool.slug}`} onClick={onClose}>
                        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface transition cursor-pointer">
                          {tool.logo ? (
                            <img 
                              src={tool.logo} 
                              alt={tool.name}
                              className="w-10 h-10 rounded-lg object-cover"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-lg bg-gradient-primary" />
                          )}
                          <div className="flex-1">
                            <p className="font-medium">{tool.name}</p>
                            <p className="text-xs text-muted line-clamp-1">
                              {tool.shortDescription}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Prompts Results */}
              {showPrompts && filteredPrompts.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-3 text-sm text-muted">Prompty</h3>
                  <div className="space-y-2">
                    {filteredPrompts.map(prompt => (
                      <Link key={prompt.id} href={`/prompts/${prompt.slug}`} onClick={onClose}>
                        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface transition cursor-pointer">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center text-2xl">
                            {prompt.role.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <p className="font-medium">{prompt.title}</p>
                              {prompt.isPremium && (
                                <span className="px-1.5 py-0.5 rounded text-xs bg-gradient-primary text-white font-semibold">
                                  PRO
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-muted line-clamp-1">
                              {prompt.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* No Results */}
              {filteredTools.length === 0 && filteredPrompts.length === 0 && (
                <div className="text-center py-12 text-muted">
                  <p>Nie znaleziono wyników dla &quot;{query}&quot;</p>
                  <p className="text-sm mt-2">Spróbuj innego zapytania</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

