'use client'

// import { Metadata } from 'next' - removed since this is now a client component
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { workflowPrompts } from '@/lib/workflowyData'
import { StructuredData } from '@/components/StructuredData'
import { 
  Clock, 
  Star, 
  Users, 
  Copy, 
  ExternalLink, 
  ChevronLeft,
  CheckCircle,
  Lightbulb,
  Target,
  Zap
} from 'lucide-react'

interface PageProps {
  params: {
    id: string
  }
}

// Metadata moved to layout or parent component since this is now a client component

export default function WorkflowDetailPage({ params }: PageProps) {
  const workflow = workflowPrompts.find(w => w.id === params.id)

  if (!workflow) {
    notFound()
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // TODO: Add toast notification
  }

  return (
    <>
      <StructuredData type="workflow" data={workflow} />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/workflowy">
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <ChevronLeft className="w-4 h-4" />
                Powrót do workflow
              </button>
            </Link>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                  {workflow.category.replace('-', ' ')}
                </span>
                <span className="px-3 py-1 text-sm rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                  {workflow.difficulty}
                </span>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium">{workflow.rating}</span>
                </div>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {workflow.title}
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {workflow.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {workflow.estimatedTime}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {workflow.usageCount.toLocaleString()} użyć
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Zweryfikowany przez redakcję
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button 
                onClick={() => copyToClipboard(workflow.prompt)}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-blue text-white rounded-lg font-medium hover:shadow-lg transition-all"
              >
                <Copy className="w-5 h-5" />
                Skopiuj prompt
              </button>
              <Link href={workflow.primaryTool.websiteUrl} target="_blank">
                <button className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors w-full">
                  <ExternalLink className="w-5 h-5" />
                  Otwórz {workflow.primaryTool.name}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Use Case */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-card">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Kiedy używać
                </h2>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {workflow.useCase}
                </p>
              </div>
            </div>

            {/* Main Prompt */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-card">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Copy className="w-5 h-5 text-green-600" />
                  Gotowy prompt
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Skopiuj i wklej do wybranego narzędzia AI
                </p>
              </div>
              <div>
                <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4 border">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-200 font-mono leading-relaxed">
                    {workflow.prompt}
                  </pre>
                </div>
                <button 
                  onClick={() => copyToClipboard(workflow.prompt)}
                  className="mt-4 flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  Skopiuj prompt
                </button>
              </div>
            </div>

            {/* Prompt Variations */}
            {workflow.promptVariations && workflow.promptVariations.length > 0 && (
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-card">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Zap className="w-5 h-5 text-purple-600" />
                    Warianty promptu
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Dostosuj prompt do swoich potrzeb
                  </p>
                </div>
                <div>
                  <div className="space-y-4">
                    {workflow.promptVariations.map((variation, index) => (
                      <div key={index} className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                        <div className="flex items-start justify-between gap-4">
                          <p className="text-sm text-blue-800 dark:text-blue-200 flex-1">
                            {variation}
                          </p>
                          <button 
                            onClick={() => copyToClipboard(variation)}
                            className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          >
                            <Copy className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Pro Tips */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-card">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-600" />
                  Pro tips
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Wskazówki od ekspertów, jak uzyskać najlepsze rezultaty
                </p>
              </div>
              <div>
                <ul className="space-y-3">
                  {workflow.proTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {tip}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Example Output */}
            {workflow.exampleOutput && (
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-card">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Przykład wyniku
                  </h2>
                </div>
                <div>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                    <p className="text-sm text-green-800 dark:text-green-200">
                      {workflow.exampleOutput}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Primary Tool */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-card">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Rekomendowane narzędzie</h3>
              </div>
              <div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={workflow.primaryTool.logo} 
                      alt={workflow.primaryTool.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {workflow.primaryTool.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {workflow.primaryTool.shortDescription}
                      </p>
                    </div>
                  </div>
                  <Link href={workflow.primaryTool.websiteUrl} target="_blank">
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-blue text-white rounded-lg font-medium hover:shadow-lg transition-all">
                      <ExternalLink className="w-4 h-4" />
                      Otwórz narzędzie
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Alternative Tools */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-card">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Alternatywy</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Inne narzędzia do tego samego zadania
                </p>
              </div>
              <div>
                <div className="space-y-3">
                  {workflow.alternativeTools.map((tool) => (
                    <div key={tool.id} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-slate-800">
                      <img 
                        src={tool.logo} 
                        alt={tool.name}
                        className="w-8 h-8 rounded object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {tool.name}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                          {tool.shortDescription}
                        </p>
                      </div>
                      <Link href={tool.websiteUrl} target="_blank">
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-card">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Tagi</h3>
              </div>
              <div>
                <div className="flex flex-wrap gap-2">
                  {workflow.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
