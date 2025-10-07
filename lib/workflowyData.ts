import type { Tool } from '@/types'

export interface WorkflowPrompt {
  id: string
  title: string
  description: string
  useCase: string
  prompt: string
  promptVariations?: string[]
  primaryTool: Tool
  alternativeTools: Tool[]
  category: string
  role: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedTime: string
  proTips: string[]
  exampleOutput?: string
  tags: string[]
  createdAt: Date
  updatedAt: Date
  verifiedByEditor: boolean
  usageCount: number
  rating: number
}

export interface PromptRole {
  id: string
  name: string
  slug: string
  description: string
  icon: string
  workflows: WorkflowPrompt[]
}

// Import narzędzi z mockData
import { mockTools } from './mockData'

export const workflowPrompts: WorkflowPrompt[] = [
  {
    id: 'wf1',
    title: 'Tworzenie prezentacji z konspektu tekstowego',
    description: 'Automatyczne generowanie profesjonalnej prezentacji na podstawie tekstowego konspektu artykułu lub dokumentu.',
    useCase: 'Masz gotowy artykuł lub konspekt i chcesz szybko stworzyć z niego prezentację biznesową lub edukacyjną.',
    prompt: `Oto konspekt artykułu: [WSTAW_TUTAJ_TEKST]

Utwórz z niego profesjonalną prezentację w formacie 10-12 slajdów, zawierającą:

1. Slajd tytułowy z głównym tematem
2. Slajd z planem prezentacji (agenda)
3. 6-8 slajdów merytorycznych z najważniejszymi punktami
4. Slajd z kluczowymi wnioskami
5. Slajd z pytaniami do dyskusji lub call-to-action

Każdy slajd powinien zawierać:
- Zwięzły, chwytliwy tytuł
- 3-5 kluczowych punktów w formie bullet points
- Praktyczne przykłady lub case studies (jeśli dostępne)
- Wizualne elementy (opisz jakie grafiki/ikony pasowałyby)

Zachowaj profesjonalny ton i skup się na praktycznej wartości dla odbiorców.`,
    promptVariations: [
      'Dostosuj prezentację dla audiencji [WSTAW_GRUPĘ_DOCELOWĄ] - np. menedżerów, studentów, klientów',
      'Dodaj sekcję z konkretnymi krokami do wdrożenia przedstawionych rozwiązań',
      'Włącz elementy storytellingu - opowiedz historię sukcesu lub porażki związaną z tematem'
    ],
    primaryTool: mockTools.find(t => t.slug === 'synthesia')!,
    alternativeTools: [
      mockTools.find(t => t.slug === 'notion-ai')!,
      mockTools.find(t => t.slug === 'chatgpt')!
    ],
    category: 'presentation-video',
    role: 'business-professional',
    difficulty: 'beginner',
    estimatedTime: '15-20 minut',
    proTips: [
      'Jeśli wynik za pierwszym razem nie spełnia oczekiwań, dodaj w promptcie więcej kontekstu o audiencji',
      'Użyj konkretnych liczb i danych zamiast ogólnych stwierdzeń',
      'Poproś o dodanie elementów interaktywnych (pytania, quizy) dla lepszego engagement'
    ],
    exampleOutput: 'Prezentacja "Strategia Digital Marketing 2024" - 12 slajdów z konkretnymi metrykami, case studies i planem wdrożenia',
    tags: ['prezentacje', 'business', 'marketing', 'automatyzacja'],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date(),
    verifiedByEditor: true,
    usageCount: 1247,
    rating: 4.8
  },
  {
    id: 'wf2',
    title: 'Generowanie opisów produktów e-commerce',
    description: 'Tworzenie angażujących, SEO-friendly opisów produktów dla sklepów internetowych.',
    useCase: 'Masz katalog produktów bez opisów lub z kiepskimi opisami i chcesz je szybko ulepszyć dla lepszej konwersji.',
    prompt: `Stwórz profesjonalny opis produktu dla e-commerce na podstawie następujących informacji:

Nazwa produktu: [NAZWA_PRODUKTU]
Kategoria: [KATEGORIA]
Kluczowe cechy: [CECHY_PRODUKTU]
Cena: [CENA]
Grupa docelowa: [GRUPA_DOCELOWA]

Opis powinien zawierać:

1. **Chwytliwy nagłówek** (max 60 znaków) - z główną korzyścią
2. **Krótki opis** (2-3 zdania) - co to jest i dlaczego warto kupić
3. **Lista korzyści** (5-7 punktów) - konkretne zalety dla klienta
4. **Specyfikacja techniczna** - kluczowe parametry
5. **Call-to-action** - zachęta do zakupu

Zasady:
- Używaj słów kluczowych naturalnie
- Skup się na korzyściach, nie tylko cechach
- Pisz w drugiej osobie ("Ty", "Twój")
- Unikaj technicznego żargonu
- Dodaj elementy emocjonalne
- Maksymalnie 300 słów`,
    promptVariations: [
      'Dostosuj opis dla platformy [PLATFORMA] - np. Allegro, Amazon, własny sklep',
      'Dodaj sekcję FAQ z 3-5 najczęstszymi pytaniami o produkt',
      'Stwórz wariant A/B - jeden emocjonalny, drugi racjonalny'
    ],
    primaryTool: mockTools.find(t => t.slug === 'jasper-ai')!,
    alternativeTools: [
      mockTools.find(t => t.slug === 'copy-ai')!,
      mockTools.find(t => t.slug === 'chatgpt')!
    ],
    category: 'marketing-sales',
    role: 'marketer',
    difficulty: 'intermediate',
    estimatedTime: '10-15 minut',
    proTips: [
      'Dodaj konkretne liczby i porównania ("3x szybszy niż konkurencja")',
      'Użyj słów akcji ("Odkryj", "Poczuj", "Doświadcz")',
      'Włącz social proof - "Wybierany przez 10,000+ klientów"'
    ],
    exampleOutput: 'Opis słuchawek bezprzewodowych - 280 słów, 6 korzyści, SEO-optimized, CTA "Zamów teraz z darmową dostawą"',
    tags: ['e-commerce', 'copywriting', 'SEO', 'konwersja'],
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date(),
    verifiedByEditor: true,
    usageCount: 2156,
    rating: 4.9
  },
  {
    id: 'wf3',
    title: 'Automatyzacja transkrypcji i podsumowania spotkań',
    description: 'Pełna automatyzacja procesu: nagrywanie → transkrypcja → podsumowanie → action items.',
    useCase: 'Prowadzisz regularne spotkania zespołowe i chcesz automatycznie generować notatki, podsumowania i listy zadań.',
    prompt: `Przeanalizuj transkrypcję spotkania i stwórz profesjonalne podsumowanie:

[WSTAW_TRANSKRYPCJĘ_SPOTKANIA]

Podsumowanie powinno zawierać:

**1. INFORMACJE PODSTAWOWE**
- Data i czas spotkania
- Uczestnicy
- Główny temat/cel spotkania

**2. KLUCZOWE PUNKTY DYSKUSJI**
- 5-7 najważniejszych tematów poruszonych
- Główne decyzje podjęte
- Problemy zidentyfikowane

**3. ACTION ITEMS**
- Konkretne zadania z przypisanymi osobami
- Terminy realizacji
- Priorytety (Wysoki/Średni/Niski)

**4. NASTĘPNE KROKI**
- Co będzie tematem kolejnego spotkania
- Informacje do przygotowania
- Harmonogram działań

**5. RYZYKA I BARIERY**
- Potencjalne problemy
- Zasoby potrzebne do realizacji
- Zależności między zadaniami

Format: Zwięzły, czytelny, gotowy do wysłania zespołowi.`,
    promptVariations: [
      'Dodaj analizę sentymentu - jak uczestnicy odnosili się do różnych tematów',
      'Stwórz wersję dla zarządu - tylko strategiczne decyzje i KPI',
      'Wygeneruj indywidualne notatki dla każdego uczestnika'
    ],
    primaryTool: mockTools.find(t => t.slug === 'descript')!,
    alternativeTools: [
      mockTools.find(t => t.slug === 'notion-ai')!,
      mockTools.find(t => t.slug === 'chatgpt')!
    ],
    category: 'productivity-office',
    role: 'manager',
    difficulty: 'beginner',
    estimatedTime: '5-10 minut',
    proTips: [
      'Użyj narzędzia do nagrywania z automatyczną transkrypcją (np. Descript, Otter.ai)',
      'Dodaj w promptcie nazwiska uczestników dla lepszej identyfikacji action items',
      'Poproś o oznaczenie priorytetów kolorami dla lepszej wizualizacji'
    ],
    exampleOutput: 'Podsumowanie spotkania sprint planning - 8 action items, 3 decyzje strategiczne, harmonogram na 2 tygodnie',
    tags: ['spotkania', 'produktywność', 'zespół', 'automatyzacja'],
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date(),
    verifiedByEditor: true,
    usageCount: 3421,
    rating: 4.7
  },
  {
    id: 'wf4',
    title: 'Generowanie kreatywnych obrazów dla social media',
    description: 'Tworzenie unikalnych, angażujących grafik do postów na social media z wykorzystaniem AI.',
    useCase: 'Potrzebujesz regularnie nowych grafik do postów na Instagram, Facebook, LinkedIn - chcesz uniknąć stock photos.',
    prompt: `Stwórz kreatywny obraz dla postu na social media:

Temat postu: [TEMA_POSTU]
Platforma: [PLATFORMA - Instagram/Facebook/LinkedIn]
Styl: [STYL - profesjonalny/playful/minimalistyczny/kolorowy]
Wymiary: [WYMIARY - kwadrat/landscape/portrait]

Instrukcje szczegółowe:
- Obraz powinien być unikalny i przyciągający uwagę
- Zawierać elementy związane z tematem, ale w kreatywny sposób
- Być gotowy do dodania tekstu (zostaw miejsce na overlay)
- Pasować do brandu [OPIS_BRANDU]
- Unikać cliché i typowych stock photo motywów

Dodatkowe elementy:
- Kolory: [PREFEROWANE_KOLORY]
- Mood: [NASTROJ - inspirujący/motywujący/profesjonalny]
- Elementy do unikania: [ELEMENTY_DO_UNIKANIA]

Wygeneruj 3 warianty w różnych stylach.`,
    promptVariations: [
      'Stwórz serię 5 powiązanych obrazów dla kampanii [NAZWA_KAMPANII]',
      'Dodaj elementy interaktywne - np. quiz, poll, challenge',
      'Dostosuj do trendów [PLATFORMA] - np. Instagram Reels, LinkedIn Carousel'
    ],
    primaryTool: mockTools.find(t => t.slug === 'midjourney')!,
    alternativeTools: [
      mockTools.find(t => t.slug === 'dall-e-3')!,
      mockTools.find(t => t.slug === 'canva-ai')!
    ],
    category: 'social-media-influencer',
    role: 'content-creator',
    difficulty: 'intermediate',
    estimatedTime: '20-30 minut',
    proTips: [
      'Eksperymentuj z różnymi stylami - photorealism, illustration, abstract',
      'Użyj konkretnych opisów kolorów i kompozycji',
      'Dodaj elementy związane z aktualnymi trendami social media'
    ],
    exampleOutput: '3 warianty grafik do postu o AI - minimalistyczny, kolorowy, profesjonalny - gotowe do dodania tekstu',
    tags: ['social media', 'grafika', 'marketing', 'kreatywność'],
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date(),
    verifiedByEditor: true,
    usageCount: 1893,
    rating: 4.6
  },
  {
    id: 'wf5',
    title: 'Analiza i optymalizacja kodu',
    description: 'Automatyczna analiza kodu pod kątem wydajności, bezpieczeństwa i best practices.',
    useCase: 'Masz gotowy kod i chcesz go zoptymalizować, sprawdzić pod kątem błędów i ulepszyć zgodnie z best practices.',
    prompt: `Przeanalizuj poniższy kod i stwórz szczegółowy raport optymalizacji:

[WSTAW_KOD_DO_ANALIZY]

Raport powinien zawierać:

**1. ANALIZA WYDAJNOŚCI**
- Zidentyfikowane bottlenecky
- Sugestie optymalizacji algorytmów
- Rekomendacje dotyczące pamięci i CPU

**2. BEZPIECZEŃSTWO**
- Potencjalne luki bezpieczeństwa
- Problemy z walidacją danych
- Sugestie implementacji security best practices

**3. JAKOŚĆ KODU**
- Code smells i anti-patterns
- Sugestie refaktoryzacji
- Zgodność z coding standards

**4. TESTY**
- Brakujące test cases
- Sugestie unit testów
- Edge cases do przetestowania

**5. DOKUMENTACJA**
- Brakujące komentarze
- Sugestie README
- API documentation

**6. ALTERNATYWNE ROZWIĄZANIA**
- Inne podejścia do problemu
- Nowoczesne biblioteki/frameworks
- Performance improvements

Format: Praktyczny, z konkretnymi przykładami kodu i wyjaśnieniami.`,
    promptVariations: [
      'Skoncentruj się na [ASPECT] - np. performance, security, maintainability',
      'Dodaj benchmarki - porównaj z alternatywnymi rozwiązaniami',
      'Stwórz plan migracji do [NOWA_TECHNOLOGIA]'
    ],
    primaryTool: mockTools.find(t => t.slug === 'github-copilot')!,
    alternativeTools: [
      mockTools.find(t => t.slug === 'chatgpt')!,
      mockTools.find(t => t.slug === 'notion-ai')!
    ],
    category: 'code-developer-tools',
    role: 'developer',
    difficulty: 'advanced',
    estimatedTime: '30-45 minut',
    proTips: [
      'Dodaj kontekst o projekcie - framework, język, wymagania',
      'Poproś o konkretne przykłady refaktoryzacji',
      'Uwzględnij specyfikę domeny biznesowej w analizie'
    ],
    exampleOutput: 'Raport analizy React komponentu - 12 sugestii optymalizacji, 3 security issues, plan refaktoryzacji',
    tags: ['programowanie', 'optymalizacja', 'security', 'best practices'],
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date(),
    verifiedByEditor: true,
    usageCount: 987,
    rating: 4.9
  }
]

