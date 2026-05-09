import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import navigation from '../data/navigation.json'
import monogramIcon from '../assets/icons/tf-monogram.svg'
import hamburgerIcon from '../assets/icons/hamburger.svg'
import closeIcon from '../assets/icons/close.svg'
import plusIcon from '../assets/icons/plus.svg'
import minusIcon from '../assets/icons/minus.svg'
import './Navigation.css'

function NavItemLink({ href, className, onClick, children }) {
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
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
        <Link to="/" className="navigation__brand" aria-label="Home" onClick={closeMenu}>
          <img src={monogramIcon} alt="" className="navigation__brand-icon" />
        </Link>
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
