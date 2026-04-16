# Vynlo Design System — Extracted from Landing Page

> Source of truth: `globals.css`, `layout.tsx`, `page.tsx`
> Last extracted: 2026-04-15

---

## 1. Color Palette

### Theme Variables (`@theme inline` in globals.css)

| Token                        | Value                        | Usage                        |
| ---------------------------- | ---------------------------- | ---------------------------- |
| `--color-background`         | `#0A0A0A`                    | Page background              |
| `--color-foreground`         | `#FFFFFF`                    | Default text                 |
| `--color-accent`             | `#00FF85`                    | Primary brand green          |
| `--color-accent-hover`       | `#00E876`                    | Accent hover state           |
| `--color-muted`              | `#888888`                    | Muted text                   |
| `--color-dim`                | `#444444`                    | Dimmed elements              |
| `--color-card`               | `#1A1A1A`                    | Card surface                 |
| `--color-border`             | `rgba(255, 255, 255, 0.08)`  | Default border               |
| `--color-surface-container-high` | `#2A2A2A`               | Elevated surface (count badge, side frames) |
| `--color-surface-container-highest` | `#353534`            | Highest surface (center UGC frame) |
| `--color-surface-container-low` | `#1C1B1B`                | Low surface (CTA card bg)    |
| `--color-primary-container`  | `#00FF85`                    | Primary container fill       |
| `--color-on-primary`         | `#003919`                    | Text on accent backgrounds   |
| `--color-on-surface-variant` | `#B9CBB9`                    | Subtitle / body text         |

### Hardcoded Colors (in page.tsx)

| Value         | Context                                    |
| ------------- | ------------------------------------------ |
| `#00FF85`     | Nav CTA bg, CTA button bg, mobile CTA bg, status badge text/dot |
| `#003919`     | Nav CTA text                               |
| `#0A0A0A`     | Avatar stack ring border, CTA button text, featured section bg |
| `#2A2A2A`     | Count badge bg (matches surface-container-high) |

### Tailwind Neutral Scale (used in page.tsx)

| Class            | Approximate Value | Context                   |
| ---------------- | ----------------- | ------------------------- |
| `neutral-400`    | `#A3A3A3`         | Brand count label text    |
| `neutral-500`    | `#737373`         | CTA subtext               |
| `neutral-600`    | `#525252`         | Footer fine-print text    |
| `neutral-900/50` | `#171717` @ 50%   | Nav bg layer              |
| `neutral-950/70` | `#0A0A0A` @ 70%   | Nav bg layer              |

### Alpha / Opacity Variants

| Class / Value        | Context                              |
| -------------------- | ------------------------------------ |
| `white/5`            | Side frame borders, CTA card border  |
| `white/10`           | Video container border, mute button border |
| `black/40`           | Mute button bg, video controls overlay |
| `black/60`           | Center frame gradient overlay        |
| `accent/5`           | CTA glow blur element                |
| `accent/30`          | Center frame active border           |
| `#00FF85/10`         | Status badge bg, CTA button shadow   |
| `#00FF85/20`         | Status badge border, mobile CTA shadow |
| `primary-container/10` | Hero UGC glow blur element         |

---

## 2. Typography

### Font Families

| CSS Variable / Class | Font              | Weights        | Source          |
| -------------------- | ----------------- | -------------- | --------------- |
| `--font-display`     | Space Grotesk     | 700            | `next/font/google` |
| `--font-body`        | Inter             | 400, 500, 600  | `next/font/google` |
| `--font-label`       | Inter (same)      | 400, 500, 600  | (shared)        |
| `material-symbols-outlined` | Material Symbols Outlined | 100–700 | Google Fonts CSS link |

### Icon Font Settings

```css
font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
```

Filled variant used inline: `fontVariationSettings: '"FILL" 1'` (play_circle icon).

### Font Size Scale (Tailwind classes used)

| Class          | Approx Size | Context                        |
| -------------- | ----------- | ------------------------------ |
| `text-[10px]`  | 10px        | Status badge label, frame label |
| `text-xs`      | 12px        | Count badge, footer fine-print |
| `text-sm`      | 14px        | Nav links, nav CTA, brand count label, accent icon |
| `text-lg`      | 18px        | Hero body text, CTA button     |
| `text-xl`      | 20px        | Mute icon, hero body (md)      |
| `text-2xl`     | 24px        | Logo                           |
| `text-3xl`     | 30px        | CTA heading (mobile)           |
| `text-4xl`     | 36px        | CTA heading (md)               |
| `text-5xl`     | 48px        | Hero heading (mobile)          |
| `text-7xl`     | 72px        | Hero heading (md)              |

