import { useState, type FormEvent } from 'react'
import type { Dict } from '../i18n'
import { profile } from '../data/profile'
import { socials } from '../data/socials'
import BrandIcon from './BrandIcon'

export default function Contact({ d }: { d: Dict }) {
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')

  // Билдирүү WhatsApp'ка даяр текст катары ачылат
  const submit = (e: FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(`${name.trim()}: ${msg.trim()}`)
    window.open(`${profile.whatsapp}?text=${text}`, '_blank', 'noopener')
    setName('')
    setMsg('')
  }

  return (
    <section id="contact" className="section section--alt">
      <div className="container contact">
        <div>
          <h2 className="title">{d.contactTitle}</h2>
          <p className="lead">{d.contactText}</p>
          <div className="contact__list">
            {socials.map((s) => (
              <a
                key={s.brand}
                href={s.href}
                target={s.external ? '_blank' : undefined}
                rel={s.external ? 'noreferrer' : undefined}
              >
                <BrandIcon brand={s.brand} size={42} />
                <span className="contact__text">
                  <b>{s.label}</b>
                  <small>{s.value}</small>
                </span>
                <span className="contact__arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
        <form className="form" onSubmit={submit}>
          <h3 className="form__title">
            <BrandIcon brand="whatsapp" size={32} /> {d.formTitle}
          </h3>
          <input className="input" required placeholder={d.formName} value={name} onChange={(e) => setName(e.target.value)} />
          <textarea className="input" required rows={5} placeholder={d.formMsg} value={msg} onChange={(e) => setMsg(e.target.value)} />
          <button className="btn btn--primary" type="submit">{d.send} →</button>
        </form>
      </div>
    </section>
  )
}
