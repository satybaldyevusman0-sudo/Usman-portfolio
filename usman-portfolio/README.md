# Usman.dev — Портфолио (React + Vite + TypeScript)

Функциялар: 9 күчтүү проект, категория фильтри, издөө, проект модалы, KG/RU/EN тил,
күн/түн режими, бургер меню, мобилге ыңгайлуу, WhatsApp байланыш формасы.

## 1. Иштетүү (VS Code)
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # текшерүү: ката жок болушу керек
```

## 2. Өзүңүздүн маалыматтар
- `src/data/profile.ts` → `GITHUB_USER` ге GitHub логиниңизди жазыңыз
- `src/data/projects.ts` → ар бир проекттин `repo` (репо аты) жана `demo` (Vercel шилтемеси)
- Скриншот кошуу: сүрөттү `public/projects/italiaedu.png` кылып салып, проектке `image: '/projects/italiaedu.png'` кошуңуз

## 3. GitHub'ка чыгаруу
```bash
git init && git add . && git commit -m "Portfolio" && git branch -M main
gh repo create usman-portfolio --public --source=. --push
```

## 4. Vercel'ге деплой
1. https://vercel.com → **Continue with GitHub**
2. **Add New → Project** → `usman-portfolio` репосун тандаңыз → **Import**
3. Framework: **Vite** (өзү табат) → **Deploy**
4. Шилтеме даяр: `https://usman-portfolio.vercel.app`

Ар бир проект сайтыңызды да ушинтип Vercel'ге коюп, шилтемесин `projects.ts` ке жазыңыз.
