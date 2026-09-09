import { REALISATIONS, CONTRIBUTIONS, TOUS_LES_PROJETS } from '@/data/realisations'

/**
 * Réalisations — le seul actif de preuve réel du site.
 *
 * Deux groupes séparés à dessein. Les quatre premiers sites ont été conçus et
 * livrés de bout en bout. Les deux suivants sont des interventions partielles :
 * les mélanger reviendrait à revendiquer un travail qui n'a pas été fait, et
 * ça se vérifie en ouvrant le lien.
 *
 * Aucun résultat client n'apparaît ici. Aucun n'est mesuré, donc aucun n'est
 * affiché — la preuve, c'est le site qui tourne, pas un chiffre invérifiable.
 */

const propre = (url: string) => url.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '')

export default function Realisations() {
  return (
    <section id="realisations" className="border-b border-rule">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <h2 className="display-flat text-bone text-4xl md:text-6xl max-w-[20ch]">
          Des sites en ligne, pas des maquettes
        </h2>
        <p className="mt-6 text-dim text-lg max-w-[56ch]">
          Tout ce qui suit tourne aujourd'hui et s'ouvre en un clic. Allez
          vérifier vous-même — c'est plus utile qu'un témoignage.
        </p>

        {/* Barre de noms : tous les projets, sans prestation attribuée ici. */}
        <div className="mt-12 pt-8 border-t border-rule flex flex-wrap items-center gap-x-9 gap-y-3">
          <span className="text-xs text-dim shrink-0">Ils m'ont fait confiance</span>
          {TOUS_LES_PROJETS.map((p) => (
            <a
              key={p.nom}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="display-flat text-bone/55 hover:text-magenta text-lg md:text-xl py-2 transition-colors"
            >
              {p.nom}
            </a>
          ))}
        </div>

        {/* ── Sites livrés de bout en bout ───────────────────── */}
        <div className="mt-12 border border-rule bg-ink-2 grid sm:grid-cols-2 lg:grid-cols-4">
          {REALISATIONS.map((p, i) => (
            <a
              key={p.nom}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-8 flex flex-col hover:bg-ink-3 transition-colors border-rule
                ${i < REALISATIONS.length - 1 ? 'border-b sm:border-b-0 sm:border-r' : ''}
                ${i < 2 ? 'sm:border-b lg:border-b-0' : ''}
                ${i === 1 ? 'sm:border-r-0 lg:border-r' : ''}`}
            >
              <div className="text-xs text-dim">{p.secteur}</div>
              <h3 className="mt-2 display-flat text-bone text-2xl group-hover:text-magenta transition-colors">
                {p.nom}
              </h3>
              <p className="mt-4 text-sm text-dim leading-relaxed grow">{p.fait}</p>
              <span className="mt-6 pt-5 border-t border-rule text-sm text-magenta break-all">
                {propre(p.url)}
              </span>
            </a>
          ))}
        </div>

        {/* ── Interventions partielles ────────────────────────
            Étiquetées comme telles : c'est ce qui rend le reste crédible. */}
        <div className="mt-4 border border-rule bg-ink-2">
          <div className="px-8 pt-7 pb-2 text-xs text-dim">
            J'y suis intervenu sans avoir réalisé l'ensemble
          </div>
          <div className="grid md:grid-cols-2">
            {CONTRIBUTIONS.map((p, i) => (
              <a
                key={p.nom}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-8 flex flex-col hover:bg-ink-3 transition-colors ${
                  i === 0 ? 'border-b md:border-b-0 md:border-r border-rule' : ''
                }`}
              >
                <div className="text-xs text-dim">{p.secteur}</div>
                <h3 className="mt-2 display-flat text-bone text-2xl group-hover:text-magenta transition-colors">
                  {p.nom}
                </h3>
                <p className="mt-4 text-sm text-dim leading-relaxed grow">{p.fait}</p>
                <span className="mt-6 pt-5 border-t border-rule text-sm text-magenta break-all">
                  {propre(p.url)}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
