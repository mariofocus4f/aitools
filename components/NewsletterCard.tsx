'use client'

import { useState } from 'react'
import { Mail, Check } from 'lucide-react'

export function NewsletterCard() {
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
      setError('Nie udało się połączyć z serwerem. Sprawdź połączenie i spróbuj ponownie.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-2xl glass-card shadow-card p-8 border-2 border-primary-100">
      <div className="text-center mb-6">
        <div className="w-16 h-16 rounded-2xl bg-primary-500 mx-auto mb-4 flex items-center justify-center">
          <Mail className="text-white" size={28} />
        </div>
        <h3 className="font-bold text-2xl mb-2">Top 10 Weekly AI Tools</h3>
        <p className="text-muted">Cotygodniowy newsletter</p>
      </div>

      <p className="text-muted text-sm mb-6 text-center">
        Otrzymuj co tydzień listę 10 najlepszych narzędzi AI, wybrane prompty i przykłady automatyzacji. Bez spamu, tylko wartość.
      </p>

      {/* Benefits Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="text-center p-3 rounded-xl bg-surface/50">
          <div className="text-2xl mb-1">🎯</div>
          <p className="font-semibold text-sm mb-0.5">10 najlepszych narzędzi</p>
          <p className="text-xs text-muted">Ręcznie wybrane przez ekspertów</p>
        </div>
        <div className="text-center p-3 rounded-xl bg-surface/50">
          <div className="text-2xl mb-1">⚡</div>
          <p className="font-semibold text-sm mb-0.5">Gotowe prompty</p>
          <p className="text-xs text-muted">Praktyczne przykłady</p>
        </div>
        <div className="text-center p-3 rounded-xl bg-surface/50">
          <div className="text-2xl mb-1">🤖</div>
          <p className="font-semibold text-sm mb-0.5">Automatyzacje</p>
          <p className="text-xs text-muted">Oszczędzaj czas</p>
        </div>
        <div className="text-center p-3 rounded-xl bg-surface/50">
          <div className="text-2xl mb-1">💰</div>
          <p className="font-semibold text-sm mb-0.5">Exclusive deals</p>
          <p className="text-xs text-muted">Zniżki dla Ciebie</p>
        </div>
      </div>

      {submitted ? (
        <div className="text-center py-6">
          <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-3">
            <Check className="text-success" size={24} />
          </div>
          <p className="font-semibold text-lg mb-1">Sprawdź email!</p>
          <p className="text-sm text-muted">Wysłaliśmy link potwierdzający</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Twój email"
            required
            className="input-field w-full text-center"
            disabled={loading}
          />

          {/* Honeypot field (hidden from users, visible to bots) */}
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

          {/* Consent checkbox */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-border text-primary-500 focus:ring-primary-400"
              disabled={loading}
            />
            <span className="text-xs text-muted text-left">
              Akceptuję{' '}
              <a href="/regulamin" target="_blank" className="text-primary-500 hover:underline">
                regulamin
              </a>{' '}
              i{' '}
              <a href="/privacy" target="_blank" className="text-primary-500 hover:underline">
                politykę prywatności
              </a>
            </span>
          </label>

          {error && (
            <p className="text-xs text-danger text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !consent}
            className="btn-primary w-full disabled:opacity-50 text-lg py-3"
          >
            {loading ? 'Zapisywanie...' : 'Zapisz się'}
          </button>
          
          <p className="text-xs text-muted text-center">
            Wysyłamy tylko wartościowe treści. Bez spamu.
          </p>
          
          <div className="pt-4 border-t border-border">
            <div className="flex items-center justify-center gap-2 text-xs text-muted">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full gradient-primary border-2 border-white dark:border-surface" />
                <div className="w-6 h-6 rounded-full bg-gradient-accent border-2 border-white dark:border-surface" />
                <div className="w-6 h-6 rounded-full bg-primary-300 border-2 border-white dark:border-surface" />
              </div>
              <span>Dołącz do <strong>10,000+</strong> subskrybentów</span>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

