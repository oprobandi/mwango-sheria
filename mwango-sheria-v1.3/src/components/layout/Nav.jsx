/**
 * Nav.jsx — V1.3 Light Mode
 * Fixed top nav, warm-white bg on scroll, full-screen mobile menu.
 */
import { useState, useEffect } from 'react'
import Logo from '../ui/Logo.jsx'

const LINKS = [
  { label: 'How It Works', href: '#how' },
  { label: 'Features',     href: '#features' },
  { label: 'Coverage',     href: '#coverage' },
  { label: 'Compliance',   href: '#compliance' },
]

export default function Nav() {
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

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-between items-center
                    px-5 sm:px-10 lg:px-16 py-4 transition-all duration-300 border-b ${
                      scrolled
                        ? 'bg-[rgba(248,244,238,0.97)] backdrop-blur-[16px] border-[rgba(180,110,20,0.14)] shadow-[0_2px_16px_rgba(28,18,7,0.07)]'
                        : 'bg-transparent border-transparent'
                    }`}
      >
        <Logo />

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-10 list-none items-center">
          {LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-[0.78rem] font-normal text-[#8A7860] no-underline tracking-[0.06em] transition-colors hover:text-[#B86520]"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#waitlist"
              className="text-[0.75rem] font-semibold tracking-[0.1em] no-underline bg-[#B86520] text-white px-6 py-2.5 rounded-[3px] shadow-[0_4px_16px_rgba(184,101,32,0.28)] transition-all hover:bg-[#C47B2A] hover:-translate-y-px whitespace-nowrap"
            >
              Early Access
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] cursor-pointer p-3 -mr-2 bg-transparent border-none z-[101] touch-manipulation"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className="block w-[22px] h-[1.5px] bg-[#5C4A30] transition-all duration-300"
            style={menuOpen ? { transform: 'translateY(6.5px) rotate(45deg)' } : {}}
          />
          <span
            className="block w-[22px] h-[1.5px] bg-[#5C4A30] transition-all duration-300"
            style={menuOpen ? { opacity: 0, transform: 'scaleX(0)' } : {}}
          />
          <span
            className="block w-[22px] h-[1.5px] bg-[#5C4A30] transition-all duration-300"
            style={menuOpen ? { transform: 'translateY(-6.5px) rotate(-45deg)' } : {}}
          />
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div className="mobile-nav-open">
          {/* Logo at top */}
          <div className="absolute top-5 left-5">
            <Logo />
          </div>

          <nav className="flex flex-col gap-0 flex-1 justify-center">
            {LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={close}
                className="text-[1.4rem] font-light text-[#1C1207] no-underline py-5 border-b border-[rgba(180,110,20,0.1)] tracking-[0.02em] transition-colors hover:text-[#B86520] active:text-[#B86520]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#waitlist"
            onClick={close}
            className="btn-primary justify-center text-center mt-4"
          >
            Join the Waitlist
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <p className="text-center text-[0.65rem] text-[#8A7860] mt-4 tracking-[0.1em] uppercase">
            Kenya's Business Law Intelligence Platform
          </p>
        </div>
      )}
    </>
  )
}
