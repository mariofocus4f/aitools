import { PromptCard } from '@/components/PromptCard'
import { promptRoles, mockPrompts } from '@/lib/promptsData'
import { Sparkles, Filter } from 'lucide-react'
import Link from 'next/link'

export default function PromptsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-primary-500" size={32} />
            <h1 className="text-4xl font-bold">Katalog Promptów AI</h1>
          </div>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Gotowe prompty dla Twojej roli. Skopiuj, dostosuj i użyj w ChatGPT, Claude lub innym narzędziu AI.
          </p>
        </div>

        {/* Role Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Wybierz swoją rolę</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {promptRoles.map(role => (
              <Link key={role.id} href={`/workflowy`}>
                <div 
                  className="p-4 rounded-xl glass-card shadow-card hover:shadow-card-hover transition cursor-pointer text-center group"
                  style={{ borderTop: `3px solid ${role.color}` }}
                >
                  <div className="text-3xl mb-2">{role.icon}</div>
                  <h3 className="font-semibold text-sm group-hover:text-primary-500 transition">
                    {role.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex items-center gap-4 flex-wrap">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card">
            <Filter size={18} />
            <span>Filtry</span>
          </button>

          <div className="flex gap-2 flex-wrap">
            <button className="px-4 py-2 rounded-full bg-primary-500 text-white text-sm">
              Wszystkie
            </button>
            <button className="px-4 py-2 rounded-full glass-card text-sm hover:bg-surface transition">
              Darmowe
            </button>
            <button className="px-4 py-2 rounded-full glass-card text-sm hover:bg-surface transition">
              Premium
            </button>
            <button className="px-4 py-2 rounded-full glass-card text-sm hover:bg-surface transition">
              Najpopularniejsze
            </button>
          </div>
        </div>

        {/* Prompts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPrompts.map(prompt => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      </div>
    </div>
  )
}

