---
name: Verso
description: A nocturnal, single-typeface diary. Ink on warm-sepia dark, set entirely in Fraunces.
colors:
  lamplit-rust: "#b08968"
  lamplit-rust-lit: "#c69470"
  banked-rust: "#7a5a3f"
  soft-black: "#15110d"
  raised-ground: "#1c1813"
  umber-ground: "#241f18"
  coated-paper: "#e6dfd0"
  faded-ink: "#b9b1a0"
  marginalia: "#847d6e"
  ghost-rule: "#3a342b"
  hairline: "#2a241c"
typography:
  display:
    fontFamily: "Fraunces Variable, Iowan Old Style, Hoefler Text, Georgia, serif"
    fontSize: "clamp(44px, 7vw, 88px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.025em"
    fontVariation: "'opsz' 144, 'SOFT' 50"
  headline:
    fontFamily: "Fraunces Variable, Iowan Old Style, Hoefler Text, Georgia, serif"
    fontSize: "clamp(40px, 6vw, 64px)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.025em"
    fontVariation: "'opsz' 144, 'SOFT' 50"
  title:
    fontFamily: "Fraunces Variable, Iowan Old Style, Hoefler Text, Georgia, serif"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.018em"
  body:
    fontFamily: "Fraunces Variable, Iowan Old Style, Hoefler Text, Georgia, serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.72
    letterSpacing: "normal"
    fontFeature: "'kern','liga','calt','onum'"
  subtitle:
    fontFamily: "Fraunces Variable, Iowan Old Style, Hoefler Text, Georgia, serif"
    fontSize: "22px"
    fontWeight: 300
    lineHeight: 1.45
    letterSpacing: "normal"
  label:
    fontFamily: "Fraunces Variable, Iowan Old Style, Hoefler Text, Georgia, serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.1em"
    fontVariation: "small-caps (font-variant-caps: all-small-caps)"
rounded:
  none: "0"
  hairline: "1px"
spacing:
  gutter: "28px"
  section: "56px"
  page: "96px"
  measure: "680px"
  measure-wide: "920px"
components:
  link:
    textColor: "{colors.coated-paper}"
  link-hover:
    textColor: "{colors.lamplit-rust-lit}"
  nav-link:
    textColor: "{colors.faded-ink}"
    typography: "{typography.label}"
  nav-link-active:
    textColor: "{colors.coated-paper}"
  metadata-label:
    textColor: "{colors.marginalia}"
    typography: "{typography.label}"
  post-row-title:
    textColor: "{colors.coated-paper}"
    typography: "{typography.title}"
  post-row-title-hover:
    textColor: "{colors.lamplit-rust-lit}"
  drop-cap:
    textColor: "{colors.lamplit-rust}"
---

# Design System: Verso

## 1. Overview

**Creative North Star: "The Lamplit Page"**

Verso is a printed page held under a single lamp at night. The surface is a warm-sepia near-black; the text is light, warm, and still, the way ink sits on coated paper. Nothing glows. There is no chrome, no card, no button, because there is nothing to transact: a reader arrives late, alone, and settles in to read. Every decision serves that one act. Depth is felt, not lit: three barely-separated tonal grounds, hairline rules, and a 3.5%-opacity film grain give the page the texture of paper rather than the flatness of a screen.

The whole site speaks in one voice, literally. It is set entirely in **Fraunces**: roman for prose, small capitals for every piece of metadata. That single-family discipline is the identity. Warmth comes from the type and one rust accent, never from a tinted-cream background or a gradient. The interaction model is a page turn, not a click: links warm under a hairline underline, the post list nudges sideways on hover and lets a rust arrow emerge, and pages fade in once and go still.

This system explicitly rejects: SaaS-onboarding cheer, Medium polish, generic serif-on-dark "literary blog" templates, and any "tech" energy (accent glow, gradients, cyan-on-black, infinite-feed pull). If it feels like a product, it has failed.

**Key Characteristics:**
- Warm-sepia dark, single lamp, no glow.
- One typeface (Fraunces) doing everything; small caps carry all metadata.
- One accent (Lamplit Rust), used rarely and deliberately.
- Flat by law: depth via tonal grounds, hairlines, and film grain, never shadow.
- Read-only: no buttons, no inputs, no cards. Interaction feels like turning a page.
- Portuguese (pt-BR) long-form, tuned for slow late-night reading.

## 2. Colors

