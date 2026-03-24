import { useEffect, createContext, useContext } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useDarkMode } from './hooks/useDarkMode.js'

import Nav                from './components/layout/Nav.jsx'
import Footer             from './components/layout/Footer.jsx'
import Hero               from './components/sections/Hero.jsx'
import Ticker             from './components/sections/Ticker.jsx'
import HowItWorks         from './components/sections/HowItWorks.jsx'
import Features           from './components/sections/Features.jsx'
import Coverage           from './components/sections/Coverage.jsx'
import ComplianceChecklist from './components/sections/ComplianceChecklist.jsx'
import Testimonials       from './components/sections/Testimonials.jsx'
import CTASection         from './components/sections/CTASection.jsx'
import FAB                from './components/ui/FAB.jsx'

gsap.registerPlugin(ScrollTrigger)

export const ThemeContext = createContext({ isDark: false, toggle: () => {} })
export const useTheme = () => useContext(ThemeContext)

export default function App() {
  const [isDark, toggle] = useDarkMode()

  useEffect(() => {
    const reveals = gsap.utils.toArray('.gs-reveal')
    reveals.forEach((el, i) => {
      gsap.to(el, {
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        opacity: 1, y: 0, duration: 0.75, delay: (i % 3) * 0.1, ease: 'power3.out',
      })
    })
    gsap.utils.toArray('.coverage-card').forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 85%' },
        opacity: 0, y: 40, scale: 0.97, duration: 0.7, delay: i * 0.12, ease: 'power3.out',
      })
    })
    gsap.utils.toArray('.checklist-item').forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 90%' },
        opacity: 0, x: -24, duration: 0.55, delay: i * 0.08, ease: 'power2.out',
      })
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <HowItWorks />
        <Features />
        <Coverage />
        <ComplianceChecklist />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <FAB />
    </ThemeContext.Provider>
  )
}
