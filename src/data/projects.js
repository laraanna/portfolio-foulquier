import placeholder from '../assets/shintji-placeholder.webp'
import placeholder_1 from '../assets/tony-placeholder.webp'

/** Shown on `/` when no `:projectId` is in the URL. */
export const defaultProjectId = 'fanzine'

/**
 * @typedef {{ src: string; text?: string; hoverPosition?: 'top' | 'bottom'; color?: string }} ProjectImage
 * @type {Record<string, { title: string; images: Array<string | ProjectImage> }>}
 */
export const projectsById = {
  fanzine: {
    title: 'Fanzine',
    images: [
      { src: placeholder, text: 'Lookbook Shinji', hoverPosition: 'bottom', color: '#000' },
      { src: placeholder_1, text: 'Arthur', hoverPosition: 'bottom', color: '#fff' },
      { src: placeholder, text: 'Fleurs grises', hoverPosition: 'bottom', color: '#fff' },
      { src: placeholder_1, text: 'Studio Harcourt', hoverPosition: 'top', color: '#fff' },
      { src: placeholder, text: 'Lookbook Anthony', hoverPosition: 'top', color: '#fff' },
      { src: placeholder, text: 'Campagne Kleinod 2025', hoverPosition: 'bottom', color: '#fff' },
      { src: placeholder, text: 'Lampe email', hoverPosition: 'bottom', color: '#fff' },
      { src: placeholder, text: 'Campagne Kleinod 2025', hoverPosition: 'bottom', color: '#fff' },
      { src: placeholder, text: 'Exaterina', hoverPosition: 'bottom', color: '#fff' },
      { src: placeholder, text: 'Pola Shinji', hoverPosition: 'bottom', color: '#fff' },
      { src: placeholder, text: 'Lookbook Anthony', hoverPosition: 'top', color: '#fff' },
      { src: placeholder, text: 'Gaetan', hoverPosition: 'bottom', color: '#fff' },
      { src: placeholder, text: 'Gaetan', hoverPosition: 'top', color: '#fff' },
      { src: placeholder, text: 'Lookbook Léa', hoverPosition: 'bottom', color: '#000' },
      { src: placeholder, text: 'Valauris', hoverPosition: 'top', color: '#fff' },
      { src: placeholder, text: 'Exaterina', hoverPosition: 'bottom', color: '#fff' },
      { src: placeholder, text: 'Campagne Kleinod 2025', hoverPosition: 'bottom', color: '#fff' },
    ],
  },
  'project-1': {
    title: 'Project 1',
    images: [placeholder, placeholder, placeholder],
  },
  'project-2': {
    title: 'Project 2',
    images: [placeholder, placeholder],
  },
  'project-3': {
    title: 'Project 3',
    images: [placeholder, placeholder, placeholder, placeholder],
  },
}
