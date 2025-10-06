import { Shield } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="text-primary-500" size={32} />
          <h1 className="text-4xl font-bold">Polityka prywatności</h1>
        </div>

        <div className="glass-card rounded-2xl p-8 shadow-card space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Administrator danych</h2>
            <p className="text-muted leading-relaxed">
              Administratorem danych osobowych przetwarzanych w ramach serwisu TrustyAI.pl jest [Nazwa firmy] z siedzibą w [Adres], wpisana do [Rejestr] pod numerem [NIP/REGON].
            </p>
            <p className="text-muted leading-relaxed mt-3">
              Kontakt: <a href="mailto:privacy@trustyai.pl" className="text-primary-500 hover:underline">privacy@trustyai.pl</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Zakres przetwarzanych danych</h2>
            <p className="text-muted leading-relaxed mb-3">Przetwarzamy następujące dane osobowe:</p>
            <ul className="list-disc list-inside space-y-2 text-muted">
              <li><strong>Newsletter:</strong> adres email</li>
              <li><strong>Zgłoszenia narzędzi:</strong> imię, email, dane narzędzia</li>
              <li><strong>Pliki cookies:</strong> dane techniczne o urządzeniu i zachowaniu użytkownika</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Cele przetwarzania danych</h2>
            <p className="text-muted leading-relaxed mb-3">Twoje dane przetwarzamy w celu:</p>
            <ul className="list-disc list-inside space-y-2 text-muted">
              <li>Wysyłki newslettera (na podstawie zgody - art. 6 ust. 1 lit. a RODO)</li>
              <li>Weryfikacji zgłoszeń narzędzi (na podstawie prawnie uzasadnionego interesu)</li>
              <li>Analizy ruchu i optymalizacji serwisu (na podstawie prawnie uzasadnionego interesu)</li>
              <li>Realizacji obowiązków prawnych (podstawa prawna - art. 6 ust. 1 lit. c RODO)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Okres przechowywania danych</h2>
            <ul className="list-disc list-inside space-y-2 text-muted">
              <li><strong>Newsletter:</strong> do czasu wycofania zgody</li>
              <li><strong>Zgłoszenia:</strong> do momentu realizacji celu lub 12 miesięcy</li>
              <li><strong>Analytics:</strong> maksymalnie 26 miesięcy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Udostępnianie danych</h2>
            <p className="text-muted leading-relaxed mb-3">
              Twoje dane osobowe mogą być udostępniane następującym kategoriom odbiorców:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted">
              <li>Dostawcom usług hostingowych i technicznych</li>
              <li>Dostawcom narzędzi analitycznych (np. Plausible Analytics)</li>
              <li>Dostawcom usług email marketingowych (np. Mailchimp)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Twoje prawa</h2>
            <p className="text-muted leading-relaxed mb-3">Masz prawo do:</p>
            <ul className="list-disc list-inside space-y-2 text-muted">
              <li>Dostępu do swoich danych osobowych</li>
              <li>Sprostowania danych</li>
              <li>Usunięcia danych ("prawo do bycia zapomnianym")</li>
              <li>Ograniczenia przetwarzania</li>
              <li>Przenoszenia danych</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania</li>
              <li>Wycofania zgody w dowolnym momencie</li>
              <li>Wniesienia skargi do organu nadzorczego (UODO)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Pliki cookies</h2>
            <p className="text-muted leading-relaxed mb-3">
              Nasza strona wykorzystuje pliki cookies w celach:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted">
              <li><strong>Niezbędnych:</strong> zachowanie motywu (dark/light mode), sesja</li>
              <li><strong>Analitycznych:</strong> analiza ruchu (Plausible Analytics - zgodne z RODO)</li>
              <li><strong>Marketingowych:</strong> tracking linków afiliacyjnych</li>
            </ul>
            <p className="text-muted leading-relaxed mt-3">
              Możesz zarządzać cookies poprzez ustawienia swojej przeglądarki.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Bezpieczeństwo danych</h2>
            <p className="text-muted leading-relaxed">
              Stosujemy odpowiednie środki techniczne i organizacyjne zapewniające bezpieczeństwo przetwarzanych danych, w tym szyfrowanie SSL, regularne backupy i ograniczony dostęp do danych.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Zmiany polityki prywatności</h2>
            <p className="text-muted leading-relaxed">
              Zastrzegamy sobie prawo do aktualizacji niniejszej polityki prywatności. O istotnych zmianach poinformujemy poprzez publikację nowej wersji oraz newsletter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Kontakt</h2>
            <p className="text-muted leading-relaxed">
              W sprawach dotyczących ochrony danych osobowych prosimy o kontakt:
            </p>
            <ul className="mt-3 space-y-2 text-muted">
              <li>Email: <a href="mailto:privacy@trustyai.pl" className="text-primary-500 hover:underline">privacy@trustyai.pl</a></li>
              <li>Adres: [Adres firmy]</li>
            </ul>
          </section>

          <div className="mt-8 pt-8 border-t border-border text-sm text-muted">
            <p>Ostatnia aktualizacja: 6 października 2025</p>
            <p className="mt-2">Polityka przygotowana zgodnie z RODO (Rozporządzenie UE 2016/679)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