### Font Weight

| Class        | Weight | Context        |
| ------------ | ------ | -------------- |
| `font-bold`  | 700    | Used throughout — headings, buttons, labels, logo, badges |

### Letter Spacing

| Class              | Value    | Context                              |
| ------------------ | -------- | ------------------------------------ |
| `tracking-tighter` | -0.05em  | Logo, frame status label             |
| `tracking-tight`   | -0.025em | Hero heading, nav links              |
| `tracking-wider`   | 0.05em   | Status badge label                   |
| `tracking-widest`  | 0.1em    | Brand count label, footer fine-print |

### Line Height

| Class             | Value  | Context          |
| ----------------- | ------ | ---------------- |
| `leading-tight`   | 1.25   | Hero heading     |
| `leading-relaxed` | 1.625  | Hero body text   |
| `leading-[1.0]`   | 1.0    | Hero heading     |

### Text Transform

| Class       | Context                                    |
| ----------- | ------------------------------------------ |
| `uppercase` | Labels, badges, brand count, fine-print    |

---

## 3. Spacing & Layout

### Container Max-Widths

| Class               | Approx Width | Context                        |
| -------------------- | ------------ | ------------------------------ |
| `max-w-7xl`          | 80rem / 1280px | Hero section, featured video section |
| `max-w-3xl`          | 48rem / 768px  | CTA section                    |
| `max-w-md`           | 28rem / 448px  | UGC cluster container          |
| `max-w-lg`           | 32rem / 512px  | Hero body text                 |
| `max-w-[320px]`      | 320px          | Featured video container       |

All centered with `mx-auto`.

### Horizontal Padding

| Class          | Context                  |
| -------------- | ------------------------ |
| `px-6`         | All sections (mobile)    |
| `md:px-8`      | Hero section (desktop)   |
| `px-5`         | Nav CTA button           |
| `px-3`         | Count badge, status badge |
| `px-10`        | CTA button               |

### Vertical Padding

| Class           | Context                      |
| --------------- | ---------------------------- |
| `py-4`          | Nav, mobile sticky CTA       |
| `py-5`          | CTA button                   |
| `py-2.5`        | Nav CTA button               |
| `py-1`          | Status badge                 |
| `py-12`         | Hero inner (md), CTA card    |
| `py-20`         | Featured section (mobile)    |
| `md:py-32`      | Featured section (desktop)   |
| `pt-24`         | Main top padding (nav offset) |
| `pb-32`         | Main bottom padding          |
| `p-4`           | Center frame overlay, mobile sticky, mute button area |
| `p-12`          | CTA card inner               |

### Gap Scale

| Class     | Context                              |
| --------- | ------------------------------------ |
| `gap-1.5` | Status badge inner                   |
| `gap-2`   | Nav CTA icon+text, status badge, mobile CTA |
| `gap-3`   | Avatar stack + label, CTA button icon+text |
| `gap-4`   | CTA buttons group                    |
| `gap-6`   | Hero buttons column                  |
| `gap-8`   | Nav link group                       |
| `gap-16`  | Hero left/right columns             |

### Space Utilities

| Class        | Context                     |
| ------------ | --------------------------- |
| `space-y-3`  | CTA heading + subtext       |
| `space-y-4`  | Hero heading + body         |
| `space-y-8`  | CTA card inner sections     |
| `-space-x-3` | Avatar stack overlap        |

### Section Vertical Rhythm

| Pattern                 | Context                  |
| ----------------------- | ------------------------ |
| `py-20 md:py-32`        | Featured video section   |
| `mt-20 md:mt-32`        | CTA section top margin   |
| `pt-24`                 | Main (fixed nav offset)  |
| `pb-32`                 | Main bottom              |
| `md:py-12`              | Hero inner               |

---

## 4. Border Radius

| Class             | Approx Value | Context                              |
| ----------------- | ------------ | ------------------------------------ |
| `rounded-full`    | 9999px       | Avatars, status badge, glow blur, mute button, status dot |
| `rounded-[2rem]`  | 32px         | CTA card                             |
| `rounded-2xl`     | 16px         | Center UGC frame                     |
| `rounded-xl`      | 12px         | Side UGC frames, CTA button, mobile CTA, count badge |
| `rounded-lg`      | 8px          | Nav CTA button                       |
| `rounded-[12px]`  | 12px         | Video container (explicit)           |

---

## 5. Borders

| Pattern                                   | Context                    |
| ----------------------------------------- | -------------------------- |
| `border border-white/5`                   | Side UGC frames, CTA card  |
| `border border-white/10`                  | Video container, mute button |
| `border-2 border-accent/30`              | Center UGC frame (active)  |
| `border-2 border-[#0A0A0A]`             | Avatar stack ring          |
| `border border-[#00FF85]/20`             | Status badge               |

