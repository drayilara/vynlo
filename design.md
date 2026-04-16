# DESIGN.md — Vynlo Web Design Framework
**Version 2.0 — Source of Truth for All UI Decisions**

> Merged from: design framework (v1.0) + live code extract (`globals.css`, `layout.tsx`, `page.tsx`)
> Last updated: April 2026
> Rule: When this file and any other source conflict, this file wins. Update this file first, then the code.

---

## 0. Design Philosophy

These five principles override everything else. When two rules conflict, resolve it with these.

**1. Usability above all.**
Every design decision is judged on one question: does this make it easier for the user to find what they need and do what they came to do? If it doesn't, it doesn't belong.

**2. Users scan — they do not read.**
Assume every user is moving fast, is slightly distracted, and will never read a full paragraph. Design for the scanner. Use hierarchy, headings, short text, and visual cues to let users extract meaning in under 3 seconds per section.

**3. Everything is noise until proven otherwise.**
Start from zero. Every element on a page must earn its place by directly helping the user move forward. If removing it doesn't hurt anything, remove it.

**4. Clicks must be mindless.**
Users should never hesitate before clicking. Labels on buttons and links carry the full cognitive weight. One ambiguous label is worse than ten clear ones. Effort per click matters far more than number of clicks.

**5. The accent color is a spotlight, not wallpaper.**
`#00FF85` green is only used to draw the eye to the single most important thing in a given view — a CTA, a key stat, a live indicator. Overusing it destroys its power entirely.

---

## 1. User Personas

Design decisions must be validated against all five personas. When a decision benefits one persona at the cost of confusing another, default to the lowest-sophistication user.

| # | Persona | What they need | What breaks them |
|---|---------|---------------|-----------------|
| 1 | **Below college education** | Extreme clarity, no jargon, obvious next steps | Technical terms, dense copy, ambiguous buttons |
| 2 | **TikTok Shop creator** | Fast results, visual proof, minimal friction | Long forms, too many options, anything that looks like "work" |
| 3 | **Busy agency** | Speed, bulk output, professional-looking results | Slow UI, unclear status, anything that wastes their time |
| 4 | **Small ecom brand owner** | Proof it works, easy to start, affordable feel | Complexity, jargon, feeling like they need a tech team |
| 5 | **Tech app advertiser** | Control, quality output, scalability | Lack of customisation, toy-like aesthetics |

**Default persona for copy decisions:** Persona 1. If they can understand it, everyone can.
**Default persona for feature depth decisions:** Persona 3 and 5. Give power users control without hiding it behind complexity.

---

## 2. Color System

### 2.1 Core Palette — CSS Custom Properties (`@theme inline`)

These are the exact tokens from `globals.css`. Use these names in all new code. No other color values are permitted.

```css
/* === BACKGROUNDS === */
--color-background:                  #0A0A0A;   /* Page background. All surfaces start here. */
--color-card:                        #1A1A1A;   /* Card surface. Panels, containers. */
--color-surface-container-low:       #1C1B1B;   /* Low elevation. CTA card background. */
--color-surface-container-high:      #2A2A2A;   /* Mid elevation. Count badge, side frames. */
--color-surface-container-highest:   #353534;   /* Peak elevation. Center UGC frame. */
--color-dim:                         #444444;   /* Dimmed elements. Disabled states. */

/* === BORDERS === */
--color-border: rgba(255, 255, 255, 0.08);      /* Default border. All dividers and outlines. */

/* === ACCENT === */
--color-accent:            #00FF85;             /* THE brand green. Primary CTA, highlights, indicators. */
--color-accent-hover:      #00E876;             /* Accent hover state. Buttons on hover. */
--color-primary-container: #00FF85;             /* Primary container fill. Glow elements. */
--color-on-primary:        #003919;             /* Text ON accent/green backgrounds. Never use white on green. */

/* === TEXT === */
--color-foreground:          #FFFFFF;           /* Default text. Headlines, primary labels. */
--color-muted:               #888888;           /* Muted text. Supporting copy, metadata. */
--color-on-surface-variant:  #B9CBB9;           /* Subtitle / body text. Softer than foreground. */

/* === SEMANTIC === */
--color-error:        #FF4444;
--color-error-dim:    rgba(255, 68, 68, 0.12);
--color-warning:      #FF9500;
--color-warning-dim:  rgba(255, 149, 0, 0.12);
--color-success:      #00FF85;                  /* Success = accent green. */
--color-success-dim:  rgba(0, 255, 133, 0.12);
```

### 2.2 Alpha / Opacity Variants

These are the exact alpha values used in live code. Always use these — never invent new opacity values.

