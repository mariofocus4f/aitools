'use client'

import { useState } from 'react'
import { Mail, Check } from 'lucide-react'

export function NewsletterBanner() {
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [honeypot, setHoneypot] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Honeypot check (anti-bot)
    if (honeypot) {
      console.log('Bot detected')
      return
    }

    // Consent check
    if (!consent) {
      setError('Musisz zaakceptować regulamin i politykę prywatności')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/newsletter/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setSubmitted(true)
        setEmail('')
      } else {
        const data = await response.json().catch(() => ({} as any))
        if (response.status === 400) {
          setError('Ten adres jest już zapisany lub nieprawidłowy. Sprawdź email/spam.')
        } else if (response.status === 401) {
          setError('Błąd uwierzytelniania usługi newslettera. Spróbuj ponownie później.')
        } else if (response.status === 429) {
          setError('Za dużo prób. Spróbuj ponownie za chwilę.')
        } else {
          setError(data?.error || 'Wystąpił błąd. Spróbuj ponownie.')
        }
      }
    } catch (error) {
      console.error('Newsletter signup error:', error)
      setError('Nie udało się połączyć z serwerem. Spróbuj ponownie.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section className="bg-gradient-to-r from-primary-500 to-accent-blue py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 text-white">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Check size={20} />
            </div>
            <div className="text-center">
              <p className="font-semibold">Sprawdź email!</p>
              <p className="text-sm opacity-90">Wysłaliśmy link potwierdzający</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-gradient-to-r from-primary-500 to-accent-blue py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left side - Content */}
          <div className="flex items-center gap-4 text-white">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Top 10 Weekly AI Tools</h3>
              <p className="text-sm opacity-90">
                Cotygodniowy newsletter z najlepszymi narzędziami AI, promptami i automatyzacją
              </p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="flex-1 max-w-md w-full">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Twój email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  disabled={loading}
                />
              </div>
              
              <button
                type="submit"
                disabled={loading || !consent}
                className="px-6 py-2.5 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {loading ? 'Zapisywanie...' : 'Zapisz się'}
              </button>
            </form>

            {/* Consent checkbox */}
            <label className="flex items-start gap-2 mt-3 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-white/50 text-primary-500 focus:ring-white/50"
                disabled={loading}
              />
              <span className="text-xs text-white/90">
                Akceptuję{' '}
                <a href="/regulamin" target="_blank" className="underline hover:text-white">
                  regulamin
                </a>{' '}
                i{' '}
                <a href="/privacy" target="_blank" className="underline hover:text-white">
                  politykę prywatności
                </a>
              </span>
            </label>

            {/* Error message */}
            {error && (
              <p className="text-xs text-white/90 mt-2 bg-white/20 px-3 py-1 rounded">
                {error}
              </p>
            )}

            {/* Social proof */}
            <p className="text-xs text-white/80 mt-2">
              Dołącz do <strong>10,000+</strong> subskrybentów
            </p>
          </div>

          {/* Honeypot field (hidden) */}
          <input
            type="text"
            name="bot_field"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
            tabIndex={-1}
            autoComplete="new-password"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
