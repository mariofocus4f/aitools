'use client'

import { useState } from 'react'
import { Upload, Check } from 'lucide-react'
import { mockCategories } from '@/lib/mockData'

export default function SubmitPage() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    domain: '',
    shortDescription: '',
    longDescription: '',
    categories: [] as string[],
    pricingModels: [] as string[],
    submitterName: '',
    submitterEmail: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
  }

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="glass-card rounded-2xl p-12 shadow-card text-center">
            <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
              <Check className="text-success" size={32} />
            </div>
            <h1 className="text-3xl font-bold mb-4">Dziękujemy za zgłoszenie!</h1>
            <p className="text-muted mb-8">
              Twoje narzędzie zostało przesłane do weryfikacji. Skontaktujemy się z Tobą w ciągu 2-3 dni roboczych.
            </p>
            <a href="/">
              <button className="btn-primary">
                Powrót do strony głównej
              </button>
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Zgłoś narzędzie AI</h1>
          <p className="text-xl text-muted">
            Podziel się swoim narzędziem z tysiącami użytkowników
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8 flex items-center justify-center gap-2">
          {[1, 2, 3].map(s => (
            <div key={s} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition ${
                s === step ? 'bg-primary-500 text-white' :
                s < step ? 'bg-primary-100 text-primary-700' :
                'bg-surface border-2 border-border text-muted'
              }`}>
                {s < step ? <Check size={20} /> : s}
              </div>
              {s < 3 && (
                <div className={`w-12 h-1 mx-2 rounded ${
                  s < step ? 'bg-primary-500' : 'bg-border'
                }`} />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 shadow-card">
          {/* Step 1: Basics */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Podstawowe informacje</h2>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nazwa narzędzia *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  className="input-field w-full"
                  placeholder="np. ChatGPT, Midjourney"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Strona internetowa *
                </label>
                <input
                  type="url"
                  required
                  value={formData.domain}
                  onChange={(e) => updateField('domain', e.target.value)}
                  className="input-field w-full"
                  placeholder="https://example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Krótki opis (1-2 zdania) *
                </label>
                <textarea
                  required
                  value={formData.shortDescription}
                  onChange={(e) => updateField('shortDescription', e.target.value)}
                  className="input-field w-full h-24 resize-none"
                  placeholder="Opisz w skrócie, co robi to narzędzie..."
                  maxLength={200}
                />
                <p className="text-xs text-muted mt-1">
                  {formData.shortDescription.length}/200 znaków
                </p>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="btn-primary w-full"
              >
                Dalej
              </button>
            </div>
          )}

          {/* Step 2: Details */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Szczegóły</h2>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Pełny opis *
                </label>
                <textarea
                  required
                  value={formData.longDescription}
                  onChange={(e) => updateField('longDescription', e.target.value)}
                  className="input-field w-full h-32 resize-none"
                  placeholder="Opisz szczegółowo funkcje, zalety i możliwości narzędzia..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Kategorie *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {mockCategories.slice(0, 8).map(cat => (
                    <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.categories.includes(cat.id)}
                        onChange={(e) => {
                          const newCats = e.target.checked
                            ? [...formData.categories, cat.id]
                            : formData.categories.filter(c => c !== cat.id)
                          updateField('categories', newCats)
                        }}
                        className="w-4 h-4 rounded border-border text-primary-500 focus:ring-primary-400"
                      />
                      <span className="text-sm">{cat.icon} {cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Model cenowy *
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'free', label: 'Darmowe' },
                    { value: 'freemium', label: 'Freemium' },
                    { value: 'subscription', label: 'Subskrypcja' },
                    { value: 'pay_per_use', label: 'Pay-per-use' },
                  ].map(option => (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.pricingModels.includes(option.value)}
                        onChange={(e) => {
                          const newModels = e.target.checked
                            ? [...formData.pricingModels, option.value]
                            : formData.pricingModels.filter(m => m !== option.value)
                          updateField('pricingModels', newModels)
                        }}
                        className="w-4 h-4 rounded border-border text-primary-500 focus:ring-primary-400"
                      />
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn-secondary flex-1"
                >
                  Wstecz
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="btn-primary flex-1"
                >
                  Dalej
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Contact */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Dane kontaktowe</h2>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Twoje imię *
                </label>
                <input
                  type="text"
                  required
                  value={formData.submitterName}
                  onChange={(e) => updateField('submitterName', e.target.value)}
                  className="input-field w-full"
                  placeholder="Jan Kowalski"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.submitterEmail}
                  onChange={(e) => updateField('submitterEmail', e.target.value)}
                  className="input-field w-full"
                  placeholder="jan@example.com"
                />
                <p className="text-xs text-muted mt-1">
                  Użyjemy tego adresu tylko do kontaktu w sprawie zgłoszenia
                </p>
              </div>

              <div className="p-4 rounded-xl bg-primary-50 border border-primary-100">
                <p className="text-sm text-muted">
                  ℹ️ Zgłoszenie zostanie zweryfikowane przez nasz zespół w ciągu 2-3 dni roboczych. 
                  Skontaktujemy się z Tobą w przypadku dodatkowych pytań.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-secondary flex-1"
                >
                  Wstecz
                </button>
                <button
                  type="submit"
                  className="btn-primary flex-1 flex items-center justify-center gap-2"
                >
                  <Upload size={18} />
                  Wyślij zgłoszenie
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

