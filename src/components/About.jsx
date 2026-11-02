import Reveal from './Reveal'

export default function About() {
  return (
    <section className="relative isolate grid scroll-mt-[84px] grid-cols-1 gap-7 border-t border-line-soft py-20 min-[901px]:grid-cols-[.9fr_1.1fr] min-[901px]:gap-[80px] lg:gap-[140px] lg:py-[130px]" id="a-propos" aria-labelledby="a-propos-titre">
      <span aria-hidden="true" className="pointer-events-none absolute right-0 top-4 -z-10 font-display text-[100px] leading-none text-sand min-[901px]:top-6 min-[901px]:text-[180px]">01</span>
      <Reveal className="relative z-0">
        <p className="text-xs font-semibold tracking-[.04em] text-accent-strong">01 — À propos</p>
        <h2 id="a-propos-titre" className="mt-7 font-display text-[42px] font-medium leading-[.96] tracking-[-.055em] min-[901px]:text-[clamp(50px,6vw,80px)]">Construire,<br />comprendre,<br /><span className="italic text-accent">progresser.</span></h2>
      </Reveal>
      <Reveal className="pt-5 leading-[1.8] min-[901px]:pt-[72px]" delay={100}>
        <p className="mb-7 font-display text-[25px] leading-[1.4]">Étudiant en génie informatique à Conakry, je construis des interfaces web avec React et j’explore le mobile.</p>
        <p>Mon parcours en génie informatique m’aide à relier la logique du code aux besoins concrets des utilisateurs. J’apprends en construisant : chaque projet est l’occasion de mieux comprendre un problème, de structurer une solution et d’améliorer ma pratique. Aujourd’hui, je développe principalement des interfaces web avec React et Tailwind CSS, et j’explore aussi le mobile avec Kotlin, Jetpack Compose et SwiftUI.</p>
        <div className="mt-[50px] grid grid-cols-1 gap-2.5 border-t border-line pt-[22px] sm:grid-cols-[90px_1fr] sm:gap-7">
          <span className="text-xs font-semibold text-accent-strong">Approche</span>
          <p className="text-sm leading-[1.6]">Curiosité, progression continue et attention portée à l’utilité du produit.</p>
        </div>
      </Reveal>
    </section>
  )
}
