'use client'

import { useState } from 'react'
import { mockTools } from '@/lib/mockData'
import { Check, X, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function ComparePage() {
  const [selectedTools, setSelectedTools] = useState<string[]>([])
  
  const toggleTool = (toolId: string) => {
    if (selectedTools.includes(toolId)) {
      setSelectedTools(selectedTools.filter(id => id !== toolId))
    } else if (selectedTools.length < 4) {
      setSelectedTools([...selectedTools, toolId])
    }
  }

  const toolsToCompare = mockTools.filter(t => selectedTools.includes(t.id))

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Porównaj narzędzia AI</h1>
          <p className="text-xl text-muted">
            Wybierz 2-4 narzędzia do porównania (wybrano: {selectedTools.length}/4)
          </p>
        </div>

        {/* Tool Selection */}
        {selectedTools.length < 2 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Wybierz narzędzia:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockTools.slice(0, 9).map(tool => (
                <button
                  key={tool.id}
                  onClick={() => toggleTool(tool.id)}
                  className={`p-4 rounded-xl border-2 transition text-left ${
                    selectedTools.includes(tool.id)
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-border glass-card hover:border-primary-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {tool.logo ? (
                      <img src={tool.logo} alt={tool.name} className="w-12 h-12 rounded-xl object-cover" />
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary" />
                    )}
                    <div className="flex-1">
                      <h3 className="font-semibold">{tool.name}</h3>
                      <p className="text-sm text-muted line-clamp-1">{tool.shortDescription}</p>
                    </div>
                    {selectedTools.includes(tool.id) && (
                      <Check className="text-primary-500" size={20} />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Comparison Table */}
        {toolsToCompare.length >= 2 && (
          <div className="overflow-x-auto">
            <table className="w-full glass-card rounded-2xl overflow-hidden">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="p-4 text-left font-semibold sticky left-0 bg-surface z-10">
                    Funkcja
                  </th>
                  {toolsToCompare.map(tool => (
                    <th key={tool.id} className="p-4 text-center min-w-[200px]">
                      <div className="flex flex-col items-center gap-2">
                        {tool.logo ? (
                          <img src={tool.logo} alt={tool.name} className="w-16 h-16 rounded-xl object-cover" />
                        ) : (
                          <div className="w-16 h-16 rounded-xl bg-gradient-primary" />
                        )}
                        <div>
                          <div className="font-semibold">{tool.name}</div>
                          <div className="text-sm text-muted font-normal">{tool.domain}</div>
                        </div>
                        <button
                          onClick={() => toggleTool(tool.id)}
                          className="text-xs text-danger hover:underline"
                        >
                          Usuń
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium sticky left-0 bg-surface">Opis</td>
                  {toolsToCompare.map(tool => (
                    <td key={tool.id} className="p-4 text-sm text-muted">
                      {tool.shortDescription}
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-border bg-surface/50">
                  <td className="p-4 font-medium sticky left-0 bg-surface/50">Model cenowy</td>
                  {toolsToCompare.map(tool => (
                    <td key={tool.id} className="p-4">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {tool.pricingModels.map(model => (
                          <span key={model} className="px-2 py-1 rounded-full glass-card text-xs">
                            {model}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-border">
                  <td className="p-4 font-medium sticky left-0 bg-surface">Kluczowe funkcje</td>
                  {toolsToCompare.map(tool => (
                    <td key={tool.id} className="p-4">
                      <ul className="text-sm space-y-1">
                        {tool.features.slice(0, 5).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-1">
                            <Check className="text-success flex-shrink-0 mt-0.5" size={16} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-border bg-surface/50">
                  <td className="p-4 font-medium sticky left-0 bg-surface/50">Integracje</td>
                  {toolsToCompare.map(tool => (
                    <td key={tool.id} className="p-4">
                      <div className="text-sm text-center">
                        {tool.integrations.length > 0 ? (
                          <div className="flex flex-wrap gap-1 justify-center">
                            {tool.integrations.map(int => (
                              <span key={int} className="px-2 py-1 rounded-full glass-card text-xs">
                                {int}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="text-muted">Brak danych</span>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-border">
                  <td className="p-4 font-medium sticky left-0 bg-surface">Program partnerski</td>
                  {toolsToCompare.map(tool => (
                    <td key={tool.id} className="p-4 text-center">
                      {tool.affiliateProgram ? (
                        <div className="text-sm space-y-1">
                          <div className="text-success font-medium">
                            {tool.affiliateProgram.commissionValue}% {tool.affiliateProgram.commissionType}
                          </div>
                          <div className="text-xs text-muted">
                            EPC: ${tool.affiliateProgram.estimatedEpc.toFixed(2)}
                          </div>
                        </div>
                      ) : (
                        <X className="text-muted mx-auto" size={20} />
                      )}
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-border bg-surface/50">
                  <td className="p-4 font-medium sticky left-0 bg-surface/50">Zweryfikowane</td>
                  {toolsToCompare.map(tool => (
                    <td key={tool.id} className="p-4 text-center">
                      {tool.verifiedByEditor ? (
                        <Check className="text-success mx-auto" size={24} />
                      ) : (
                        <X className="text-muted mx-auto" size={24} />
                      )}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 font-medium sticky left-0 bg-surface">Akcje</td>
                  {toolsToCompare.map(tool => (
                    <td key={tool.id} className="p-4">
                      <div className="flex flex-col gap-2">
                        <Link href={`/tool/${tool.slug}`}>
                          <button className="btn-secondary text-sm w-full">
                            Szczegóły
                          </button>
                        </Link>
                        <a
                          href={tool.affiliateProgram ? `/redirect?tool_id=${tool.id}` : `https://${tool.domain}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm w-full flex items-center justify-center gap-1"
                        >
                          Wypróbuj
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Add more tools */}
        {toolsToCompare.length >= 2 && selectedTools.length < 4 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setSelectedTools([])}
              className="btn-secondary"
            >
              Rozpocznij od nowa
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

