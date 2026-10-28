import { GITHUB_USER } from './profile'

export type Category = 'shop' | 'travel' | 'edu' | 'service'

export type Project = {
  id: string
  title: string
  emoji: string
  color: string // карточканын градиенти
  category: Category
  short: { kg: string; en: string; ru: string }
  features: string[]
  tech: string[]
  repo: string // GitHub репонун аты
  demo: string // Vercel шилтемеси
  image?: string // public/projects/... скриншот (милдеттүү эмес)
}

const gh = (repo: string) => `https://github.com/${GITHUB_USER}/${repo}`

// ✏️ demo шилтемелерин Vercel'ден алган шилтемелериңизге алмаштырыңыз
const raw: Project[] = [
  {
    id: 'italiaedu',
    title: 'ItaliaEdu',
    emoji: '🎓',
    color: 'linear-gradient(135deg,#009246,#f1f2f1 50%,#ce2b37)',
    category: 'edu',
    short: {
      kg: 'Италиядагы 17 университет: издөө, фильтр, тапшыруу формасы, админ панель.',
      en: '17 Italian universities: search, filters, application form and admin panel.',
      ru: '17 университетов Италии: поиск, фильтры, форма заявки, админ-панель.',
    },
    features: ['Издөө жана фильтр', 'Каттоо / Кирүү', 'Админ CRUD', 'KG / RU / EN', 'Күн / түн режими'],
    tech: ['React', 'TypeScript', 'API'],
    repo: 'italia-edu',
    demo: 'https://italia-edu.vercel.app',
  },
  {
    id: 'travelgo',
    title: 'TravelGo',
    emoji: '✈️',
    color: 'linear-gradient(135deg,#00b4db,#0083b0)',
    category: 'travel',
    short: {
      kg: 'Кыргызстандан чет өлкөгө турлар: брондоо, себет, сын-пикир жана рейтинг.',
      en: 'Tours from Kyrgyzstan abroad: booking, cart, reviews and ratings.',
      ru: 'Туры из Кыргызстана за рубеж: бронирование, корзина, отзывы и рейтинг.',
    },
    features: ['Брондоо', 'Себет', 'Тандалмалар', 'Рейтинг', 'WhatsApp байланыш'],
    tech: ['React', 'JavaScript', 'LocalStorage'],
    repo: 'travel-go',
    demo: 'https://travel-go.vercel.app',
  },
  {
    id: 'kgtours',
    title: 'Kyrgyzstan Tours',
    emoji: '🏔️',
    color: 'linear-gradient(135deg,#e52d27,#f7b733)',
    category: 'travel',
    short: {
      kg: 'Кыргызстандын 7 облусу боюнча турлар — ар бир облуска 3+ тур.',
      en: 'Tours across all 7 regions of Kyrgyzstan — 3+ tours per region.',
      ru: 'Туры по 7 областям Кыргызстана — от 3 туров на область.',
    },
    features: ['Облус фильтри', 'Тур деталдары', 'Брондоо формасы', 'Пагинация'],
    tech: ['React', 'TypeScript', 'CSS'],
    repo: 'kyrgyzstan-tours',
    demo: 'https://kyrgyzstan-tours.vercel.app',
  },
  {
    id: 'autolux',
    title: 'AutoLux — Changan',
    emoji: '🚗',
    color: 'linear-gradient(135deg,#232526,#414345)',
    category: 'shop',
    short: {
      kg: 'Changan автосалону: моделдер, баалар, тест-драйвга жазылуу, кредит калькулятор.',
      en: 'Changan car dealer: models, prices, test-drive booking, loan calculator.',
      ru: 'Автосалон Changan: модели, цены, запись на тест-драйв, кредитный калькулятор.',
    },
    features: ['Модел каталогу', 'Салыштыруу', 'Кредит калькулятор', 'Тест-драйв'],
    tech: ['React', 'TypeScript', 'Recharts'],
    repo: 'autolux',
    demo: 'https://autolux.vercel.app',
  },
  {
    id: 'megashop',
    title: 'MegaShop',
    emoji: '🛍️',
    color: 'linear-gradient(135deg,#ff512f,#dd2476)',
    category: 'shop',
    short: {
      kg: 'Чоң онлайн дүкөн: себет, заказ, төлөм демо (Stripe), ролдор жана админ.',
      en: 'Large online store: cart, checkout, Stripe demo payment, roles and admin.',
      ru: 'Большой интернет-магазин: корзина, заказ, оплата Stripe (демо), роли, админ.',
    },
    features: ['Себет', 'Checkout', 'Stripe демо', 'JWT + Private routes', 'Skeleton loading'],
    tech: ['React', 'TypeScript', 'REST API'],
    repo: 'mega-shop',
    demo: 'https://mega-shop.vercel.app',
  },
  {
    id: 'foodexpress',
    title: 'FoodExpress',
    emoji: '🍔',
    color: 'linear-gradient(135deg,#f12711,#f5af19)',
    category: 'service',
    short: {
      kg: 'Тамак жеткирүү: меню, себет, заказ статусу, Telegram ботко билдирүү.',
      en: 'Food delivery: menu, cart, order status and Telegram bot notifications.',
      ru: 'Доставка еды: меню, корзина, статус заказа, уведомления в Telegram-бот.',
    },
    features: ['Меню категориялары', 'Себет', 'Заказ статусу', 'Telegram бот'],
    tech: ['React', 'JavaScript', 'API'],
    repo: 'food-express',
    demo: 'https://food-express.vercel.app',
  },
  {
    id: 'moviehub',
    title: 'MovieHub',
    emoji: '🎬',
    color: 'linear-gradient(135deg,#141e30,#243b55)',
    category: 'service',
    short: {
      kg: 'Кино каталогу: API аркылуу фильмдер, издөө, тандалмалар, пагинация.',
      en: 'Movie catalog: films via API, search, favorites and pagination.',
      ru: 'Каталог фильмов: данные через API, поиск, избранное, пагинация.',
    },
    features: ['Сырткы API', 'Издөө', 'Тандалмалар', 'Пагинация', 'Error boundary'],
    tech: ['React', 'TypeScript', 'Axios'],
    repo: 'movie-hub',
    demo: 'https://movie-hub.vercel.app',
  },
  {
    id: 'jobfinder',
    title: 'JobFinder',
    emoji: '💼',
    color: 'linear-gradient(135deg,#11998e,#38ef7d)',
    category: 'service',
    short: {
      kg: 'Жумуш издөө платформасы: вакансиялар, фильтр, резюме жөнөтүү, статистика.',
      en: 'Job search platform: vacancies, filters, resume submission and stats.',
      ru: 'Платформа поиска работы: вакансии, фильтры, отправка резюме, статистика.',
    },
    features: ['Вакансия фильтри', 'Резюме жүктөө', 'Ролдор', 'Recharts статистика'],
    tech: ['React', 'TypeScript', 'Recharts'],
    repo: 'job-finder',
    demo: 'https://job-finder.vercel.app',
  },
  {
    id: 'aiworld',
    title: 'AI World',
    emoji: '🤖',
    color: 'linear-gradient(135deg,#6d5dfc,#b06ab3)',
    category: 'edu',
    short: {
      kg: 'Жасалма интеллект куралдары жана сабактар: чатбот, каталог, блог.',
      en: 'AI tools and lessons: chatbot, catalog and blog.',
      ru: 'Инструменты и уроки по ИИ: чат-бот, каталог, блог.',
    },
    features: ['Чатбот', 'Курал каталогу', 'Блог', 'Күн / түн режими'],
    tech: ['React', 'TypeScript', 'Vite'],
    repo: 'ai-world',
    demo: 'https://ai-world.vercel.app',
  },
]

export const projects: Project[] = raw.map((p) => ({ ...p, repo: gh(p.repo) }))
