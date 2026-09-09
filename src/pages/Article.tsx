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
        <article data-sol="papier" className="border-b bord">
          <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw] pt-32 pb-16 md:pt-40">
            <div className="max-w-[68ch] mx-auto">
              <Link to="/blog" className="mono sourd hover:sur transition-colors">
                ← Le journal
              </Link>
              <h1 className="h2 sur mt-6">{article.titre}</h1>
              <p className="mono mt-5 sourd">
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
                {' · '}{article.minutes} min de lecture
              </p>
              <p className="mt-8 sur text-lg leading-relaxed">{article.resume}</p>

              <div className="mt-12 space-y-6">
                {article.corps.map((b, i) => {
                  if (b.type === 'h2') return <h2 key={i} className="h3 sur text-2xl pt-6">{b.texte}</h2>
                  if (b.type === 'liste')
                    return (
                      <ul key={i} className="space-y-2">
                        {b.items.map((it) => (
                          <li key={it} className="flex gap-2.5 sourd leading-relaxed">
                            <span aria-hidden="true" className="mt-[0.7em] h-px w-2.5 shrink-0" style={{ background: 'var(--accent-large)' }} />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  return <p key={i} className="sourd leading-relaxed">{b.texte}</p>
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
