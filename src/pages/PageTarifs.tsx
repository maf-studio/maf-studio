import SEO from '@/components/SEO'
import EnTetePage from '@/components/EnTetePage'
import Tarifs from '@/components/sections/Tarifs'
import Livrables from '@/components/sections/Livrables'
import Options from '@/components/sections/Options'
import Garanties from '@/components/sections/Garanties'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import { SITE_URL } from '@/site'

/**
 * PAGE TARIFS — la page qu'on envoie par mail.
 *
 * C'est sa raison d'être : un lien direct, partageable, qui répond à la seule
 * question que pose un dirigeant de TPE. Elle porte donc tout ce qui touche
 * au prix — la grille, le périmètre, les options, les engagements et les
 * questions — et rien d'autre.
 */
export default function PageTarifs() {
  return (
    <>
      <SEO
        title="Tarifs création de site internet — MAF Studio"
        canonical={`${SITE_URL}/tarifs`}
      />
      <main id="contenu">
        <EnTetePage
          surtitre="Tarifs"
          titre="Et combien ça coûte"
          intro="Cinq prix fermes, du site le plus simple au projet le plus construit. Le prix affiché est le prix facturé, et ce qui n'est pas inclus est écrit sous chaque forfait, dans le même corps de texte que ce qui l'est."
        />
        <Tarifs />
        <Livrables />
        <Options />
        <Garanties />
        <FAQ />
        <Contact />
      </main>
    </>
  )
}
