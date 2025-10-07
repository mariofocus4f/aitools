'use client'

import { useState, useEffect } from 'react'
import { X, Mail, Check, Sparkles } from 'lucide-react'

interface NewsletterModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [honeypot, setHoneypot] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setEmail('')
      setConsent(false)
      setHoneypot('')
      setSubmitted(false)
      setLoading(false)
      setError('')
    }
  }, [isOpen])

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
        setTimeout(() => {
          onClose()
        }, 2000)
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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative glass-card rounded-2xl shadow-card max-w-md w-full p-8 z-10 animate-in fade-in slide-in-from-bottom-4 duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-surface transition"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {submitted ? (
          // Success state
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
              <Check className="text-success" size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Sprawdź email!</h2>
            <p className="text-muted">
              Wysłaliśmy link potwierdzający na Twój adres email. Kliknij w link, aby dokończyć zapis do newslettera.
            </p>
          </div>
        ) : (
          // Form state
          <>
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center mb-4">
              <Mail className="text-white" size={24} />
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold mb-2">
              Top 10 Weekly AI Tools
            </h2>
            <p className="text-muted mb-6">
              Cotygodniowy newsletter z najlepszymi narzędziami AI, wybranymi promptami i przykładami automatyzacji. Bez spamu, tylko wartość.
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">🎯</span>
                <div>
                  <p className="font-medium">10 najlepszych narzędzi</p>
                  <p className="text-sm text-muted">Ręcznie wybrane przez ekspertów</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">⚡</span>
                <div>
                  <p className="font-medium">Gotowe prompty AI</p>
                  <p className="text-sm text-muted">Praktyczne przykłady do użycia od razu</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">🤖</span>
                <div>
                  <p className="font-medium">Przykłady automatyzacji</p>
                  <p className="text-sm text-muted">Oszczędzaj czas dzięki AI</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">💰</span>
                <div>
                  <p className="font-medium">Exclusive deals</p>
                  <p className="text-sm text-muted">Zniżki tylko dla subskrybentów</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Twój email"
                required
                className="input-field w-full"
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
                <span className="text-sm text-muted">
                  Akceptuję{' '}
                  <a href="/regulamin" target="_blank" className="text-primary-500 hover:underline">
                    regulamin
                  </a>{' '}
                  i{' '}
                  <a href="/privacy" target="_blank" className="text-primary-500 hover:underline">
                    politykę prywatności
                  </a>. Zgadzam się na otrzymywanie newslettera.
                </span>
              </label>

              {error && (
                <p className="text-sm text-danger">{error}</p>
              )}
              
              <button
                type="submit"
                disabled={loading || !consent}
                className="btn-primary w-full disabled:opacity-50"
              >
                {loading ? 'Zapisywanie...' : 'Zapisz się do newslettera'}
              </button>

              <p className="text-xs text-muted text-center">
                Dołącz do <strong>10,000+</strong> subskrybentów. Anuluj w każdej chwili.
              </p>
            </form>

            {/* Social proof */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-center gap-2 text-sm text-muted">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full gradient-primary border-2 border-white dark:border-surface" />
                  <div className="w-8 h-8 rounded-full bg-gradient-accent border-2 border-white dark:border-surface" />
                  <div className="w-8 h-8 rounded-full bg-primary-300 border-2 border-white dark:border-surface" />
                </div>
                <span>Dołącz do tysięcy zadowolonych czytelników</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

