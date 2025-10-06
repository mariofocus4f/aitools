'use client'

import { Mail, MessageCircle, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Mail className="text-primary-500" size={32} />
          <h1 className="text-4xl font-bold">Kontakt</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6 shadow-card">
              <h2 className="text-xl font-bold mb-4">Skontaktuj się z nami</h2>
              <p className="text-muted mb-6">
                Masz pytania? Chcesz zareklamować swoje narzędzie? A może chcesz współpracować? Napisz do nas!
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="text-primary-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Email ogólny</p>
                    <a href="mailto:hello@trustyai.pl" className="text-primary-500 hover:underline text-sm">
                      hello@trustyai.pl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="text-primary-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Wsparcie techniczne</p>
                    <a href="mailto:support@trustyai.pl" className="text-primary-500 hover:underline text-sm">
                      support@trustyai.pl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Send className="text-primary-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Współpraca i reklama</p>
                    <a href="mailto:partners@trustyai.pl" className="text-primary-500 hover:underline text-sm">
                      partners@trustyai.pl
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 shadow-card">
              <h3 className="font-bold mb-3">Szybkie odpowiedzi</h3>
              <p className="text-sm text-muted mb-3">
                Zazwyczaj odpowiadamy w ciągu 24-48 godzin w dni robocze.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-muted">
                  💼 <strong>Dla sponsorów:</strong> <a href="/pricing" className="text-primary-500 hover:underline">Zobacz cennik</a>
                </p>
                <p className="text-muted">
                  🚀 <strong>Zgłoś narzędzie:</strong> <a href="/submit" className="text-primary-500 hover:underline">Formularz zgłoszenia</a>
                </p>
                <p className="text-muted">
                  📧 <strong>Newsletter:</strong> Kliknij "Newsletter" w menu
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-6 shadow-card">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-success" size={32} />
                </div>
                <h2 className="text-2xl font-bold mb-2">Dziękujemy!</h2>
                <p className="text-muted">
                  Twoja wiadomość została wysłana. Odezwiemy się wkrótce.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary mt-6"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-4">Formularz kontaktowy</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="input-field w-full"
                      placeholder="jan@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Temat *
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="input-field w-full"
                    >
                      <option value="">Wybierz temat</option>
                      <option value="general">Pytanie ogólne</option>
                      <option value="tool">Zgłoszenie narzędzia</option>
                      <option value="partnership">Współpraca</option>
                      <option value="advertising">Reklama</option>
                      <option value="technical">Problem techniczny</option>
                      <option value="other">Inne</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Wiadomość *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="input-field w-full h-32 resize-none"
                      placeholder="Opisz swoją sprawę..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full disabled:opacity-50"
                  >
                    {loading ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                  </button>

                  <p className="text-xs text-muted text-center">
                    Wysyłając wiadomość akceptujesz naszą{' '}
                    <a href="/privacy" className="text-primary-500 hover:underline">politykę prywatności</a>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

