import { fanzineImages, lookbookShinjiImages, arthurImages, placeholders } from './projectImages'

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
      { src: fanzineImages.shinji.desktop, mobileSrc: fanzineImages.shinji.mobile, text: 'Lookbook Shinji', hoverPosition: 'bottom', color: '#000', height: '70vh', width: '100%', link: '/project-1' },
      { src: fanzineImages.arthur.desktop, mobileSrc: fanzineImages.arthur.mobile, text: 'Arthur', hoverPosition: 'bottom', color: '#fff', height: '70vh', width: '80%', link: '/project-2' },
      { src: fanzineImages.fleursGrises.desktop, mobileSrc: fanzineImages.fleursGrises.mobile, text: 'Fleurs grises', hoverPosition: 'bottom', color: '#fff', height: '100vh', width: '80%', link: '/project-3' },
      { src: fanzineImages.studioHarcourt.desktop, mobileSrc: fanzineImages.studioHarcourt.mobile, text: 'Studio Harcourt', hoverPosition: 'top', color: '#fff', height: '70vh', width: '80%', link: '/project-4' },
      { src: fanzineImages.anthony.desktop, mobileSrc: fanzineImages.anthony.mobile, text: 'Lookbook Anthony', hoverPosition: 'top', color: '#fff', height: '70vh', width: '100%', link: '/project-5' },
      { src: fanzineImages.campagneKleinod06.desktop, mobileSrc: fanzineImages.campagneKleinod06.mobile, text: 'Campagne Kleinod 2025', hoverPosition: 'bottom', color: '#fff', height: '100vh', width: '80%', link: '/project-6' },
      { src: fanzineImages.email.desktop, mobileSrc: fanzineImages.email.mobile, text: 'Lampe email', hoverPosition: 'bottom', color: '#fff', height: '70vh', width: '80%', link: '/project-7' },
      { src: fanzineImages.campagneKleinod08.desktop, mobileSrc: fanzineImages.campagneKleinod08.mobile, text: 'Campagne Kleinod 2025', hoverPosition: 'bottom', color: '#fff', height: '70vh', width: '80%', link: '/project-6' },
      { src: fanzineImages.ekaterina09.desktop, mobileSrc: fanzineImages.ekaterina09.mobile, text: 'Ekaterina', hoverPosition: 'bottom', color: '#fff', height: '70vh', width: '100%', link: '/project-8' },
      { src: fanzineImages.polaShinji.desktop, mobileSrc: fanzineImages.polaShinji.mobile, text: 'Pola Shinji', hoverPosition: 'bottom', color: '#fff', height: '70vh', width: '80%', link: '/project-9' },
      { src: fanzineImages.lookbookAnthony11.desktop, mobileSrc: fanzineImages.lookbookAnthony11.mobile, text: 'Lookbook Anthony', hoverPosition: 'top', color: '#fff', height: '100vh', width: '80%', link: '/project-5' },
      { src: fanzineImages.gaetan12.desktop, mobileSrc: fanzineImages.gaetan12.mobile, text: 'Gaetan', hoverPosition: 'bottom', color: '#fff', height: '55vh', width: '80%', link: '/project-10' },
      { src: fanzineImages.gaetan13.desktop, mobileSrc: fanzineImages.gaetan13.mobile, text: 'Gaetan', hoverPosition: 'top', color: '#fff', height: '55vh', width: '80%', link: '/project-10' },
      { src: fanzineImages.lea.desktop, mobileSrc: fanzineImages.lea.mobile, text: 'Lookbook Léa', hoverPosition: 'bottom', color: '#000', height: '70vh', width: '100%', link: '/project-11' },
      { src: fanzineImages.vallauris.desktop, mobileSrc: fanzineImages.vallauris.mobile, text: 'Valauris', hoverPosition: 'top', color: '#fff', height: '55vh', width: '80%', link: '/project-12' },
      { src: fanzineImages.exaterina16.desktop, mobileSrc: fanzineImages.exaterina16.mobile, text: 'Exaterina', hoverPosition: 'bottom', color: '#fff', height: '70vh', width: '100%', link: '/project-8' },
      { src: fanzineImages.campagneKleinod17.desktop, mobileSrc: fanzineImages.campagneKleinod17.mobile, text: 'Campagne Kleinod 2025', hoverPosition: 'bottom', color: '#fff', height: '70vh', width: '100%', link: '/project-6' },
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
    images: [placeholders.default, placeholders.default, placeholders.default, placeholders.default],
  },
  'studio-harcourt': {
    title: 'Studio Harcourt',
    images: [placeholders.default, placeholders.default, placeholders.default, placeholders.default],
  },
  'lookbook-anthony': {
    title: 'Lookbook Anthony',
    images: [placeholders.default, placeholders.default, placeholders.default, placeholders.default],
  },
  'campagne-kleinod-2025': {
    title: 'Campagne Kleinod 2025',
    images: [placeholders.default, placeholders.default, placeholders.default, placeholders.default],
  },
  'lampe-email': {
    title: 'Lampe email',
    images: [placeholders.default, placeholders.default, placeholders.default, placeholders.default],
  },
  'ekaterina': {
    title: 'Ekaterina',
    images: [placeholders.default, placeholders.default, placeholders.default, placeholders.default],
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
