import { useRef, useCallback, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projectsById, defaultProjectId } from '../data/projects'
import {
  protectedImageEventProps,
  protectedMediaEventProps,
} from '../utils/protectedMedia'
import flecheIcon from '../assets/icons/FLECHE.svg'
import './ProjectSlideshow.css'

/**
 * @param {unknown} credits
 * @returns {{ lines: string[] }[] | null}
 */
function normalizeCreditsParagraphs(credits) {
  if (credits == null || credits === '') return null
  if (typeof credits === 'string') return [{ lines: [credits] }]
  if (!Array.isArray(credits)) return null

  /** @type {{ lines: string[] }[]} */
  const paragraphs = []
  for (const block of credits) {
    if (typeof block === 'string') {
      paragraphs.push({ lines: [block] })
      continue
    }
    if (Array.isArray(block)) {
      if (block.length && block.every((x) => typeof x === 'string')) {
        paragraphs.push({ lines: block.map(String) })
      }
      continue
    }
    if (block && typeof block === 'object') {
      const keys = Object.keys(block)
        .filter((k) => /^paragraph_\d+$/i.test(k))
        .sort((a, b) => {
          const na = Number(String(a).replace(/^\D+/g, '')) || 0
          const nb = Number(String(b).replace(/^\D+/g, '')) || 0
          return na - nb
        })
      for (const key of keys) {
        const val = /** @type {Record<string, unknown>} */ (block)[key]
        const lines = Array.isArray(val) ? val.map(String) : [String(val)]
        paragraphs.push({ lines })
      }
    }
  }
  return paragraphs.length ? paragraphs : null
}

