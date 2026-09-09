# CLAUDE.md

Guide de travail pour Claude Code (claude.ai/code) sur ce dépôt.

## Commandes

```bash
npm run dev        # serveur de développement Vite
npm run build      # vérification de types puis bundle de production
npm run lint       # ESLint
npm run preview    # prévisualise le build de production
```

Aucune suite de tests n'est configurée.

## Environnement

Copier `.env.example` vers `.env.local` et renseigner les identifiants EmailJS :

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Le gabarit EmailJS attend exactement `from_name`, `reply_to`, `besoin`, `message`.
Les variables `VITE_` sont figées au build : les changer impose un redéploiement.

## Ce que vend MAF Studio

**Agence web et digitale.** Deux axes, et rien d'autre : créer des sites, et piloter
la publicité qui les alimente. L'automatisation et le CRM ont été retirés de l'offre
et des tarifs — ils ne subsistent que dans la biographie, comme expérience passée.

## La règle qui prime sur toutes les autres

MAF Studio n'a **aucun avis client, aucun témoignage, aucune note, aucun résultat
mesuré, aucun compteur de clients, aucune récompense**. Rien de tout cela ne doit
apparaître sur le site, ni dans les données structurées (`aggregateRating` et
`review` sont proscrits), ni dans une copie générée.

Les seuls chiffres autorisés sont ceux que MAF Studio contrôle et peut écrire au
contrat : un prix ferme, un délai en jours ouvrés, un nombre de pages, un nombre de
tours de corrections, et les quatre ans passés chez Skooleo. Quand un mécanisme
commercial réclame une preuve qui n'existe pas, on lui substitue un engagement
contractuel ou une réalisation vérifiable en ouvrant son lien.

Le site vouvoie, partout, sans exception.

## Architecture

Site vitrine à page unique. Trois routes : `/`, `/mentions-legales`, `/confidentialite`,
plus une vraie 404. Les deux pages légales sont en `noindex, follow` et chargées en
`React.lazy`.

**Pile de providers** (`main.tsx`) : `HelmetProvider` → `LazyMotion` → `MotionConfig` → `App`

**Composition de la page** (`src/pages/Home.tsx`), douze sections ancrées :
`#haut · #preuves · #realisations · #offre · #livrables · #tarifs · #options ·
#garanties · #methode · #studio · #faq · #contact`

Les anciennes ancres `#services`, `#a-propos` et `#avantages` sont redirigées dans
`App.tsx` : des liens ont été envoyés par e-mail.

## Sources de vérité

Le contenu ne vit jamais dans le JSX. Quatre fichiers, et eux seuls :

| Fichier | Contenu |
|---|---|
| `src/content/offres.ts` | forfaits, abonnements, options, garanties, paiement, ancrage |
| `src/content/faq.ts` | les questions, consommées aussi par le `FAQPage` de `JsonLd.tsx` |
| `src/content/sections.ts` | les douze ancres et l'index du zénith |
| `src/data/realisations.ts` | réalisations livrées et contributions partielles |

**Ne jamais réécrire un prix ailleurs que dans `offres.ts`.** La règle précédente du
dépôt — « garder trois endroits synchronisés » — est exactement ce qui avait produit
la dérive : le code affichait 500 / 1 090 / 300 pendant que cette documentation
annonçait 690 / 1 490 / 390.

## Direction artistique — Héliographe

La page est posée sous une source de lumière unique dont la position **est** celle du
scroll. Ombres longues en haut, zénith exactement sur `#tarifs` — aucune ombre à cet
endroit — puis retour des ombres jusqu'au pied de page.

Trois lois :

1. **Une source.** Tout ce qui est debout projette dans la même direction, au même
   instant. Un élément qui a sa propre ombre est un bug. Donc : aucun dégradé, aucun
   halo, aucune ombre CSS diffuse, aucun second accent.
2. **Le scroll est l'heure.** Le scroll produit une durée, pas des entrées.
3. **Ce qui bouge, c'est l'ombre, jamais le texte.** Le texte est peint à la première
   frame ; ce qui s'anime est un clone `aria-hidden` derrière lui (`Porte.tsx`).

