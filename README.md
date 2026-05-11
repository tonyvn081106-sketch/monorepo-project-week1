# Fullstack JavaScript — Lộ trình 8 tuần

Mini SaaS Full-Stack JS: **Next.js + NestJS + PostgreSQL + Redis + MinIO**

---

## Cấu trúc monorepo

```
root/
├── client/          # Next.js ≥ 14 (App Router) — Frontend
├── server/          # NestJS ≥ 10 — Backend API
├── e2e/             # Playwright — End-to-End tests
├── docs/            # diagrams, prompts, checklists
│   ├── architecture.mmd
│   ├── prompts.md
│   └── checklist.md
├── src/             # Shared utilities (Tuần 1)
├── test/            # Unit tests (Vitest)
├── .gitlab-ci.yml
├── .env.example
└── README.md
```

---

## Cách chạy

### 1. Cài đặt

```bash
# Yêu cầu: Node.js ≥ 20, npm ≥ 10
node -v
npm install
```

### 2. Cấu hình môi trường

```bash
cp .env.example .env
# Điền các giá trị thật vào .env
```

### 3. Chạy test (Tuần 1)

```bash
# Chạy unit tests
npm test

# Chạy với coverage report
npm run coverage

# Lint
npm run lint
```

### 4. Chạy toàn bộ stack (Docker)

```bash
# Khởi động PostgreSQL + Redis + MinIO
docker-compose up -d

# Frontend
npm run dev:client

# Backend
npm run dev:server
```

---

## Kết quả mong đợi (Tuần 1)

| Tiêu chí | Ngưỡng |
|----------|--------|
| Unit tests | 100% pass (≥ 6 cases) |
| Coverage statements/lines/functions | ≥ 60% |
| Coverage branches | ≥ 50% |
| Lint errors | 0 |

---

## Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js ≥ 14, TypeScript ≥ 5, Ant Design v5, Tailwind |
| Backend | NestJS ≥ 10, TypeScript ≥ 5 |
| Database | PostgreSQL ≥ 15 |
| Cache | Redis ≥ 7 |
| Storage | MinIO (S3 compatible) |
| Test | Vitest, RTL, Playwright, k6 |
| CI/CD | GitLab CI/CD |

---

## Naming convention

```
feature/wN-<tên>    # tính năng tuần N
fix/wN-<tên>        # bug fix tuần N
chore/wN-<tên>      # cấu hình, refactor
```

