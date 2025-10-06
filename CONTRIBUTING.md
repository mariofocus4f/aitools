# Contributing to BestAITools

Dziękujemy za zainteresowanie projektem! 🎉

## Development Setup

### Prerequisites

- Node.js 18+
- npm lub yarn
- Git

### Getting Started

1. Fork i clone repository:
```bash
git clone https://github.com/your-username/bestaitools.git
cd bestaitools
```

2. Zainstaluj zależności:
```bash
npm install
```

3. Uruchom dev server:
```bash
npm run dev
```

4. Otwórz http://localhost:3000

## Project Structure

```
aitools/
├── app/                    # Next.js App Router (pages & layouts)
├── components/             # React components
├── types/                  # TypeScript type definitions
├── lib/                    # Utilities & helpers
├── prisma/                 # Database schema
└── public/                 # Static assets
```

## Code Style

### TypeScript

- Używamy strict mode
- Zawsze definiuj typy dla props i funkcji
- Unikaj `any`, preferuj `unknown`

### React Components

```typescript
// ✅ Good
interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

export function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return <button className={`btn-${variant}`} onClick={onClick}>{label}</button>
}

// ❌ Bad
export function Button(props: any) {
  return <button onClick={props.onClick}>{props.label}</button>
}
```

### CSS/Tailwind

- Używaj design tokens z tailwind.config.js
- Preferuj utility classes nad custom CSS
- Używaj komponentów z globals.css (btn-primary, glass-card, etc.)

```tsx
// ✅ Good
<button className="btn-primary">Submit</button>

// ❌ Bad
<button style={{ background: '#1FB89A', padding: '10px' }}>Submit</button>
```

## Git Workflow

### Branch Naming

- `feature/nazwa-funkcji` - nowe funkcje
- `fix/opis-buga` - poprawki błędów
- `refactor/co-refaktorujesz` - refactoring
- `docs/co-dokumentujesz` - dokumentacja

### Commit Messages

Używamy [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add search autocomplete
fix: resolve navbar z-index issue
refactor: extract ToolCard logic
docs: update README with API docs
style: format code with prettier
test: add unit tests for SearchInput
```

### Pull Request Process

1. Stwórz branch z `main`
2. Implementuj zmiany
3. Napisz/zaktualizuj testy
4. Upewnij się że build działa: `npm run build`
5. Push i otwórz PR z opisem zmian
6. Poczekaj na code review

## Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm test:watch

# Check types
npm run type-check

# Lint
npm run lint
```

## Adding New Features

### 1. New Component

```bash
# Create component file
touch components/MyComponent.tsx
```

```typescript
'use client' // if client-side interactivity needed

interface MyComponentProps {
  title: string
}

export function MyComponent({ title }: MyComponentProps) {
  return <div className="glass-card p-4">{title}</div>
}
```

### 2. New Page

```bash
# Create page in app directory
mkdir -p app/my-page
touch app/my-page/page.tsx
```

### 3. New API Route

```bash
mkdir -p app/api/my-endpoint
touch app/api/my-endpoint/route.ts
```

```typescript
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Hello' })
}
```

## Design Guidelines

### Colors

Używaj CSS variables i Tailwind tokens:

```tsx
// ✅ Good
<div className="bg-primary-500 text-white">

// ❌ Bad
<div style={{ backgroundColor: '#1FB89A' }}>
```

### Spacing

Używaj Tailwind spacing scale (4px base):

- `gap-2` = 8px
- `p-4` = 16px
- `mb-6` = 24px

### Typography

```tsx
<h1 className="text-h1">Heading 1</h1>
<h2 className="text-h2">Heading 2</h2>
<p className="text-body">Body text</p>
<p className="text-small text-muted">Small text</p>
```

## Accessibility

- Zawsze dodawaj `alt` do obrazów
- Używaj semantic HTML
- Test keyboard navigation
- Sprawdź kontrast (min AA)
- Dodaj ARIA labels gdzie potrzebne

```tsx
// ✅ Good
<button aria-label="Close menu" onClick={handleClose}>
  <X size={20} />
</button>

// ❌ Bad
<div onClick={handleClose}>
  <X size={20} />
</div>
```

## Performance

- Lazy load images: `<Image loading="lazy" />`
- Używaj dynamic imports dla heavy components
- Memoize expensive computations
- Preferuj SSR/SSG nad CSR

## Questions?

- Sprawdź [README.md](README.md)
- Otwórz issue na GitHub
- Skontaktuj się: dev@bestaitools.pl

---

**Licencja**: Proprietary - Crusor Lab © 2025

