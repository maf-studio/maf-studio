import BookingButton from '@/components/BookingButton'
import { TEL_LIEN } from '@/site'

/**
 * Barre d'action fixe, sous 768 px.
 *
 * Le téléphone est en premier et traité comme un CTA de plein droit : sur une
 * cible TPE, l'appel convertit mieux que le formulaire.
 *
 * ATTENTION AVANT PUBLICATION : ne garder « Appeler » que si les appels sont
 * réellement décrochés. Un bouton d'appel qui sonne dans le vide coûte plus
 * cher que son absence.
 */
export default function BarreMobile() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-3 bg-encre text-jour"
         style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <a href={`tel:${TEL_LIEN}`} className="mono py-4 text-center border-r border-jour/15">
        Appeler
      </a>
      <BookingButton className="mono py-4 text-center border-r border-jour/15">
        Rendez-vous
      </BookingButton>
      <a href="/#formulaire" className="mono py-4 text-center">
        Devis
      </a>
    </div>
  )
}
