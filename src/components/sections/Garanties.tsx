import { Link } from 'react-router-dom'
import { GARANTIES, NON_GARANTI } from '@/content/offres'

/**
 * GARANTIES — ce qui remplace les preuves qu'on n'a pas.
 *
 * MAF Studio n'a ni note, ni avis, ni témoignage, ni résultat client mesuré.
 * Plutôt que d'en inventer, on écrit sept engagements opposables, que le
 * client peut faire figurer au contrat. Un engagement vérifiable vaut mieux
 * qu'une preuve sociale fabriquée.
 *
 * Le soleil redescend : les ombres réapparaissent à partir d'ici.
 */

export default function Garanties({ limite }: { limite?: number }) {
  const liste = limite ? GARANTIES.slice(0, limite) : GARANTIES
  return (
    <section id="garanties" data-sol="papier" className="border-b bord">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw] py-24 md:py-32">
        <span className="mono sourd">Garanties</span>
        <h2 className="h2 sur mt-4">Ce que je signe</h2>
        <p className="mt-6 mesure sourd">
          Je n'ai pas de note Google ni de témoignages à vous montrer. J'ai sept
          engagements écrits, et vous pouvez les faire figurer au contrat.
        </p>

        <ol className="cascade mt-12 border-t bord">
          {liste.map((g, i) => (
            <li key={g.titre} className="grid md:grid-cols-12 gap-4 md:gap-8 py-9 border-b bord">
              <span className="mono sourd md:col-span-1 tabular-nums text-base md:text-lg">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="h3 sur text-xl md:text-2xl md:col-span-4">{g.titre}</h3>
              <p className="sourd leading-relaxed md:col-span-7">{g.texte}</p>
            </li>
          ))}
        </ol>

        {limite ? (
          <Link to="/tarifs" className="pilule mono action inline-block mt-8 px-7 py-3.5 border bord sur hover:bord-fort transition-colors">
            Les sept engagements
          </Link>
        ) : (
          /* Au même endroit et dans le même corps de texte que les garanties.
             Personne ne peut tenir ces promesses, et celui qui les donne le sait. */
          <div className="mt-9">
            <h3 className="mono sourd">Ce qui n'est pas garanti</h3>
            <p className="mt-3 mesure sur leading-relaxed">{NON_GARANTI}</p>
          </div>
        )}
      </div>
    </section>
  )
}
