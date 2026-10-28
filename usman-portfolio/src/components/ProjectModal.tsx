import { useEffect } from 'react'
import type { Dict, Lang } from '../i18n'
import type { Project } from '../data/projects'

type Props = { p: Project; d: Dict; lang: Lang; onClose: () => void }

export default function ProjectModal({ p, d, lang, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__box" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label={d.close}>✕</button>
        <div className="modal__cover" style={{ background: p.color }}>
          {p.image ? <img src={p.image} alt={p.title} /> : <span>{p.emoji}</span>}
        </div>
        <div className="modal__body">
          <h3>{p.title}</h3>
          <p>{p.short[lang]}</p>
          <h4>{d.features}</h4>
          <ul className="checks">
            {p.features.map((f) => <li key={f}>✓ {f}</li>)}
          </ul>
          <div className="tags">
            {p.tech.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
          <div className="card__links">
            <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn--primary">{d.demo} ↗</a>
            <a href={p.repo} target="_blank" rel="noreferrer" className="btn btn--ghost">{d.code}</a>
          </div>
        </div>
      </div>
    </div>
  )
}
