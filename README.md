# Pramaan

An evidence-led research platform built with Next.js App Router.

## Run locally

```sh
npm install
npm run dev
```

The app runs at `http://localhost:3000`.

## Buy Me a Coffee

Pramaan uses Buy Me a Coffee for external financial support. Copy `.env.example` to `.env.local`
and set:

```env
NEXT_PUBLIC_BUYMEACOFFEE_URL=https://buymeacoffee.com/<username>
```

Use your actual public profile URL in `.env.local`; the username is not hardcoded in the app.
The Buy Me a Coffee account, payment processing, supporter details, and payout configuration are
managed externally. The first payout may require account review and payout setup through Stripe;
that process is handled in Buy Me a Coffee, outside this application. Pramaan stores only the public
profile URL and does not process or store payment information.

If the URL is missing or malformed, support links are not rendered as broken links. Development
shows setup guidance and logs a warning; production omits the unavailable CTA.

## Current scope

This workspace started empty, so this release is a responsive frontend with demonstration content
and framework-independent editorial data contracts. Every investigation and source record is
marked as mock; none should be treated as a researched finding or citation. The claim form is
client-side only and does not persist submissions. Persistent storage, authentication and editorial
admin workflows are not connected yet.

## Routes

- `/` — editorial homepage
- `/investigations` — searchable and filterable mock archive
- `/investigation/[slug]` — investigation template with structured source previews
- `/categories`, `/sources`, `/timeline` — exploration views
- `/methodology`, `/transparency`, `/corrections`, `/about` — editorial policies
- `/submit` — claim submission form demonstration
- `/support` — external Buy Me a Coffee support information

SEO metadata, sitemap and robots routes are included. Replace the `pramaan.org` sitemap origin and
demo records before deployment.