A warm-sepia dark palette: a single rust accent against a soft-black ground and a warm-cream ink ramp. One accent, no secondary or tertiary color.

### Primary
- **Lamplit Rust** (`#b08968`): the sole accent. Drop caps, the emerging post-row arrow, the 404 zero, focus rings, the 1px blockquote rule. Rare by design.
- **Lamplit Rust, Lit** (`#c69470`): the hover state only. Link text and post-row titles warm to this on hover.
- **Banked Rust** (`#7a5a3f`): a dimmer rust reserved for the underline rule beneath in-prose links, so body links read quieter than framing links.

### Neutral
- **Soft Black** (`#15110d`): the body ground. Sepia-warm near-black, the lamplit-paper surface.
- **Raised Ground** (`#1c1813`) / **Umber Ground** (`#241f18`): the two steps up the tonal ladder for any surface that must read as lifted. Used sparingly; the separation is deliberately faint.
- **Coated Paper** (`#e6dfd0`): primary text. Warm cream, the ink of the page.
- **Faded Ink** (`#b9b1a0`): secondary text. Italic subtitles, post descriptions, nav at rest, visited-post titles.
- **Marginalia** (`#847d6e`): metadata small caps (eyebrows, dates, read-time, colophon). AA-compliant on Soft Black (≈4.77:1).
- **Ghost Rule** (`#3a342b`): the default hairline underline beneath framing links at rest.
- **Hairline** (`#2a241c`): all structural dividers (header, footer, post-row, article rules).

### Named Rules
**The Ink, Not Glow Rule.** Light-on-dark is ink on coated paper at night. Accent never glows; gradients, neon, and cyan-on-black are forbidden. If a surface emits light instead of reflecting it, it is wrong.

**The One Warmth Rule.** There is exactly one accent, Lamplit Rust, and it appears on a handful of elements per page. Its rarity is the point. Do not spread it to headings, borders, or backgrounds.

## 3. Typography

**Display / Body / Label Font:** Fraunces Variable (with Iowan Old Style, Hoefler Text, Georgia, serif). One family, every role.

**Character:** An old-style, high-contrast serif with optical sizing (`opsz`) and a softness axis (`SOFT`), tuned warm and literary. Prose is set roman; every label, date, and colophon line is set in **small capitals** (`font-variant-caps: all-small-caps`), which replaces what a mono or sans would normally do. The result reads like a printed book: display and body share DNA, metadata is a quiet engraved register.

### Hierarchy
- **Display** (400, `clamp(44px, 7vw, 88px)`, lh 1.02, `-0.025em`, `opsz 144 / SOFT 50`): the home epigraph headline. One per page, at most.
- **Headline** (400, `clamp(40px, 6vw, 64px)`, lh 1.04): the hanging article title. Left-aligned, not centered.
- **Title** (400, 26–28px, lh 1.2): post-row titles, prose `h2`.
- **Subtitle** (300 italic, 20–24px, lh 1.45, Faded Ink): article/post descriptions, post-nav titles, 404 message.
- **Body** (400, 18–19px, lh 1.65–1.72, Coated Paper): prose. Measure capped at the 680px reading column; lyric posts tighten to 50ch and lh 1.5. `text-wrap: pretty`, `hyphens: auto` under `lang="pt-BR"`.
- **Label** (500, 13–14px, `letter-spacing` 0.06–0.14em, all-small-caps, Marginalia): eyebrows, dates, read-time, nav, footer colophon, back-links.

### Named Rules
**The One Voice Rule.** The entire site is Fraunces. Roman for reading, small caps for metadata. A second family, a mono for "code/dev" texture, or a sans "for UI" is forbidden. The colophon says so out loud: *composto inteiramente em Fraunces.*

**The Settled Reader Rule.** Type is tuned for slow reading, not skimming: long leading, capped measure, generous margins around the post, no all-caps body copy. Small caps are the only capitalized register, and only for short labels.

## 4. Elevation

Flat by law. There is not a single `box-shadow` in the system. Depth is conveyed three ways: a faint tonal ladder (Soft Black → Raised Ground → Umber Ground) for anything that must read as lifted, 1px Hairline rules that divide regions like a ruled page, and a fixed 3.5%-opacity SVG film-grain overlay (`mix-blend-mode: overlay`) that gives the whole surface paper tooth. Focus is the one intentional "lift": a 2px Lamplit Rust outline, offset 3px.

