# People Pulse

Internal HR survey platform built with Next.js, Prisma and PostgreSQL.

## Current functionality

- Dashboard prototype
- PostgreSQL connection through Supabase
- Prisma schema and production migration
- Survey list loaded from the database
- Real survey creation form

## Deployment

Vercel requires these environment variables:

- `DATABASE_URL` — Supabase transaction pooler, port 6543
- `DIRECT_URL` — Supabase session pooler, port 5432

The build command runs:

```bash
prisma generate && prisma migrate deploy && next build
```

This applies committed migrations before building the application.
