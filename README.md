# MaineCoonCity V2

Premium marketplace prototype for Maine Coon kittens with a dark northern-forest visual system, public catalog routes, breeder/admin route shells, geo-ready catalog logic, and a layered GSAP/Lenis forest parallax hero.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- GSAP ScrollTrigger + Lenis
- Playwright
- Drizzle/PostGIS-ready data model

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Useful Commands

```bash
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

Asset pipeline:

```bash
npm run assets:extract
npm run assets:optimize
npm run assets:contact-sheet
```

The source asset board is kept at `public/raw-assets/maincoon-asset-board.png`. Generated site assets live in `public/maincoon-assets`.

## Public Routes

- `/`
- `/kittens`
- `/kittens/[slug]`
- `/maine-coon`
- `/breeders`
- `/contacts`

Private route shells exist under `/breeder/*` and `/admin/*`.

## Notes

Public kitten cards must use the MaineCoonCity contact only. Breeder phone numbers are not exposed publicly.
