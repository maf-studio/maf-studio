/**
 * PREUVES — quatre objections tuées en une ligne.
 *
 * Aucun titre, aucune entrée sur le texte : il est là avant. Seuls les
 * filets verticaux se dessinent, en CSS natif piloté par le scroll, donc
 * zéro JS et hors du fil principal.
 *
 * Quatre FAITS. Aucune note Google, aucun compteur de clients, aucun
 * témoignage : il n'en existe aucun de vérifié, et on n'en inventera pas.
 * Ce qui est écrit ici est ce que MAF Studio met au contrat.
 */

const PASTILLES = [
  'Livré en 5 jours ouvrés',
  'Site, domaine et code à votre nom',
  'Textes rédigés, formation 1 h incluse',
  'Un seul interlocuteur, du devis à la mise en ligne',
]

export default function Preuves() {
  return (
    <section id="preuves" data-ground="jour" className="border-b border-filet">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw]">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
          {PASTILLES.map((p, i) => (
            <li key={p}
                className={`py-8 lg:py-10 lg:px-8 lg:first:pl-0 lg:last:pr-0 ${
                  i > 0 ? 'border-t sm:border-t-0 sm:border-l border-filet sm:pl-6 lg:pl-8' : ''
                } ${i === 2 ? 'sm:border-t sm:border-l-0 lg:border-t-0 lg:border-l sm:pl-0 lg:pl-8' : ''}`}>
              <span className="mono text-gris">{String(i + 1).padStart(2, '0')}</span>
              <p className="mt-3 h3 text-encre text-lg md:text-xl">{p}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
