import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { EMAIL } from '@/site'

export default function Confidentialite() {
  const bloc = 'mb-10'
  const titre = 'display-flat text-bone text-xl mb-3'
  const corps = 'text-dim leading-relaxed max-w-[68ch]'
  const lien = 'text-magenta hover:underline'

  return (
    <>
      <Helmet>
        <title>Politique de confidentialité | MAF Studio</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="max-w-[1180px] mx-auto px-6 md:px-10 pt-36 pb-24">
        <h1 className="display text-bone text-5xl md:text-7xl mb-6">
          Politique de
          <br />
          confidentialité
        </h1>
        <p className="text-sm text-dim mb-14">
          Dernière mise à jour : septembre 2026
        </p>

        <section className={bloc}>
          <h2 className={titre}>Qui traite vos données</h2>
          <p className={corps}>
            Mohamed-Amine Fadel, entrepreneur individuel, SIRET 103 617 684
            00016, responsable du traitement au sens du Règlement général sur la
            protection des données (RGPD). Contact :{' '}
            <a href={`mailto:${EMAIL}`} className={lien}>{EMAIL}</a>.
          </p>
        </section>

        <section className={bloc}>
          <h2 className={titre}>Ce que je collecte, et pourquoi</h2>
          <p className={corps}>
            Uniquement ce que vous saisissez vous-même dans le formulaire de
            contact : votre nom, votre adresse électronique, la nature de votre
            besoin et votre message. Ces informations servent à une seule
            chose — vous répondre.
          </p>
          <p className={`${corps} mt-4`}>
            La base légale est votre consentement, matérialisé par l'envoi du
            formulaire. Vous pouvez le retirer à tout moment en me le demandant.
          </p>
          <p className={`${corps} mt-4`}>
            Ce site n'utilise <strong className="text-bone">aucun outil de
            mesure d'audience</strong>, aucun pixel publicitaire, aucun cookie
            de suivi. Je ne sais pas combien de personnes visitent ce site, ni
            d'où elles viennent.
          </p>
        </section>

        <section className={bloc}>
          <h2 className={titre}>Combien de temps je les conserve</h2>
          <p className={corps}>
            Trois ans à compter de notre dernier échange, conformément à la
            recommandation de la CNIL en matière de prospection. Passé ce délai,
            vos données sont supprimées. Si nous travaillons ensemble, les
            documents comptables sont conservés dix ans, comme la loi l'impose.
          </p>
        </section>

        <section className={bloc}>
          <h2 className={titre}>À qui elles sont transmises</h2>
          <p className={corps}>
            Je ne vends, ne loue et ne cède vos données à personne. Trois
            prestataires techniques interviennent néanmoins dans le
            fonctionnement du site :
          </p>
          <ul className={`${corps} mt-4 space-y-3`}>
            <li className="flex gap-3">
              <span className="mt-2.5 h-px w-4 shrink-0 bg-magenta" />
              <span>
                <strong className="text-bone">Vercel Inc.</strong> (États-Unis)
                héberge le site. Ses serveurs enregistrent techniquement les
                requêtes reçues, dont les adresses IP.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2.5 h-px w-4 shrink-0 bg-magenta" />
              <span>
                <strong className="text-bone">EmailJS</strong> achemine les
                messages du formulaire de contact jusqu'à ma boîte mail.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2.5 h-px w-4 shrink-0 bg-magenta" />
              <span>
                <strong className="text-bone">Cal.com</strong> gère la prise de
                rendez-vous. Son script est chargé à l'ouverture de la page, ce
                qui transmet votre adresse IP à Cal.com même si vous ne réservez
                rien.
              </span>
            </li>
          </ul>
          <p className={`${corps} mt-4`}>
            Ces prestataires sont établis aux États-Unis. Les transferts hors
            Union européenne sont encadrés par les clauses contractuelles types
            de la Commission européenne et par le cadre de protection des
            données UE–États-Unis.
          </p>
        </section>

        <section className={bloc}>
          <h2 className={titre}>Cookies</h2>
          <p className={corps}>
            Ce site ne dépose aucun cookie de mesure d'audience ni de publicité.
            C'est pourquoi vous ne voyez pas de bandeau de consentement : il n'y
            a rien à consentir. Le module Cal.com peut déposer des cookies
            strictement nécessaires à son fonctionnement lorsque vous ouvrez la
            fenêtre de réservation.
          </p>
          <p className={`${corps} mt-4`}>
            La police de caractères du site est hébergée sur nos propres
            serveurs. Aucune requête n'est adressée à Google Fonts, donc votre
            adresse IP n'est pas transmise à Google.
          </p>
        </section>

        <section className={bloc}>
          <h2 className={titre}>Vos droits</h2>
          <p className={corps}>
            Vous disposez d'un droit d'accès, de rectification, d'effacement, de
            limitation, d'opposition et de portabilité sur vos données. Pour
            l'exercer, écrivez à{' '}
            <a href={`mailto:${EMAIL}`} className={lien}>{EMAIL}</a> — je réponds
            sous un mois au maximum, et en pratique bien plus vite.
          </p>
          <p className={`${corps} mt-4`}>
            Si ma réponse ne vous satisfait pas, vous pouvez introduire une
            réclamation auprès de la CNIL, 3 place de Fontenoy, 75007 Paris, ou
            sur{' '}
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className={lien}>
              cnil.fr
            </a>
            .
          </p>
        </section>

        <div className="flex gap-6 mt-6">
          <Link to="/" className={lien}>Retour à l'accueil</Link>
          <Link to="/mentions-legales" className={lien}>Mentions légales</Link>
        </div>
      </main>
    </>
  )
}
