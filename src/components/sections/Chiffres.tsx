/**
 * CHIFFRES — l'équivalent honnête du bandeau de statistiques que met toute
 * agence à cet endroit.
 *
 * Beyonds affiche « 120 projets, 10 ans, 18 experts, 4,9 sur Google ». MAF
 * Studio n'a rien de comparable et n'inventera rien. Les quatre chiffres
 * ci-dessous sont les seuls vérifiables : un délai contractuel, des sites
 * qu'on peut ouvrir, une durée d'expérience, et une clause de propriété.
 * Trois d'entre eux figurent au contrat.
 */

const CHIFFRES = [
  { valeur: '5', unite: 'jours ouvrés', legende: 'De la validation à la mise en ligne, délai écrit sur le devis' },
  { valeur: '4', unite: 'sites en ligne', legende: 'Livrés et consultables, les liens sont ouverts' },
  { valeur: '4', unite: 'ans', legende: "En growth operations, à faire tourner l'acquisition d'un centre de formation" },
  { valeur: '100', unite: '%', legende: 'Du site, du code et du domaine à votre nom, dès le premier jour' },
]

export default function Chiffres() {
  return (
    <section data-sol="papier" className="border-b bord">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw]">
        <dl className="cascade grid sm:grid-cols-2 lg:grid-cols-4">
          {CHIFFRES.map((c, i) => (
            <div key={c.legende}
                 className={`py-10 lg:py-14 lg:px-8 lg:first:pl-0 lg:last:pr-0 bord ${
                   i > 0 ? 'border-t lg:border-t-0 lg:border-l' : ''
                 } ${i === 1 ? 'sm:border-t-0 sm:border-l lg:border-l' : ''} ${i === 3 ? 'sm:border-l' : ''}`}>
              <dt className="flex items-baseline gap-2">
                <span className="sur" style={{ fontVariationSettings: "'wdth' 110, 'wght' 800", fontSize: 'clamp(2.6rem,4.4vw,3.6rem)', lineHeight: 1 }}>
                  {c.valeur}
                </span>
                <span className="mono sourd">{c.unite}</span>
              </dt>
              <dd className="mt-4 text-[0.95rem] sourd leading-relaxed max-w-[30ch]">{c.legende}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
