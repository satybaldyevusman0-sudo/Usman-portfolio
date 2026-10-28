import type { Dict } from '../i18n'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

export default function Hero({ d }: { d: Dict }) {
  const numbers = ['20+', String(projects.length), '300+', '3']

  return (
    <section id="top" className="hero">
      <div className="hero__glow" />
      <div className="container hero__inner">
        <div className="hero__text">
          <span className="badge">● Open to work</span>
          <h1>
            {d.hello} <span className="gradient">{profile.name}</span>
          </h1>
          <p className="hero__role mono">&lt;{d.role} /&gt;</p>
          <p className="hero__desc">{d.heroText}</p>
          <div className="hero__btns">
            <a href="#projects" className="btn btn--primary">{d.seeProjects} →</a>
            <a href="#contact" className="btn btn--ghost">{d.contactMe}</a>
          </div>
          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={`https://instagram.com/${profile.instagram}`} target="_blank" rel="noreferrer">Instagram</a>
            <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>

        <div className="hero__card">
          <div className="code">
            <div className="code__dots"><i /><i /><i /></div>
            <pre className="mono">
{`const developer = {
  name: "Usman",
  stack: ["React", "TypeScript",
          "Vite", "Vercel"],
  city: "Bishkek",
  coffee: Infinity,
};`}
            </pre>
          </div>
        </div>
      </div>

      <div className="container stats">
        {d.stats.map((label, i) => (
          <div className="stat" key={label}>
            <b>{numbers[i]}</b>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
