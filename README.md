# Mwango Sheria — V1.0

> **Kenya's Business Law Intelligence Platform**  
> AI-powered compliance engine for Kenyan entrepreneurs.

---

## Overview

Mwango Sheria is a React + Vite + Tailwind CSS landing page and waitlist application. It introduces the platform's features, law coverage areas, and compliance tooling to prospective users and collects early-access sign-ups.

---

## Stack

| Layer       | Technology                              |
|-------------|------------------------------------------|
| Framework   | React 18 (JSX)                          |
| Bundler     | Vite 5                                  |
| Styling     | Tailwind CSS 3 + CSS Custom Properties  |
| Animations  | GSAP 3 + ScrollTrigger                  |
| Fonts       | Cormorant Garamond + Outfit (Google)    |
| Deployment  | Vercel (static SPA)                     |

---

## Project Structure

```
mwango-sheria-v1/
├── index.html                        # Vite HTML shell
├── vite.config.js                    # Vite + React plugin, chunk splitting
├── tailwind.config.js                # Design token extensions
├── postcss.config.js
├── vercel.json                       # SPA rewrites + cache headers
├── package.json
├── .gitignore
├── .env.example                      # Environment variable template
├── README.md
│
├── src/
│   ├── main.jsx                      # React DOM root mount
│   ├── App.jsx                       # Layout shell + global GSAP setup
│   ├── index.css                     # @tailwind directives, base styles, tokens
│   │
│   ├── data/
│   │   └── site.data.js              # ALL static copy, structured data, constants
│   │
│   ├── hooks/
│   │   ├── useScrollSpy.js           # IntersectionObserver active-section hook
│   │   └── useWaitlist.js            # Form state, validation, submission
│   │
│   └── components/
│       ├── layout/
│       │   ├── Nav.jsx               # Fixed nav, scroll-blur, mobile hamburger
│       │   └── Footer.jsx            # 4-column footer with legal links
│       │
│       ├── sections/
│       │   ├── Hero.jsx              # Viewport hero + GSAP entrance timeline
│       │   ├── Ticker.jsx            # Scrolling pain-points strip
│       │   ├── HowItWorks.jsx        # 4-step process grid
│       │   ├── Features.jsx          # 6-card capability grid
│       │   ├── Coverage.jsx          # 6 law coverage area cards
│       │   ├── ComplianceChecklist.jsx  # Checklist + CompanyProfileCard
│       │   ├── Testimonials.jsx      # 3 testimonial cards
│       │   └── CTASection.jsx        # Waitlist email CTA
│       │
│       └── ui/
│           ├── Logo.jsx              # SVG hexagon + wordmark
│           ├── SectionTag.jsx        # Pill section label
│           ├── DashboardCard.jsx     # Hero dashboard mockup (animated ring)
│           ├── CompanyProfileCard.jsx  # Compliance status rows + health bar
│           └── FAB.jsx               # Floating "Chat with Advocate" button
│
└── docs/
    ├── TODO.md                       # Backlog and upcoming work
    ├── CHANGELOG.md                  # Version history
    ├── CONTRIBUTING.md               # Developer guide
    ├── ARCHITECTURE.md               # System design overview
    └── adr/
        ├── 0001-react-vite-stack.md
        ├── 0002-tailwind-styling.md
        ├── 0003-gsap-animations.md
        └── 0004-waitlist-api.md
```

---

## Quick Start

### Prerequisites
- Node.js ≥ 18.x
- npm ≥ 9.x

### Install & Run

```bash
npm install
npm run dev
# → http://localhost:5173
```

### Build for Production

```bash
npm run build
# Output → /dist (ready for Vercel / Netlify / S3)
```

### Preview Production Build Locally

```bash
npm run preview
```

---

## Deploying to Vercel

### Option A — Vercel CLI

```bash
npm i -g vercel
vercel          # follow prompts
vercel --prod   # promote to production
```

### Option B — Git Integration (recommended)

1. Push this repository to GitHub
2. Open [vercel.com/new](https://vercel.com/new) and import the repo
3. Vercel auto-detects Vite — no extra configuration required
4. `vercel.json` is already included for SPA rewrites and immutable asset caching

---

## Environment Variables

No variables are required for the static V1.0 landing page.

When you wire up the real waitlist API, copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Then fill in:

```env
VITE_WAITLIST_API_URL=https://your-app.vercel.app/api/waitlist
```

See `docs/adr/0004-waitlist-api.md` for the full serverless function design.

---

## Design Tokens

All brand colours are defined as CSS custom properties in `src/index.css`
and mirrored as Tailwind theme extensions in `tailwind.config.js`:

| Token       | Hex       | Usage                          |
|-------------|-----------|--------------------------------|
| `--void`    | `#060C07` | Page background                |
| `--forest`  | `#0C1A0E` | Alternating section background |
| `--bark`    | `#172419` | Card background (dark)         |
| `--panel`   | `#1C2B1E` | Dashboard / overlay panels     |
| `--ochre`   | `#C47B2A` | Primary accent, CTAs           |
| `--gold`    | `#DFA042` | Hover states                   |
| `--amber`   | `#F0C070` | Italic emphasis, highlights    |
| `--cream`   | `#F4ECD8` | Primary headings               |
| `--sand`    | `#B8A880` | Body text                      |
| `--stone`   | `#6B6050` | Muted / secondary text         |

---

## Contributing

See [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) for branch strategy,
commit conventions, and PR guidelines.

---

## Licence

Proprietary — © 2026 Mwango Sheria Technologies Ltd. All rights reserved.
