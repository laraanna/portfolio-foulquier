import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import navigation from '../data/navigation.json'
import monogramIcon from '../assets/icons/tf-monogram.svg'
import hamburgerIcon from '../assets/icons/hamburger.svg'
import closeIcon from '../assets/icons/close.svg'
import plusIcon from '../assets/icons/plus.svg'
import minusIcon from '../assets/icons/minus.svg'
import { protectedImageEventProps } from '../utils/protectedMedia'
import './Navigation.css'

function isInternalAppPath(href) {
  return href.startsWith('/') && !href.startsWith('//')
}

/** Same-origin SPA navigation without `<a href>` so the browser status bar does not show a URL on hover. */
function InternalNavDiv({ to, fragment, className, onActivate, children, ...rest }) {
  const navigate = useNavigate()

  const go = useCallback(() => {
    if (fragment) {
      navigate({ pathname: to, hash: fragment })
    } else {
      navigate(to)
    }
  }, [navigate, to, fragment])

  const openUrl = fragment ? `${to}#${fragment}` : to

  const handleClick = useCallback(
    (e) => {
      if (e.metaKey || e.ctrlKey) {
        window.open(openUrl, '_blank', 'noopener,noreferrer')
      } else {
        go()
      }
      onActivate?.(e)
    },
    [go, onActivate, openUrl],
  )

  const handleAuxClick = useCallback(
    (e) => {
      if (e.button !== 1) return
      e.preventDefault()
      window.open(openUrl, '_blank', 'noopener,noreferrer')
      onActivate?.(e)
    },
    [onActivate, openUrl],
  )

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return
      e.preventDefault()
      go()
      onActivate?.(e)
    },
    [go, onActivate],
  )

  return (
    <div
      role="link"
      tabIndex={0}
      className={className}
      onClick={handleClick}
      onAuxClick={handleAuxClick}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {children}
    </div>
  )
}

function NavItemLink({ href, className, onClick, children }) {
  if (isInternalAppPath(href)) {
    return (
      <InternalNavDiv to={href} className={className} onActivate={onClick}>
        {children}
      </InternalNavDiv>
    )
  }
  if (href.startsWith('#') && href.length > 1) {
    return (
      <InternalNavDiv to="/" fragment={href.slice(1)} className={className} onActivate={onClick}>
        {children}
      </InternalNavDiv>
    )
  }
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  )
}

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [expandedId, setExpandedId] = useState(null)
  const [suppressHover, setSuppressHover] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(true)
  const navRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 800px)')
    const onChange = () => {
      if (mq.matches) {
        setMenuOpen(false)
        setExpandedId(null)
      }
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onPointerDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false)
        setExpandedId(null)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [menuOpen])

  useEffect(() => {
    if (!suppressHover) return undefined
    const restoreHover = () => setSuppressHover(false)
    window.addEventListener('mousemove', restoreHover, { passive: true })
    return () => window.removeEventListener('mousemove', restoreHover)
  }, [suppressHover])

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 799px)')
    let lastScrollY = window.scrollY
    const threshold = 8
    const onScroll = () => {
      if (!mq.matches || menuOpen) {
        setHeaderVisible(true)
        lastScrollY = window.scrollY
        return
      }

      const currentScrollY = window.scrollY
      const delta = currentScrollY - lastScrollY

      if (currentScrollY <= threshold) {
        setHeaderVisible(true)
      } else if (delta > threshold) {
        setHeaderVisible(false)
      } else if (delta < -threshold) {
        setHeaderVisible(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
    setExpandedId(null)
  }

  const handleSubNavigationClick = () => {
    closeMenu()
    setSuppressHover(true)
  }

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      if (prev) setExpandedId(null)
      return !prev
    })
  }

  const toggleSub = (id) => {
    setExpandedId((cur) => (cur === id ? null : id))
  }

  return (
    <section
      id="header"
      className={headerVisible ? 'header--mobile-visible' : 'header--mobile-hidden'}
    >
      <nav
        className={suppressHover ? 'navigation navigation--suppress-hover' : 'navigation'}
        aria-label="Main"
        ref={navRef}
      >
        <InternalNavDiv
          to="/"
          className="navigation__brand"
          aria-label="Home"
          onActivate={closeMenu}
        >
          <img
            src={monogramIcon}
            alt=""
            className="navigation__brand-icon"
            {...protectedImageEventProps}
          />
        </InternalNavDiv>
        <button
          type="button"
          className="navigation__burger"
          aria-expanded={menuOpen}
          aria-controls="navigation-panel"
          id="navigation-menu-button"
          onClick={toggleMenu}
        >
          <img
            src={menuOpen ? closeIcon : hamburgerIcon}
            alt=""
            className="navigation__burger-icon"
            aria-hidden
            {...protectedImageEventProps}
          />
          <span className="navigation__sr-only">
            {menuOpen ? 'Close menu' : 'Open menu'}
          </span>
        </button>
        <div
          id="navigation-panel"
          className={
            menuOpen
              ? 'navigation__panel navigation__panel--open'
              : 'navigation__panel'
          }
        >
          <ul className="navigation__list">
            {navigation.links.map((link) => {
              const hasSub = Boolean(link.subnavigation?.length)
              const expanded = expandedId === link.id
              return (
                <li
                  key={link.id}
                  className={[
                    'navigation__item',
                    hasSub && 'navigation__item--has-sub',
                    expanded && 'navigation__item--expanded',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {hasSub ? (
                    <>
                      <NavItemLink
                        href={link.href}
                        className="navigation__link navigation__link--parent-desktop"
                      >
                        {link.label}
                      </NavItemLink>
                      <button
                        type="button"
                        className="navigation__link navigation__parent-mobile"
                        aria-expanded={expanded}
                        onClick={() => toggleSub(link.id)}
                      >
                        <span>{link.label}</span>
                        <img
                          src={expanded ? minusIcon : plusIcon}
                          alt=""
                          className="navigation__expand-icon"
                          aria-hidden
                          {...protectedImageEventProps}
                        />
                      </button>
                    </>
                  ) : (
                    <NavItemLink
                      href={link.href}
                      className="navigation__link"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </NavItemLink>
                  )}
                  {hasSub && (
                    <ul className="navigation__sublist">
                      {link.subnavigation.map((sublink) => (
                        <li key={sublink.id} className="navigation__subitem">
                          <NavItemLink
                            href={sublink.href}
                            className="navigation__sublink"
                            onClick={handleSubNavigationClick}
                          >
                            {sublink.label}
                          </NavItemLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </section>
  )
}
