import { FaGithub, FaInstagram, FaPhoneAlt, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export type Brand = 'whatsapp' | 'telegram' | 'instagram' | 'github' | 'phone' | 'email'

// Ар бир тармактын расмий түсү жана формасы
const brands = {
  whatsapp: { icon: FaWhatsapp, bg: 'linear-gradient(180deg,#5ffc7b,#28d146)', round: true, scale: 0.62 },
  telegram: { icon: FaTelegramPlane, bg: 'linear-gradient(180deg,#37aee2,#1e96c8)', round: true, scale: 0.55 },
  instagram: {
    icon: FaInstagram,
    bg: 'radial-gradient(circle at 30% 107%,#fdf497 0%,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%)',
    round: false,
    scale: 0.62,
  },
  github: { icon: FaGithub, bg: '#181717', round: true, scale: 0.66 },
  phone: { icon: FaPhoneAlt, bg: 'linear-gradient(180deg,#6d5dfc,#22d3ee)', round: true, scale: 0.46 },
  email: { icon: MdEmail, bg: 'linear-gradient(180deg,#ff6a5c,#ea4335)', round: false, scale: 0.58 },
} as const

export default function BrandIcon({ brand, size = 44 }: { brand: Brand; size?: number }) {
  const { icon: Icon, bg, round, scale } = brands[brand]
  return (
    <span
      className={`brand ${round ? 'brand--round' : ''} brand--${brand}`}
      style={{ width: size, height: size, background: bg }}
      aria-hidden
    >
      <Icon size={size * scale} />
    </span>
  )
}
