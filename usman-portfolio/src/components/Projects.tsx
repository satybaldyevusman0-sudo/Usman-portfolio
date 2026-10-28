import { useMemo, useState } from 'react'
import type { Dict, Lang } from '../i18n'
import { projects, type Category, type Project } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

const cats: (Category | 'all')[] = ['all', 'shop', 'travel', 'edu', 'service']

export default function Projects({ d, lang }: { d: Dict; lang: Lang }) {
  const [cat, setCat] = useState<Category | 'all'>('all')
  const [q, setQ] = useState('')
  const [active, setActive] = useState<Project | null>(null)

  const list = useMemo(() => {
    const query = q.trim().toLowerCase()
    return projects.filter(
      (p) =>
        (cat === 'all' || p.category === cat) &&
        (!query ||
          p.title.toLowerCase().includes(query) ||
          p.short[lang].toLowerCase().includes(query) ||
          p.tech.some((x) => x.toLowerCase().includes(query))),
    )
  }, [cat, q, lang])

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="title">{d.projectsTitle}</h2>

        <div className="toolbar">
          <div className="chips">
            {cats.map((c) => (
              <button key={c} className={`chip ${c === cat ? 'active' : ''}`} onClick={() => setCat(c)}>
                {d.cats[c]}
              </button>
            ))}
          </div>
          <input className="input" placeholder={d.search} value={q} onChange={(e) => setQ(e.target.value)} />
        </div>

        {list.length === 0 ? (
          <p className="empty">{d.empty}</p>
        ) : (
          <div className="grid">
            {list.map((p) => (
              <ProjectCard key={p.id} p={p} d={d} lang={lang} onOpen={() => setActive(p)} />
            ))}
          </div>
        )}
      </div>

      {active && <ProjectModal p={active} d={d} lang={lang} onClose={() => setActive(null)} />}
    </section>
  )
}
