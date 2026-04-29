import { fanzineImages, lookbookShinjiImages, arthurImages, placeholders, fleursGrisesImages, studioHarcourtImages, lookbookAnthonyImages, campagneKleinodImages, ekaterinaImages } from './projectImages'

/** Shown on `/` when no `:projectId` is in the URL. */
export const defaultProjectId = 'fanzine'

/**
 * @typedef {{ src: string; mobileSrc?: string; text?: string; hoverPosition?: 'top' | 'bottom'; color?: string; height?: string }} ProjectImage
 * @type {Record<string, { title: string; images: Array<string | ProjectImage> }>}
 */
export const projectsById = {
  fanzine: {
    title: 'Fanzine',
    images: [
      { src: fanzineImages.shinji.desktop, mobileSrc: fanzineImages.shinji.mobile, text: 'Lookbook Shinji', hoverPosition: 'bottom', color: '#000', height: '70vh', width: '100%', link: '/lookbook-shinji' },
      { src: fanzineImages.arthur.desktop, mobileSrc: fanzineImages.arthur.mobile, text: 'Arthur', hoverPosition: 'bottom', color: '#fff', height: '70vh', width: '80%', link: '/arthur' },
      { src: fanzineImages.fleursGrises.desktop, mobileSrc: fanzineImages.fleursGrises.mobile, text: 'Fleurs grises', hoverPosition: 'bottom', color: '#fff', height: '100vh', width: '80%', link: '/fleurs-grises' },
      { src: fanzineImages.studioHarcourt.desktop, mobileSrc: fanzineImages.studioHarcourt.mobile, text: 'Studio Harcourt', hoverPosition: 'top', color: '#fff', height: '70vh', width: '80%', link: '/studio-harcourt' },
      { src: fanzineImages.anthony.desktop, mobileSrc: fanzineImages.anthony.mobile, text: 'Lookbook Anthony', hoverPosition: 'top', color: '#fff', height: '70vh', width: '100%', link: '/lookbook-anthony' },
      { src: fanzineImages.campagneKleinod06.desktop, mobileSrc: fanzineImages.campagneKleinod06.mobile, text: 'Campagne Kleinod 2025', hoverPosition: 'bottom', color: '#fff', height: '100vh', width: '80%', link: '/campagne-kleinod-2025' },
      { src: fanzineImages.email.desktop, mobileSrc: fanzineImages.email.mobile, text: 'Lampe email', hoverPosition: 'bottom', color: '#fff', height: '70vh', width: '80%', link: '/lampe-email' },
      { src: fanzineImages.campagneKleinod08.desktop, mobileSrc: fanzineImages.campagneKleinod08.mobile, text: 'Campagne Kleinod 2025', hoverPosition: 'bottom', color: '#fff', height: '70vh', width: '80%', link: '/campagne-kleinod-2025' },
      { src: fanzineImages.ekaterina09.desktop, mobileSrc: fanzineImages.ekaterina09.mobile, text: 'Ekaterina', hoverPosition: 'bottom', color: '#fff', height: '70vh', width: '100%', link: '/ekaterina' },
      { src: fanzineImages.polaShinji.desktop, mobileSrc: fanzineImages.polaShinji.mobile, text: 'Pola Shinji', hoverPosition: 'bottom', color: '#fff', height: '70vh', width: '80%', link: '/pola-shinji' },
      { src: fanzineImages.lookbookAnthony11.desktop, mobileSrc: fanzineImages.lookbookAnthony11.mobile, text: 'Lookbook Anthony', hoverPosition: 'top', color: '#fff', height: '100vh', width: '80%', link: '/lookbook-anthony' },
      { src: fanzineImages.gaetan12.desktop, mobileSrc: fanzineImages.gaetan12.mobile, text: 'Gaetan', hoverPosition: 'bottom', color: '#fff', height: '55vh', width: '80%', link: '/gaetan' },
      { src: fanzineImages.gaetan13.desktop, mobileSrc: fanzineImages.gaetan13.mobile, text: 'Gaetan', hoverPosition: 'top', color: '#fff', height: '55vh', width: '80%', link: '/gaetan' },
      { src: fanzineImages.lea.desktop, mobileSrc: fanzineImages.lea.mobile, text: 'Lookbook Léa', hoverPosition: 'bottom', color: '#000', height: '70vh', width: '100%', link: '/lookbook-lea' },
      { src: fanzineImages.vallauris.desktop, mobileSrc: fanzineImages.vallauris.mobile, text: 'Valauris', hoverPosition: 'top', color: '#fff', height: '55vh', width: '80%', link: '/vallauris' },
      { src: fanzineImages.exaterina16.desktop, mobileSrc: fanzineImages.exaterina16.mobile, text: 'Exaterina', hoverPosition: 'bottom', color: '#fff', height: '70vh', width: '100%', link: '/ekaterina' },
      { src: fanzineImages.campagneKleinod17.desktop, mobileSrc: fanzineImages.campagneKleinod17.mobile, text: 'Campagne Kleinod 2025', hoverPosition: 'bottom', color: '#fff', height: '70vh', width: '100%', link: '/campagne-kleinod-2025' },
    ],
  },
  'lookbook-shinji': {
    title: 'Lookbook Shinji',
    images: [
      { src: lookbookShinjiImages.shinji01.desktop, mobileSrc: lookbookShinjiImages.shinji01.mobile, height: '70vh', width: '100%' },
      { src: lookbookShinjiImages.shinji02.desktop, mobileSrc: lookbookShinjiImages.shinji02.mobile, height: '70vh', width: '100%' },
      { src: lookbookShinjiImages.shinji03.desktop, mobileSrc: lookbookShinjiImages.shinji03.mobile, height: '100vh', width: '100%' },
      { src: lookbookShinjiImages.shinji04.desktop, mobileSrc: lookbookShinjiImages.shinji04.mobile, height: '70vh', width: '100%' },
      { src: lookbookShinjiImages.shinji05.desktop, mobileSrc: lookbookShinjiImages.shinji05.mobile, height: '100vh', width: '100%' },
      { src: lookbookShinjiImages.shinji06.desktop, mobileSrc: lookbookShinjiImages.shinji06.mobile, height: '70vh', width: '100%' },
      { src: lookbookShinjiImages.shinji07.desktop, mobileSrc: lookbookShinjiImages.shinji07.mobile, height: '70vh', width: '100%' },
      { src: lookbookShinjiImages.shinji08.desktop, mobileSrc: lookbookShinjiImages.shinji08.mobile, height: '100vh', width: '100%' },
      { src: lookbookShinjiImages.shinji09.desktop, mobileSrc: lookbookShinjiImages.shinji09.mobile, height: '70vh', width: '100%' },
    ],
  },
  'arthur': {
    title: 'Arthur',
    images: [
      { src: arthurImages.arthur01.desktop, mobileSrc: arthurImages.arthur01.mobile, height: '70vh', width: '100%' },
      { src: arthurImages.arthur02.desktop, mobileSrc: arthurImages.arthur02.mobile, height: '70vh', width: '100%' },
      { src: arthurImages.arthur03.desktop, mobileSrc: arthurImages.arthur03.mobile, height: '100vh', width: '100%' },
      { src: arthurImages.arthur04.desktop, mobileSrc: arthurImages.arthur04.mobile, height: '70vh', width: '100%' },
      { src: arthurImages.arthur05.desktop, mobileSrc: arthurImages.arthur05.mobile, height: '70vh', width: '100%' },
      { src: arthurImages.arthur06.desktop, mobileSrc: arthurImages.arthur06.mobile, height: '100vh', width: '100%' },
    ],
  },
  'fleurs-grises': {
    title: 'Fleurs grises',
    images: [
      { src: fleursGrisesImages.fleursGrises01.desktop, mobileSrc: fleursGrisesImages.fleursGrises01.mobile, height: '70vh', width: '100%' },
      { src: fleursGrisesImages.fleursGrises02.desktop, mobileSrc: fleursGrisesImages.fleursGrises02.mobile, height: '70vh', width: '100%' },
      { src: fleursGrisesImages.fleursGrises03.desktop, mobileSrc: fleursGrisesImages.fleursGrises03.mobile, height: '70vh', width: '100%' },
      { src: fleursGrisesImages.fleursGrises04.desktop, mobileSrc: fleursGrisesImages.fleursGrises04.mobile, height: '70vh', width: '100%' },
    ],
  },
  'studio-harcourt': {
    title: 'Studio Harcourt',
    images: [
      { src: studioHarcourtImages.studioHarcourt01.desktop, mobileSrc: studioHarcourtImages.studioHarcourt01.mobile, height: '70vh', width: '100%' },
      { src: studioHarcourtImages.studioHarcourt02.desktop, mobileSrc: studioHarcourtImages.studioHarcourt02.mobile, height: '70vh', width: '100%' },
      { src: studioHarcourtImages.studioHarcourt03.desktop, mobileSrc: studioHarcourtImages.studioHarcourt03.mobile, height: '70vh', width: '100%' },
      { src: studioHarcourtImages.studioHarcourt04.desktop, mobileSrc: studioHarcourtImages.studioHarcourt04.mobile, height: '70vh', width: '100%' },
      { src: studioHarcourtImages.studioHarcourt05.desktop, mobileSrc: studioHarcourtImages.studioHarcourt05.mobile, height: '70vh', width: '100%' },
      { src: studioHarcourtImages.studioHarcourt06.desktop, mobileSrc: studioHarcourtImages.studioHarcourt06.mobile, height: '70vh', width: '100%' },
      { src: studioHarcourtImages.studioHarcourt07.desktop, mobileSrc: studioHarcourtImages.studioHarcourt07.mobile, height: '70vh', width: '100%' },
      { src: studioHarcourtImages.studioHarcourt08.desktop, mobileSrc: studioHarcourtImages.studioHarcourt08.mobile, height: '70vh', width: '100%' },
    ],
  },
  'lookbook-anthony': {
    title: 'Lookbook Anthony',
    images: [
      { src: lookbookAnthonyImages.lookbookAnthony01.desktop, mobileSrc: lookbookAnthonyImages.lookbookAnthony01.mobile, height: '70vh', width: '100%' },
      { src: lookbookAnthonyImages.lookbookAnthony02.desktop, mobileSrc: lookbookAnthonyImages.lookbookAnthony02.mobile, height: '70vh', width: '100%' },
      { src: lookbookAnthonyImages.lookbookAnthony03.desktop, mobileSrc: lookbookAnthonyImages.lookbookAnthony03.mobile, height: '100vh', width: '100%' },
      { src: lookbookAnthonyImages.lookbookAnthony04.desktop, mobileSrc: lookbookAnthonyImages.lookbookAnthony04.mobile, height: '70vh', width: '100%' },
      { src: lookbookAnthonyImages.lookbookAnthony05.desktop, mobileSrc: lookbookAnthonyImages.lookbookAnthony05.mobile, height: '70vh', width: '100%' },
      { src: lookbookAnthonyImages.lookbookAnthony06.desktop, mobileSrc: lookbookAnthonyImages.lookbookAnthony06.mobile, height: '70vh', width: '100%' },
      { src: lookbookAnthonyImages.lookbookAnthony07.desktop, mobileSrc: lookbookAnthonyImages.lookbookAnthony07.mobile, height: '70vh', width: '100%' },
      { src: lookbookAnthonyImages.lookbookAnthony08.desktop, mobileSrc: lookbookAnthonyImages.lookbookAnthony08.mobile, height: '70vh', width: '100%' },
    ],
  },
  'campagne-kleinod-2025': {
    title: 'Campagne Kleinod 2025',
    images: [
      { src: campagneKleinodImages.campagneKleinod01.desktop, mobileSrc: campagneKleinodImages.campagneKleinod01.mobile, height: '70vh', width: '100%' },
      { src: campagneKleinodImages.campagneKleinod02.desktop, mobileSrc: campagneKleinodImages.campagneKleinod02.mobile, height: '70vh', width: '100%' },
      { src: campagneKleinodImages.campagneKleinod03.desktop, mobileSrc: campagneKleinodImages.campagneKleinod03.mobile, height: '70vh', width: '100%' },
      { src: campagneKleinodImages.campagneKleinod04.desktop, mobileSrc: campagneKleinodImages.campagneKleinod04.mobile, height: '100vh', width: '100%' },
      { src: campagneKleinodImages.campagneKleinod05.desktop, mobileSrc: campagneKleinodImages.campagneKleinod05.mobile, height: '70vh', width: '100%' },
      { src: campagneKleinodImages.campagneKleinod06.desktop, mobileSrc: campagneKleinodImages.campagneKleinod06.mobile, height: '70vh', width: '100%' },
      { src: campagneKleinodImages.campagneKleinod07.desktop, mobileSrc: campagneKleinodImages.campagneKleinod07.mobile, height: '100vh', width: '100%' },
      { src: campagneKleinodImages.campagneKleinod08.desktop, mobileSrc: campagneKleinodImages.campagneKleinod08.mobile, height: '70vh', width: '100%' },
      { src: campagneKleinodImages.campagneKleinod09.desktop, mobileSrc: campagneKleinodImages.campagneKleinod09.mobile, height: '100vh', width: '100%' },
      { src: campagneKleinodImages.campagneKleinod10.desktop, mobileSrc: campagneKleinodImages.campagneKleinod10.mobile, height: '70vh', width: '100%' },
    ],
  },
  'lampe-email': {
    title: 'Lampe email',
    images: [placeholders.default, placeholders.default, placeholders.default, placeholders.default],
  },
  'ekaterina': {
    title: 'Ekaterina',
    images: [
      { src: ekaterinaImages.ekaterina01.desktop, mobileSrc: ekaterinaImages.ekaterina01.mobile, height: '70vh', width: '100%' },
      { src: ekaterinaImages.ekaterina02.desktop, mobileSrc: ekaterinaImages.ekaterina02.mobile, height: '100vh', width: '100%' },
      { src: ekaterinaImages.ekaterina03.desktop, mobileSrc: ekaterinaImages.ekaterina03.mobile, height: '70vh', width: '100%' },
      { src: ekaterinaImages.ekaterina04.desktop, mobileSrc: ekaterinaImages.ekaterina04.mobile, height: '70vh', width: '100%' },
      { src: ekaterinaImages.ekaterina05.desktop, mobileSrc: ekaterinaImages.ekaterina05.mobile, height: '70vh', width: '100%' },
      { src: ekaterinaImages.ekaterina06.desktop, mobileSrc: ekaterinaImages.ekaterina06.mobile, height: '100vh', width: '100%' },
      { src: ekaterinaImages.ekaterina07.desktop, mobileSrc: ekaterinaImages.ekaterina07.mobile, height: '70vh', width: '100%' },
    ],
  },
  'pola-shinji': {
    title: 'Pola Shinji',
    images: [placeholders.default, placeholders.default, placeholders.default, placeholders.default],
  },
  'gaetan': {
    title: 'Gaetan',
    images: [placeholders.default, placeholders.default, placeholders.default, placeholders.default],
  },
  'lookbook-lea': {
    title: 'Lookbook Léa',
    images: [placeholders.default, placeholders.default, placeholders.default, placeholders.default],
  },
  'vallauris': {
    title: 'Valauris',
    images: [placeholders.default, placeholders.default, placeholders.default, placeholders.default],
  }
}
