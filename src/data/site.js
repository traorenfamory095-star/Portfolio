// ─────────────────────────────────────────────────────────────
// Informations générales du site.
// Tout ce qui est « à renseigner » est regroupé ici : tant qu'une
// valeur est vide (''), le lien correspondant n'est pas affiché.
// ─────────────────────────────────────────────────────────────

// À RENSEIGNER par N'Famory (laisser '' pour masquer) :
const profile = {
  email: '', //            ex. 'prenom.nom@gmail.com'
  whatsappNumber: '', //   chiffres seulement, avec l'indicatif. ex. '224XXXXXXXXX'
  githubUser: '', //       ex. 'mon-compte'
  linkedinSlug: '', //     la fin de l'adresse linkedin.com/in/<slug>
  cvUrl: '', //            ex. '/cv-nfamory-traore.pdf' (fichier à déposer dans /public)
}

export const site = {
  name: 'N’Famory Traoré',
  initials: 'NT',
  role: 'Développeur web & logiciel',
  statement: 'Développeur web à Conakry. Je construis des applications claires et rapides.',
  description:
    'Étudiant en Licence 1 Génie informatique à l’Institut Polytechnique, je travaille avec React et Tailwind CSS et j’explore le mobile avec Kotlin et SwiftUI.',
  carnet: {
    label: 'Carnet de travail — 2026',
    // Espaces insécables ( ) : le guillemet « » ne reste jamais seul en bout de ligne.
    quote: '« Apprendre en construisant, comprendre en faisant. »',
    coordinate: 'Génie informatique · Web · Mobile',
  },
  footerSignature: ['Développer avec attention.', 'Progresser avec intention.'],
  cvUrl: profile.cvUrl,
}

// Les moyens de contact : la liste est construite à partir des valeurs ci-dessus.
export const contacts = [
  {
    id: 'email',
    label: 'E-mail',
    value: profile.email,
    href: profile.email ? `mailto:${profile.email}` : '',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: profile.whatsappNumber ? `+${profile.whatsappNumber}` : '',
    href: profile.whatsappNumber ? `https://wa.me/${profile.whatsappNumber}` : '',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: profile.githubUser ? `github.com/${profile.githubUser}` : '',
    href: profile.githubUser ? `https://github.com/${profile.githubUser}` : '',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: profile.linkedinSlug ? `linkedin.com/in/${profile.linkedinSlug}` : '',
    href: profile.linkedinSlug ? `https://www.linkedin.com/in/${profile.linkedinSlug}` : '',
  },
]
