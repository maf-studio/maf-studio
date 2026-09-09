import mingo from '@/assets/mingo.jpg'
import Porte from '@/components/Porte'
import { LINKEDIN } from '@/site'

/**
 * STUDIO — le solo assumé comme argument, pas caché comme une faiblesse.
 *
 * Seule section sombre du site. Le contraste prouve que le fond clair est un
 * choix et non un défaut, et le contre-jour est le seul endroit où la lumière
 * vient de derrière.
 *
 * Le fond est peint statiquement et la bascule se fait par data-ground plus
 * une transition CSS — jamais par une interpolation de couleur frame par
 * frame.
 */
export default function Studio() {
  return (
    <section id="studio" data-ground="nuit"
             className="bg-nuit text-jour border-b border-filet-nuit transition-colors duration-[400ms]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw] py-24 md:py-32">
        <span className="mono" style={{ color: 'var(--accent)' }}>10 — Studio</span>

        <div className="mt-4 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="h2">Qui vous répond</h2>
            <div className="mt-8 space-y-6 text-jour/70 leading-relaxed mesure">
              <p>
                <span className="text-jour">Mohamed-Amine Fadel.</span> Une seule
                personne conçoit, rédige, développe et met en ligne votre site, et c'est
                la même qui répond quand vous appelez. Pas de commercial, pas de chef de
                projet, pas de stagiaire, aucune structure à financer dans votre devis.
              </p>
              <p>
                Avant MAF Studio, j'ai passé quatre ans chez Skooleo, un centre de
                formation français, à faire tourner l'acquisition : suivi des
                candidatures, relances, répartition des dossiers, tableaux de bord.
                C'est là que j'ai appris ce qu'un site doit produire pour être utile,
                et pourquoi la plupart n'y arrivent pas.
              </p>
              <p className="text-jour">Je travaille à distance, partout en France.</p>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Porte>
              <img
                src={mingo}
                alt="Mohamed-Amine Fadel, fondateur de MAF Studio"
                width={288}
                height={288}
                loading="lazy"
                decoding="async"
                className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] object-cover"
              />
            </Porte>
            <dl className="mt-6 border-t border-filet-nuit">
              {[
                ['Fondateur', 'Mohamed-Amine Fadel'],
                ['Expérience', '4 ans en growth operations'],
                ['Mode', 'À distance, partout en France'],
                ['Effectif', 'Une personne'],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline gap-3 py-2.5 border-b border-filet-nuit">
                  <dt className="mono text-jour/50 shrink-0">{k}</dt>
                  <dd className="mono text-jour ml-auto text-right">{v}</dd>
                </div>
              ))}
            </dl>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"
               className="mono inline-block mt-4 py-2 border-b" style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}>
              Profil LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
