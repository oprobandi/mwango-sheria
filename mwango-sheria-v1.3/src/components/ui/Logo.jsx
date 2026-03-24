/**
 * Logo.jsx
 * Reusable Mwango Sheria brand mark — SVG hexagon + scale + wordmark.
 *
 * Props:
 *   size {number} - icon width/height in px (default 40)
 */
export default function Logo({ size = 40 }) {
  return (
    <a href="#" className="flex items-center gap-[10px] no-underline">
      {/* ── SVG Icon ── */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="40" height="40" rx="8" fill="#0C1A0E" />
        {/* Hexagon outer */}
        <path
          d="M20 4 L33 11.5 L33 26.5 L20 34 L7 26.5 L7 11.5 Z"
          fill="none" stroke="#C47B2A" strokeWidth="1.2"
        />
        {/* Hexagon inner (subtle) */}
        <path
          d="M20 9 L29 14 L29 24 L20 29 L11 24 L11 14 Z"
          fill="none" stroke="rgba(196,123,42,0.2)" strokeWidth="0.8"
        />
        {/* Scale beam */}
        <line x1="20" y1="12" x2="20" y2="28" stroke="#DFA042" strokeWidth="1.2" />
        {/* Scale horizontal */}
        <line x1="13" y1="17" x2="27" y2="17" stroke="#C47B2A" strokeWidth="1.2" />
        {/* Left pan */}
        <line x1="13" y1="17" x2="13" y2="21" stroke="#DFA042" strokeWidth="1" />
        <path d="M10.5 21 Q13 23 15.5 21" fill="none" stroke="#DFA042" strokeWidth="1" />
        {/* Right pan */}
        <line x1="27" y1="17" x2="27" y2="21" stroke="#DFA042" strokeWidth="1" />
        <path d="M24.5 21 Q27 23 29.5 21" fill="none" stroke="#DFA042" strokeWidth="1" />
        {/* Base */}
        <line x1="17.5" y1="28" x2="22.5" y2="28" stroke="#C47B2A" strokeWidth="1.2" />
      </svg>

      {/* ── Wordmark ── */}
      <div className="flex flex-col leading-none">
        <span className="logo-primary">Mwango Sheria</span>
        <span className="logo-secondary">Business Law · Kenya</span>
      </div>
    </a>
  )
}
