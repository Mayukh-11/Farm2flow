---
name: Kisan Kranti Design
colors:
  surface: '#f8f9ff'
  surface-dim: '#d0dbed'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dee9fc'
  surface-container-highest: '#d9e3f6'
  on-surface: '#121c2a'
  on-surface-variant: '#404941'
  inverse-surface: '#27313f'
  inverse-on-surface: '#eaf1ff'
  outline: '#717970'
  outline-variant: '#c0c9be'
  surface-tint: '#2e6a41'
  primary: '#003b1b'
  on-primary: '#ffffff'
  primary-container: '#14532d'
  on-primary-container: '#87c695'
  inverse-primary: '#96d5a3'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fe932c'
  on-secondary-container: '#663500'
  tertiary: '#002b7b'
  on-tertiary: '#ffffff'
  tertiary-container: '#003fab'
  on-tertiary-container: '#9eb5ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b1f2be'
  primary-fixed-dim: '#96d5a3'
  on-primary-fixed: '#00210d'
  on-primary-fixed-variant: '#12512c'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#003ea8'
  background: '#f8f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f6'
typography:
  display-lg:
    fontFamily: Public Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Public Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Public Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Public Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  currency-lg:
    fontFamily: Public Sans
    fontSize: 30px
    fontWeight: '800'
    lineHeight: 36px
    letterSpacing: -0.02em
  currency-md:
    fontFamily: Public Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
  label-lg:
    fontFamily: Public Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Public Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Public Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  touch-target-min: 3rem
  gutter-mobile: 1rem
  gutter-desktop: 1.5rem
  stack-xs: 0.25rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 1.5rem
  stack-xl: 2rem
  card-padding: 1rem
---

## Brand & Style

This design system is tailored for agricultural grassroots adoption, connecting Indian farmers, Farmer Producer Organizations (FPOs), traders, and logistics aggregators directly. The aesthetic is utilitarian, deeply grounded, trustworthy, and modern—bridging institutional credibility (NABARD, e-NAM, cooperative standards) with the fluid intuitiveness of modern mobile-first consumer apps.

### Design Movement: Pragmatic Rural Modernism
The visual language rejects superficial ornamentations like intense glassmorphism, heavy drop shadows, neon accents, or low-contrast micro-typography. Instead, it relies on:
- High outdoor contrast engineered specifically for budget IPS LCD smartphone screens under direct harsh sunlight.
- Physical clarity and generous tap zones (minimum 48px to accommodate calloused or working hands).
- Calm, organic color grounding balanced with warm earthy sun tones.
- Immediate operational feedback for flaky connectivity (2G/3G transitions, offline sync, PWA lifecycle states).

## Colors

The palette is tuned for high visual fidelity in outdoor Indian environments, avoiding sterile hospital blues or distracting hyper-bright hues.

### Primary: Deep Harvest Green (`#14532D`)
- Primary action triggers, verified badges, FPO institutional headers, and success states.
- Evokes fertile soil, healthy crop canopy, stability, and governmental backing.
- Primary Hover / Pressed: `#15803D` / `#052E16`.

### Secondary: Warm Harvest Amber (`#D97706`)
- Market price alerts, dynamic mandi bids, harvest forecasting, high-opportunity triggers, and urgent warnings.
- Secondary Hover / Pressed: `#B45309` / `#78350F`.

### Tertiary: AI & Market Intelligence Blue (`#2563EB`)
- Reserved strictly for machine learning insights, price prediction curves, and automated buyer-matching heuristics.
- Tertiary Muted: `#EFF6FF` for alert banners and insight card backdrops.

### Neutral & Surfaces
- **Canvas / Background**: `#FBFBFA` (soft natural parchment tone; cuts screen glare outdoors).
- **Surface & Cards**: `#FFFFFF` (pure white to provide crisp separation from warm canvas).
- **Surface Outline / Dividers**: `#E5E7EB` (neutral-200) with key structural borders in `#D1D5DB` (neutral-300).
- **Text Primary**: `#111827` (charcoal black; minimum 10:1 contrast ratio against white cards for outdoor viewing).
- **Text Secondary**: `#4B5563` (clear slate gray for secondary labels, never dropping below 4.5:1 contrast).

### Semantic & Connectivity
- **Success / Verified**: `#16A34A` (green).
- **Pending / In-Transit**: `#EA580C` (deep orange).
- **Offline Mode Indicator**: `#374151` with `#FEF3C7` warning banner.

## Typography

The type system runs entirely on **Public Sans**, selected for its institutional authority, open letterforms, tall x-height, and superior rendering across budget Android devices with lower pixel densities.

### Outdoor Legibility Rules
- **Minimum Font Threshold**: Main informational body text must never be smaller than `16px`. Subordinate helper text bottoms out strictly at `13px` to protect legibility across varied farmer age demographics.
- **Financial Figures**: Mandi prices, payout balances, and crop weights use dedicated numeric configurations (`currency-lg` and `currency-md`) with high optical weights (`700` and `800`) paired with the standard Indian Rupee symbol (₹).
- **Multi-lingual Script Pairing**: Letter spacing remains zero or positive on body text to accommodate clean translation into Devanagari, Gurmukhi, Tamil, Telugu, and Kannada scripts without glyph-clipping.

