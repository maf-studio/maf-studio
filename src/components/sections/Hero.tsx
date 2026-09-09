import BookingButton from '@/components/BookingButton'
import Porte from '@/components/Porte'
import { FORFAITS, MENTION_TVA, euros } from '@/content/offres'

/**
 * HERO — qualifier ou disqualifier le visiteur en trois secondes, avec
 * quatre faits vérifiables et rien d'autre.
 *
 * Le H1 est écrit en trois <span> EN DUR. Aucun découpage au runtime : le
 * texte est peint à la première frame, à sa taille et son opacité
 * définitives. Le LCP est acquis tout de suite, il n'y a aucun CLS, et un
 * échec de script laisse un hero complet. Ce qui bouge, c'est l'ombre.
 *
 * Le filet horizontal à 78 % de la hauteur est le SOL : au-dessus tout est
 * debout, en dessous tout est couché.
 */

const [essentiel, complet] = FORFAITS

const PLAQUE: [string, string][] = [
  ['Forfait', essentiel.nom],
  ['Prix', `${euros(essentiel.prix)} € HT`],
  ['Délai', `${essentiel.delai} j ouvrés`],
  ['Pages', '1'],
  ['Textes', 'Rédigés'],
  ['Formation', '1 h'],
  ['Propriété', '100 %'],
]

export default function Hero() {
  return (
    <section id="haut" data-ground="jour"
             className="relative min-h-[100svh] flex items-center border-b border-filet overflow-clip">
      {/* Le sol. */}
      <div aria-hidden="true" className="absolute inset-x-0 top-[78%] h-px bg-filet" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-[6vw] pt-28 pb-16 md:pt-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-end">

          <div className="lg:col-span-8">
            <div className="ombre-coupee">
            <Porte>
              <h1 className="display text-encre"
                  aria-label="Votre site en ligne en 5 jours ouvrés.">
                <span aria-hidden="true" className="block">Votre site</span>
                <span aria-hidden="true" className="block">en ligne en</span>
                <span aria-hidden="true" className="block">5 jours ouvrés.</span>
              </h1>
            </Porte>
            </div>

            <p className="mt-14 mesure text-gris">
              Agence web et digitale. Site vitrine, boutique en ligne, et la publicité qui
              les alimente. Une seule personne conçoit, rédige et met votre site en ligne,
              puis vous en remet toutes les clés.{' '}
              <span className="text-encre">
                Le site, le nom de domaine et le code sont à votre nom dès le premier jour.
              </span>
            </p>

            {/* Sans prix dans le premier écran, la page ne qualifie personne. */}
            <p className="mono mt-8 text-encre">
              {euros(essentiel.prix)} € HT
              <span className="text-gris"> · </span>Livré en {essentiel.delai} jours ouvrés
              <span className="text-gris"> · </span>Site et code à votre nom
              <span className="text-gris"> · </span>Sans abonnement
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <BookingButton className="plaque-pleine bg-encre text-jour mono mono-md px-7 py-4 text-center">
                Réserver 20 minutes
              </BookingButton>
              <a href="#tarifs"
                 className="mono mono-md px-7 py-4 text-center text-encre border-b border-encre self-start sm:self-auto">
                Voir les prix
              </a>
            </div>

            <p className="mono mt-12 pt-5 border-t border-filet text-gris">
              Quatre sites en production, ouvrez-les
              <span className="hidden sm:inline"> · </span><br className="sm:hidden" />
              Site, domaine et code à votre nom
              <span className="hidden sm:inline"> · </span><br className="sm:hidden" />
              Travail à distance, partout en France
            </p>
          </div>

          {/* La plaque signalétique. Pas d'illustration, pas de maquette
              d'écran : la plaque porte le prix et la définition du délai. */}
          <div className="lg:col-span-4 lg:col-start-9">
            <Porte>
              <dl className="biseau bg-jour border border-filet p-6 md:p-7">
                {PLAQUE.map(([k, v]) => (
                  <div key={k} className="flex items-baseline gap-2 py-[7px] first:pt-0 last:pb-0">
                    <dt className="mono text-gris shrink-0">{k}</dt>
                    <span aria-hidden="true" className="flex-1 border-b border-dotted border-filet translate-y-[-3px]" />
                    <dd className="mono text-encre shrink-0">{v}</dd>
                  </div>
                ))}
              </dl>
            </Porte>
            <p className="mono mt-3 text-gris">
              {complet.nom} 6 pages : {euros(complet.prix)} € HT — {complet.delai} j ouvrés
            </p>
            <p className="mono mt-2 text-gris opacity-70">{MENTION_TVA}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
