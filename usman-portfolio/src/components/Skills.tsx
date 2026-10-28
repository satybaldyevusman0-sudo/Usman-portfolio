import type { Dict } from '../i18n'
import { skills } from '../data/profile'

export default function Skills({ d }: { d: Dict }) {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <h2 className="title">{d.skillsTitle}</h2>
        <div className="skills">
          {skills.map((s) => (
            <div className="skill" key={s.name}>
              <div className="skill__head">
                <span>{s.icon} {s.name}</span>
                <span className="mono">{s.level}%</span>
              </div>
              <div className="bar"><div style={{ width: `${s.level}%` }} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
