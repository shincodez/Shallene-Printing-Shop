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

### Phase 2 follow-up (2026-11-19)
- Mobile menu: fade + slide-in from the left on open, reverse on close (CSS keyframes
  in `style.css`, closing delay in `navigation.js`). Respects "reduce motion".
- Mobile menu links pulled 12px left so their icons line up with the logo.

## Phase 3 — Homepage (2026-11-19)

**Status:** Complete, awaiting approval.

### Done
- Services strip: phone "Open Sun – Fri · 7 AM – 9 PM" card; full-width bar from 768px.
- Hero: eyebrow, headline (italic blue accent from 768px), intro text, two buttons,
  three highlight cards (= featured services), photo with phone caption overlay or
  desktop CMYK chip + info card. Two columns (7/5) from 1024px.
- Computer Rental Estimator: −/+ hours (1 to 14), total = hours × ₱30, labelled
  "Estimate only". Price is read from `data-rate="30"` in `index.html`.
- `assets/images/shop/hero-placeholder.svg`: labelled placeholder ("Shop photo coming
  soon — not an actual photo").
- `.phone-only` / `.tablet-up` utilities (responsive.css) for text that differs
  between the Stitch mobile and desktop designs.

### Decisions
- Calculator sits right after the hero on all screens (desktop design position),
  so there is only one copy of it. In the mobile design it was near the bottom.
- Maximum 14 hours = the shop's daily opening time (7 AM – 9 PM).
- Stitch claims replaced: "Neighborhood Document & Print Atelier" → "Printing & Document
  Services · Larena"; "Walk-in Services … available daily" → "Open Sunday – Friday";
  "Tactile Quality & Precision / theses, legal briefs" → neutral caption;
  "Walk-in Stations", "All stocks", "Terminal Duration", "Ask Front Desk" removed/renamed.

### Price locations
Search `data-price="computer-rental"` in `index.html` to find every place the
₱30 rate is shown. Also update `data-rate` on the calculator.

### To replace the hero placeholder
Put a real photo in `assets/images/shop/`, then change the hero `<img>` `src`
and `alt` in `index.html` (search for "hero-placeholder").

### Phase 3 refinements (2026-11-19)
- **Icons:** replaced the hand-typed icon paths with official Lucide icons
  (lucide-static v0.460.0, ISC License), copied into the SVG sprite in `index.html`.
  No icon library is loaded at runtime. To add an icon, copy its SVG contents from
  lucide.dev into a new `<symbol>`.
- **Typography:** phone hero heading 36px (was 28px); desktop hero 52px; section
  headings 28px phone / 40px desktop; card headings 20px phone / 22px desktop
  (Playfair Display); body 15px (Plus Jakarta Sans). Labels, buttons, nav and the
  highlight values stay in Plus Jakarta Sans.
- **Spacing tokens** (`variables.css`): `--section-space` 48px phone → 64px tablet →
  80px desktop; `--card-padding` 20px phone → 24px from 768px. Card gaps 24px from
  768px. Highlight cards and the hero photo card now use the 8px card radius.
  Highlight cards keep 12px padding on phones so two fit side by side.
- **Calculator wording:** "Choose from 1 to 14 hours…", "Duration", and the note
  "Estimate only… Please ask the shop about computer availability." The 14-hour
  limit is for the estimate only, not a rental policy.
- Badges no longer wrap onto two lines.

### Calculator test results (2026-11-19)
Default 1 hour = ₱30 (minus greyed out). 2 = ₱60, 3 = ₱90, 4 = ₱120, 5 = ₱150,
8 = ₱240, 10 = ₱300, 12 = ₱360, 14 = ₱420 — all pass. Minus at 1 stays at 1;
plus at 14 stays at 14 (plus greyed out).

## Phase 4 — Business Content (2026-11-19)

**Status:** Complete, awaiting approval.

### Done
- **Services** (`#services`): section header + 7 cards — Printing, Photocopying,
  Computer Rental (highlighted, the only confirmed price), Document Editing &
  Encoding, Research Services, Lamination, and a full-width Binding card.
  Phones: compact cards (icon beside the title). 2 columns from 768px, 3 from 1024px.
- **Products** (`#products`): 4 category cards (School Supplies, Office Supplies,
  Beverages, Snack Items) + "Please ask at the shop about currently available items."
  2 columns on phones/tablets, 4 from 1024px.
- **About** (`#about`): factual story + 4 fact boxes. Phones: one card with the
  about photo placeholder on top. Larger screens: plain text + "At a glance" card
  (hours, Saturday closed, phone, Larena). Two columns (7/5) from 1024px.
- New Lucide icons: copy, square-pen (edit), layers, book (binding), graduation-cap,
  briefcase, cup-soda (drink), cookie, map-pin.
- `assets/images/shop/about-placeholder.svg` (labelled placeholder).
- Shared `.section-header` component (eyebrow + heading + intro).

### Stitch content removed or replaced (unconfirmed)
- Printing: "High quality laser printing", "Laser Print".
- Photocopying: "Single & Double-sided", "Rapid Duplication", "High-Speed", "multi-page sets".
- Lamination: "thermal film", "heavy-gauge", "Clear Protective Seal", "Durable Finish".
- Binding: "Comb, ring, and presentation booklet", "projects, manuscripts, reports, and manuals".
- Research: "Manuscript Preparation", "Academic formatting, alignment".
- Editing: "thesis cleanup, and transcription", "Layout adjustments".
- Computer rental: "Walk-in workstations for browsing…", "Walk-in" badge.
- Products: every item list (ballpens, iced teas, cardstocks, energy drinks…) and
  "In Stock" / "Chilled" / "Available" badges; "Study Snacks", "Refreshing Drinks".
- About: all claims (USB files, rush documents, prompt turnarounds, barangay offices,
  enterprise clerks, "Reliable equipment", "Student-friendly", slogan quote,
  "Single & Bulk Duplication", "Acetate & Board Binding", "Direct File Assistance").

### Design deviations (on purpose)
- Card footers show a short neutral tag (e.g. "Printing") instead of Stitch's spec claims.
- "Contact us for pricing" links go to `#contact` (not straight to the phone), so
  desktop visitors see both phone and Facebook options.
- Product titles are 19px (phone) / 20px (desktop) Plus Jakarta Sans, to meet the
  19–22px card-heading range while keeping Playfair for main headings.
- The About photo appears on phones only (as in the mobile design).

### Price tags
Every price or "Contact us for pricing" is tagged `data-price="…"`:
printing, photocopying, editing-encoding, research, lamination, binding,
computer-rental. Search for the tag to update a price everywhere.

## Pre-Phase 5 tweaks (2026-11-19, approved by owner)

- **Real photos** (from the shop's Facebook page, permitted): hero uses
  `assets/images/services/photocopying.jpg`; About (phones) uses
  `assets/images/services/thesis-binding-stack.jpg`. Placeholder SVGs removed.
  On phones the hero photo shows its lower part so the photo's own "Photocopy"
  label doesn't sit under the caption; the About photo hides the top cover
  (a student's name is printed on it).
- Not used on the site (saved only): `printing.jpg` (customer faces),
  `thesis-binding-covers.jpg` (student name readable). Reference-only photos are in
  `docs/design-references/business-photos/`.
- **Location:** "Near Siquijor State College" added to the desktop top strip,
  About text, "At a glance" card, and meta description.
- Hero photo card now says "Printing & Photocopying · Short to A3" instead of
  repeating the hours.
- Service cards: removed the duplicate top "Contact us for pricing" badge (5 cards)
  and the repeated footer labels. Computer Rental keeps "Confirmed rate" and gets an
  "Estimate your cost" link. Shorter Services intro.
- **Calculator moved** into the Pricing section (`#pricing`, card id
  `#rental-estimator`), reachable from the menu's "Pricing" link and the Computer
  Rental card. Its title is now an `<h3>` under the "Prices & Estimates" heading.
- Phone highlight label "Operating hours" → "Hours".
- Kept the phone "HOME · Larena" strip (as recommended).

### Saved for Phase 5
- Contact: two Facebook buttons — "Message us on Facebook" and "Visit our Facebook page".
- Footer: 4 columns on desktop (logo + line, real services, page links, hours/contact);
  short centred sign-off on phones.

### Follow-up fixes (2026-11-19)
- **List padding bug:** the reset `ul[class] { padding: 0 }` outranked component
  padding (e.g. `.glance__list`, `.hero__highlights` padding-top). Changed to
  `:where(ul[class], ol[class])`, which has zero priority. The "At a glance" list
  now has 20px side padding, 12px rows, and thin dividers; long values wrap.
- **Address confirmed** and shown: "North Poblacion, Larena, Siquijor — in front of
  Siquijor State College, Gate 1" (top strip, About text, At a glance, meta description).
- **Binding card:** mentions hardbound binding for theses and that delivery is
  available (contact for details — no area/fee invented).
- **Header at 1024–1199px:** "Get in Touch" wrapped and the logo overlapped the menu.
  Buttons now never wrap, and the outlined phone button is hidden in that range
  (the hotline is still in the top strip).
- Scan, E-Loading, and Bills Payment are confirmed but not placed yet (awaiting choice).

### Scanning, E-Loading, Bills Payment added (2026-11-19)
- **Services:** new "Scanning" card (`data-price="scanning"`). Binding is now a regular
  card with spec rows ("Includes: Hardbound binding (e.g. theses)", "Delivery:
  Available — contact us for details"). The old full-width Binding layout and its CSS
  were removed.
- **Desktop grid:** 6-part grid — six regular cards (2 parts each, 3 per row), then
  Scanning + Binding side by side (3 parts each). Tablets: 2 per row. Phones: 1 per row.
- **Products:** heading "Shop Essentials & More"; two new cards, E-Loading and Bills
  Payment (Lucide smartphone / receipt icons). Desktop now shows 3 per row (2 rows).
- New Lucide icons: scan-line, smartphone, receipt.

### Photo privacy clean-up (2026-11-19, approved)
- Deleted `assets/images/services/printing.jpg` (customer faces),
  `assets/images/services/thesis-binding-covers.jpg` (readable student name), and
  `docs/design-references/business-photos/facebook-post-hardbound-theses.jpg`
  (people's names). Originals remain only on the user's Desktop.
- `thesis-binding-stack.jpg` replaced with a copy whose top-cover text is blurred.
- Privacy rules for future photos added to `docs/business-information.md`.

## Phase 5 — Pricing, Contact, Footer (2026-11-19)

**Status:** Complete, awaiting approval.

### Done
- **Price list** (`#pricing`): a table of all 8 services. The confirmed row
  (Computer Rental, ₱30 / hour) is tinted blue with a "Confirmed" badge and a large
  blue price; every other row shows a grey "Contact us for pricing" badge.
  Phones: each row becomes a small block (name + price, details underneath);
  from 768px it is a normal table with column headings. A note under the table links
  to the phone number and Messenger. The rental estimator sits below.
- **Contact** (`#contact`): "Opening Hours" card (Sun–Fri 7:00 AM – 9:00 PM,
  Saturday closed, address box with "Get directions") and "Get in Touch" card
  (Phone box with "Call the Shop"; Facebook box with "Message us on Facebook" →
  `https://m.me/shalenecover` and "Visit our Facebook page" →
  `https://www.facebook.com/shalenecover`). 5/7 columns from 1024px.
- **Get directions** opens a Google Maps search for "Siquijor State College, Larena,
  Siquijor" (the shop is in front of Gate 1). It sends no visitor data.
- **Footer:** 4 columns from 1024px (logo + address + phone/Facebook chips; real
  services list; quick links; opening hours), 2 columns on tablets, short centred
  sign-off on phones (as in the mobile design). Copyright year is automatic.
- Removed all temporary placeholders (`.section-placeholder`, `.placeholder-note`).
- New Lucide icons: facebook, message-circle (Messenger), navigation (directions).
- Full-width buttons use 16px side padding so long labels fit on phones.

### Link check (2026-11-19)
No broken in-page links. 11 click-to-call links (`tel:09950429419`), 2 Messenger
links, 3 Facebook page links, 1 Google Maps link — all external links open in a new
tab with `rel="noopener noreferrer"`.

### Still open (owner)
- What "Research Services" includes.
- Delivery area and fee.

### Brand icons + UI/UX consistency pass (2026-11-19)
- **Real Facebook and Messenger logos** from Simple Icons (v13.21.0, CC0) replace the
  outline icons. They use `class="icon icon--brand"` (solid fill). The Facebook logo
  is shown in official Facebook blue (`--color-facebook: #0866ff`) on light
  backgrounds; the Messenger logo is white on the blue button. Footer "Facebook Page"
  links now show the logo too.
- **Audit results (measured):** cards 24px padding desktop / 20px phone, 8px
  corners everywhere; inner boxes 16px; grid gaps 24px desktop / 12–16px phone;
  sections 80px desktop / 64px tablet / 48px phone.
- **Fixes:**
  - Smallest text raised from 11px to 12px (labels, badges, eyebrows,
    "Contact us for pricing").
  - Tap targets: "Contact us for pricing" and "Estimate your cost" links were
    16–24px tall; footer and price-note links ~15px. All now ≥36px (most ~44px),
    using invisible padding so the layout looks the same.
  - Desktop gap between the hero and Services reduced from 160px to 128px.
  - Bottom navigation now has 5 items (added Pricing) so the price list and
    estimator are one tap away on phones. All labels fit at 320px.
- **Get directions** now opens the shop's own Google Maps listing
  ("Shallene's Printing Shop", plus code 6HXR+Q5Q) instead of a search for the college.
  Checked in the browser: the link lands on the listing with the correct phone number.
