import { useEffect, useState } from 'react'

// Renvoie l'identifiant de la section actuellement au milieu de l'écran.
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      // Une bande fine autour du milieu de l'écran décide quelle section est « active ».
      { rootMargin: '-45% 0px -50% 0px' },
    )

    ids.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [ids])

  return active
}
