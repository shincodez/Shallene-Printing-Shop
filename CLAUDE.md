# CLAUDE.md — Shallene's Printing Shop

## 1. Project Overview

Build a professional, modern, responsive business website for **Shallene's Printing Shop**, a local printing and document-services business in the Philippines.

The website's primary purpose is to:
- Introduce the business.
- Showcase printing and document services.
- Display available products and services.
- Present confirmed pricing.
- Provide business information and operating hours.
- Help customers contact the shop.

This is a business information and service-catalog website.

It is NOT an e-commerce platform.

## 2. Technology Stack

Use the following technologies:

- HTML5
- CSS3
- Vanilla JavaScript

Development environment:
- Visual Studio Code
- Windows
- PowerShell
- GitHub Desktop
- Claude Code

Do not introduce React, Vue, Angular, PHP, or a database unless explicitly requested.

Avoid unnecessary dependencies and frameworks.

## 3. Brand Identity

Business name: Shallene's Printing Shop

Use the provided official logo files.

Brand colors:
- Cyan
- Magenta
- Yellow
- Black / dark charcoal
- White

Visual direction:
- Modern minimalist
- Professional
- Friendly and approachable
- Clean editorial layouts
- Generous whitespace
- Strong typography
- Clear visual hierarchy

Typography:
- Use a refined serif font for selected headings where appropriate.
- Use a clean sans-serif font for body text and navigation.
- Maintain readability across desktop and mobile.

### Logo Rules

- Never recreate the logo using HTML or CSS.
- Never stretch, distort, or crop the logo.
- Preserve its original proportions.
- Use the appropriate logo variation depending on the background.
- Do not modify the original logo artwork.

## 4. Design Reference

Google Stitch will be used to generate the initial website design.

Follow the supplied Stitch screenshots and design references as closely as possible.

Before implementing a section:
1. Inspect its design reference.
2. Identify its layout, typography, spacing, colors, and components.
3. Reproduce the intended appearance.
4. Make responsive adjustments without unnecessarily changing the design.

Do not invent additional pages or features.

If a design reference is missing, ask before making significant design decisions.

## 5. Confirmed Business Information

### Operating Hours

- Operating days: Sunday to Friday
- Operating hours: 7:00 AM – 9:00 PM
- Closed: Saturday

### Contact

Phone number: 09950429419

Facebook page name: Shallene's Printing Shop

Facebook URL: https://www.facebook.com/shalenecover (confirmed by owner)

Location: Larena (confirmed by owner). The full street address has not been provided — do not invent it.

Keep contact information easy to update.

## 6. Confirmed Services

### Printing
- Short
- A4
- Long
- A3
- Colored printing
- Black-and-white printing

### Photocopying
- A4
- Short
- Long
- A3

### Lamination
- ID size
- A4

### Document Editing and Encoding
- Short
- Long
- A4

### Research Services
- Research papers
- Thesis
- Reports

### Computer Rental
- ₱30 per hour

### Additional Services
- Binding

Do not invent additional services.

## 7. Available Products

The shop offers:
- School supplies
- Office supplies
- Beverages
- Snack items

Use actual product photos when available.

Do not invent specific product brands, inventory, or prices.

## 8. Pricing Rules

The owner prefers prices to be displayed on the website.

Currently confirmed:
- Computer rental: ₱30/hour.

For services without confirmed prices:
- Display "Contact us for pricing."
- Do not invent prices.
- Keep pricing information easy to update when the owner provides a price list.

## 9. Website Structure

Build the website with the following sections:

1. Header and navigation
2. Hero section
3. Featured services
4. Complete services section
5. Products section
6. About section
7. Pricing section
8. Contact section
9. Footer

Use a single-page website initially.

Navigation links should scroll to their corresponding sections.

## 10. Contact Functionality

Implement:
- Click-to-call using `tel:09950429419`.
- Facebook contact link once the correct URL is supplied.

Do not create fake contact links or forms that pretend to submit information.

## 11. Project Folder Structure

Maintain the following structure:

```text
shallene-printing-shop/
├── index.html
├── README.md
├── CLAUDE.md
├── .gitignore
├── assets/
│   ├── images/
│   │   ├── logo/
│   │   ├── products/
│   │   ├── services/
│   │   └── shop/
│   └── fonts/
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── variables.css
├── js/
│   ├── main.js
│   └── navigation.js
└── docs/
    ├── design-references/
    ├── business-information.md
    └── development-notes.md
```

Do not create unnecessary files or folders.

## 12. Code Quality

Follow these standards:

- Use semantic HTML.
- Use descriptive class names.
- Keep CSS organized.
- Use reusable CSS variables.
- Separate styling from HTML.
- Keep JavaScript modular and understandable.
- Use accessible buttons and navigation.
- Add appropriate image alt text.
- Avoid duplicated code.
- Avoid unnecessary animations.
- Ensure responsive layouts.
- Prevent horizontal overflow.
- Check for browser console errors.

Write code that a beginner can understand and maintain.

## 13. Image Rules

Use actual business assets whenever possible.

The owner has permitted selected photographs from the business's Facebook page.

Do not:
- Present unrelated stock photography as actual shop photographs.
- Invent products or services.
- Use low-quality or distorted images.
- Modify the official logo.

Temporary placeholders are acceptable when actual photos are unavailable. Make them easy to replace.

## 14. SEO

Include:
- Descriptive page title.
- Meta description.
- Semantic heading hierarchy.
- Descriptive image alt text.
- Open Graph metadata.

Do not invent the shop's street address or geographic location.

## 15. Development Workflow

Work in small phases.

### Phase 1 — Project Setup
- Inspect the project directory.
- Prepare the folder structure.
- Configure the CSS design system.
- Prepare the HTML foundation.

### Phase 2 — Website Foundation
- Implement the header.
- Implement navigation.
- Implement responsive layout.
- Establish typography and colors.

### Phase 3 — Homepage
- Build the hero section.
- Build featured services.
- Build the main call-to-action.

### Phase 4 — Business Content
- Build the complete services section.
- Build the products section.
- Build the about section.

### Phase 5 — Pricing and Contact
- Build pricing presentation.
- Add confirmed computer rental price.
- Add contact information.
- Add operating schedule.
- Add functional contact links.

### Phase 6 — Testing
- Test desktop layout.
- Test mobile layout.
- Test navigation.
- Test all buttons and links.
- Check images.
- Check browser console.
- Check for horizontal overflow.

## 16. Claude Code Working Rules

IMPORTANT:

1. Inspect existing files before modifying them.
2. Do not overwrite existing work without checking it.
3. Follow the supplied design references.
4. Do not invent business information.
5. Do not add features that were not requested.
6. Do not generate the entire website in one uncontrolled step.
7. Work phase by phase.
8. Explain important code decisions in beginner-friendly language.
9. Identify files created and modified after each phase.
10. Tell me how to test each completed phase.

When requirements are unclear, ask before making assumptions.

## 17. First Task

Start with Phase 1 only.

Inspect the project directory and available assets.

Then:
1. Explain the proposed implementation structure.
2. Identify missing assets.
3. Prepare the project foundation.
4. Explain how I can run the website locally.

Do not immediately build the entire website.

The goal is a clean, professional, maintainable website that accurately represents Shallene's Printing Shop.