```
white/5    = rgba(255,255,255,0.05)  → Side frame borders, CTA card border
white/10   = rgba(255,255,255,0.10)  → Video container border, mute button border
black/40   = rgba(0,0,0,0.40)        → Mute button background, video controls overlay
black/60   = rgba(0,0,0,0.60)        → Center frame gradient overlay
accent/5   = rgba(0,255,133,0.05)    → CTA section ambient glow blur
accent/30  = rgba(0,255,133,0.30)    → Center UGC frame active border
#00FF85/10 = rgba(0,255,133,0.10)    → Status badge background, CTA button shadow
#00FF85/20 = rgba(0,255,133,0.20)    → Status badge border, mobile CTA shadow
primary-container/10 = rgba(0,255,133,0.10) → Hero UGC cluster glow blur
```

### 2.3 Tailwind Neutral Scale Reference

Neutral classes used in production. Do not substitute with custom values.

| Tailwind class   | Approx hex       | Usage                      |
|------------------|------------------|---------------------------|
| `neutral-400`    | `#A3A3A3`        | Brand count label text     |
| `neutral-500`    | `#737373`        | CTA card subtext           |
| `neutral-600`    | `#525252`        | Footer fine-print          |
| `neutral-900/50` | `#171717` @ 50%  | Nav background layer       |
| `neutral-950/70` | `#0A0A0A` @ 70%  | Nav background layer       |

### 2.4 Color Usage Rules

**`#00FF85` accent — when to use:**
- Primary CTA buttons (one per view maximum)
- Active nav state indicator
- Live status dots and pulse indicators
- Key metric callouts and stat highlights
- Success states and completion indicators
- The "y" logo accent letter
- Focus ring on interactive elements

**`#00FF85` accent — when NOT to use:**
- Body text (ever)
- Decorative borders or fills (unless it is a glow/ambient effect at low opacity)
- Secondary buttons
- More than one prominent element per visible section
- Any light background context

**Text on green — always `#003919`, never white.**
The `--color-on-primary: #003919` token exists for this reason. White on `#00FF85` fails visually and breaks brand. Use `#003919` on every green-background element without exception.

**Backgrounds — elevation stack (darkest to lightest):**
```
#0A0A0A  → Page background
#1A1A1A  → Cards and panels (--color-card)
#1C1B1B  → CTA card (--color-surface-container-low)
#2A2A2A  → Count badge, side frames (--color-surface-container-high)
#353534  → Center UGC frame (--color-surface-container-highest)
```
Never invert this order. Elements always get lighter as they are more elevated.

### 2.5 Color Contrast — Accessibility Baseline

| Text | On background | Contrast | Status |
|------|--------------|----------|--------|
| `#FFFFFF` | `#0A0A0A` | 19.6:1 | Pass |
| `#FFFFFF` | `#1A1A1A` | 14.7:1 | Pass |
| `#888888` | `#0A0A0A` | 4.6:1  | Pass |
| `#003919` | `#00FF85` | 8.1:1  | Pass |
| `#00FF85` | `#0A0A0A` | 14.2:1 | Pass |
| `#B9CBB9` | `#0A0A0A` | 8.9:1  | Pass |

---

## 3. Typography System

### 3.1 Font Stack

Three fonts. No others are permitted on any Vynlo surface.

```css
--font-display: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif;
--font-body:    'Inter', 'Helvetica Neue', Arial, sans-serif;
--font-label:   'Inter', 'Helvetica Neue', Arial, sans-serif;  /* Same instance as body */
```

**Space Grotesk** (`--font-display`) — all headlines H1–H4, logo, navigation links, CTA headings, hero text. Weight: 700 only. Never use for body copy or descriptions.

**Inter** (`--font-body` / `--font-label`) — all body copy, UI labels, form fields, button text, badge text, captions, descriptions. Weights: 400, 500, 600.

**Material Symbols Outlined** — icon font only. Loaded via Google Fonts CSS link. Default settings: `font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24`. Use filled variant inline with `fontVariationSettings: '"FILL" 1'` for play/action icons.

**Next.js font loading (production):**
```ts
import { Space_Grotesk, Inter } from 'next/font/google'
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['700'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] })
```

**Fallback CSS import (non-Next.js contexts):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

### 3.2 Type Scale — Complete Definition

#### Headings — Space Grotesk, font-weight: 700

```
H1 — Hero headline. One per page maximum.
  Desktop:   72px  (text-7xl)
  Mobile:    48px  (text-5xl)
  Weight:    700   (font-bold)
  Leading:   1.0   (leading-[1.0]) — very tight, intentional
  Tracking:  -0.025em (tracking-tight)
  Color:     --color-foreground (#FFFFFF)
  Note:      Key phrase gets --color-accent + underline decoration-4 underline-offset-8

H2 — Section headline. Major content sections.
  Desktop:   40px
  Mobile:    28px
  Weight:    700
  Leading:   1.1
  Tracking:  -0.025em
  Color:     --color-foreground

H3 — CTA headline, feature group heading.
  Desktop:   36px  (text-4xl)
  Mobile:    30px  (text-3xl)
  Weight:    700   (font-bold)
  Leading:   1.2
  Tracking:  -0.02em
  Color:     --color-foreground

H4 — Card heading, modal title, sidebar section.
  Size:      20px
  Weight:    700
  Leading:   1.3
  Tracking:  -0.015em
  Color:     --color-foreground

H5 — Settings group label, collapsed section header.
  Size:      16px
  Weight:    600
  Leading:   1.4
  Tracking:  -0.01em
  Color:     --color-foreground

H6 — Table column header, tight UI label.
  Size:      12px
  Weight:    600
  Leading:   1.4
  Tracking:  0.06em
  Transform: uppercase
  Color:     --color-muted (#888888)
```

