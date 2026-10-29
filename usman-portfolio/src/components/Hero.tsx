import type { Dict } from '../i18n'
import { profile, skills } from '../data/profile'
import { projects } from '../data/projects'
import { socials } from '../data/socials'
import BrandIcon from './BrandIcon'

const stats = [
  { icon: '/img/icons/rocket.png', value: String(projects.length) },
  { icon: '/img/icons/globe.png', value: String(projects.filter((p) => p.demo).length) },
  { icon: '/img/icons/laptop.png', value: String(skills.length) },
  { icon: '/img/icons/sparkles.png', value: '3' },
]

export default function Hero({ d }: { d: Dict }) {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" />
      <div className="container hero__inner">
        <div className="hero__text">
          <span className="badge">● {d.openToWork}</span>
          <h1>
            {d.hello} <img className="wave" src="/img/icons/wave.png" alt="" width={56} height={56} />
            <br />
            <span className="gradient">{profile.name}</span>
          </h1>
          <p className="hero__role mono">&lt;{d.role} /&gt;</p>
          <p className="hero__desc">{d.heroText}</p>
          <div className="hero__btns">
            <a href="#projects" className="btn btn--primary">{d.seeProjects} →</a>
            <a href="#contact" className="btn btn--ghost">{d.contactMe}</a>
          </div>
          <div className="socials">
            {socials
              .filter((s) => s.external)
              .map((s) => (
                <a key={s.brand} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
                  <BrandIcon brand={s.brand} size={40} />
                </a>
              ))}
          </div>
        </div>

        <div className="hero__card">
          <img className={`hero__avatar ${profile.avatar.includes('/icons/') ? 'is-placeholder' : ''}`} src={profile.avatar} alt={profile.name} width={256} height={256} />
          <div className="code">
            <div className="code__dots"><i /><i /><i /></div>
            <pre className="mono">
{`const developer = {
  name: "Usman",
  stack: ["React", "TypeScript",
          "Vite", "Node.js"],
  city: "Bishkek",
  projects: ${projects.length},
};`}
            </pre>
          </div>
        </div>
      </div>

      <div className="container stats">
        {stats.map((s, i) => (
          <div className="stat" key={d.stats[i]}>
            <img src={s.icon} alt="" width={44} height={44} />
            <b>{s.value}</b>
            <span>{d.stats[i]}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
