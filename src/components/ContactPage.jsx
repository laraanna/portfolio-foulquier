import contactDesktop from '../assets/contact/CARTE_VISITE_DESKTOP.jpg'
import contactMobile from '../assets/contact/CARTE_VISITE_MOBILE.jpg'
import {
  protectedImageEventProps,
  protectedMediaEventProps,
} from '../utils/protectedMedia'
import './ContactPage.css'

export default function ContactPage() {
  return (
    <section className="contact-page" aria-label="Contact">
      <div className="contact-page__media">
        <div className="contact-page__image-wrap" {...protectedMediaEventProps}>
          <picture>
            <source media="(max-width: 799px)" srcSet={contactMobile} />
            <img src={contactDesktop} alt="Contact details" {...protectedImageEventProps} />
          </picture>
          <a
            className="contact-page__hotspot"
            href="mailto:contact@tonyfoulquier.com"
            aria-label="Send email to contact@tonyfoulquier.com"
          />
        </div>
        <p className="contact-page__text">
          PHOTOGRAPHE ET DIRECTEUR
          <br />
          ARTISTIQUE BASÉ A PARIS
        </p>
      </div>
    </section>
  )
}
