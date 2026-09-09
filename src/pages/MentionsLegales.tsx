import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function MentionsLegales() {
  const bloc = 'mb-10'
  const titre = 'h2 sur text-xl mb-3'
  const corps = 'sourd leading-relaxed max-w-[68ch]'

  return (
    <>
      <Helmet>
        <title>Mentions légales | MAF Studio</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="max-w-[1180px] mx-auto px-6 md:px-10 pt-36 pb-24">
        <h1 className="display sur text-5xl md:text-7xl mb-14">Mentions légales</h1>

        <section className={bloc}>
          <h2 className={titre}>Éditeur du site</h2>
          <p className={corps}>
            Mohamed-Amine Fadel, entrepreneur individuel (auto-entrepreneur).
            <br />5 rue de l'Ilette, 77500 Chelles, France.
            <br />SIRET : 103 617 684 00016
            <br />TVA non applicable, article 293 B du Code général des impôts
            (franchise en base).
            <br />
            <a href="mailto:aminefadelpro@gmail.com" className="accent hover:underline">
              aminefadelpro@gmail.com
            </a>{' '}
            — 06 66 84 03 44
          </p>
        </section>

        <section className={bloc}>
          <h2 className={titre}>Directeur de la publication</h2>
          <p className={corps}>Mohamed-Amine Fadel.</p>
        </section>

        <section className={bloc}>
          <h2 className={titre}>Hébergeur</h2>
          <p className={corps}>
            Vercel Inc. — 440 N Barranca Ave #4133, Covina, CA 91723,
            États-Unis — vercel.com
          </p>
        </section>

        <section className={bloc}>
          <h2 className={titre}>Propriété intellectuelle</h2>
          <p className={corps}>
            L'ensemble des contenus de ce site (textes, mise en page, code) est
            la propriété de Mohamed-Amine Fadel, sauf mention contraire. Les
            marques et sites tiers cités en référence restent la propriété de
            leurs détenteurs respectifs.
          </p>
        </section>

        <section className={bloc}>
          <h2 className={titre}>Données personnelles</h2>
          <p className={corps}>
            Le traitement de vos données est décrit en détail dans la{' '}
            <Link to="/confidentialite" className="accent hover:underline">
              politique de confidentialité
            </Link>
            . En résumé : seules les informations que vous saisissez dans le
            formulaire de contact sont collectées, elles servent uniquement à
            vous répondre, et ce site n'utilise aucun outil de mesure d'audience.
          </p>
        </section>

        

        <section className={bloc}>
          <h2 className={titre}>Médiation de la consommation</h2>
          <p className={corps}>
            Pour les prestations conclues avec un consommateur, vous pouvez
            recourir gratuitement à un médiateur de la consommation en vue de la
            résolution amiable d'un litige.
            {/* Renseigne ici le médiateur auprès duquel tu auras adhéré. */}
          </p>
        </section>

        <div className="flex gap-6 mt-6">
          <Link to="/" className="accent hover:underline">Retour à l'accueil</Link>
          <Link to="/confidentialite" className="accent hover:underline">Politique de confidentialité</Link>
        </div>
      </main>
    </>
  )
}