export const promptRoles: PromptRole[] = [
  {
    id: 'role1',
    name: 'Marketing & Growth',
    slug: 'marketing-growth',
    description: 'Prompty dla marketerów, copywriterów, specjalistów SEO i growth hacking',
    icon: '📈',
    workflows: workflowPrompts.filter(w => w.role === 'marketer')
  },
  {
    id: 'role2',
    name: 'Business & Management',
    slug: 'business-management',
    description: 'Prompty dla menedżerów, liderów zespołów i specjalistów biznesowych',
    icon: '💼',
    workflows: workflowPrompts.filter(w => w.role === 'manager' || w.role === 'business-professional')
  },
  {
    id: 'role3',
    name: 'Content Creation',
    slug: 'content-creation',
    description: 'Prompty dla twórców treści, influencerów i specjalistów social media',
    icon: '🎨',
    workflows: workflowPrompts.filter(w => w.role === 'content-creator')
  },
  {
    id: 'role4',
    name: 'Development & IT',
    slug: 'development-it',
    description: 'Prompty dla programistów, DevOps i specjalistów IT',
    icon: '💻',
    workflows: workflowPrompts.filter(w => w.role === 'developer')
  }
]

export function getWorkflowsByCategory(categorySlug: string): WorkflowPrompt[] {
  return workflowPrompts.filter(workflow => workflow.category === categorySlug)
}

export function getWorkflowsByRole(roleSlug: string): WorkflowPrompt[] {
  const role = promptRoles.find(r => r.slug === roleSlug)
  return role ? role.workflows : []
}

export function getFeaturedWorkflows(): WorkflowPrompt[] {
  return workflowPrompts
    .filter(workflow => workflow.verifiedByEditor)
    .sort((a, b) => b.usageCount - a.usageCount)
    .slice(0, 6)
}

export function getPopularWorkflows(): WorkflowPrompt[] {
  return workflowPrompts
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8)
}
