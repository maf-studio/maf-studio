/**
 * Réalisations — remplace le gabarit Proof.tsx.
 * Tous les liens sont des sites réellement en ligne, vérifiables en
 * un clic. C'est ce qui distingue cette section d'un faux témoignage :
 * le visiteur peut aller voir lui-même.
 */

const SITES = [
  {
    nom: 'Black Academy',
    url: 'https://www.black-academy.fr/',
    quoi: 'CFA restauration',
    fait: "Site complet et tunnel de candidature en ligne, du formulaire à la prise de contact.",
  },
  {
    nom: 'Avancia Formation',
    url: 'https://www.avancia-formation.fr/',
    quoi: 'CFA restauration',
    fait: "Site de formation avec simulateur de rémunération et parcours de candidature.",
  },
  {
    nom: 'Apesoft',
    url: 'https://apesoft.fr/',
    quoi: 'Éditeur logiciel',
    fait: 'Site vitrine.',
  },
]

const MARQUES = [
  { nom: 'Skooleo', url: 'https://skooleo.fr' },
  { nom: 'Black Academy', url: 'https://www.black-academy.fr/' },
  { nom: 'Avancia', url: 'https://www.avancia-formation.fr/' },
  { nom: 'Apesoft', url: 'https://apesoft.fr/' },
  { nom: 'Seoul Mirage', url: 'https://seoulmirage.com' },
]

export default function Realisations() {
  return (
    <section id="realisations" className="border-b border-rule">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <h2 className="display-flat text-bone text-4xl md:text-6xl max-w-[20ch]">
          Des sites en ligne, pas des maquettes
        </h2>
        <p className="mt-6 text-dim text-lg max-w-[54ch]">
          Trois sites que j'ai réalisés et qui tournent aujourd'hui. Les liens
          sont ouverts, allez voir.
        </p>

        {/* Barre de marques — noms seuls, aucune prestation attribuée ici */}
        <div className="mt-12 pt-8 border-t border-rule flex flex-wrap items-center gap-x-9 gap-y-4">
          <span className="text-xs text-dim shrink-0">Ils m'ont fait confiance</span>
          {MARQUES.map((m) => (
            <a
              key={m.nom}
              href={m.url}
              target="_blank"
              rel="noopener noreferrer"
              className="display-flat text-bone/55 hover:text-magenta text-lg md:text-xl py-2 transition-colors"
            >
              {m.nom}
            </a>
          ))}
        </div>

        <div className="mt-12 border border-rule bg-ink-2 grid md:grid-cols-3">
          {SITES.map((s, i) => (
            <a
              key={s.nom}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-8 md:p-10 flex flex-col hover:bg-ink-3 transition-colors ${
                i < SITES.length - 1 ? 'border-b md:border-b-0 md:border-r border-rule' : ''
              }`}
            >
              <div className="text-xs text-dim">{s.quoi}</div>
              <h3 className="mt-2 display-flat text-bone text-2xl group-hover:text-magenta transition-colors">
                {s.nom}
              </h3>
              <p className="mt-4 text-sm text-dim leading-relaxed grow">{s.fait}</p>
              <span className="mt-6 pt-5 border-t border-rule text-sm text-magenta">
                {s.url.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '')}
              </span>
            </a>
          ))}
        </div>

        {/* Le cas growth ops — ce n'est pas un site, donc traitement séparé */}
        <div className="cut mt-4 border border-rule bg-ink-2 p-8 md:p-12">
          <div>
            <div className="text-xs text-dim">Skooleo — CFA, edtech française</div>
            <h3 className="mt-2 display-flat text-bone text-2xl md:text-3xl max-w-[24ch]">
              Toute la chaîne d'acquisition, structurée et automatisée
            </h3>
            <p className="mt-5 text-dim leading-relaxed max-w-[62ch]">
              Pendant quatre ans, j'ai monté et opéré le CRM et les
              automatisations de la partie acquisition : suivi des candidatures,
              relances, répartition des dossiers, tableaux de bord. C'est ce
              travail-là que je refais aujourd'hui pour des structures plus
              petites.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
