// ✏️ ӨЗҮҢҮЗДҮН МААЛЫМАТТАРЫҢЫЗДЫ УШУЛ ЖЕРГЕ ЖАЗЫҢЫЗ

export const GITHUB_USER = 'GitHub' // ← GitHub логиниңизди жазыңыз

export const profile = {
  name: 'Усман Сатыбалдыев',
  email: 'satybaldyevusman0@gmail.com',
  whatsapp: '996774054601',
  instagram: 'satyba1dyev18',
  github: `https://github.com/${GITHUB_USER}`,
  location: 'Бишкек, Кыргызстан',
}

export type Skill = { name: string; level: number; icon: string }

export const skills: Skill[] = [
  { name: 'HTML5', level: 95, icon: '🧱' },
  { name: 'CSS3 / SCSS', level: 90, icon: '🎨' },
  { name: 'JavaScript', level: 88, icon: '⚡' },
  { name: 'TypeScript', level: 80, icon: '🔷' },
  { name: 'React', level: 85, icon: '⚛️' },
  { name: 'Vite', level: 85, icon: '🚀' },
  { name: 'REST API / Axios', level: 80, icon: '🔌' },
  { name: 'Git / GitHub', level: 85, icon: '🐙' },
  { name: 'Responsive дизайн', level: 92, icon: '📱' },
  { name: 'Vercel деплой', level: 90, icon: '▲' },
]
