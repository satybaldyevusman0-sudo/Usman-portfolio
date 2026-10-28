import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { t, type Lang } from './i18n'

export type Theme = 'light' | 'dark'

const read = <T extends string>(key: string, fallback: T): T => {
  try {
    return (localStorage.getItem(key) as T) || fallback
  } catch {
    return fallback
  }
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => read<Theme>('theme', 'dark'))
  const [lang, setLang] = useState<Lang>(() => read<Lang>('lang', 'kg'))

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { /* ignore */ }
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang === 'kg' ? 'ky' : lang
    try { localStorage.setItem('lang', lang) } catch { /* ignore */ }
  }, [lang])

  const d = t(lang)

  return (
    <>
      <Navbar d={d} lang={lang} setLang={setLang} theme={theme} toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero d={d} />
        <About d={d} />
        <Skills d={d} />
        <Projects d={d} lang={lang} />
        <Contact d={d} />
      </main>
      <Footer d={d} />
    </>
  )
}