#### Body Text — Inter

```
Lead paragraph (hero body, CTA subtext)
  Desktop:   20px  (text-xl)
  Mobile:    18px  (text-lg)
  Weight:    400
  Leading:   1.625 (leading-relaxed)
  Color:     --color-on-surface-variant (#B9CBB9)
  Max-width: 32rem (max-w-lg) — always constrain lead text

Standard body
  Size:      16px
  Weight:    400
  Leading:   1.7
  Color:     --color-on-surface-variant (#B9CBB9)
  Max-width: 680px

Small / description
  Size:      14px  (text-sm)
  Weight:    400
  Leading:   1.6
  Color:     --color-muted (#888888)

Caption / fine print
  Size:      12px  (text-xs)
  Weight:    400 or 600
  Leading:   1.5
  Tracking:  0.1em (tracking-widest)
  Transform: uppercase
  Color:     neutral-600 (#525252)
```

#### UI Labels — Inter / Space Grotesk

```
Nav link
  Font:      --font-display (Space Grotesk)
  Size:      14px  (text-sm)
  Weight:    700   (font-bold)
  Tracking:  -0.025em (tracking-tight)
  Color:     --color-foreground

Nav CTA button label
  Size:      14px  (text-sm)
  Weight:    700
  Color:     #003919 (--color-on-primary)

Button label (standard CTA)
  Size:      18px  (text-lg)
  Weight:    700   (font-bold)
  Color:     #0A0A0A on green bg / #FFFFFF on dark bg

Status badge label
  Size:      10px  (text-[10px])
  Weight:    700
  Tracking:  0.05em (tracking-wider)
  Transform: uppercase
  Color:     --color-accent (#00FF85)

Count / social proof label
  Size:      14px  (text-sm)
  Tracking:  0.1em (tracking-widest)
  Transform: uppercase
  Color:     neutral-400 (#A3A3A3)

Frame status label
  Size:      10px  (text-[10px])
  Weight:    700
  Tracking:  -0.05em (tracking-tighter)
  Color:     --color-foreground

Logo
  Font:      --font-display
  Size:      24px  (text-2xl)
  Weight:    700
  Tracking:  -0.05em (tracking-tighter)
  Color:     --color-foreground with "y" in --color-accent
```

### 3.3 Typography Rules

**Hierarchy:** Always use H1 → H2 → H3 in order. Never skip a level.

**Binding (Krug):** Every heading must have more space above it than below it. It must visually belong to the content it introduces.

```css
h2 { margin-top: 64px; margin-bottom: 16px; }
h3 { margin-top: 40px; margin-bottom: 12px; }
h4 { margin-top: 32px; margin-bottom:  8px; }
```

**Line length:** Body text max ~75 characters. Use `max-w-lg` for lead, 680px for standard body.

**Casing:** Sentence case everywhere except: uppercase on H6, labels, badges, captions, brand count text. Button text is sentence case.

**Accent in headlines:** The key result-phrase in an H1 gets `--color-accent` + `underline decoration-4 underline-offset-8`. One accented phrase per headline maximum.

**Bold scanning support:** `font-weight: 600` on inline text highlights the single most important term per paragraph. Never bold more than one phrase per paragraph.

---

## 4. Spacing & Layout

### 4.1 Spacing Scale

Built on 8px base grid.

```
4px   (gap-1)    → Micro: icon-to-label gap
6px   (gap-1.5)  → Status badge inner gap
8px   (gap-2)    → Tight: nav CTA icon+text, badge elements
12px  (gap-3)    → Avatar stack+label, CTA button icon+text
16px  (gap-4)    → CTA buttons group
24px  (gap-6)    → Hero buttons column (mobile stack)
32px  (gap-8)    → Nav link group
64px  (gap-16)   → Hero left/right columns (desktop)
```

**Vertical section rhythm:**
```
pt-24 (96px)    → Main top padding (fixed nav offset)
pb-32 (128px)   → Main bottom padding
py-20 (80px)    → Featured section mobile
md:py-32        → Featured section desktop
mt-20 md:mt-32  → CTA section top margin
py-12           → Hero inner padding desktop
p-12            → CTA card inner padding
```

**Component internal padding:**
```
px-10 py-5     → Primary CTA button (large)
px-5  py-2.5   → Nav CTA button (compact)
px-6           → All sections horizontal (mobile)
md:px-8        → Hero section horizontal (desktop)
px-3           → Count badge, status badge
p-4            → Center frame overlay, mute button area, mobile sticky bar
```

