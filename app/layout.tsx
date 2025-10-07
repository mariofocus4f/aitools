import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeProvider'
import { NewsletterBanner } from '@/components/NewsletterBanner'

export const metadata: Metadata = {
  title: 'TrustyAI - Zaufany katalog narzędzi AI',
  description: 'Zaufany katalog narzędzi AI z funkcją wyszukiwania, porównywania i afiliacji. Znajdź idealne rozwiązanie AI dla swojego projektu.',
  keywords: ['AI tools', 'narzędzia AI', 'sztuczna inteligencja', 'AI katalog', 'AI directory', 'TrustyAI'],
  openGraph: {
    title: 'TrustyAI - Zaufany katalog narzędzi AI',
    description: 'Zaufany katalog narzędzi AI z funkcją wyszukiwania, porównywania i afiliacji.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <NewsletterBanner />
          <footer className="border-t border-border bg-surface">
            <div className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">TrustyAI</h3>
                  <p className="text-muted text-sm mb-4">
                    Zaufane źródło do odkrywania i wyboru narzędzi AI.
                  </p>
                  {/* Social Media */}
                  <div className="flex items-center gap-3">
                    <a 
                      href="https://twitter.com/trustyai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-surface border border-border hover:border-primary-500 flex items-center justify-center transition"
                      aria-label="Twitter/X"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://threads.net/@trustyai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-surface border border-border hover:border-primary-500 flex items-center justify-center transition"
                      aria-label="Threads"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.781 3.631 2.695 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.956 1.198-2.376 1.806-4.219 1.806-1.653 0-3.031-.586-4.094-1.74C6.711 15.458 6.19 13.71 6.19 11.5c0-2.21.52-3.958 1.543-5.195C8.796 5.15 10.174 4.563 11.827 4.563c.958 0 1.798.196 2.501.582a3.24 3.24 0 0 1 1.326 1.217l.217-.364c.326-.548.748-.914 1.253-1.087.238-.082.484-.123.732-.123.69 0 1.363.34 1.845.932a2.887 2.887 0 0 1 .454 2.754c-.273.85-.812 1.486-1.603 1.891a7.063 7.063 0 0 1-.892.347l.002.011c.885.628 1.568 1.417 2.033 2.349 1.04 2.083 1.103 5.127-1.046 7.54-1.816 2.04-4.366 2.994-7.792 3.015zm-.186-5.924c1.225 0 2.18-.374 2.838-1.112.585-.656.904-1.533 1.003-2.76-.584-.175-1.145-.43-1.673-.76-1.033-.648-1.749-1.524-2.129-2.605-.207-.589-.31-1.228-.31-1.898 0-1.18.226-2.102.673-2.743.447-.64 1.06-.96 1.824-.96.488 0 .914.107 1.268.319.354.212.632.502.827.863a3.15 3.15 0 0 1 .394 1.577c0 .736-.15 1.39-.45 1.944-.3.553-.722.984-1.257 1.283a3.564 3.564 0 0 1-1.673.442h-.122c-.075 0-.15.003-.225.008v1.96c.075-.006.15-.009.225-.009h.122c1.032 0 1.95-.238 2.728-.708.778-.47 1.382-1.134 1.797-1.973a6.04 6.04 0 0 0 .622-2.748c0-.982-.223-1.855-.663-2.596a4.313 4.313 0 0 0-1.846-1.742c-.798-.414-1.725-.622-2.759-.622-2.075 0-3.686.756-4.794 2.248-.984 1.324-1.481 3.102-1.481 5.285 0 2.183.497 3.961 1.481 5.285 1.108 1.492 2.719 2.248 4.794 2.248z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://linkedin.com/company/trustyai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-surface border border-border hover:border-primary-500 flex items-center justify-center transition"
                      aria-label="LinkedIn"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Nawigacja</h4>
                  <ul className="space-y-2 text-sm text-muted">
                    <li><a href="/" className="hover:text-text transition">Home</a></li>
                    <li><a href="/categories" className="hover:text-text transition">Kategorie</a></li>
                    <li><a href="/compare" className="hover:text-text transition">Porównaj</a></li>
                    <li><a href="/submit" className="hover:text-text transition">Zgłoś narzędzie</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Dla sponsorów</h4>
                  <ul className="space-y-2 text-sm text-muted">
                    <li><a href="/pricing" className="hover:text-text transition">Cennik reklam</a></li>
                    <li><a href="/advertise" className="hover:text-text transition">Reklamuj się</a></li>
                    <li><a href="/media-kit" className="hover:text-text transition">Media Kit</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Pomoc i kontakt</h4>
                  <ul className="space-y-2 text-sm text-muted">
                    <li><a href="/about" className="hover:text-text transition">O nas</a></li>
                    <li><a href="/contact" className="hover:text-text transition">Kontakt</a></li>
                    <li><a href="/regulamin" className="hover:text-text transition">Regulamin</a></li>
                    <li><a href="/privacy" className="hover:text-text transition">Polityka prywatności</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                  <div className="text-center text-sm text-muted">
                  <p>&copy; 2025 TrustyAI.pl Wszystkie prawa zastrzeżone.</p>
                  <p className="mt-2 text-xs">
                    Linki partnerskie są oznaczone. Możemy otrzymać prowizję od zakupów dokonanych przez nasze linki, bez dodatkowych kosztów dla Ciebie.
                  </p>
                  <p className="mt-2 text-xs">
                    <a href="/contact" className="hover:text-text transition">Kontakt</a>
                    {' · '}
                    <a href="/regulamin" className="hover:text-text transition">Regulamin</a>
                    {' · '}
                    <a href="/privacy" className="hover:text-text transition">Prywatność</a>
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}

