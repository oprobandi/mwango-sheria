/**
 * useDarkMode.js — V1.4
 * Persists preference in localStorage, applies 'dark' class to <html>.
 */
import { useState, useEffect } from 'react'

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    try {
      const stored = localStorage.getItem('ms-theme')
      if (stored) return stored === 'dark'
    } catch {}
    return false // default: light
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try { localStorage.setItem('ms-theme', isDark ? 'dark' : 'light') } catch {}
  }, [isDark])

  return [isDark, () => setIsDark(d => !d)]
}
