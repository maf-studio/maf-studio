/**
 * OFFRE — nommer ce qu'on vend, et surtout ce qu'on ne vend pas.
 *
 * Le H2 précédent, « Quatre choses, faites correctement », comptait les
 * piliers : il devenait faux au moment même où le CRM et l'automatisation
 * sortent du périmètre. On ne compte plus.
 */

const AXES = [
  {
    num: '01',
    titre: 'Créer votre site',
    texte:
      "Une page pour être appelé, un site vitrine de six pages, une boutique en ligne, ou un site à parcours quand votre activité en demande un. Je conçois, je rédige, j'intègre et je mets en ligne.",
    formats: 'Une page · Vitrine · Boutique · Sur-mesure',
  },
  {
    num: '02',
    titre: 'Alimenter votre site en visiteurs',
    texte:
      "Campagnes Google Ads, Meta et TikTok : structure, annonces, suivi des conversions, optimisation hebdomadaire. Uniquement pour les sites que j'ai construits — on ne conduit pas de trafic vers une page dont on ne maîtrise ni la structure ni la vitesse.",
    formats: 'Google Ads · Meta · TikTok',
  },
]

export default function Offre() {
  return (
    <section id="offre" data-sol="papier" className="bg-papier-creux border-b bord">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw] py-24 md:py-32">
        <span className="mono sourd">04 — Offre</span>
        <h2 className="h2 sur mt-4">Ce que je fais</h2>
        <p className="mt-6 mesure sourd">
          Deux choses, et rien d'autre.
        </p>

        <ul className="mt-14 border-t bord">
          {AXES.map((a) => (
            <li key={a.num} className="border-b bord py-10 md:py-12">
              <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-baseline">
                <span className="mono sourd md:col-span-1">{a.num}</span>
                <h3 className="h3 sur text-2xl md:text-4xl md:col-span-5">{a.titre}</h3>
                <div className="md:col-span-6">
                  <p className="sourd leading-relaxed">{a.texte}</p>
                  <p className="mono mt-4 sourd">{a.formats}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
