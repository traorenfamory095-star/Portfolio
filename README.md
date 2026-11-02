# Portfolio — N’Famory Traoré

Portfolio de développeur web, projet individuel du Codecamp PrimeTek Academy (21 octobre – 3 novembre 2026).

| | |
|---|---|
| **Site en ligne** | _à renseigner après le déploiement Vercel_ : `https://….vercel.app` |
| **Maquette Figma** | _à renseigner_ : lien en lecture seule |
| **Dépôt** | _à renseigner_ : `https://github.com/<mon-compte>/portfolio` |

## Technologies

- **React 19** + **Vite** : composants réutilisables, démarrage et build très rapides.
- **React Router 8** : deux pages (`/` et `/guide-style`), navigation sans rechargement.
- **Tailwind CSS 4** : la mise en page, les espacements, la typographie, les états interactifs et le responsive sont réalisés avec des classes utilitaires directement dans les composants. `src/index.css` conserve uniquement le thème (couleurs clair / sombre, polices) : aucune autre règle CSS, aucun style en ligne. Les réglages globaux (défilement doux, police et fond du `body`, contour de focus, `prefers-reduced-motion`) sont eux aussi des classes utilitaires, posées sur `<html>` et `<body>` dans `index.html` ou avec `motion-reduce:` dans les composants.
- **Fontsource** : les polices Fraunces et DM Sans sont hébergées avec le site (pas de requête vers Google Fonts, donc plus rapide).
- Hébergement : **Vercel**.

### Pourquoi React ?
_À préparer pour la présentation, avec mes mots. Pistes : je le connais déjà (cours OpenClassrooms, WEF Agency) ; une carte de projet = un composant alimenté par un tableau de données ; Vite donne un retour immédiat pendant le développement ; c’est le même mode de pensée que Nuxt/Vue utilisé dans SmartResto._

## Lancer le projet

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # génère le dossier dist/
npm run preview    # teste la version construite
```

## Organisation du code

```
src/
├── pages/           ← HomePage (accueil) et GuidePage (/guide-style)
├── data/            ← tout le contenu, séparé du code
│   ├── site.js        nom, phrases, coordonnées de contact
│   ├── projects.js    les projets (une carte par objet)
│   ├── skills.js      les compétences
│   ├── timeline.js    le parcours
│   ├── palette.js     les couleurs du guide de style
│   └── navigation.js  le menu
├── components/      ← un composant par section / élément
├── hooks/           ← useTheme, useActiveSection
└── index.css        ← thème uniquement : couleurs (clair / sombre) et polices
```

**Ajouter un projet** : copier un bloc dans `src/data/projects.js`. Rien d’autre à modifier.

## Défi personnel

**1. Mode sombre qui respecte le système** (`src/hooks/useTheme.js`, `index.html`)
Au premier chargement, le site suit `prefers-color-scheme`. Le bouton de l’en-tête permet de changer, et le choix est mémorisé (`localStorage`). Un petit script dans `index.html` applique le thème *avant* l’affichage pour éviter un éclair blanc.

**2. Animations au défilement** (`src/components/Reveal.jsx`)
Fondu + glissement de 24 px avec `IntersectionObserver`, une seule fois par élément. Les états visuels sont composés avec des classes utilitaires Tailwind (`opacity`, `translate`, `transition`). La préférence `prefers-reduced-motion` est respectée.

_Ce que j’ai appris : à compléter avec mes mots avant la présentation._

## Fidélité maquette / site

_Tableau à compléter : une capture Figma et une capture du site, côte à côte, pour chaque section._

| Section | Maquette Figma | Site en ligne |
|---|---|---|
| En-tête | _capture_ | _capture_ |
| Accueil | _capture_ | _capture_ |
| À propos | _capture_ | _capture_ |
| Compétences | _capture_ | _capture_ |
| Projets | _capture_ | _capture_ |
| Parcours | _capture_ | _capture_ |
| Contact | _capture_ | _capture_ |
| Guide de style | _capture_ | _capture_ |
| Pied de page | _capture_ | _capture_ |
| Mobile (390 px) | _capture_ | _capture_ |

### Écarts avec la maquette

| Écart | Pourquoi |
|---|---|
| En-tête **fixe** (reste en haut au défilement) | Amélioration de navigation : le menu et le bouton « Me contacter » restent accessibles. |
| Texte de petite taille passé de 9–11 px à **12–14 px** | Lisibilité et accessibilité (minimum 12 px). |
| **Terre cuite foncée** (`#9C4524`) pour le petit texte et le bouton principal | Le contraste de `#B85C38` avec le fond crème est d’environ 4:1, sous les 4,5:1 requis. La couleur d’origine est gardée pour les grands titres et le décor. |
| Vert olive du texte assombri (`#4F523A`) | Même raison : contraste insuffisant sur le fond sable. |
| Cartes de projets **identiques** (image à gauche, texte à droite) | Demande de design : la maquette alternait les dispositions. |
| Bouton « Me contacter » retiré du hero, remplacé par « Télécharger mon CV (PDF) » | Le bouton du menu joue déjà ce rôle. Le bouton CV s’affiche quand `cvUrl` est renseigné. |
| **Mode sombre** et **bouton de thème** | Ajoutés pour le défi personnel. ⚠ _À dessiner dans le fichier Figma._ |
| **Animations au défilement** | Ajoutées pour le défi personnel. ⚠ _À noter dans le prototype Figma._ |
| Textes provisoires remplacés par des textes réels | Contenu final. |
| Polices hébergées avec le site | Performance (pas de requête vers Google Fonts). |
| Le **guide de style** est une page séparée (`/guide-style`), accessible depuis le pied de page, avec un bouton « Retour au portfolio » | La maquette le plaçait en section 06 : cela allège la page d'accueil. ⚠ _À mettre à jour dans Figma._ |

