import { Link } from 'react-router-dom'
import { EMAIL, TEL, TEL_LIEN, LINKEDIN, CAL_LINK } from '@/site'

const PRESTATIONS = ['Site web', 'Publicité en ligne', 'Growth ops & CRM', 'Automatisation']

export default function Footer() {
  const lien = 'block text-dim hover:text-magenta transition-colors'
  const titreCol = 'text-sm text-bone font-semibold mb-4'

  return (
    <footer className="thread-field">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="display text-bone text-2xl">
              MAF <span className="text-magenta">Studio</span>
            </div>
            <p className="mt-4 text-sm text-dim max-w-[34ch] leading-relaxed">
              Growth operations, publicité, automatisation et sites web pour les
              TPE et PME françaises. Travail à distance, partout en France.
            </p>
          </div>

          <div>
            <div className={titreCol}>Contact</div>
            <div className="space-y-2 text-sm">
              <a href={`mailto:${EMAIL}`} className={lien}>{EMAIL}</a>
              <a href={`tel:${TEL_LIEN}`} className={lien}>{TEL}</a>
              <a href={`https://cal.com/${CAL_LINK}`} target="_blank" rel="noopener noreferrer" className={lien}>
                Prendre rendez-vous
              </a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={lien}>
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <div className={titreCol}>Prestations</div>
            <div className="space-y-2 text-sm">
              {PRESTATIONS.map((p) => (
                <a key={p} href="#services" className={lien}>{p}</a>
              ))}
            </div>
          </div>

          <div>
            <div className={titreCol}>Légal</div>
            <div className="space-y-2 text-sm">
              <Link to="/mentions-legales" className={lien}>Mentions légales</Link>
              <Link to="/confidentialite" className={lien}>Politique de confidentialité</Link>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-rule flex flex-col sm:flex-row gap-3 justify-between text-xs text-dim">
          <span>© {new Date().getFullYear()} MAF Studio — Mohamed-Amine Fadel</span>
          <span>SIRET 103 617 684 00016 · Tarifs hors taxes, TVA non applicable art. 293 B du CGI.</span>
        </div>
      </div>
    </footer>
  )
}
