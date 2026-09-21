# Gramática

Довідник португальської граматики для україномовних.

Не курс і не тренажер лексики: швидкий пошук конструкції, формула, приклади PT-BR / PT-PT, типові помилки.

## Стек

- TanStack Start (React 19)
- TypeScript
- Tailwind CSS v4
- клієнтський пошук за каталогом тем

## Локальний запуск

Проєкт розрахований на запуск локально без зовнішньої бази даних: якщо `DATABASE_URL` не задано, сервер автоматично використовує вбудований PGLite. Локальна база живе в пам'яті процесу й скидається після перезапуску dev-сервера.

Потрібен Node.js із підтримкою сучасного ESM/TypeScript toolchain (рекомендовано актуальний LTS).

### Встановлення

```bash
npm install
```

### Режим розробки

Звичайний запуск:

```bash
npm run dev
```

Явно локальний режим, який прив'язує сервер тільки до localhost:

```bash
npm run dev:local
```

Після запуску відкрийте **http://localhost:8080**.

### Перевірка production-збірки локально

```bash
npm run build
npm run preview:local
```

Після запуску preview відкрийте **http://localhost:8081**.

> Для локального запуску `DATABASE_URL` не потрібен. Не створюйте власний `.env` лише для запуску сайту, якщо вам не потрібні додаткові інтеграції.

### Корисні перевірки

```bash
npm run typecheck
npm run lint
npm test
```

Якщо потрібна повністю чиста установка:

```bash
rm -rf node_modules
npm ci
npm run dev:local
```

У PowerShell еквівалент для очищення залежностей:

```powershell
Remove-Item -Recurse -Force node_modules
npm ci
npm run dev:local
```

## Контент

Контент тем лежить у `src/content/pages/`. Каталог навігації — `src/content/catalog.ts`.

## Локальна архітектура даних

Без `DATABASE_URL` використовується PGLite, а міграції з `migrations/*.sql` застосовуються автоматично. Якщо пізніше задати `DATABASE_URL`, застосунок переходить на PostgreSQL/Neon без зміни коду застосунку.
