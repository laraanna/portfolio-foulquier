import { useRef, useCallback, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projectsById, defaultProjectId } from '../data/projects'
import './ProjectSlideshow.css'

export default function ProjectSlideshow() {
  const { projectId } = useParams()
  return (
    <ProjectSlideshowInner
      key={projectId ?? '__root__'}
      projectId={projectId}
    />
  )
}

function ProjectSlider({items }) {
  const trackRef = useRef(null)
  const [suppressChrome, setSuppressChrome] = useState(false)

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
        >
          ‹
        </button>
      )}

      <div
        ref={trackRef}
        className="project-slideshow__track"
        onScroll={handleTrackScroll}
      >
        {items.map((item, i) => (
          <div key={i} className="project-slideshow__slide">
            <div className="project-slideshow__media">
              <img src={item.image} alt={item.title} loading="lazy" />
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
      </div>

      {items.length > 1 && (
        <button
          type="button"
          className="project-slideshow__nav-btn project-slideshow__nav-btn--next"
          onClick={() => scroll(1)}
          aria-label="Scroll right"
        >
          ›
        </button>
      )}
    </div>
  )
}

function ProjectSlideshowInner({ projectId }) {
  const resolvedId = projectId ?? defaultProjectId
  const project = projectsById[resolvedId]

  if (!project) {
    return (
      <section
        className="project-slideshow project-slideshow--empty"
        aria-label="Project gallery"
      >
        <p>Unknown project.</p>
        <Link to="/" className="project-slideshow__back">
          Back home
        </Link>
      </section>
    )
  }

  const { title, images } = project
  const items = images.map((img, i) => {
    const src = typeof img === 'string' ? img : img.src
    const text = typeof img === 'string' ? '' : img.text || ''
    const hoverPosition =
      typeof img === 'string'
        ? 'top'
        : img.hoverPosition === 'bottom'
          ? 'bottom'
          : 'top'
    const hoverColor = typeof img === 'string' ? undefined : img.color
    return {
      image: src,
      hoverText: text,
      hoverPosition,
      hoverColor,
      title: `${title} — ${i + 1} of ${images.length}`,
    }
  })

  return (
    <section className="project-slideshow" aria-label={title}>
      <ProjectSlider title={title} items={items} />
    </section>
  )
}
