import { fanzineImages, placeholders } from './projectImages'

/** Shown on `/` when no `:projectId` is in the URL. */
export const defaultProjectId = 'fanzine'

/**
 * @typedef {{ src: string; mobileSrc?: string; text?: string; hoverPosition?: 'top' | 'bottom'; color?: string }} ProjectImage
 * @type {Record<string, { title: string; images: Array<string | ProjectImage> }>}
 */
export const projectsById = {
  fanzine: {
    title: 'Fanzine',
    images: [
      { src: fanzineImages.shinji.desktop, mobileSrc: fanzineImages.shinji.mobile, text: 'Lookbook Shinji', hoverPosition: 'bottom', color: '#000' },
      { src: fanzineImages.arthur.desktop, mobileSrc: fanzineImages.arthur.mobile, text: 'Arthur', hoverPosition: 'bottom', color: '#fff' },
      { src: fanzineImages.fleursGrises.desktop, mobileSrc: fanzineImages.fleursGrises.mobile, text: 'Fleurs grises', hoverPosition: 'bottom', color: '#fff' },
      { src: fanzineImages.studioHarcourt.desktop, mobileSrc: fanzineImages.studioHarcourt.mobile, text: 'Studio Harcourt', hoverPosition: 'top', color: '#fff' },
      { src: fanzineImages.anthony.desktop, mobileSrc: fanzineImages.anthony.mobile, text: 'Lookbook Anthony', hoverPosition: 'top', color: '#fff' },
      { src: fanzineImages.email.desktop, mobileSrc: fanzineImages.email.mobile, text: 'Lampe email', hoverPosition: 'bottom', color: '#fff' },
      { src: fanzineImages.ekaterina09.desktop, mobileSrc: fanzineImages.ekaterina09.mobile, text: 'Ekaterina', hoverPosition: 'bottom', color: '#fff' },
      { src: fanzineImages.polaShinji.desktop, mobileSrc: fanzineImages.polaShinji.mobile, text: 'Pola Shinji', hoverPosition: 'bottom', color: '#fff' },
      { src: fanzineImages.lookbookAnthony11.desktop, mobileSrc: fanzineImages.lookbookAnthony11.mobile, text: 'Lookbook Anthony', hoverPosition: 'top', color: '#fff' },
      { src: fanzineImages.gaetan12.desktop, mobileSrc: fanzineImages.gaetan12.mobile, text: 'Gaetan', hoverPosition: 'bottom', color: '#fff' },
      { src: fanzineImages.gaetan13.desktop, mobileSrc: fanzineImages.gaetan13.mobile, text: 'Gaetan', hoverPosition: 'top', color: '#fff' },
      { src: fanzineImages.lea.desktop, mobileSrc: fanzineImages.lea.mobile, text: 'Lookbook Léa', hoverPosition: 'bottom', color: '#000' },
      { src: fanzineImages.vallauris.desktop, mobileSrc: fanzineImages.vallauris.mobile, text: 'Valauris', hoverPosition: 'top', color: '#fff' },
      { src: fanzineImages.exaterina16.desktop, mobileSrc: fanzineImages.exaterina16.mobile, text: 'Exaterina', hoverPosition: 'bottom', color: '#fff' },
      { src: fanzineImages.campagneKleinod17.desktop, mobileSrc: fanzineImages.campagneKleinod17.mobile, text: 'Campagne Kleinod 2025', hoverPosition: 'bottom', color: '#fff' },
      { src: fanzineImages.exaterina17.desktop, mobileSrc: fanzineImages.exaterina17.mobile, text: 'Exaterina', hoverPosition: 'bottom', color: '#fff' },
    ],
  },
  'project-1': {
    title: 'Project 1',
    images: [placeholders.default, placeholders.default, placeholders.default],
  },
  'project-2': {
    title: 'Project 2',
    images: [placeholders.default, placeholders.default],
  },
  'project-3': {
    title: 'Project 3',
    images: [placeholders.default, placeholders.default, placeholders.default, placeholders.default],
  },
}
