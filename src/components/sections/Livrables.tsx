/**
 * LIVRABLES — transformer un prix en périmètre.
 *
 * Zone DENSE, volontairement. C'est cette densité qui fait lire le vide des
 * sections voisines comme de la maîtrise et non comme de l'absence. Aucune
 * icône, aucune ombre : cette nomenclature est couchée sur le plan.
 */

const LIVRABLES = [
  "L'arborescence et la structure de chaque page",
  "Tous les textes, rédigés à partir d'un entretien de cadrage",
  'Le design, assemblé ou dessiné selon le forfait',
  "L'intégration, vérifiée sur mobile, tablette et ordinateur",
  'Le référencement technique : titres, balises, données structurées, sitemap, vitesse',
  'Les mentions légales et la politique de confidentialité, rédigées',
  "Le nom de domaine, l'hébergement et le certificat, ouverts à votre nom",
  'La mesure d’audience sans cookie, donc aucun bandeau de consentement',
  'La mise en ligne, et la remise de 100 % des accès et du code source',
  'Une heure de formation en visio, enregistrée, plus un mémo écrit',
]

export default function Livrables() {
  return (
    <section id="livrables" data-sol="papier" className="bg-papier-creux border-b bord">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw] py-24 md:py-32">
        <span className="mono sourd">05 — Livrables</span>
        <h2 className="h2 sur mt-4">Ce que vous obtenez</h2>
        <p className="mt-6 mesure sourd">
          Un prix sans périmètre ne veut rien dire. Voici la liste, ligne par ligne, de
          ce qui est fabriqué, rédigé, paramétré et remis.
        </p>

        <ol className="mt-12 border-t bord">
          {LIVRABLES.map((l, i) => (
            <li key={l} className="flex items-baseline gap-5 md:gap-8 py-4 border-b bord">
              <span className="mono sourd shrink-0 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
              <span className="sur">{l}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
