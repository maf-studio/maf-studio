import { Link } from 'react-router-dom'
import { EMAIL, TEL, TEL_LIEN, LINKEDIN } from '@/site'
import { MENTION_TVA } from '@/content/offres'

const PAGES = [
  { label: 'Réalisations', to: '/realisations' },
  { label: 'Tarifs', to: '/tarifs' },
  { label: 'Le journal', to: '/blog' },
]

export default function Footer() {
  const lien = 'mono block py-2.5 sourd hover:sur transition-colors'

  return (
    <footer data-sol="papier" className="bg-papier-creux">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw] py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <div className="sur text-xl" style={{ fontVariationSettings: "'wdth' 118, 'wght' 800" }}>
              MAF STUDIO
            </div>
            <p className="mt-4 text-[0.95rem] sourd max-w-[36ch] leading-relaxed">
              Agence web et digitale. Sites vitrines, boutiques en ligne et publicité en
              ligne pour les TPE et PME françaises. Travail à distance, partout en France.
            </p>
          </div>

          <div>
            <div className="mono sur mb-3">Contact</div>
            <div className="-my-2.5">
              <a href={`mailto:${EMAIL}`} className={`${lien} break-all`}>{EMAIL}</a>
              <a href={`tel:${TEL_LIEN}`} className={lien}>{TEL}</a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={lien}>LinkedIn</a>
            </div>
          </div>

          <div>
            <div className="mono sur mb-3">Pages</div>
            <div className="-my-2.5">
              {PAGES.map((p) => (
                <Link key={p.to} to={p.to} viewTransition className={lien}>{p.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mono sur mb-3">Légal</div>
            <div className="-my-2.5">
              <Link to="/mentions-legales" className={lien}>Mentions légales</Link>
              <Link to="/confidentialite" className={lien}>Confidentialité</Link>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t bord flex flex-col sm:flex-row gap-2 justify-between mono sourd">
          <span>© {new Date().getFullYear()} MAF Studio — Mohamed-Amine Fadel</span>
          <span>SIRET 103 617 684 00016 · {MENTION_TVA}</span>
        </div>
      </div>
    </footer>
  )
}
