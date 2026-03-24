/**
 * useScrollSpy.js
 * Returns the id of whichever section is currently in the viewport.
 *
 * Usage:
 *   const activeSection = useScrollSpy(['how', 'features', 'coverage'])
 */
import { useState, useEffect } from 'react'

export function useScrollSpy(ids, options = {}) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', ...options }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids, options])

  return activeId
}
