import type { Dict } from '../i18n'
import { profile } from '../data/profile'

export default function Footer({ d }: { d: Dict }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} {profile.name}. {d.rights}.</span>
        <span className="mono">React + TypeScript + Vite · Vercel</span>
      </div>
    </footer>
  )
}
