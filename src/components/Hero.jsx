import { site } from '../data/site'
import Button from './Button'

export default function Hero() {
  const [firstName, ...lastName] = site.name.split(' ')
  return (
    <section className="grid min-h-0 grid-cols-1 items-center gap-[70px] py-16 pb-20 min-[901px]:min-h-[760px] min-[901px]:grid-cols-[1.4fr_.6fr] min-[901px]:gap-[60px] min-[901px]:py-20 min-[901px]:pb-[110px] xl:gap-[110px]" id="accueil">
      <div>
        <p className="text-xs font-semibold tracking-[.04em] text-accent-strong">{site.role}</p>
        <h1 className="my-6 mb-9 font-display text-[clamp(62px,9vw,132px)] font-medium leading-[.86] tracking-[-.06em] min-[901px]:text-[clamp(82px,9vw,132px)]">{firstName}<br />{lastName.join(' ')}<span className="text-accent" aria-hidden="true">.</span></h1>
        <p className="max-w-[670px] font-display text-[clamp(27px,2.8vw,40px)] leading-[1.12] tracking-[-.03em]">{site.statement}</p>
        <p className="mt-6 max-w-[590px] text-[15px] leading-[1.75] min-[901px]:ml-24 min-[901px]:pl-0">{site.description}</p>
        <div className="mt-[38px] flex flex-wrap gap-3 min-[901px]:ml-24">
          <Button href="#projets" arrow="down">Voir mes projets</Button>
          {site.cvUrl && <Button href={site.cvUrl} variant="secondary" arrow="down" download>Télécharger mon CV (PDF)</Button>}
        </div>
      </div>
      <div className="relative min-h-[370px] border-y border-ink px-6 py-7 min-[901px]:min-h-[470px]">
        <span className="absolute -top-2 left-6 h-[15px] w-11 -rotate-2 bg-accent" />
        <div className="text-xs text-olive">{site.carnet.label}</div>
        <p className="mt-[74px] font-display text-2xl italic leading-[1.25] min-[901px]:mt-[100px] min-[901px]:text-[27px]">{site.carnet.quote}</p>
        <div className="absolute bottom-[54px] left-6 -rotate-3 font-display text-[38px] leading-[.86] tracking-[-.05em] min-[901px]:text-[43px]">{firstName}<br /><span className="text-accent">{lastName.join(' ')}</span></div>
        <span className="absolute bottom-[22px] right-6 text-xs text-olive">{site.carnet.coordinate}</span>
      </div>
    </section>
  )
}
