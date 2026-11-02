import { useEffect } from 'react'
import { Link } from 'react-router'
import StyleGuide from '../components/StyleGuide'
import ThemeToggle from '../components/ThemeToggle'

export default function GuidePage() {
  useEffect(() => {
    const previous = document.title
    document.title = 'Guide de style — N’Famory Traoré'
    return () => { document.title = previous }
  }, [])
  return (
    <div className="min-h-screen overflow-x-clip">
      <header className="sticky top-0 z-30 border-b border-line bg-paper">
        <div className="mx-auto flex h-[76px] w-[calc(100%-40px)] max-w-[1280px] items-center">
          <Link className="py-3.5 text-[13px] font-semibold hover:text-accent-strong" to="/">← Retour au portfolio</Link>
          <div className="ml-auto"><ThemeToggle /></div>
        </div>
      </header>
      <main className="mx-auto w-[calc(100%-40px)] max-w-[1280px] py-20 pb-[120px]">
        <p className="text-xs font-semibold tracking-[.04em] text-accent-strong">Guide de style</p>
        <h1 className="my-5 mb-6 max-w-[850px] font-display text-[clamp(42px,6vw,76px)] font-medium leading-none tracking-[-.05em]">Une identité pensée comme un objet éditorial.</h1>
        <p className="mb-14 max-w-[570px] text-[15px] leading-[1.7]">Les fondations visuelles utilisées pour conserver un portfolio chaleureux, cohérent et facile à reproduire.</p>
        <StyleGuide />
        <Link className="mt-10 inline-flex min-h-[50px] items-center border border-ink px-5 text-[13px] font-semibold transition-colors hover:bg-ink hover:text-paper motion-reduce:transition-none" to="/">← Retour au portfolio</Link>
      </main>
    </div>
  )
}
