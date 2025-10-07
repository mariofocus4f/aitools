import { mockTools } from '@/lib/mockData'
import { workflowPrompts } from '@/lib/workflowyData'
import { notFound } from 'next/navigation'
import { ExternalLink, Check, TrendingUp, Calendar, Tag, BookOpen, Gift, Copy } from 'lucide-react'
import Link from 'next/link'
import { CopyButton } from '@/components/CopyButton'

export function generateStaticParams() {
  return mockTools.map((tool) => ({
    slug: tool.slug,
  }))
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = mockTools.find(t => t.slug === params.slug)
  
  if (!tool) {
    notFound()
  }

  const similarTools = mockTools
    .filter(t => t.id !== tool.id && t.categories.some(cat => 
      tool.categories.some(toolCat => toolCat.id === cat.id)
    ))
    .slice(0, 3)

  // Znajdź prompty związane z tym narzędziem
  const relatedPrompts = workflowPrompts.filter(workflow => 
    workflow.primaryTool.id === tool.id || 
    workflow.alternativeTools.some(altTool => altTool.id === tool.id)
  )

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero */}
        <div className="glass-card rounded-2xl p-8 mb-8 shadow-card">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              {tool.logo ? (
                <img 
                  src={tool.logo} 
                  alt={`${tool.name} logo`}
                  className="w-24 h-24 rounded-2xl object-cover"
                />
              ) : (
                <div className="w-24 h-24 rounded-2xl gradient-primary" />
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{tool.name}</h1>
                  <a 
                    href={`https://${tool.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary-500 transition flex items-center gap-1"
                  >
                    {tool.domain}
                    <ExternalLink size={16} />
                  </a>
                </div>

                {tool.verifiedByEditor && (
                  <span className="px-3 py-1 rounded-full bg-primary-50 text-primary-700 border border-primary-100 text-sm whitespace-nowrap">
                    ✓ Zweryfikowane
                  </span>
                )}
              </div>

              <p className="text-lg text-muted mb-6">{tool.shortDescription}</p>

              {/* CTAs */}
              <div className="flex gap-3 flex-wrap">
                {tool.affiliateProgram ? (
                  <a 
                    href={`/redirect?tool_id=${tool.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Wypróbuj teraz
                    <ExternalLink size={18} />
                  </a>
                ) : (
                  <a 
                    href={`https://${tool.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Odwiedź stronę
                    <ExternalLink size={18} />
                  </a>
                )}

                {tool.documentationUrl && (
                  <a 
                    href={tool.documentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    <BookOpen size={18} />
                    Dokumentacja
                  </a>
                )}

                <Link href={`/compare?tools=${tool.id}`}>
                  <button className="btn-secondary">
                    Porównaj narzędzia
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="mt-6 pt-6 border-t border-border flex gap-3 flex-wrap">
            {tool.pricingModels.map(model => (
              <span key={model} className="px-3 py-1 rounded-full glass-card text-sm">
                {model === 'free' && '💰 Darmowe'}
                {model === 'freemium' && '🎁 Freemium'}
                {model === 'subscription' && '📅 Subskrypcja'}
                {model === 'pay_per_use' && '💳 Pay-per-use'}
              </span>
            ))}

            {tool.affiliateProgram && (
              <>
                <span className="px-3 py-1 rounded-full bg-success/10 text-success border border-success/20 text-sm flex items-center gap-1">
                  <TrendingUp size={14} />
                  {tool.affiliateProgram.commissionType === 'recurring' ? 'Recurring' : 'CPA'} {tool.affiliateProgram.commissionValue}%
                </span>
                <span className="px-3 py-1 rounded-full glass-card text-sm">
                  🍪 Cookie: {tool.affiliateProgram.cookieWindowDays} dni
                </span>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Promotion */}
            {tool.currentPromotion && (
              <section className="glass-card rounded-2xl p-6 shadow-card bg-gradient-to-r from-primary-50/50 to-accent-blue/10 border-2 border-primary-200">
                <div className="flex items-start gap-3">
                  <Gift className="text-primary-500 flex-shrink-0 mt-1" size={24} />
                  <div className="flex-1">
                    <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                      {tool.currentPromotion.title}
                      {tool.currentPromotion.discount && (
                        <span className="px-3 py-1 rounded-full bg-primary-500 text-white text-sm">
                          {tool.currentPromotion.discount}
                        </span>
                      )}
                    </h2>
                    <p className="text-muted mb-3">{tool.currentPromotion.description}</p>
                    
                    {tool.currentPromotion.code && (
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm text-muted">Kod promocyjny:</span>
                        <code className="px-3 py-1 rounded bg-white dark:bg-surface border border-border font-mono text-sm font-semibold">
                          {tool.currentPromotion.code}
                        </code>
                      </div>
                    )}

                    {tool.currentPromotion.validUntil && (
                      <p className="text-xs text-muted">
                        Oferta ważna do: {tool.currentPromotion.validUntil.toLocaleDateString('pl-PL')}
                      </p>
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* Description */}
            <section className="glass-card rounded-2xl p-6 shadow-card">
              <h2 className="text-2xl font-bold mb-4">O narzędziu</h2>
              <p className="text-muted leading-relaxed">{tool.longDescription}</p>
            </section>

            {/* Features */}
            <section className="glass-card rounded-2xl p-6 shadow-card">
              <h2 className="text-2xl font-bold mb-4">Kluczowe funkcje</h2>
              <ul className="space-y-3">
                {tool.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="text-primary-500 flex-shrink-0 mt-0.5" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Pricing Details */}
            {tool.pricingDetails && tool.pricingDetails.length > 0 && (
              <section className="glass-card rounded-2xl p-6 shadow-card">
                <h2 className="text-2xl font-bold mb-4">Cennik</h2>
                <div className="grid grid-cols-1 gap-4">
                  {tool.pricingDetails.map((tier, idx) => (
                    <div 
                      key={idx}
                      className={`p-4 rounded-xl border-2 ${
                        tier.popular 
                          ? 'border-primary-500 bg-primary-50/50' 
                          : 'border-border'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-lg">{tier.name}</h3>
                        {tier.popular && (
                          <span className="px-2 py-1 rounded-full bg-primary-500 text-white text-xs">
                            Najpopularniejszy
                          </span>
                        )}
                      </div>
                      <div className="mb-3">
                        {tier.price === 0 ? (
                          <span className="text-2xl font-bold">Darmowy</span>
                        ) : (
                          <>
                            <span className="text-3xl font-bold">${tier.price}</span>
                            <span className="text-muted ml-1">/{tier.period === 'month' ? 'mies.' : tier.period === 'year' ? 'rok' : ''}</span>
                          </>
                        )}
                      </div>
                      <ul className="space-y-2">
                        {tier.features.map((feature, fidx) => (
                          <li key={fidx} className="flex items-start gap-2 text-sm">
                            <Check className="text-primary-500 flex-shrink-0 mt-0.5" size={16} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Pros & Cons */}
            {(tool.pros || tool.cons) && (
              <section className="glass-card rounded-2xl p-6 shadow-card">
                <h2 className="text-2xl font-bold mb-4">Zalety i wady</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tool.pros && (
                    <div>
                      <h3 className="font-semibold mb-3 text-success">✓ Zalety</h3>
                      <ul className="space-y-2">
                        {tool.pros.map((pro, idx) => (
                          <li key={idx} className="text-sm flex items-start gap-2">
                            <span className="text-success">+</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {tool.cons && (
                    <div>
                      <h3 className="font-semibold mb-3 text-danger">✗ Wady</h3>
                      <ul className="space-y-2">
                        {tool.cons.map((con, idx) => (
                          <li key={idx} className="text-sm flex items-start gap-2">
                            <span className="text-danger">-</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Best For */}
            {tool.bestFor && tool.bestFor.length > 0 && (
              <section className="glass-card rounded-2xl p-6 shadow-card">
                <h2 className="text-2xl font-bold mb-4">Najlepsze dla</h2>
                <div className="flex flex-wrap gap-2">
                  {tool.bestFor.map((use, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 rounded-xl bg-accent-blue/10 text-accent-blue border border-accent-blue/20"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Integrations */}
            {tool.integrations.length > 0 && (
              <section className="glass-card rounded-2xl p-6 shadow-card">
                <h2 className="text-2xl font-bold mb-4">Integracje</h2>
                <div className="flex flex-wrap gap-2">
                  {tool.integrations.map(integration => (
                    <span 
                      key={integration}
                      className="px-4 py-2 rounded-xl glass-card text-sm"
                    >
                      {integration}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <div className="glass-card rounded-2xl p-6 shadow-card">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Tag size={18} />
                Kategorie
              </h3>
              <div className="flex flex-wrap gap-2">
                {tool.categories.map(cat => (
                  <Link key={cat.id} href={`/category/${cat.slug}`}>
                    <span className="px-3 py-1 rounded-full bg-primary-50 text-primary-700 border border-primary-100 text-sm hover:bg-primary-100 transition cursor-pointer">
                      {cat.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags */}
            {tool.tags.length > 0 && (
              <div className="glass-card rounded-2xl p-6 shadow-card">
                <h3 className="font-semibold mb-3">Tagi</h3>
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full glass-card text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Meta info */}
            <div className="glass-card rounded-2xl p-6 shadow-card">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Calendar size={18} />
                Informacje
              </h3>
              <div className="space-y-2 text-sm">
                {tool.foundedYear && (
                  <p className="text-muted">
                    <span className="font-medium text-text">Założony:</span> {tool.foundedYear}
                  </p>
                )}
                {tool.teamSize && (
                  <p className="text-muted">
                    <span className="font-medium text-text">Zespół:</span> {tool.teamSize}
                  </p>
                )}
                <p className="text-muted">
                  <span className="font-medium text-text">Dodano:</span> {tool.createdAt.toLocaleDateString('pl-PL')}
                </p>
                <p className="text-muted">
                  <span className="font-medium text-text">Zaktualizowano:</span> {tool.updatedAt.toLocaleDateString('pl-PL')}
                </p>
              </div>
            </div>

            {/* Affiliate disclosure */}
            {tool.affiliateProgram && (
              <div className="glass-card rounded-2xl p-6 shadow-card bg-primary-50/50 border border-primary-100">
                <p className="text-sm text-muted">
                  💡 <strong>Link partnerski:</strong> Możemy otrzymać prowizję od zakupu dokonanego przez ten link, bez dodatkowych kosztów dla Ciebie.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Related Prompts */}
        {relatedPrompts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Copy size={24} />
              Gotowe prompty dla {tool.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPrompts.map(workflow => (
                <div key={workflow.id} className="glass-card rounded-2xl p-6 shadow-card">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-text dark:text-white mb-2">
                        {workflow.title}
                      </h3>
                      <p className="text-sm text-muted line-clamp-2">
                        {workflow.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <span className="text-sm">★</span>
                      <span className="text-sm font-medium">{workflow.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs text-muted mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      {workflow.estimatedTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp size={12} />
                      {workflow.usageCount.toLocaleString()} użyć
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {workflow.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-1 text-xs rounded-full bg-primary-50 text-primary-700 border border-primary-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <CopyButton
                      text={workflow.prompt}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm"
                    >
                      <Copy size={16} />
                      Skopiuj prompt
                    </CopyButton>
                    <Link href={`/workflowy/${workflow.id}`}>
                      <button className="px-4 py-2 border border-border rounded-lg hover:bg-surface transition-colors text-sm">
                        Zobacz szczegóły
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <Link href="/workflowy">
                <button className="btn-primary flex items-center gap-2 mx-auto">
                  <Copy size={18} />
                  Przeglądaj wszystkie prompty
                </button>
              </Link>
            </div>
          </section>
        )}

        {/* Similar Tools */}
        {similarTools.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Podobne narzędzia</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarTools.map(similarTool => (
                <Link key={similarTool.id} href={`/tool/${similarTool.slug}`}>
                  <div className="glass-card rounded-2xl p-5 shadow-card hover:shadow-card-hover transition cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      {similarTool.logo ? (
                        <img 
                          src={similarTool.logo} 
                          alt={similarTool.name}
                          className="w-12 h-12 rounded-xl object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-xl gradient-primary" />
                      )}
                      <h3 className="font-semibold">{similarTool.name}</h3>
                    </div>
                    <p className="text-sm text-muted line-clamp-2">
                      {similarTool.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

