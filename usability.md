# Web Usability Framework — Based on Steve Krug's "Don't Make Me Think"

This document is a structured reference framework derived from Steve Krug's book *Don't Make Me Think, Revisited*. It is written for use by an AI agent reviewing, designing, or critiquing web interfaces, landing pages, product UIs, and digital content.

When evaluating any design, always treat this framework as your primary decision-making reference. Start from the Three Laws, then work through the relevant sections.

---

## The Three Laws — Always Apply These First

These are Krug's foundational laws of usability. They are the ultimate tie-breakers in any design decision. When in doubt, default to these.

**Law 1 — Don't make me think.**
Every page should be self-evident. A user should be able to land on any page and instantly understand what the site is, what the page does, and what they should do next — with zero mental effort. If a user has to pause and wonder about anything, the design has failed.

**Law 2 — It doesn't matter how many clicks, as long as each click is a mindless, unambiguous choice.**
The goal is not to minimise click count. The goal is to make every click feel obvious and confident. Three easy clicks are always better than one click that requires thought. Each click should feel like progress, not a gamble.

**Law 3 — Get rid of half the words on each page, then get rid of half of what's left.**
Most text on web pages goes unread. Cutting words reduces noise, makes useful content more visible, and makes pages shorter so users see more without scrolling. When in doubt, cut.

---

## Section 1 — Cognitive Load (Krug Ch. 1 & 5)

**What this section is about:**
Cognitive load is the amount of mental effort a user has to spend just to understand and use a page. Every question mark in a user's mind — "What does this mean?" "Is that a link?" "Where do I start?" — is a unit of cognitive load. Your job is to eliminate as many of these as possible.

---

### Rule 1.1 — Make pages self-evident, or at minimum self-explanatory

The ideal is self-evident: a user understands the page with zero thought, the same way they understand a stop sign. When that's not possible (e.g. a complex or novel feature), make it self-explanatory: a moment of thought is acceptable, but the design itself — layout, labels, copy — should guide them to understanding without needing a tutorial.

**How to apply this:**
- Ask: "Could a brand new user land here and know what to do within 5 seconds?" If no, it fails.
- Remove any element that requires context the user doesn't already have.
- If something needs explaining, that's a signal to redesign it, not add a tooltip.

**Common violations:**
- Marketing-driven names ("Job-o-Rama" instead of "Jobs")
- CTAs that say what they are rather than what they do ("Submit" instead of "Create my account")
- Navigation labels that make sense internally but not externally ("The Hub", "Resources Suite")

---

### Rule 1.2 — Clarity beats consistency

Consistency across a product is good. But if breaking consistency in one place makes something significantly clearer, always choose clarity. Never sacrifice a user's understanding for the sake of internal uniformity.

**How to apply this:**
- If a label, layout, or pattern is slightly inconsistent but much clearer, keep the clarity.
- Only innovate on conventions when your approach is demonstrably better for the user — not just different or more "on brand."

---

### Rule 1.3 — Kill happy talk and kill instructions

**Happy talk** is introductory, content-free copy that welcomes users and describes the site to them ("Welcome to our platform! Here you can find all the tools you need to..."). Users skip it entirely. It just adds clutter and delays the actual content.

**Instructions** are paragraphs explaining how to use a form, feature, or flow. The reality is that no one reads instructions. If a user needs instructions to use something, the design is broken.

**How to apply this:**
- Delete any copy that starts with "Welcome to..." or "Here you can..."
- If something needs instructions, redesign it to be self-explanatory instead.
- If instructions are truly unavoidable, cut them to the absolute minimum and format them as a scannable list, not a paragraph.

**Test:** Read a block of copy and ask: "Does this add information the user needs, or does it just describe what they can already see?" If the latter, delete it.

---

## Section 2 — Scanning & User Behavior (Krug Ch. 2)

**What this section is about:**
Users do not behave the way designers expect. Understanding how they actually behave is the foundation of good design. There are three key facts about how real users interact with websites.

