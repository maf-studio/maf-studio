import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'
import EnTetePage from '@/components/EnTetePage'
import Contact from '@/components/sections/Contact'
import { ARTICLES } from '@/content/articles'
import { SITE_URL } from '@/site'

export default function Blog() {
  return (
    <>
      <SEO
        title="Le journal — MAF Studio"
        canonical={`${SITE_URL}/blog`}
        noIndex={ARTICLES.length === 0}
      />
      <main id="contenu">
        <EnTetePage
          surtitre="Le journal"
          titre="Ce que j'apprends en le faisant"
          intro="Des notes utilisables sur la création de sites, le référencement et la publicité en ligne, écrites depuis des projets réels."
        />

        <section data-ground="jour" className="border-b border-filet">
          <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw] py-20 md:py-28">
            {ARTICLES.length === 0 ? (
              /* Aucun faux article de remplissage. Le blog s'ouvre quand il a
                 quelque chose à dire, pas avant. */
              <div className="carte border border-filet p-10 md:p-14 max-w-[62ch]">
                <h2 className="h3 text-encre text-2xl">Les premiers articles arrivent</h2>
                <p className="mt-5 text-gris leading-relaxed">
                  Je préfère un journal vide à un journal rempli de textes écrits pour
                  occuper la place. Les premiers sujets sont en cours d'écriture.
                </p>
                <p className="mt-4 text-gris leading-relaxed">
                  En attendant, si vous avez une question précise sur votre projet,
                  posez-la directement : je réponds sous un jour ouvré, client ou non.
                </p>
                <Link to="/#contact" className="pilule mono mono-md inline-block mt-8 px-7 py-3.5 bg-encre text-jour">
                  Poser ma question
                </Link>
              </div>
            ) : (
              <ul className="cascade grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {ARTICLES.map((a) => (
                  <li key={a.slug} className="carte border border-filet hover:border-encre transition-colors">
                    <Link to={`/blog/${a.slug}`} className="block p-7 h-full flex flex-col">
                      <span className="mono text-gris">
                        {new Date(a.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' })} · {a.minutes} min
                      </span>
                      <h2 className="mt-3 h3 text-encre text-xl">{a.titre}</h2>
                      <p className="mt-3 text-[0.95rem] text-gris leading-relaxed grow">{a.resume}</p>
                      <span className="mono mt-5" style={{ color: 'var(--accent)' }}>Lire</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <Contact />
      </main>
    </>
  )
}
