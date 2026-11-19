# Development Notes

## Phase 1 — Project Setup (2026-11-19)

**Status:** Complete, awaiting approval.

### Done
- Created the folder structure from `CLAUDE.md`.
- Added `.gitkeep` files to empty folders so GitHub Desktop keeps them
  (Git does not track empty folders). Delete each one once real files are added.
- `css/variables.css`: design tokens (colors, fonts, spacing). Colors and fonts
  are provisional until the logo and Stitch design are supplied.
- `css/style.css`: reset, base typography, `.container`, `.section`, skip link.
- `css/responsive.css`: mobile-first breakpoints (768px, 1024px) and reduced motion.
- `index.html`: SEO/Open Graph meta, and empty section shells with the ids
  navigation will use: `#home`, `#featured-services`, `#services`, `#products`,
  `#about`, `#pricing`, `#contact`.
- `js/main.js` + `js/navigation.js`: start-up wiring and footer year.

### Decisions
- No fonts downloaded yet. System fonts are used as fallbacks until the
  design reference shows which fonts to use.
- No og:image, og:url, or favicon yet — they need the logo and a live URL.

### Logo files (added 2026-11-19)
Copied unchanged from the owner's files, renamed without spaces for web use:

| File | Original name | Use on |
|---|---|---|
| `logo-primary.png` | Shallene Primary Logo.png | Light backgrounds (dark text, transparent) |
| `logo-dark-transparent.png` | Shallene Dark Transparent Logo.png | Dark backgrounds (white text, transparent) |
| `logo-dark-background.png` | Shallene Dark Logo.png | Social sharing image (has its own charcoal background) |
| `logo-icon.png` | Shallene Icon Logo.png | Favicon / small spaces (transparent) |

- All are 2000 × 2000 px squares. The artwork only fills the middle
  (full logo ≈ 1641 × 545 px area; icon ≈ 420 × 546 px). The rest is empty
  transparent space, which makes the logo appear very small in a header.
- Brand colors in `css/variables.css` were sampled from these files:
  cyan `#00aeef`, magenta `#ec008c`, yellow `#fff200`, charcoal `#231f20`.

### Trimmed web copies (approved by owner 2026-11-19)
Only the empty transparent space around the artwork was removed. The artwork
itself is pixel-for-pixel identical, not scaled or recolored. The originals
above stay untouched as the master copies.

| File | Size | Use on the website |
|---|---|---|
| `logo-primary-web.png` | 1641 × 545 | Header / light sections |
| `logo-dark-transparent-web.png` | 1641 × 545 | Footer / dark sections |
| `logo-icon-web.png` | 420 × 546 | Small spaces |
| `favicon.png` | 192 × 192 | Browser tab (icon centered on a transparent square, scaled down evenly) |

Always set only ONE of width or height in CSS (e.g. `height: 48px; width: auto;`)
so the logo keeps its proportions.

### Blocked on
- ~~Google Stitch screenshots~~ — received, see Design Review below.

## Design Review — Revised Stitch Design (2026-11-19)

**Status:** Reviewed, implementation plan awaiting approval. No website code written.

Source: `stitch_shallene_s_printing_shop_website (1).zip`, extracted unchanged to
`docs/design-references/stitch-revised/` (`desktop/`, `mobile/`, `DESIGN.md`).

Notes:
- Desktop screenshot is 1280 × 4316 px. Mobile screenshot is only 160 × 1600 px
  (low resolution), so `mobile/code.html` is used for exact mobile details.
- The Stitch logo appears tiny because it used the padded 2000 × 2000 file.
  We will use the trimmed `logo-primary-web.png` instead.
- Stitch bugs to fix, not copy: logo repeated inside the desktop nav, the
  calculator heading repeated twice, "Open Daily"/"Everyday" wording, placeholder
  `https://facebook.com` links.
- Tailwind CDN and Material Symbols font will not be used; icons become inline SVG.

### Decisions approved by owner (2026-11-19)
1. Add a compact Pricing section between About and Contact.
2. The hero's three info cards serve as the "featured services".
3. Keep a simple computer-rental calculator (min. 1 hour, ₱30/hour, labelled as an estimate).
4. Load fonts from Google Fonts.

## Phase 2 — Foundation (2026-11-19)

**Status:** Complete, awaiting approval.

### Done
- `css/variables.css`: replaced with the Stitch design tokens (lavender surfaces,
  `#006194` primary, Playfair Display / Plus Jakarta Sans scale, spacing, radii,
  shadows, header and bottom-nav heights). Exact logo colors kept as `--color-logo-*`.
- `css/style.css`: reset, page layout, typography, icons, shared components
  (`.button`, `.badge`, `.card`, `.eyebrow`, `.status-dot`), header, mobile menu,
  bottom navigation, temporary section placeholders.
- `css/responsive.css`: 640 / 768 / 1024px breakpoints. Desktop header from 1024px.
- `index.html`: Google Fonts, SVG icon sprite, header, mobile menu, bottom nav,
  section shells. The separate "featured-services" shell was removed (decision 2).
- `js/navigation.js`: mobile menu (open, close button, Esc, click outside,
  link click, Tab stays inside, auto-close at desktop width) and active-section
  highlighting for all three navigations plus the phone "current section" label.

### How the fixed bars are kept off the content
- `body` gets `padding-top: var(--header-height)` (92px phone, 112px desktop)
  and `padding-bottom: var(--bottom-nav-space)` (64px + iPhone safe area; 0 on desktop).
- `scroll-padding-top` stops section jumps just below the header.

### Stitch changes made on purpose
- Removed the account/person icon (no customer accounts exist).
- "Open Today" + pulsing dot → static "Open Sunday – Friday • 7:00 AM – 9:00 PM (Closed Saturday)".
- "Est. Local Document Atelier • Philippines" / "Est. Local Press" → "Larena".
- Mobile header shows the full trimmed logo only (no extra "Print Atelier" text).
- Added a Pricing link to the desktop nav and mobile menu.

### Temporary (remove in later phases)
- `.section-placeholder` and `.placeholder-note` in `index.html` and `style.css`.
