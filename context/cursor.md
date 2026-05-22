

# 🧵 Ade's Couture — Full Website Build Prompt

---

## 🔷 PROJECT OVERVIEW

Build a complete, production-ready mini e-commerce website called **"Ade's Couture"** — a luxury fashion brand selling men's and women's clothing. The website uses **WhatsApp as the order channel** (no payment gateway). The aesthetic is **editorial luxury — black and white only**, inspired by high-fashion magazines like Vogue and AnOther Magazine.

**Stack:** React.js + Tailwind CSS + TypeScript  
**Deployment Target:** Vercel  
**Mobile-first:** Yes — design mobile first, then scale up  
**Font Strategy:** Google Fonts — `Cormorant Garamond` (display/headings) + `Raleway` (body/UI)

---

## 🎨 DESIGN SYSTEM

### CSS Variables (define in `globals.css`)
```css
:root {
  --black: #000000;
  --white: #FFFFFF;
  --off-white: #F7F7F5;
  --charcoal: #1A1A1A;
  --mid-gray: #888888;
  --light-gray: #CCCCCC;
  --border: #E0E0E0;
  --font-display: 'Cormorant Garamond', serif;
  --font-body: 'Raleway', sans-serif;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --shadow: 0 8px 40px rgba(0,0,0,0.12);
  --shadow-lg: 0 20px 60px rgba(0,0,0,0.2);
}
```

### Typography Scale
- **Display / Hero:** `font-display`, 72–96px, weight 300 (elegant thin)
- **H1:** `font-display`, 48–64px, weight 400
- **H2:** `font-display`, 32–40px, weight 400
- **H3:** `font-body`, 18–22px, weight 600, letter-spacing 0.1em uppercase
- **Body:** `font-body`, 15–16px, weight 400, line-height 1.7
- **Label/Tag:** `font-body`, 11–12px, weight 600, letter-spacing 0.15em uppercase
- **Button:** `font-body`, 12–13px, weight 600, letter-spacing 0.12em uppercase

### Colour Rules
- **Never** use colour other than black, white, and grays
- Black backgrounds with white text for: navbar, footer, CTAs, section banners
- White/off-white backgrounds for: product cards, page backgrounds, form areas
- Use contrast and typography weight as visual hierarchy — not colour

### Animation Principles
- Page load: staggered fade-up on hero elements (`animation-delay` in 100ms increments)
- Hover: `transform: translateY(-4px)` on cards with shadow lift
- Transitions: `cubic-bezier(0.4, 0, 0.2, 1)` on all interactive elements
- Cart drawer: slide in from right (`transform: translateX(100%)` → `translateX(0)`)
- FAB: `transition: transform 0.2s ease` while dragging
- Navbar: on scroll past 80px, add `backdrop-filter: blur(12px)` + slight background

---

## 📁 FOLDER STRUCTURE

```
ades-couture/
├── app/
│   ├── layout.tsx              # Root layout — Navbar + Footer + FAB + CartProvider
│   ├── page.tsx                # Home page
│   ├── shop/
│   │   └── page.tsx            # Shop page
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── contact/
│   │   └── page.tsx            # Contact + Inquiry page
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppFAB.tsx     # Draggable FAB
│   ├── shop/
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── ProductModal.tsx
│   │   ├── FilterBar.tsx
│   │   └── SizeSelector.tsx
│   ├── cart/
│   │   ├── CartDrawer.tsx
│   │   ├── CartItem.tsx
│   │   └── CartIcon.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── CategoryTiles.tsx
│   │   ├── BrandStripSection.tsx
│   │   └── CustomDesignCTA.tsx
│   ├── contact/
│   │   ├── ContactForm.tsx
│   │   └── CustomDesignForm.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       └── SectionLabel.tsx
├── context/
│   └── CartContext.tsx          # Cart state — useContext + useReducer
├── data/
│   └── products.ts             # Static product catalogue data
├── types/
│   └── index.ts                # TypeScript interfaces
├── lib/
│   └── whatsapp.ts             # WhatsApp message builder utility
└── public/
    └── images/                 # Product and brand images
```