---

### Rule 2.1 — Users scan pages, they don't read them

Users never read a page top-to-bottom. They scan for the specific word, phrase, or element relevant to their current goal and completely ignore everything else. Think of it like the way a dog only hears its own name in a long sentence — everything else is noise.

**Designing for scanning means:**
- Use meaningful headings on every section — they are the primary scan targets.
- Keep paragraphs short. Even one-sentence paragraphs are fine.
- Use bulleted lists. Almost any series of items should be a list, not a sentence.
- Bold key terms so the scanner's eye lands on what matters.
- Put the most important information first in every paragraph (inverted pyramid).

**What not to do:**
- Long unbroken paragraphs — nobody reads them.
- Section headings that are vague or decorative (e.g. "Our Story" when the user is looking for "About").
- Burying the key point at the end of a paragraph.

---

### Rule 2.2 — Users satisfice — they pick the first reasonable option, not the best one

Satisficing means combining "satisfying" and "sufficing." When presented with options, users don't evaluate all of them to find the best. They click the first one that looks like it might work. This is rational behaviour — evaluating every option takes more time and effort than the potential gain.

**Designing for satisficing means:**
- Put your most important navigation options first — users rarely get to the third or fourth item.
- Every link and CTA must have a clear "information scent" — it must clearly signal where it leads.
- Don't make users read descriptions before they can understand what an option does; the label itself must be sufficient.

---

### Rule 2.3 — Users muddle through — they build the wrong mental model and stick with it

Most users never fully understand how a site works. They build a rough mental model (often incorrect), find something that kind of works, and use it that way forever. They don't go looking for the better, more efficient way.

**Designing against muddling means:**
- Make the correct, intended action the most obvious and easiest path.
- Don't rely on users discovering features or learning your system over time.
- If the right way to do something requires more effort than the wrong way, users will use the wrong way.

---

## Section 3 — Visual Design & Page Layout (Krug Ch. 3)

**What this section is about:**
Because users are scanning your pages at speed — the way a driver reads a billboard — your visual design must communicate structure, hierarchy, and meaning instantly. This section covers how to design pages that are understood at a glance.

---

### Rule 3.1 — Build a clear visual hierarchy that mirrors information hierarchy

Visual hierarchy is the use of visual weight (size, colour, contrast, spacing) to communicate the relative importance of elements on a page. A correct visual hierarchy means a user can understand what's most important, what belongs together, and what's secondary — before reading a single word.

**A correct visual hierarchy has three properties:**
1. More important things are more visually prominent (larger, bolder, more white space around them).
2. Logically related things are visually grouped together.
3. Subordinate items are visually nested inside their parent elements.

**How to apply this:**
- Your primary CTA should be the most visually dominant interactive element on the page.
- Section headings should visually span and "own" the content beneath them.
- Items in the same category should share the same visual treatment.

---

### Rule 3.2 — Eliminate visual noise

Visual noise makes pages hard to process. It takes three forms:

- **Shouting:** Too many elements competing for attention with bold colours, large fonts, or prominent placement. When everything shouts, nothing is heard.
- **Disorganisation:** No discernible structure or alignment. Pages that look like the content was just dropped in randomly feel overwhelming.
- **Clutter:** Too many elements, period. Every element that doesn't earn its place is diluting the ones that do.

**How to apply this:**
- There should be one primary action per page or view. If multiple things are equally prominent, the hierarchy is broken.
- Start from the assumption that everything on the page is noise, and only keep elements that genuinely earn their place.
- Use a grid. Aligned elements feel organised; misaligned elements feel chaotic even when the content is the same.

**Common violations:**
- Multiple buttons with the same visual weight competing for the primary action.
- Promotional banners fighting with core navigation for attention.
- "Feature soup" landing pages where every feature is presented at the same prominence.

---

### Rule 3.3 — Make interactive elements obviously interactive

