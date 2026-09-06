# Jubeyar — Portfolio

A scroll-driven, story-based personal portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. The concept: **"From Conversations to Conversions"** — the visitor scrolls through your career progression from customer service to digital sales, with each chapter carrying its own visual metaphor.

## 1. Project structure

```
portfolio/
├── app/
│   ├── layout.tsx        Fonts (Fraunces + Inter), page metadata
│   ├── page.tsx          Assembles every section in story order
│   └── globals.css       Base styles, film-grain texture, reduced-motion rules
├── components/
│   ├── Navbar.tsx        Fixed nav, scroll-aware, animated mobile menu
│   ├── Hero.tsx          Word-by-word headline reveal
│   ├── StoryIntro.tsx    "It started with a conversation."
│   ├── ChapterSection.tsx  Reusable chapter template (used 4x)
│   ├── ChapterVisual.tsx   Visual metaphor per chapter (phone/call/sun/laptop)
│   ├── ChapterTransition.tsx  "Conversation → Opportunity" scroll morph
│   ├── CurrentChapter.tsx  University / "I'm still learning" section
│   ├── Timeline.tsx      Interactive horizontal/vertical career timeline
│   ├── Skills.tsx        Skill cards
│   ├── Lessons.tsx       "What experience taught me" statements
│   ├── About.tsx         Personal "beyond the job titles" section
│   ├── Achievements.tsx  Stat highlights
│   ├── Contact.tsx       Closing CTA + contact links
│   ├── Footer.tsx
│   ├── Counter.tsx       Animated number counter (used for stats)
│   └── MagneticButton.tsx  Magnetic-hover CTA button
└── data/
    └── config.ts         ALL your personal content lives here
```

## 2. Main components

Every section is its own component in `components/`. `app/page.tsx` just imports and orders them — reordering the story is as simple as reordering the imports there.

The four career chapters (Genex, SkyTech telesales, Solar campaign, digital/software sales) all render through the **same** `ChapterSection.tsx` component, fed by the `chapters` array in `data/config.ts`. That's what keeps the four chapters visually consistent without four separate files to maintain.

## 3. Animation system

- **Framer Motion** handles all scroll-reveal, hover, and layout animations (`whileInView`, `useScroll`, `useTransform`).
- The hero headline splits into words and reveals them with a staggered spring.
- `ChapterTransition.tsx` uses `useScroll` + `useTransform` to cross-fade "Conversation" into "Opportunity" as you scroll past it — the one deliberately cinematic moment in the page.
- `Counter.tsx` animates numbers up from 0 when a stat scrolls into view.
- `gsap` is included as a dependency if you want to extend any effect (e.g. pinning a section or building a more elaborate scrub animation) — it isn't required for anything currently on the page.
- All animation respects `prefers-reduced-motion` (see `globals.css`).

## 4. Where to edit your personal information

Everything lives in **`data/config.ts`**:

- `profile` — name, role, location, email, phone, LinkedIn, Fiverr
- `hero` — headline, subline, intro paragraph
- `chapters` — one object per career stage: dates, company, role, heading, body copy, process steps, and stats
- `currentlyLearning` — your university section
- `timeline` — the horizontal timeline entries
- `skills`, `lessons`, `about`, `achievements`, `contact`, `nav`

You do not need to touch any component file to update your story — just edit this one file.

## 5. Where to replace statistics

Two places:

- `chapters[].stats` in `data/config.ts` — currently only the Genex chapter has confirmed numbers (6 months, 80+ customers). Add a `stats` entry to any other chapter once you have a verified number, in the shape `{ value: 100, suffix: "+", label: "..." }`.
- `achievements` in `data/config.ts` — the summary stats grid near the bottom of the page. Any value still marked `"[NUMBER]"` is a placeholder — replace it once you have a confirmed figure. Don't invent numbers here.

## 6. Where to add your photo

Open `components/About.tsx` and find the dashed placeholder box (`Add your photo here`). Drop your photo into `public/photo.jpg`, then replace that placeholder `<motion.div>` with:

```tsx
import Image from "next/image";

<Image
  src="/photo.jpg"
  alt={profile.name}
  width={440}
  height={550}
  className="rounded-2xl border border-border object-cover"
/>
```

## 7. How to run the project

Requires [Node.js](https://nodejs.org) 18.17 or later.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the site
# http://localhost:3000

# When you're ready to deploy:
npm run build
npm run start
```

The easiest place to deploy is [Vercel](https://vercel.com) (made by the Next.js team) — connect the repo and it builds automatically. Netlify and Cloudflare Pages also support Next.js.

## Notes

- No sales figures, client names, or achievements have been invented anywhere on the site — only what's confirmed in your CV is shown, and everything else is an explicit, easy-to-find placeholder.
- The color palette is near-black with an off-white and warm brass accent — deliberately avoiding the generic AI-portfolio look (no cream/terracotta, no purple gradients).
