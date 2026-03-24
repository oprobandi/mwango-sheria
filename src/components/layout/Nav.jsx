/**
 * Nav.jsx
 * Fixed top navigation with scroll-aware background, desktop links, and mobile hamburger.
 */
import { useState, useEffect } from 'react'
import Logo from '../ui/Logo.jsx'

const LINKS = [
  { href: '#how',        label: 'How It Works' },
  { href: '#features',   label: 'Features' },
  { href: '#coverage',   label: 'Coverage' },
  { href: '#compliance', label: 'Compliance' },
]

export default function Nav() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-16 py-5 transition-all duration-400 border-b ${
          scrolled
            ? 'bg-[rgba(6,12,7,0.94)] backdrop-blur-xl border-[rgba(196,123,42,0.12)]'
            : 'border-transparent'
        }`}
        style={{ padding: '1.2rem 4rem' }}
      >
        <Logo />

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none items-center">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.78rem] font-normal text-[#6B6050] no-underline tracking-[0.06em] transition-colors hover:text-[#F0C070]"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#waitlist"
              className="text-[0.78rem] font-semibold tracking-[0.1em] no-underline bg-[#C47B2A] text-[#060C07] px-6 py-2 rounded-sm transition-all duration-300 shadow-[0_4px_20px_rgba(196,123,42,0.3)] hover:bg-[#DFA042] hover:-translate-y-px"
            >
              Early Access
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer p-1 bg-transparent border-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-[22px] h-[1.5px] bg-[#B8A880] transition-all" />
          <span className="block w-[22px] h-[1.5px] bg-[#B8A880] transition-all" />
          <span className="block w-[22px] h-[1.5px] bg-[#B8A880] transition-all" />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <ul
          className="mobile-nav-open list-none"
          style={{ padding: '2rem' }}
        >
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.88rem] text-[#B8A880] no-underline tracking-[0.06em]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#waitlist"
              className="inline-block text-[0.78rem] font-semibold bg-[#C47B2A] text-[#060C07] px-6 py-2 rounded-sm tracking-[0.1em] no-underline"
              onClick={() => setMobileOpen(false)}
            >
              Early Access
            </a>
          </li>
        </ul>
      )}
    </>
  )
}