Users are constantly scanning for the next thing to click. Any element that looks interactive but isn't creates frustration. Any element that is interactive but doesn't look it creates confusion. There should never be any ambiguity.

**How to apply this:**
- Buttons must look like buttons (shape, fill, cursor change on hover).
- Text links must be visually distinct from body text — consistently, across the entire product.
- Hover states should confirm interactivity before the click.
- Don't use the same visual styling for both decorative elements and interactive ones.

---

## Section 4 — Navigation Design (Krug Ch. 6)

**What this section is about:**
Navigation is how users build their mental map of a site. When navigation is done well, users feel oriented and in control. When it fails, they feel lost — even if they're technically on the right page. Navigation is never just a functional element; it's the fundamental trust signal of the entire site.

---

### Rule 4.1 — Every page must instantly answer four orientation questions

Users arrive on pages from anywhere — search engines, social media, email links, direct URLs. Every single page must be able to orient a brand new visitor with zero context. There are four questions every page must answer within seconds:

1. **Where am I?** — What site is this, and what section am I in?
2. **What's here?** — What does this specific page contain or do?
3. **Where can I go?** — What are my options from here?
4. **Where have I been?** — What path have I already taken?

**How to apply this:**
- Every page needs a visible site logo/ID, a clear page name, and a highlighted current section in navigation.
- The page name (h1) must be specific and descriptive — not just the section name.
- "You are here" indicators (highlighted nav items, breadcrumbs) are not optional — they are a core navigation element.

**The Trunk Test:** Imagine being blindfolded, driven around, and dropped on a random page of the site. Can you answer all four questions without scrolling? If not, navigation has failed.

---

### Rule 4.2 — Persistent navigation must always include these six elements

Navigation should appear consistently across all pages. The six elements that must always be present are:

1. **Site ID** — The logo or site name, typically top-left.
2. **Page name** — Clear title of the current page.
3. **Main sections** — The primary navigation categories.
4. **Local navigation** — Sub-navigation relevant to the current section.
5. **"You are here" indicator** — Visual signal showing current location in the site structure.
6. **Search** — Always accessible, especially on content-heavy sites.

Removing navigation from pages (e.g. checkout flows, landing pages) should be done deliberately and with care. It can trap users or signal that they've left the site.

---

### Rule 4.3 — Mindless clicks beat minimal clicks

