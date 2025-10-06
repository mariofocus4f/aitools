import type { Prompt, PromptRole } from '@/types/prompts'

export const promptRoles: PromptRole[] = [
  {
    id: '1',
    name: 'Marketing & Growth',
    slug: 'marketing-growth',
    icon: '📈',
    description: 'Prompty dla marketerów, copywriterów, SEO i social media',
    color: '#E05353'
  },
  {
    id: '2',
    name: 'Sales & Customer Success',
    slug: 'sales-customer',
    icon: '💼',
    description: 'Email sequences, follow-upy, research klientów',
    color: '#19B36C'
  },
  {
    id: '3',
    name: 'Product & UX',
    slug: 'product-ux',
    icon: '🎨',
    description: 'User stories, roadmapy, feedback analysis',
    color: '#5B8CFF'
  },
  {
    id: '4',
    name: 'Engineering & IT',
    slug: 'engineering-it',
    icon: '💻',
    description: 'Code review, dokumentacja, automatyzacja',
    color: '#9B5BFF'
  },
  {
    id: '5',
    name: 'HR & Recruiting',
    slug: 'hr-recruiting',
    icon: '👥',
    description: 'Job descriptions, rozmowy kwalifikacyjne, onboarding',
    color: '#1FB89A'
  },
  {
    id: '6',
    name: 'Finance & Operations',
    slug: 'finance-operations',
    icon: '💰',
    description: 'Raporty, analizy, kalkulacje, Excel',
    color: '#E6A700'
  },
  {
    id: '7',
    name: 'Executives & Managers',
    slug: 'executives-managers',
    icon: '🎯',
    description: 'Strategia, KPI, komunikacja, prezentacje',
    color: '#3A9AE2'
  },
  {
    id: '8',
    name: 'Education',
    slug: 'education',
    icon: '📚',
    description: 'Lekcje, quizy, materiały edukacyjne',
    color: '#FF6B9D'
  },
  {
    id: '9',
    name: 'Government & Public',
    slug: 'government-public',
    icon: '🏛️',
    description: 'Dokumenty urzędowe, raporty, analizy',
    color: '#7C3AED'
  }
]

