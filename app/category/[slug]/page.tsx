import { ToolCard } from '@/components/ToolCard'
import { getToolsByCategory, mockCategories } from '@/lib/mockData'
import { Filter } from 'lucide-react'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return mockCategories.map((category) => ({
    slug: category.slug,
  }))
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = mockCategories.find(cat => cat.slug === params.slug)
  
  if (!category) {
    notFound()
  }

  const tools = getToolsByCategory(category.slug)

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">{category.icon}</span>
            <h1 className="text-4xl font-bold">{category.name}</h1>
          </div>
          <p className="text-xl text-muted max-w-3xl">
            {category.description}
          </p>
          <p className="text-sm text-muted mt-2">
            {tools.length} narzędzi w tej kategorii
          </p>
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
              Freemium
            </button>
            <button className="px-4 py-2 rounded-full glass-card text-sm hover:bg-surface transition">
              Subskrypcja
            </button>
          </div>

          <select className="ml-auto px-4 py-2 rounded-xl border border-border bg-surface text-sm">
            <option>Najpopularniejsze</option>
            <option>Najnowsze</option>
            <option>Wybór redakcji</option>
            <option>Najlepsze prowizje</option>
          </select>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map(tool => (
            <ToolCard key={tool.id} tool={tool} showAffiliateInfo />
          ))}
        </div>

        {/* Empty state */}
        {tools.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted">
              Nie znaleziono narzędzi w tej kategorii.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