### 4.2 Container Max-Widths

```
max-w-7xl    (1280px) → Hero section, featured section, nav inner
max-w-3xl    (768px)  → CTA section
max-w-lg     (512px)  → Hero body text
max-w-md     (448px)  → UGC cluster container
max-w-[320px]         → Featured video container
```

All centered with `mx-auto`.

### 4.3 Vertical Space Utilities (component-level)

```
space-y-3   → CTA heading + subtext stack
space-y-4   → Hero heading + body stack
space-y-8   → CTA card inner sections
-space-x-3  → Avatar stack overlap
```

---

## 5. Border Radius

Every component maps to one of these values. Never invent intermediate values.

```
rounded-full     (9999px) → Avatars, status badge, glow elements, mute button, status dot
rounded-[2rem]   (32px)   → CTA card (large container)
rounded-2xl      (16px)   → Center UGC frame
rounded-xl       (12px)   → Side UGC frames, CTA button, mobile CTA, count badge
rounded-lg       (8px)    → Nav CTA button, standard cards
rounded-[12px]   (12px)   → Video container (explicit override)
```

**CSS variable mapping:**
```
--radius-sm:   4px     (tight tags, code blocks)
--radius-md:   8px     → rounded-lg
--radius-lg:   12px    → rounded-xl
--radius-xl:   16px    → rounded-2xl
--radius-2xl:  32px    → rounded-[2rem]  (CTA card)
--radius-full: 9999px  → rounded-full
```

---

## 6. Borders

### 6.1 Standard Borders

```
border border-white/5      → Side UGC frames, CTA card
border border-white/10     → Video container, mute button
border-2 border-accent/30  → Center UGC frame active state
border-2 border-[#0A0A0A]  → Avatar stack ring
border border-[#00FF85]/20 → Status badge
```

### 6.2 Hero Accent Text Decoration

```css
/* Applied to the accented span inside H1 */
color: var(--color-accent);
text-decoration: underline;
text-decoration-thickness: 4px;   /* decoration-4 */
text-underline-offset: 8px;       /* underline-offset-8 */
```

---

## 7. Shadows & Glow Effects

### 7.1 Custom CSS Classes (globals.css)

```css
/* Center UGC frame — signature brand glow */
.green-glow-shadow {
  box-shadow: 0px 0px 60px rgba(0, 255, 133, 0.15);
}

/* Featured video glow */
.featured-video-shadow {
  box-shadow: 0px 0px 20px rgba(0, 255, 133, 0.15);
}
```

### 7.2 Tailwind Shadow Utilities

```
shadow-2xl                        → Side UGC frames
shadow-xl shadow-[#00FF85]/10     → Primary CTA button
shadow-lg shadow-[#00FF85]/20     → Mobile sticky CTA
```

### 7.3 Ambient Glow Pattern

Absolutely positioned blurred circles that give atmospheric depth.

```
Position:  absolute, negatively offset (e.g. -top-24 -right-24)
Size:      w-48 h-48 minimum / larger for hero (w-full blur-[120px])
Color:     bg-accent/5 or bg-primary-container/10
Blur:      blur-[60px] (sections) / blur-[120px] (hero cluster)
Shape:     rounded-full
Pointer:   pointer-events-none (never blocks interaction)
```

---

## 8. Glass & Backdrop Effects

### 8.1 `.glass-nav` (globals.css)

Used on navbar and mobile sticky CTA.

```css
.glass-nav {
  background: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}
```

Production Tailwind layers on top: `bg-neutral-950/70 bg-neutral-900/50 backdrop-blur-xl`

### 8.2 Other Backdrop Effects

```
bg-black/40 backdrop-blur-md  → Mute button on video
backdrop-blur-md               → Status badge
```

---

## 9. Gradients

Only for overlay darkening on video/media. Not for decorative backgrounds.

```css
/* Center UGC frame — darkens bottom */
background: linear-gradient(to top, rgba(0,0,0,0.60), transparent);

/* Video controls overlay */
background: linear-gradient(to top, rgba(0,0,0,0.40), transparent, transparent);
```

---

## 10. Animations & Transitions

### 10.1 Keyframes (globals.css)

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-up {
  animation: fadeInUp 500ms ease-out forwards;
  animation-delay: var(--delay, 0ms);
}

