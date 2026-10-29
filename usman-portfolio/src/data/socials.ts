import type { Brand } from '../components/BrandIcon'
import { profile } from './profile'

export type Social = { brand: Brand; label: string; value: string; href: string; external: boolean }

export const socials: Social[] = [
  { brand: 'whatsapp', label: 'WhatsApp', value: profile.phoneDisplay, href: profile.whatsapp, external: true },
  { brand: 'telegram', label: 'Telegram', value: profile.phoneDisplay, href: profile.telegram, external: true },
  { brand: 'instagram', label: 'Instagram', value: `@${profile.instagram}`, href: profile.instagramUrl, external: true },
  { brand: 'phone', label: 'Телефон', value: profile.phoneDisplay, href: `tel:${profile.phone}`, external: false },
  { brand: 'email', label: 'Email', value: profile.email, href: `mailto:${profile.email}`, external: false },
  { brand: 'github', label: 'GitHub', value: profile.github.replace('https://', ''), href: profile.github, external: true },
]
