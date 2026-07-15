# Irene's Portfolio — Documentation

Personal portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## Quick Start

```bash
# Install dependencies
npm install

# Development (hot reload)
npm run dev

# Production build + preview
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) after running `npm run dev`.

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local development with hot reload |
| `npm run build` | Compile optimized production build |
| `npm run start` | Serve production build (requires `build` first) |
| `npm run lint` | Run ESLint |

---

## Page Structure & Order

Sections appear in this order on the homepage (`app/page.tsx`):

1. **Hero** — Lanyard 3D card + intro
2. **About Me** — Bio + profile photo
3. **Work Experience** — Internships & jobs
4. **Education & Activities** — University info + org involvement
5. **Projects** — Filterable project grid
6. **Skills** — Tech stack by category
7. **Certifications** — Certificate gallery
8. **Awards** — Competition achievements
9. **Footer** — Social links

---

## Project Structure

```
portfolio-irene/
├── app/
│   ├── page.tsx                          # Homepage layout & section order
│   ├── layout.tsx                        # Navbar, theme provider, global shell
│   ├── globals.css                       # Theme colors, utilities (nav-chip)
│   ├── aboutme/AboutMe.tsx               # About section
│   ├── work-experience/
│   │   ├── WorkExperience.tsx            # Work experience UI
│   │   └── work-experience-data.ts       # ✏️ Edit work experience here
│   ├── education-activities/
│   │   ├── EducationActivities.tsx       # Education + activities UI
│   │   ├── education-data.ts             # ✏️ Edit education here
│   │   └── activities-data.ts            # ✏️ Edit activities here
│   ├── projects/
│   │   ├── ProjectSection.tsx
│   │   └── ProjectCard.tsx
│   ├── projects-data.ts                  # ✏️ Edit projects here
│   ├── skills/Skills.tsx
│   ├── certification/Certification.tsx
│   ├── awards/Awards.tsx
│   ├── footer/Footer.tsx
│   ├── allcertificate/page.jsx           # Full certificate gallery page
│   └── Components/
│       ├── Lanyard/Lanyard.tsx           # 3D lanyard hero
│       ├── RotatingText/RotatingText.tsx
│       └── TiltedCard/TiltedCard.tsx
├── lib/tech-icons.ts                     # Skill icon mappings
├── public/assets/                        # Static images & files
└── documentation.md                        # This file
```

---

## How to Edit Content

Most content lives in **data files** — edit the `.ts` file, save, and the site updates automatically in dev mode.

### Work Experience

**File:** `app/work-experience/work-experience-data.ts`

```ts
{
  company: "Company Name",
  role: "Your Role",
  period: "Feb 2026 – Present",
  type: "Internship",        // Full-time | Internship | Freelance | Part-time
  featured: true,            // Optional — shows as large top card (only use on ONE entry)
  logo: "/assets/companies/bca.png",  // Optional company logo
  highlights: [
    "Achievement or responsibility bullet 1",
    "Achievement bullet 2",
  ],
  tech: ["Python", "React"], // Optional tech tags
}
```

- `featured: true` → large expanded card at the top
- Entries without `featured` → smaller cards in a 2-column grid (click to expand)
- Only **one** entry should have `featured: true` (`.find()` picks the first match)

### Education

**File:** `app/education-activities/education-data.ts`

Plain text block — no card UI. Edit `school`, `degree`, `period`, `concentration`, `gpa`, and the `courses` array.

### Activities & Involvement

**File:** `app/education-activities/activities-data.ts`

```ts
{
  name: "Organization Name",
  role: "Your Role",
  period: "2024 – 2025",
  type: "Organization",      // Organization | Club | Volunteer | Community
  logo: "/assets/activities/pufa.png",  // Optional — falls back to first letter
  description: "What you did in this org.",
}
```

### Projects

**File:** `app/projects-data.ts`

```ts
{
  title: "Project Name",
  role: "Your Role",
  description: "Project description...",
  image: "/assets/project/myproject.png",
  tech: ["nextjs", "python"],   // Must match keys in lib/tech-icons.ts
  github: "https://github.com/...",
  category: ["AI", "Web Development"],
}
```

### About Me Bio

**File:** `app/aboutme/AboutMe.tsx` — edit the paragraph text directly in the component.

### Certifications & Awards

**Files:**
- `app/certification/Certification.tsx` — `certifications` array
- `app/awards/Awards.tsx` — `awards` array

---

## Assets (Images & Files)

All static files go in `public/`. Reference them with a leading `/`:

| Asset | Folder | Example path |
|-------|--------|--------------|
| Profile photo | `public/assets/` | `/assets/irene_cropped1.png` |
| Company logos | `public/assets/companies/` | `/assets/companies/bca.png` |
| Activity logos | `public/assets/activities/` | `/assets/activities/pufa.png` |
| Project screenshots | `public/assets/project/` | `/assets/project/porto.png` |
| Certificates | `public/assets/certificate/` | `/assets/certificate/genai.png` |
| CV download | `public/assets/` | `/assets/VeronicaIrene_CV.pdf` |
| Lanyard 3D assets | `public/assets/lanyard/` | `card2.glb`, `lanyard.png` |

**Logo tips:** PNG with transparent background, ~200×200 px, lowercase filenames with dashes.

---

## Theme — Strawberry Matcha

Colors are defined as CSS variables in `app/globals.css` and exposed as Tailwind utilities.

| Token | Light | Usage |
|-------|-------|-------|
| `cream` | `#FAF7F2` | Page background |
| `matcha-300` | `#A8C5A0` | Borders, soft accents |
| `matcha-500` | `#6B8F71` | Primary green, headings |
| `matcha-700` | `#3D5A42` | Dark green text |
| `strawberry-100` | `#F9E8ED` | Soft pink backgrounds |
| `strawberry-300` | `#E8A0B5` | Accent pink |
| `strawberry-500` | `#D4839A` | CTA, highlights |
| `dark-bg` | `#1A231C` | Dark mode background |
| `dark-card` | `#2A3D2E` | Dark mode card background |

