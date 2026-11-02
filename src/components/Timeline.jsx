import { timeline } from '../data/timeline'
import Reveal from './Reveal'
import SectionIntro from './SectionIntro'

export default function Timeline() {
  return (
    <section className="scroll-mt-[84px] border-t border-line-soft py-20 lg:py-[130px]" id="parcours" aria-labelledby="parcours-titre">
      <SectionIntro eyebrow="04 — Parcours" title="Apprendre par étapes, avancer par projets." titleId="parcours-titre" />
      <div className="border-t border-ink">
        {timeline.map((step, index) => <Reveal as="article" className="grid grid-cols-[42px_1fr] items-start gap-x-[18px] gap-y-2.5 border-b border-line py-8 min-[901px]:grid-cols-[70px_.9fr_2.1fr] min-[901px]:gap-11" key={step.title} delay={Math.min(index, 5) * 100}>
          <span className="font-display text-sm text-accent-strong">0{index + 1}</span>
          <p className="col-start-2 text-[13px] text-olive min-[901px]:col-start-auto">{step.date}</p>
          <div className="col-start-2 min-[901px]:col-start-auto"><p className="mb-2 text-xs font-semibold tracking-[.04em] text-accent-strong">{step.category}</p><h3 className="mb-2 font-display text-[25px] font-medium">{step.title}</h3><p className="max-w-[580px] text-sm leading-[1.6]">{step.text}</p></div>
        </Reveal>)}
      </div>
    </section>
  )
}
