import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import SectionIntro from './SectionIntro'

export default function Projects() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 scroll-mt-[84px] bg-projects px-[max(20px,calc((100vw-1280px)/2))] py-20 text-projects-fg lg:py-[130px]" id="projets" aria-labelledby="projets-titre">
      <SectionIntro eyebrow="03 — Projets sélectionnés" title="Des idées mises à l’épreuve du réel." description="Des projets qui documentent ma progression, mes choix et ma manière de construire." titleId="projets-titre" dark />
      <div className="grid gap-14 md:gap-[72px]">{projects.map((project, index) => <ProjectCard key={project.name} project={project} delay={Math.min(index, 3) * 80} />)}</div>
    </section>
  )
}
