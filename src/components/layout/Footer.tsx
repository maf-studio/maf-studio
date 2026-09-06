import { Link } from 'react-router-dom'

import { LINKEDIN } from '@/site'

const EMAIL = 'aminefadelpro@gmail.com'
const TEL = '06 66 84 03 44'

export default function Footer() {
  return (
    <footer className="thread-field">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div>
            <div className="display text-bone text-2xl">
              MAF <span className="text-magenta">Studio</span>
            </div>
            <p className="mt-4 text-sm text-dim max-w-[34ch] leading-relaxed">
              Growth operations, publicité, automatisation et sites web pour les
              TPE et PME françaises.
            </p>
          </div>

          <div>
            <div className="text-sm text-bone font-semibold mb-4">Contact</div>
            <div className="space-y-2 text-sm">
              <a href={`mailto:${EMAIL}`} className="block text-dim hover:text-magenta transition-colors">
                {EMAIL}
              </a>
              <a href={`tel:+33${TEL.slice(1).replace(/\s/g, '')}`} className="block text-dim hover:text-magenta transition-colors">
                {TEL}
              </a>
              <a href="https://cal.com/amine-fadel" target="_blank" rel="noopener noreferrer" className="block text-dim hover:text-magenta transition-colors">
                Prendre rendez-vous
              </a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="block text-dim hover:text-magenta transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm text-bone font-semibold mb-4">Prestations</div>
            <div className="space-y-2 text-sm">
              {[
                ['Site web', '#services'],
                ['Publicité en ligne', '#services'],
                ['Growth ops & CRM', '#services'],
                ['Automatisation', '#services'],
              ].map(([l, h]) => (
                <a key={l} href={h} className="block text-dim hover:text-magenta transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-rule flex flex-col sm:flex-row gap-3 justify-between text-xs text-dim">
          <span>© {new Date().getFullYear()} MAF Studio — Mohamed-Amine Fadel · <Link to="/mentions-legales" className="hover:text-magenta transition-colors">Mentions légales</Link></span>
          <span>SIRET 103 617 684 00016 · Tarifs hors taxes, TVA non applicable art. 293 B du CGI.</span>
        </div>
      </div>
    </footer>
  )
}
