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
    <section id="tarifs" data-sol="papier" className="border-b bord">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw] py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="mono sourd">Tarifs</span>
            <h2 className="h2 sur mt-4 max-w-[18ch]">Des prix fermes, affichés</h2>
          </div>
          <p className="mesure sourd">
            Le prix affiché est le prix facturé. Aucun « à partir de », aucune
            remise, et ce qui n'est pas inclus est écrit sous chaque forfait.
          </p>
        </div>

        <ul className="cascade overflow-hidden mt-12 grid sm:grid-cols-2 xl:grid-cols-5 border-t border-l bord">
          {TOUS.map((f) => (
            <li key={f.id} className="border-r border-b bord p-6">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="h3 sur text-lg">{f.nom}</h3>
                {'recommande' in f && f.recommande && (
                  <span className="mono shrink-0" style={{ color: 'var(--accent)' }}>Conseillé</span>
                )}
              </div>
              <p className="mt-4 sur" style={{ fontVariationSettings: "'wdth' 110, 'wght' 800", fontSize: '1.9rem', lineHeight: 1 }}>
                {euros(f.prix)} €
              </p>
              <p className="mono mt-2 sourd">HT · {f.delai} j ouvrés</p>
              <p className="mt-4 text-[0.9rem] sourd leading-relaxed">{f.cible.split('.')[0]}.</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
          <Link to="/tarifs" className="pilule mono action px-7 py-3.5 bg-encre sur">
            Voir le détail de chaque forfait
          </Link>
          <p className="mono sourd">{MENTION_TVA}</p>
        </div>
      </div>
    </section>
  )
}
