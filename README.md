# Mwango Sheria — V1.3

> **Kenya's Business Law Intelligence Platform**
> AI-powered compliance engine for Kenyan entrepreneurs.

---

## What's New in V1.3

- 🖼️ **Unsplash imagery** — Hero background, coverage card headers, testimonial avatars, CTA background tint
- 📱 **Full mobile responsive** — All grids, nav, forms, and section padding properly responsive across 320px–1440px+
- ✨ **Animated hamburger** → fullscreen mobile menu with body scroll lock
- ⭐ **Testimonial star ratings** + avatar photos
- 🗂️ 2 new ADRs: image strategy (ADR-005) and responsive approach (ADR-006)

See `docs/CHANGELOG.md` for the full diff.

---

## Stack

| Layer       | Technology                              |
|-------------|------------------------------------------|
| Framework   | React 18 (JSX)                          |
| Bundler     | Vite 5                                  |
| Styling     | Tailwind CSS 3 + CSS Custom Properties  |
| Animations  | GSAP 3 + ScrollTrigger                  |
| Fonts       | Cormorant Garamond + Outfit (Google)    |
| Images      | Unsplash CDN (lazy-loaded, sized)       |
| Deployment  | Vercel (static SPA)                     |

---

## Project Structure

```
mwango-sheria-v1.1/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── package.json
├── .gitignore
├── .env.example
├── README.md
│
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css                 ← section-pad, img-card, hero-image-overlay utilities
│   │
│   ├── data/
│   │   └── site.data.js
│   │
│   ├── hooks/
│   │   ├── useScrollSpy.js
│   │   └── useWaitlist.js
│   │
│   └── components/
│       ├── layout/
│       │   ├── Nav.jsx           ← fullscreen mobile menu, animated X hamburger
│       │   └── Footer.jsx        ← 4→2→1 col responsive
│       │
│       ├── sections/
│       │   ├── Hero.jsx          ← Unsplash bg, single-col mobile
│       │   ├── Ticker.jsx
│       │   ├── HowItWorks.jsx    ← 4→2→1 col, mobile image strip
│       │   ├── Features.jsx      ← 3→2→1 col
│       │   ├── Coverage.jsx      ← Unsplash card images, 3→2→1 col
│       │   ├── ComplianceChecklist.jsx  ← 2→1 col
│       │   ├── Testimonials.jsx  ← Unsplash avatars, stars, 3→1 col
│       │   └── CTASection.jsx    ← Unsplash bg tint, stacked form on mobile
│       │
│       └── ui/
│           ├── Logo.jsx
│           ├── SectionTag.jsx
│           ├── DashboardCard.jsx
│           ├── CompanyProfileCard.jsx
│           └── FAB.jsx
│
└── docs/
    ├── TODO.md
    ├── CHANGELOG.md
    ├── CONTRIBUTING.md
    ├── ARCHITECTURE.md
    └── adr/
        ├── 0001-react-vite-stack.md
        ├── 0002-tailwind-styling.md
        ├── 0003-gsap-animations.md
        ├── 0004-waitlist-api.md
        ├── 0005-unsplash-images.md    ← NEW
        └── 0006-mobile-responsive.md ← NEW
```

---

## Quick Start

```bash
npm install
npm run dev      # → http://localhost:5173
npm run build    # → /dist
```

---

## Deploy to Vercel

```bash
# Unzip & enter project
unzip ~/Downloads/"Mwango Sheria V1.3.zip" -d ~/
cd ~/mwango-sheria-v1.1

# Install & run locally
npm install
npm run dev

# Initialise git and push to GitHub
git init && git add . && git commit -m "feat: Mwango Sheria v1.1.0 — images & mobile responsive"
gh repo create mwango-sheria --public --source=. --remote=origin --push

# Deploy to Vercel
npm run deploy
```

---

## Responsive Breakpoints

| Breakpoint | Width   | Key changes                                     |
|------------|---------|-------------------------------------------------|
| Mobile     | < 640px | Single-column everything, stacked forms, fullscreen nav menu |
| `sm`       | ≥ 640px | 2-col grids begin, form goes horizontal         |
| `md`       | ≥ 768px | 3-col testimonials, features go 2-col           |
| `lg`       | ≥ 1024px| Full 3–4 col layouts, hero dashboard visible    |

---

## Image Credits

All images sourced from [Unsplash](https://unsplash.com) under the Unsplash Licence.
See `docs/adr/0005-unsplash-images.md` for full details and the replacement plan for V2.

---

## Design Tokens

| Token       | Hex       | Usage                          |
|-------------|-----------|--------------------------------|
| `--void`    | `#060C07` | Page background                |
| `--forest`  | `#0C1A0E` | Section alternates             |
| `--ochre`   | `#C47B2A` | Primary accent, CTAs           |
| `--amber`   | `#F0C070` | Italic emphasis, highlights    |
| `--cream`   | `#F4ECD8` | Primary headings               |
| `--stone`   | `#6B6050` | Body / muted text              |

---

© 2026 Mwango Sheria Technologies Ltd. All rights reserved.
