import type { Tool, Category } from '@/types'

export const mockCategories: Category[] = [
  { id: '1', name: 'Generowanie tekstu', slug: 'text-generation', icon: '✍️', description: 'Narzędzia do tworzenia treści tekstowych' },
  { id: '2', name: 'Generowanie obrazów', slug: 'image-generation', icon: '🎨', description: 'AI do tworzenia grafiki i obrazów' },
  { id: '3', name: 'Generowanie wideo', slug: 'video-generation', icon: '🎬', description: 'Narzędzia do produkcji wideo' },
  { id: '4', name: 'SEO & Marketing', slug: 'seo-marketing', icon: '📈', description: 'Optymalizacja i marketing' },
  { id: '5', name: 'Asystenci AI', slug: 'ai-assistants', icon: '🤖', description: 'Chatboty i asystenci' },
  { id: '6', name: 'Analiza danych', slug: 'data-analysis', icon: '📊', description: 'Analityka i insights' },
  { id: '7', name: 'Audio & Muzyka', slug: 'audio-music', icon: '🎵', description: 'Generowanie i edycja audio' },
  { id: '8', name: 'Produktywność', slug: 'productivity', icon: '⚡', description: 'Narzędzia do efektywnej pracy' },
  { id: '9', name: 'Prezentacje', slug: 'presentations', icon: '📊', description: 'Tworzenie prezentacji i slajdów' },
  { id: '10', name: 'Kod i Development', slug: 'code-development', icon: '💻', description: 'Narzędzia dla programistów' },
  { id: '11', name: 'Design & UI/UX', slug: 'design-ui-ux', icon: '🎨', description: 'Projektowanie interfejsów' },
  { id: '12', name: 'Email & Komunikacja', slug: 'email-communication', icon: '✉️', description: 'Email marketing i komunikacja' },
]

