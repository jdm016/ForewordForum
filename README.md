# Foreword Forum website

Marketing site for Foreword Forum, a Dallas-based college and career readiness program for students ages 16 to 22. Its main job is collecting waitlist signups for Volume I (fall 2026).

Built with Next.js (App Router), TypeScript and Tailwind CSS.

## Run it locally

You need Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Other commands:

| Command | What it does |
| --- | --- |
| `npm run build` | Production build. Run this before deploying to catch errors. |
| `npm start` | Serves the production build. |
| `npm run typecheck` | Checks TypeScript types. |

The design system reference lives at `/styleguide`. It is hidden from search engines and not linked from the site.

## Editing content

All copy lives in `/content`. You can edit the text between quotes without touching any page code.

| File | What it holds |
| --- | --- |
| `content/site.ts` | Site name, email, SEO title and description, header and footer links, social links, legal line |
| `content/home.ts` | Every home page section, in page order |
| `content/pages.ts` | The About, Support and Privacy pages |

A few things to know:

- Headlines marked `// NEW` in `content/home.ts` were written during the build because the brief supplied body copy only. Edit them freely.
- On the home page, the word in `swipe` gets the coral highlighter.
- In `content/pages.ts`, `about.story` is `null` for now. Fill it in (founder story, team) and it appears on the About page automatically.
- Writing rules: no em or en dashes, no emoji, no exclamation points.

## Brand system

- **Tokens:** `tailwind.config.ts` (colors, type sizes, radius, spacing). Shadows and gradients are removed from the theme on purpose.
- **Type roles:** `app/globals.css` (`.type-title`, `.type-h1`, and so on).
- **Components:** `components/ui/` (Typography, Swipe, Pilcrow, SectionLabel, Button, Card, Icon, Reveal, Layout).
- **Icons:** Phosphor only, light weight, through the `Icon` component.

Color and accessibility rules:

- The pilcrow uses the shape from the logo and is navy by default.
- Coral, patina and endpaper never carry text on cream.
- Small colored labels use bindery green.
- The primary button uses a navy label on coral (5.31:1). Cream on coral is 2.15:1 and fails WCAG AA.
- Form errors use Red Pen Coral for the border and icon only. The message itself is set in ink.

## Logo and pilcrow

The logo was traced to vector from the approved artwork, which is kept at `brand-source/logo-original.png`. The files live in `public/brand/`:

| File | Use |
| --- | --- |
| `logo.svg` | Navy logo for cream backgrounds (header) |
| `logo-cream.svg` | Cream logo for the bindery green footer |
| `pilcrow.svg` | The pilcrow from the logo on its own |

- **Header and footer:** `components/site/Wordmark.tsx` places the logo.
- **Pilcrow:** everywhere on the site it uses the same traced shape from the logo (`components/ui/Pilcrow.tsx`), in navy by default.
- **Favicon and social card:** `public/icon.svg` and `public/og-image.png` (1200 x 630) are built from the same artwork.
- **Official vector files:** if a designer supplies them, save them over the files in `public/brand/`.

## Connecting the waitlist form

The form posts to `app/api/waitlist/route.ts`. The route validates the submission, filters bots with a hidden honeypot field, and forwards the signup as JSON.

Set these environment variables in your host (Vercel or Netlify project settings), or in `.env.local` for local testing:

| Variable | Required | Purpose |
| --- | --- | --- |
| `FORM_ENDPOINT` | Yes, for production | Any URL that accepts a JSON POST: Formspree, Basin, a Zapier or Make webhook, or your email tool's API |
| `FORM_ENDPOINT_TOKEN` | No | Sent as `Authorization: Bearer <token>` if your provider needs it |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Production URL for canonical links, the sitemap and social cards. Defaults to `https://forewordforum.com`. |

Without `FORM_ENDPOINT`, submissions are only printed to the server log. Nothing is saved.

The JSON sent to your provider:

```json
{ "name": "...", "email": "...", "role": "Student", "message": "...", "source": "forewordforum.com waitlist", "submittedAt": "2026-09-25T12:00:00.000Z" }
```

## Deploying

Every page is prerendered to static HTML. The waitlist API route runs as a serverless function. That is why the project does not use `output: "export"`: a fully static export cannot include the form endpoint.

- **Vercel:** import the repo and set the environment variables. No other configuration is needed.
- **Netlify:** import the repo. Netlify detects Next.js and installs its runtime automatically.

## Open TODOs

Search the code for `TODO` to find each one.

- [ ] Optional: swap in designer-supplied vector logo files (`public/brand/`)
- [ ] Real photography: slots are marked in the Hero and Co-Authors sections. Every image needs alt text.
- [ ] Form provider (`FORM_ENDPOINT`)
- [ ] Analytics: a commented slot is in `app/layout.tsx`. Update `/privacy` if you add one.
- [ ] Social links (`content/site.ts`)
- [ ] Founder story and team (`content/pages.ts`, `about.story`)
- [ ] Legal review of the privacy policy, including a section on students under 18
- [ ] Confirm the production domain (`NEXT_PUBLIC_SITE_URL`)
