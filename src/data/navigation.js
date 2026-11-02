// [libellé, identifiant de la section]
// « Contact » n'est pas ici : c'est le gros bouton « Me contacter » de l'en-tête.
export const navItems = [
  { label: 'Accueil', id: 'accueil' },
  { label: 'À propos', id: 'a-propos' },
  { label: 'Compétences', id: 'competences' },
  { label: 'Projets', id: 'projets' },
  { label: 'Parcours', id: 'parcours' },
]

// Toutes les sections suivies par la navigation (pour savoir laquelle est active).
export const sectionIds = [...navItems.map((item) => item.id), 'contact']
