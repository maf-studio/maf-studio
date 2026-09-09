import BookingButton from '@/components/BookingButton'
import Porte from '@/components/Porte'
import { TOUS_LES_PROJETS } from '@/data/realisations'
import { FORFAITS, euros } from '@/content/offres'

/**
 * HERO — qualifier ou disqualifier le visiteur en trois secondes, avec
 * quatre faits vérifiables et rien d'autre.
 *
 * Composition centrée, resserrée, beaucoup d'air : on entre par le titre,
 * on sort par un des deux boutons. Aucun objet décoratif, aucune maquette
 * d'écran, aucune illustration.
 *
 * Le H1 est écrit en trois <span> EN DUR. Aucun découpage au runtime : le
 * texte est peint à la première frame, à sa taille et son opacité
 * définitives. Le LCP est acquis tout de suite, il n'y a aucun CLS, et un
 * échec de script laisse un hero complet. Ce qui bouge, c'est l'ombre.
 */

const [essentiel, vitrine] = FORFAITS

export default function Hero() {
  return (
    <section id="haut" data-ground="jour" className="relative border-b border-filet overflow-clip">
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-[6vw] pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="mx-auto text-center">

          <div className="ombre-coupee inline-block">
            <Porte>
              <h1 className="display text-encre" aria-label="Votre site en ligne en 5 jours ouvrés.">
                <span aria-hidden="true" className="block">Votre site</span>
                <span aria-hidden="true" className="block">en ligne en</span>
                <span aria-hidden="true" className="block">5 jours ouvrés.</span>
              </h1>
            </Porte>
          </div>

          <p className="mt-10 mx-auto max-w-[62ch] text-gris">
            Agence web et digitale. Site vitrine, boutique en ligne, et la publicité qui
            les alimente. Une seule personne conçoit, rédige et met votre site en ligne,
            puis vous en remet toutes les clés.{' '}
            <span className="text-encre">
              Le site, le nom de domaine et le code sont à votre nom dès le premier jour.
            </span>
          </p>

          {/* Le prix doit être au-dessus de la ligne de flottaison. Sans lui,
              la page ne qualifie personne et fait perdre son temps à tout le
              monde, à commencer par le visiteur. */}
          <p className="mono mt-8 text-encre">
            {euros(essentiel.prix)} € HT
            <span className="text-gris"> · </span>Livré en {essentiel.delai} jours ouvrés
            <span className="text-gris"> · </span>Site et code à votre nom
            <span className="text-gris"> · </span>Sans abonnement
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <BookingButton className="pilule bg-encre text-jour mono mono-md px-8 py-4">
              Réserver 20 minutes
            </BookingButton>
            <a href="#tarifs"
               className="pilule mono mono-md px-8 py-4 text-encre border border-filet hover:border-encre transition-colors">
              Voir les prix
            </a>
          </div>

          <p className="mono mt-6 text-gris">
            {vitrine.nom}, textes rédigés et formation incluses : {euros(vitrine.prix)} € HT
          </p>
        </div>
      </div>

      {/* Bande de projets, immédiatement sous le pli.
          Le libellé est « J'ai travaillé pour » et non « ils m'ont fait
          confiance » : Skooleo est un employeur pendant quatre ans, pas un
          client, et la seconde formule serait inexacte. */}
      <div className="border-t border-filet">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw] py-7 flex flex-wrap items-center justify-center gap-x-9 gap-y-2">
          <span className="mono text-gris shrink-0">J'ai travaillé pour</span>
          {TOUS_LES_PROJETS.map((p) => (
            <a key={p.nom} href={p.url} target="_blank" rel="noopener noreferrer"
               className="h3 text-encre/45 hover:text-encre text-base md:text-lg py-1.5 transition-colors">
              {p.nom}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
