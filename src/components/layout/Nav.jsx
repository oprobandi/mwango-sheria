/**
 * Nav.jsx — V1.4
 * Dark/light toggle + responsive desktop & mobile nav.
 */
import { useState, useEffect } from 'react'
import Logo from '../ui/Logo.jsx'
import { useTheme } from '../../App.jsx'

const LINKS = [
  { label: 'How It Works', href: '#how' },
  { label: 'Features',     href: '#features' },
  { label: 'Coverage',     href: '#coverage' },
  { label: 'Compliance',   href: '#compliance' },
]

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

export default function Nav() {
  const { isDark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  const navBg = scrolled
    ? 'border-[var(--accent-border)] shadow-[0_2px_16px_rgba(28,18,7,0.08)]'
    : 'border-transparent'

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-between items-center
                    px-5 sm:px-10 lg:px-16 py-4 transition-all duration-300 border-b ${navBg}`}
        style={{ background: scrolled ? 'var(--bg-nav)' : 'transparent', backdropFilter: scrolled ? 'blur(16px)' : 'none' }}
      >
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden lg:flex gap-10 list-none items-center">
          {LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-[0.78rem] font-normal tracking-[0.06em] no-underline transition-colors"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: toggle + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{ color: 'var(--accent)' }}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <a
            href="#waitlist"
            className="text-[0.75rem] font-semibold tracking-[0.1em] no-underline text-white px-6 py-2.5 rounded-[3px] transition-all hover:-translate-y-px whitespace-nowrap"
            style={{ background: 'var(--accent)', boxShadow: '0 4px 16px rgba(184,101,32,0.28)' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--accent-hover)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
          >
            Early Access
          </a>
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{ color: 'var(--accent)' }}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="flex flex-col gap-[5px] cursor-pointer p-3 -mr-2 bg-transparent border-none z-[101] touch-manipulation"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="block w-[22px] h-[1.5px] transition-all duration-300"
              style={{ background: 'var(--text-body)', ...(menuOpen ? { transform: 'translateY(6.5px) rotate(45deg)' } : {}) }} />
            <span className="block w-[22px] h-[1.5px] transition-all duration-300"
              style={{ background: 'var(--text-body)', ...(menuOpen ? { opacity: 0, transform: 'scaleX(0)' } : {}) }} />
            <span className="block w-[22px] h-[1.5px] transition-all duration-300"
              style={{ background: 'var(--text-body)', ...(menuOpen ? { transform: 'translateY(-6.5px) rotate(-45deg)' } : {}) }} />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[99] flex flex-col pt-20 pb-8 px-8"
          style={{ background: 'var(--bg-nav-mobile)', backdropFilter: 'blur(24px)' }}
        >
          <nav className="flex flex-col gap-0 flex-1 justify-center">
            {LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={close}
                className="text-[1.4rem] font-light no-underline py-5 border-b tracking-[0.02em]"
                style={{
                  color: 'var(--text-h)',
                  borderColor: 'var(--accent-border)',
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#waitlist"
            onClick={close}
            className="btn-primary justify-center text-center mt-6"
          >
            Join the Waitlist
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <p className="text-center text-[0.65rem] mt-4 tracking-[0.1em] uppercase" style={{ color: 'var(--text-muted)' }}>
            Kenya's Business Law Intelligence Platform
          </p>
        </div>
      )}
    </>
  )
}
