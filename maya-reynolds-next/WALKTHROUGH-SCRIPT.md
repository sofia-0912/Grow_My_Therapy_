# Loom walkthrough script — 5 minutes

Record at 1280×800 or larger with the browser and code editor open side by side. Keep the tab with
<https://www.conejovalleycounseling.com/home> loaded for the side-by-side moment.

Total target: **4:45–5:00**. Timestamps below are cumulative.

---

## 0:00 – 0:25 · Setup

**On screen:** the running site's homepage, top of page.

> "This is my Stage 2 submission: a clone of Conejo Valley Counseling's homepage, redesigned for a
> different therapist — Dr. Maya Reynolds, a clinical psychologist in Santa Monica. I'll walk through
> the clone fidelity first, then the new theme and copy, then the one section I added, and finish with
> responsiveness and code quality."

---

## 0:25 – 1:35 · Part 1: clone fidelity

**On screen:** original site in one window, my site in the other. Scroll both slowly in parallel.

Points to hit, in this order:

1. **Header** — wordmark left, "Open Menu" right, no inline nav. Click it: full-screen overlay with
   numbered links, office details, and a consultation CTA. Press **Esc** to close.
2. **Section order matches 1:1.** Read them off while scrolling: hero → hope band → "who I work
   with" cards → quote band → areas of expertise tag cloud → how I work → specialties with "Learn
   more" links → *new office section* → schedule band → footer.
3. **Typography** — serif display headings (Cormorant Infant) with an italic accent word in the H1,
   sans body (Mulish), and small uppercase letterspaced eyebrows. Same pairing the original uses.
4. **Button language** — not filled pills: uppercase, letterspaced, underline that changes colour on
   hover. Hover one to show it.
5. **Imagery treatment** — large edge-to-edge photos, one inset image overlapping another with a
   paper-coloured frame, exactly like the original's hero.

> "Structurally I mirrored the original section by section, including the little details — the
> hamburger-only header, the underline text buttons, the overlapping image treatment, and the tag
> cloud that ends in '…and more.'"

---

## 1:35 – 2:40 · Part 2: redesign — theme and copy

**On screen:** `tailwind.config.js`, then back to the site.

1. **New palette, not a recolour of theirs.** Show the tokens: `primary` deep pine `#2E5747`,
   `secondary` warm oat `#F6F1E8`, `accent` clay `#C0714F`, plus `paper`, `ink`, `muted`, `line`.
   Their site is greige/slate/teal; this is pine/oat/clay.
2. **Reusable by design.** Everything is semantic tokens — no hex codes in components. Point at
   `.eyebrow` and `.section-pad` in `app/globals.css` so spacing and label styling are consistent on
   every section, and at `components/LinkButton.js` for the four button variants.
   > "Changing the brand colour is a one-line edit in the config; the whole site follows."
3. **Fonts via `next/font/google`** in `app/layout.js`, exposed as CSS variables — self-hosted, no
   layout shift.
4. **Copy is 100% from the profile.** Scroll the hero: name, PsyD, licensed clinical psychologist,
   Santa Monica, CBT / EMDR / mindfulness / body-oriented, in-person plus California telehealth.
   Then the three services: anxiety therapy, trauma therapy & EMDR, burnout & perfectionism — each
   description paraphrases her stated approach, including "safety and stabilization first".
5. **Nothing invented.** Contact details, hours and licence number are marked `[TO FILL]`.

**On screen:** view source / inspector showing the JSON-LD, then the H1.

6. **Local SEO** — H1 is "A Santa Monica therapist for anxiety, trauma & burnout"; the city appears
   in the H1, sub-headings, body copy, address block and footer; NAP is consistent everywhere.
   `Psychologist` schema with `areaServed` Santa Monica + California, `ItemList` of services,
   `FAQPage` on `/faqs`, canonical URLs, `sitemap.xml` and `robots.txt`.

---

## 2:40 – 3:40 · Part 3: the new "Our Office" section

**On screen:** scroll to the "Visit the office" band (mint background, between specialties and
schedule).

Walk through, in order:

- Heading: "A calm, private space in Santa Monica", with the eyebrow "Visit the office".
- Supporting copy covering **both formats** — in person at the Santa Monica office and secure
  telehealth anywhere in California.
- **Two office photos taken from the profile document**, not stock — I extracted them from the Google
  Doc itself.
- The **location card** with the full street address.
- Three pillars on hairline rules: **Private, Comfortable, Safe** — the safety/comfort/privacy
  requirement from the brief.
- Format chips (in-person, statewide telehealth, consistent weekly time) and a "Book a session at the
  office" CTA that goes to `/contact`.

> "It sits between the specialties and the booking section, uses the same eyebrow, heading scale,
> button and spacing system as everything around it, and carries a mint tint so it reads as its own
> moment without breaking the rhythm. It's also the natural place for someone deciding between
> in-person and online."

---

## 3:40 – 4:25 · Responsiveness, accessibility, other pages

**On screen:** DevTools device toolbar.

1. **Desktop → tablet (768px) → mobile (390px).** Show: grids collapsing to one column, the hero
   image staying full width, the "how I work" image pair moving below the text, the expertise tag
   cloud reflowing, and the office images stacking. No horizontal scroll at any width.
2. **Portrait crop** — the headshot uses `object-top`, so her face is never cut off at any ratio.
3. **Accessibility** — skip-to-content link (press Tab once), one `h1` per page, real heading order,
   descriptive alt text on every image, visible focus ring, `aria-modal` overlay, Esc to close,
   `prefers-reduced-motion` respected.
4. **Click through** `/services`, `/about`, `/faqs`, `/contact` — show that the homepage "Learn more"
   links deep-link to the right service anchor, and that the form validates and responds.

---

## 4:25 – 5:00 · Wrap

**On screen:** `lib/content.js`.

> "Two things I'd flag about how I built it. First, all copy and data live in `lib/content.js`, so the
> same content drives the UI and the structured data and an editor can change wording without
> touching layout. Second, I used AI for scaffolding and image generation, but the section mapping,
> palette, copy selection and SEO structure are my decisions — every claim on the page traces back to
> the profile, and anything I couldn't verify is marked `[TO FILL]` rather than invented.
>
> Next steps would be the real domain, the contact details, and wiring the form to a HIPAA-compliant
> handler. Thanks for watching."

---

## Pre-record checklist

- [ ] `npm run dev` running, homepage loaded, scrolled to top
- [ ] Original site open in a second window at the same scroll position
- [ ] Editor open on `tailwind.config.js` and `lib/content.js`
- [ ] DevTools closed except when demoing responsive mode
- [ ] Browser zoom 100%, bookmarks bar and extensions hidden
- [ ] Microphone tested; notifications muted
- [ ] rehearse once with a timer — cut the specialty descriptions if you're over 5:00
