import video01Desktop from '../assets/projects/video/VIDEO_01_DESKTOP.jpg'
import video01Mobile from '../assets/projects/video/VIDEO_01_MOBILE.jpg'
import video02Desktop from '../assets/projects/video/VIDEO_02_DESKTOP.jpg'
import video02Mobile from '../assets/projects/video/VIDEO_02_MOBILE.jpg'
import video03Desktop from '../assets/projects/video/VIDEO_03_DESKTOP.jpg'
import video03Mobile from '../assets/projects/video/VIDEO_03_MOBILE.jpg'

/**
 * @typedef {object} VideoSlide
 * @property {string} youtubeId
 * @property {string} [text]
 * @property {'top'|'bottom'} [hoverPosition]
 * @property {string} [color]
 * @property {string} [height]
 * @property {string} [width]
 * @property {string} [poster] Custom still, desktop (static import). Omit to use YouTube’s thumbnail.
 * @property {string} [posterMobile] Optional; shown below 799px when set (matches slideshow mobile layout).
 */
export const videoPage = {
  title: 'Video',
  /** Replace youtubeId with your own; keep 11-char video IDs or full youtu.be / watch URLs */
  items: [
    {
      youtubeId: 'tkeaiAL2Xb4',
      poster: video01Desktop,
      posterMobile: video01Mobile,
      height: '60vh',
      width: '100%',
    },
    {
      youtubeId: 'VlmDl2NG-vk',
      poster: video02Desktop,
      posterMobile: video02Mobile,
      height: '60vh',
      width: '100%',
    },
    {
      youtubeId: 'cKhXQWZ45_o',
      poster: video03Desktop,
      posterMobile: video03Mobile,
      height: '60vh',
      width: '100%',
    },
  ],
}
