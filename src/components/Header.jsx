import { useEffect, useState } from 'react'
import { navItems } from '../data/navigation'
import { site } from '../data/site'
import Arrow from './Arrow'
import ThemeToggle from './ThemeToggle'

export default function Header({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const contactActive = activeSection === 'contact'
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper">
      <div className="relative mx-auto flex h-[76px] w-[calc(100%-40px)] max-w-[1280px] items-center gap-6 min-[901px]:h-[84px]">
        <a className="mr-auto inline-flex items-center gap-3.5 font-semibold max-[900px]:mr-0" href="#accueil" aria-label={`${site.name} — Accueil`}>
          <span className="grid size-[42px] place-items-center border border-ink font-display text-base">{site.initials}</span>
          <span className="font-display text-[17px] max-[900px]:hidden">{site.name}</span>
        </a>
        <div className="order-2 ml-auto flex items-center gap-3 min-[901px]:order-3 min-[901px]:ml-0">
          <ThemeToggle />
          <button className="min-h-[46px] cursor-pointer px-1 font-semibold min-[901px]:hidden" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? 'Fermer' : 'Menu'}</button>
        </div>
        <nav id="main-navigation" className={`${menuOpen ? 'block' : 'hidden'} absolute left-0 right-0 top-[76px] z-20 bg-menu p-6 text-menu-fg min-[901px]:static min-[901px]:order-2 min-[901px]:flex min-[901px]:items-center min-[901px]:gap-10 min-[901px]:bg-transparent min-[901px]:p-0 min-[901px]:text-ink`} aria-label="Navigation principale">
          <div className="flex flex-col min-[901px]:flex-row min-[901px]:items-center min-[901px]:gap-7">
            {navItems.map(({ label, id }) => {
              const isActive = activeSection === id
              return <a key={id} className={`relative border-b border-menu-line py-4 text-[15px] min-[901px]:border-0 min-[901px]:py-3.5 min-[901px]:text-[13px] ${isActive ? 'text-projects-accent min-[901px]:text-accent-strong' : ''} hover:underline hover:underline-offset-4`} href={`#${id}`} aria-current={isActive ? 'true' : undefined} onClick={closeMenu}>{label}</a>
            })}
          </div>
          <a className={`mt-[18px] flex items-center justify-between gap-7 border px-[18px] py-3.5 text-[15px] font-semibold transition-colors motion-reduce:transition-none min-[901px]:mt-0 min-[901px]:text-[13px] ${contactActive ? 'bg-menu-fg text-menu min-[901px]:bg-ink min-[901px]:text-paper' : 'border-menu-fg min-[901px]:border-ink'} hover:bg-menu-fg hover:text-menu min-[901px]:hover:bg-ink min-[901px]:hover:text-paper`} href="#contact" aria-current={contactActive ? 'true' : undefined} onClick={closeMenu}>Me contacter <Arrow /></a>
        </nav>
      </div>
    </header>
  )
}
