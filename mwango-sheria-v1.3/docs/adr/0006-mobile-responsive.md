# ADR-006: Mobile Responsive Strategy

**Date:** 2026-03-24
**Status:** Accepted
**Deciders:** Engineering, Product

---

## Context

V1.0 used inline `style={{ gridTemplateColumns: ... }}` for layouts, which
bypasses Tailwind's responsive utility system and requires JavaScript to change
at breakpoints. V1.1 migrates all layouts to Tailwind responsive prefixes.

## Breakpoint System

We adopt Tailwind's default breakpoints without modification:

| Prefix | Min-width | Target devices              |
|--------|-----------|-----------------------------|
| (none) | 0px       | All phones (320px–639px)    |
| `sm:`  | 640px     | Large phones, small tablets |
| `md:`  | 768px     | Tablets                     |
| `lg:`  | 1024px    | Laptops, desktops            |
| `xl:`  | 1280px    | Wide desktops               |

## Layout Decisions

### Hero
- Below `lg`: single column, dashboard mockup hidden, mini pill strip shown
- `lg+`: two-column grid with dashboard mockup visible

### Navigation
- Below `lg`: hamburger with fullscreen overlay menu, body scroll locked
- `lg+`: horizontal link list

### Content Grids (Coverage, Features, HowItWorks)
- **Mobile-first**: `grid-cols-1` default
- **Tablet**: `sm:grid-cols-2` where content permits
- **Desktop**: `lg:grid-cols-3` or `lg:grid-cols-4`

### Section Padding
- Centralised in `.section-pad` CSS class (not inline styles)
- Three tiers: `6rem 4rem` / `5rem 2.5rem` / `4rem 1.25rem`

### CTA Form
- `flex-col` on mobile; `sm:flex-row` on tablet+
- Border radius adapts: full radius on mobile, split radius on row layout

## Consequences

- All responsive behaviour now driven by CSS/Tailwind — zero JS breakpoint logic
- Easier to audit: grep for `sm:`, `md:`, `lg:` to find all responsive rules
- `section-pad` class must be applied to every new section added in future