---

## 🗂️ TYPES (`types/index.ts`)

```typescript
export type Gender = 'men' | 'women';
export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
export type Category = 'dress' | 'top' | 'bottom' | 'set' | 'outerwear' | 'suit' | 'other';

export interface SizeAvailability {
  XS?: boolean; S?: boolean; M?: boolean;
  L?: boolean; XL?: boolean; XXL?: boolean;
}

export interface Product {
  id: string;                     // e.g. "AC-W-001"
  name: string;
  gender: Gender;
  category: Category;
  price: number;                  // in NGN
  images: string[];               // min 1, max 6 URLs
  sizes: Size[];
  sizeAvailability: SizeAvailability;
  description: string;
  material?: string;
  careInstructions?: string;
  isAvailable: boolean;
  isFeatured?: boolean;
  tags?: string[];
  dateAdded: string;              // ISO date string
}

export interface CartItem {
  product: Product;
  size: Size;
  quantity: number;
}

export type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { id: string; size: Size } }
  | { type: 'UPDATE_QTY'; payload: { id: string; size: Size; quantity: number } }
  | { type: 'CLEAR_CART' };
```

---

## 🛒 CART CONTEXT (`context/CartContext.tsx`)

Implement using `createContext` + `useReducer`. Persist cart to `localStorage` via `useEffect`. Export:
- `useCart()` hook
- `CartProvider` component

State shape:
```typescript
{ items: CartItem[]; isOpen: boolean; }
```

Reducer handles: `ADD_ITEM` (merge if same product+size, else push), `REMOVE_ITEM`, `UPDATE_QTY`, `CLEAR_CART`, `OPEN_CART`, `CLOSE_CART`.

Derived values exported from hook: `totalItems`, `subtotal` (formatted as `₦XX,XXX`).

---

## 💬 WHATSAPP UTILITY (`lib/whatsapp.ts`)

```typescript
const WA_NUMBER = '234XXXXXXXXXX'; // replace with real number

export function buildOrderMessage(items: CartItem[], note?: string): string {
  // Builds a human-readable, emoji-enriched WhatsApp message
  // Format:
  // Hello Ade's Couture! 👗 I'd like to place an order:
  //
  // 1. Floral Midi Dress
  //    Size: M | Qty: 1 | ₦45,000
  //
  // 2. Linen Blazer
  //    Size: L | Qty: 1 | ₦38,500
  //
  // 🧾 Subtotal: ₦83,500
  // 📝 Note: [note if provided]
  //
  // Please confirm availability and payment details. Thank you!
}

export function buildInquiryMessage(name: string): string {
  return `Hello Ade's Couture! My name is ${name} and I have an inquiry...`;
}

