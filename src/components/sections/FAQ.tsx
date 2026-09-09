import { QUESTIONS } from '@/content/faq'

/**
 * QUESTIONS — zone dense, volontairement.
 *
 * Les <details> / <summary> natifs sont conservés tels quels : c'est le
 * meilleur composant du dépôt d'origine. Accessible au clavier, fonctionne
 * sans JS, zéro dépendance, et le contenu reste crawlable même fermé.
 * Aucune animation de hauteur : seul le trait du « + » pivote, en 140 ms.
 */
export default function FAQ() {
  return (
    <section id="faq" data-sol="papier" className="border-b bord">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw] py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="mono sourd">11 — Questions</span>
            <h2 className="h2 sur mt-4">Les questions qu'on me pose</h2>
          </div>

          <div className="lg:col-span-8 border-t bord">
            {QUESTIONS.map((item) => (
              <details key={item.q} className="group border-b bord">
                <summary className="cursor-pointer list-none py-5 flex gap-6 items-start justify-between sur h3 text-lg md:text-xl">
                  <span>{item.q}</span>
                  <span
                    aria-hidden="true"
                    className="mt-2.5 shrink-0 w-3.5 h-px bg-encre relative after:absolute after:inset-0 after:bg-encre after:rotate-90 after:transition-transform after:duration-150 group-open:after:rotate-0"
                  />
                </summary>
                <p className="pb-6 pr-4 md:pr-12 sourd leading-relaxed">{item.r}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
