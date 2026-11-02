import { useEffect } from 'react'
import { useLocation } from 'react-router'

// Quand on change de page, on remonte en haut (sauf si l'adresse contient un #ancre).
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // « instant » : on remonte tout de suite, sans l'animation du défilement doux du site.
    if (!hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  return null
}
