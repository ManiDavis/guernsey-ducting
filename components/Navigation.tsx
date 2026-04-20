'use client'
import { useEffect, useState } from 'react'

interface Props {
  shortName: string
}

export default function Navigation({ shortName }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header
      className="site-header"
      id="top"
      style={scrolled ? { boxShadow: '0 2px 20px rgba(0,0,0,.35)' } : undefined}
    >
      <nav className="nav container">
        <a href="#top" className="logo">
          <span className="logo-icon">&#9632;</span>
          {shortName}
        </a>
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li><a href="#what-we-do" onClick={close}>What We Make</a></li>
          <li><a href="#why-us" onClick={close}>Why Us</a></li>
          <li><a href="#our-story" onClick={close}>Our Story</a></li>
          <li><a href="#contact" onClick={close} className="btn btn-nav">Get in Touch</a></li>
        </ul>
      </nav>
    </header>
  )
}
