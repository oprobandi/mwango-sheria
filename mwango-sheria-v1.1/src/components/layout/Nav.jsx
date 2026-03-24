/**
 * Nav.jsx  — V1.1
 * Fixed top navigation with scroll-blur effect and fully responsive mobile menu.
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

  // Lock body scroll when menu open
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
                        ? 'bg-[rgba(6,12,7,0.95)] backdrop-blur-[16px] border-[rgba(196,123,42,0.12)]'
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
                className="text-[0.78rem] font-normal text-[#6B6050] no-underline tracking-[0.06em] transition-colors hover:text-[#F0C070]"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#waitlist"
              className="text-[0.75rem] font-semibold tracking-[0.1em] no-underline bg-[#C47B2A] text-[#060C07] px-6 py-2.5 rounded-[2px] shadow-[0_4px_20px_rgba(196,123,42,0.3)] transition-all hover:bg-[#DFA042] hover:-translate-y-px whitespace-nowrap"
            >
              Early Access
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] cursor-pointer p-2 bg-transparent border-none z-[101]"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className="block w-[22px] h-[1.5px] bg-[#B8A880] transition-all duration-300"
            style={menuOpen ? { transform: 'translateY(6.5px) rotate(45deg)' } : {}}
          />
          <span
            className="block w-[22px] h-[1.5px] bg-[#B8A880] transition-all duration-300"
            style={menuOpen ? { opacity: 0, transform: 'scaleX(0)' } : {}}
          />
          <span
            className="block w-[22px] h-[1.5px] bg-[#B8A880] transition-all duration-300"
            style={menuOpen ? { transform: 'translateY(-6.5px) rotate(-45deg)' } : {}}
          />
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[99] flex flex-col pt-20 pb-8 px-8"
          style={{ background: 'rgba(6,12,7,0.98)', backdropFilter: 'blur(20px)' }}
        >
          <nav className="flex flex-col gap-2 flex-1">
            {LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={close}
                className="text-[1.1rem] font-light text-[#B8A880] no-underline py-4 border-b border-[rgba(196,123,42,0.1)] tracking-[0.04em] transition-colors hover:text-[#F0C070]"
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

          <p className="text-center text-[0.65rem] text-[#6B6050] mt-4 tracking-[0.1em] uppercase">
            Kenya's Business Law Intelligence Platform
          </p>
        </div>
      )}
    </>
  )
}
