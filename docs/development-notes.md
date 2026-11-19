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

## Phase 6 — Testing (2026-11-19)

**Status:** Complete, awaiting approval.

### Repository check
- Working tree matched GitHub before testing (`main` = `origin/main`).
- No deleted/private photos, keys, or passwords anywhere in git history.
- Only the blurred `thesis-binding-stack.jpg` was ever committed.
- Photos contain no EXIF/GPS metadata. No personal names in tracked text files.
- Note: commit author email is the user's personal Gmail (visible on GitHub).

### Results
| Area | Result |
|---|---|
| HTML structure | Tags balanced; no duplicate ids; one `h1`, then `h2` → `h3` in order; `lang="en"` |
| Images | All 5 have alt text, width/height, and load; photos have no metadata |
| Links | 51 links, all with readable names; 0 broken in-page anchors; 1 phone number used everywhere (`tel:09950429419`) |
| External links | Facebook page, Messenger (`m.me` → shop's Messenger thread), Google Maps (shop listing) all respond; open in new tab with `noopener noreferrer` |
| In-page navigation | All 34 `#` links land just below the fixed header |
| Calculator | 1–14 hours all correct (₱30 … ₱420); can't go below 1 or above 14 |
| Mobile menu | Opens/closes (✕, Esc, outside click, link), focus moves in and back, Tab stays inside |
| Keyboard | 38 tab stops on desktop; skip link appears on focus; visible blue focus ring; hidden menus not reachable |
| Contrast | 0 failures after fix (lowest 4.65:1) |
| Layout | No horizontal overflow at 1440, 1280, 1024, 768, 375, 320 px |
| Fixed bars | Header height = page top padding (112 / 92 px); footer ends exactly above the bottom nav |
| Console | No errors from the site (only Google Fonts server header warnings) |
| SEO | Title 60 chars, description 153 chars, Open Graph title/description/type, favicon |

### Bugs found and fixed in Phase 6
1. **Price table cut off at 320px** — the table was 307px wide inside a 280px card.
   On phones the table now behaves like blocks; below 400px the price moves under
   the details.
2. **Header 2px taller than the space reserved for it** (borders added height).
   Lines are now drawn with shadows, so header height = page padding exactly.
3. **Muted grey text below contrast guideline** (3.65–4.48:1) — `--color-outline`
   darkened from `#707881` to `#5a6169`.
4. **Title and description too long for Google** (79 / 271 chars) — shortened to
   60 / 153.

### Not testable here / still open
- Real-device test (actual phones, iPhone safe area) — please check on your phone.
- Messenger link asks visitors to log in to Messenger first (normal behaviour).
- `og:image` / `og:url` need a live web address (after deployment).
- Owner: what "Research Services" includes; delivery area and fee.

### Polish pass (2026-11-19)
- **Section headings:** Services and Pricing are now centred like Products and
  Contact (from 768px; phones stay left-aligned). About stays left because its
  text sits beside the "At a glance" card.
- **Brand accent:** every small section label (`.eyebrow`) starts with three tiny
  dots in the logo's cyan, magenta, and yellow (pure CSS, `.eyebrow::before`).
- **Product card titles** now use Playfair Display like every other card title
  (20px phones / 22px desktop).
- **Bottom navigation:** the current section's icon sits on a soft blue pill, so
  it's easier to see where you are.
- Tested at 1280, 768, 375, 320px: no overflow, no console errors.

## Visual quality audit — fixes (2026-11-19, all 10 approved)

1. **Hero copy:** "Your Everyday Printing & Document Solution" (Stitch wording) →
   "Printing & Document Services *at SSC Gate 1*". Lead: "Printing, photocopying,
   lamination, scanning, binding, and computer rental — right in front of Siquijor
   State College. Open Sunday to Friday." Eyebrow: "North Poblacion, Larena, Siquijor".
   Buttons: "See Our Services", "Call 0995 042 9419".
2. **Hero photo:** removed the floating frosted card, the CMYK chip, and the dark
   phone overlay. Plain rounded photo + caption underneath ("Photocopying at the
   shop counter"). A daytime storefront photo would still be better (owner).
3. **Repetition:** removed the services strip under the header (desktop + phone),
   the "Open Sunday – Friday" line at the bottom of the Contact card, the hours note
   on the Computer Rental card, the second ₱30 in its footer, and the ₱30 in the
   Pricing intro. Hours now: top strip, hero fact, Contact, footer, phone menu.
4. **Filler copy removed:** card sentences that repeated titles ("Scanning of your
   documents.", "Drinks available at the shop.", "Tap the button to call", etc.),
   and the Services/Products intros. Editing & Encoding keeps one useful line
   explaining what "encoding" means.
5. **"Confirmed" wording:** removed the red "Confirmed rate"/"Confirmed" badges; the
   hero label is now "Computer rental"; the estimator note reads "Estimate only,
   based on ₱30 per hour." (`.badge--accent` removed.)
6. **Phone number** shown as "0995 042 9419" everywhere; all `tel:09950429419`
   links unchanged.
7. **Numbers in Plus Jakarta Sans:** prices, times, phone numbers, and the calculator
   total no longer use Playfair's old-style figures. Playfair is now used only for
   h1–h3 headings.
8. **Fewer boxes and labels:** Contact cards use plain rows with thin dividers (no
   nested tinted boxes); removed "HOURS"/"PHONE & FACEBOOK"/"AT A GLANCE" labels;
   channel labels are sentence case; desktop highlight notes are sentence case.
   Products are now 6 compact tiles (icon + name) instead of 6 cards with filler.
9. **About:** one factual paragraph + one line on what the shop does, beside the real
   thesis photo (now also shown on desktop, cropped below the blurred cover). The
   fact boxes and "At a glance" card were removed (they repeated other sections).
   A comment marks where the owner's story can go.
10. **Decorative dots:** kept only the phone hero eyebrow dots (from the Stitch mobile
    design); removed the eyebrow dots, photo chip, and footer dots.

### Also fixed while testing
- Cleanup removed a shared rule that also styled `.service-card__link`; restored.
- Product tiles forced the page to 343px at 320px wide; grid now uses
  `minmax(0, 1fr)` and stacks tiles in one column below 360px.
- Unused CSS removed (~13 KB): info strip, photo card, glance, fact boxes, old
  product cards, contact sub-labels, `.card`, accent highlight variants.

### Re-test (2026-11-19)
All in-page links land below the header; calculator 1–14 h correct and capped;
0 contrast failures; 10 `tel:` links all `tel:09950429419`; one h1; all images have
alt text and load; no overflow at 1280, 1024, 768, 375, 360, 320 px; footer clears
the bottom nav; no tap target under 36px; no console errors.

### Still needs the owner
Daytime storefront/counter photo (no customer faces) for the hero; a short shop
story for About; what Research Services includes; delivery area/fee; whether Smart
Padala / cash in–out / send money to bank (seen on Google Maps photos) are offered.

## Visual identity redesign — "Editorial Print Studio" (2026-11-19)

**Status:** Implemented, awaiting review. Not committed.
**Undo:** everything before the redesign is committed as `e5c6bb2`. To discard the
redesign: `git restore .` (then `git clean -n` to list any new files).

### What changed
- **Tokens** (`css/variables.css`, rewritten): paper/ink/blue palette, magenta and
  yellow as small accents, Archivo / DM Sans / IBM Plex Mono, 4px spacing scale,
  4–6px radii, line tokens instead of shadows.
- **Stylesheets** (`css/style.css`, `css/responsive.css`): rewritten from scratch in
  the new identity (no leftover lavender rules or overrides). All class names that
  JavaScript relies on are unchanged.
- **Markup** (`index.html`):
  - Fonts: one Google Fonts request (7 weights total).
  - Header: solid paper bar with a hairline; ink top strip in mono; active nav link
    is blue with an underline; phone button shows an icon instead of "PH".
  - Mobile menu: numbered links (00 Home … 05 Contact) matching section numbers.
  - Hero: headline "Print it, copy it, bind it. Right outside SSC Gate 1.";
    key facts as a ruled row (Hours · Computer rental · Paper sizes);
    photo with a mono figure caption.
  - Services: numbered index (01–08) — number | name | specs | price/action —
    instead of icon cards. Same eight services and details.
  - Products: three grouped lists (Supplies · Food & Drinks · Load & Payments).
  - Section headers: thin ink rule + mono label ("01 — Services") + heading,
    left-aligned.
  - Pricing: ruled table; the fixed-price row is marked with a blue left rule;
    other prices read "Contact us for pricing" in muted text (no pill badges).
  - Estimator: bordered "worksheet" panel; same JS, 1–14 h, ₱30–₱420.
  - Contact: ruled blocks (no nested boxes).
  - Footer: ink background with the official dark-background logo.
  - Removed 20 unused icons from the sprite.
- **CLAUDE.md**: documents the approved identity (sections 3 and 4).

### Tested (2026-11-19)
1440, 1280, 768, 375, 320 px: no horizontal overflow; header height = page padding
(108 / 92 px); footer clears the bottom nav; all in-page links land below the header;
calculator 1–14 h correct, buttons disabled at 1 and 14; 8 `tel:09950429419` links;
Messenger + Facebook links with `noopener noreferrer`; all images load with alt text;
one h1; no duplicate ids; 0 contrast failures (lowest 4.65:1; footer 8:1);
keyboard focus ring blue (yellow on the footer); mobile menu open / Esc / focus return.
Console: only network resets reaching Google Fonts during testing (local files all 200).

### Notes
- Products and services: the brief mentions "four product categories" and "seven
  service categories"; the confirmed lists are six products and eight services
  (Scanning, E-Loading, Bills Payment were confirmed later), so all are kept.
- Delivery is shown only as "Available — contact us for details" (confirmed by the
  user); no area or fee is stated.

### Refinements after approval (2026-11-19)
- Hero headline: "Printing and document services, right by SSC Gate 1." (line break
  after "Printing and" from 768px up; natural wrapping on phones).
- Hero description: "Printing, photocopying, lamination, binding, and computer rental in
  Larena, Siquijor. Visit us in front of Siquijor State College."
- Hero photo: the pink "Photocopy" sticker (baked into the Facebook photo) removed by
  cropping to the lower part of the same real photo (stacks of copies on the counter;
  no people). `photocopying.jpg` is now 1046 × 412. Frame heights: 220px phone,
  300px tablet, 320px desktop, positioned on the stack. Caption: "Fig. 1 —
  Photocopied documents on the shop counter".
- Top strip: information in DM Sans 13px; only the labels (HOURS, LOCATION, HOTLINE)
  in IBM Plex Mono 11px, muted. Status dot removed.
- Hero → Services gap reduced from 176px to 152px on desktop (hero bottom padding
  64px from 768px up).
- Re-tested at 1440, 1280, 768, 375, 320 px: no overflow, links, menu, calculator
  (1–14 h, ₱30–₱420), 8 `tel:` links, Facebook/Messenger links, contrast, images OK.

### Business accuracy review (2026-11-19)
- Removed "Hardbound binding (e.g. theses)" (services row, price table, About text,
  photo alt/caption) — binding types not confirmed by the owner. Binding now reads
  "Ask us about available binding options."
- Removed "Delivery: Available — contact us for details" — not confirmed.
- Kept E-Loading: documented on the shop signboard (`shop-signboard.jpg`, "Available:
  … E-Loading …") and confirmed by the user.
- Research Services unchanged (research papers, thesis, reports).
- Visual design unchanged.

### Deployment (2026-11-19)
- Live on GitHub Pages: https://shincodez.github.io/Shallene-Printing-Shop/
  (checked: all CSS, JS and images load; no overflow at 375px).
- Added share tags: `og:url`, `og:image` (+ size and alt), `og:site_name`,
  `twitter:card`, and a canonical link. If the site moves to a custom domain,
  update the three URL lines in the `<head>`.
- New file `assets/images/logo/og-share.jpg` (1200×630): the unmodified primary
  logo, scaled proportionally and centred on the paper colour (#F5F3EB).
