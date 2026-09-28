# WESTERN CLOTHES Mid-Fidelity Wireframe Plan

## Goal

Finish the existing React/Vite implementation as a professional, presentation-ready mid-fidelity wireframe sheet for the college e-commerce project. The final page will show all 11 required client/admin screens in order on one vertically scrollable canvas, with clear numbering and separation, a strictly monochrome visual language, realistic labels/data, and responsive layouts.

The uploaded photo is assignment context rather than a UI reference. It confirms that both client-side and admin-side pages are expected to be responsive; it will not be displayed in the application or used as a visual asset.

## Existing Foundation to Preserve

- Keep `src/main.tsx`, the Vite entrypoint, and the one-page application structure unchanged.
- Use the existing `src/App.tsx` implementation as the foundation rather than creating a second app or replacing the shell.
- Keep Tailwind CSS v4 and the existing IBM Plex Sans wiring in `src/index.css`.
- Add no packages, routes, remote imagery, backend integration, or high-fidelity assets.
- Keep the deliverable a static wireframe presentation: form controls and buttons should look realistic and use semantic HTML, but no authentication, cart, checkout, or dashboard business logic is required.

## Implementation Steps

### 1. Normalize the wireframe sheet and shared visual language

Update the shared page and screen wrappers in `src/App.tsx` so the whole deliverable reads as one coherent Figma-style export:

- Retain the centered sheet title, subtitle, screen numbering, and footer.
- Keep every screen inside a white, bordered frame with a dark monochrome label strip.
- Use only black, white, and neutral Tailwind gray utilities for text, fills, borders, controls, status labels, and placeholders.
- Keep corners mostly square, use restrained shadows only for sheet separation, and avoid gradients, photographs, decorative color, or polished marketing effects.
- Ensure spacing, heading hierarchy, border weights, field heights, and repeated component treatment are consistent across all screens.
- Replace emoji icons, which may render in color and undermine the monochrome requirement, with simple monochrome wireframe-safe marks made from text/CSS and labeled controls. Do not add an icon dependency.
- Preserve grey image placeholders as designed elements rather than using the uploaded photo or product photography.

### 2. Keep and polish all 11 screens in the required order

Maintain the existing screen content and realistic sample data while checking each section for completeness and consistency:

1. **Login** — brand block, brand-image placeholder, email/username and password fields, remember-me, forgot-password, login action, and registration prompt.
2. **Home** — shared store header/navigation, hero placeholder and CTA, category cards, and featured product cards.
3. **Product / Category** — collection heading, sort control, category/price/size/color filters, clear-filter action, and six product cards.
4. **Product Details** — breadcrumb, main and thumbnail placeholders, product metadata, pricing/discount, description, size/color/quantity controls, and cart/buy actions.
5. **Shopping Cart** — item rows with image placeholders and realistic details, quantity/remove controls, and order summary.
6. **Checkout** — delivery address, payment method choices, order review, totals, and place-order action.
7. **Register** — account fields, terms agreement, registration action, and login prompt.
8. **About Us** — heading, company copy, image placeholder, and monochrome feature/value cards.
9. **Contact Us** — contact details, business hours, and message form.
10. **Admin Login** — admin portal identity, credentials, remember-me, login action, and authorization note.
11. **Admin Dashboard** — navigation, summary metrics, recent-orders table, and sales-chart placeholder.

Use the existing shared helpers (`Screen`, `NavBar`, `ImgBox`, fields, buttons, filters, cards, and summary rows) to keep repeated UI consistent. Only split or add a local helper when it materially reduces repetition or is needed for responsive behavior.

### 3. Make every screen responsive without losing the desktop presentation

The current source has desktop-only fixed grids and contains no responsive Tailwind variants. Add targeted breakpoints so the single sheet remains readable in the preview panel and satisfies the assignment’s responsive-page requirement:

- Reduce outer sheet padding on narrow viewports while preserving the desktop `max-w-5xl` presentation.
- Allow screen title strips to wrap cleanly.
- Reflow the shared store header: stack the brand/search/actions when needed and make the category navigation horizontally scrollable rather than clipping.
- Change category and product grids from four/three columns on desktop to two or one columns on smaller screens.
- Stack filter sidebar + product grid, product image + details, cart list + order summary, checkout form + summary, about content, and contact content at appropriate breakpoints.
- Convert two-column form groups to one column on small screens.
- Preserve tabular structures where useful, but wrap them in horizontal overflow regions on narrow screens so columns are not crushed.
- Reflow the admin dashboard from a left sidebar into a compact top navigation area on smaller screens; reduce metric columns responsively and keep orders horizontally scrollable.
- Avoid hard-coded page widths that create document-level horizontal scrolling. Fixed sizes may remain only for bounded elements such as thumbnails or desktop sidebars, with responsive overrides.

### 4. Tighten global styling in `src/index.css`

- Keep both CSS imports first, as required by the project.
- Retain IBM Plex Sans and apply it through the document/body rather than relying on a broad universal selector.
- Add only minimal global defaults needed for a neutral monochrome canvas and predictable text rendering; keep component styling in Tailwind classes.
- Do not add an unlayered universal reset.

## Scope and Behavior Decisions

- The page is a wireframe presentation, not a routed storefront. All screens remain simultaneously visible and vertically stacked.
- Controls are representative/semantic, not connected to application state or navigation.
- The uploaded assignment photo is not copied into the UI.
- No product images are needed because grey placeholders are part of the requested mid-fidelity style.
- No colorful icons, emoji, accent colors, gradients, rounded-card-heavy styling, or high-fidelity effects will be introduced.
- Existing realistic Indian pricing, addresses, names, order data, and 2026 project context can remain.

## Verification

1. Use the already-running Vite preview as the primary visual check.
2. Inspect the full sheet at a desktop width and confirm:
   - exactly 11 screens are present, numbered 1–11 and ordered correctly;
   - every screen has a visible border and title strip;
   - the palette is entirely monochrome;
   - all image areas are intentional grey placeholders;
   - no emoji/color glyphs or unintended photos appear;
   - headings, controls, grids, and repeated components are visually consistent.
3. Inspect representative tablet and mobile widths and confirm there is no document-level horizontal overflow, stacked sections remain legible, navigation does not clip, forms collapse correctly, and data tables remain accessible through local horizontal scrolling.
4. Run `pnpm build` after the broad responsive/UI update to catch TypeScript/JSX and Tailwind/Vite integration errors.
5. Confirm only the intended application files (`src/App.tsx` and, if needed, `src/index.css`) changed and that the uploaded image remains unused.