Use in Tailwind classes: `bg-cream`, `text-matcha-500`, `border-strawberry-300`, etc.

To change the palette globally, edit the `:root` variables in `globals.css`.

---

## Navbar

**File:** `app/layout.tsx`

Nav links use the `nav-chip` utility class (`globals.css`) — pill-shaped background on hover.

| Link | Section ID |
|------|------------|
| About Me | `#about` |
| Experience | `#experience` |
| Education | `#education` |
| Project | `#projects` |
| Skills | `#skills` |
| Certification | `#certification` |
| Awards | `#awards` |

To add a new nav item: add an `<a href="#your-id" className="nav-chip">` in `layout.tsx` and matching `id="your-id"` on the section.

---

## Lanyard (3D Hero)

**File:** `app/Components/Lanyard/Lanyard.tsx`

Physics-based 3D ID card hanging from a lanyard strap.

### Shorten the lanyard strap

Reduce the rope joint distance (third value in each `useRopeJoint`):

```ts
// Default: 0.9 — shorter: 0.5–0.6
useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 0.55]);
useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 0.55]);
useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 0.55]);
```

Optional: bring joint positions closer (`j1` at `0.3`, `j2` at `0.6`, etc.) and lower the spherical joint anchor `[0, 1.45, 0]` → `[0, 1.0, 0]`.

### Hero container height

In `Lanyard.tsx`, the wrapper uses `h-screen` on desktop and `h-[300px]` on mobile. The hero section in `page.tsx` also sets explicit heights on the Lanyard container div.

---

## Dark Mode

Handled by `next-themes` in `app/layout.tsx` with `defaultTheme="system"`. Follows the user's OS preference automatically. Dark mode colors use `dark:` Tailwind variants and the `--dark-bg` / `--dark-card` tokens.

---

## Skills Icons

**File:** `lib/tech-icons.ts`

Maps skill name strings (used in `projects-data.ts` and auto-grouped in `Skills.tsx`) to React icon components or image paths. When adding a new tech to a project, ensure the lowercase key exists in `tech-icons.ts`.

---

## Common Issues

### `@import` error in `globals.css` on dev

If you uncomment the Google Fonts `@import url(...)` line, it breaks because Tailwind expands `@import "tailwindcss"` first, pushing the Google Fonts import to an invalid position. Font **Outfit** is already loaded via `@fontsource/outfit` in `layout.tsx` — no Google Fonts import needed.

### Company/activity logo not showing

1. Confirm the file exists in `public/assets/...`
2. Path in data file starts with `/` (e.g. `/assets/companies/bca.png`)
3. Filename matches exactly (case-sensitive on Linux/deploy)

### `featured: true` on multiple work entries

Only the **first** matching entry in the array is used as the featured card. Keep `featured: true` on one entry only.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS v4 |
| Animation | Framer Motion |
| 3D Hero | Three.js, React Three Fiber, Rapier physics |
| Icons | React Icons, Lucide React |
| Font | Outfit (via @fontsource/outfit) |
| Theme | next-themes (system dark/light) |

---

## Deployment Notes

1. Run `npm run build` locally to verify no errors before deploying
2. Push to GitHub and connect to **Vercel** (recommended for Next.js)
3. All assets in `public/` are served automatically — no extra config needed
4. Environment variables: none required for the current setup

---

*Last updated: July 2026*
