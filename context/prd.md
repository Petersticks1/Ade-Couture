
  ADE'S COUTURE  
  ——  PRODUCT REQUIREMENTS DOCUMENT  ——  

E-Commerce Website
Mini Clothing Shopping Platform with WhatsApp Order Integration



Version: 1.0.0
Status: Draft — Pending Client Approval
Prepared By: Product & Engineering Team
Date: 22 May 2026
Platform: Web (Desktop & Mobile Responsive)
Brand Colours: Black (#000000) & White (#FFFFFF)



CONFIDENTIAL — CLIENT DOCUMENT
1. Executive Summary
Ade's Couture is a modern, fashion-forward mini e-commerce website designed to showcase and sell curated clothing for men and women. The platform will serve as the brand's primary digital storefront, presenting a clean black-and-white aesthetic that mirrors the brand's identity — sophisticated, bold, and timeless.

Rather than full payment gateway integration at launch, the platform uses WhatsApp as the primary order fulfilment channel, keeping operations lean while maintaining a personal, high-touch customer experience. Customers can browse the catalogue, add items to cart, and send their order directly via WhatsApp with a single tap.

A custom-design inquiry feature ensures that customers who do not find exactly what they want are never turned away — they can submit a design request with their preferred style, fabric, measurements, and budget.

1.1 Project Goals
•Establish a professional digital presence for Ade's Couture
•Enable seamless browse-to-WhatsApp order flow for customers
•Showcase catalogue with gender filters (Men / Women), sizes, and pricing
•Provide a custom design inquiry channel for bespoke requests
•Deliver a mobile-first, high-performance, visually striking website
•Build brand trust through consistent black-and-white luxury aesthetic

1.2 Success Metrics
Metric	Target	Timeframe
WhatsApp orders initiated	≥ 20 per month	Month 1–3
Custom design inquiries	≥ 5 per month	Month 1–3
Catalogue browse-to-inquiry rate	≥ 15%	Month 1–3
Mobile traffic share	≥ 60%	Ongoing
Page load time (mobile)	< 3 seconds	At launch
2. Project Scope
2.1 In Scope
•5-page website: Home, Shop, About, Contact, (Cart as a drawer/panel)
•Product catalogue with Men/Women filter and size variants (XS, S, M, L, XL, XXL)
•Add-to-cart functionality with cart summary and WhatsApp checkout
•Custom design / bespoke inquiry form
•Floating Action Button (FAB) — draggable WhatsApp chat button
•Mobile-responsive design across all pages
•Basic SEO setup (meta tags, Open Graph, sitemap)
•WhatsApp Business number integration for orders and inquiries

2.2 Out of Scope (Phase 1)
•Payment gateway integration (Paystack, Stripe, Flutterwave)
•User account / login system
•CMS or admin dashboard for product management
•Blog or editorial content section
•Product reviews and ratings system
•Multi-currency or international shipping calculator

2.3 Phase 2 Considerations (Future)
•Admin dashboard for managing products and orders
•Integrated payment gateway (Paystack recommended for Nigeria)
•Customer accounts and order history
•Size guide and measurement calculator
•Email newsletter and marketing integration
3. Target Audience
3.1 Primary Users
Persona	Description	Key Need
Fashion-forward woman	25–45 years, urban, style-conscious, shops on mobile	Quick browse, easy WhatsApp order
Style-conscious man	22–40 years, professional or casual wear buyer	Filter by gender, see sizes instantly
Bespoke fashion seeker	Any gender, wants unique custom-made clothing	Custom design inquiry form
Gift buyer	Shopping for a partner, family, or friend	Clear catalogue, easy contact

3.2 Geographic Focus
•Primary: Nigeria (Lagos, Abuja, Port Harcourt)
•Secondary: UK, US, Canada — Nigerian diaspora market

3.3 Device & Platform
•Mobile-first design (70%+ expected mobile traffic)
•Optimised for Chrome, Safari, Firefox on Android and iOS
•Desktop support for Windows and macOS
4. Pages & Features Specification
4.1 Global Elements (All Pages)
Navigation Bar
•Fixed top navigation bar, black background, white text and logo
•Logo: 'Ade's Couture' in a refined serif display font
•Nav links: Home | Shop | About | Contact
•Cart icon with item count badge (top-right)
•Hamburger menu on mobile — full-screen overlay nav

Footer
•Black background, white text
•Brand tagline, social media icons (Instagram, Facebook, TikTok)
•Quick links, Contact info, WhatsApp button
•Copyright notice

Floating Action Button (FAB) — WhatsApp
•WhatsApp FAB always visible on all pages — bottom-right default position
•Draggable across the entire screen (touch drag on mobile, click-drag on desktop)
•Snaps to nearest screen edge when released
•On click: opens WhatsApp with a pre-filled 'Hello, I'd like to inquire about...' message
•Semi-transparent with a white WhatsApp icon on a green button or black to match brand
•Subtle pulse animation to attract attention without being distracting

4.2 Home Page
Hero Section
•Full-viewport height hero with high-quality editorial fashion imagery
•Overlay text: Brand name, tagline (e.g. 'Dressed for Every Story')
•Primary CTA button: 'Shop Now' → links to Shop page
•Secondary CTA: 'Request a Design' → scrolls to or links to inquiry form

Featured Categories
•Two large clickable tiles: 'Men's Collection' and 'Women's Collection'
•Hover effect: subtle zoom with overlay label

Featured Products
•Grid of 4–6 hand-picked items from the catalogue
•Each card: product image, name, price, size badge, 'Add to Cart' button
•'View All' link leading to Shop page

Brand Story Strip
•Short paragraph on Ade's Couture brand identity and craftsmanship
•Black background, white text — full-width strip

Custom Design CTA Banner
•Bold section: 'Can't find what you're looking for?'
•Brief explanation of bespoke service
•Button: 'Request a Custom Design' → links to inquiry form / Contact page

Testimonials / Social Proof (optional)
•2–3 short customer quotes in a horizontal scroll or static grid

4.3 Shop Page
Filter Bar
•Gender filter: 'All' | 'Women' | 'Men' — pill/tab buttons, black active state
•Category sub-filter (optional Phase 1): Tops, Bottoms, Dresses, Sets, Outerwear
•Sort by: Newest | Price: Low to High | Price: High to Low
•Mobile: filter as a collapsible drawer or sticky top bar

Product Catalogue Grid
•Responsive grid: 4 columns desktop / 2 columns tablet / 1–2 columns mobile
•Each product card contains:
–Product image (primary + hover secondary if available)
–Product name
–Gender tag (Men / Women) — small label
–Available sizes displayed as small chips (XS, S, M, L, XL, XXL)
–Price in Nigerian Naira (₦) — bold, prominent
–Stock status: 'Available' or 'Sold Out' badge
–'Add to Cart' button — black, full-width on card hover

Product Detail View
•Clicking a product opens a modal or navigates to a product detail page
•Multiple product images (carousel/gallery)
•Size selector with availability indicator per size
•Quantity selector
•Full product description and care instructions
•'Add to Cart' button (large, black)
•'Enquire on WhatsApp' button (secondary option)

4.4 Cart Panel / Drawer
The cart is implemented as a right-side sliding drawer/panel, not a separate page, for a smooth shopping experience.

•Triggered by clicking the cart icon in the navbar
•Shows all added items with: product image thumbnail, name, size, quantity, price
•Quantity +/- controls per item, remove item option
•Order summary: subtotal, item count
•Note field: 'Add a note to your order (optional)'
•'Checkout via WhatsApp' CTA button — large, bold black

WhatsApp Checkout Flow
On clicking 'Checkout via WhatsApp', the system compiles the order and opens WhatsApp with a pre-formatted message:

  Hello Ade's Couture! I'd like to place an order:
  • 1x Floral Midi Dress (Size: M) — ₦45,000
  • 1x Linen Blazer (Size: L) — ₦38,500
  Total: ₦83,500
  [Note: Please ship to Lekki, Lagos]

4.5 About Page
•Brand story: The founding of Ade's Couture, vision, and mission
•Designer / founder bio with professional photo
•Brand values section: Quality, Style, Craftsmanship, Inclusivity
•'Our Promise' strip — short bold statement on black background
•CTA at the bottom: 'Shop the Collection' button

4.6 Contact Page
Contact Information Block
•WhatsApp number (click-to-chat link)
•Email address (click-to-email link)
•Phone number (click-to-call link)
•Business hours
•Location / service area (e.g. Lagos, Nigeria — Ships Nationwide)

General Inquiry Form
•Fields: Full Name, Email, Phone Number, Subject, Message, Preferred Contact Method (WhatsApp / Email / Phone — radio buttons)
•Submit button: 'Send Message'
•On submit: sends via EmailJS or similar, shows success confirmation

Custom Design / Bespoke Inquiry Form
A dedicated section clearly labelled 'Request a Custom Design' with the following fields:
•Full Name *
•Phone Number (WhatsApp preferred) *
•Email Address
•Gender: Men's / Women's / Unisex (radio)
•Type of clothing (e.g. dress, suit, top, trouser, matching set, etc.) *
•Describe your design idea / inspiration *
•Preferred fabric / material (optional)
•Measurements: Bust/Chest, Waist, Hips, Height (optional at this stage)
•Budget range (₦) — dropdown with ranges
•Preferred delivery timeline
•Attach reference image (optional — image upload)
•Preferred contact method: WhatsApp / Email / Phone Call
•Submit button: 'Send Design Request'

On submission: form data is sent via EmailJS (or equivalent) to Ade's Couture email, AND a pre-filled WhatsApp message is offered as an option. Success message shown on screen.
5. Design System & UI Guidelines
5.1 Brand Colour Palette
Role	Colour	Hex Code	Usage
Primary	Black	#000000	Backgrounds, headers, CTAs, navbar
Secondary	White	#FFFFFF	Text on dark, cards, page backgrounds
Neutral Light	Off-White	#F5F5F5	Card backgrounds, section alternates
Neutral Mid	Light Grey	#CCCCCC	Borders, dividers, disabled states
Neutral Dark	Charcoal	#333333	Body text, descriptions
Accent	Medium Grey	#888888	Captions, secondary labels, placeholders

5.2 Typography
Element	Font	Weight	Size
Display / Logo	Cormorant Garamond or Playfair Display	Bold	48–72px
H1 Headings	Cormorant Garamond or Playfair Display	Bold	36–48px
H2 Subheadings	Montserrat or Raleway	SemiBold	24–30px
H3 / Labels	Montserrat or Raleway	Medium	18–20px
Body Copy	Lato or Source Sans Pro	Regular	15–17px
Buttons / CTAs	Montserrat	SemiBold	14–16px uppercase
Captions / Tags	Montserrat	Regular	12–13px

5.3 Spacing & Grid
•Base unit: 8px grid system
•Max content width: 1280px centered
•Section vertical padding: 80–120px desktop, 48–64px mobile
•Card gap: 24px desktop, 16px mobile

5.4 UI Components
Buttons
Type	Style	Usage
Primary CTA	Black background, white text, no border-radius or slight 2px	Main actions: Add to Cart, Checkout, Submit
Secondary	White background, black border, black text	Alternative actions, Cancel
Ghost / Text	No background, underlined or arrow link	Navigation links, minor actions
WhatsApp	Green (#25D366) or black background, WhatsApp icon + text	Order via WA, FAB

Product Card
•White background, 1px #CCCCCC border
•Hover state: subtle shadow lift (box-shadow), 'Add to Cart' button reveals
•Sold Out overlay: semi-transparent black with 'Sold Out' text

Modals & Drawers
•Cart drawer: slides in from right, 400px wide desktop, full-width mobile
•Product modal: centered, max 800px wide, close on overlay click
•All overlays: black semi-transparent backdrop

5.5 Iconography
•Icon set: Lucide Icons or Heroicons (clean, minimal line icons)
•Cart, user, search, filter, close, arrow icons throughout
•WhatsApp icon: Official brand icon only

5.6 Imagery Guidelines
•High-quality, editorial-style fashion photography
•Preferred: clean white or black studio backgrounds for products
•Lifestyle shots for hero sections and feature banners
•All images must be compressed to WebP format for performance
•Aspect ratios: Products 3:4 portrait, Hero 16:9, About lifestyle 4:3
6. Technical Specification
6.1 Recommended Tech Stack
Layer	Technology	Rationale
Frontend Framework	React.js (Next.js) or plain HTML/CSS/JS	SEO-friendly, fast, scalable
Styling	Tailwind CSS or custom CSS	Utility-first, easy to maintain brand system
State (Cart)	React Context API or Zustand	Lightweight cart state management
Form Handling	EmailJS or Formspree	No backend required, sends to email directly
WhatsApp Integration	wa.me deep link with URL-encoded message	Zero cost, native WhatsApp open
Image Hosting	Cloudinary or static /public folder	Fast CDN, auto WebP conversion
Deployment	Vercel or Netlify	Free tier, fast CI/CD, custom domain support
Domain	Client-provided or purchased	Recommended: adescouture.com

6.2 WhatsApp Integration Details
•WhatsApp Business number must be set up and active before launch
•Deep link format: https://wa.me/234XXXXXXXXXX?text=URL_ENCODED_MESSAGE
•Cart checkout compiles order into structured WhatsApp message (see 4.4)
•FAB button uses same deep link with a general greeting message
•Custom design inquiry offers WhatsApp redirect as optional submission channel

6.3 Performance Requirements
•Lighthouse score target: ≥ 85 on Performance, ≥ 90 on Accessibility
•First Contentful Paint (FCP): < 1.5 seconds
•Largest Contentful Paint (LCP): < 2.5 seconds
•All images served in WebP format with lazy loading
•Fonts loaded via Google Fonts with display: swap

6.4 SEO Requirements
•Meta title and description on all pages
•Open Graph tags for social sharing (especially Instagram link-in-bio)
•Structured data (JSON-LD) for Product schema on Shop page
•XML sitemap and robots.txt at launch
•Google Analytics 4 (GA4) integration from day one

6.5 Security & Compliance
•HTTPS enforced via SSL certificate (free via Let's Encrypt / Vercel/Netlify auto)
•No sensitive user data stored client-side
•Form submissions rate-limited to prevent spam
•Privacy Policy page (basic, required for contact forms)
7. Product Catalogue Data Structure
7.1 Product Data Fields
Field	Type	Required	Notes
id	String	Yes	Unique product ID (e.g. AC-W-001)
name	String	Yes	Product name
gender	Enum	Yes	men | women
category	String	Yes	dress, top, bottom, set, outerwear, etc.
price	Number	Yes	In NGN (₦)
images	Array	Yes	Min 1, max 6 image URLs
sizes	Array	Yes	Available sizes: [XS, S, M, L, XL, XXL]
sizeAvailability	Object	Yes	{ S: true, M: true, L: false } etc.
description	String	Yes	Product description
material	String	Optional	Fabric / material details
careInstructions	String	Optional	Washing, ironing instructions
isAvailable	Boolean	Yes	Overall stock status
isFeatured	Boolean	Optional	Shows on Home page featured section
tags	Array	Optional	casual, formal, party, ankara, etc.
dateAdded	Date	Auto	For 'Newest' sort

7.2 Size Guide Reference
Size	UK Size	Bust (cm)	Waist (cm)	Hips (cm)
XS	6–8	80–84	62–66	87–91
S	8–10	84–88	66–70	91–95
M	10–12	88–94	70–76	95–100
L	12–14	94–100	76–82	100–106
XL	14–16	100–108	82–90	106–113
XXL	16–18	108–116	90–98	113–120

Note: A full size guide page/modal will be linked on each product card for customer reference.
8. User Stories
8.1 Shopping Flow
As a...	I want to...	So that...
Customer	Filter products by Men or Women	I see only relevant items
Customer	See available sizes on each product card	I know my size is in stock before clicking
Customer	Add multiple items to a cart	I can place one combined WhatsApp order
Customer	Edit my cart (change qty, remove items)	My order is accurate before I send it
Customer	Checkout via WhatsApp with a formatted message	The shop receives a clear, readable order
Customer	Use the FAB to quickly ask a question on WhatsApp	I get instant help without filling a form
Customer	Drag the FAB button out of the way	It doesn't block content I'm trying to read

8.2 Inquiry / Bespoke Flow
As a...	I want to...	So that...
Bespoke customer	Submit a custom design request with details	Ade's Couture contacts me to discuss
Bespoke customer	Attach a reference/inspiration image	My vision is clearly communicated
Bespoke customer	Choose my preferred contact method	I'm reached the way I prefer
Bespoke customer	See a WhatsApp option to send my inquiry directly	I get a faster, more personal response
9. Enquiry & Contact Preferences
Ade's Couture will support three primary contact channels. Customers select their preferred method when submitting the contact or custom design inquiry form.

Channel	Implementation	Use Case	Response SLA
WhatsApp	Deep link to WA Business number with pre-filled text; also via FAB	Order queries, quick questions, design briefs	Within 1–2 hours (business hours)
Email	EmailJS form submission to brand email; mailto link in footer	Formal enquiries, design briefs with attachments, collaborations	Within 24 hours
Phone Call	Click-to-call tel: link on Contact page and footer	Urgent queries, voice-based consultations	During business hours only

9.1 WhatsApp Business Setup Requirements
•WhatsApp Business account set up with brand name 'Ade's Couture'
•Profile photo: brand logo
•Business description and catalogue (optional — handled by website)
•Auto-reply greeting message configured
•Away message for out-of-hours configured
•Quick replies set up for common questions (sizing, delivery, custom orders)