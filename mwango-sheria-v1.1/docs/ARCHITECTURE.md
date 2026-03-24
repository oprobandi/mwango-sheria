# Architecture — Mwango Sheria v1.0

## Overview

Mwango Sheria v1.0 is a **React single-page application (SPA)** built with Vite and
deployed on Vercel. It is a marketing landing page with a waitlist capture form.
There is no backend in v1.0; all state is ephemeral and client-side.

---

## Component Tree

```
App
├── Nav                           (layout)
├── main
│   ├── Hero
│   │   └── DashboardCard         (ui)
│   ├── Ticker
│   ├── HowItWorks
│   ├── Features
│   ├── Coverage
│   ├── ComplianceChecklist
│   │   └── CompanyProfileCard    (ui)
│   ├── Testimonials
│   └── CTASection
├── Footer                        (layout)
└── FAB                           (ui)
```

Shared UI atoms used across multiple components:
- `Logo` — brand mark (Nav, Footer)
- `SectionTag` — pill label (every section)

---

## Data Flow

```
src/data/content.js
       │
       ▼
Section components (props/constants)
       │
       ▼
UI components (render)
```

All content (copy, testimonials, feature cards, checklist items) is currently
co-located as constants inside each section component. The next step is to
centralise them in `src/data/content.js` for i18n-readiness.

---

## Animation Architecture

GSAP is initialised once in `App.jsx`:

```
App.useEffect
 ├── gsap.utils.toArray('.gs-reveal') → batch scroll-reveal
 ├── gsap.utils.toArray('.coverage-card') → stagger entrance
 ├── gsap.utils.toArray('.checklist-item') → stagger x-slide
 └── ScrollTrigger.getAll().forEach(t => t.kill())  ← cleanup
```

Component-level GSAP (Hero entrance, score ring) is managed inside each
component's own `useEffect` to maintain encapsulation.

The `.gs-reveal` CSS class sets `opacity: 0; transform: translateY(36px)` as
the initial state. GSAP `to()` animates to `opacity: 1; y: 0`.

---

## Styling Architecture

```
src/index.css
 ├── @tailwind base / components / utilities
 ├── :root { CSS custom properties }       ← single source of truth for tokens
 ├── Base reset
 ├── Shared typography classes (.section-heading, .section-tag, etc.)
 ├── Shared button classes (.btn-primary, .btn-ghost)
 ├── Animation keyframes (ticker-scroll, pulse-dot)
 └── Component-specific classes (.features-grid, .coverage-card::after, etc.)

tailwind.config.js
 └── theme.extend
      ├── colors (mirrors CSS tokens)
      ├── fontFamily
      ├── animation + keyframes
      └── boxShadow
```

Components use Tailwind utility classes inline for spacing and layout, and
reference CSS custom properties via `style={{ color: 'var(--ochre)' }}` or
via custom Tailwind colour tokens (`text-ochre`, `bg-ochre`, etc.).

---

## Build & Deployment

```
Local dev:   npm run dev     → Vite HMR dev server (port 5173)
Production:  npm run build   → dist/ (Rollup bundled)
Deploy:      vercel          → picks up vercel.json config
```

### Vercel config (`vercel.json`)

- **SPA rewrites**: All routes → `/index.html` (required for client-side routing if added later)
- **Asset caching**: `/assets/*` → `Cache-Control: public, max-age=31536000, immutable`
- **Framework**: `vite` (auto-detected, but explicit for clarity)

### Chunk splitting

```js
// vite.config.js
manualChunks: {
  vendor: ['react', 'react-dom'],  // ~45 kB gzipped
  gsap:   ['gsap'],                // ~30 kB gzipped
}
```

---

## Future Architecture Considerations

### Waitlist backend (v1.1)

Two options being evaluated:

| Option A — Supabase    | Option B — Loops.so + Vercel Edge |
|------------------------|----------------------------------|
| Postgres table         | Hosted email platform            |
| Row-level security     | Built-in sequences               |
| Free tier available    | $0 for < 1,000 contacts          |
| Self-hosted option     | No infra to manage               |

### Routing (v2.0)

When adding /dashboard, /pricing, /blog:
- Add `react-router-dom` v6
- Implement lazy-loaded routes with `React.lazy` + `Suspense`
- Update `vercel.json` rewrites to remain SPA-compatible

### Internationalisation (v1.2)

- `react-i18next` with JSON namespaces in `src/locales/{en,sw}/`
- Language stored in `localStorage` and URL param (`?lang=sw`)
- All copy moved from component constants to translation files
