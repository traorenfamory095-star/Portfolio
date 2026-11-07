import { navItems } from '../data/navigation'
import { site } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mx-auto grid min-h-[220px] w-[calc(100%-40px)] max-w-[1280px] grid-cols-1 items-center gap-6 py-14 min-[901px]:grid-cols-[1fr_auto_auto] min-[901px]:gap-14 min-[901px]:py-0">
      <div className="flex items-center gap-[18px]"><span className="grid size-[42px] place-items-center border border-ink font-display text-base">{site.initials}</span><p className="font-display text-[15px] leading-[1.4]">{site.footerSignature[0]}<br />{site.footerSignature[1]}</p></div>
      <nav className="flex flex-wrap gap-x-[22px] gap-y-1 text-[13px]" aria-label="Liens utiles">
        {navItems.slice(1).map(({ label, id }) => <a className="py-2.5 hover:text-accent-strong" href={`#${id}`} key={id}>{label}</a>)}
        <a className="py-2.5 hover:text-accent-strong" href="#contact">Contact</a>
      </nav>
      <p className="text-[13px] text-olive">© {year} {site.name}</p>
    </footer>
  )
}
