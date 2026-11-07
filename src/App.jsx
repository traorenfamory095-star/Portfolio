import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import { useActiveSection } from './hooks/useActiveSection'
import { sectionIds } from './data/navigation'

export default function App() {
  const activeSection = useActiveSection(sectionIds)
  return (
    <div className="min-h-screen overflow-x-clip">
      <a className="absolute left-2 top-2 z-50 -translate-y-[200%] bg-ink px-4 py-3 text-sm font-semibold text-paper focus:translate-y-0" href="#contenu">Aller au contenu</a>
      <Header activeSection={activeSection} />
      <main id="contenu" className="mx-auto w-[calc(100%-40px)] max-w-[1280px]"><Hero /><About /><Skills /><Projects /><Timeline /><Contact /></main>
      <Footer />
    </div>
  )
}
