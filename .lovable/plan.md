# Fix scrolling lag on phones

Scrolling is janky on mobile. The cause is not one thing — it is several expensive visual effects all recalculating on every scroll frame. Phones repaint the whole screen each frame, so these stack up.

## What is actually slowing it down

1. **Frosted-glass surfaces everywhere.** The footer, FAQ panel, stats band, testimonial cards, project cards, inputs and the nav all use live background blur. This is the single most expensive effect on mobile browsers, and there are many of them stacked over a page-tall background.
2. **The zigzag scroll line.** It is a full-page-height drawing with a soft blur glow and a fade mask, redrawn continuously while scrolling.
3. **Parallax drifts.** Four separate sections (hero, stats, technologies, final call-to-action) each move elements based on scroll position.
4. **The mobile card carousel** applies a live blur to each card as it moves.
5. **Reveal-on-scroll animations** fire on nearly every block, plus a looping shimmer on the section labels.

## What I will change (phone/tablet only — desktop stays exactly as it is)

- Replace live background blur with a solid-ish light surface on phones for: footer, FAQ, stats, testimonials, project cards, inputs, mobile menu. Visually near-identical on a light background, far cheaper.
- Keep the nav's blur only (it is small and fixed), and drop it while the page is actively scrolling if still needed.
- Scroll line: remove the blurred glow layer and the fade mask on small screens, keep the line and its progress behaviour.
- Turn off the parallax drifts on phones (elements sit static); keep them on desktop.
- Carousel: replace the per-card live blur with an opacity/scale falloff only.
- Reveal animations: shorter, fade + small rise only (no scale), and skipped on phones for below-the-fold repeats so content simply appears.
- Pause the looping label shimmer on phones.
- Add GPU-friendly hints (`content-visibility` on long sections, remove stray `will-change`).

## Result

Same design and content, same scroll-progress behaviour, noticeably smoother scrolling on phones. Desktop appearance unchanged.

## Verification

Check each section at 390px, 768px and 1440px for unchanged look, confirm no horizontal overflow and no console errors, and re-check that the hero selector, carousels and scroll progress still behave correctly.
