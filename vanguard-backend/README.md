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

| Variable               | Description                                                        |
|------------------------|--------------------------------------------------------------------|
| `ZOHO_USER`            | Zoho sender email address / SMTP user                              |
| `ZOHO_APP_PASSWORD`    | Zoho app password (legacy name `ZOHO_PASS` is also accepted)        |
| `MAIL_TO`              | Recipient email for inquiries                                      |
| `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile secret key (server-side verification)          |
| `ZOHO_NOREPLY_EMAIL`   | Optional no-reply sender for confirmations (falls back to `ZOHO_USER`) |

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

## Security notes

The `/api/contact` endpoint is protected by:

- **Cloudflare Turnstile** — every submission must carry a valid token, verified
  server-side against `TURNSTILE_SECRET_KEY`. Tokens are single-use (Cloudflare
  rejects replays), and the handler fails closed if the secret is unset.
- **Honeypot field** — hidden `hpField`; any value is treated as a bot and
  silently dropped.
- **Input validation** — required-field and email-format checks, plus per-field
  length caps.
- **Output encoding** — all user input is HTML-escaped before being placed in
  email bodies; the `From` header is built via nodemailer's object form to
  prevent header injection.
- **CORS** — strict origin allow-list, no wildcard.

### Not yet implemented: rate limiting

Turnstile raises the cost of automated abuse but does not cap volume, so a
determined actor solving challenges could still drive repeated sends. Serverless
functions have no built-in limiter and no shared memory between invocations, so
an in-memory counter would not work. To add real throttling, back it with
external state — e.g. **Vercel KV** or **Upstash Redis**:

```ts
// Sketch — add near the top of the handler, after captcha passes:
// import { kv } from '@vercel/kv';
// const key = `contact:rl:${ip}`;
// const count = await kv.incr(key);
// if (count === 1) await kv.expire(key, 3600);   // 1-hour window
// if (count > 5) return res.status(429).json({ error: 'Too many requests' });
```

Alternatively, configure a Cloudflare / Vercel WAF rate-limit rule in front of
the function (no code change required).
