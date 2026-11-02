import Reveal from './Reveal'

export default function SectionIntro({ eyebrow, title, description, titleId, dark = false }) {
  return (
    <Reveal className="mb-14 grid grid-cols-1 gap-5 min-[901px]:mb-20 min-[901px]:grid-cols-[.7fr_2.3fr] min-[901px]:gap-[60px]">
      <p className={`text-xs font-semibold tracking-[.04em] ${dark ? 'text-projects-accent' : 'text-accent-strong'}`}>{eyebrow}</p>
      <h2 id={titleId} className="max-w-[850px] text-balance font-display text-[clamp(42px,6vw,76px)] font-medium leading-none tracking-[-.05em]">{title}</h2>
      {description && <p className={`max-w-[570px] text-[15px] leading-[1.7] ${dark ? 'text-projects-muted' : 'text-olive'} min-[901px]:col-start-2`}>{description}</p>}
    </Reveal>
  )
}
