import { OPTIONS, ABONNEMENTS, NON_PROPOSE, PAIEMENT } from '@/content/offres'

/**
 * OPTIONS ET RÉCURRENT — séparer physiquement l'option du prix.
 *
 * Zone silencieuse : aucune animation au-delà d'un fondu. Une page a besoin
 * d'endroits où il ne se passe rien.
 *
 * Les cinq options visibles ne sont pas un choix esthétique : l'ancrage de la
 * section Tarifs n'est refaisable par le prospect que si les montants qu'il
 * cite sont réellement sur la page. Le reste vit dans un <details> natif,
 * donc en texte crawlable, ouvrable au clavier, sans JS.
 */

const visibles = OPTIONS.filter((o) => o.visible)
const cachees = OPTIONS.filter((o) => !o.visible)

export default function Options() {
  return (
    <section id="options" data-ground="penombre" className="bg-penombre border-b border-filet">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw] py-24 md:py-32">
        <span className="mono text-gris">07 — Options</span>
        <h2 className="h2 text-encre mt-4">Ce qui n'est pas dans le prix</h2>
        <p className="mt-6 mesure text-encre text-lg">
          Chez les loueurs, l'abonnement paie le droit de garder votre site en ligne.
          Ici, il paie des heures de travail. Arrêtez-le : le site reste en ligne, à
          votre nom.
        </p>

        <h3 className="mono text-gris mt-14">Options à la carte</h3>
        <ul className="mt-4 border-t border-filet">
          {visibles.map((o) => (
            <li key={o.nom} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4 border-b border-filet">
              <span className="text-encre">{o.nom}</span>
              <span className="flex items-baseline gap-3">
                {o.detail && <span className="mono text-gris">{o.detail}</span>}
                <span className="mono text-encre">{o.prix}</span>
              </span>
            </li>
          ))}
        </ul>

        <details className="mt-4 border-b border-filet group">
          <summary className="cursor-pointer list-none py-4 flex items-center justify-between gap-4 text-encre">
            <span className="mono">Voir toutes les options et leurs prix</span>
            <span aria-hidden="true"
                  className="relative w-3 h-px bg-encre after:absolute after:inset-0 after:bg-encre after:rotate-90 after:transition-transform after:duration-150 group-open:after:rotate-0" />
          </summary>
          <ul className="pb-5">
            {cachees.map((o) => (
              <li key={o.nom} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-2.5 border-t border-filet">
                <span className="text-[0.95rem] text-encre">{o.nom}</span>
                <span className="flex items-baseline gap-3">
                  {o.detail && <span className="mono text-gris">{o.detail}</span>}
                  <span className="mono text-encre">{o.prix}</span>
                </span>
              </li>
            ))}
          </ul>
        </details>

        <h3 className="mono text-gris mt-16">Abonnements, proposés après la première année incluse</h3>
        <div className="mt-4 grid md:grid-cols-3 border-t border-l border-filet">
          {ABONNEMENTS.map((a) => (
            <article key={a.id} className="border-r border-b border-filet p-7 flex flex-col">
              <div className="flex items-baseline justify-between gap-3">
                <h4 className="h3 text-encre text-xl">{a.nom}</h4>
                {a.limite && <span className="mono text-gris shrink-0">{a.limite}</span>}
              </div>
              <p className="mt-4 text-encre" style={{ fontVariationSettings: "'wdth' 110, 'wght' 800", fontSize: '2rem', lineHeight: 1 }}>
                {a.prix} €
              </p>
              <p className="mono mt-2 text-gris">{a.unite}</p>
              <ul className="mt-5 pt-5 border-t border-filet space-y-2 grow">
                {a.inclus.map((i) => (
                  <li key={i} className="text-[0.95rem] text-gris">{i}</li>
                ))}
              </ul>
              <p className="mt-5 pt-4 border-t border-filet text-[0.95rem] text-encre">{a.calcul}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="mono text-gris">Paiement</h3>
            <div className="mt-3 space-y-2 text-[0.95rem] text-gris leading-relaxed">
              <p>{PAIEMENT.base}</p>
              <p>{PAIEMENT.fractionne}</p>
              <p>{PAIEMENT.essentiel}</p>
              <p className="text-encre">{PAIEMENT.remise}</p>
            </div>
          </div>

          {/* Dire ce qu'on ne fait pas est le signal de sérieux le moins cher
              du marché. */}
          <div>
            <h3 className="mono text-gris">Ce que je ne propose pas</h3>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
              {NON_PROPOSE.map((n) => (
                <li key={n} className="text-[0.95rem] text-gris">{n}</li>
              ))}
            </ul>
            <p className="mt-4 text-[0.95rem] text-gris leading-relaxed">
              Pour ces besoins, je vous oriente vers quelqu'un dont c'est le métier.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
