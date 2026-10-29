import type { Dict } from '../i18n'
import { profile } from '../data/profile'
import { socials } from '../data/socials'
import BrandIcon from './BrandIcon'

export default function Footer({ d }: { d: Dict }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} {profile.fullName}. {d.rights}.</span>
        <div className="footer__socials">
          {socials
            .filter((s) => s.external)
            .map((s) => (
              <a key={s.brand} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
                <BrandIcon brand={s.brand} size={30} />
              </a>
            ))}
        </div>
      </div>
    </footer>
  )
}
