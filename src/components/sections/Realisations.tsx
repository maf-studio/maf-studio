import CadreNavigateur from '@/components/CadreNavigateur'
import { REALISATIONS, CONTRIBUTIONS } from '@/data/realisations'

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
    <section id="realisations" data-sol="papier" className="border-b bord">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw] py-16 md:py-20">
        <ul className="cascade grid gap-16 md:gap-24">
          {REALISATIONS.map((p) => (
            <li key={p.nom}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="groupe group block">
                <CadreNavigateur domaine={propre(p.url)} cle={p.cle} className="glisse planche">
                  <img src={p.image} alt={`Page d'accueil du site ${p.nom}`}
                       width={1600} height={1000} loading="lazy" decoding="async"
                       className="w-full aspect-[16/10] object-cover object-top" />
                </CadreNavigateur>

                <div className="mt-6 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                  <div className="md:col-span-4">
                    <p className="mono sourd">{p.secteur} · {p.nature}</p>
                    <h2 className="h3 sur text-2xl md:text-3xl mt-2">{p.nom}</h2>
                  </div>
                  <p className="md:col-span-6 sourd leading-relaxed">{p.fait}</p>
                  <p className="md:col-span-2 mono md:text-right break-all" style={{ color: 'var(--accent)' }}>
                    {propre(p.url)} ↗
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        {/* ── Interventions partielles ────────────────────────
            Étiquetées comme telles : c'est ce qui rend le reste crédible. */}
        <div className="overflow-hidden mt-4 border bord bg-papier-creux">
          <div className="px-8 pt-7 pb-2 mono sourd">
            J'y suis intervenu sans avoir réalisé l'ensemble
          </div>
          <div className="grid md:grid-cols-2">
            {CONTRIBUTIONS.map((p, i) => (
              <a
                key={p.nom}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-8 flex flex-col hover:bg-papier transition-colors ${
                  i === 0 ? 'border-b md:border-b-0 md:border-r bord' : ''
                }`}
              >
                <div className="mono sourd">{p.secteur}</div>
                <h3 className="mt-2 h3 sur text-2xl">
                  {p.nom}
                </h3>
                <p className="mt-4 text-[0.95rem] sourd leading-relaxed grow">{p.fait}</p>
                <span className="mono mt-6 pt-5 border-t bord break-all"
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
