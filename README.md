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

- Coral, patina and endpaper never carry text on cream.
- Small colored labels use bindery green.
- The primary button uses a navy label on coral (5.31:1). Cream on coral is 2.15:1 and fails WCAG AA.
- Form errors use Red Pen Coral for the border and icon only. The message itself is set in ink.

## Where to drop the real logo

The header and footer use a placeholder wordmark in `components/site/Wordmark.tsx`, marked `TODO`.

1. Add the final files to `public/brand/`:
   - `wordmark.svg` (navy, for the header)
   - `wordmark-cream.svg` (for the footer)
2. In `Wordmark.tsx`, swap the placeholder `<svg>` for the `<img>` shown in the comment at the top of the file.
3. Replace `public/icon.svg` (favicon) and `public/og-image.png` (the social sharing card, 1200 x 630).

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

- [ ] Final vector logo (`components/site/Wordmark.tsx`, `public/brand/`)
- [ ] Favicon and social card image (`public/icon.svg`, `public/og-image.png`)
- [ ] Real photography: slots are marked in the Hero and Co-Authors sections. Every image needs alt text.
- [ ] Form provider (`FORM_ENDPOINT`)
- [ ] Analytics: a commented slot is in `app/layout.tsx`. Update `/privacy` if you add one.
- [ ] Social links (`content/site.ts`)
- [ ] Founder story and team (`content/pages.ts`, `about.story`)
- [ ] Legal review of the privacy policy, including a section on students under 18
- [ ] Confirm the production domain (`NEXT_PUBLIC_SITE_URL`)