@media (prefers-reduced-motion: reduce) {
  .animate-fade-in-up { opacity: 1; animation: none; }
}
```

**Staggered hero entrance pattern:**
```tsx
<h1 style={{ '--delay': '0ms' }}   className="animate-fade-in-up">
<p  style={{ '--delay': '100ms' }} className="animate-fade-in-up">
<div style={{ '--delay': '200ms' }} className="animate-fade-in-up">
```

### 10.2 Interaction Scale Transforms

```
hover:scale-[1.02] active:scale-[0.98]  → Primary CTA button
scale-95 active:scale-90                → Nav CTA button
active:scale-90                         → Mute button
```

### 10.3 Transitions

```
transition-all        → CTA button, mute button
transition-transform  → Nav CTA, directional arrow icon
```

### 10.4 Hover Effects

```
hover:opacity-90           → Nav CTA (subtle dim)
hover:bg-black/60          → Mute button (darken)
group-hover:translate-x-1  → Arrow icon inside CTA (directional nudge)
```

### 10.5 Continuous

```
animate-pulse  → Status badge live dot
```

---

## 11. Responsive Breakpoints

### Single breakpoint: `md:` (768px)

Mobile-first. Base styles = mobile. `md:` = desktop. No other breakpoints in use.

### Layout shifts at `md:`

| Element | Mobile | Desktop |
|---------|--------|---------|
| Hero columns | `flex-col` | `md:flex-row` |
| Hero text order | `order-2` (below visual) | `md:order-1` (left) |
| UGC cluster order | `order-1` (above text) | `md:order-2` (right) |
| Hero columns width | `w-full` | `md:w-1/2` |
| UGC wrapper padding | `py-12` | `md:py-0` |
| Mobile sticky CTA | visible | `md:hidden` |

### Responsive typography

| Element | Mobile | Desktop |
|---------|--------|---------|
| H1 hero | `text-5xl` (48px) | `md:text-7xl` (72px) |
| H3 CTA | `text-3xl` (30px) | `md:text-4xl` (36px) |
| Lead body | `text-lg` (18px) | `md:text-xl` (20px) |

### Responsive spacing

| Element | Mobile | Desktop |
|---------|--------|---------|
| Hero horizontal padding | `px-6` | `md:px-8` |
| Featured section vertical | `py-20` | `md:py-32` |
| CTA section top margin | `mt-20` | `md:mt-32` |
| CTA button width | `w-full` | `md:w-auto` |

---

## 12. Z-Index Scale

```
z-50  → Navbar, mobile sticky CTA
z-30  → Center UGC frame
z-20  → Status badge, mute button
z-10  → Side UGC frames, CTA card content
z-0   → Base content
```

**CSS variable mapping:**
```css
--z-nav:     50;
--z-center:  30;
--z-overlay: 20;
--z-raised:  10;
--z-base:     0;
--z-modal:   200;
--z-toast:   300;
```

---

## 13. Component Patterns

Use these as templates. Do not diverge without updating this file first.

### 13.1 Fixed Navbar

```
Position:    fixed top-0 w-full z-50
Background:  bg-neutral-950/70 bg-neutral-900/50 backdrop-blur-xl + .glass-nav
Inner:       max-w-7xl mx-auto flex justify-between items-center px-6 py-4

Logo:
  font:      --font-display / font-bold / text-2xl / tracking-tighter
  color:     --color-foreground
  accent:    "y" → --color-accent

Nav links (desktop only — hidden md:flex):
  font:      --font-display / font-bold / text-sm / tracking-tight
  gap:       gap-8
  color:     --color-foreground

Nav CTA button:
  bg:        #00FF85
  text:      #003919 / font-bold / text-sm
  padding:   px-5 py-2.5
  radius:    rounded-lg
  hover:     hover:opacity-90 active:scale-90 transition-transform