### Named Rules
**The Flat Paper Rule.** Surfaces never cast shadows. If depth is needed, step the tonal ground or draw a hairline. A drop shadow on this site would read as a 2014 app card, which is the failure state.

## 5. Components

Verso is read-only. It has no buttons, no inputs, no chips, no cards. The components are the reading surfaces themselves, and interaction is a page turn.

### Links
- **Framing links** (nav, back-links, footer): Coated Paper text over a 1px Ghost Rule underline that warms to Lamplit Rust on hover.
- **In-prose links:** Coated Paper text over a Banked Rust underline (quieter than framing links), warming to Lamplit Rust, Lit on hover.
- **Visited:** explicitly styled, never the browser default purple. Body links hold their color; visited post-row titles dim to Faded Ink.
- **Focus:** 2px Lamplit Rust outline, 3px offset, 1px radius on every interactive element.

### Navigation
- **Style:** Fraunces small caps (15px, 500, `0.1em`), Faded Ink at rest, warming to Coated Paper on hover. The active route carries a Lamplit Rust bottom border.
- **Brand:** italic Fraunces "Verso" wordmark with a small-caps "um diário" tagline beside it, linking home.
- **Touch:** nav links and brand expand to a ≥44px tap target on coarse pointers without shifting the visual baseline.

### Post Row (signature)
The home index list item, and the system's most distinctive interaction. NOT a card.
- **Layout:** a 3-column baseline grid: small-caps entry number (`№ 16`) / title + italic description / right-aligned small-caps date + read-time.
- **Hover:** the whole row shifts `padding-left` 8px (a page nudging under the thumb), the title warms to Lamplit Rust, Lit, and a rust arrow (`→`) fades in and translates 4px.
- **Visited:** the title dims to Faded Ink, a quiet "you have read this."
- **Divider:** a single Hairline between rows. Mobile collapses to a 2-column grid with the meta dropping below the title.

### Article Header
- **Eyebrow:** small-caps kind · date · read-time, spaced on a baseline row.
- **Title:** hanging Headline, left-aligned, `opsz 144`.
- **Subtitle:** italic 300 Faded Ink description.
- **Rule:** a Hairline closes the header before the prose.

### Prose Marks
- **Drop cap:** first letter of the first paragraph, 5.4em, Lamplit Rust, optically nudged to the baseline. Essays and the About page only; lyric posts opt out.
- **Blockquote:** a 1px Lamplit Rust left rule (never thicker) with italic 300 text and a small-caps `cite`.
- **Fleuron:** a centered, wide-tracked glyph as an in-body section break.
- **End mark:** an italic *"— fim —"* closing the article, paired with a small-caps back-link.

### Footer
- **Colophon:** three small-caps lines over a Hairline top border, transparent background. Non-fixed, sits at the end of the document. Carries the brand's voice (`composto inteiramente em Fraunces`), not a rights notice alone.

## 6. Do's and Don'ts

### Do:
- **Do** set everything in Fraunces: roman prose, small-caps metadata. One voice.
- **Do** keep Lamplit Rust (`#b08968`) rare, drop cap, hover warm, focus ring, the 404 zero, and nowhere else by reflex.
- **Do** convey depth with the tonal ground ladder, 1px Hairlines, and the film grain. Flat at rest, always.
- **Do** style visited links and post titles deliberately (dim to Faded Ink), never the browser purple default.
- **Do** cap prose at the 680px reading measure (50ch for lyrics) and keep leading long for late-night reading.
- **Do** keep metadata contrast at AA: Marginalia (`#847d6e`) on Soft Black is ≈4.77:1; do not dim it further.
- **Do** make interaction feel like turning a page: hairline underlines, the post-row pad-shift, the emerging arrow, one page-in fade.

### Don't:
- **Don't** add a second typeface, a mono "for code/dev texture," or a sans "for UI." The One Voice Rule is the identity.
- **Don't** let anything glow: no gradients, no neon, no cyan-on-black, no accent-glow. Ink, not light.
- **Don't** cast a `box-shadow`. A drop shadow reads as a 2014 app card, the failure state.
- **Don't** introduce SaaS-onboarding cheer, Medium polish, or generic serif-on-dark "literary blog" template moves.
- **Don't** build cards, buttons, or an infinite-feed. This is a read-only diary; interaction is a page turn, not a click.
- **Don't** use a side-stripe accent thicker than the 1px blockquote rule. No colored left-borders as decoration.
- **Don't** set body copy in all caps; small caps are the only capitalized register, and only for short labels.
