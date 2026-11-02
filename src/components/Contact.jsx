import { contacts } from '../data/site'
import Arrow from './Arrow'
import Reveal from './Reveal'

const isDev = import.meta.env.DEV
export default function Contact() {
  const rows = contacts.filter((contact) => contact.href || isDev)
  return (
    <section className="relative left-1/2 grid w-screen -translate-x-1/2 scroll-mt-[84px] grid-cols-1 gap-12 bg-sand px-[max(20px,calc((100vw-1280px)/2))] py-20 lg:grid-cols-[1.2fr_.8fr] lg:gap-[110px] lg:py-[130px]" id="contact" aria-labelledby="contact-titre">
      <Reveal>
        <p className="text-xs font-semibold tracking-[.04em] text-accent-strong">05 — Contact</p>
        <h2 id="contact-titre" className="my-6 mb-[30px] max-w-[740px] font-display text-[46px] font-medium leading-[.94] tracking-[-.055em] md:text-[clamp(52px,7vw,90px)]">Un projet en tête ? <em className="text-accent-strong">Parlons-en.</em></h2>
        <p className="max-w-[580px] leading-[1.7]">Vous avez un projet, une opportunité ou simplement envie d’échanger autour du développement ? Écrivez-moi, je réponds volontiers.</p>
      </Reveal>
      {rows.length > 0 && <Reveal className="self-center border-y border-ink py-[30px]" delay={100}>
        <p className="mb-3 text-xs tracking-[.04em] text-olive">Coordonnées</p>
        <ul>{rows.map(({ id, label, value, href }) => <li key={id} className="border-b border-line-soft last:border-0">
          {href ? <a className="flex items-center justify-between gap-4 py-[18px] text-[15px] hover:text-accent-strong" href={href} {...(id === 'email' ? {} : { target: '_blank', rel: 'noopener noreferrer' })}><span><strong className="block font-semibold">{label}</strong><small className="mt-[3px] block text-[13px] text-olive">{value}</small></span><Arrow /></a> : <span className="flex items-center justify-between gap-4 py-[18px] text-[15px] text-olive"><span><strong className="block font-semibold">{label}</strong><small className="mt-[3px] block text-[13px]">à renseigner dans src/data/site.js</small></span></span>}
        </li>)}</ul>
      </Reveal>}
    </section>
  )
}
