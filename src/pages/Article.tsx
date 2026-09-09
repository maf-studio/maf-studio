import { Link, useParams } from 'react-router-dom'
import SEO from '@/components/SEO'
import Contact from '@/components/sections/Contact'
import Introuvable from '@/pages/Introuvable'
import { trouverArticle } from '@/content/articles'
import { SITE_URL } from '@/site'

export default function Article() {
  const { slug } = useParams()
  const article = slug ? trouverArticle(slug) : undefined

  // Une URL d'article inconnue doit rendre une vraie 404, pas une page vide.
  if (!article) return <Introuvable />

  return (
    <>
      <SEO title={`${article.titre} — MAF Studio`} canonical={`${SITE_URL}/blog/${article.slug}`} />
      <main id="contenu">
        <article data-ground="jour" className="border-b border-filet">
          <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw] pt-32 pb-16 md:pt-40">
            <div className="max-w-[68ch] mx-auto">
              <Link to="/blog" className="mono text-gris hover:text-encre transition-colors">
                ← Le journal
              </Link>
              <h1 className="h2 text-encre mt-6">{article.titre}</h1>
              <p className="mono mt-5 text-gris">
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
                {' · '}{article.minutes} min de lecture
              </p>
              <p className="mt-8 text-encre text-lg leading-relaxed">{article.resume}</p>

              <div className="mt-12 space-y-6">
                {article.corps.map((b, i) => {
                  if (b.type === 'h2') return <h2 key={i} className="h3 text-encre text-2xl pt-6">{b.texte}</h2>
                  if (b.type === 'liste')
                    return (
                      <ul key={i} className="space-y-2">
                        {b.items.map((it) => (
                          <li key={it} className="flex gap-2.5 text-gris leading-relaxed">
                            <span aria-hidden="true" className="mt-[0.7em] h-px w-2.5 shrink-0" style={{ background: 'var(--accent-large)' }} />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  return <p key={i} className="text-gris leading-relaxed">{b.texte}</p>
                })}
              </div>
            </div>
          </div>
        </article>
        <Contact />
      </main>
    </>
  )
}
