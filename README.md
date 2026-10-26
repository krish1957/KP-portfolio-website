# KRISH© — Personal Portfolio

A bold, comic-inspired developer portfolio built with Next.js. Features an interactive
3D hero with floating character cards, roaming mascots with speech bubbles, and a fully
responsive neo-brutalist UI.

## Tech Stack

- **Next.js 16** + **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** — section transitions & roaming mascots
- **React Three Fiber** — interactive 3D hero scene

## Getting Started

```bash
# install dependencies (bun)
bun install

# run the dev server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> Using npm instead? `npm install` then `npm run dev` — works the same.

## Deployment

The easiest way to deploy is [Vercel](https://vercel.com):

1. Push this repo to GitHub
2. Import it on Vercel — the Next.js setup is auto-detected
3. Deploy. Every push to `main` redeploys automatically.

## Project Structure

```
src/
  app/            # app router: layout + single-page portfolio
  components/
    portfolio/    # hero, about, skills (arsenal), projects, journey, footer
    Scene3D.tsx   # interactive 3D hero (responsive card constellation)
    Roamer.tsx    # roaming mascot engine (waypoint paths + speech bubbles)
public/
  characters/     # mascot cutouts & cards
```

---

Built by Krish Panchal · [krishpanchal1957@gmail.com](mailto:krishpanchal1957@gmail.com)
