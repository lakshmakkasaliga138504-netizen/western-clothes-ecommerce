# Plan: WESTERN CLOTHES — Mid-Fidelity Wireframe Sheet

## Context

The user wants a college-project wireframe presentation showing 11 screens of an e-commerce site called "WESTERN CLOTHES". The output should look like a Figma mid-fidelity wireframe export: monochrome (black / white / grey), placeholder boxes for images, clear borders, realistic labels, and all 11 screens stacked vertically on one tall white canvas with numbered section dividers.

No `create_make_theme` call needed — this is intentionally monochrome mid-fi, not a designed product.

## Approach

Replace `src/App.tsx` entirely with a single long scrollable page. Each screen is a self-contained section rendered as a bordered card inside a white full-width container. Tailwind CSS v4 utility classes handle all layout and styling. No external libraries or images — grey `<div>` blocks serve as image placeholders.

**Font:** Add `IBM Plex Sans` via Google Fonts `@import` in `src/index.css` for a neutral wireframe typeface. This is an appropriate exception to the "resist defaults" guideline because wireframes deliberately read as structural, not designed.

**Palette (applied via Tailwind utilities only):**
- Background: `bg-white`
- Screen border: `border border-gray-300`
- Placeholders: `bg-gray-200` or `bg-gray-300`
- Primary buttons: `bg-gray-800 text-white`
- Input fields: `border border-gray-400 bg-white`
- Labels/nav text: `text-gray-700` / `text-gray-500`
- Section number badge: `bg-gray-800 text-white text-xs`

## Files to Modify

| File | Change |
|---|---|
| `src/index.css` | Add Google Fonts `@import` for IBM Plex Sans before `@import 'tailwindcss'` |
| `src/App.tsx` | Full replacement with the 11-screen wireframe component |

## Screen Components (all inline in App.tsx)

Each screen follows this shell:
```tsx
<section className="mb-12 border border-gray-300 rounded bg-white shadow-sm">
  <div className="bg-gray-800 text-white text-xs px-3 py-1 inline-block rounded-tl">
    SCREEN 1 — LOGIN PAGE
  </div>
  {/* screen content */}
</section>
```

### Screens

1. **Login Page** — centered card: logo text, grey image placeholder (160×120), email/password inputs, remember-me checkbox, forgot password link, Login button, Register link
2. **Home Page** — top nav bar with logo + links + search + icons, hero banner placeholder (full width, 200px tall) with heading + CTA, 4 category cards in a row (grey placeholder + label)
3. **Product/Category Page** — two-column layout: left sidebar (filter checkboxes for Category, Price range, Size, Color) + right grid (sort dropdown + 6 product cards each with grey placeholder, name, price, Add to Cart)
4. **Product Details Page** — breadcrumb, two-column: left = large image placeholder, right = name, price, description paragraph, size radio buttons, color swatches (grey circles), quantity stepper, Add to Cart + Buy Now buttons
5. **Shopping Cart Page** — table-style list of 3 items (image placeholder, name/size/color, price, qty stepper, remove ×), right-side cart summary box (subtotal, shipping, total, Proceed to Checkout button)
6. **Checkout Page** — three-column wireframe: delivery address form fields (Full Name, Mobile, Address, City, State, Pincode), payment method radio group (COD, UPI, Card, Net Banking), order summary box (item list, total, Place Order button)
7. **Register Page** — centered card: Create Account heading, 5 fields (Full Name, Email, Mobile, Password, Confirm Password), Register button, Login link
8. **About Us Page** — heading, two-column: grey image placeholder left, company description right, 4 stat/feature boxes below (Quality Products, Affordable Prices, Happy Customers, Trusted Brand)
9. **Contact Us Page** — two-column: left = contact info list (Address, Phone, Email, Website), right = contact form (Name, Email, Subject, Message textarea, Send Message button)
10. **Admin Login Page** — centered narrow card: Admin Login heading, Username + Password fields, Remember Me, Login button
11. **Admin Dashboard Page** — two-column layout: left sidebar nav (Dashboard, Products, Orders, Customers, Categories, Coupons, Reports, Logout), right main area with 4 stat cards (Total Orders, Customers, Products, Revenue), Recent Orders table (5 mock rows), Sales Overview placeholder chart box

## Verification

Open the preview panel — the page should show all 11 screens stacked top-to-bottom, each with a numbered label, clean borders, grey image placeholders, and no color beyond black/white/grey.
