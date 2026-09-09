import { Link } from 'react-router-dom'
import { REALISATIONS } from '@/data/realisations'

/**
 * RÉALISATIONS, EN RÉSUMÉ — sur l'accueil.
 *
 * C'est le seul actif de preuve réel du studio : ni avis, ni note, ni
 * témoignage n'existent, et on n'en inventera pas. Quatre sites en
 * production, ouvrables en un clic. Un site qu'on peut visiter est une
 * preuve ; un avis anonyme n'en est pas une.
 */
const propre = (url: string) => url.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '')

export default function RealisationsResume() {
  return (
    <section id="realisations" data-ground="jour" className="border-b border-filet">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw] py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="mono text-gris">Réalisations</span>
            <h2 className="h2 text-encre mt-4 max-w-[18ch]">Des sites en ligne, pas des maquettes</h2>
          </div>
          <p className="mesure text-gris">
            Ni avis clients, ni note Google, ni témoignages : l'activité est jeune et je
            n'en inventerai pas. À la place, quatre sites que vous pouvez ouvrir tout de
            suite.
          </p>
        </div>

        <div className="cascade carte overflow-hidden mt-12 border border-filet grid sm:grid-cols-2 lg:grid-cols-4">
          {REALISATIONS.map((p, i) => (
            <a key={p.nom} href={p.url} target="_blank" rel="noopener noreferrer"
               className={`group p-7 flex flex-col hover:bg-penombre transition-colors border-filet
                 ${i < REALISATIONS.length - 1 ? 'border-b sm:border-b-0 sm:border-r' : ''}
                 ${i < 2 ? 'sm:border-b lg:border-b-0' : ''}
                 ${i === 1 ? 'sm:border-r-0 lg:border-r' : ''}`}>
              <span className="mono text-gris">{p.secteur}</span>
              <h3 className="mt-2 h3 text-encre text-xl">{p.nom}</h3>
              <p className="mt-3 text-[0.9rem] text-gris leading-relaxed grow">{p.fait}</p>
              <span className="mono mt-5 pt-4 border-t border-filet break-all" style={{ color: 'var(--accent)' }}>
                {propre(p.url)}
              </span>
            </a>
          ))}
        </div>

        <Link to="/realisations" className="pilule mono mono-md inline-block mt-8 px-7 py-3.5 border border-filet text-encre hover:border-encre transition-colors">
          Toutes les réalisations
        </Link>
      </div>
    </section>
  )
}
