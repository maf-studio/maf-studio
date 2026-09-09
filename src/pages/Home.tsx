import SEO from '@/components/SEO'
import JsonLd from '@/components/JsonLd'
import Hero from '@/components/sections/Hero'
import Chiffres from '@/components/sections/Chiffres'
import Offre from '@/components/sections/Offre'
import StudioBref from '@/components/sections/StudioBref'
import RealisationsResume from '@/components/sections/RealisationsResume'
import TarifsResume from '@/components/sections/TarifsResume'
import Garanties from '@/components/sections/Garanties'
import Contact from '@/components/sections/Contact'

/**
 * ACCUEIL — court, volontairement.
 *
 * La version précédente empilait douze sections sur dix-neuf mille pixels :
 * personne ne lit ça, et une page unique ne peut viser qu'un seul groupe de
 * requêtes. Le détail vit désormais sur /tarifs et /realisations, et
 * l'accueil ne fait plus que qualifier, prouver et orienter.
 *
 * L'ordre suit celui qui marche : on annonce le prix et le délai avant de
 * parler de soi, on prouve avant de vendre, et on ferme sur un contact.
 */
export default function Home() {
  return (
    <>
      <SEO />
      <JsonLd />
      <main id="contenu">
        <Hero />
        <Chiffres />
        <Offre />
        <StudioBref />
        <RealisationsResume />
        <TarifsResume />
        <Garanties limite={3} />
        <Contact />
      </main>
    </>
  )
}
