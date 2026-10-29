import type { Dict, Lang } from '../i18n'
import type { Project } from '../data/projects'

type Props = { p: Project; d: Dict; lang: Lang; onOpen: () => void }

export default function ProjectCard({ p, d, lang, onOpen }: Props) {
  return (
    <article className="card">
      <button className="card__cover" style={{ background: p.color }} onClick={onOpen} aria-label={`${p.title} — ${d.details}`}>
        <img src={p.image} alt="" width={256} height={256} loading="lazy" />
      </button>
      <div className="card__body">
        <h3>{p.title}</h3>
        <p>{p.short[lang]}</p>
        <div className="tags">
          {p.tech.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
        <div className="card__links">
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn--primary btn--sm">{d.demo} ↗</a>
          )}
          <a href={p.repo} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">{d.code}</a>
          <button className="link" onClick={onOpen}>{d.details}</button>
        </div>
      </div>
    </article>
  )
}
