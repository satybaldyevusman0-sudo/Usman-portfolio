import { useState, type FormEvent } from 'react'
import type { Dict } from '../i18n'
import { profile } from '../data/profile'

export default function Contact({ d }: { d: Dict }) {
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')

  // Билдирүү WhatsApp'ка даяр текст катары ачылат
  const submit = (e: FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(`${name}: ${msg}`)
    window.open(`https://wa.me/${profile.whatsapp}?text=${text}`, '_blank')
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
            <a href={`mailto:${profile.email}`}>✉️ {profile.email}</a>
            <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer">💬 WhatsApp</a>
            <a href={`https://instagram.com/${profile.instagram}`} target="_blank" rel="noreferrer">📸 @{profile.instagram}</a>
            <a href={profile.github} target="_blank" rel="noreferrer">🐙 GitHub</a>
          </div>
        </div>
        <form className="form" onSubmit={submit}>
          <input className="input" required placeholder={d.formName} value={name} onChange={(e) => setName(e.target.value)} />
          <textarea className="input" required rows={5} placeholder={d.formMsg} value={msg} onChange={(e) => setMsg(e.target.value)} />
          <button className="btn btn--primary" type="submit">{d.send} →</button>
        </form>
      </div>
    </section>
  )
}
