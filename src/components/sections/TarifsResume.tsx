import { Link } from 'react-router-dom'
import { FORFAITS, SUR_MESURE, MENTION_TVA, euros } from '@/content/offres'

/**
 * TARIFS, EN RÉSUMÉ — sur l'accueil.
 *
 * Le prix ne disparaît pas de la page d'accueil sous prétexte qu'il a
 * désormais sa propre page : un visiteur qui ne le trouve pas en trois
 * secondes repart. On montre les cinq montants, le périmètre en une ligne,
 * et on renvoie vers le détail complet.
 *
 * Les prix ne sont jamais animés : opacité pleine dès le HTML, aucun
 * compteur qui monte. On ne met pas en scène ce qu'on n'a pas besoin de
 * déguiser.
 */

const TOUS = [...FORFAITS, SUR_MESURE]

export default function TarifsResume() {
  return (
    <section id="tarifs" data-ground="jour" className="border-b border-filet">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw] py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="mono text-gris">Tarifs</span>
            <h2 className="h2 text-encre mt-4 max-w-[18ch]">Des prix fermes, affichés</h2>
          </div>
          <p className="mesure text-gris">
            Le prix affiché est le prix facturé. Aucun « à partir de », aucune
            remise, et ce qui n'est pas inclus est écrit sous chaque forfait.
          </p>
        </div>

        <ul className="cascade carte overflow-hidden mt-12 grid sm:grid-cols-2 xl:grid-cols-5 border-t border-l border-filet">
          {TOUS.map((f) => (
            <li key={f.id} className="border-r border-b border-filet p-6">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="h3 text-encre text-lg">{f.nom}</h3>
                {'recommande' in f && f.recommande && (
                  <span className="mono shrink-0" style={{ color: 'var(--accent)' }}>Conseillé</span>
                )}
              </div>
              <p className="mt-4 text-encre" style={{ fontVariationSettings: "'wdth' 110, 'wght' 800", fontSize: '1.9rem', lineHeight: 1 }}>
                {euros(f.prix)} €
              </p>
              <p className="mono mt-2 text-gris">HT · {f.delai} j ouvrés</p>
              <p className="mt-4 text-[0.9rem] text-gris leading-relaxed">{f.cible.split('.')[0]}.</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
          <Link to="/tarifs" className="pilule mono mono-md px-7 py-3.5 bg-encre text-jour">
            Voir le détail de chaque forfait
          </Link>
          <p className="mono text-gris">{MENTION_TVA}</p>
        </div>
      </div>
    </section>
  )
}
