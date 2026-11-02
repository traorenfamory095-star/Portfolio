import { useEffect, useRef, useState } from 'react'

// Révèle un élément avec des utilitaires Tailwind lorsqu'il entre dans l'écran.
// Les classes doivent être écrites en entier pour que Tailwind les détecte : d'où cette table.
const delays = {
  0: 'delay-0',
  80: 'delay-80',
  100: 'delay-100',
  160: 'delay-160',
  200: 'delay-200',
  240: 'delay-240',
  300: 'delay-300',
  400: 'delay-400',
  500: 'delay-500',
}

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...props }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { rootMargin: '0px 0px -10% 0px' })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`${className} ${delays[delay] ?? ''} transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
