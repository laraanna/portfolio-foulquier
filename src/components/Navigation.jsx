import { useState, useEffect, useRef } from 'react'
import navigation from '../data/navigation.json'
import './Navigation.css'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [expandedId, setExpandedId] = useState(null)
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

  const closeMenu = () => {
    setMenuOpen(false)
    setExpandedId(null)
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
    <section id="header">
      <nav className="navigation" aria-label="Main" ref={navRef}>
        <button
          type="button"
          className="navigation__burger"
          aria-expanded={menuOpen}
          aria-controls="navigation-panel"
          id="navigation-menu-button"
          onClick={toggleMenu}
        >
          <span className="navigation__burger-bars" aria-hidden>
            <span className="navigation__burger-bar" />
            <span className="navigation__burger-bar" />
            <span className="navigation__burger-bar" />
          </span>
          <span className="navigation__sr-only">Menu</span>
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
                      <a
                        href={link.href}
                        className="navigation__link navigation__link--parent-desktop"
                      >
                        {link.label}
                      </a>
                      <button
                        type="button"
                        className="navigation__link navigation__parent-mobile"
                        aria-expanded={expanded}
                        onClick={() => toggleSub(link.id)}
                      >
                        <span>{link.label}</span>
                        <span className="navigation__chevron" aria-hidden />
                      </button>
                    </>
                  ) : (
                    <a
                      href={link.href}
                      className="navigation__link"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </a>
                  )}
                  {hasSub && (
                    <ul className="navigation__sublist">
                      {link.subnavigation.map((sublink) => (
                        <li key={sublink.id} className="navigation__subitem">
                          <a
                            href={sublink.href}
                            className="navigation__sublink"
                            onClick={closeMenu}
                          >
                            {sublink.label}
                          </a>
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