**Règle de discrétion :** la métaphore n'est jamais nommée dans un texte visible.

**Objets debout** (donc porteurs d'ombre, deux maximum par écran) : titres, plaques,
captures, boutons pleins, traits du sommaire. Tout le reste est couché sur le plan et
ne projette rien.

**Thème** : clair uniquement. `--jour #F2F0EA`, `--penombre #DFDCD3`, `--encre #141310`,
`--gris #6B6A62`, `--ombre #D9D6CC`, accent `--soleil #D9541E`. Une seule section
sombre, `#studio`.

L'accent se prend **toujours** par son rôle, jamais par sa valeur : `--accent` pour
tout texte d'accent et tout anneau de focus, `--accent-large` réservé au texte
≥ 24 px bold, aux filets et aux états d'interface. `--soleil` échoue en corps de texte
(3,5:1) ; cette distinction est verrouillée par `[data-ground]` dans `index.css`.

**Angle unique : 24°.** Il régit les ombres, le biseau des plaques et le sens des
décalages. Aucun autre angle dans le site.

**Typographie** : Mona Sans (display et corps) et Martian Mono (index, prix, délais,
labels, mentions légales — interdit en corps et au-dessus de 16 px). Auto-hébergées
via `@fontsource-variable`, aucun appel à `fonts.googleapis.com`. Zéro italique.

**Interdits opposables** : dégradés, halos, glassmorphism, particules, arrondis > 2 px,
curseur custom, preloader, compteurs animés, découpage de texte lettre par lettre.

## Mouvement

Grammaire posée une seule fois dans `main.tsx`. Une courbe d'entrée
`cubic-bezier(.16, 1, .3, 1)`, trois durées : 140 ms (micro-état), 300 ms (changement
d'état), 800 ms (entrée). Amplitudes de 16 à 32 px, jamais 80.

**Rien ne bouge au repos.** Aucune boucle, aucun autoplay, aucune pulsation. Le seul
mouvement continu est la course du soleil, et elle est le scroll.

**Aucun élément n'est à `opacity: 0` par défaut.** L'état final est l'état par défaut.

Un **seul** abonnement au scroll dans tout le site (`src/components/Soleil.tsx`), qui
écrit les `transform` d'un registre (`src/lib/ombres.ts`) monté par
`IntersectionObserver`. Ne jamais écrire de variable CSS sur `:root` par frame : cela
invalide le style de tout le document.

`prefers-reduced-motion` est une deuxième maquette, pas un interrupteur : le soleil
est figé **bas**, pas court. Les abonnements impératifs sont sautés entièrement, pas
seulement mis à zéro.

**Les prix ne sont jamais animés.** Opacité 1 dans le HTML, valeur finale immédiate,
aucun compteur. Ne pas mettre en scène le prix est un argument commercial.

## Piège à connaître

Le zénith de la course du soleil est la position mesurée de `#tarifs`. Si les sections
sont réordonnées, il atterrit silencieusement sur la mauvaise section : aucune erreur,
aucun test rouge. Voir `src/components/Soleil.tsx` et `src/content/sections.ts`.

## SEO

Les balises de partage sont **statiques dans `index.html`** : ce sont les seules que
lisent LinkedIn, WhatsApp et Slack, qui n'exécutent pas de JavaScript. `SEO.tsx` est
réduit aux seules balises qui varient par route — titre, canonique, robots. Ne pas
réintroduire de duplication : les deux se marchaient dessus, et sur les pages légales
deux directives `robots` contradictoires cohabitaient.

`JsonLd.tsx` est alimenté par `offres.ts`, `faq.ts` et `realisations.ts`. Les `@id`
du graphe sont `#business` et `#website` : ne jamais créer de section portant ces id.

## Vie privée

Police auto-hébergée, aucune mesure d'audience avec cookie, et **Cal.com injecté au
premier clic** seulement (`BookingButton.tsx`) : l'adresse IP du visiteur n'est pas
transmise à un tiers sans interaction de sa part. C'est un actif commercial, pas un
détail technique.

## Alias

`@/` pointe vers `src/`.
