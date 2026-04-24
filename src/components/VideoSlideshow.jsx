import { useRef, useCallback, useEffect, useState } from 'react'
import { videoPage } from '../data/videos'
import './ProjectSlideshow.css'

function toYoutubeId(idOrUrl) {
  if (!idOrUrl) return ''
  const s = String(idOrUrl).trim()
  if (/^[\w-]{11}$/.test(s)) return s
  const fromWatch = s.match(/[?&]v=([\w-]{11})/)
  if (fromWatch) return fromWatch[1]
  const fromShort = s.match(/youtu\.be\/([\w-]{11})/)
  if (fromShort) return fromShort[1]
  return s
}

function embedSrc(youtubeId, { autoplay = false } = {}) {
  const id = toYoutubeId(youtubeId)
  const q = new URLSearchParams({ rel: '0', modestbranding: '1' })
  if (autoplay) q.set('autoplay', '1')
  return `https://www.youtube-nocookie.com/embed/${id}?${q}`
}

function youtubePosterUrl(youtubeId) {
  const id = toYoutubeId(youtubeId)
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
}

function VideoSlider({ items }) {
  const trackRef = useRef(null)
  const [suppressChrome, setSuppressChrome] = useState(false)
  const [embedStarted, setEmbedStarted] = useState({})
  const startEmbed = (i) =>
    setEmbedStarted((s) => (s[i] ? s : { ...s, [i]: true }))

  useEffect(() => {
    if (!suppressChrome) return undefined
    const reveal = () => setSuppressChrome(false)
    window.addEventListener('mousemove', reveal, { passive: true })
    return () => window.removeEventListener('mousemove', reveal)
  }, [suppressChrome])

  const handleTrackScroll = useCallback(() => {
    setSuppressChrome(true)
  }, [])

  const scroll = useCallback((dir) => {
    const el = trackRef.current
    if (!el) return
    const slide = el.querySelector('.project-slideshow__slide')
    const gap =
      parseFloat(
        getComputedStyle(el).columnGap || getComputedStyle(el).gap || '12',
      ) || 12
    const step = slide ? slide.getBoundingClientRect().width + gap : 320
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }, [])

  return (
    <div
      className={
        suppressChrome
          ? 'project-slideshow__slider project-slideshow__slider--is-scrolling'
          : 'project-slideshow__slider'
      }
    >
      {items.length > 1 && (
        <button
          type="button"
          className="project-slideshow__nav-btn project-slideshow__nav-btn--prev"
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
        />
      )}

      <div
        ref={trackRef}
        className="project-slideshow__track"
        onScroll={handleTrackScroll}
      >
        <div className="project-slideshow__spacer" aria-hidden="true" />
        {items.map((item, i) => (
          <div
            key={item.youtubeId + String(i)}
            className="project-slideshow__slide"
            style={{
              '--slide-height': item.slideHeight,
              '--slide-mobile-width': item.slideMobileWidth,
            }}
          >
            <div className="project-slideshow__media project-slideshow__media--embed project-slideshow__media--no-link">
              <div className="project-slideshow__embed">
                {embedStarted[i] ? (
                  <iframe
                    title={item.iframeTitle}
                    src={item.embedUrlAutoplay}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    className="project-slideshow__embed-poster"
                    onClick={() => startEmbed(i)}
                    aria-label="Play video"
                  >
                    {item.posterUrlMobile ? (
                      <picture>
                        <source
                          media="(max-width: 799px)"
                          srcSet={item.posterUrlMobile}
                        />
                        <img
                          src={item.posterUrl}
                          alt=""
                          loading="lazy"
                          decoding="async"
                        />
                      </picture>
                    ) : (
                      <img
                        src={item.posterUrl}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                    <span
                      className="project-slideshow__embed-play"
                      aria-hidden="true"
                    />
                  </button>
                )}
              </div>
              {item.hoverText ? (
                <div
                  className={`project-slideshow__hover-text project-slideshow__hover-text--${item.hoverPosition}`}
                  style={item.hoverColor ? { color: item.hoverColor } : undefined}
                  aria-hidden="true"
                >
                  <div className="project-slideshow__hover-row">
                    <span className="project-slideshow__hover-index">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="project-slideshow__hover-label">
                      {item.hoverText}
                    </span>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ))}
        <div className="project-slideshow__spacer" aria-hidden="true" />
      </div>

      {items.length > 1 && (
        <button
          type="button"
          className="project-slideshow__nav-btn project-slideshow__nav-btn--next"
          onClick={() => scroll(1)}
          aria-label="Scroll right"
        />
      )}
    </div>
  )
}

export default function VideoSlideshow() {
  const { title, items: raw } = videoPage
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const items = raw.map((v, i) => {
    const id = toYoutubeId(v.youtubeId)
    const slideHeight = v.height || '60vh'
    const slideMobileWidth = v.width || '100%'
    const hoverPosition = v.hoverPosition === 'bottom' ? 'bottom' : 'top'
    return {
      youtubeId: id,
      embedUrlAutoplay: embedSrc(id, { autoplay: true }),
      posterUrl: v.poster || youtubePosterUrl(id),
      posterUrlMobile: v.posterMobile,
      iframeTitle: v.text ? `${title} — ${v.text}` : `${title} — ${i + 1} of ${raw.length}`,
      hoverText: v.text || '',
      slideHeight,
      slideMobileWidth,
      hoverPosition,
      hoverColor: v.color,
    }
  })

  return (
    <section className="project-slideshow" aria-label={title}>
      <VideoSlider items={items} />
      <div
        className="project-slideshow__back-to-top"
        role="button"
        tabIndex={0}
        onClick={scrollToTop}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            scrollToTop()
          }
        }}
      >
        Back to top
      </div>
    </section>
  )
}
