import { useRef, useCallback, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projectsById, defaultProjectId } from '../data/projects'
import {
  protectedImageEventProps,
  protectedMediaEventProps,
} from '../utils/protectedMedia'
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

function ProjectSlider({ items }) {
  const trackRef = useRef(null)
  const scrollStopTimerRef = useRef(null)
  const [suppressChrome, setSuppressChrome] = useState(false)
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 799px)').matches)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 799px)')
    const onChange = () => setIsMobile(mq.matches)
    onChange()
    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', onChange)
      return () => mq.removeEventListener('change', onChange)
    }
    mq.addListener(onChange)
    return () => mq.removeListener(onChange)
  }, [])

  useEffect(() => () => {
    if (scrollStopTimerRef.current) {
      window.clearTimeout(scrollStopTimerRef.current)
    }
  }, [])

  const markScrolling = useCallback(() => {
    setSuppressChrome(true)
    if (scrollStopTimerRef.current) {
      window.clearTimeout(scrollStopTimerRef.current)
    }
    scrollStopTimerRef.current = window.setTimeout(() => {
      setSuppressChrome(false)
      scrollStopTimerRef.current = null
    }, 140)
  }, [])

  const handleTrackScroll = useCallback(() => {
    markScrolling()
  }, [markScrolling])

  const handleTrackWheel = useCallback((e) => {
    if (isMobile || e.ctrlKey) return
    const el = trackRef.current
    if (!el) return
    const horizontalDelta = e.deltaX + e.deltaY
    if (horizontalDelta === 0) return
    e.preventDefault()
    el.scrollLeft += horizontalDelta
    markScrolling()
  }, [isMobile, markScrolling])

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
        onWheel={handleTrackWheel}
      >
        <div className="project-slideshow__spacer" aria-hidden="true" />
        {items.map((item, i) => (
          <div
            key={item.type ? `${item.type}-${i}` : i}
            className="project-slideshow__slide"
            style={{
              '--slide-height': item.slideHeight,
              '--slide-mobile-width': item.slideMobileWidth,
            }}
          >
            {item.type === 'intro' || item.type === 'credits' ? (
              <div className="project-slideshow__intro">
                <h1 className="project-slideshow__intro-title">{item.title}</h1>
                <p className="project-slideshow__intro-description">{item.description}</p>
              </div>
            ) : (
              <div
                className={
                  item.link
                    ? 'project-slideshow__media'
                    : 'project-slideshow__media project-slideshow__media--no-link'
                }
                {...protectedMediaEventProps}
              >
                {item.link ? (
                  <Link to={item.link}>
                    <picture>
                      {item.mobileImage ? (
                        <source media="(max-width: 799px)" srcSet={item.mobileImage} />
                      ) : null}
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        {...protectedImageEventProps}
                      />
                    </picture>
                  </Link>
                ) : (
                  <picture>
                    {item.mobileImage ? (
                      <source media="(max-width: 799px)" srcSet={item.mobileImage} />
                    ) : null}
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      {...protectedImageEventProps}
                    />
                  </picture>
                )}
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
            )}
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

function ProjectSlideshowInner({ projectId }) {
  const resolvedId = projectId ?? defaultProjectId
  const project = projectsById[resolvedId]
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
  const imageItems = images.map((img, i) => {
    const src = typeof img === 'string' ? img : img.src
    const mobileSrc = typeof img === 'string' ? undefined : img.mobileSrc
    const text = typeof img === 'string' ? '' : img.text || ''
    const slideHeight = typeof img === 'string' ? '60vh' : img.height || '60vh'
    const slideMobileWidth = typeof img === 'string' ? '100%' : img.width || '100%'
    const link = typeof img === 'string' ? undefined : img.link
    const hoverPosition =
      typeof img === 'string'
        ? 'top'
        : img.hoverPosition === 'bottom'
          ? 'bottom'
          : 'top'
    const hoverColor = typeof img === 'string' ? undefined : img.color
    return {
      image: src,
      mobileImage: mobileSrc,
      hoverText: text,
      slideHeight,
      slideMobileWidth,
      link,
      hoverPosition,
      hoverColor,
      title: `${title} — ${i + 1} of ${images.length}`,
    }
  })
  const items = projectId
    ? [
        {
          type: 'intro',
          title,
          description: project.description || 'Description',
          slideHeight: '60vh',
          slideMobileWidth: '100%',
        },
        ...imageItems,
        {
          type: 'credits',
          title: 'Credits',
          description: project.credits || 'Credits',
          slideHeight: '60vh',
          slideMobileWidth: '100%',
        },
      ]
    : imageItems

  return (
    <section className="project-slideshow" aria-label={title}>
      <ProjectSlider title={title} items={items} />
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
