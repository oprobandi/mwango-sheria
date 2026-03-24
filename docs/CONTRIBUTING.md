# Contributing to Mwango Sheria

Thank you for your interest in contributing! This document describes how to
work on the codebase, the branch strategy, commit conventions, and the review
process.

---

## Table of Contents

1. [Development Setup](#development-setup)
2. [Branch Strategy](#branch-strategy)
3. [Commit Conventions](#commit-conventions)
4. [Code Style](#code-style)
5. [Component Guidelines](#component-guidelines)
6. [Pull Request Process](#pull-request-process)
7. [Design System](#design-system)
8. [Testing](#testing)

---

## Development Setup

### Requirements

| Tool      | Version  |
|-----------|---------|
| Node.js   | ≥ 18    |
| npm       | ≥ 9     |
| Git       | any recent |

### First-time setup

```bash
# 1. Clone
git clone https://github.com/your-org/mwango-sheria.git
cd mwango-sheria

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
# → http://localhost:5173
```

### Available scripts

```bash
npm run dev        # Vite dev server with HMR
npm run build      # Production build → dist/
npm run preview    # Serve production build locally
npm run lint       # ESLint check
```

---

## Branch Strategy

We use **GitHub Flow** (lightweight, trunk-based):

```
main                   ← production; protected; deploys to Vercel
  └── feature/<name>   ← new features and enhancements
  └── fix/<name>       ← bug fixes
  └── docs/<name>      ← documentation-only changes
  └── chore/<name>     ← tooling, deps, config
```

- All work happens in short-lived branches cut from `main`.
- Open a Pull Request into `main`; require at least 1 review.
- Delete the branch after merge.

---

## Commit Conventions

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <short summary>

[optional body]

[optional footer]
```

### Types

| Type       | When to use                              |
|------------|------------------------------------------|
| `feat`     | New feature or component                 |
| `fix`      | Bug fix                                  |
| `docs`     | Documentation only                       |
| `style`    | Formatting, no logic change              |
| `refactor` | Code restructure, no feature change      |
| `perf`     | Performance improvement                  |
| `test`     | Adding or fixing tests                   |
| `chore`    | Tooling, deps, CI configuration          |
| `revert`   | Reverts a previous commit                |

### Examples

```
feat(hero): add animated score ring to DashboardCard
fix(nav): prevent body scroll when mobile menu is open
docs(contributing): add component guidelines section
chore(deps): upgrade GSAP to 3.12.5
```

---

## Code Style

- **Formatting**: Prettier (config in `.prettierrc` when added)
- **Linting**: ESLint with `eslint-plugin-react` and `react-hooks`
- **Quotes**: Single quotes in JS/JSX; double in JSX attributes
- **Semicolons**: None (Prettier default)
- **Trailing commas**: All (ES5+)
- **Line length**: 100 characters max

Run linting before pushing:

```bash
npm run lint
```

---

## Component Guidelines

### File naming

- Components: `PascalCase.jsx` (e.g., `DashboardCard.jsx`)
- Utilities / hooks: `camelCase.js` (e.g., `useScrollReveal.js`)

### Component structure

```jsx
/**
 * ComponentName.jsx
 * One-line description of what this component renders.
 *
 * Props:
 *   propName  {type}  - description
 */
import { ... } from 'react'

export default function ComponentName({ prop1, prop2 = 'default' }) {
  // 1. Hooks
  // 2. Derived state / memos
  // 3. Handlers
  // 4. Effects
  // 5. Render
  return ( ... )
}
```

### Styling rules

1. Prefer **Tailwind utility classes** for spacing, typography, flexbox/grid.
2. Use **CSS custom properties** (`var(--ochre)`) for brand colours — do not
   hard-code hex values in JSX unless they must be dynamic.
3. For complex hover effects or pseudo-element tricks that Tailwind can't
   express cleanly, add a class to `src/index.css` with a comment block.
4. Never use inline `style` for static values that could be a Tailwind class.
   Use `style` only for dynamic/computed values.

### Animation rules

- All GSAP setup goes in `useEffect` with a cleanup function.
- Use `gsap.utils.toArray()` for batch animations.
- Register plugins once at the module level: `gsap.registerPlugin(ScrollTrigger)`.
- Do not import GSAP inside components — import at the top of the file.

---

## Pull Request Process

1. **Open a draft PR** early if you want early feedback.
2. Fill out the PR template (describe the change, screenshots for UI changes).
3. Ensure `npm run lint` and `npm run build` pass with no errors or warnings.
4. Request review from at least one team member.
5. Address all review comments before marking "Ready for review".
6. Squash merge into `main` — keep commit history clean.

---

## Design System

All design tokens live in two places and must stay in sync:

| File                   | Purpose                            |
|------------------------|------------------------------------|
| `src/index.css`        | CSS custom properties (`:root {}`) |
| `tailwind.config.js`   | Tailwind theme extension           |

### Adding a new token

1. Add `--new-token: #value;` to `:root` in `src/index.css`.
2. Mirror it in the `colors` section of `tailwind.config.js`.
3. Document it in the design tokens table in `README.md`.

### Typography

Do not deviate from the two-font pairing without a design decision:

- `font-serif` → Cormorant Garamond (headings, display)
- `font-sans`  → Outfit (body, UI labels)

---

## Testing

Currently using **Vitest + React Testing Library** (to be set up in v1.1).

When writing tests:

```bash
npm run test         # run all tests
npm run test:watch   # watch mode
npm run test:ui      # Vitest UI
```

Test files live next to their component: `DashboardCard.test.jsx`.

Focus coverage on:
- Form validation logic (`CTASection`)
- State transitions (mobile menu open/close)
- Data transformations in `src/data/content.js`

---

## Questions?

Open a GitHub Discussion or reach out at hello@mwangosheria.co.ke.
