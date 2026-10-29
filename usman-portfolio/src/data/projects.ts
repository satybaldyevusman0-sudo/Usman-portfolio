import { GITHUB_USER } from './profile'

export type Category = 'shop' | 'travel' | 'edu' | 'service'

export type Project = {
  id: string
  title: string
  image: string // public/img/projects/... сүрөт
  color: string // сүрөттүн фонундагы градиент
  category: Category
  short: { kg: string; en: string; ru: string }
  features: string[]
  tech: string[]
  repo: string // GitHub репонун аты
  demo?: string // Vercel шилтемеси (жок болсо, баскыч көрүнбөйт)
}

const gh = (repo: string) => `https://github.com/${GITHUB_USER}/${repo}`

const react = ['React', 'Vite', 'Node.js', 'Vercel']
const vanilla = ['HTML', 'CSS', 'JavaScript', 'API']

// Бардык шилтемелер GitHub профилиңизден алынды жана текшерилди
const raw: Project[] = [
  {
    id: 'italiaedu',
    title: 'ItaliaEdu',
    image: '/img/projects/italiaedu.png',
    color: 'linear-gradient(135deg,#009246,#f1f2f1 50%,#ce2b37)',
    category: 'edu',
    short: {
      kg: 'Италиядагы университеттерге тапшырууга жардам берген борбордун сайты: 24 позиция, 5 категория.',
      en: 'Website of a centre that helps students apply to Italian universities: 24 items, 5 categories.',
      ru: 'Сайт центра поступления в университеты Италии: 24 позиции, 5 категорий.',
    },
    features: ['Университеттер каталогу', 'Издөө жана фильтр', 'Тапшыруу формасы', 'Serverless API', 'Админ панель'],
    tech: react,
    repo: 'italiaedu',
    demo: 'https://italiaedu.vercel.app',
  },
  {
    id: 'studyitalia',
    title: 'StudyItalia.kg',
    image: '/img/projects/studyitalia.png',
    color: 'linear-gradient(135deg,#1e3c72,#2a5298)',
    category: 'edu',
    short: {
      kg: 'Италияда окуу боюнча маалымат порталы: университеттер, шаарлар жана тапшыруу кадамдары.',
      en: 'Study-in-Italy portal: universities, cities and application steps.',
      ru: 'Портал об учёбе в Италии: университеты, города и шаги поступления.',
    },
    features: ['Университеттер', 'Шаарлар', 'Тапшыруу кадамдары', 'Байланыш формасы'],
    tech: vanilla,
    repo: 'italy3',
    demo: 'https://italy3-five.vercel.app',
  },
  {
    id: 'megashop',
    title: 'MegaShop',
    image: '/img/projects/megashop.png',
    color: 'linear-gradient(135deg,#ff512f,#dd2476)',
    category: 'shop',
    short: {
      kg: 'Бишкектеги универсалдуу онлайн дүкөн: электроникадан азык-түлүккө чейин, 28 товар, 6 категория.',
      en: 'Universal online store in Bishkek: from electronics to groceries, 28 items, 6 categories.',
      ru: 'Универсальный интернет-магазин в Бишкеке: от электроники до продуктов, 28 товаров, 6 категорий.',
    },
    features: ['Каталог жана категориялар', 'Себет', 'Заказ берүү', 'Serverless API', 'Админ панель'],
    tech: react,
    repo: 'megashop',
    demo: 'https://megashop-neon.vercel.app',
  },
  {
    id: 'stylemarket',
    title: 'StyleMarket',
    image: '/img/projects/stylemarket.png',
    color: 'linear-gradient(135deg,#ee9ca7,#a770ef)',
    category: 'shop',
    short: {
      kg: 'Кийим-кече дүкөнү: заманбап бренддер жана кыргыз дизайнерлери, 28 товар, 6 категория.',
      en: 'Clothing store: modern brands and Kyrgyz designers, 28 items, 6 categories.',
      ru: 'Магазин одежды: современные бренды и кыргызские дизайнеры, 28 товаров, 6 категорий.',
    },
    features: ['Каталог', 'Өлчөм тандоо', 'Себет', 'Заказ берүү', 'Админ панель'],
    tech: react,
    repo: 'stylemarket',
    demo: 'https://stylemarket-alpha.vercel.app',
  },
  {
    id: 'autolux',
    title: 'AutoLux',
    image: '/img/projects/autolux.png',
    color: 'linear-gradient(135deg,#232526,#5a5d61)',
    category: 'shop',
    short: {
      kg: 'Бишкектеги премиум автосалондун сайты: моделдер, баалар жана тест-драйвга жазылуу.',
      en: 'Premium car dealership in Bishkek: models, prices and test-drive booking.',
      ru: 'Премиум-автосалон в Бишкеке: модели, цены и запись на тест-драйв.',
    },
    features: ['Модел каталогу', 'Баалар', 'Тест-драйв', 'Байланыш'],
    tech: react,
    repo: 'Claude_files',
    demo: 'https://autolux-kg.vercel.app',
  },
  {
    id: 'flykg',
    title: 'FlyKG',
    image: '/img/projects/flykg.png',
    color: 'linear-gradient(135deg,#00b4db,#0083b0)',
    category: 'travel',
    short: {
      kg: 'Кыргызстандагы онлайн авиакасса: 20дан ашык авиакомпаниянын билеттери, 26 позиция.',
      en: 'Online air-ticket office in Kyrgyzstan: tickets from 20+ airlines, 26 items.',
      ru: 'Онлайн-авиакасса Кыргызстана: билеты 20+ авиакомпаний, 26 позиций.',
    },
    features: ['Рейс издөө', 'Билет брондоо', '5 категория', 'Serverless API'],
    tech: react,
    repo: 'flykg',
  },
  {
    id: 'alatoohotels',
    title: 'Ala-Too Hotels',
    image: '/img/projects/alatoohotels.png',
    color: 'linear-gradient(135deg,#c79081,#dfa579)',
    category: 'travel',
    short: {
      kg: 'Мейманканаларды брондоо SPA сайты: маалымат API аркылуу, күн/түн темасы.',
      en: 'Hotel booking SPA: data via API, light/dark theme.',
      ru: 'SPA бронирования отелей: данные через API, светлая/тёмная тема.',
    },
    features: ['Мейманканалар', 'Брондоо', 'Күн / түн режими', 'Адаптив'],
    tech: vanilla,
    repo: 'alatoohotels',
  },
  {
    id: 'kinotime',
    title: 'KinoTime',
    image: '/img/projects/kinotime.png',
    color: 'linear-gradient(135deg,#141e30,#243b55)',
    category: 'service',
    short: {
      kg: 'Бишкектеги заманбап кинотеатрдын сайты: афиша, сеанстар жана билет брондоо.',
      en: 'Modern cinema in Bishkek: schedule, sessions and ticket booking.',
      ru: 'Современный кинотеатр в Бишкеке: афиша, сеансы и бронирование билетов.',
    },
    features: ['Афиша', 'Сеанстар', 'Билет брондоо', 'Күн / түн режими'],
    tech: vanilla,
    repo: 'kinotime',
    demo: 'https://kinotime-mu.vercel.app',
  },
  {
    id: 'kitepkana',
    title: 'KitepKana',
    image: '/img/projects/kitepkana.png',
    color: 'linear-gradient(135deg,#8e2de2,#4a00e0)',
    category: 'shop',
    short: {
      kg: 'Китеп дүкөнү жана окуу клубу: китептер каталогу, себет жана клубга катталуу.',
      en: 'Bookstore and reading club: book catalog, cart and club sign-up.',
      ru: 'Книжный магазин и клуб чтения: каталог книг, корзина и запись в клуб.',
    },
    features: ['Китеп каталогу', 'Себет', 'Окуу клубу', 'Адаптив'],
    tech: vanilla,
    repo: 'kitepkana',
    demo: 'https://kitepkana-six.vercel.app',
  },
  {
    id: 'dastorkon',
    title: 'Dastorkon',
    image: '/img/projects/dastorkon.png',
    color: 'linear-gradient(135deg,#f12711,#f5af19)',
    category: 'service',
    short: {
      kg: 'Улуттук тамак-аш жана ресторан SPA сайты: меню API аркылуу, күн/түн темасы.',
      en: 'National cuisine restaurant SPA: menu via API, light/dark theme.',
      ru: 'SPA ресторана национальной кухни: меню через API, светлая/тёмная тема.',
    },
    features: ['Меню', 'Категориялар', 'Заказ', 'Күн / түн режими'],
    tech: vanilla,
    repo: 'dastorkon',
  },
]

export const projects: Project[] = raw.map((p) => ({ ...p, repo: gh(p.repo) }))
