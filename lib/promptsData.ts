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
  },
  {
    id: '10',
    name: 'Content Creation',
    slug: 'content-creation',
    icon: '✍️',
    description: 'Blogi, artykuły, social media content',
    color: '#FF8C42'
  },
  {
    id: '11',
    name: 'Design & Creative',
    slug: 'design-creative',
    icon: '🎨',
    description: 'Grafika, branding, creative briefs',
    color: '#8B5CF6'
  },
  {
    id: '12',
    name: 'Legal & Compliance',
    slug: 'legal-compliance',
    icon: '⚖️',
    description: 'Umowy, regulaminy, compliance',
    color: '#059669'
  },
  {
    id: '13',
    name: 'Healthcare & Medical',
    slug: 'healthcare-medical',
    icon: '🏥',
    description: 'Dokumentacja medyczna, raporty, analizy',
    color: '#DC2626'
  },
  {
    id: '14',
    name: 'Real Estate',
    slug: 'real-estate',
    icon: '🏠',
    description: 'Opisy nieruchomości, wyceny, analizy rynku',
    color: '#0891B2'
  },
  {
    id: '15',
    name: 'eCommerce & Retail',
    slug: 'ecommerce-retail',
    icon: '🛒',
    description: 'Opisy produktów, SEO, marketing',
    color: '#EA580C'
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
  },

  // Content Creation
  {
    id: 'p11',
    title: 'Blog Post Outline Generator',
    slug: 'blog-post-outline-generator',
    description: 'Struktura artykułu blogowego z SEO',
    content: `Stwórz outline dla artykułu blogowego:

Temat: [TOPIC]
Słowo kluczowe: [MAIN_KEYWORD]
Długość: [WORD_COUNT] słów
Grupa docelowa: [TARGET_AUDIENCE]

Struktura:
1. **Title** (3 warianty, max 60 znaków)
2. **Meta Description** (155 znaków)
3. **Introduction** (150-200 słów)
   - Hook (pierwsze zdanie)
   - Problem statement
   - Preview tego co czytelnik się dowie
4. **Main Content** (H2 headings z opisem)
   - H2: [Temat sekcji]
     - 3-5 kluczowych punktów
     - Przykłady/case studies
   - H2: [Następna sekcja]
     - ...
5. **Conclusion** (100-150 słów)
   - Podsumowanie kluczowych punktów
   - Call-to-action
6. **FAQ Section** (5 pytań)
7. **Related Keywords** (10 LSI keywords)

Ton: [PROFESSIONAL/CASUAL/AUTHORITATIVE]`,
    role: promptRoles[9], // Content Creation
    category: 'Blog Writing',
    tags: ['blog', 'content', 'seo', 'outline'],
    difficulty: 'intermediate',
    useCase: 'Planowanie treści blogowych',
    recommendedTools: ['1', '3'],
    likes: 298,
    views: 4200,
    isPremium: false,
    createdAt: new Date('2025-02-12'),
    updatedAt: new Date()
  },

  // Design & Creative
  {
    id: 'p12',
    title: 'Creative Brief Generator',
    slug: 'creative-brief-generator',
    description: 'Profesjonalny brief dla projektów kreatywnych',
    content: `Stwórz creative brief dla projektu:

Typ projektu: [PROJECT_TYPE - logo/website/campaign/branding]
Klient: [CLIENT_NAME]
Branża: [INDUSTRY]
Budżet: [BUDGET_RANGE]
Timeline: [DEADLINE]

Brief powinien zawierać:

**1. Project Overview**
- Cel projektu
- Problem do rozwiązania
- Success metrics

**2. Target Audience**
- Demographics
- Psychographics
- Pain points
- Motivations

**3. Brand Guidelines**
- Brand personality
- Tone of voice
- Color preferences
- Style references

**4. Project Requirements**
- Deliverables
- Technical specs
- Constraints
- Must-haves vs nice-to-haves

**5. Creative Direction**
- Mood/feeling
- Visual style
- Inspiration references
- What to avoid

**6. Timeline & Milestones**
- Key dates
- Review points
- Final delivery

Format: Gotowy do wysłania klientowi/zespołowi.`,
    role: promptRoles[10], // Design & Creative
    category: 'Creative Brief',
    tags: ['design', 'brief', 'creative', 'project'],
    difficulty: 'intermediate',
    useCase: 'Przygotowanie briefów dla projektów kreatywnych',
    recommendedTools: ['1', '5'],
    likes: 156,
    views: 2100,
    isPremium: false,
    createdAt: new Date('2025-02-15'),
    updatedAt: new Date()
  },

  // Legal & Compliance
  {
    id: 'p13',
    title: 'Privacy Policy Generator',
    slug: 'privacy-policy-generator',
    description: 'Generowanie polityki prywatności',
    content: `Stwórz politykę prywatności dla:

Typ biznesu: [BUSINESS_TYPE]
Lokalizacja: [COUNTRY/REGION]
GDPR compliance: [YES/NO]
COPPA compliance: [YES/NO]

Sekcje do uwzględnienia:

**1. Information We Collect**
- Personal data
- Usage data
- Cookies
- Third-party data

**2. How We Use Information**
- Service provision
- Communication
- Marketing
- Legal compliance

**3. Data Sharing**
- Third parties
- Service providers
- Legal requirements
- Business transfers

**4. Data Security**
- Security measures
- Data retention
- Breach notification

**5. Your Rights**
- Access
- Correction
- Deletion
- Portability
- Objection

**6. Cookies**
- Types of cookies
- Purpose
- Management

**7. Contact Information**
- Data controller
- DPO contact
- Complaints

**DISCLAIMER: To jest szablon. Zawsze konsultuj z prawnikiem.**

Format: Profesjonalny, zgodny z prawem.`,
    role: promptRoles[11], // Legal & Compliance
    category: 'Legal Documents',
    tags: ['legal', 'privacy', 'gdpr', 'compliance'],
    difficulty: 'advanced',
    useCase: 'Tworzenie dokumentów prawnych',
    recommendedTools: ['1'],
    likes: 89,
    views: 1200,
    isPremium: true,
    createdAt: new Date('2025-02-18'),
    updatedAt: new Date()
  },

  // Healthcare & Medical
  {
    id: 'p14',
    title: 'Medical Report Summary',
    slug: 'medical-report-summary',
    description: 'Podsumowanie raportów medycznych',
    content: `Przeanalizuj i podsumuj raport medyczny:

Typ raportu: [REPORT_TYPE - lab/imaging/consultation]
Specjalizacja: [SPECIALTY]
Pacjent: [AGE/GENDER] (bez danych osobowych)

**DISCLAIMER: To narzędzie wspomagające. Zawsze konsultuj z lekarzem.**

Struktura podsumowania:

**1. Executive Summary**
- Główne ustalenia (3-5 punktów)
- Poziom pilności
- Rekomendacje

**2. Key Findings**
- Wyniki badań
- Odchylenia od normy
- Interpretacja

**3. Clinical Assessment**
- Diagnoza różnicowa
- Czynniki ryzyka
- Prognoza

**4. Recommendations**
- Dalsze badania
- Leczenie
- Kontrola
- Lifestyle changes

**5. Follow-up**
- Kiedy wrócić
- Na co zwrócić uwagę
- Alarmujące objawy

**6. Patient Education**
- Wyjaśnienie w prostych słowach
- FAQ
- Resources

Format: Profesjonalny, ale zrozumiały dla pacjenta.`,
    role: promptRoles[12], // Healthcare & Medical
    category: 'Medical Documentation',
    tags: ['medical', 'healthcare', 'reports', 'diagnosis'],
    difficulty: 'advanced',
    useCase: 'Analiza dokumentacji medycznej',
    recommendedTools: ['1'],
    likes: 67,
    views: 890,
    isPremium: true,
    createdAt: new Date('2025-02-20'),
    updatedAt: new Date()
  },

  // Real Estate
  {
    id: 'p15',
    title: 'Property Description Generator',
    slug: 'property-description-generator',
    description: 'Atrakcyjne opisy nieruchomości',
    content: `Napisz opis nieruchomości dla:

Typ: [PROPERTY_TYPE - apartment/house/commercial]
Lokalizacja: [LOCATION]
Powierzchnia: [SIZE] m²
Cena: [PRICE]
Stan: [CONDITION]

Opis powinien zawierać:

**1. Headline** (przyciągający uwagę)
**2. Location Benefits** (3-4 zalety lokalizacji)
**3. Property Features** (5-7 kluczowych cech)
**4. Interior Details** (pokoje, wyposażenie)
**5. Exterior/Common Areas** (balkon, ogród, parking)
**6. Investment Potential** (jeśli dotyczy)
**7. Call to Action** (zachęta do kontaktu)

Style:
- Emocjonalny ale profesjonalny
- Konkretne liczby i dane
- Unikaj cliché ("idealne miejsce")
- Używaj sensorycznych opisów
- Podkreśl unikalne cechy

Max 300 słów. SEO-friendly.`,
    role: promptRoles[13], // Real Estate
    category: 'Property Marketing',
    tags: ['real estate', 'property', 'marketing', 'descriptions'],
    difficulty: 'beginner',
    useCase: 'Tworzenie opisów nieruchomości',
    recommendedTools: ['1', '7'],
    likes: 234,
    views: 3200,
    isPremium: false,
    createdAt: new Date('2025-02-22'),
    updatedAt: new Date()
  },

  // eCommerce & Retail
  {
    id: 'p16',
    title: 'Product Review Generator',
    slug: 'product-review-generator',
    description: 'Automatyczne generowanie recenzji produktów',
    content: `Napisz recenzję produktu:

Produkt: [PRODUCT_NAME]
Kategoria: [CATEGORY]
Cena: [PRICE]
Główne cechy: [KEY_FEATURES]
Grupa docelowa: [TARGET_AUDIENCE]

Struktura recenzji:

**1. Introduction** (50 słów)
- Co to za produkt
- Dla kogo jest przeznaczony
- Główna korzyść

**2. Key Features** (100 słów)
- 3-5 najważniejszych cech
- Jak działają
- Korzyści dla użytkownika

**3. Pros & Cons** (80 słów)
- Zalety (3-4 punkty)
- Wady (2-3 punkty)
- Obiektywna ocena

**4. Performance** (60 słów)
- Jak sprawdza się w praktyce
- Porównanie z konkurencją
- Wartość za pieniądze

**5. Verdict** (40 słów)
- Rekomendacja
- Kto powinien kupić
- Alternatywy

**6. Rating** (1-5 gwiazdek z uzasadnieniem)

Ton: Obiektywny, pomocny, autentyczny.`,
    role: promptRoles[14], // eCommerce & Retail
    category: 'Product Reviews',
    tags: ['ecommerce', 'reviews', 'products', 'retail'],
    difficulty: 'intermediate',
    useCase: 'Tworzenie recenzji produktów',
    recommendedTools: ['1', '7'],
    likes: 345,
    views: 4800,
    isPremium: false,
    createdAt: new Date('2025-02-25'),
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

