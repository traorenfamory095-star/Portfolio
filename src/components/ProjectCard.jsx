import Arrow from './Arrow'
import Reveal from './Reveal'

const isDev = import.meta.env.DEV
const tones = {
  olive: 'bg-tone-olive text-tone-light',
  terracotta: 'bg-tone-terracotta text-tone-dark',
  sand: 'bg-tone-sand text-tone-dark',
}

function ProjectLink({ href, children }) {
  if (!href) return isDev ? <span className="flex gap-2 py-1.5 text-[13px] font-normal text-projects-muted">{children} — lien à renseigner</span> : null
  return <a className="flex gap-[9px] py-1.5 text-[13px] font-semibold text-projects-fg hover:text-projects-accent hover:underline hover:underline-offset-4" href={href} target="_blank" rel="noopener noreferrer">{children}<Arrow /><span className="sr-only">(s’ouvre dans un nouvel onglet)</span></a>
}

export default function ProjectCard({ project, delay = 0 }) {
  const { number, name, type, tone, summary, note, tags, github, demo, image } = project
  return (
    <Reveal as="article" className="grid grid-cols-1 border-t border-projects-line pt-6 min-[901px]:grid-cols-[45%_1fr]" delay={delay}>
      <div className={`grid min-h-0 place-items-center p-5 min-[901px]:min-h-[340px] min-[901px]:p-9 ${tones[tone] || tones.sand}`}>
        {image ? <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" className="aspect-[16/10] h-auto w-full object-cover" /> :
          <div className="relative grid aspect-[4/3] w-full place-items-center border border-dashed border-current text-center min-[901px]:aspect-[16/10]" role="img" aria-label={`Capture d’écran de ${name} à venir`}>
            <span className="absolute font-display text-[140px] leading-none opacity-[.12]" aria-hidden="true">+</span>
            <p className="relative font-display text-[28px]">{name}<small className="mt-2 block font-body text-xs font-medium">Capture d’écran à ajouter</small></p>
          </div>}
      </div>
      <div className="flex flex-col justify-center py-8 min-[901px]:pl-10 min-[901px]:pr-2 lg:pl-14">
        <p className="flex flex-wrap gap-x-[18px] gap-y-2 text-xs tracking-[.03em] text-projects-muted"><span className="text-projects-accent">{number}</span>{type}</p>
        <h3 className="my-4 mt-5 font-display text-[42px] font-medium leading-none tracking-[-.045em] min-[901px]:text-[clamp(40px,4vw,54px)]">{name}</h3>
        <p className="font-display text-xl leading-[1.45]">{summary}</p>
        {note && <p className="mt-4 text-sm leading-[1.6] text-projects-muted">{note}</p>}
        <ul className="mt-6 flex flex-wrap gap-x-[18px] gap-y-2">{tags.map((tag) => <li className="inline-flex min-h-7 items-center border-b border-tag-line text-[13px] text-projects-muted" key={tag}>{tag}</li>)}</ul>
        <div className="mt-7 flex flex-col gap-1 border-t border-projects-line pt-[18px] sm:flex-row sm:flex-wrap sm:gap-x-[26px]">
          <ProjectLink href={demo}>Voir le projet</ProjectLink><ProjectLink href={github}>Code source</ProjectLink>
        </div>
      </div>
    </Reveal>
  )
}
