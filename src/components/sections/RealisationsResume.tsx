import { Link } from 'react-router-dom'
import { REALISATIONS } from '@/data/realisations'

/**
 * RÉALISATIONS — le visuel d'abord, le texte ensuite.
 *
 * La version précédente affichait des cartes de texte : un nom, un secteur,
 * une phrase, une URL. Sur le site d'une agence web, c'était l'erreur la plus
 * coûteuse de la page. On annonçait « des sites en ligne, pas des maquettes »
 * sans montrer un seul pixel de ces sites.
 *
 * Les captures sont prises sur les sites réellement en production. Elles ne
 * sont pas retouchées et ne sont pas des maquettes d'appareil : le cadre, ici,
 * c'est le navigateur, et il n'y a rien à embellir.
 *
 * C'est aussi le seul actif de preuve du studio : ni avis, ni note, ni
 * témoignage n'existent, et on n'en inventera pas.
 */

const propre = (url: string) => url.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '')

export default function RealisationsResume() {
  return (
    <section id="realisations" data-ground="jour" className="border-b border-filet">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw] py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
          <div>
            <p className="mono text-gris">Réalisations</p>
            <h2 className="h2 text-encre mt-4 max-w-[16ch]">Ouvrez-les, ils sont en ligne</h2>
          </div>
          <p className="mesure text-gris">
            Ni avis clients, ni note Google, ni témoignages : l'activité est jeune et je
            n'en inventerai pas. À la place, quatre sites que vous pouvez ouvrir tout de
            suite, dans quatre registres différents.
          </p>
        </div>

        <ul className="cascade mt-14 grid md:grid-cols-2 gap-x-8 gap-y-14">
          {REALISATIONS.map((p, i) => (
            <li key={p.nom}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="group block">
                {/* Le cadre s'assombrit à la teinte du site présenté : chaque
                    projet amène sa propre couleur, la page cesse d'être monochrome. */}
                <div
                  className="carte relative overflow-hidden border border-filet transition-[transform,border-color] duration-500 group-hover:-translate-y-1.5"
                  style={{ backgroundColor: p.teinte }}
                >
                  <img
                    src={p.image}
                    alt={`Page d'accueil du site ${p.nom}`}
                    width={1600}
                    height={1000}
                    /* Les deux premières comptent pour le LCP de la section,
                       les suivantes attendent d'approcher de l'écran. */
                    loading={i < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full aspect-[16/10] object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <div>
                    <p className="mono text-gris">{p.secteur} · {p.nature}</p>
                    <h3 className="h3 text-encre text-xl md:text-2xl mt-2">{p.nom}</h3>
                  </div>
                  <span className="mono shrink-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                        style={{ color: 'var(--accent)' }}>
                    Ouvrir ↗
                  </span>
                </div>
                <p className="mt-3 text-[0.95rem] text-gris leading-relaxed max-w-[46ch]">{p.fait}</p>
                <p className="mono mt-3 text-gris">{propre(p.url)}</p>
              </a>
            </li>
          ))}
        </ul>

        <Link to="/realisations"
              className="pilule mono mono-md inline-block mt-14 px-7 py-3.5 border border-filet text-encre hover:border-encre transition-colors">
          Le détail de chaque projet
        </Link>
      </div>
    </section>
  )
}