export function openWhatsApp(message: string): void {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${WA_NUMBER}?text=${encoded}`, '_blank');
}
```

---

## 🧭 NAVBAR (`components/layout/Navbar.tsx`)

**Visual:** Full-width, `position: fixed`, top: 0, z-index: 100. Black background. White logo text and nav links.

**Layout:**
- Left: Logo — `"Ade's Couture"` in Cormorant Garamond, italic, 22px
- Center (desktop): Nav links — `Home | Shop | About | Contact` — 11px uppercase Raleway, letter-spacing 0.15em
- Right: Cart icon (SVG) with item count badge (black circle, white number), mobile hamburger

**Scroll behavior:** On scroll > 80px, add `bg-black/90 backdrop-blur-md` and a 1px bottom border in white/10

**Mobile:** Hamburger toggles a full-screen overlay nav. Overlay is black, links are large Cormorant Garamond at 48px, staggered fade-in. Includes cart icon and social links at bottom.

**Active link state:** Thin white underline, 1px, animates in from left on hover and stays on active page.

---

## 🦶 FOOTER (`components/layout/Footer.tsx`)

Black background, white text.

**3-column layout (desktop), stacked on mobile:**
- Col 1: Logo + tagline ("Dressed for Every Story") + social icons (Instagram, Facebook, TikTok — SVG icons)
- Col 2: Quick Links (Home, Shop, About, Contact, Custom Design)
- Col 3: Contact Info — WhatsApp (click-to-open), Email (mailto), Phone (tel:), business hours

**Bottom strip:** thin white/20 border, copyright text left, "Made with ♥ in Lagos" right

---

## 📱 WHATSAPP FAB (`components/layout/WhatsAppFAB.tsx`)

**Implementation requirements:**
- Renders a circular button (56px diameter), fixed position, default `bottom: 24px; right: 24px`
- Black background + white WhatsApp SVG icon (brand-safe: use path only, no green)
- Subtle white pulsing ring animation (`@keyframes pulse-ring`) every 3 seconds to draw attention
- **Draggable:** implement with `mousedown`/`mousemove`/`mouseup` + `touchstart`/`touchmove`/`touchend` events
- On drag end: snap to nearest horizontal edge (left or right) keeping vertical position as dragged
- Store position in `useState({ x, y })`, update on drag
- Prevent click-after-drag (track drag distance; if > 5px, treat as drag not click)
- On click (not drag): call `openWhatsApp(buildInquiryMessage(''))` 
- Tooltip on hover: "Chat with us" — small label that appears left of the button
- z-index: 9999

---

## 🏠 HOME PAGE (`app/page.tsx`)

### Hero Section
- Full viewport height (`100vh`), black background
- **Large editorial text layout:** 
  - Top-left: small uppercase label "New Collection 2025"
  - Center: Giant display text "ADE'S" on one line, "COUTURE" on next — Cormorant Garamond, 96px desktop / 56px mobile, weight 300
  - Below: short italic tagline "Dressed for Every Story" — 20px
  - Bottom-left: Two CTA buttons: Primary "Shop Now" (white bg, black text) + Secondary "Request a Design" (outline white)
  - Bottom-right: scroll indicator — small animated arrow pointing down
- **Background:** Use a CSS grain texture overlay (`url("data:image/svg+xml,...")` noise pattern at 5% opacity) over solid black for tactile depth — no images needed if product photos aren't ready; alternatively accept a `heroImage` prop for a half-screen split layout
- **Animation on load:** All text elements fade up with staggered delays — label (0ms), "ADE'S" (150ms), "COUTURE" (300ms), tagline (450ms), buttons (600ms)

### Category Tiles
- Two side-by-side tiles: "Women's Collection" and "Men's Collection"
- Each tile: dark image or black gradient background, large centered label, hover effect zooms background image with white overlay fade
- Both link to `/shop?gender=women` and `/shop?gender=men`

### Featured Products
- Section label: "FEATURED PIECES" (uppercase, Raleway, letter-spacing)
- 4-column grid (desktop) / 2-column (mobile) showing `isFeatured: true` products
- Each uses `<ProductCard />` component
- "View Full Collection →" text link below grid

### Brand Strip
- Full-width, black background, white text
- Single bold statement line in large Cormorant Garamond italic: *"Every stitch tells a story. Every piece is made for you."*
- No images — pure typography, generous padding

### Custom Design CTA
- Off-white background section
- Left side: heading "Don't see what you want?" + body copy about bespoke service
- Right side: Single large button "Request a Custom Design →" — black
- Subtle diagonal line decoration (CSS only) in the background

---

## 🛍️ SHOP PAGE (`app/shop/page.tsx`)

### Filter Bar
- **Sticky** below navbar, white background, 1px bottom border
- Gender pills: `All` | `Women` | `Men` — clicking filters the grid
  - Active state: black background, white text
  - Inactive: white background, black border
- Sort dropdown: `Newest | Price: Low–High | Price: High–Low`
- Result count: "Showing 12 items" — right-aligned, small gray text
- Mobile: filter bar scrolls horizontally, compact pills

### Product Grid
- CSS Grid: `grid-cols-4` desktop / `grid-cols-2` tablet / `grid-cols-2` mobile
- Gap: 24px desktop, 12px mobile
- Animated entry: cards stagger fade-in on first render (use `IntersectionObserver` or CSS `animation-delay`)
- Empty state: elegant centered text "No pieces found in this collection." with a link to reset filters

### ProductCard (`components/shop/ProductCard.tsx`)
- **Image area:** aspect-ratio 3/4, `object-fit: cover`, background `#f0f0f0` as placeholder
- **Hover:** image slightly zooms (scale 1.03), black "Add to Cart" bar slides up from bottom (absolute positioned, translateY animation)
- **Info area (below image):**
  - Product name — Cormorant Garamond, 17px
  - Gender + Category — uppercase Raleway, 11px, gray
  - Size chips — small inline pills showing available sizes (gray outline; green dot not needed — just bold/dim based on availability)
  - Price — Raleway, 16px, bold, black — formatted as `₦45,000`
  - "Sold Out" badge (top-right corner of image): black background, white text, 11px uppercase — only when `isAvailable: false`
- **Click card:** opens `<ProductModal />`

### ProductModal (`components/shop/ProductModal.tsx`)
- Full-screen overlay (black/80 backdrop), `z-index: 200`
- Modal: max-width 960px, white background, centered
- Left: image carousel (main image large + thumbnail strip below)
- Right: product name, gender tag, description, material, `<SizeSelector />`, quantity +/–, price, "Add to Cart" (primary) + "Enquire on WhatsApp" (secondary)
- Close button top-right — X icon

### SizeSelector (`components/shop/SizeSelector.tsx`)
- Horizontal row of size buttons: XS, S, M, L, XL, XXL
- Available: black outline, hoverable → black fill white text
- Unavailable: light gray, strikethrough text, not clickable, cursor: not-allowed
- Selected: black fill, white text

---

## 🛒 CART DRAWER (`components/cart/CartDrawer.tsx`)

- Position: `fixed right-0 top-0 h-full w-[420px]` (mobile: `w-full`)
- Slides in from right: `transform: translateX(100%)` → `translateX(0)`, transition 350ms ease
- Black overlay behind drawer on open
- **Header:** "YOUR CART" label + item count + close X button
- **Items list:** scrollable, each `<CartItem />` shows:
  - Product thumbnail (60×80px)
  - Name, size, price
  - Quantity +/– controls
  - Remove (×) button
- **Empty state:** centered text "Your cart is empty." + "Explore Collection" button
- **Footer (sticky at bottom):**
  - Optional note textarea: "Add a note to your order..."
  - Subtotal: `₦XX,XXX`
  - "Checkout via WhatsApp" — full-width black button with WhatsApp icon
  - On click: calls `openWhatsApp(buildOrderMessage(items, note))` then `clearCart()`

---

## ℹ️ ABOUT PAGE (`app/about/page.tsx`)

**Sections:**

1. **Page Hero:** Black background, white large text "Our Story" — Cormorant Garamond 72px, centered
2. **Brand Story:** White background, 2-column (text left, founder image right — use `<Image />` with `priority`). Rich editorial copy about founding, values, Nigeria fashion scene.
3. **Values Grid:** 3 or 4 cards — "Quality", "Style", "Craftsmanship", "Inclusivity". Black icons (use Lucide or inline SVG), short description. Off-white card background.
4. **Brand Promise Strip:** Full-width black strip with italic Cormorant quote: *"We don't just make clothes. We craft confidence."*
5. **CTA:** White section, centered "Shop the Collection" black button

---

## 📞 CONTACT PAGE (`app/contact/page.tsx`)

**Two main sections side by side (desktop), stacked mobile:**

### Left: Contact Information
- WhatsApp link (opens WA): with WhatsApp SVG icon
- Email (mailto link)
- Phone (tel link)
- Business hours
- Location: "Lagos, Nigeria · Ships Nationwide"

### Right: General Contact Form (`components/contact/ContactForm.tsx`)
Fields: Full Name*, Email*, Phone, Subject, Message*, Preferred Contact (radio: WhatsApp / Email / Phone)

Submit handler: uses **EmailJS** (`emailjs-com` npm package). Show loading spinner on submit. On success: inline success message "Message sent! We'll be in touch shortly." On error: "Something went wrong. Please try us on WhatsApp instead."

---

## ✂️ CUSTOM DESIGN FORM (`components/contact/CustomDesignForm.tsx`)

**Section heading:** "Request a Custom Design" with a short explanation paragraph

**Form fields:**
```
Full Name *
Phone (WhatsApp preferred) *
Email
Gender: [ Men's ] [ Women's ] [ Unisex ]  ← radio pills
Type of clothing * (text input with placeholder: "e.g. Dress, Suit, Matching Set...")
Describe your design idea * (textarea, 5 rows)
Preferred fabric/material (text input, optional)
Measurements (optional expandable section):
  - Bust/Chest (cm)
  - Waist (cm)
  - Hips (cm)
  - Height (cm)
Budget Range * (select dropdown):
  - Under ₦20,000
  - ₦20,000 – ₦50,000
  - ₦50,000 – ₦100,000
  - ₦100,000 – ₦200,000
  - Above ₦200,000
Preferred timeline (select):
  - Within 2 weeks
  - 2–4 weeks
  - 1–2 months
  - Flexible
Reference image (file input, accept: image/*)
Preferred contact method: [ WhatsApp ] [ Email ] [ Phone Call ]
```

**Two submit options (side by side):**
- "Send via Email" (primary, black) → EmailJS submission
- "Send via WhatsApp" (secondary, outline) → compiles form data into readable WA message and calls `openWhatsApp()`

**WhatsApp message format for design request:**
```
Hello Ade's Couture! I'd like to request a custom design 👗

Name: [name]
Type: [clothing type]
Gender: [gender]
Design Description: [description]
Budget: [budget]
Timeline: [timeline]
Fabric Preference: [fabric or 'Not specified']
Contact Preference: [method]

Please get back to me to discuss further. Thank you!
```

---

## 📦 PRODUCT DATA (`data/products.ts`)

Create a static TypeScript array of **at least 12 sample products** (6 women, 6 men). Use placeholder image URLs from `https://images.unsplash.com` (search for fashion/clothing). Include a variety of categories. Set 3–4 as `isFeatured: true`. At least 1 product should have `isAvailable: false` (sold out demo). Example structure:

```typescript
export const products: Product[] = [
  {
    id: 'AC-W-001',
    name: 'Onyx Midi Wrap Dress',
    gender: 'women',
    category: 'dress',
    price: 45000,
    images: ['https://images.unsplash.com/...', '...'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    sizeAvailability: { XS: true, S: true, M: true, L: false, XL: true },
    description: 'A timeless wrap silhouette crafted in fluid crepe...',
    material: '100% Viscose Crepe',
    careInstructions: 'Dry clean only',
    isAvailable: true,
    isFeatured: true,
    tags: ['formal', 'evening', 'midi'],
    dateAdded: '2025-01-15',
  },
  // ... 11 more products
];
```

---

## ⚙️ ROOT LAYOUT (`app/layout.tsx`)

```tsx
// Wrap with CartProvider
// Import Google Fonts: Cormorant Garamond (300,400,400i,600) + Raleway (400,500,600)
// Render: <Navbar /> + {children} + <Footer /> + <WhatsAppFAB /> + <CartDrawer />
// Set metadata: title "Ade's Couture | Luxury Fashion", description, og:image
// Add viewport meta for mobile
```

---

## 📱 RESPONSIVE BREAKPOINTS

Use Tailwind's default breakpoints:
- `sm`: 640px — small mobile adjustments
- `md`: 768px — tablet
- `lg`: 1024px — desktop starts
- `xl`: 1280px — max content width

Key responsive changes:
- Navbar: hamburger below `lg`
- Product grid: `grid-cols-2` on mobile/tablet, `grid-cols-4` on desktop
- Hero text: scale from 56px → 96px
- Cart drawer: full-width (`w-full`) on mobile, 420px on desktop
- Contact page: single column on mobile, two columns on desktop

---

## 🔍 SEO & METADATA

In `app/layout.tsx` export a `metadata` object:
```typescript
export const metadata: Metadata = {
  title: "Ade's Couture | Luxury Fashion for Men & Women",
  description: "Shop curated men's and women's fashion at Ade's Couture. Premium clothing with WhatsApp ordering. Custom designs available.",
  keywords: ["fashion", "clothing", "women's wear", "men's wear", "Ade's Couture", "Lagos fashion", "custom design"],
  openGraph: {
    title: "Ade's Couture",
    description: "Premium fashion, delivered with a personal touch.",
    url: "https://adescouture.com",
    type: "website",
  },
};
```

Each page should have its own `generateMetadata` or `metadata` export.

---

## 🚀 ADDITIONAL DEVELOPER NOTES

1. **EmailJS setup:** Install `@emailjs/browser`. Create `.env.local` with `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`. The forms should gracefully fall back to WhatsApp if EmailJS isn't configured.

2. **Image handling:** All product images use `next/image` with `fill` or explicit dimensions. Add `unoptimized` prop only for external Unsplash URLs in dev. In production, use local images or Cloudinary.

3. **No unused dependencies:** Only install what's needed: `@emailjs/browser`, `lucide-react` (for icons). Everything else from Next.js + Tailwind.

4. **Accessibility:** All interactive elements must have `aria-label`. Form fields must have associated `<label>`. Focus states must be visible (use `focus-visible:ring-2 ring-black`).

5. **Price formatting utility:**
```typescript
export const formatPrice = (price: number): string =>
  `₦${price.toLocaleString('en-NG')}`;
```

6. **URL filter state:** Shop page reads `?gender=women` from `useSearchParams()` and initialises filter accordingly. Changing filter updates URL via `router.push`.

7. **WhatsApp number:** All `wa.me` links must use international format without `+`: `2348012345678`. Store in a single constant in `lib/whatsapp.ts`.

8. **Cart badge:** Shows count only when `totalItems > 0`. Animates with a quick scale pop when item is added (`@keyframes pop` — scale 1 → 1.4 → 1 in 300ms).

9. **Sold-out handling:** Sold-out products are still visible in the grid (not hidden), but the "Add to Cart" button is replaced with "Sold Out" (disabled, gray). Size selector shows all sizes as unavailable.

10. **Loading states:** Cart checkout button should show a spinner for 1 second before opening WhatsApp (UX micro-delight — gives the impression of "processing").

---

## ✅ ACCEPTANCE CRITERIA CHECKLIST

Before considering the build complete, verify:

- [ ] All 5 pages render correctly on Chrome mobile and desktop
- [ ] Filter by Men / Women works and updates URL param
- [ ] Add to Cart correctly merges same product+size
- [ ] Cart subtotal calculates correctly in ₦
- [ ] WhatsApp checkout message is correctly formatted
- [ ] Custom design form sends via WhatsApp with all fields
- [ ] Contact form submits via EmailJS (or shows WA fallback)
- [ ] FAB is draggable, snaps to edge, doesn't trigger click after drag
- [ ] Sold-out products show correct state
- [ ] Navbar cart badge updates on add/remove
- [ ] Cart persists on page refresh (localStorage)
- [ ] Mobile nav opens and closes correctly
- [ ] All images have `alt` text
- [ ] Lighthouse: Performance ≥ 85, Accessibility ≥ 90
- [ ] Deploys to Vercel with zero build errors

---

