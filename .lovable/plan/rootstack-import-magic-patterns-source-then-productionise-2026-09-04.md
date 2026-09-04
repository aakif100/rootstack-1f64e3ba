# RootStack: import Magic Patterns source, then productionise

## Status: waiting on the export

This project is currently the empty Lovable starter. Verified: the GitHub repo
`aakif100/rootstack-1f64e3ba` has one branch and two commits (the template commit and a
README commit), the home route is still the blank placeholder, and there is no
framer-motion dependency. There is no Magic Patterns code to preserve yet.

Next action is yours: export the project from Magic Patterns and drop the ZIP into this
chat. It should contain `src/`, `public/`, `index.css`, the Tailwind config,
`package.json`, and `system-prompt.md`.

Once the ZIP arrives, the work below runs.

## Phase 1 — Import and inventory

- Unpack the ZIP outside the project, confirm it contains no `.git` metadata, then copy
  only app files in.
- Read `system-prompt.md` in full and treat it as the design/implementation spec.
- Read every component, data file, `index.css`, Tailwind config and public asset before
  changing anything, and write down the section inventory (Navbar, Hero, Stats, Services,
  Featured Work, Process, Why RootStack, Testimonials, Technologies, FAQ, Final CTA,
  Footer).
- Port the app onto this project's stack: routes under `src/routes`, Tailwind v4 tokens in
  `src/styles.css`, Inter loaded via a `<link>` in `__root.tsx`. Install framer-motion and
  any other genuine dependency the export uses. No visual changes in this phase.
- Checkpoint: the imported site renders identically to the Magic Patterns original before
  any feature work begins.

## Phase 2 — Hero segmented control

Keep the existing component and its bezel / dark track / moving glass architecture exactly
as built. Changes only:

- Auto-cycle interval 2000ms to 2500ms, cycling Website to App to AI Automation and back.
- Framer Motion spring for the glass: stiffness 210, damping 26, mass 0.9. The bezel stays
  stationary; only the glass translates.
- Wire the active segment to the Hero headline and supporting copy using the three copy
  pairs from your spec, with a coordinated fade / small vertical shift / scale transition.
- Clicks select immediately and reset the timer; auto-cycling then continues from the new
  selection.
- Keyboard operable, `role="tablist"` with `aria-selected`, visible focus rings, and
  `prefers-reduced-motion` disabling the auto-cycle and easing the transitions.
- Scales down on mobile without losing the bezel, track, glass, icons or three options, and
  without horizontal overflow.

## Phase 3 — Navigation and CTAs

- Smooth-scroll Services, Work, About to their sections. Blog stays a placeholder route,
  no invented CMS.
- Let's Talk, Let's Build Yours and Start a Project open the project inquiry form. View Our
  Work scrolls to Featured Work.
- Book a Call is wired as a button with the scheduling call left as a single clearly marked
  integration point. No invented URL.
- Log in UI stays as-is; no auth system built.

## Phase 4 — Project inquiry form

- Fields: name, company, email, phone, service (Website Development, App Development,
  AI Automation, Other), project description, budget, timeline.
- Built from the existing glass/metal/monochrome language, not a generic form.
- Validated with Zod, submitted through a server function.
- Storage needs a backend. I will confirm with you whether to enable Lovable Cloud for
  storing submissions and sending a notification email, or to leave the submit handler as a
  stub, before building this phase.

## Phase 5 — Responsiveness, SEO, accessibility, performance

- Verify large desktop, desktop, laptop, tablet and mobile with real browser screenshots.
  Desktop design is not simplified to make mobile easier.
- Per-route `head()` with title, description, Open Graph and Twitter tags. Semantic
  landmarks, one H1, correct heading order, alt text on every image, `robots.txt`, sitemap,
  and Organization structured data.
- Keyboard pass over nav, hero selector, FAQ accordion and form. Focus states visible.
- Keep animations on GPU-friendly transforms and check for wasted re-renders.

## Phase 6 — Fidelity review

Walk the checklist from your brief item by item against the running site: metal bezel still
reads as physical metal, dark track present, glass physically slides and is clipped inside
the bezel, 2.5s cycle in the right order, hero copy follows it, clicks work and reset the
timer, mobile still looks premium, and no section has been simplified. Anything failing gets
fixed before I call it done.

## Technical notes

- Stack here is TanStack Start (React 19, Vite 7, Tailwind v4) rather than plain Vite. Page
  files move to `src/routes/*`, but components, data files, animations and CSS port over
  unchanged.
- Tailwind v4 has no `tailwind.config.js`; theme values from the export's config move into
  the `@theme` block in `src/styles.css` with the same token names.
- Images from the export stay in `public/` under their existing paths; nothing is swapped
  for stock imagery.
