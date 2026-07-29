# People Pulse

Initial full-stack starter for the Aimprosoft HR survey platform.

## Included in v0.1

- Next.js App Router + TypeScript
- branded application shell
- dashboard
- surveys list
- health API: `/api/health`
- responsive layout
- mock data only (database comes next)

## Run locally

Requires an Active LTS Node.js version.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy without Docker

Recommended first deployment: import the GitHub repository into Vercel and deploy with default Next.js settings.

## Upload to GitHub through the browser

1. Download and extract the ZIP.
2. Open the private `people-pulse` repository.
3. Select **Add file → Upload files**.
4. Upload the extracted files and folders, not the ZIP itself.
5. Commit directly to `main` for this initial setup.

## Next iteration

- choose hosted PostgreSQL
- Prisma data model and migrations
- CRUD for surveys and questions
- anonymous participant/response separation
- Zoho People integration stub

## Brand asset note

`components/logo.tsx` contains a temporary vector approximation. Replace it with the official Aimprosoft SVG from the company brand book before production use.
