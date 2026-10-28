import type { Dict } from '../i18n'
import { profile } from '../data/profile'

export default function About({ d }: { d: Dict }) {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about__avatar">
          {/* Сүрөтүңүздү public/avatar.jpg кылып коюп, төмөнкүнү <img src="/avatar.jpg" /> менен алмаштырсаңыз болот */}
          <span>US</span>
        </div>
        <div>
          <h2 className="title">{d.aboutTitle}</h2>
          <p className="lead">{d.aboutText}</p>
          <ul className="about__info">
            <li>📍 {profile.location}</li>
            <li>✉️ {profile.email}</li>
            <li>📞 +{profile.whatsapp}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
