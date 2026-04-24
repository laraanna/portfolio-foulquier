import { fanzineImages, placeholders } from './projectImages'

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
  'project-1': {
    title: 'Lookbook Shinji',
    images: [placeholders.default, placeholders.default, placeholders.default],
  },
  'project-2': {
    title: 'Arthur',
    images: [placeholders.default, placeholders.default],
  },
  'project-3': {
    title: 'Fleurs grises',
    images: [placeholders.default, placeholders.default, placeholders.default, placeholders.default],
  },
  'project-4': {
    title: 'Studio Harcourt',
    images: [placeholders.default, placeholders.default, placeholders.default, placeholders.default],
  },
  'project-5': {
    title: 'Lookbook Anthony',
    images: [placeholders.default, placeholders.default, placeholders.default, placeholders.default],
  },
  'project-6': {
    title: 'Campagne Kleinod 2025',
    images: [placeholders.default, placeholders.default, placeholders.default, placeholders.default],
  },
  'project-7': {
    title: 'Lampe email',
    images: [placeholders.default, placeholders.default, placeholders.default, placeholders.default],
  },
  'project-8': {
    title: 'Ekaterina',
    images: [placeholders.default, placeholders.default, placeholders.default, placeholders.default],
  },
  'project-9': {
    title: 'Pola Shinji',
    images: [placeholders.default, placeholders.default, placeholders.default, placeholders.default],
  },
  'project-10': {
    title: 'Gaetan',
    images: [placeholders.default, placeholders.default, placeholders.default, placeholders.default],
  },
  'project-11': {
    title: 'Lookbook Léa',
    images: [placeholders.default, placeholders.default, placeholders.default, placeholders.default],
  },
  'project-12': {
    title: 'Valauris',
    images: [placeholders.default, placeholders.default, placeholders.default, placeholders.default],
  }
}