## Rapport de qualité (Lighthouse)

Mesure locale, version mobile, avant déploiement :

| Catégorie | Objectif | Score |
|---|---|---|
| Performance | 85 | 99 |
| Accessibilité | 90 | 100 |
| Bonnes pratiques | 90 | 100 |
| SEO | 90 | 100 |

_À refaire sur le site déployé (Chrome → Outils de développement → Lighthouse → Mobile), puis joindre la capture :_

![Rapport Lighthouse](docs/lighthouse.png)

## Accessibilité

Un seul `h1`, titres hiérarchisés, lien « Aller au contenu », navigation au clavier, focus visible, textes alternatifs, menu mobile fermé par la touche Échap, liens externes annoncés « s’ouvre dans un nouvel onglet ».

## À faire avant la présentation

- [ ] Renseigner e-mail, WhatsApp, GitHub, LinkedIn dans `src/data/site.js`.
- [ ] Créer un CV professionnel si nécessaire, puis le déposer dans `public/` et renseigner `cvUrl` (le bouton reste masqué tant que cette valeur est vide).
- [ ] Vérifier les technologies de Quizzy et de TaskFlow dans `src/data/projects.js`.
- [ ] Renseigner les liens `github` et `demo` de chaque projet.
- [ ] Ajouter les captures d’écran dans `public/projets/` (SmartResto à la fin du projet).
- [ ] Mettre le vrai lien du site dans `index.html` (`og:url` et `og:image` en adresse complète).
- [ ] Mettre à jour la maquette Figma (mode sombre, écarts ci-dessus) et compléter les tableaux.
- [ ] Faire relire les textes.

## Déploiement

1. Pousser le code sur GitHub (branche `main`).
2. vercel.com → *Add New* → *Project* → importer le dépôt `portfolio`.
3. Vercel détecte Vite (commande `npm run build`, dossier `dist`) → *Deploy*.
   Le fichier `vercel.json` renvoie toutes les adresses vers `index.html` : sans lui, ouvrir `/guide-style` directement donnerait une erreur 404.
4. Mettre le lien du site dans la description du dépôt et dans le profil GitHub.
