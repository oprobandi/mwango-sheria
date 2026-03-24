# ADR 0002 — Tailwind CSS for Styling

**Date**: 2026-03-24
**Status**: Accepted
**Deciders**: Core team

---

## Context

The prototype used a single large `<style>` block (~800 lines) with CSS custom properties
for design tokens. Moving to a component architecture requires a scalable styling strategy
that preserves the custom token system.

---

## Decision

Use **Tailwind CSS 3** as the primary styling layer, with a supplementary `src/index.css`
for global styles, shared component classes, animation keyframes, and CSS custom properties.

---

## Alternatives Considered

| Option             | Pros                                     | Cons                                                  |
|--------------------|------------------------------------------|-------------------------------------------------------|
| **Tailwind CSS**   | Utility-first, purged CSS, design tokens in config | Verbose JSX, learning curve |
| CSS Modules        | Scoped styles, familiar CSS syntax       | Requires separate `.module.css` files per component   |
| Styled Components  | Co-located styles, dynamic props         | Runtime CSS-in-JS overhead, no SSR without extra setup|
| Plain CSS + BEM    | Zero tooling overhead                    | No purging, manual scoping, poor refactor story        |
| UnoCSS             | Even faster than Tailwind, attributify mode | Less documentation, smaller ecosystem                |

---

## Rationale

1. **Tailwind extends naturally** from the existing CSS custom property system —
   tokens defined in `tailwind.config.js` mirror the CSS variables in `:root`.
2. **Purged output**: Tailwind's JIT engine produces only the CSS actually used,
   resulting in sub-10 kB stylesheets in production.
3. **Design token discipline**: Extending the Tailwind theme forces all colour,
   spacing, and font decisions through a single configuration file.
4. **Team velocity**: Tailwind's utility classes map directly to the visual design;
   designers and developers share a common vocabulary.
5. **Escape hatch**: Complex pseudo-element effects (ticker, coverage card top-line,
   grain texture) that Tailwind can't express are placed in `src/index.css` with
   clear comment blocks.

---

## CSS Custom Properties vs. Tailwind Tokens

Both are maintained in parallel:

- **CSS custom properties** (`var(--ochre)`) — used in GSAP animations, dynamic
  inline styles, and places where Tailwind classes are not available.
- **Tailwind tokens** (`bg-ochre`, `text-ochre`) — used in JSX utility classes.

The two must always stay in sync. See `CONTRIBUTING.md → Design System`.

---

## Consequences

- ✅ Tiny production CSS bundle
- ✅ Consistent token usage enforced by config
- ✅ No separate CSS files per component
- ⚠️ JSX can become verbose for complex layouts — mitigate with `cn()` utility (future)
- ⚠️ Tailwind classes are not scoped; naming collisions are possible — mitigate by
  keeping shared classes in `index.css` with explicit names
