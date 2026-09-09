import CadreNavigateur from '@/components/CadreNavigateur'
import { REALISATIONS } from '@/data/realisations'
import { FORFAITS, SUR_MESURE, euros } from '@/content/offres'

/**
 * HERO — sur le mur.
 *
 * Le premier écran ne dit plus « voici ce que je vends », il MONTRE ce qui a
 * été livré. Quatre images visibles ou amorcées au lieu d'aucune, une seule
 * action au lieu de deux, et le seul bloc de texte centré du site a disparu.
 *
 * Le fond sombre n'est pas une préférence : sur l'ancien fond clair, trois des
 * quatre captures ressortaient à 1,05:1, exactement la valeur de la page. Sur
 * le mur, les mêmes fichiers passent à 15:1 sans qu'un pixel change.
 *
 * Le panneau de droite DÉBORDE du cadre, volontairement. Une image qui
 * s'arrête proprement dans sa colonne est un gabarit ; une image que le cadre
 * coupe est une mise en page.
 *
 * Le H1 reste en trois <span> écrits en dur : le texte est peint à la première
 * frame, il n'y a aucun décalage de mise en page, et un échec de script laisse
 * un hero complet. C'est la meilleure règle du dépôt et elle ne bouge pas.
 */

const vedette = REALISATIONS[0]
const [essentiel, vitrine] = FORFAITS
const propre = (u: string) => u.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '')

export default function Hero() {
  return (
    <section id="haut" data-sol="mur"
             className="relative bg-mur min-h-[100svh] flex flex-col justify-center overflow-clip pt-24 pb-0">
      <span className="grain-mur" aria-hidden="true" />

      <div className="relative z-10 w-full pl-6 md:pl-[5vw] pr-6 md:pr-0">
        <div className="grid lg:grid-cols-12 gap-y-12 lg:gap-x-6 items-center">

          {/* ── Colonnes 1 à 7 ─────────────────────────────── */}
          <div className="lg:col-span-7">
            <p className="mono flex items-center gap-3" style={{ color: 'var(--color-gris-nuit)' }}>
              <span aria-hidden="true" className="h-px w-7 shrink-0"
                    style={{ background: 'var(--color-outremer-nuit)' }} />
              Agence web et digitale — sites vitrines, boutiques en ligne, publicité
            </p>

            <h1 className="display sur mt-7"
                aria-label="Je dessine, j'écris, je développe, je publie. Vous gardez les clés.">
              <span aria-hidden="true" className="block">Je dessine, j'écris,</span>
              <span aria-hidden="true" className="block">je développe, je publie.</span>
              <span aria-hidden="true" className="block">Vous gardez les clés.</span>
            </h1>

            <p className="mt-9 mesure sur">
              Une seule personne dessine, écrit, développe et met en ligne, et c'est la
              même qui décroche quand vous appelez. Le nom de domaine, l'hébergement et le
              code source sont ouverts à votre nom dès le premier jour, avec vos
              coordonnées. Je n'ai aucun moyen technique de couper votre site.
              C'est volontaire.
            </p>

            {/* Une seule action. Deux boutons de poids égal, c'est une hésitation. */}
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a href="#contact"
                 className="action inline-flex items-center px-7 py-4 bg-papier"
                 style={{ color: 'var(--color-mur)' }}>
                Réserver 20 minutes
              </a>
              <a href="#tarifs"
                 className="action sur border-b pb-1 transition-colors"
                 style={{ borderColor: 'rgba(242,239,233,0.4)' }}>
                Voir les cinq prix →
              </a>
            </div>

            <p className="mono mt-10" style={{ color: 'var(--color-gris-nuit)' }}>
              Un prix ferme
              <span style={{ color: 'var(--color-outremer-nuit)' }}> · </span>Une date écrite sur le devis
              <span style={{ color: 'var(--color-outremer-nuit)' }}> · </span>Un seul interlocuteur
              <span style={{ color: 'var(--color-outremer-nuit)' }}> · </span>Zéro abonnement
            </p>

            <p className="mt-4 text-[0.9375rem]" style={{ color: 'var(--color-gris-nuit)' }}>
              Cinq forfaits fermes, de {euros(essentiel.prix)} à {euros(SUR_MESURE.prix)} € HT.
              Celui que je conseille : {vitrine.nom}, {euros(vitrine.prix)} €.
            </p>
          </div>

          {/* ── L'objet, colonnes 8 à 12, débordant à droite ── */}
          <div className="lg:col-span-5 lg:-mr-[5vw]">
            <div data-projet={vedette.cle}
                 className="lavis relative p-5 md:p-6 bg-creux planche-teintee"
                 style={{ borderTop: '1px solid var(--color-lisere)' }}>
              <a href={vedette.url} target="_blank" rel="noopener noreferrer"
                 className="groupe block" aria-label={`Ouvrir ${vedette.nom}, ${propre(vedette.url)}`}>
                <CadreNavigateur domaine={propre(vedette.url)} cle={vedette.cle} className="glisse planche">
                  <img src={vedette.image} alt={`Page d'accueil du site ${vedette.nom}`}
                       width={1600} height={1000} fetchPriority="high" decoding="async"
                       className="w-full aspect-[16/10] object-cover object-top" />
                </CadreNavigateur>
              </a>
            </div>
          </div>
        </div>

        {/* ── La pellicule, volontairement coupée par le pli ── */}
        <div className="mt-14 lg:mt-20 border-t bord pt-6 pr-0">
          <p className="mono" style={{ color: 'var(--color-gris-nuit)' }}>
            Quatre sites en production — ouvrez-les
          </p>
          <ul className="mt-5 flex gap-5 overflow-x-auto pb-2 snap-x lg:overflow-visible
                         [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {REALISATIONS.map((p) => (
              <li key={p.nom} className="shrink-0 w-[232px] snap-start">
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="groupe block">
                  <CadreNavigateur domaine={propre(p.url)} cle={p.cle} compact className="glisse planche">
                    <img src={p.image} alt={`Page d'accueil du site ${p.nom}`}
                         width={1600} height={1000} loading="lazy" decoding="async"
                         className="w-full aspect-[16/10] object-cover object-top" />
                  </CadreNavigateur>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
