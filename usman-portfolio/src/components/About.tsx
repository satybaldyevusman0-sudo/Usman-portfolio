import type { Dict } from '../i18n'
import { profile } from '../data/profile'

export default function About({ d }: { d: Dict }) {
  const info = [
    { icon: '/img/icons/location.png', text: profile.location, href: undefined },
    { icon: '/img/icons/phone.png', text: profile.phoneDisplay, href: `tel:${profile.phone}` },
    { icon: '/img/icons/email.png', text: profile.email, href: `mailto:${profile.email}` },
  ]

  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about__avatar">
          {/* Өз сүрөтүңүз үчүн: public/img/avatar.jpg салып, profile.ts'теги avatar жолун өзгөртүңүз */}
          <img className={profile.avatar.includes('/icons/') ? 'is-placeholder' : ''} src={profile.avatar} alt={profile.name} />
        </div>
        <div>
          <h2 className="title">{d.aboutTitle}</h2>
          <p className="lead">{d.aboutText}</p>
          <ul className="about__info">
            {info.map((i) => (
              <li key={i.text}>
                <img src={i.icon} alt="" width={28} height={28} />
                {i.href ? <a href={i.href}>{i.text}</a> : <span>{i.text}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
