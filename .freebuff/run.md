# Run doc — Enyew Yirga portfolio (Next.js)

Static multi-page portfolio (Home, Skills, Projects, Contact) plus a contact-form API route (`/api/contact`).

## Reproduce the artifacts

1. Dependencies are already present in `node_modules/` in this checkout — no install needed. In a fresh checkout: `npm install`
2. Production build: `npm run build` (outputs to `.next/`). This is the current serving method — faster startup than dev mode and no dev-server lock conflicts.
3. Contact-form email sending is optional: if `.env.local` exists with SMTP values (see `.env.example` in the main checkout — copy it there and fill it in, never commit secrets), the API route sends real email via nodemailer; otherwise it returns a clear "not configured" error and the form still shows a friendly message.

## Run the server

Port: **3001** (3000 is occupied by the user's own long-running dev server — do not touch it).

Start detached with PowerShell (stdout and stderr must go to different files):

```
powershell -NoProfile -Command "(Start-Process -FilePath 'npx.cmd' -ArgumentList 'next','start','-p','3001' -RedirectStandardOutput 'C:\Users\hp\Documents\Enyew\projects\portfolio\.freebuff\preview.log' -RedirectStandardError 'C:\Users\hp\Documents\Enyew\projects\portfolio\.freebuff\preview.log.err' -WindowStyle Hidden -PassThru).Id"
```

Then verify:

1. Process alive: `powershell -NoProfile -Command "Get-Process -Id <pid>"`
2. URL answers: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3001/projects` → expect `200`

Register with `register_preview` using the URL and pid. After rebuilds, kill the old pid first (`taskkill //PID <pid> //F`), rebuild, then re-run the start command.
