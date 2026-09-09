import SEO from '@/components/SEO'
import JsonLd from '@/components/JsonLd'
import Soleil from '@/components/Soleil'
import Hero from '@/components/sections/Hero'
import Preuves from '@/components/sections/Preuves'
import Realisations from '@/components/sections/Realisations'
import Offre from '@/components/sections/Offre'
import Livrables from '@/components/sections/Livrables'
import Tarifs from '@/components/sections/Tarifs'
import Options from '@/components/sections/Options'
import Garanties from '@/components/sections/Garanties'
import Methode from '@/components/sections/Methode'
import Studio from '@/components/sections/Studio'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'

/**
 * Douze sections ancrées. L'ordre n'est pas décoratif : la preuve arrive
 * avant l'offre, l'offre avant le prix, le prix avant les garanties.
 *
 * ATTENTION : #tarifs est le zénith de la course du soleil. Sa position est
 * mesurée au chargement par src/lib/soleil.tsx. Déplacer cette section fait
 * atterrir le point de bascule ailleurs, silencieusement — aucune erreur,
 * aucun test rouge.
 *
 * Alternance stricte densité / vide : Livrables, Tarifs et Questions sont
 * délibérément denses. C'est cette densité qui fait lire le vide des sections
 * voisines comme de la maîtrise, et non comme de l'absence.
 */
export default function Home() {
  return (
    <>
      <SEO />
      <JsonLd />
      <Soleil />
      <main id="contenu">
        <Hero />
        <Preuves />
        <Realisations />
        <Offre />
        <Livrables />
        <Tarifs />
        <Options />
        <Garanties />
        <Methode />
        <Studio />
        <FAQ />
        <Contact />
      </main>
    </>
  )
}
