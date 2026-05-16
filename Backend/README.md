# MoviePlusPro Backend

Node.js + Express + TypeScript REST API for the MoviePlusPro mobile app.

## Folder structure

```
Backend/
├── src/                 ← Source code (edit only these files)
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/          ← Seed / in-memory data
│   ├── routes/
│   ├── services/
│   ├── types/
│   ├── utils/
│   ├── app.ts
│   └── index.ts
├── dist/                ← Auto-generated on `npm run build` (gitignored)
├── node_modules/        ← Dependencies (gitignored)
├── package.json
├── tsconfig.json
└── .env.example
```

`src/` and `dist/` are **not duplicates** — `dist/` is compiled JavaScript created from `src/` when you run `npm run build`. For development, use `npm run dev` (runs TypeScript directly; no `dist/` needed).

## Setup

```bash
cd Backend
npm install
cp .env.example .env
npm run dev
```

Server runs at `http://localhost:3000/api`.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server (uses `src/`, no build step) |
| `npm run build` | Compile `src/` → `dist/` for production |
| `npm run start` | Run compiled app from `dist/` |
| `npm run clean` | Delete `dist/` folder |

## Android emulator

Use `http://10.0.2.2:3000/api` as `MOVIE_API_BASE_URL` in the React Native app.

## API endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/movies/home` | Home feed (featured, popular, today, recommended, categories) |
| GET | `/api/movies/popular` | Popular movies (legacy DTO for `movieService`) |
| GET | `/api/movies/featured` | Featured carousel movies |
| GET | `/api/movies/recommended` | Recommended movies |
| GET | `/api/movies/today` | Today highlight movie |
| GET | `/api/movies/search?q=` | Search movies by title/genre/category |
| GET | `/api/movies/:id` | Movie details |
| GET | `/api/actors?q=` | Search actors by name |
| GET | `/api/actors/search?q=` | Search by actor + related movies |
| GET | `/api/actors/:id` | Actor details |
| GET | `/api/actors/:id/movies` | Movies for an actor |
| GET | `/api/categories` | Category list |
| GET | `/api/search?q=` | Unified search (movies + actors) |

All success responses: `{ "success": true, "data": { ... } }`.