```

### 13.2 Avatar Stack + Social Proof

```
Wrapper:     flex items-center gap-3
Stack:       flex -space-x-3
Each avatar: w-10 h-10 rounded-full border-2 border-[#0A0A0A] overflow-hidden object-cover
Count badge: h-10 px-3 rounded-xl border-2 border-[#0A0A0A] bg-[#2A2A2A] text-xs font-bold
Label:       text-sm uppercase tracking-widest text-neutral-400 font-label
```

### 13.3 Status Badge

```
Position:    absolute top-4 left-4 z-20
Layout:      flex items-center gap-1.5 px-3 py-1 rounded-full
Background:  bg-[#00FF85]/10
Border:      border border-[#00FF85]/20
Blur:        backdrop-blur-md
Dot:         w-1.5 h-1.5 rounded-full bg-[#00FF85] animate-pulse
Text:        text-[10px] font-bold text-[#00FF85] uppercase tracking-wider
```

### 13.4 UGC Card Cluster

```
Container:   relative max-w-md aspect-[4/5] flex items-center justify-center

Background glow (absolute, pointer-events-none):
  size:      w-full h-full rounded-full
  bg:        bg-primary-container/10
  blur:      blur-[120px]

Side frames:
  width:     w-1/2 / aspect-[9/16] / rounded-xl
  border:    border border-white/5
  shadow:    shadow-2xl / opacity-80 / z-10 / overflow-hidden
  rotation:  left -rotate-6 / right rotate-6

Center frame:
  width:     w-[55%] / aspect-[9/16] / rounded-2xl
  border:    border-2 border-accent/30
  shadow:    .green-glow-shadow
  z:         z-30 / overflow-hidden
  Contains:  Status badge + content
```

### 13.5 Featured Video Player

```
Outer:       max-w-[320px] mx-auto
Container:   relative aspect-[9/16] rounded-[12px] border border-white/10
             .featured-video-shadow overflow-hidden
Video:       w-full h-full object-cover autoPlay loop muted playsInline
Overlay:     absolute inset-0 pointer-events-none
             bg-gradient-to-t from-black/40 via-transparent to-transparent
Mute button: absolute bottom-4 right-4 pointer-events-auto
             w-10 h-10 rounded-full bg-black/40 backdrop-blur-md
             border border-white/10
             hover:bg-black/60 active:scale-90 transition-all
```

### 13.6 CTA Card

```
Wrapper:     max-w-3xl mx-auto mt-20 md:mt-32

Card:
  bg:        --color-surface-container-low (#1C1B1B)
  padding:   p-12
  radius:    rounded-[2rem]
  border:    border border-white/5
  overflow:  overflow-hidden relative

Glow (absolute -top-24 -right-24, pointer-events-none):
  size:      w-48 h-48 rounded-full
  bg:        bg-accent/5 / blur-[60px]

Content (relative z-10, space-y-8):
  Heading:   text-3xl md:text-4xl font-display font-bold
  Subtext:   text-neutral-500 font-body leading-relaxed

Primary button:
  layout:    flex items-center justify-center gap-3 group
  width:     w-full md:w-auto
  padding:   px-10 py-5
  bg:        #00FF85 / text-[#0A0A0A] / font-bold / text-lg / rounded-xl
  shadow:    shadow-xl shadow-[#00FF85]/10
  hover:     hover:scale-[1.02] active:scale-[0.98] transition-all
  Arrow:     group-hover:translate-x-1 transition-transform

Fine-print:  text-xs uppercase tracking-widest text-neutral-600 font-label
```

### 13.7 Mobile Sticky CTA

```
Visibility:  md:hidden
Position:    fixed bottom-0 left-0 w-full z-50
Background:  .glass-nav
Padding:     p-4
Button:      w-full py-4 bg-[#00FF85] text-[#0A0A0A] font-bold rounded-xl
             shadow-lg shadow-[#00FF85]/20 flex items-center justify-center gap-2
```

### 13.8 Form Inputs

```css
.input {
  width: 100%;
  height: 48px;
  padding: 0 16px;
  background: var(--color-surface-container-high);
  color: var(--color-foreground);
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 400;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  outline: none;
  transition: border-color 0.15s ease;
}
.input::placeholder { color: var(--color-muted); }
.input:hover  { border-color: rgba(255,255,255,0.15); }
.input:focus  { border-color: var(--color-accent); box-shadow: 0 0 0 3px rgba(0,255,133,0.08); }
.input.error  { border-color: var(--color-error);  box-shadow: 0 0 0 3px rgba(255,68,68,0.12); }
textarea.input { height: auto; min-height: 120px; padding: 12px 16px; resize: vertical; line-height: 1.6; }
```

### 13.9 Buttons — Full Reference

**Primary (green) — one per view:**
```
bg:         #00FF85
text:       #003919 (nav) / #0A0A0A (large CTA)
padding:    px-10 py-5 (large) / px-5 py-2.5 (nav)
radius:     rounded-xl (large) / rounded-lg (nav)
weight:     font-bold / size: text-lg (large) / text-sm (nav)
shadow:     shadow-xl shadow-[#00FF85]/10
hover:      hover:scale-[1.02] or hover:opacity-90
active:     active:scale-[0.98] or active:scale-90
```

**Secondary (outlined):**
```
bg:         transparent
text:       --color-foreground
border:     1px solid rgba(255,255,255,0.15)
radius:     rounded-xl / weight: font-bold
hover:      bg rgba(255,255,255,0.05)
active:     scale-[0.98]
```

**Ghost (tertiary):**
```
bg:         transparent
text:       --color-muted (#888888)
border:     none / radius: rounded-lg
hover:      bg rgba(255,255,255,0.05), text --color-foreground
```

### 13.10 Cards

```css
.card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 24px;
}
.card:hover {
  border-color: rgba(255,255,255,0.15);
  background: #222222;
}
.card-highlighted {
  background: var(--color-card);
  border: 1px solid rgba(0,255,133,0.30);
  border-radius: 16px;
  box-shadow: 0px 0px 60px rgba(0,255,133,0.15);
}
```

### 13.11 Badges

```css
.badge-live {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 9999px;
  background: rgba(0,255,133,0.10);
  border: 1px solid rgba(0,255,133,0.20);
  backdrop-filter: blur(12px);
  font-size: 10px;
  font-weight: 700;
  color: #00FF85;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.badge-neutral {
  background: var(--color-surface-container-high);
  color: var(--color-foreground);
  border: 1px solid var(--color-border);
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
  padding: 0 12px;
  height: 40px;
  display: inline-flex;
  align-items: center;
}
```

### 13.12 Tables

```css
.table-wrapper {
  width: 100%;
  overflow-x: auto;
  border: 1px solid var(--color-border);
  border-radius: 12px;
}
table  { width: 100%; border-collapse: collapse; font-size: 14px; }
thead  { background: var(--color-surface-container-high); }
th {
  padding: 12px 16px;
  text-align: left;
  font-size: 11px; font-weight: 600;
  letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--color-muted);
  border-bottom: 1px solid var(--color-border);
  white-space: nowrap;
}
td {
  padding: 14px 16px;
  color: var(--color-on-surface-variant);
  border-bottom: 1px solid var(--color-border);
  vertical-align: middle;
}
tr:last-child td { border-bottom: none; }
tbody tr:hover   { background: var(--color-surface-container-low); }
```

### 13.13 Loading States

```css
.skeleton {
  background: var(--color-surface-container-high);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}
.skeleton::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%);
  animation: shimmer-sweep 1.5s ease-in-out infinite;
}
@keyframes shimmer-sweep {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.spinner {
  width: 20px; height: 20px;
  border: 2px solid rgba(255,255,255,0.1);
  border-top-color: var(--color-accent);
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
```

### 13.14 Toast Notifications

```css
.toast-container {
  position: fixed;
  bottom: 24px; right: 24px;
  z-index: 300;
  display: flex; flex-direction: column; gap: 8px;
  max-width: 360px;
  width: calc(100vw - 48px);
}
.toast {
  display: flex; align-items: flex-start; gap: 12px;
  padding: 14px 16px;
  background: var(--color-surface-container-high);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  font-size: 14px; line-height: 1.5;
  color: var(--color-on-surface-variant);
  animation: fadeInUp 200ms ease-out forwards;
}
.toast-success { border-color: rgba(0,255,133,0.25); }
.toast-error   { border-color: rgba(255,68,68,0.25); }
```

---

## 14. Page-Level Patterns

### 14.1 Marketing Landing Page Structure

```
1.  [NAV]          Fixed top bar — logo, links, primary CTA
2.  [HERO]         H1 + lead paragraph + CTA button + avatar social proof
3.  [PROOF BAR]    Logo strip or stat row
4.  [PROBLEM]      Name the pain. One sentence.
5.  [SOLUTION]     Product as answer. Show, don't tell. (UGC cluster visual)
6.  [FEATURES]     3–6 features. Icon + H4 + one sentence.
7.  [SOCIAL PROOF] Testimonials or results. Real numbers, real names.
8.  [PRICING]      Clear, honest. No hidden fees.
9.  [FAQ]          5–7 questions users actually ask.
10. [CTA SECTION]  CTA card pattern — repeat primary CTA.
11. [FOOTER]       Links, legal, socials.
    [MOBILE CTA]   Fixed bottom bar (md:hidden)
```

### 14.2 Hero Section — Required Elements

Four things visible before the fold:

```
1. What it does   → H1 with accented key phrase
2. Who it's for   → Lead paragraph with concrete outcome
3. What to do     → One green CTA button (outcome-labelled)
4. Why trust it   → Avatar stack + "500+ brands" social proof line
```

### 14.3 Base HTML Setup

```html
<html lang="en" class="antialiased">
<body class="min-h-full flex flex-col bg-[#0A0A0A] text-white">
<main class="min-h-screen pt-24 pb-32">
  <!-- pt-24 accounts for fixed nav height -->
</main>
```

---

## 15. Aspect Ratios & Media

```
aspect-[9/16]  → All UGC frames, video containers (portrait mobile format)
aspect-[4/5]   → UGC cluster container
```

All media: `object-cover` to fill without distortion. All video: `autoPlay loop muted playsInline`.

---

## 16. Iconography

**Primary:** Material Symbols Outlined (marketing pages, media controls)
```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet">
```
Default: `font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24`
Filled: `fontVariationSettings: '"FILL" 1'`

**Secondary:** Lucide Icons (app UI, dashboards, forms)
```css
stroke-width: 1.5;  /* always — never 2 on dark backgrounds */
```

| Class | Size | Context |
|-------|------|---------|
| `.icon-sm` | 14px | Inline micro |
| `.icon-md` | 18px | Default UI |
| `.icon-lg` | 24px | Feature cards, nav |
| `.icon-xl` | 32px | Section icons |

**Rules:** Icons in buttons go left of text — except directional arrows which go right. Icon-only buttons always have `aria-label`.

---

## 17. Writing Rules for UI Copy

**Sentence case everywhere** except: uppercase on badges, labels, captions, H6.

**Buttons — outcome, not action:**
```
✗ Submit          ✓ Create my video
✗ Click here      ✓ Start for free
✗ Confirm         ✓ Yes, delete project
✗ Next            ✓ Continue to payment
```

**Error messages — explain and direct:**
```
✗ An error occurred.
✓ Video generation failed. Check your credit balance and try again.
```

**Empty states — tell them what to do:**
```
✗ No videos found.
✓ You haven't created any videos yet. Hit "Create video" to make your first one in seconds.
```

**Placeholder text — example values, not instructions:**
```
✗ Enter your email address  ✓ you@brand.com
✗ Write a description       ✓ A 30ml perfume in a minimalist glass bottle...
```

**Loading states — active verbs:**
```
✗ Loading...  ✓ Generating your video...  ✓ Almost ready...
```

---

## 18. Guidance Signals (Krug — In-Context Help)

Brief. Timely. Unavoidable. One line at the exact point of friction.

```css
.guidance {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--color-muted);
  margin-top: 6px;
}
```

Use for: complex form fields, first-time empty states, before irreversible actions, non-obvious limitations.
Do not use as: substitute for bad design, or on every field.

---

## 19. Accessibility Requirements

- All interactive elements keyboard-accessible (logical Tab order)
- Focus ring: `box-shadow: 0 0 0 3px rgba(0, 255, 133, 0.08)` on focused elements
- All images have `alt` text (`alt=""` for decorative)
- Color never the only signal — always pair with text or icon
- ARIA labels on all icon-only buttons
- All form inputs have associated `<label>` (visually hidden is fine)
- Minimum touch target: 44×44px
- Never block zoom (`user-scalable=no` forbidden)
- `prefers-reduced-motion` respected on all animations

---

## 20. What Vynlo Never Looks Like

Hard stops. Reverse immediately if any of these appear.

```
✗ Light or pastel backgrounds on any surface
✗ White text on #00FF85 — always #003919 or #0A0A0A
✗ Any green other than #00FF85 (not #00E876 except on hover, not any yellow-green)
✗ More than one green CTA per view
✗ Green used as a repeating decorative pattern
✗ Gradients except: ambient glow at low opacity, black overlay on video
✗ Bubbly fonts (Nunito, Poppins, Raleway, Comfortaa)
✗ Corporate stock photography
✗ Happy talk copy ("Welcome to Vynlo! Here you can...")
✗ Walls of text — never more than 3 lines without a break
✗ Decorative box-shadows (only .green-glow-shadow and .featured-video-shadow are permitted)
✗ Competing CTAs at equal visual weight
✗ Carousels
✗ Hover tooltips as the primary instruction method
✗ More than 2 typefaces on any single surface
✗ Icon-only navigation without aria-label
```

---

## 21. CSS Custom Properties — Master Reference

Paste into `@theme inline` in `globals.css` (Tailwind v4). For vanilla CSS, use `:root`.

```css
@theme inline {

  /* === BACKGROUNDS === */
  --color-background:                  #0A0A0A;
  --color-card:                        #1A1A1A;
  --color-surface-container-low:       #1C1B1B;
  --color-surface-container-high:      #2A2A2A;
  --color-surface-container-highest:   #353534;
  --color-dim:                         #444444;

  /* === BORDERS === */
  --color-border: rgba(255, 255, 255, 0.08);

  /* === ACCENT === */
  --color-accent:            #00FF85;
  --color-accent-hover:      #00E876;
  --color-primary-container: #00FF85;
  --color-on-primary:        #003919;

  /* === TEXT === */
  --color-foreground:          #FFFFFF;
  --color-muted:               #888888;
  --color-on-surface-variant:  #B9CBB9;

  /* === SEMANTIC === */
  --color-error:        #FF4444;
  --color-error-dim:    rgba(255, 68, 68, 0.12);
  --color-warning:      #FF9500;
  --color-warning-dim:  rgba(255, 149, 0, 0.12);
  --color-success:      #00FF85;
  --color-success-dim:  rgba(0, 255, 133, 0.12);

  /* === TYPOGRAPHY === */
  --font-display: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif;
  --font-body:    'Inter', 'Helvetica Neue', Arial, sans-serif;
  --font-label:   'Inter', 'Helvetica Neue', Arial, sans-serif;

  /* === RADIUS === */
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-2xl:  32px;
  --radius-full: 9999px;

  /* === TRANSITIONS === */
  --transition-fast:   0.1s ease;
  --transition-base:   0.15s ease;
  --transition-slow:   0.25s ease;
  --transition-layout: 0.3s ease;

  /* === Z-INDEX === */
  --z-base:    0;
  --z-raised:  10;
  --z-overlay: 20;
  --z-center:  30;
  --z-nav:     50;
  --z-modal:   200;
  --z-toast:   300;

}
```

**Custom classes — add directly to `globals.css`:**

```css
/* Glass nav */
.glass-nav {
  background: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

/* Glow effects */
.green-glow-shadow     { box-shadow: 0px 0px 60px rgba(0, 255, 133, 0.15); }
.featured-video-shadow { box-shadow: 0px 0px 20px rgba(0, 255, 133, 0.15); }

/* Entrance animation */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fadeInUp 500ms ease-out forwards;
  animation-delay: var(--delay, 0ms);
}
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in-up { opacity: 1; animation: none; }
}
```

---

*DESIGN.md — Vynlo. Version 2.0. April 2026.*
*Source of truth. Never derive values from memory or other files. When code and this file conflict — update this file first, then update the code.*