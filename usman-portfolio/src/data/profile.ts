// ✏️ ӨЗҮҢҮЗДҮН МААЛЫМАТТАРЫҢЫЗДЫ УШУЛ ЖЕРГЕ ЖАЗЫҢЫЗ

export const GITHUB_USER = 'satybaldyevusman0-sudo'

const phone = '996774054601' // + белгисиз

export const profile = {
  name: 'Усман Сатыбалдыев',
  fullName: 'Сатыбалдыев Усман Каныбекович',
  email: 'satybaldyevusman0@gmail.com',
  phone: `+${phone}`,
  phoneDisplay: '+996 774 054 601',
  whatsapp: `https://wa.me/${phone}`,
  telegram: `https://t.me/+${phone}`,
  instagram: 'satyba1dyev18',
  instagramUrl: 'https://instagram.com/satyba1dyev18',
  github: `https://github.com/${GITHUB_USER}`,
  location: 'Бишкек, Кыргызстан',
  // Өзүңүздүн сүрөтүңүздү public/img/avatar.jpg кылып салып, ушул жолду '/img/avatar.jpg' кылыңыз
  avatar: '/img/icons/avatar.png',
}

export type Skill = {
  name: string
  level: number
  icon: string
  /** Кара логотип — караңгы темада ак кылып көрсөтүү үчүн */
  invert?: boolean
}

export const skills: Skill[] = [
  { name: 'HTML5', level: 95, icon: '/img/skills/html.svg' },
  { name: 'CSS3 / адаптив', level: 92, icon: '/img/skills/css.svg' },
  { name: 'JavaScript', level: 88, icon: '/img/skills/javascript.svg' },
  { name: 'TypeScript', level: 80, icon: '/img/skills/typescript.svg' },
  { name: 'React', level: 85, icon: '/img/skills/react.svg' },
  { name: 'Vite', level: 85, icon: '/img/skills/vite.svg' },
  { name: 'Node.js (serverless API)', level: 70, icon: '/img/skills/nodejs.svg' },
  { name: 'REST API / JSON', level: 80, icon: '/img/skills/api.png' },
  { name: 'Git', level: 85, icon: '/img/skills/git.svg' },
  { name: 'GitHub', level: 85, icon: '/img/skills/github.svg', invert: true },
  { name: 'Vercel деплой', level: 90, icon: '/img/skills/vercel.svg', invert: true },
  { name: 'Мобилдик дизайн', level: 92, icon: '/img/skills/responsive.png' },
]
