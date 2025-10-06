'use client'

import { mockPrompts } from '@/lib/promptsData'
import { mockTools } from '@/lib/mockData'
import { notFound } from 'next/navigation'
import { Heart, Eye, Copy, Check, BookOpen, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function PromptDetailPage({ params }: { params: { slug: string } }) {
  const prompt = mockPrompts.find(p => p.slug === params.slug)
  const [copied, setCopied] = useState(false)

  if (!prompt) {
    notFound()
  }

  const recommendedTools = mockTools.filter(tool => 
    prompt.recommendedTools.includes(tool.id)
  )

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="glass-card rounded-2xl p-8 mb-8 shadow-card">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-5xl">{prompt.role.icon}</span>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span 
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{ 
                    backgroundColor: `${prompt.role.color}20`,
                    color: prompt.role.color 
                  }}
                >
                  {prompt.role.name}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  prompt.difficulty === 'beginner' ? 'bg-success/20 text-success' :
                  prompt.difficulty === 'intermediate' ? 'bg-info/20 text-info' :
                  'bg-danger/20 text-danger'
                }`}>
                  {prompt.difficulty === 'beginner' ? 'Łatwy' :
                   prompt.difficulty === 'intermediate' ? 'Średni' : 'Zaawansowany'}
                </span>
                {prompt.isPremium && (
                  <span className="px-3 py-1 rounded-full bg-warning/20 text-warning text-sm">
                    Premium
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold mb-3">{prompt.title}</h1>
              <p className="text-lg text-muted">{prompt.description}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 pt-4 border-t border-border">
            <span className="flex items-center gap-2 text-muted">
              <Heart size={18} />
              {prompt.likes} polubień
            </span>
            <span className="flex items-center gap-2 text-muted">
              <Eye size={18} />
              {prompt.views} wyświetleń
            </span>
            <span className="text-muted">
              Kategoria: <strong>{prompt.category}</strong>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Prompt Content */}
            <section className="glass-card rounded-2xl p-6 shadow-card">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Sparkles className="text-primary-500" size={24} />
                  Treść promptu
                </h2>
                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition ${
                    copied 
                      ? 'bg-success text-white' 
                      : 'btn-primary'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check size={18} />
                      Skopiowano!
                    </>
                  ) : (
                    <>
                      <Copy size={18} />
                      Kopiuj prompt
                    </>
                  )}
                </button>
              </div>

              <div className="bg-surface rounded-xl p-6 border border-border font-mono text-sm whitespace-pre-wrap">
                {prompt.content}
              </div>
            </section>

            {/* Variables */}
            {prompt.variables && prompt.variables.length > 0 && (
              <section className="glass-card rounded-2xl p-6 shadow-card">
                <h2 className="text-2xl font-bold mb-4">Zmienne do wypełnienia</h2>
                <div className="space-y-4">
                  {prompt.variables.map((variable, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-surface border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <code className="px-2 py-1 rounded bg-primary-50 text-primary-700 text-sm font-mono">
                          [{variable.name}]
                        </code>
                        {variable.required && (
                          <span className="text-xs text-danger">*wymagane</span>
                        )}
                      </div>
                      <p className="text-sm text-muted mb-2">{variable.description}</p>
                      <p className="text-sm">
                        <strong>Przykład:</strong> {variable.example}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Use Case */}
            <section className="glass-card rounded-2xl p-6 shadow-card">
              <h2 className="text-2xl font-bold mb-4">Zastosowanie</h2>
              <p className="text-muted leading-relaxed">{prompt.useCase}</p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recommended Tools */}
            {recommendedTools.length > 0 && (
              <div className="glass-card rounded-2xl p-6 shadow-card">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <BookOpen size={18} />
                  Polecane narzędzia
                </h3>
                <div className="space-y-3">
                  {recommendedTools.map(tool => (
                    <Link key={tool.id} href={`/tool/${tool.slug}`}>
                      <div className="flex items-center gap-3 p-3 rounded-xl glass-card hover:shadow-card transition cursor-pointer">
                        {tool.logo ? (
                          <img 
                            src={tool.logo} 
                            alt={tool.name}
                            className="w-10 h-10 rounded-lg object-cover"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-lg gradient-primary" />
                        )}
                        <div className="flex-1">
                          <p className="font-medium text-sm">{tool.name}</p>
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

            {/* Tags */}
            <div className="glass-card rounded-2xl p-6 shadow-card">
              <h3 className="font-semibold mb-3">Tagi</h3>
              <div className="flex flex-wrap gap-2">
                {prompt.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 rounded-full glass-card text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="glass-card rounded-2xl p-6 shadow-card bg-gradient-to-r from-primary-50/50 to-accent-blue/10 border-2 border-primary-200">
              <h3 className="font-bold mb-2">💡 Pro Tip</h3>
              <p className="text-sm text-muted mb-4">
                Dostosuj zmienne do swojego przypadku użycia dla lepszych rezultatów!
              </p>
              <Link href="/prompts">
                <button className="btn-primary w-full text-sm">
                  Zobacz więcej promptów
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

