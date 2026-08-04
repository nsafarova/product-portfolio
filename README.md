# Nikki Safarova — Portfolio

A single-page, hand-drawn/scrapbook-style portfolio site. Plain HTML/CSS/JS,
no build step — deploys straight to GitHub Pages or Vercel.

## Structure

```
index.html           all page content
styles.css            all styling (colors/fonts as CSS variables at the top)
script.js             mobile nav toggle
assets/img/           photos
assets/resume/        resume PDF
```

## Preview locally

Any static file server works, e.g.:

```
python3 -m http.server 8080
```

then open `http://localhost:8080`.

## Deploy

**GitHub Pages** — push this repo to GitHub, then in Settings → Pages set the
source to the `main` branch (root). No build step needed.

**Vercel** — import the repo at vercel.com/new. Framework preset: "Other" /
static site, no build command, output directory `/`.

## Content status

Resume, LinkedIn/GitHub links, contact email, all 6 story photos, and 3 real
project write-ups (PM Buddy, IronCore Fitness, Smart Grocery & Meal Planner)
are filled in with real content, carried over from an earlier build of this
site (`nsafarova/product-portfolio`'s previous React version).

Still open:

- [ ] **Project case study links** — the "Read case study →" links on the 3
      project cards point to `#`. There's no dedicated case-study page yet —
      point them at real pages/PDFs/write-ups once those exist, or link out
      to a live demo/repo per project.
- [ ] **Contact email** — using `nsafarov@cougarnet.uh.edu`. Swap if you'd
      rather use a different address (appears in the footer, twice).
- [ ] **Resume** — refresh `assets/resume/Nikki_Safarova_Resume.pdf` whenever
      your resume updates; the nav/hero links point at that exact filename.

## Credits / origin

This design started as a Claude Design (claude.ai/design) mockup, iterated
on in chat before being implemented as this static site.
