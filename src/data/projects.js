// Chaque projet alimente le composant <ProjectCard />.
// Pour ajouter un projet plus tard : copier un bloc ci-dessous, c'est tout.
//
// Champs :
//   github  → adresse du dépôt (ex. 'https://github.com/mon-compte/quizzy')
//   demo    → adresse du site en ligne (ex. 'https://quizzy.vercel.app')
//   image   → capture d'écran déposée dans /public/projets/ :
//             { src: '/projets/quizzy.webp', alt: '…', width: 1280, height: 800 }
//   Tant que github / demo / image sont vides, ils ne s'affichent pas.
//
// ⚠ À VÉRIFIER par N'Famory : les technologies de Quizzy et de TaskFlow.
import Quizzy from '../assets/projet_image/quizzy.webp'
import AfroClass from '../assets/projet_image/afroclass.webp'
import Karan from '../assets/projet_image/karan.png'
import RecetteCurpertino from '../assets/projet_image/recettecupertino.png'
import SmartResto from '../assets/projet_image/smartresto.webp'
import TaskFlow from '../assets/projet_image/taskflow.webp'


export const projects = [
  {
    number: '01',
    name: 'Quizzy',
    type: 'Application web',
    tone: 'sand',
    summary: 'Une application de quiz conçue pour rendre la pratique plus simple et plus engageante.',
    note: '',
    tags: ['JavaScript'], // ← à compléter (ex. React, Tailwind CSS)
    github: 'https://github.com/shammah-lab/Quizzy-Application-PrimeTek-26/pulls',
    demo: 'https://youtu.be/el2th9EuKuU',
    image: {
      src: Quizzy,
      alt: 'Capture d’écran de Quizzy',
      width: 1200,
      height: 800,
    },
  },
  {
    number: '02',
    name: 'TaskFlow',
    type: 'Gestion de tâches',
    tone: 'olive',
    summary: 'Une application pour organiser ses projets et ses tâches au quotidien.',
    note: 'Création, modification et suppression, authentification simulée, filtres et recherche.',
    tags: ['React', 'JSON Server'], // ← à vérifier
    github: 'https://github.com/traorenfamory095-star/Taskflow-react',
    demo: 'https://youtu.be/o-6iLSFtqb8',
    image: {
      src: TaskFlow,
      alt: 'Capture d’écran de TaskFlow',
      width: 1200,
      height: 800,
    },
  },
  {
    number: '03',
    name: 'SmartResto',
    type: 'Projet d’équipe · en cours',
    tone: 'terracotta',
    summary: 'Une application de gestion de restaurant : de la commande en salle à la cuisine, jusqu’à la facture.',
    note: 'Du choix des plats à la gestion des commandes, en passant par la facturation et le suivi des stocks.',
    tags: ['Nuxt', 'Tailwind CSS', 'API'],
    github: 'https://github.com/traorenfamory095-star/smartresto',
    demo: 'https://youtu.be/QcqrtzPZZSM',
    image:{
      src: SmartResto,
      alt: 'Capture d’écran de SmartResto',
      width: 1200,
      height: 800,
    },
  },
  {
  number: '04',
  name: 'Karan',
  type: 'Projet d’équipe · mobile',
  tone: 'olive',
  summary: 'Une application mobile de révision pour accompagner les élèves dans leur préparation aux examens du BAC et du BEPC.',
  note: 'Projet Android en développement, avec une approche offline-first.',
  tags: ['Kotlin', 'Jetpack Compose', 'Room'],
  github: 'https://github.com/traorenfamory095-star/karan',
  demo: 'https://youtu.be/6KB4szsme-o',
  image: {
      src: Karan,
      alt: 'Capture d’écran de Karan',
      width: 1200,
      height: 800,
    },
},
{
  number: '05',
  name: 'RecetteCupertino',
  type: 'Projet iOS',
  tone: 'sand',
  summary: 'Une application iOS autour de la découverte et de la consultation de recettes de cuisine.',
  note: 'Des recettes qui vous facilitent la vie, avec une interface simple et intuitive.',
  tags: ['Swift', 'SwiftUI'],
  github: 'https://github.com/traorenfamory095-star/Recette-de-cupertino',
  demo: 'https://youtu.be/SNXIwTSaodw',
  image: {
      src: RecetteCurpertino,
      alt: 'Capture d’écran de RecetteCurpertino',
      width: 1200,
      height: 800,
    },
},
{
  number: '06',
  name: 'AfroClass',
  type: 'Projet personnel · en développement',
  tone: 'terracotta',
  summary: 'Une plateforme éducative dédiée aux élèves africains, pour apprendre, réviser et progresser grâce aux cours, exercices, quiz et outils d’accompagnement.',
  note: 'Projet en développement. Une vision orientée vers l’accessibilité de l’éducation en Afrique.',
  tags: ['React', 'Tailwind CSS', 'JavaScript'],
  github: 'https://github.com/traorenfamory095-star/AfroClass',
  demo: '',
  image: {
      src: AfroClass,
      alt: 'Capture d’écran de Afroclass',
      width: 1200,
      height: 800,
    },
}
]
