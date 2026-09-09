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
    <section id="realisations" data-ground="jour" className="border-b border-filet">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw] py-24 md:py-32">
        <span className="mono text-gris">03 — Réalisations</span>
        <h2 className="h2 text-encre mt-4 max-w-[20ch]">
          Des sites en ligne, pas des maquettes
        </h2>
        <p className="mt-6 mesure text-gris">
          Je n'ai ni avis clients, ni note Google, ni témoignages : l'activité est jeune
          et je n'en inventerai pas. À la place, quatre sites que j'ai construits et que
          vous pouvez ouvrir maintenant.
        </p>

        {/* Barre de noms : tous les projets, sans prestation attribuée ici. */}
        <div className="mt-12 pt-8 border-t border-filet flex flex-wrap items-center gap-x-9 gap-y-3">
          <span className="mono text-gris shrink-0">J'ai travaillé pour</span>
          {TOUS_LES_PROJETS.map((p) => (
            <a
              key={p.nom}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="h3 text-encre/60 hover:text-encre text-lg md:text-xl py-2 transition-colors"
            >
              {p.nom}
            </a>
          ))}
        </div>

        {/* ── Sites livrés de bout en bout ───────────────────── */}
        <div className="mt-12 border border-filet grid sm:grid-cols-2 lg:grid-cols-4">
          {REALISATIONS.map((p, i) => (
            <a
              key={p.nom}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-8 flex flex-col hover:bg-penombre transition-colors border-filet
                ${i < REALISATIONS.length - 1 ? 'border-b sm:border-b-0 sm:border-r' : ''}
                ${i < 2 ? 'sm:border-b lg:border-b-0' : ''}
                ${i === 1 ? 'sm:border-r-0 lg:border-r' : ''}`}
            >
              <div className="mono text-gris">{p.secteur}</div>
              <h3 className="mt-2 h3 text-encre text-2xl">
                {p.nom}
              </h3>
              <p className="mt-4 text-[0.95rem] text-gris leading-relaxed grow">{p.fait}</p>
              <span className="mono mt-6 pt-5 border-t border-filet break-all"
                style={{ color: 'var(--accent)' }}>
                {propre(p.url)}
              </span>
            </a>
          ))}
        </div>

        {/* ── Interventions partielles ────────────────────────
            Étiquetées comme telles : c'est ce qui rend le reste crédible. */}
        <div className="mt-4 border border-filet bg-penombre">
          <div className="px-8 pt-7 pb-2 mono text-gris">
            J'y suis intervenu sans avoir réalisé l'ensemble
          </div>
          <div className="grid md:grid-cols-2">
            {CONTRIBUTIONS.map((p, i) => (
              <a
                key={p.nom}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-8 flex flex-col hover:bg-jour transition-colors ${
                  i === 0 ? 'border-b md:border-b-0 md:border-r border-filet' : ''
                }`}
              >
                <div className="mono text-gris">{p.secteur}</div>
                <h3 className="mt-2 h3 text-encre text-2xl">
                  {p.nom}
                </h3>
                <p className="mt-4 text-[0.95rem] text-gris leading-relaxed grow">{p.fait}</p>
                <span className="mono mt-6 pt-5 border-t border-filet break-all"
                style={{ color: 'var(--accent)' }}>
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
