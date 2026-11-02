import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

function readStoredTheme() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

// Thème clair / sombre :
// 1. au premier chargement, on suit la préférence du système (prefers-color-scheme) ;
// 2. si la personne clique sur le bouton, son choix est mémorisé et prioritaire.
export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'light',
  )

  // Applique le thème sur <html> : les variables CSS font le reste.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    const color = theme === 'dark' ? '#1b1a17' : '#f4efe6'
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', color)
  }, [theme])

  // Tant qu'aucun choix n'est mémorisé, on suit les changements du système.
  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (event) => {
      if (!readStoredTheme()) setTheme(event.matches ? 'dark' : 'light')
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // stockage indisponible : le thème marche quand même pour cette visite
      }
      return next
    })
  }, [])

  return { theme, toggleTheme }
}
