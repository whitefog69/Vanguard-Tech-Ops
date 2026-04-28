# Vanguard Tech Ops — Backend API

Serverless backend for the Vanguard Tech Ops contact form.  
Deployed on **Vercel**. Frontend lives separately on **GitHub Pages**.

## Architecture

```
GitHub Pages                       Vercel
────────────────────               ──────────────────────────
vanguardtechops.com   ──POST──►   /api/contact
(React SPA)                        └── emailService.ts (Zoho SMTP)
```

## Project Structure

```
vanguard-backend/
├── api/
│   └── contact.ts          ← Vercel serverless function
├── src/
│   └── lib/
│       └── emailService.ts ← Nodemailer Zoho SMTP client
├── vercel.json             ← Vercel config
├── tsconfig.json           ← TypeScript config (CommonJS for Node)
├── package.json            ← Backend-only dependencies
└── .env.example            ← Environment variable reference
```

## Environment Variables

Set these in **Vercel Dashboard → Project → Settings → Environment Variables**:

| Variable     | Description                        |
|--------------|------------------------------------|
| `ZOHO_USER`  | Zoho sender email address          |
| `ZOHO_PASS`  | Zoho app password                  |
| `MAIL_TO`    | Recipient email for inquiries      |

> ⚠️ Never commit a real `.env` file. Use `.env.example` as reference only.

## Deploy

1. Push this folder to its own GitHub repo
2. Go to [vercel.com](https://vercel.com) → Import Project → select that repo
3. Add the 3 environment variables above
4. Deploy → copy the URL (e.g. `https://vanguard-backend.vercel.app`)
5. Update the `fetch()` URL in the frontend contact form to that URL

## Local Test (optional)

```bash
npm install
npx vercel dev
```