Decoration: `underline decoration-4 underline-offset-8` on hero "UGC Ads." span.

---

## 6. Shadows & Glow Effects

### Custom CSS Classes

| Class                    | Value                                         | Context        |
| ------------------------ | --------------------------------------------- | -------------- |
| `.green-glow-shadow`     | `box-shadow: 0px 0px 60px rgba(0,255,133,0.15)` | Center UGC frame |
| `.featured-video-shadow` | `box-shadow: 0px 0px 20px rgba(0,255,133,0.15)` | Featured video |

### Tailwind Shadow Utilities

| Pattern                          | Context         |
| -------------------------------- | --------------- |
| `shadow-2xl`                     | Side UGC frames |
| `shadow-xl shadow-[#00FF85]/10`  | CTA button      |
| `shadow-lg shadow-[#00FF85]/20`  | Mobile sticky CTA |

---

## 7. Backdrop & Glass Effects

| Pattern / Class                                      | Context          |
| ---------------------------------------------------- | ---------------- |
| `.glass-nav` → `rgba(10,10,10,0.7)` + `blur(24px)`  | Navbar, mobile sticky CTA |
| `bg-neutral-950/70 backdrop-blur-xl bg-neutral-900/50` | Navbar (Tailwind layers) |
| `bg-black/40 backdrop-blur-md`                       | Mute button      |
| `backdrop-blur-md`                                   | Status badge     |

---

## 8. Gradients

| Pattern                                                    | Context                 |
| ---------------------------------------------------------- | ----------------------- |
| `bg-gradient-to-t from-black/60 to-transparent`            | Center frame overlay    |
| `bg-gradient-to-t from-black/40 via-transparent to-transparent` | Video controls overlay |

---

## 9. Animations & Transitions

### Keyframes

| Name         | Definition                                    | Duration | Easing   |
| ------------ | --------------------------------------------- | -------- | -------- |
| `fadeInUp`   | `translateY(16px)` → `0`, opacity `0` → `1`  | 500ms    | ease-out |

Applied via `.animate-fade-in-up` with `animation-delay: var(--delay, 0ms)`.
Respects `prefers-reduced-motion: reduce` (falls back to `opacity: 1`, no animation).

### Scale Interactions

| Pattern                                   | Context        |
| ----------------------------------------- | -------------- |
| `hover:scale-[1.02] active:scale-[0.98]` | CTA button     |
| `scale-95 active:scale-90`               | Nav CTA button |
| `active:scale-90`                        | Mute button    |

### Transitions

| Class                  | Context                    |
| ---------------------- | -------------------------- |
| `transition-transform` | Nav CTA, arrow icon hover  |
| `transition-all`       | CTA button, mute button    |

### Hover Effects

| Pattern                                         | Context      |
| ----------------------------------------------- | ------------ |
| `hover:opacity-90`                              | Nav CTA      |
| `hover:bg-black/60`                             | Mute button  |
| `group-hover:translate-x-1 transition-transform` | Arrow icon   |

### Continuous Animations

| Class            | Context                |
| ---------------- | ---------------------- |
| `animate-pulse`  | Status badge live dot  |

---

## 10. Responsive Breakpoints

### Only Breakpoint Used: `md:` (768px)

Mobile-first approach — base styles are mobile, `md:` overrides for desktop.

### Layout Shifts at `md:`

| Mobile                     | Desktop (`md:`)         | Context           |
| -------------------------- | ----------------------- | ----------------- |
| `flex-col`                 | `md:flex-row`           | Hero columns      |
| `order-2` (text below)    | `md:order-1` (text left)| Hero content      |
| `order-1` (UGC above)     | `md:order-2` (UGC right)| UGC cluster       |
| `py-12`                    | `md:py-0`               | UGC wrapper       |
| `w-full`                   | `md:w-1/2`              | Hero columns      |
| (visible)                  | `md:hidden`             | Mobile sticky CTA |

### Responsive Typography

| Mobile       | Desktop (`md:`) | Element       |
| ------------ | --------------- | ------------- |
| `text-5xl`   | `md:text-7xl`   | Hero heading  |
| `text-3xl`   | `md:text-4xl`   | CTA heading   |
| `text-lg`    | `md:text-xl`    | Hero body     |

### Responsive Spacing

| Mobile    | Desktop (`md:`) | Element          |
| --------- | --------------- | ---------------- |
| `px-6`    | `md:px-8`       | Hero section     |
| `py-20`   | `md:py-32`      | Featured section |
| `mt-20`   | `md:mt-32`      | CTA section      |
| `w-full`  | `md:w-auto`     | CTA button       |

