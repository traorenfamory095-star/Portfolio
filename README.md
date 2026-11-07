# Portfolio — N’Famory Traoré

Portfolio de développeur web, projet individuel du Codecamp PrimeTek Academy (21 octobre – 3 novembre 2026).

| | |
|---|---|
| **Site en ligne** | _à renseigner après le déploiement Vercel_ : `https://….vercel.app` |
| **Maquette Figma** | https://www.figma.com/make/befN56t7e6EdUdix7ho2P0/Portfolio-N%E2%80%99Famory-Traor%C3%A9?t=lYc6ed94dQQGK8ZK-1&preview-route=%2F%23projets |
| **Dépôt** | https://github.com/traorenfamory095-star/Portfolio |

## Technologies

- **React 19** + **Vite** : composants réutilisables, démarrage et build très rapides.
- **React Router 8** : deux pages (`/` et `/guide-style`), navigation sans rechargement.
- **Tailwind CSS 4** : la mise en page, les espacements, la typographie, les états interactifs et le responsive sont réalisés avec des classes utilitaires directement dans les composants. `src/index.css` conserve uniquement le thème (couleurs clair / sombre, polices) : aucune autre règle CSS, aucun style en ligne. Les réglages globaux (défilement doux, police et fond du `body`, contour de focus, `prefers-reduced-motion`) sont eux aussi des classes utilitaires, posées sur `<html>` et `<body>` dans `index.html` ou avec `motion-reduce:` dans les composants.
- **Fontsource** : les polices Fraunces et DM Sans sont hébergées avec le site (pas de requête vers Google Fonts, donc plus rapide).
- Hébergement : **Vercel**.

### Pourquoi React ?
Je souhaite à profondir mes connaissances en react d'où le choix pour une meilleur évolution à l'avenir

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
├── pages/           ← HomePage (accueil)
├── data/            ← tout le contenu, séparé du code
│   ├── site.js        nom, phrases, coordonnées de contact
│   ├── projects.js    les projets (une carte par objet)
│   ├── skills.js      les compétences
│   ├── timeline.js    le parcours
│   └── navigation.js  le menu
├── components/      ← un composant par section / élément
├── hooks/           ← useTheme, useActiveSection
└── index.css        ← thème uniquement : couleurs (clair / sombre) et polices
```



## Défi personnel

**1. Mode sombre qui respecte le système** (`src/hooks/useTheme.js`, `index.html`)
Au premier chargement, le site suit `prefers-color-scheme`. Le bouton de l’en-tête permet de changer, et le choix est mémorisé (`localStorage`). Un petit script dans `index.html` applique le thème *avant* l’affichage pour éviter un éclair blanc.

**2. Animations au défilement** (`src/components/Reveal.jsx`)
Fondu + glissement de 24 px avec `IntersectionObserver`, une seule fois par élément. Les états visuels sont composés avec des classes utilitaires Tailwind (`opacity`, `translate`, `transition`). La préférence `prefers-reduced-motion` est respectée.

## Ce que j’ai appris : 

Les animations au défilement. J’ai appris à utiliser IntersectionObserver pour déclencher une animation quand un élément entre dans l’écran, au lieu d’écouter l’événement scroll, qui est plus coûteux. Le composant Reveal observe chaque élément une seule fois, puis cesse de l’observer (disconnect). Je n’anime que opacity et translate-y, deux propriétés peu coûteuses pour le navigateur. J’ai aussi appris qu’une animation doit rester accessible : prefers-reduced-motion désactive les mouvements pour les personnes qui le demandent, et la classe js posée dans index.html évite que le contenu reste caché si JavaScript est coupé. Autre leçon propre à Tailwind : les classes doivent être écrites en entier dans le code (d’où la table des délais), sinon Tailwind ne les détecte pas.

Le hook useTheme. J’ai appris à lire la préférence du système avec prefers-color-scheme, et à mémoriser le choix de l’utilisateur dans localStorage. Le point le plus instructif : sans précaution, la page s’affiche d’abord en clair avant de passer en sombre (un « éclair blanc »). Je l’ai réglé avec un petit script dans le <head> de index.html, qui applique le thème avant l’affichage, avant même que React ne démarre. J’ai aussi appris à protéger l’accès à localStorage avec un try/catch, car il peut être bloqué.

Le test de performance avec Lighthouse. J’ai appris à lire un rapport et surtout à faire le tri : beaucoup de lignes sont des suggestions sans effet sur le score, et seules quelques-unes méritent d’être corrigées. Le vrai problème était mes images : environ 1,3 Mo de trop, à cause d’une photo non redimensionnée. Je l’ai corrigé en réduisant sa taille, en la convertissant en WebP et en ajoutant width et height pour éviter les décalages de mise en page. J’ai aussi appris que Lighthouse vérifie le contraste, y compris sur un simple chiffre décoratif, et qu’on peut le masquer aux lecteurs d’écran avec aria-hidden. Enfin, il faut mesurer sur le site déployé, pas seulement en local : les résultats peuvent différer.

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
| SEO | 90 | 100 |_

![Rapport Lighthouse](docs/lighthouse.png)