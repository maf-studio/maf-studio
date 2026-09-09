import SEO from '@/components/SEO'
import EnTetePage from '@/components/EnTetePage'
import Realisations from '@/components/sections/Realisations'
import Methode from '@/components/sections/Methode'
import Contact from '@/components/sections/Contact'
import { SITE_URL } from '@/site'

/**
 * PAGE RÉALISATIONS — la preuve, en entier.
 *
 * On y trouve aussi la méthode : montrer comment on travaille est le
 * substitut le plus solide à la preuve sociale, quand on n'a ni avis ni
 * témoignage à afficher. C'est ce que fait une agence de soixante personnes
 * pour rassurer ; une personne seule peut le faire mieux, parce qu'elle
 * décrit ce qu'elle fait vraiment.
 */
export default function PageRealisations() {
  return (
    <>
      <SEO
        title="Réalisations — sites livrés par MAF Studio"
        canonical={`${SITE_URL}/realisations`}
      />
      <main id="contenu">
        <EnTetePage
          surtitre="Réalisations"
          titre="Des sites en ligne"
          intro="Ni avis clients, ni note Google, ni témoignages : l'activité est jeune et je n'en inventerai pas. À la place, des sites que j'ai construits et que vous pouvez ouvrir maintenant."
        />
        <Realisations />
        <Methode />
        <Contact />
      </main>
    </>
  )
}
