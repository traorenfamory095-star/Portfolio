import { palette } from '../data/palette'
import Button from './Button'
import Reveal from './Reveal'

export default function StyleGuide() {
  return (
    <div>
      <Reveal className="grid grid-cols-1 border-l border-t border-ink md:grid-cols-[1.15fr_.85fr]">
        <article className="min-h-[340px] border-b border-r border-line p-[26px] md:p-8">
          <h2 className="mb-[30px] text-xs font-semibold tracking-[.04em] text-accent-strong">Couleurs (clair / sombre)</h2>
          <ul className="grid gap-3.5">{palette.map((color) => <li className="grid grid-cols-[64px_1fr] items-center gap-4 md:grid-cols-[76px_1fr]" key={color.name}>
            <span className="flex h-[38px] border border-line" aria-hidden="true"><span data-theme="light" className={`flex-1 ${color.swatch}`} /><span data-theme="dark" className={`flex-1 ${color.swatch}`} /></span>
            <p className="text-[13px] font-semibold">{color.name} <em className="font-normal not-italic text-olive">· {color.role}</em><small className="mt-[3px] block text-xs font-normal text-olive">{color.light} · {color.dark}</small></p>
          </li>)}</ul>
        </article>
        <article className="min-h-[340px] border-b border-r border-line p-[26px] md:p-8">
          <h2 className="mb-[30px] text-xs font-semibold tracking-[.04em] text-accent-strong">Typographie</h2>
          <p className="font-display text-base text-accent-strong">Fraunces</p><p className="mt-[18px] max-w-[520px] font-display text-[40px] leading-[.98] tracking-[-.05em] md:text-[clamp(40px,5vw,64px)]">Des idées qui prennent forme.</p>
          <div className="mt-[42px] border-t border-line pt-[18px]"><strong className="text-[13px]">DM Sans</strong><p className="mt-2 max-w-[480px] text-[13px] leading-[1.6]">Une police sobre pour les paragraphes, les interfaces et les annotations.</p></div>
        </article>
        <article className="min-h-[340px] border-b border-r border-line p-[26px] md:p-8">
          <h2 className="mb-[30px] text-xs font-semibold tracking-[.04em] text-accent-strong">Principes</h2>
          <ol>{['La typographie avant la décoration.','Des couleurs franches et peu nombreuses.','Des compositions asymétriques mais lisibles.','Des captures réelles plutôt que des artifices.'].map((item, index) => <li className="grid grid-cols-[44px_1fr] gap-5 border-b border-line-soft py-[18px] font-display text-xl" key={item}><span className="font-body text-xs text-accent-strong">0{index + 1}</span>{item}</li>)}</ol>
        </article>
        <article className="min-h-[340px] border-b border-r border-line p-[26px] md:p-8">
          <h2 className="mb-[30px] text-xs font-semibold tracking-[.04em] text-accent-strong">Actions</h2>
          <div className="flex flex-wrap gap-3 max-[520px]:flex-col"><Button href="#projets" arrow="down">Action principale</Button><Button href="#contact" variant="secondary">Action secondaire</Button></div>
          <p className="mt-10 max-w-[360px] text-[13px] leading-[1.6] text-olive">Focus visible, contraste lisible et zones tactiles confortables.</p>
        </article>
      </Reveal>
    </div>
  )
}