/** Slide indices of the first `max` items that show a gallery image (skips intro/credits). */
function indicesOfFirstGalleryImages(items, max = 2) {
  const out = []
  for (let i = 0; i < items.length && out.length < max; i++) {
    if (items[i]?.image) out.push(i)
  }
  return out
}

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
  /** After wheel/trackpad scroll settles, nav stays hidden until the user moves the pointer. */
  const chromeRevealOnPointerMoveRef = useRef(false)
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

  const revealChromeAfterPointerMove = useCallback(() => {
    if (!chromeRevealOnPointerMoveRef.current) return
    chromeRevealOnPointerMoveRef.current = false
    setSuppressChrome(false)
  }, [])

  useEffect(() => {
    window.addEventListener('pointermove', revealChromeAfterPointerMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', revealChromeAfterPointerMove)
    }
  }, [revealChromeAfterPointerMove])

  const markScrolling = useCallback(() => {
    chromeRevealOnPointerMoveRef.current = false
    setSuppressChrome(true)
    if (scrollStopTimerRef.current) {
      window.clearTimeout(scrollStopTimerRef.current)
    }
    scrollStopTimerRef.current = window.setTimeout(() => {
      scrollStopTimerRef.current = null
      chromeRevealOnPointerMoveRef.current = true
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
    const slides = [...el.querySelectorAll('.project-slideshow__slide')]
    if (!slides.length) return

    const trackRect = el.getBoundingClientRect()
    const anchorX = trackRect.left + trackRect.width * 0.45

    let nearest = 0
    let best = Number.POSITIVE_INFINITY
    slides.forEach((slide, i) => {
      const r = slide.getBoundingClientRect()
      const center = r.left + r.width / 2
      const d = Math.abs(center - anchorX)
      if (d < best) {
        best = d
        nearest = i
      }
    })

    const targetIdx = nearest + dir
    if (targetIdx < 0 || targetIdx >= slides.length) return

    const a = slides[nearest]
    const b = slides[targetIdx]
    const stride =
      dir > 0 ? b.offsetLeft - a.offsetLeft : a.offsetLeft - b.offsetLeft
    if (stride <= 0) return
    el.scrollBy({ left: dir * stride, behavior: 'smooth' })
  }, [])

  const revealGalleryImage = useCallback((el) => {
    if (!el) return
    el.classList.add('project-slideshow__gallery-img--loaded')
  }, [])

  const onGalleryImageLoad = useCallback(
    (e) => {
      revealGalleryImage(e.currentTarget)
    },
    [revealGalleryImage],
  )

  const onGalleryImageError = useCallback(
    (e) => {
      revealGalleryImage(e.currentTarget)
    },
    [revealGalleryImage],
  )

  const galleryImageRef = useCallback(
    (el) => {
      if (el?.complete && el.naturalWidth > 0) {
        revealGalleryImage(el)
      }
    },
    [revealGalleryImage],
  )

  const eagerGallerySlideIndices = indicesOfFirstGalleryImages(items, 2)
  const firstEagerGalleryIndex = eagerGallerySlideIndices[0] ?? -1

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
          <span className="project-slideshow__nav-btn-blend" aria-hidden="true">
            <img src={flecheIcon} alt="" className="project-slideshow__nav-btn-icon" />
          </span>
        </button>
      )}

      <div
        ref={trackRef}
        className="project-slideshow__track"
        onScroll={handleTrackScroll}
        onWheel={handleTrackWheel}
      >
        <div className="project-slideshow__spacer" aria-hidden="true" />
        {items.map((item, i) => {
          const isEagerGalleryImage = eagerGallerySlideIndices.includes(i)
          const fetchPriorityHigh =
            firstEagerGalleryIndex >= 0 && i === firstEagerGalleryIndex
          return (
          <div
            key={item.type ? `${item.type}-${i}` : i}
            className="project-slideshow__slide"
            style={{
              '--slide-height': item.slideHeight,
              '--slide-mobile-width': item.slideMobileWidth,
            }}
          >
            {item.type === 'intro' ? (
              <div className="project-slideshow__intro">
                <h1 className="project-slideshow__intro-title">{item.title}</h1>
                <p className="project-slideshow__intro-description">{item.description}</p>
              </div>
            ) : item.type === 'credits' ? (
              <div className="project-slideshow__intro project-slideshow__intro--credits">
                {item.creditParagraphs?.length ? (
                  <div className="project-slideshow__credits-body">
                    {item.creditParagraphs.map((para, pi) => (
                      <p
                        key={pi}
                        className="project-slideshow__intro-description project-slideshow__credits-paragraph"
                      >
                        {para.lines.map((line, li) => (
                          <span key={li}>
                            {li > 0 ? <br /> : null}
                            {line}
                          </span>
                        ))}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="project-slideshow__intro-description">
                    {item.description ?? ''}
                  </p>
                )}
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
                        ref={galleryImageRef}
                        className="project-slideshow__gallery-img"
                        src={item.image}
                        alt={item.title}
                        loading={isEagerGalleryImage ? 'eager' : 'lazy'}
                        fetchPriority={fetchPriorityHigh ? 'high' : undefined}
                        decoding="async"
                        onLoad={onGalleryImageLoad}
                        onError={onGalleryImageError}
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
                      ref={galleryImageRef}
                      className="project-slideshow__gallery-img"
                      src={item.image}
                      alt={item.title}
                      loading={isEagerGalleryImage ? 'eager' : 'lazy'}
                      fetchPriority={fetchPriorityHigh ? 'high' : undefined}
                      decoding="async"
                      onLoad={onGalleryImageLoad}
                      onError={onGalleryImageError}
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
                    <div
                      className={
                        item.hoverShowIndex === false
                          ? 'project-slideshow__hover-row project-slideshow__hover-row--label-only'
                          : 'project-slideshow__hover-row'
                      }
                    >
                      {item.hoverShowIndex !== false ? (
                        <span className="project-slideshow__hover-index">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      ) : null}
                      <span className="project-slideshow__hover-label">
                        {item.hoverText}
                      </span>
                    </div>
                  </div>
                ) : null}
              </div>
            )}
          </div>
          )
        })}
        <div className="project-slideshow__spacer" aria-hidden="true" />
      </div>

      {items.length > 1 && (
        <button
          type="button"
          className="project-slideshow__nav-btn project-slideshow__nav-btn--next"
          onClick={() => scroll(1)}
          aria-label="Scroll right"
        >
          <span className="project-slideshow__nav-btn-blend" aria-hidden="true">
            <img src={flecheIcon} alt="" className="project-slideshow__nav-btn-icon" />
          </span>
        </button>
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
    const hoverShowIndex =
      typeof img === 'string' ? true : img.hoverShowIndex !== false
    return {
      image: src,
      mobileImage: mobileSrc,
      hoverText: text,
      slideHeight,
      slideMobileWidth,
      link,
      hoverPosition,
      hoverColor,
      hoverShowIndex,
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
          description:
            typeof project.credits === 'string' ? project.credits : undefined,
          creditParagraphs: normalizeCreditsParagraphs(project.credits),
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