export const mockPrompts: Prompt[] = [
  // Marketing & Growth
  {
    id: 'p1',
    title: 'Kampania email marketingowa',
    slug: 'kampania-email-marketingowa',
    description: 'Kompleksowy prompt do tworzenia sekwencji emaili marketingowych',
    content: `Stwórz sekwencję 5 emaili dla kampanii marketingowej:

Produkt/Usługa: [NAZWA_PRODUKTU]
Grupa docelowa: [TARGET_AUDIENCE]
Główna korzyść: [MAIN_BENEFIT]
CTA: [CALL_TO_ACTION]

Dla każdego emaila podaj:
1. Temat (subject line) - przyciągający uwagę
2. Pre-header (70 znaków)
3. Treść emaila (200-300 słów)
4. CTA button text
5. PS line (jeśli potrzebne)

Email 1: Wprowadzenie i wartość
Email 2: Social proof i case study
Email 3: Edukacja i benefits
Email 4: Deadline/FOMO
Email 5: Last chance

Ton: [PROFESSIONAL/CASUAL/FRIENDLY]`,
    role: promptRoles[0],
    category: 'Email Marketing',
    tags: ['email', 'kampania', 'sekwencja', 'marketing'],
    difficulty: 'intermediate',
    useCase: 'Tworzenie automatycznych sekwencji emailowych',
    recommendedTools: ['3', '7'], // Jasper AI, Copy.ai
    variables: [
      { name: 'NAZWA_PRODUKTU', description: 'Nazwa produktu/usługi', example: 'Kurs online AI', required: true },
      { name: 'TARGET_AUDIENCE', description: 'Grupa docelowa', example: 'Marketerzy 25-40 lat', required: true },
      { name: 'MAIN_BENEFIT', description: 'Główna korzyść', example: 'Zaoszczędź 10h tygodniowo', required: true }
    ],
    likes: 156,
    views: 2340,
    isPremium: false,
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date()
  },
  {
    id: 'p2',
    title: 'Post na LinkedIn',
    slug: 'post-linkedin',
    description: 'Viralowy post LinkedIn z storytelling',
    content: `Napisz post na LinkedIn używając frameworka storytelling:

Temat: [TOPIC]
Kluczowa lekcja: [KEY_LESSON]
Długość: 150-200 słów

Struktura:
1. Hook (pierwsze 2 zdania) - zatrzymaj scroll
2. Problem/Challenge (osobista historia)
3. Rozwiązanie/Insight
4. Lekcja/Takeaway
5. Call to action (pytanie do komentarzy)

Style:
- Używaj krótkich akapitów (2-3 linie max)
- Emoji do podkreślenia punktów
- Ton: autentyczny, nie-salesy
- Dodaj 3-5 hashtagów`,
    role: promptRoles[0],
    category: 'Social Media',
    tags: ['linkedin', 'social media', 'content', 'viral'],
    difficulty: 'beginner',
    useCase: 'Tworzenie angażujących postów LinkedIn',
    recommendedTools: ['1', '7'], // ChatGPT, Copy.ai
    likes: 234,
    views: 3890,
    isPremium: false,
    createdAt: new Date('2025-01-20'),
    updatedAt: new Date()
  },
  {
    id: 'p3',
    title: 'SEO content brief',
    slug: 'seo-content-brief',
    description: 'Szczegółowy brief dla SEO writera',
    content: `Stwórz content brief dla artykułu SEO:

Keyword: [MAIN_KEYWORD]
Search intent: [INFORMATIONAL/TRANSACTIONAL/NAVIGATIONAL]
Target audience: [AUDIENCE]

Brief powinien zawierać:

1. Title options (3 warianty, max 60 znaków)
2. Meta description (155 znaków)
3. Recommended structure (H2, H3 headings)
4. Key points to cover (bullet points)
5. Related keywords (10-15 LSI keywords)
6. Questions to answer (People Also Ask)
7. Word count target
8. Internal linking suggestions
9. CTA recommendation
10. Tone of voice guidelines`,
    role: promptRoles[0],
    category: 'SEO',
    tags: ['seo', 'content', 'brief', 'keywords'],
    difficulty: 'advanced',
    useCase: 'Przygotowanie brief dla content writerów',
    recommendedTools: ['3'], // Jasper AI
    likes: 189,
    views: 2100,
    isPremium: true,
    createdAt: new Date('2025-02-01'),
    updatedAt: new Date()
  },

  // Sales & Customer Success
  {
    id: 'p4',
    title: 'Cold email outreach',
    slug: 'cold-email-outreach',
    description: 'Skuteczny cold email dla sprzedaży B2B',
    content: `Napisz cold email dla prospekta B2B:

Firma prospekta: [COMPANY_NAME]
Osoba kontaktowa: [CONTACT_NAME]
Stanowisko: [JOB_TITLE]
Mój produkt/usługa: [PRODUCT]
Zidentyfikowany problem: [PAIN_POINT]

Email powinien:
1. Subject line (wywołujący ciekawość, bez clickbaitu)
2. Personalizacja (odniesienie do firmy/aktualności)
3. Problem statement (pokazanie że rozumiem wyzwanie)
4. Value proposition (jak mogę pomóc)
5. Social proof (1 zdanie)
6. CTA (low-commitment, np. 15-min call)
7. PS line (dodatkowa wartość)

Max 120 słów. Ton: profesjonalny ale przyjazny.`,
    role: promptRoles[1],
    category: 'Sales',
    tags: ['cold email', 'b2b', 'sales', 'outreach'],
    difficulty: 'intermediate',
    useCase: 'Pierwsze podejście do potencjalnego klienta',
    recommendedTools: ['1', '7'],
    likes: 312,
    views: 4230,
    isPremium: false,
    createdAt: new Date('2025-01-18'),
    updatedAt: new Date()
  },

  // Product & UX
  {
    id: 'p5',
    title: 'User Story Generator',
    slug: 'user-story-generator',
    description: 'Generowanie user stories dla Agile',
    content: `Stwórz user story dla feature:

Feature: [FEATURE_NAME]
User persona: [USER_TYPE]
Cel biznesowy: [BUSINESS_GOAL]

Format INVEST:
- Independent
- Negotiable
- Valuable
- Estimable
- Small
- Testable

User Story:
"Jako [typ użytkownika]
Chcę [akcja/funkcja]
Aby [korzyść/cel]"

Acceptance Criteria (Given-When-Then):
1. Given [kontekst]
   When [akcja]
   Then [rezultat]
2. [kolejne scenariusze...]

Edge cases:
- [lista edge cases]

Dependencies:
- [zależności techniczne/biznesowe]`,
    role: promptRoles[2],
    category: 'Product Management',
    tags: ['agile', 'user story', 'product', 'requirements'],
    difficulty: 'intermediate',
    useCase: 'Tworzenie user stories dla zespołu deweloperskiego',
    recommendedTools: ['1', '5'],
    likes: 198,
    views: 2890,
    isPremium: false,
    createdAt: new Date('2025-02-05'),
    updatedAt: new Date()
  },

  // Engineering & IT
  {
    id: 'p6',
    title: 'Code Review Assistant',
    slug: 'code-review-assistant',
    description: 'Systematyczny code review z AI',
    content: `Wykonaj code review dla poniższego kodu:

\`\`\`[LANGUAGE]
[CODE_SNIPPET]
\`\`\`

Przeanalizuj pod kątem:

1. **Czytelność i style**
   - Naming conventions
   - Code organization
   - Comments quality

2. **Best Practices**
   - Design patterns
   - DRY principle
   - SOLID principles

3. **Performance**
   - Time complexity
   - Memory usage
   - Potential bottlenecks

4. **Security**
   - Input validation
   - SQL injection risk
   - XSS vulnerabilities

5. **Testing**
   - Test coverage gaps
   - Edge cases

6. **Improvements**
   - Refactoring suggestions
   - Alternative approaches

Format: dla każdego punktu podaj:
✅ Co jest OK
⚠️ Co można poprawić
🔴 Krytyczne problemy`,
    role: promptRoles[3],
    category: 'Development',
    tags: ['code review', 'development', 'best practices', 'refactoring'],
    difficulty: 'advanced',
    useCase: 'Automatyczne review kodu przed merge',
    recommendedTools: ['1', '8'], // ChatGPT, GitHub Copilot
    likes: 445,
    views: 6780,
    isPremium: true,
    createdAt: new Date('2025-01-25'),
    updatedAt: new Date()
  },

  // HR & Recruiting
  {
    id: 'p7',
    title: 'Job Description Generator',
    slug: 'job-description-generator',
    description: 'Atrakcyjny opis stanowiska',
    content: `Napisz job description dla stanowiska:

Stanowisko: [JOB_TITLE]
Poziom: [JUNIOR/MID/SENIOR]
Lokalizacja: [LOCATION/REMOTE]
Wynagrodzenie: [SALARY_RANGE]

Struktura:

**About Us** (50 słów)
- Kim jesteśmy
- Nasza misja
- Co nas wyróżnia

**The Role** (100 słów)
- Główne zadania (5-7 bulletów)
- Czym będziesz się zajmować
- Impact na firmę

**What We're Looking For**
Must have:
- [umiejętności wymagane]

Nice to have:
- [umiejętności dodatkowe]

**What We Offer**
- Wynagrodzenie: [zakres]
- Benefits: [lista]
- Growth: [możliwości rozwoju]
- Culture: [kultura pracy]

**How to Apply**
[Proces rekrutacji]

Ton: Inspirujący, ale konkretny. Unikaj buzzwordów.`,
    role: promptRoles[4],
    category: 'Recruiting',
    tags: ['hr', 'recruiting', 'job description', 'hiring'],
    difficulty: 'beginner',
    useCase: 'Tworzenie ogłoszeń o pracę',
    recommendedTools: ['1', '7'],
    likes: 267,
    views: 3450,
    isPremium: false,
    createdAt: new Date('2025-02-10'),
    updatedAt: new Date()
  },

  // Finance & Operations
  {
    id: 'p8',
    title: 'Excel Formula Generator',
    slug: 'excel-formula-generator',
    description: 'AI asystent do złożonych formuł Excel',
    content: `Pomóż mi stworzyć formułę Excel:

Zadanie: [OPISZ_CO_CHCESZ_OSIĄGNĄĆ]

Dane wejściowe:
- Kolumny: [LISTA_KOLUMN]
- Warunki: [WARUNKI_LOGICZNE]
- Oczekiwany wynik: [REZULTAT]

Potrzebuję:
1. Gotową formułę Excel
2. Wyjaśnienie krok po kroku
3. Przykład użycia
4. Alternatywne rozwiązania (jeśli są)
5. Potencjalne błędy i jak ich uniknąć

Format odpowiedzi:
\`\`\`excel
=FORMUŁA()
\`\`\`

Wyjaśnienie:
[Szczegółowy opis działania]

Przykład:
[Konkretny przykład z danymi]`,
    role: promptRoles[5],
    category: 'Excel',
    tags: ['excel', 'formulas', 'spreadsheet', 'automation'],
    difficulty: 'intermediate',
    useCase: 'Tworzenie zaawansowanych formuł Excel',
    recommendedTools: ['1'],
    likes: 523,
    views: 8900,
    isPremium: false,
    createdAt: new Date('2025-01-30'),
    updatedAt: new Date()
  },

  // Executives & Managers
  {
    id: 'p9',
    title: 'OKR Framework Builder',
    slug: 'okr-framework-builder',
    description: 'Tworzenie objectives i key results',
    content: `Pomóż stworzyć OKRs dla zespołu/działu:

Dział/Zespół: [TEAM_NAME]
Cel strategiczny firmy: [COMPANY_GOAL]
Kwartał: [Q1/Q2/Q3/Q4 YEAR]
Priorytet: [MAIN_PRIORITY]

Stwórz 3-5 Objectives, każdy z 3-4 Key Results:

**Objective 1:** [Inspirujący cel jakościowy]
Key Results:
- KR1: [Mierzalny rezultat od X do Y]
- KR2: [Mierzalny rezultat od X do Y]
- KR3: [Mierzalny rezultat od X do Y]

**Objective 2:** [...]

Wytyczne:
- Objectives: ambitne, inspirujące, jakościowe
- Key Results: SMART (konkretne liczby, %)
- Alignment z celami firmy
- Achievable ale challenging (70% confidence)

Dodatkowo:
- Initiatives (jak osiągniemy KRs)
- Potencjalne blockers
- Success metrics`,
    role: promptRoles[6],
    category: 'Strategy',
    tags: ['okr', 'strategy', 'goals', 'kpi', 'management'],
    difficulty: 'advanced',
    useCase: 'Quarterly planning i goal setting',
    recommendedTools: ['1'],
    likes: 389,
    views: 5670,
    isPremium: true,
    createdAt: new Date('2025-02-03'),
    updatedAt: new Date()
  },

  // Education
  {
    id: 'p10',
    title: 'Quiz Generator',
    slug: 'quiz-generator',
    description: 'Automatyczne tworzenie quizów edukacyjnych',
    content: `Stwórz quiz edukacyjny:

Temat: [SUBJECT]
Poziom: [ELEMENTARY/MIDDLE/HIGH_SCHOOL/UNIVERSITY]
Liczba pytań: [NUMBER]
Typ: [MULTIPLE_CHOICE/TRUE_FALSE/OPEN_ENDED]

Dla każdego pytania:
1. Treść pytania (jasna, konkretna)
2. 4 odpowiedzi (A, B, C, D)
3. Poprawna odpowiedź
4. Wyjaśnienie (dlaczego ta odpowiedź jest poprawna)
5. Poziom trudności (1-5)
6. Bloom's taxonomy level

Pytania powinny:
- Testować zrozumienie, nie tylko pamięć
- Mieć rosnącą trudność
- Unikać dwuznaczności
- Mieć realistyczne dystraktorsy

Format:
Q1. [Pytanie]
A) [Odpowiedź]
B) [Odpowiedź]
C) [Odpowiedź]
D) [Odpowiedź]

Correct: [A/B/C/D]
Explanation: [Wyjaśnienie]
Level: [Bloom's level]`,
    role: promptRoles[7],
    category: 'Teaching',
    tags: ['education', 'quiz', 'test', 'learning'],
    difficulty: 'beginner',
    useCase: 'Przygotowanie materiałów sprawdzających',
    recommendedTools: ['1'],
    likes: 412,
    views: 6340,
    isPremium: false,
    createdAt: new Date('2025-02-08'),
    updatedAt: new Date()
  }
]

export function getPromptsByRole(roleSlug: string): Prompt[] {
  return mockPrompts.filter(prompt => prompt.role.slug === roleSlug)
}

export function getFeaturedPrompts(): Prompt[] {
  return mockPrompts
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 6)
}

export function getPromptsByTags(tags: string[]): Prompt[] {
  return mockPrompts.filter(prompt =>
    tags.some(tag => prompt.tags.includes(tag))
  )
}

