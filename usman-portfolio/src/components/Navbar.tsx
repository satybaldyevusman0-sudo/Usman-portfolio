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
    window.addEventListener('scroll', onScroll)
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
        <a href="#top" className="logo">
          <span className="logo__mark">U</span>Usman<span className="accent">.dev</span>
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
          <button className="icon-btn" onClick={toggleTheme} aria-label="theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button className={`burger ${open ? 'is-open' : ''}`} onClick={() => setOpen(!open)} aria-label="menu">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