## Layout & Spacing

### Mobile-First Fluid Grid (360px - 430px Base)
- The architecture defaults to a single-column stacked layout constrained to 100% viewport width on mobile devices, with `16px` (`1rem`) outer margins.
- Elements maintain an 8pt architectural rhythm, with a strict rule: **interactive touch areas must equal or exceed 48px (`3rem`) in height and width**.
- Form inputs, selector pills, and primary action buttons maintain a default height of `52px` to prevent missed taps during field operations.

### Tablet and Desktop Responsive Behavior
- **Breakpoints**: Mobile (`<640px`), Tablet (`641px–1024px`), Desktop (`>1024px`).
- On screens wider than `640px`, data-dense views (such as mandi price comparison matrices and dispatch manifests) expand into a 2-column or 3-column balanced card grid.
- App shell sets a `max-width: 640px` for conversational / transaction flows to keep thumb-reach effortless, centering the container on ultra-wide desktop monitors.

## Elevation & Depth

Visual hierarchy uses low-contrast outlines coupled with soft ambient micro-shadows. Heavy 3D skeuomorphism and blurry glassmorphism are explicitly avoided to guarantee smooth 60fps rendering on sub-₹10,000 Android chipsets.

### Surface Tiers
- **Tier 0 (Canvas)**: `#FBFBFA` background base.
- **Tier 1 (Cards & Data Sections)**: Solid `#FFFFFF`, bordered with a 1px crisp outline of `#E5E7EB`. Casts an ambient shadow: `0 1px 3px rgba(0, 0, 0, 0.05)`.
- **Tier 2 (Floating Action Bars & PWA Install Prompts)**: `#FFFFFF` resting at screen bottom, separated by a 1px border (`#D1D5DB`) and elevated with `0 -4px 12px rgba(17, 24, 39, 0.08)`.
- **Tier 3 (Modals, Language Selectors, Offline Snackbars)**: Centered or anchored bottom sheets with a backdrop overlay of `rgba(17, 24, 39, 0.6)`.

Depth is conveyed through tonal separation and crisp line delineations rather than blur filters.

## Shapes

The design uses a roundedness level of `2` (`0.5rem` / `8px` default radius). 

- **Primary Cards & Containers**: `8px` corner radius. Softens the UI without wasting screen real-estate or creating awkward cutoffs for data tables.
- **Input Fields & Action Buttons**: `8px` to `12px` (`0.75rem`), conveying sturdy tactility.
- **Status Badges, Filter Chips, & Step Indicators**: Fully pill-shaped (`9999px`) to distinguish actionable selection chips from actionable cards.
- **PWA Prompt & Mandi Ticker**: Top corners rounded to `16px` when docked at the screen bottom.

## Components

### Buttons
- **Primary CTA**: Height `52px`, background `#14532D`, text `#FFFFFF`, font-weight `600`, radius `8px`. Disabled state uses `#9CA3AF` with clear explanatory helper text beneath.
- **Secondary CTA**: Height `52px`, background `#FEF3C7` (amber light), text `#92400E`, border `1.5px solid #F59E0B`. Used for negotiations, quote generation, and alternate transit routes.
- **Floating Offline Action**: Sticky bottom bar (`48px`–`56px`), providing instant one-tap crop listing even without an active data connection.

### Cards (Crop Listings, Mandi Rates, AI Insights)
- **Background**: `#FFFFFF` with `1px solid #E5E7EB`.
- **Header**: High-contrast commodity label (`headline-sm`), quantity in quintals, and dynamic badge (e.g., "AI Target Match" or "Govt MSP Verified").
- **Metrics Zone**: Key prices formatted in `currency-lg` (`#111827`) paired with amber trend flags (`+4.2% today`).
- **Footer**: Single primary action trigger or buyer contact row with min-height `48px`.

### Input Fields
- **Container**: Height `52px`, background `#FFFFFF`, border `1.5px solid #D1D5DB`, radius `8px`, padding `0 16px`.
- **Focus State**: `2px solid #14532D` with subtle `0 0 0 3px rgba(20, 83, 45, 0.15)` ring.
- **Numeric & Weight Inputs**: Integrated quick-increment stepper buttons (`+10`, `+50` quintals) with touch areas of `48px` to eliminate repetitive manual typing.

### Status Indicators & Offline PWA Banners
- **Offline Warning Strip**: Persistent top banner in `#FEF3C7` with `#92400E` text: "Offline Mode — Changes will sync automatically when signal returns."
- **Verification Badges**: Solid `#DCFCE7` pill with `#14532D` text and a green tick icon.
- **AI Recommendation Callout**: Soft blue container `#EFF6FF`, bordered with `#93C5FD`, featuring an unmistakable "AI Insight" badge in `#1D4ED8`.

### Chips & Selectors
- **Commodity Category Chips**: Height `44px`, horizontal scrollable row with clear crop icons, padding `8px 16px`, pill-shaped (`9999px`).
- **Active State**: Deep Green (`#14532D`) fill with crisp white text.
- **Inactive State**: Pure white fill with `#E5E7EB` border and `#374151` text.