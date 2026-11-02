// Palette du style guide : une valeur en mode clair, une en mode sombre.
// Les valeurs sont déclarées dans src/index.css ; « swatch » est la classe de couleur du thème,
// affichée dans les deux thèmes grâce à l'attribut data-theme des pastilles.
export const palette = [
  { name: 'Crème papier', swatch: 'bg-paper', role: 'Fond', light: '#F4EFE6', dark: '#1B1A17' },
  { name: 'Noir encre', swatch: 'bg-ink', role: 'Texte', light: '#252722', dark: '#F1EBDF' },
  { name: 'Terre cuite', swatch: 'bg-accent', role: 'Accent', light: '#B85C38', dark: '#D98A68' },
  { name: 'Terre cuite foncée', swatch: 'bg-accent-strong', role: 'Texte accentué, bouton', light: '#9C4524', dark: '#D98A68' },
  { name: 'Beige sable', swatch: 'bg-sand', role: 'Fonds de section', light: '#DED2C1', dark: '#2C2A25' },
  { name: 'Vert olive', swatch: 'bg-olive', role: 'Texte secondaire', light: '#4F523A', dark: '#A3A67F' },
]