The popular "three-click rule" (users give up if they can't find something in three clicks) is false. Users don't abandon sites because of click count. They abandon because clicks feel uncertain. A confident user will click ten times without frustration. An uncertain user will abandon after one.

**How to apply this:**
- Each click must carry a strong "information scent" — the user should feel certain they're heading in the right direction.
- Ambiguous labels ("Solutions", "Platform", "Resources") create weak scent and erode confidence.
- When a choice is genuinely complex, provide brief, timely, unavoidable guidance. Not a paragraph — a single clarifying line placed exactly where the user needs it.

---

## Section 5 — Home Page Design (Krug Ch. 7)

**What this section is about:**
The home page is the hardest page to design because it carries more competing demands than any other page. Every stakeholder wants their priority front and centre. The user just wants to know what the site is and whether it's worth their time.

---

### Rule 5.1 — The home page must pass the "What is this?" test in seconds

A first-time visitor with no prior knowledge must be able to arrive on the home page and immediately understand:
- What the site is
- What it offers
- Why they should use this one over alternatives

**The three home page elements that convey this:**
1. **Tagline** — A short, plain-language description directly below or adjacent to the logo. Not a slogan or a brand claim. A literal explanation of what the product or service does. Example: "Vyrlo — AI-generated UGC video ads for performance marketers."
2. **Welcome blurb** — A small, prominent block of copy that speaks directly to a new visitor and explains the site's value clearly.
3. **"Learn more" / demo path** — A low-commitment way for curious visitors to understand the product before signing up.

---

### Rule 5.2 — One primary CTA, above the fold, always

The home page frequently suffers from competing demands — marketing wants the feature promo, sales wants the demo CTA, product wants the feature highlights. The result is a page where nothing has clear priority.

**How to apply this:**
- There must be one visually dominant CTA. Secondary CTAs are fine but must be clearly subordinate.
- The most important message and action must be visible without scrolling.
- Avoid rotating hero carousels — research consistently shows users never engage past the first slide, and they create the illusion of content without actually conveying it.

---

## Section 6 — Goodwill & Trust (Krug Ch. 8)

**What this section is about:**
Every user arrives with a finite reservoir of goodwill — a budget of patience and trust. Every time something frustrates, confuses, or disrespects them, they make a withdrawal. When the reservoir empties, they leave and tell others. Good usability means managing that reservoir carefully.

---

### Rule 6.1 — Know what destroys goodwill and eliminate it

**The biggest goodwill destroyers, in order of severity:**

- **Hiding information users clearly need.** Pricing, phone numbers, cancellation policies — if users expect to find something and it's hidden or absent, they assume the worst. Always.
- **Punishing users for not doing things your way.** Requiring a specific phone format, rejecting passwords for unstated reasons, forcing account creation before checkout.
- **Asking for data you don't need.** Every unnecessary form field signals distrust and wastes the user's time.
- **Fake urgency and dark patterns.** Countdown timers that reset, "only 2 left!" claims, pre-checked upsell boxes. Users recognise these and they destroy trust permanently.
- **Unprofessional errors.** Broken links, typos, 404 pages with no guidance — they signal that nobody is home.

---

### Rule 6.2 — Know what builds goodwill and invest in it

**The biggest goodwill builders:**

- **Anticipate what users need most and surface it immediately.** If most users visit to check order status, make that the easiest thing to do — not the thing buried in account settings.
- **Tell users what they need to know upfront.** Shipping costs, eligibility requirements, trial terms — state these clearly before users invest time in a flow, not at the end.
- **Recover gracefully from errors.** Error messages should explain what went wrong in plain language and tell the user exactly what to do next. "An error occurred" is never acceptable.
- **Do the hard work so users don't have to.** If you can spare the user a calculation, a decision, or a piece of research — do it.

---

### Rule 6.3 — Accessibility is a baseline, not a bonus

Krug argues that fixing usability almost always improves accessibility — and that the two should be treated as the same goal. A site that is genuinely easy to use for a distracted, hurried mainstream user is also easier to use for someone with a disability.

**Minimum baseline:**
- All images have descriptive alt text.
- The site is fully navigable by keyboard.
- Colour is never the only way information is conveyed.
- Skip-navigation links are present for screen reader users.
- ARIA labels are applied to interactive elements that lack visible text labels.

---

## Section 7 — Usability Testing (Krug Ch. 9–11)

**What this section is about:**
Krug's core argument about testing is simple: a small amount of real user testing, done regularly, is worth infinitely more than internal debate about what users want. You will always discover more problems in half a day of watching three users than in months of stakeholder meetings.

---

### Rule 7.1 — Test early, test often, test small

The common mistake is treating usability testing as a large, expensive project done once before launch. By then it's too late to act on the findings properly. The right model is small, frequent testing — ideally monthly — with just three participants per round.

**Why three users is enough:**
The first few users will expose the most significant problems. Additional users tend to repeat the same findings. You don't need statistical significance to know that a navigation label confused every single test participant.

**How to run a basic test:**
1. Recruit 3 participants — they don't need to match your exact user demographic for most fundamental usability issues.
2. Give them specific tasks to complete on the site ("Find the pricing for the Pro plan" / "Try to sign up for a free trial").
3. Ask them to think aloud as they work.
4. Watch silently. Do not help. The moment you explain something, the test is compromised.
5. After each session, identify the top 3 usability problems observed.
6. Prioritise and fix the most serious issues before the next round.

---

### Rule 7.2 — When fixing problems, redesign — don't add

After testing, the instinct is to add explanations, callouts, tooltips, or instructions to patch discovered confusion. This almost always makes the page worse by adding more clutter and more reading burden.

**The correct response to a discovered problem:**
- If users didn't understand a label → rewrite the label.
- If users missed a CTA → reposition or redesign the CTA.
- If users were confused by a flow → simplify the flow.
- If users needed instructions → redesign so instructions aren't needed.

**Krug's triage rule:** "You can find more problems in half a day than you can fix in a month." This means prioritisation is essential. Fix the three most serious problems first. Don't attempt to fix everything.

---

## Section 8 — Mobile Usability (Krug Ch. 12)

**What this section is about:**
Mobile is not a smaller version of desktop. It is a different context with different constraints, different use cases, and a smaller margin for error. Every principle in this framework applies on mobile — but the stakes are higher because there is less space to recover from confusion.

---

### Rule 8.1 — Small screens demand ruthless prioritisation

The small screen is actually a useful forcing function. It makes you decide what is truly important, because you cannot fit everything. The cardinal rule: never solve a real estate problem by making the design less usable.

**How to apply this:**
- Responsive design is mandatory. A desktop-only experience is not an acceptable fallback.
- Always allow zooming. Blocking zoom is hostile to users and an accessibility failure.
- Never redirect deep links to the home page. If a user taps a link to a specific article or product, take them there — not to the mobile homepage.
- Tap targets must be large enough to hit accurately — 44x44px minimum. Tiny tap targets are the mobile equivalent of ambiguous links.

---

### Rule 8.2 — Rethink navigation for mobile — don't just collapse the desktop version

A hamburger menu that contains a collapsed copy of your desktop navigation is not mobile navigation design. It is avoidance. On mobile, you need to make deliberate decisions about what navigation options are truly necessary for the mobile context.

**How to apply this:**
- Prioritise the most common mobile use cases — not the full feature set.
- One primary action per screen. Competing actions on mobile are even more damaging than on desktop because there is nowhere to hide them.
- Consider the context of mobile use: users are often on the move, distracted, using one thumb, and in low-attention states. Design for that reality.

---

## Quick Reference — Agent Decision Rules

Use these as fast checks when reviewing any design, copy, or user flow.

| Check | Question to ask | Pass condition |
|---|---|---|
| Law 1 | Can a new user understand this page in 5 seconds? | Yes, without any explanation |
| Law 2 | Does every click feel obvious and confident? | No guessing required |
| Law 3 | Has all unnecessary text been removed? | Nothing left that doesn't earn its place |
| Scanning | Is the page structured for scanning, not reading? | Headings, bullets, short paragraphs |
| Satisficing | Is the best option the most prominent and first? | Primary path is front-loaded |
| Visual hierarchy | Does importance match visual weight? | Most important = most prominent |
| Noise | Is there one clear primary action per view? | No competing elements of equal weight |
| Navigation | Does every page answer the 4 orientation questions? | Where am I / What's here / Where can I go / Where have I been |
| Home page | Does the home page pass the "What is this?" test? | Tagline + clear value prop above the fold |
| Goodwill | Does any element hide information or punish users? | No dark patterns, no hidden costs |
| Mobile | Are all tap targets 44x44px minimum? | Yes, and zooming is allowed |
| Testing | Has this been tested with real users? | At minimum a 3-person informal test |

---

## The Most Important Single Principle

If this entire framework had to be reduced to one instruction, it would be this:

> **Every time you make a user think — even for a fraction of a second — you are spending their patience. You have a limited supply of it. Spend it only on things that genuinely matter.**

When reviewing any design decision, always ask: "Am I making the user do work that I could be doing for them?" If yes, do the work yourself.

---

*Framework based on: Don't Make Me Think, Revisited (3rd Edition) by Steve Krug. Published by New Riders, 2014.*