export const mockTools: Tool[] = [
  {
    id: '1',
    name: 'ChatGPT',
    domain: 'chat.openai.com',
    slug: 'chatgpt',
    websiteUrl: 'https://chat.openai.com',
    documentationUrl: 'https://platform.openai.com/docs',
    currentPromotion: {
      title: '🎉 Specjalna oferta dla nowych użytkowników',
      description: 'Pierwszy miesiąc ChatGPT Plus w promocyjnej cenie. Wypróbuj GPT-4 i zaawansowane funkcje już dziś!',
      discount: '-20%',
      validUntil: new Date('2025-12-31'),
      code: 'BESTAI20'
    },
    shortDescription: 'Zaawansowany chatbot AI od OpenAI do konwersacji, pisania kodu i rozwiązywania problemów.',
    longDescription: 'ChatGPT to przełomowy model językowy stworzony przez OpenAI, który może pomóc w szerokim zakresie zadań - od pisania tekstów, przez programowanie, po analizę danych. Model GPT-4 oferuje niesamowitą jakość odpowiedzi i rozumienie kontekstu.',
    logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=100&h=100&fit=crop',
    features: [
      'Naturalna konwersacja w 50+ językach',
      'Generowanie i debugowanie kodu',
      'Analiza i podsumowania dokumentów',
      'Rozwiązywanie matematyki i logiki',
      'Tworzenie treści kreatywnych',
      'Integracje API dla developerów'
    ],
    pricingModels: ['freemium', 'subscription'],
    pricingDetails: [
      {
        name: 'Free',
        price: 0,
        currency: 'USD',
        period: 'month',
        features: ['GPT-3.5', 'Podstawowe funkcje', 'Standardowa szybkość']
      },
      {
        name: 'ChatGPT Plus',
        price: 20,
        currency: 'USD',
        period: 'month',
        popular: true,
        features: ['GPT-4', 'Szybsze odpowiedzi', 'Dostęp w godzinach szczytu', 'Pierwsze nowe funkcje']
      },
      {
        name: 'Team',
        price: 25,
        currency: 'USD',
        period: 'month',
        features: ['Wszystko z Plus', 'Workspace dla zespołu', 'Admin controls', 'Wyższe limity']
      }
    ],
    categories: [mockCategories[0], mockCategories[4]],
    tags: ['chatbot', 'GPT-4', 'konwersacja', 'pisanie', 'AI'],
    integrations: ['API', 'Slack', 'Microsoft Teams', 'Zapier'],
    affiliateProgram: {
      id: 'aff1',
      toolId: '1',
      commissionType: 'recurring',
      commissionValue: 20,
      cookieWindowDays: 30,
      network: 'Impact',
      affiliateLink: 'https://openai.com/chatgpt?ref=partner',
      estimatedEpc: 15.50,
      lastChecked: new Date()
    },
    verifiedByEditor: true,
    screenshots: [],
    foundedYear: 2022,
    teamSize: '500+',
    pros: ['Bardzo dobra jakość odpowiedzi', 'Szybkie', 'Intuicyjny interfejs'],
    cons: ['Płatny dostęp do GPT-4', 'Czasami outdated informacje', 'Limity w wersji darmowej'],
    bestFor: ['Pisanie treści', 'Pomoc w kodowaniu', 'Research i analiza'],
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date()
  },
  {
    id: '2',
    name: 'Midjourney',
    domain: 'midjourney.com',
    slug: 'midjourney',
    websiteUrl: 'https://www.midjourney.com',
    shortDescription: 'Potężne narzędzie AI do generowania unikalnych obrazów z opisów tekstowych.',
    longDescription: 'Midjourney to jedno z najlepszych narzędzi do generowania obrazów AI. Tworzy niesamowite, artystyczne wizualizacje na podstawie prostych opisów tekstowych. Idealny dla artystów, designerów i twórców contentu.',
    logo: 'https://images.unsplash.com/photo-1686191128892-c0557a5fc8d7?w=100&h=100&fit=crop',
    features: [
      'Generowanie obrazów z tekstu',
      'Różne style artystyczne (realistic, anime, oil painting)',
      'Wysoka rozdzielczość do 4K',
      'Edycja i warianty obrazów',
      'Discord integration',
      'Commercial use w pakietach płatnych'
    ],
    pricingModels: ['subscription'],
    pricingDetails: [
      {
        name: 'Basic',
        price: 10,
        currency: 'USD',
        period: 'month',
        features: ['200 generacji/miesiąc', 'Podstawowa jakość', 'Community gallery']
      },
      {
        name: 'Standard',
        price: 30,
        currency: 'USD',
        period: 'month',
        popular: true,
        features: ['15h GPU/miesiąc', 'Fast mode', 'Private mode (+$20)', 'Commercial use']
      },
      {
        name: 'Pro',
        price: 60,
        currency: 'USD',
        period: 'month',
        features: ['30h GPU/miesiąc', 'Stealth mode', 'Max concurrent jobs', 'Commercial use']
      }
    ],
    categories: [mockCategories[1], mockCategories[10]],
    tags: ['grafika', 'AI art', 'generowanie', 'kreatywność', 'design'],
    integrations: ['Discord', 'API (beta)'],
    affiliateProgram: {
      id: 'aff2',
      toolId: '2',
      commissionType: 'recurring',
      commissionValue: 25,
      cookieWindowDays: 45,
      network: 'Direct',
      affiliateLink: 'https://midjourney.com?ref=partner',
      estimatedEpc: 22.30,
      lastChecked: new Date()
    },
    verifiedByEditor: true,
    screenshots: [],
    foundedYear: 2022,
    teamSize: '50-100',
    pros: ['Najwyższa jakość obrazów', 'Unikalne style artystyczne', 'Aktywna społeczność'],
    cons: ['Tylko przez Discord', 'Brak wersji darmowej', 'Limity GPU'],
    bestFor: ['Grafika komercyjna', 'Concept art', 'Marketing visuals'],
    createdAt: new Date('2023-02-01'),
    updatedAt: new Date()
  },
  {
    id: '3',
    name: 'Jasper AI',
    domain: 'jasper.ai',
    slug: 'jasper-ai',
    websiteUrl: 'https://www.jasper.ai',
    documentationUrl: 'https://help.jasper.ai',
    currentPromotion: {
      title: '💎 Black Friday 2025',
      description: 'Odbierz ekskluzywną zniżkę na wszystkie pakiety Jasper AI. Oferta limitowana!',
      discount: '-50%',
      validUntil: new Date('2025-11-30'),
      code: 'BLACKFRIDAY50'
    },
    shortDescription: 'AI copywriter do tworzenia treści marketingowych, blogów i mediów społecznościowych.',
    longDescription: 'Jasper to zaawansowane narzędzie AI do copywritingu. Pomaga tworzyć angażujące treści marketingowe w kilka sekund. Zawiera 50+ szablonów, integrację z SEO tools i wsparcie dla zespołów.',
    logo: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=100&h=100&fit=crop',
    features: [
      '50+ szablonów content (ads, blog posts, emails)',
      'SEO optimization z Surfer SEO',
      'Brand voice training',
      'Współpraca zespołowa',
      'Wsparcie 25+ języków',
      'Plagiarism checker'
    ],
    pricingModels: ['subscription'],
    pricingDetails: [
      {
        name: 'Creator',
        price: 39,
        currency: 'USD',
        period: 'month',
        features: ['1 user', '50,000 słów/miesiąc', 'SEO mode', '50+ szablonów']
      },
      {
        name: 'Teams',
        price: 99,
        currency: 'USD',
        period: 'month',
        popular: true,
        features: ['3 users', '150,000 słów/miesiąc', 'Brand voice', 'Priority support', 'Campaigns']
      },
      {
        name: 'Business',
        price: 499,
        currency: 'USD',
        period: 'month',
        features: ['Custom users', 'Unlimited words', 'Dedicated account manager', 'API access', 'Custom AI training']
      }
    ],
    categories: [mockCategories[0], mockCategories[3]],
    tags: ['copywriting', 'marketing', 'SEO', 'blog', 'content'],
    integrations: ['Surfer SEO', 'Grammarly', 'Chrome Extension', 'WordPress', 'Google Docs'],
    affiliateProgram: {
      id: 'aff3',
      toolId: '3',
      commissionType: 'recurring',
      commissionValue: 30,
      cookieWindowDays: 60,
      network: 'Impact',
      affiliateLink: 'https://jasper.ai?ref=partner',
      estimatedEpc: 45.80,
      lastChecked: new Date()
    },
    verifiedByEditor: true,
    screenshots: [],
    foundedYear: 2021,
    teamSize: '100-200',
    pros: ['Świetne szablony marketingowe', 'Integracja z SEO tools', 'Brand voice'],
    cons: ['Drogie', 'Limity słów', 'Czasami generyczne treści'],
    bestFor: ['Marketing teams', 'Agencje', 'Bloggerzy'],
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date()
  },
  {
    id: '4',
    name: 'Runway ML',
    domain: 'runwayml.com',
    slug: 'runway-ml',
    websiteUrl: 'https://runwayml.com',
    shortDescription: 'Platforma do tworzenia i edycji wideo z wykorzystaniem AI.',
    longDescription: 'Runway ML to kompleksowa platforma do pracy z wideo AI - od generowania po zaawansowaną edycję. Oferuje ponad 30 narzędzi AI w jednym miejscu.',
    logo: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=100&h=100&fit=crop',
    features: [
      'Text-to-video generation',
      'Video editing AI (remove objects, backgrounds)',
      'Green screen AI',
      'Motion tracking',
      '30+ AI Magic Tools',
      'Eksport do 4K'
    ],
    pricingModels: ['freemium', 'subscription'],
    pricingDetails: [
      {
        name: 'Free',
        price: 0,
        currency: 'USD',
        period: 'month',
        features: ['125 credits/miesiąc', 'Podstawowe narzędzia', 'Watermark']
      },
      {
        name: 'Standard',
        price: 12,
        currency: 'USD',
        period: 'month',
        popular: true,
        features: ['625 credits/miesiąc', 'Wszystkie narzędzia', 'Bez watermark', 'Edytor wideo']
      },
      {
        name: 'Pro',
        price: 28,
        currency: 'USD',
        period: 'month',
        features: ['2250 credits/miesiąc', 'Priority generation', '4K export', 'Unlimited assets']
      }
    ],
    categories: [mockCategories[2]],
    tags: ['wideo', 'edycja', 'generowanie', 'effects', 'AI tools'],
    integrations: ['Adobe Premiere', 'Final Cut Pro', 'API'],
    affiliateProgram: {
      id: 'aff4',
      toolId: '4',
      commissionType: 'recurring',
      commissionValue: 20,
      cookieWindowDays: 30,
      network: 'PartnerStack',
      affiliateLink: 'https://runwayml.com?ref=partner',
      estimatedEpc: 28.40,
      lastChecked: new Date()
    },
    verifiedByEditor: true,
    screenshots: [],
    foundedYear: 2018,
    teamSize: '50-100',
    pros: ['30+ narzędzi w jednym', 'Łatwy w użyciu', 'Świetna jakość'],
    cons: ['System creditów', 'Wolne generowanie w free', 'Drogie dla power users'],
    bestFor: ['Video creators', 'Filmowcy', 'Content creators'],
    createdAt: new Date('2023-03-01'),
    updatedAt: new Date()
  },
  {
    id: '5',
    name: 'Notion AI',
    domain: 'notion.so',
    slug: 'notion-ai',
    websiteUrl: 'https://www.notion.so/product/ai',
    shortDescription: 'Asystent AI zintegrowany z Notion do pisania, edycji i organizacji pracy.',
    longDescription: 'Notion AI to inteligentny asystent wbudowany w popularne narzędzie do zarządzania wiedzą i projektami. Pomaga w pisaniu, edycji, tłumaczeniach i organizacji informacji.',
    logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=100&h=100&fit=crop',
    features: [
      'Pisanie i edycja tekstów',
      'Podsumowania dokumentów',
      'Tłumaczenia (10+ języków)',
      'Brainstorming ideas',
      'Integracja z całym Notion workspace',
      'Action items extraction'
    ],
    pricingModels: ['freemium', 'subscription'],
    pricingDetails: [
      {
        name: 'Notion Free',
        price: 0,
        currency: 'USD',
        period: 'month',
        features: ['Notion workspace', 'Bez AI']
      },
      {
        name: 'Notion AI',
        price: 10,
        currency: 'USD',
        period: 'month',
        popular: true,
        features: ['Unlimited AI', 'Wszystkie funkcje AI', 'Integracja z workspace']
      }
    ],
    categories: [mockCategories[7], mockCategories[0]],
    tags: ['produktywność', 'notatki', 'organizacja', 'pisanie', 'workspace'],
    integrations: ['Notion', 'Slack', 'Google Drive', 'Figma'],
    verifiedByEditor: true,
    screenshots: [],
    foundedYear: 2023,
    teamSize: '200+',
    pros: ['Świetna integracja z Notion', 'Niedroga cena', 'Unlimited usage'],
    cons: ['Wymaga Notion workspace', 'Mniej funkcji niż standalone tools'],
    bestFor: ['Użytkownicy Notion', 'Teams', 'Knowledge management'],
    createdAt: new Date('2023-02-20'),
    updatedAt: new Date()
  },
  {
    id: '6',
    name: 'Synthesia',
    domain: 'synthesia.io',
    slug: 'synthesia',
    websiteUrl: 'https://www.synthesia.io',
    documentationUrl: 'https://help.synthesia.io',
    currentPromotion: {
      title: '🎬 Darmowy trial + bonus',
      description: 'Wypróbuj Synthesia za darmo i otrzymaj 10 dodatkowych minut wideo przy pierwszym zakupie!',
      discount: 'Free Trial',
      validUntil: new Date('2025-10-31')
    },
    shortDescription: 'Twórz profesjonalne wideo z awatarami AI bez kamery i ekipy produkcyjnej.',
    longDescription: 'Synthesia pozwala tworzyć wysokiej jakości wideo z realistycznymi awatarami AI w ponad 120 językach. Idealne do szkoleń, prezentacji i contentu marketingowego.',
    logo: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=100&h=100&fit=crop',
    features: [
      '140+ realistycznych awatarów AI',
      '120+ języków i głosów',
      'Custom avatars (własna twarz)',
      '60+ szablonów wideo',
      'Screen recording',
      'Brand kit (logo, kolory, fonty)'
    ],
    pricingModels: ['subscription'],
    pricingDetails: [
      {
        name: 'Starter',
        price: 22,
        currency: 'USD',
        period: 'month',
        features: ['120 minut wideo/rok', '70+ awatarów', '120+ języków', 'Szablony']
      },
      {
        name: 'Creator',
        price: 67,
        currency: 'USD',
        period: 'month',
        popular: true,
        features: ['360 minut wideo/rok', '140+ awatarów', 'Custom avatar (1)', 'Priority support', 'Brand kit']
      },
      {
        name: 'Enterprise',
        price: 0,
        currency: 'USD',
        period: 'month',
        features: ['Custom minutes', 'Unlimited custom avatars', 'SSO', 'Dedicated manager', 'API access']
      }
    ],
    categories: [mockCategories[2], mockCategories[8]],
    tags: ['wideo', 'awatary', 'prezentacje', 'szkolenia', 'AI video'],
    integrations: ['PowerPoint', 'API', 'Zapier'],
    affiliateProgram: {
      id: 'aff6',
      toolId: '6',
      commissionType: 'recurring',
      commissionValue: 25,
      cookieWindowDays: 45,
      network: 'Impact',
      affiliateLink: 'https://synthesia.io?ref=partner',
      estimatedEpc: 38.90,
      lastChecked: new Date()
    },
    verifiedByEditor: true,
    screenshots: [],
    foundedYear: 2017,
    teamSize: '100-200',
    pros: ['Bardzo realistyczne awatary', '120+ języków', 'Łatwe w użyciu'],
    cons: ['Drogie', 'Limity minut', 'Custom avatar tylko w wyższych pakietach'],
    bestFor: ['Corporate training', 'Marketing videos', 'E-learning'],
    createdAt: new Date('2023-01-10'),
    updatedAt: new Date()
  },
  {
    id: '7',
    name: 'Copy.ai',
    domain: 'copy.ai',
    slug: 'copy-ai',
    websiteUrl: 'https://www.copy.ai',
    shortDescription: 'Generator treści AI dla marketerów - reklamy, posty social media, opisy produktów.',
    longDescription: 'Copy.ai to narzędzie do szybkiego generowania treści marketingowych. Oferuje 90+ narzędzi do różnych typów contentu - od postów na social media po opisy produktów.',
    logo: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=100&h=100&fit=crop',
    features: [
      '90+ narzędzi do copywritingu',
      'Social media posts generator',
      'Opisy produktów e-commerce',
      'Email marketing templates',
      'Blog ideas & outlines',
      'Wsparcie 25+ języków'
    ],
    pricingModels: ['freemium', 'subscription'],
    pricingDetails: [
      {
        name: 'Free',
        price: 0,
        currency: 'USD',
        period: 'month',
        features: ['2,000 słów/miesiąc', '90+ narzędzi', '1 user']
      },
      {
        name: 'Pro',
        price: 36,
        currency: 'USD',
        period: 'month',
        popular: true,
        features: ['Unlimited words', 'Unlimited projects', '5 users', 'Priority support']
      },
      {
        name: 'Enterprise',
        price: 0,
        currency: 'USD',
        period: 'month',
        features: ['Custom words', 'Unlimited users', 'Custom workflows', 'Dedicated manager']
      }
    ],
    categories: [mockCategories[0], mockCategories[3]],
    tags: ['copywriting', 'marketing', 'social media', 'e-commerce'],
    integrations: ['Chrome Extension', 'WordPress', 'Shopify'],
    affiliateProgram: {
      id: 'aff7',
      toolId: '7',
      commissionType: 'recurring',
      commissionValue: 30,
      cookieWindowDays: 30,
      network: 'Impact',
      affiliateLink: 'https://copy.ai?ref=partner',
      estimatedEpc: 18.20,
      lastChecked: new Date()
    },
    verifiedByEditor: true,
    screenshots: [],
    foundedYear: 2020,
    teamSize: '50-100',
    pros: ['90+ narzędzi', 'Darmowa wersja', 'Łatwe w użyciu'],
    cons: ['Jakość słabsza niż Jasper', 'Limity w free'],
    bestFor: ['Small businesses', 'Solopreneurs', 'Social media managers'],
    createdAt: new Date('2023-01-20'),
    updatedAt: new Date()
  },
  {
    id: '8',
    name: 'GitHub Copilot',
    domain: 'github.com/features/copilot',
    slug: 'github-copilot',
    websiteUrl: 'https://github.com/features/copilot',
    documentationUrl: 'https://docs.github.com/en/copilot',
    shortDescription: 'AI pair programmer od GitHub i OpenAI - autocomplete kodu w czasie rzeczywistym.',
    longDescription: 'GitHub Copilot to asystent AI dla programistów, który sugeruje cały kod i funkcje w czasie rzeczywistym. Wytrenowany na miliardach linii kodu open source.',
    logo: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=100&h=100&fit=crop',
    features: [
      'Code autocomplete w czasie rzeczywistym',
      'Wsparcie dla 10+ języków programowania',
      'Test generation',
      'Code explanations',
      'Bug fixes suggestions',
      'Integracja z VS Code, JetBrains, Neovim'
    ],
    pricingModels: ['subscription'],
    pricingDetails: [
      {
        name: 'Individual',
        price: 10,
        currency: 'USD',
        period: 'month',
        popular: true,
        features: ['Code suggestions', 'Chat interface', 'CLI support', 'Mobile support']
      },
      {
        name: 'Business',
        price: 19,
        currency: 'USD',
        period: 'month',
        features: ['Wszystko z Individual', 'Organization license management', 'Policy management', 'IP indemnity']
      },
      {
        name: 'Enterprise',
        price: 39,
        currency: 'USD',
        period: 'month',
        features: ['Wszystko z Business', 'Fine-tuned models', 'Enhanced security', 'Audit logs']
      }
    ],
    categories: [mockCategories[9], mockCategories[7]],
    tags: ['coding', 'programming', 'developer tools', 'AI assistant'],
    integrations: ['VS Code', 'JetBrains', 'Neovim', 'Visual Studio'],
    verifiedByEditor: true,
    screenshots: [],
    foundedYear: 2021,
    teamSize: '1000+',
    pros: ['Świetna jakość sugestii', 'Szybkie', 'Wiele języków'],
    cons: ['Czasami błędne sugestie', 'Wymaga internetu', 'Płatne'],
    bestFor: ['Programiści', 'Development teams', 'Code learners'],
    createdAt: new Date('2023-02-15'),
    updatedAt: new Date()
  },
  {
    id: '9',
    name: 'DALL-E 3',
    domain: 'openai.com/dall-e-3',
    slug: 'dall-e-3',
    websiteUrl: 'https://openai.com/dall-e-3',
    shortDescription: 'Generator obrazów AI od OpenAI - realistyczne i kreatywne wizualizacje z tekstu.',
    longDescription: 'DALL-E 3 to najnowsza wersja generatora obrazów od OpenAI. Tworzy niezwykle szczegółowe i dokładne obrazy na podstawie opisów tekstowych. Zintegrowany z ChatGPT Plus.',
    logo: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=100&h=100&fit=crop',
    features: [
      'Generowanie obrazów z tekstu',
      'Bardzo dokładne rozumienie promptów',
      'Różne rozmiary (square, landscape, portrait)',
      'Bezpieczne guardrails',
      'Integracja z ChatGPT',
      'Commercial use allowed'
    ],
    pricingModels: ['subscription'],
    pricingDetails: [
      {
        name: 'ChatGPT Plus',
        price: 20,
        currency: 'USD',
        period: 'month',
        popular: true,
        features: ['DALL-E 3 access', 'GPT-4', '~50 obrazów/day', 'ChatGPT interface']
      },
      {
        name: 'API',
        price: 0.04,
        currency: 'USD',
        period: 'one-time',
        features: ['Pay per image', 'HD quality', 'Batch processing', 'Developer access']
      }
    ],
    categories: [mockCategories[1]],
    tags: ['image generation', 'AI art', 'OpenAI', 'text-to-image'],
    integrations: ['ChatGPT', 'OpenAI API'],
    verifiedByEditor: true,
    screenshots: [],
    foundedYear: 2023,
    teamSize: '500+',
    pros: ['Świetne rozumienie promptów', 'Integracja z ChatGPT', 'Commercial use'],
    cons: ['Tylko przez ChatGPT Plus', 'Limity dzienne', 'Drogie w API'],
    bestFor: ['Marketingowcy', 'Designerzy', 'Content creators'],
    createdAt: new Date('2023-10-01'),
    updatedAt: new Date()
  },
  {
    id: '10',
    name: 'Grammarly',
    domain: 'grammarly.com',
    slug: 'grammarly',
    websiteUrl: 'https://www.grammarly.com',
    shortDescription: 'AI writing assistant - sprawdzanie gramatyki, stylu i tonu w czasie rzeczywistym.',
    longDescription: 'Grammarly to zaawansowany asystent pisania AI, który pomaga w poprawie gramatyki, stylu, clarity i tonu. Działa wszędzie gdzie piszesz - email, dokumenty, social media.',
    logo: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=100&h=100&fit=crop',
    features: [
      'Sprawdzanie gramatyki i ortografii',
      'Tone detector',
      'Clarity suggestions',
      'Plagiarism checker (Premium)',
      'Działa w przeglądarce i aplikacjach',
      'Wsparcie dla business writing'
    ],
    pricingModels: ['freemium', 'subscription'],
    pricingDetails: [
      {
        name: 'Free',
        price: 0,
        currency: 'USD',
        period: 'month',
        features: ['Podstawowa gramatyka', 'Spelling', 'Punctuation']
      },
      {
        name: 'Premium',
        price: 12,
        currency: 'USD',
        period: 'month',
        popular: true,
        features: ['Wszystko z Free', 'Advanced suggestions', 'Tone detector', 'Plagiarism checker', 'Vocabulary']
      },
      {
        name: 'Business',
        price: 15,
        currency: 'USD',
        period: 'month',
        features: ['Wszystko z Premium', 'Style guide', 'Team management', 'Analytics', 'Priority support']
      }
    ],
    categories: [mockCategories[0], mockCategories[7]],
    tags: ['writing', 'grammar', 'editing', 'proofreading'],
    integrations: ['Chrome', 'Word', 'Google Docs', 'Outlook', 'Slack'],
    affiliateProgram: {
      id: 'aff10',
      toolId: '10',
      commissionType: 'CPA',
      commissionValue: 20,
      cookieWindowDays: 90,
      network: 'Impact',
      affiliateLink: 'https://grammarly.com?ref=partner',
      estimatedEpc: 12.50,
      lastChecked: new Date()
    },
    verifiedByEditor: true,
    screenshots: [],
    foundedYear: 2009,
    teamSize: '500+',
    pros: ['Działa wszędzie', 'Bardzo dokładne', 'Darmowa wersja OK'],
    cons: ['Premium drogie', 'Czasami zbyt agresywne sugestie'],
    bestFor: ['Writers', 'Students', 'Business professionals'],
    createdAt: new Date('2023-01-05'),
    updatedAt: new Date()
  },
  {
    id: '11',
    name: 'Canva AI',
    domain: 'canva.com',
    slug: 'canva-ai',
    websiteUrl: 'https://www.canva.com/ai-image-generator/',
    shortDescription: 'Design platform z AI - generowanie grafik, logo, prezentacji i social media posts.',
    longDescription: 'Canva AI to platforma designerska z wbudowanymi narzędziami AI do generowania obrazów, usuwania tła, Magic Write i Magic Edit. Idealna dla non-designerów.',
    logo: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=100&h=100&fit=crop',
    features: [
      'Text-to-image AI generator',
      'Magic Eraser (usuwanie obiektów)',
      'Background remover',
      'Magic Write (tekst AI)',
      '100M+ szablonów',
      'Brand kit'
    ],
    pricingModels: ['freemium', 'subscription'],
    pricingDetails: [
      {
        name: 'Free',
        price: 0,
        currency: 'USD',
        period: 'month',
        features: ['250K+ darmowych szablonów', 'Podstawowe AI (limited)', '5GB storage']
      },
      {
        name: 'Pro',
        price: 12.99,
        currency: 'USD',
        period: 'month',
        popular: true,
        features: ['100M+ szablonów', 'Unlimited AI tools', 'Background remover', '1TB storage', 'Brand kit']
      },
      {
        name: 'Teams',
        price: 29.99,
        currency: 'USD',
        period: 'month',
        features: ['Wszystko z Pro', '5 users included', 'Team collaboration', 'Admin controls']
      }
    ],
    categories: [mockCategories[10], mockCategories[1]],
    tags: ['design', 'graphics', 'AI images', 'templates', 'social media'],
    integrations: ['Google Drive', 'Dropbox', 'Instagram', 'Facebook'],
    affiliateProgram: {
      id: 'aff11',
      toolId: '11',
      commissionType: 'CPA',
      commissionValue: 36,
      cookieWindowDays: 30,
      network: 'Impact',
      affiliateLink: 'https://canva.com?ref=partner',
      estimatedEpc: 8.90,
      lastChecked: new Date()
    },
    verifiedByEditor: true,
    screenshots: [],
    foundedYear: 2013,
    teamSize: '1000+',
    pros: ['Łatwe w użyciu', 'Mnóstwo szablonów', 'Darmowa wersja OK'],
    cons: ['AI słabsze niż Midjourney', 'Limity w free'],
    bestFor: ['Small businesses', 'Marketers', 'Non-designers'],
    createdAt: new Date('2023-03-10'),
    updatedAt: new Date()
  },
  {
    id: '12',
    name: 'Descript',
    domain: 'descript.com',
    slug: 'descript',
    websiteUrl: 'https://www.descript.com',
    shortDescription: 'Edytor wideo i audio AI - edytuj wideo jak dokument tekstowy.',
    longDescription: 'Descript to rewolucyjny edytor wideo i audio, który pozwala edytować multimedia jak dokument tekstowy. Usuń "ummm", klonuj swój głos, generuj napisy automatycznie.',
    logo: 'https://images.unsplash.com/photo-1590602846989-e99596d2a6ee?w=100&h=100&fit=crop',
    features: [
      'Edycja wideo przez transkrypcję',
      'Studio Sound (AI audio enhancement)',
      'Filler word removal',
      'Voice cloning (Overdub)',
      'Auto-captions & subtitles',
      'Screen recording'
    ],
    pricingModels: ['freemium', 'subscription'],
    pricingDetails: [
      {
        name: 'Free',
        price: 0,
        currency: 'USD',
        period: 'month',
        features: ['1 video/month', 'Watermark', 'Transkrypcja', 'Screen recording']
      },
      {
        name: 'Creator',
        price: 12,
        currency: 'USD',
        period: 'month',
        popular: true,
        features: ['10 hours transkrypcji/month', 'No watermark', 'Studio Sound', '1 Overdub voice']
      },
      {
        name: 'Pro',
        price: 24,
        currency: 'USD',
        period: 'month',
        features: ['30 hours transkrypcji/month', 'Unlimited Overdub', '4K export', 'API access']
      }
    ],
    categories: [mockCategories[2], mockCategories[6]],
    tags: ['video editing', 'audio editing', 'transcription', 'podcasting'],
    integrations: ['Zoom', 'Google Drive', 'Dropbox', 'YouTube'],
    affiliateProgram: {
      id: 'aff12',
      toolId: '12',
      commissionType: 'recurring',
      commissionValue: 25,
      cookieWindowDays: 30,
      network: 'Impact',
      affiliateLink: 'https://descript.com?ref=partner',
      estimatedEpc: 16.70,
      lastChecked: new Date()
    },
    verifiedByEditor: true,
    screenshots: [],
    foundedYear: 2017,
    teamSize: '100-200',
    pros: ['Innowacyjny interface', 'Voice cloning', 'All-in-one'],
    cons: ['Learning curve', 'Limity w niższych pakietach'],
    bestFor: ['Podcasters', 'Video creators', 'Teams'],
    createdAt: new Date('2023-02-25'),
    updatedAt: new Date()
  }
]

export function getToolsByCategory(categorySlug: string): Tool[] {
  return mockTools.filter(tool => 
    tool.categories.some(cat => cat.slug === categorySlug)
  )
}

export function getFeaturedTools(): Tool[] {
  return mockTools.filter(tool => tool.verifiedByEditor).slice(0, 4)
}

export function getNewTools(): Tool[] {
  return [...mockTools]
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, 6)
}

export function getHighestEpcTools(): Tool[] {
  return [...mockTools]
    .filter(tool => tool.affiliateProgram)
    .sort((a, b) => 
      (b.affiliateProgram?.estimatedEpc || 0) - (a.affiliateProgram?.estimatedEpc || 0)
    )
    .slice(0, 6)
}