---

## 11. Component Patterns

### Fixed Navbar
- Position: `fixed top-0 w-full z-50`
- Glass: dual-layer `bg-neutral-950/70 bg-neutral-900/50` + `backdrop-blur-xl` + `.glass-nav`
- Inner: `max-w-7xl mx-auto`, `flex justify-between items-center`, `px-6 py-4`
- Logo: `text-2xl font-bold tracking-tighter font-display`, accent "y"
- CTA: `bg-[#00FF85] text-[#003919] px-5 py-2.5 rounded-lg text-sm font-bold`
- Nav links placeholder: `hidden md:flex gap-8 font-display font-bold text-sm tracking-tight`

### Avatar Stack
- Overlapping: `-space-x-3`
- Each avatar: `w-10 h-10 rounded-full border-2 border-[#0A0A0A] overflow-hidden`
- Count badge: `h-10 px-3 rounded-xl border-2 border-[#0A0A0A] bg-[#2a2a2a] text-xs font-bold`
- Label: `text-sm font-label uppercase tracking-widest text-neutral-400`

### UGC Card Cluster
- Container: `max-w-md aspect-[4/5]` with centered flex
- Background glow: `bg-primary-container/10 blur-[120px] rounded-full`
- Side frames: `w-1/2 aspect-[9/16] rounded-xl border border-white/5 shadow-2xl opacity-80`
- Rotation: left `-rotate-6`, right `rotate-6`
- Center frame: `w-[55%] aspect-[9/16] rounded-2xl border-2 border-accent/30 green-glow-shadow z-30`
- Z-layering: sides `z-10`, center `z-30`

### Video Player
- Aspect ratio: `aspect-[9/16]` (portrait 9:16)
- Container: `max-w-[320px] rounded-[12px] border border-white/10 featured-video-shadow`
- Video: `autoPlay loop muted playsInline`, `object-cover`
- Overlay: `bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none`
- Mute button: `w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10` at `bottom-4 right-4`
- Status badge: `top-4 left-4`, pill shape, accent-tinted bg, animated dot

### Status Badge
- Position: `absolute top-4 left-4 z-20`
- Shape: `px-3 py-1 rounded-full`
- Background: `bg-[#00FF85]/10`
- Border: `border border-[#00FF85]/20`
- Effect: `backdrop-blur-md`
- Dot: `w-1.5 h-1.5 rounded-full bg-[#00FF85] animate-pulse`
- Text: `text-[10px] font-bold text-[#00FF85] uppercase tracking-wider`

### CTA Card
- Container: `max-w-3xl mx-auto`
- Card: `bg-surface-container-low p-12 rounded-[2rem] border border-white/5 relative overflow-hidden`
- Glow element: `absolute -top-24 -right-24 w-48 h-48 bg-accent/5 blur-[60px] rounded-full`
- Heading: `text-3xl md:text-4xl font-display font-bold`
- Subtext: `text-neutral-500 font-body`
- Button: `px-10 py-5 bg-[#00FF85] text-[#0A0A0A] font-bold rounded-xl text-lg shadow-xl shadow-[#00FF85]/10`
- Button interaction: `hover:scale-[1.02] active:scale-[0.98] transition-all`
- Arrow: `group-hover:translate-x-1 transition-transform`
- Fine-print: `text-xs font-label uppercase tracking-widest text-neutral-600`

### Mobile Sticky CTA
- Visibility: `md:hidden`
- Position: `fixed bottom-0 left-0 w-full z-50`
- Background: `glass-nav` (reuses nav glass effect)
- Padding: `p-4`
- Button: `w-full py-4 bg-[#00FF85] text-[#0A0A0A] font-bold rounded-xl shadow-lg shadow-[#00FF85]/20`

---

## 12. Z-Index Scale

| Value  | Element                       |
| ------ | ----------------------------- |
| `z-50` | Navbar, mobile sticky CTA     |
| `z-30` | Center UGC frame              |
| `z-20` | Status badge, mute button     |
| `z-10` | Side UGC frames, CTA card content |

---

## 13. Miscellaneous

- **Antialiasing**: `antialiased` on `<html>`
- **Body**: `min-h-full flex flex-col`
- **Main**: `min-h-screen`
- **Aspect ratios**: `aspect-[9/16]` (video/UGC frames), `aspect-[4/5]` (cluster container)
- **Object fit**: `object-cover` on all images and video
- **Pointer events**: `pointer-events-none` on video overlay, `pointer-events-auto` on mute button within overlay
- **Overflow**: `overflow-hidden` on frames, avatars, CTA card
