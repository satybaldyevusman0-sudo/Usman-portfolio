import { useEffect, useState } from 'react'
import type { Dict, Lang } from '../i18n'
import type { Theme } from '../App'

type Props = {
  d: Dict
  lang: Lang
  setLang: (l: Lang) => void
  theme: Theme
  toggleTheme: () => void
}

const langs: Lang[] = ['kg', 'ru', 'en']

export default function Navbar({ d, lang, setLang, theme, toggleTheme }: Props) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    ['about', d.nav.about],
    ['skills', d.nav.skills],
    ['projects', d.nav.projects],
    ['contact', d.nav.contact],
  ] as const

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="logo" aria-label="Usman.dev">
          <span className="logo__mark">
            <svg viewBox="0 0 32 32" width="22" height="22" fill="none" aria-hidden>
              <path d="M11 10 5 16l6 6M21 10l6 6-6 6" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18 7.5 14 24.5" stroke="#fff" strokeOpacity="0.75" strokeWidth="2.6" strokeLinecap="round" />
            </svg>
          </span>
          <span>Usman<span className="accent">.dev</span></span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <div className="lang">
            {langs.map((l) => (
              <button key={l} className={l === lang ? 'active' : ''} onClick={() => setLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button className="icon-btn" onClick={toggleTheme} aria-label={d.theme}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            className={`burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
