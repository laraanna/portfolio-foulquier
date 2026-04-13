import placeholder from '../assets/shintji-placeholder.webp'

/** Shown on `/` when no `:projectId` is in the URL. */
export const defaultProjectId = 'fanzine'

/** @type {Record<string, { title: string; images: string[] }>} */
export const projectsById = {
  fanzine: {
    title: 'Fanzine',
    images: [placeholder, placeholder, placeholder,placeholder, placeholder, placeholder,placeholder, placeholder, placeholder],
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
