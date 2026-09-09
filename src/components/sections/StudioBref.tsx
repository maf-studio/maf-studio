import { Link } from 'react-router-dom'
import mingo from '@/assets/mingo.jpg'

/**
 * LE STUDIO, EN BREF — la version courte, sur l'accueil.
 *
 * Beyonds place ici un bloc « l'agence » de deux paragraphes avec un lien
 * vers la page dédiée. Même intention : le solo est un argument, pas un aveu,
 * et il se dit en trois phrases.
 */
export default function StudioBref() {
  return (
    <section id="studio" data-ground="nuit"
             className="bg-nuit text-jour border-b border-filet-nuit">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw] py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="mono" style={{ color: 'var(--accent)' }}>Le studio</span>
            <h2 className="h2 mt-4">Une seule personne, du devis à la mise en ligne</h2>
            <div className="mt-7 space-y-5 text-jour/70 leading-relaxed mesure">
              <p>
                <span className="text-jour">Mohamed-Amine Fadel.</span> Je conçois, je
                rédige, je développe et je mets en ligne. C'est la même personne qui
                répond quand vous appelez. Pas de commercial, pas de chef de projet,
                aucune structure à financer dans votre devis.
              </p>
              <p>
                Avant MAF Studio, quatre ans chez Skooleo, un centre de formation
                français, à faire tourner l'acquisition. C'est là que j'ai appris ce
                qu'un site doit produire pour être utile.
              </p>
            </div>
            <Link to="/realisations"
                  className="pilule mono mono-md inline-block mt-9 px-7 py-3.5 border transition-colors"
                  style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>
              Voir ce que j'ai livré
            </Link>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <img src={mingo} alt="Mohamed-Amine Fadel, fondateur de MAF Studio"
                 width={288} height={288} loading="lazy" decoding="async"
                 className="carte w-[150px] md:w-[200px] aspect-square object-cover ring-1 ring-jour/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
