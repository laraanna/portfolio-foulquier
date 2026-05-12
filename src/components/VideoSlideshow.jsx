import { useRef, useCallback, useEffect, useState } from 'react'
import { videoPage } from '../data/videos'
import {
  protectedImageEventProps,
  protectedMediaEventProps,
} from '../utils/protectedMedia'
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
  const q = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    enablejsapi: '1',
    playsinline: '1',
    controls: '0',
    iv_load_policy: '3',
    fs: '0',
    disablekb: '1',
  })
  if (autoplay) q.set('autoplay', '1')
  return `https://www.youtube-nocookie.com/embed/${id}?${q}`
}

function youtubePosterUrl(youtubeId) {
  const id = toYoutubeId(youtubeId)
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
}

function VideoSlider({ items }) {
  const trackRef = useRef(null)
  const slideRefs = useRef([])
  const iframeRefs = useRef({})
  const scrollStopTimerRef = useRef(null)
  const [suppressChrome, setSuppressChrome] = useState(false)
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 799px)').matches)
  const [activeEmbedIndex, setActiveEmbedIndex] = useState(null)
  const [startedEmbeds, setStartedEmbeds] = useState({})
  const [audioUnlocked, setAudioUnlocked] = useState(false)
  const [pausedEmbedIndex, setPausedEmbedIndex] = useState(null)
  const startEmbed = (i) => setActiveEmbedIndex(i)

  const sendPlayerCommand = useCallback((index, func) => {
    const frame = iframeRefs.current[index]
    const win = frame?.contentWindow
    if (!win) return
    win.postMessage(
      JSON.stringify({
        event: 'command',
        func,
        args: [],
      }),
      '*',
    )
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

  const updateActiveVideo = useCallback(() => {
    if (isMobile) return
    const triggerX = window.innerWidth * 0.45
    let nextActiveIndex = null
    let closestIndex = null
    let closestDistance = Number.POSITIVE_INFINITY

    for (let i = 0; i < slideRefs.current.length; i += 1) {
      const slide = slideRefs.current[i]
      if (!slide) continue
      const rect = slide.getBoundingClientRect()

      const distanceToTrigger =
        rect.left > triggerX
          ? rect.left - triggerX
          : rect.right < triggerX
            ? triggerX - rect.right
            : 0

      if (distanceToTrigger < closestDistance) {
        closestDistance = distanceToTrigger
        closestIndex = i
      }

      if (rect.left <= triggerX && rect.right >= triggerX) {
        nextActiveIndex = i
        break
      }
    }

    if (nextActiveIndex === null) {
      nextActiveIndex = closestIndex
    }

    setActiveEmbedIndex((prev) => (prev === nextActiveIndex ? prev : nextActiveIndex))
  }, [isMobile])

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

  useEffect(() => {
    if (audioUnlocked) return undefined
    const unlockAudio = () => setAudioUnlocked(true)
    const opts = { passive: true, once: true }
    window.addEventListener('pointerdown', unlockAudio, opts)
    window.addEventListener('keydown', unlockAudio, opts)
    window.addEventListener('touchstart', unlockAudio, opts)
    return () => {
      window.removeEventListener('pointerdown', unlockAudio)
      window.removeEventListener('keydown', unlockAudio)
      window.removeEventListener('touchstart', unlockAudio)
    }
  }, [audioUnlocked])

  useEffect(() => {
    updateActiveVideo()
    const onResize = () => updateActiveVideo()
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [items.length, updateActiveVideo])

  useEffect(() => {
    if (activeEmbedIndex === null) return
    setStartedEmbeds((prev) =>
      prev[activeEmbedIndex] ? prev : { ...prev, [activeEmbedIndex]: true },
    )
  }, [activeEmbedIndex])

  useEffect(() => {
    if (pausedEmbedIndex === null) return
    if (pausedEmbedIndex !== activeEmbedIndex) {
      setPausedEmbedIndex(null)
    }
  }, [activeEmbedIndex, pausedEmbedIndex])

  useEffect(() => {
    Object.keys(startedEmbeds).forEach((idxStr) => {
      const idx = Number(idxStr)
      if (Number.isNaN(idx)) return
      if (idx === activeEmbedIndex) {
        sendPlayerCommand(idx, audioUnlocked ? 'unMute' : 'mute')
        sendPlayerCommand(idx, pausedEmbedIndex === idx ? 'pauseVideo' : 'playVideo')
      } else {
        sendPlayerCommand(idx, 'pauseVideo')
      }
    })
  }, [activeEmbedIndex, audioUnlocked, pausedEmbedIndex, sendPlayerCommand, startedEmbeds])

  const handleEmbedToggle = useCallback((index) => {
    if (index !== activeEmbedIndex) return
    setPausedEmbedIndex((prev) => (prev === index ? null : index))
  }, [activeEmbedIndex])

  const handleTrackScroll = useCallback(() => {
    markScrolling()
    if (isMobile) return
    updateActiveVideo()
  }, [isMobile, markScrolling, updateActiveVideo])

  const handleTrackWheel = useCallback((e) => {
    if (isMobile || e.ctrlKey) return
    const el = trackRef.current
    if (!el) return
    const horizontalDelta = e.deltaX + e.deltaY
    if (horizontalDelta === 0) return
    if (!audioUnlocked) {
      setAudioUnlocked(true)
    }
    e.preventDefault()
    el.scrollLeft += horizontalDelta
    markScrolling()
    updateActiveVideo()
  }, [audioUnlocked, isMobile, markScrolling, updateActiveVideo])

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
            key={item.youtubeId + String(i)}
            className="project-slideshow__slide"
            ref={(el) => {
              slideRefs.current[i] = el
            }}
            style={{
              '--slide-height': item.slideHeight,
              '--slide-mobile-width': item.slideMobileWidth,
            }}
          >
            <div
              className="project-slideshow__media project-slideshow__media--embed project-slideshow__media--no-link"
              {...protectedMediaEventProps}
            >
              <div className="project-slideshow__embed">
                {startedEmbeds[i] ? (
                  <>
                    <iframe
                      ref={(el) => {
                        iframeRefs.current[i] = el
                      }}
                      title={item.iframeTitle}
                      src={item.embedUrl}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      onLoad={() => {
                        sendPlayerCommand(i, audioUnlocked ? 'unMute' : 'mute')
                        sendPlayerCommand(i, i === activeEmbedIndex ? 'playVideo' : 'pauseVideo')
                      }}
                    />
                    {i === activeEmbedIndex ? (
                      <button
                        type="button"
                        className="project-slideshow__embed-toggle"
                        onClick={() => handleEmbedToggle(i)}
                        aria-label={pausedEmbedIndex === i ? 'Play video' : 'Pause video'}
                      />
                    ) : null}
                  </>
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
                          {...protectedImageEventProps}
                        />
                      </picture>
                    ) : (
                      <img
                        src={item.posterUrl}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        {...protectedImageEventProps}
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
      embedUrl: embedSrc(id),
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
