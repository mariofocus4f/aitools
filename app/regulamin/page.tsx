import { FileText } from 'lucide-react'

export default function RegulaminPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <FileText className="text-primary-500" size={32} />
          <h1 className="text-4xl font-bold">Regulamin serwisu</h1>
        </div>

        <div className="glass-card rounded-2xl p-8 shadow-card space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">§ 1. Postanowienia ogólne</h2>
    <p className="text-muted leading-relaxed">
      Niniejszy regulamin określa zasady korzystania z serwisu TrustyAI.pl (dalej: &quot;Serwis&quot;), prowadzonego przez [Nazwa firmy] z siedzibą w [Adres].
    </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 2. Definicje</h2>
            <ul className="space-y-2 text-muted">
              <li><strong>Użytkownik</strong> - osoba korzystająca z Serwisu</li>
              <li><strong>Treści</strong> - informacje o narzędziach AI publikowane w Serwisie</li>
              <li><strong>Newsletter</strong> - cotygodniowa lista narzędzi AI wysyłana na email</li>
              <li><strong>Link afiliacyjny</strong> - link partnerski, z którego możemy otrzymać prowizję</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 3. Korzystanie z Serwisu</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted">
              <li>Korzystanie z Serwisu jest bezpłatne i nie wymaga rejestracji.</li>
              <li>Użytkownik zobowiązuje się do korzystania z Serwisu zgodnie z prawem i dobrymi obyczajami.</li>
              <li>Zabronione jest wykorzystywanie Serwisu do działań niezgodnych z prawem.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 4. Newsletter</h2>
            <p className="text-muted leading-relaxed mb-3">
              Zapisanie się do newslettera wymaga podania adresu email i akceptacji regulaminu oraz polityki prywatności.
            </p>
            <p className="text-muted leading-relaxed">
              Użytkownik może w każdej chwili zrezygnować z newslettera poprzez kliknięcie linku "unsubscribe" w otrzymanej wiadomości.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 5. Linki afiliacyjne</h2>
            <p className="text-muted leading-relaxed mb-3">
              Serwis zawiera linki afiliacyjne do narzędzi AI. Oznacza to, że możemy otrzymać prowizję od zakupów dokonanych przez te linki.
            </p>
            <p className="text-muted leading-relaxed">
              Korzystanie z linków afiliacyjnych nie wiąże się z dodatkowymi kosztami dla Użytkownika.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 6. Zgłaszanie narzędzi</h2>
            <p className="text-muted leading-relaxed">
              Użytkownik może zgłaszać nowe narzędzia AI poprzez formularz dostępny w Serwisie. Zgłoszenie podlega weryfikacji przez zespół redakcyjny i może zostać odrzucone bez podania przyczyny.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 7. Własność intelektualna</h2>
            <p className="text-muted leading-relaxed">
              Wszelkie treści publikowane w Serwisie, w tym opisy narzędzi, są chronione prawem autorskim i stanowią własność [Nazwa firmy].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 8. Wyłączenie odpowiedzialności</h2>
            <p className="text-muted leading-relaxed mb-3">
              Serwis udostępnia informacje o narzędziach AI wyłącznie w celach informacyjnych. Nie ponosimy odpowiedzialności za:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted">
              <li>Decyzje użytkowników podjęte na podstawie informacji z Serwisu</li>
              <li>Działanie zewnętrznych narzędzi AI</li>
              <li>Zmiany cen i funkcji narzędzi przez ich twórców</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 9. Zmiany regulaminu</h2>
            <p className="text-muted leading-relaxed">
              Zastrzegamy sobie prawo do zmiany niniejszego regulaminu. O zmianach poinformujemy poprzez publikację nowej wersji w Serwisie.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 10. Postanowienia końcowe</h2>
            <p className="text-muted leading-relaxed">
              W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy prawa polskiego.
            </p>
          </section>

          <div className="mt-8 pt-8 border-t border-border text-sm text-muted">
            <p>Ostatnia aktualizacja: 6 października 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}

