import BookingButton from '@/components/BookingButton'
import { FORFAITS, ANCRAGE, MENTION_TVA, euros } from '@/content/offres'

/**
 * TARIFS — LE ZÉNITH.
 *
 * C'est le point bas de l'animation du site, et c'est volontaire : ombres à
 * zéro, aucun biseau, aucun mouvement. Le soleil est exactement au-dessus.
 *
 * RÈGLE À NE PAS DÉFAIRE DANS SIX MOIS : les prix ne sont JAMAIS animés.
 * Opacité 1 dans le HTML, valeur finale immédiate, aucun compteur qui monte.
 * Ne pas mettre en scène le prix est un argument commercial — on ne déguise
 * pas ce qu'on n'a pas besoin de déguiser.
 *
 * Tous les montants viennent de src/content/offres.ts. Aucun prix n'est écrit
 * en dur ici, ni ailleurs.
 */

export default function Tarifs() {
  return (
    <section id="tarifs" data-ground="jour" className="border-b border-filet">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw] py-24 md:py-32">
        <span className="mono text-gris">06 — Tarifs</span>
        <h2 className="h2 text-encre mt-4">Et combien ça coûte</h2>
        <p className="mt-6 mesure text-gris">
          Quatre prix fermes. Le prix affiché est le prix facturé. Ce qui n'est pas
          inclus est écrit sous chaque forfait, dans le même corps de texte que ce
          qui l'est.
        </p>

        <div className="mt-14 grid md:grid-cols-2 xl:grid-cols-4 border-t border-l border-filet">
          {FORFAITS.map((f) => (
            <article key={f.id} className="border-r border-b border-filet p-7 flex flex-col">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="h3 text-encre text-xl">{f.nom}</h3>
                {f.recommande && (
                  <span className="mono shrink-0" style={{ color: 'var(--accent)' }}>
                    Celui que je recommande
                  </span>
                )}
              </div>

              {/* Jamais animé. Jamais un compteur. */}
              <p className="mt-5 text-encre" style={{ fontVariationSettings: "'wdth' 110, 'wght' 800", fontSize: 'clamp(2rem,3.4vw,2.75rem)', lineHeight: 1 }}>
                {euros(f.prix)} €
              </p>
              <p className="mono mt-2 text-gris">HT · {f.delai} jours ouvrés</p>

              <p className="mt-5 text-[0.95rem] text-gris leading-relaxed">{f.cible}</p>

              <ul className="mt-6 pt-5 border-t border-filet space-y-2">
                {f.inclus.map((i) => (
                  <li key={i} className="text-[0.95rem] text-encre flex gap-2.5">
                    <span aria-hidden="true" className="mt-[0.6em] h-px w-2.5 shrink-0" style={{ background: 'var(--accent-large)' }} />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>

              {/* À égalité typographique avec les inclusions, jamais en plus petit. */}
              <div className="mt-6 pt-5 border-t border-filet grow">
                <p className="mono text-gris">Pas inclus</p>
                <ul className="mt-2 space-y-2">
                  {f.exclus.map((e) => (
                    <li key={e} className="text-[0.95rem] text-gris">{e}</li>
                  ))}
                </ul>
              </div>

              <BookingButton className="plaque-pleine mt-7 bg-encre text-jour mono mono-md px-5 py-3.5 w-full">
                Demander ce forfait
              </BookingButton>
            </article>
          ))}
        </div>

        {/* L'ANCRAGE — le seul dispositif qui transforme un prix en
            démonstration refaisable par le prospect lui-même. Il n'a de sens
            que si toutes les options citées figurent sur la page avec leur
            prix : voir la section Options. */}
        <div className="mt-10 border border-filet p-7 md:p-9">
          <p className="text-encre text-lg md:text-xl leading-relaxed mesure">
            Reconstitué à la carte avec les options de cette page, le périmètre du
            forfait {FORFAITS[1].nom} coûterait{' '}
            <span style={{ fontVariationSettings: "'wght' 800" }}>{euros(ANCRAGE.total)} € HT</span>.
            Il est à <span style={{ fontVariationSettings: "'wght' 800" }}>{euros(ANCRAGE.prixReel)} €</span>.
            Vous pouvez refaire le calcul.
          </p>
          <ul className="mt-6 pt-5 border-t border-filet grid sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-2">
            {ANCRAGE.lignes.map((l) => (
              <li key={l.libelle} className="mono text-gris flex justify-between gap-3 border-b border-filet py-2">
                <span>{l.libelle}</span>
                <span className="text-encre shrink-0">{euros(l.montant)} €</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 space-y-3 mesure">
          <p className="mono text-gris">{MENTION_TVA}</p>
          <p className="text-[0.95rem] text-gris leading-relaxed">
            Si vous ne récupérez pas la TVA, le prix affiché est le prix que vous payez,
            soit 20 % de moins qu'une agence assujettie à prestation identique.
          </p>
          <p className="text-[0.95rem] text-gris leading-relaxed">
            Selon votre région, des aides à la digitalisation peuvent financer une partie
            du projet. Elles se demandent avant de signer : renseignez-vous auprès de
            France Num, de votre CCI ou de votre chambre de métiers. Je ne les instruis
            pas et je ne les chiffre pas.
          </p>
          <p className="text-[0.95rem] text-gris leading-relaxed">
            Après la première année incluse : renouvellement du domaine, environ 15 € par
            an, et hébergement, environ 5 € par mois, facturés directement à votre nom.
            Ou 49 € par mois si vous prenez le Socle, qui les couvre. C'est tout.
          </p>
        </div>
      </div>
    </section>
  )
}
