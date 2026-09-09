import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'

export default function Introuvable() {
  return (
    <>
      <SEO title="Page introuvable — MAF Studio" noIndex />
      <main className="min-h-[70svh] flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw] py-32">
          <span className="mono text-gris">Erreur 404</span>
          <h1 className="h2 text-encre mt-4">Cette page n'existe pas</h1>
          <p className="mt-6 mesure text-gris">
            Le lien est peut-être ancien, ou mal recopié.
          </p>
          <Link to="/" className="mono inline-block mt-8 px-7 py-4 bg-encre text-jour pilule">
            Retour à l'accueil
          </Link>
        </div>
      </main>
    </>
  )
}
