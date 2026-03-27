# Guernsey Ducting — Claude Code Project

## What this is
Website for **Guernsey Ducting & Manufacturing Co Ltd** — a ducting manufacturer in Guernsey, Channel Islands. Built with Next.js 15 + Sanity CMS so the client can edit content themselves via `/studio`.

## Stack
- **Next.js 15** (App Router, TypeScript)
- **Sanity CMS** — project ID `4574t188`, dataset `production`
- **Hosted on Vercel** (when deployed)
- **Styling** — plain CSS in `app/globals.css`, no Tailwind

## First time setup
Run the setup script:
```bash
./setup.sh
```
This installs dependencies and creates `.env.local` automatically.

## Running locally
```bash
npm run dev
# Site:   http://localhost:3000
# Studio: http://localhost:3000/studio
```

## Environment variables (`.env.local`)
```
NEXT_PUBLIC_SANITY_PROJECT_ID=4574t188
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=skPMl1K1uL1RO5Qh6Vmx8KUf8VjELKcTqGP8L8qgeQQhJs3No5tziCDZ4wP8TfngM8P1HrE69ELmazd4roSVCKp7jJOSwfRCyr6pRCtLOGNK2b5crKedHcZxK3rLr94iMTGqqYMWIzgFAlznqsfJuMAJo6J35BzyizGKiCYMnENsgyOp2CsZ
```

## Key files
| File | Purpose |
|------|---------|
| `app/page.tsx` | Main page — fetches all Sanity data, passes to components |
| `app/globals.css` | All styles (navy/orange colour scheme) |
| `app/layout.tsx` | Root layout, SanityLive for real-time updates |
| `app/studio/[[...tool]]/page.tsx` | Embedded Sanity Studio |
| `sanity/lib/queries.ts` | Single GROQ query fetching all site content |
| `sanity/lib/live.ts` | `sanityFetch` + `SanityLive` setup |
| `sanity/schemaTypes/` | All CMS schema definitions |
| `sanity/structure.ts` | Custom Studio sidebar structure |
| `components/` | One file per section (Hero, Services, About, etc.) |

## Sanity content structure
All site content is editable in the Studio. Schema documents:
- `siteSettings` — phone, email, address, hours, company name
- `hero` — headline, badge, subheadline, CTA buttons, stats
- `about` — headline, two paragraphs, tick-list
- `whyUs` — headline + 4 reason pillars
- `service` — repeatable: title, description, icon, display order

## Client info
- **Company**: Guernsey Ducting & Manufacturing Co Ltd
- **Phone**: 01481 249268
- **Email**: guernseyducting@cwgsy.net
- **Address**: Bulwer Avenue, St Sampson, Guernsey GY1 3EB
- **Hours**: Monday – Friday, closes 4:30pm

## Colours / design tokens
All defined as CSS variables in `app/globals.css`:
- `--navy` `#0d1b2a` — dark background
- `--orange` `#f97316` — primary accent / CTAs
- `--blue` `#2563eb` — secondary accent / icons

## Deployment
Deploy to Vercel. Add the three env vars above in Vercel project settings.
CORS for `https://*.vercel.app` is already configured on the Sanity project.

## Branch
Working branch: `claude/guernsey-ducting-website-ETcBQ` (currently the default — rename to `main` on GitHub when ready)
