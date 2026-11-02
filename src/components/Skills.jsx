import { skills } from '../data/skills'
import Reveal from './Reveal'
import SectionIntro from './SectionIntro'

export default function Skills() {
  return (
    <section className="scroll-mt-[84px] border-t border-line-soft py-20 lg:py-[130px]" id="competences" aria-labelledby="competences-titre">
      <SectionIntro eyebrow="02 — Compétences" title="Des bases solides. Une pratique qui évolue." description="Un aperçu honnête des technologies que j’utilise aujourd’hui et de celles que j’approfondis." titleId="competences-titre" />
      <div className="border-t border-ink">
        {skills.map((group, index) => <Reveal as="article" className="grid min-h-[130px] grid-cols-[45px_1fr] items-start gap-x-5 gap-y-4 border-b border-line py-[30px] min-[901px]:grid-cols-[80px_1fr_1.7fr] min-[901px]:gap-10" key={group.title} delay={Math.min(index, 3) * 100}>
          <span className="font-display text-sm text-accent-strong">{group.index}</span>
          <h3 className="font-display text-[22px] font-medium min-[901px]:text-[27px]">{group.title}</h3>
          <ul className="col-start-2 flex flex-wrap gap-x-[18px] gap-y-2 min-[901px]:col-start-auto">
            {group.items.map((item) => <li className="inline-flex min-h-7 items-center border-b border-sand text-[13px]" key={item}>{item}</li>)}
          </ul>
        </Reveal>)}
      </div>
    </section>
  )
}
