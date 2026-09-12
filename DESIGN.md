---
name: N-Lang
description: "A Dutch-first programming experience staged as an after-hours science-museum light table."
colors:
  graphite-night: "#12100f"
  graphite-soft: "#171411"
  exhibit-surface: "#1c1916"
  raised-surface: "#24201c"
  museum-ivory: "#f4f0e8"
  ivory-soft: "#c9c0b5"
  label-dim: "#92887d"
  exhibit-orange: "#ff7618"
  orange-bright: "#ff8b38"
  orange-ink: "#1b0d04"
  orange-wash: "rgba(255, 118, 24, 0.13)"
  divider: "rgba(255, 238, 218, 0.12)"
  divider-strong: "rgba(255, 238, 218, 0.2)"
  danger-coral: "#ff9b7a"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, system-ui, sans-serif"
    fontSize: "clamp(3.4rem, 5vw, 5.35rem)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque Variable, system-ui, sans-serif"
    fontSize: "clamp(2.55rem, 5vw, 4.9rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Bricolage Grotesque Variable, system-ui, sans-serif"
    fontSize: "1.22rem"
    fontWeight: 690
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Atkinson Hyperlegible Next Variable, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Atkinson Hyperlegible Next Variable, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 680
    lineHeight: 1.2
  action:
    fontFamily: "Atkinson Hyperlegible Next Variable, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 790
    lineHeight: 1
  code:
    fontFamily: "Cascadia Code, SFMono-Regular, Consolas, monospace"
    fontSize: "0.82rem"
    lineHeight: 1.68
rounded:
  micro: "7px"
  chip: "8px"
  compact: "9px"
  small: "10px"
  control: "12px"
  panel: "16px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.exhibit-orange}"
    textColor: "{colors.orange-ink}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.orange-bright}"
    textColor: "{colors.orange-ink}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "50px"
  button-compact:
    backgroundColor: "{colors.exhibit-orange}"
    textColor: "{colors.orange-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.compact}"
    padding: "0 13px"
    height: "36px"
  compiler-panel:
    backgroundColor: "{colors.graphite-soft}"
    textColor: "{colors.museum-ivory}"
    rounded: "{rounded.panel}"
  chip-selected:
    backgroundColor: "{colors.raised-surface}"
    textColor: "{colors.museum-ivory}"
    typography: "{typography.label}"
    rounded: "{rounded.chip}"
    padding: "6px 10px"
  tab-selected:
    backgroundColor: "{colors.orange-wash}"
    textColor: "{colors.orange-bright}"
    typography: "{typography.label}"
    rounded: "{rounded.micro}"
    padding: "0 8px"
    height: "32px"
---

# Design System: N-Lang

## Overview

**Creative North Star: "The After-Hours Language Lab"**

N-Lang feels like an interactive science museum after closing: graphite light-table darkness, warm ivory editorial type, precise exhibit labels, and translucent orange pieces that make an abstract compiler feel touchable. It is playful through material and discovery, never through childish decoration. The thesis is simple: programming clicks sooner when the language feels familiar.

The experience is code-led and moderately spacious (design variance 8, motion 6, density 4). It opens with concise copy beside the real compiler, then moves in a fixed learning sequence: read Dutch code, see its structure, run it, and understand the PWS investigation. The visual system must reject the generic neon-terminal landing page; code is evidence inside an editorial museum world, not the whole aesthetic.

**Key Characteristics:**

- Graphite-on-ivory contrast with one warm orange UI accent.
- Editorial display type paired with highly legible body and restrained mono code.
- Real, usable compiler interaction in the first viewport.
- Large exhibit imagery, tactile code tiles, fine divider lines, and quiet tonal surfaces.
- One soft major-surface geometry, purposeful motion, and generous but not theatrical space.

## Colors

The palette is a warm near-black neutral system illuminated by one orange beacon.

### Primary

- **Exhibit Orange:** Primary actions, active states, focus indicators, compiler-route emphasis, and semantic code pieces.
- **Orange Bright:** Hover emphasis and secondary orange text where the base accent needs more luminosity on graphite.
- **Orange Ink:** Dark text and icons placed directly on solid orange controls or tiles.
- **Orange Wash:** A translucent state layer for selected tabs and small icon wells; it should feel like light passing through acrylic.

### Neutral

- **Graphite Night:** The uninterrupted page ground and reduced-transparency header fallback.
- **Graphite Soft:** Compiler and section-level tonal separation without leaving the dark world.
- **Exhibit Surface:** Default cards and museum-like working surfaces.
- **Raised Surface:** Selected chips, empty states, and small inset panels.
- **Museum Ivory:** Headlines and primary readable content.
- **Ivory Soft:** Supporting paragraphs and secondary navigation.
- **Label Dim:** Captions, metadata, inactive tabs, and quiet helper text.
- **Divider / Divider Strong:** Fine structural boundaries; use the stronger version only when hierarchy needs a firmer edge.

### Status

- **Danger Coral:** Compiler errors only. Keep error copy warm and readable without introducing a competing brand accent.

**The One Beacon Rule.** Orange is the only interface accent. Teal, blue, and yellow may appear as subordinate physical materials inside generated museum imagery, but they do not migrate into controls, type, focus states, or page chrome.

**The Warm Black Rule.** Use brown-black graphite rather than neutral black or blue-black. Tonal variation should remain close enough that the page reads as one continuous dark exhibition room.

## Typography

**Display Font:** Bricolage Grotesque Variable with a system sans-serif fallback.  
**Body Font:** Atkinson Hyperlegible Next Variable with Atkinson Hyperlegible and system sans-serif fallbacks.  
**Code Font:** Cascadia Code with SFMono-Regular, Consolas, and monospace fallbacks.

**Character:** Bricolage supplies the confident, slightly idiosyncratic editorial voice; Atkinson keeps Dutch explanations and controls unusually easy to parse for beginners. Monospace appears only where the content is actually code, compiler output, a filename, or a syntax token.

### Hierarchy

- **Display:** Use the frontmatter display role for the hero only. Keep lines short (about 9–10 characters wide in the current composition) and balanced.
- **Headline:** Use the headline role for major section theses; these should read as editorial statements before supporting copy is scanned.
- **Title:** Use the title role for process steps and compact content units. Mechanism-card titles may scale up to the observed responsive card-heading size when they carry the section’s main teaching point.
- **Body:** Use the body role for explanation. Introductory paragraphs may scale fluidly to 1.2rem; keep most measures between 39ch and 62ch.
- **Label:** Use the label role for panes, tabs, chips, captions, and metadata. Labels stay sentence case rather than becoming generic all-caps tech chrome.
- **Action:** Use the action role for primary calls to action; weight, not capitalization, provides confidence.
- **Code:** Use the code role with tabular numerals and relaxed line height. Smaller code labels may step down to 0.68–0.79rem inside the compiler.

**The Editorial-Before-Terminal Rule.** A visitor should first read a clear human proposition, then inspect code. Never allow monospace styling or terminal conventions to dominate the page voice.

## Layout

The page uses a centered fluid container capped at 1440px. Desktop side space is derived from a 48px total inset; screens at 680px and below use a 32px total inset. Major sections use a slow vertical rhythm of roughly 96–180px, while interactive panes stay compact.

The desktop hero is an asymmetric two-column exhibit: concise copy occupies the narrower left column and the working compiler dominates the right. It fills the first viewport beneath the 72px sticky header. Subsequent sections alternate a panoramic installation, a portrait learning scene, an irregular 12-column mechanism grid, an editorial research split, and a compact closing action. Preserve the story order: Dutch code → compiler structure → execution and outputs → PWS context.

Responsive behavior is compositional, not a scaled-down desktop:

- **1180px:** Tighten the hero ratio and closing grid while preserving the dominant compiler.
- **1020px:** Stack the hero; keep the copy concise and place the full-width compiler immediately after it. Stack the research lead above its details.
- **840px:** Replace centered navigation links with the explicit menu, stack learning and mechanism sections, and turn the four-step process rail into a horizontal snap track.
- **680px:** Use 16px physical side gutters, stack compiler source and result panes, shorten the header to 66px, and crop the panoramic installation to a square with its explanatory structure centered.
- **420px:** Make primary hero and closing actions full width; collapse inactive result-tab labels while keeping the active label visible.

**The Proof-First Rule.** No decorative intro, splash, or oversized preamble may push the working compiler out of the opening experience.

## Elevation & Depth

Depth is mostly tonal and structural: adjacent graphite surfaces, one-pixel warm-ivory dividers, inset panes, and pools of low-opacity orange light. Major exhibit surfaces may lift, but ordinary content should remain flat enough to feel built into the room.

### Shadow Vocabulary

- **Compiler Lift** (`0 28px 80px rgba(45, 21, 7, 0.36)`): Reserved for the hero compiler, making the real tool feel like the illuminated centerpiece.
- **Image Plinth** (`0 34px 90px rgba(54, 25, 7, 0.22–0.25)`): A broad warm shadow under large exhibit imagery.
- **Action Glow** (`0 12px 30px rgba(255, 106, 12, 0.17)`; hover `0 16px 36px rgba(255, 106, 12, 0.23)`): Used only under solid primary buttons.
- **Header Glass:** The sticky header uses an 18px blur with 135% saturation over a mostly opaque graphite layer; it becomes solid graphite when reduced transparency is requested.

**The Plinth, Not Card Stack Rule.** Use shadow to establish one exhibit centerpiece or response state. Do not make every section, row, or text group float independently.

## Shapes

The silhouette is precise and gently softened. Use the `panel` radius for compiler shells, exhibit imagery, mechanism cells, and the logo at display scale. Use `small` and `control` for utility controls and primary actions; use `micro`, `chip`, and `compact` only inside dense compiler chrome. Borders are one-pixel translucent ivory lines.

Circular geometry is exceptional: it belongs to ambient light fields and the round learning table inside imagery, not to generic interface containers. Pills are avoided. Acrylic code tiles remain compact rounded rectangles, which supports the tactile construction metaphor.

**The Sixteen-Pixel Frame Rule.** The major surface radius is the recurring visual signature. Do not inflate it into bubbly cards or apply it indiscriminately to every nested control.

## Components

### Buttons

- **Primary:** A solid orange, dark-ink action using the `button-primary` token. It is rectangular and tactile, with enough height for beginner-friendly targeting.
- **Compact run action:** Use `button-compact` inside the compiler only. Disable it when the source is empty or already running; disabled opacity is 0.48.
- **Hover / active:** Shift to Orange Bright, lift 1–2px, then press down 1px with a subtle 0.98–0.985 scale. State changes run for 160–180ms.
- **Focus:** The global focus-visible treatment is a 3px Orange Bright outline with a 4px offset; never remove it in favor of hover alone.

### Navigation

The header is sticky and restrained. The brand pairs the unchanged tulip mark with Bricolage; desktop links are centered and reveal an orange underline on hover. The primary action stays visible as links collapse. At 840px and below, a bordered square menu control exposes three generously spaced links and communicates expanded/hidden state with native ARIA.

### Compiler Lab

The compiler is the signature component and must remain a real interaction, not a mock screenshot. It combines a file top bar, run action, example chips, editable source, output tabs, result pane, and a four-stop source-to-Java route.

- **Examples:** Default options are quiet; the chosen example uses the selected-chip token and `aria-pressed`.
- **Source field:** Transparent on an inset graphite pane with a warm-ivory caret. It supports Ctrl/Cmd + Enter, a visible helper, a 1200-character limit, and an inset orange focus ring.
- **Result tabs:** Inactive tabs are dim. The active tab uses `tab-selected`, `aria-selected`, and an icon plus label; Java exposes a copy state that swaps to a checkmark for 1600ms.
- **Outputs:** Successful output uses ivory mono text and orange prompts. AST and Java use scroll-safe preformatted blocks. Tokens become compact semantic tiles. Empty output becomes a neutral inset state.
- **Errors:** Use Danger Coral, a warning icon, `role="alert"`, and a specific line reference where available. Never express failure by color alone.
- **Running:** A 2px orange progress line and a temporary “Vertalen” label provide feedback. The deliberate delay is 220ms with motion enabled and immediate when reduced motion is active.

### Cards and Teaching Units

Mechanism cells use the major panel shape, one-pixel dividers, tonal graphite variants, and a single orange teaching artifact. Process steps and research details rely on rules and alignment rather than being boxed by default. Phosphor icons use bold or duotone weights and remain orange; they clarify meaning rather than decorate empty space.

### Imagery

Use large, cinematic museum images as evidence of the physical metaphor: a panoramic compiler installation (1942×809) and a portrait collaborative workshop (1122×1402). Images fill their clipped 16px frames with `object-fit: cover`; mobile crops preserve the machine or people rather than merely centering the source frame. Alt text describes the learning action or compiler structure. Preserve a provenance JSON companion beside every shipping raster, and keep the supplied tulip logo recognizable.

### Motion and Accessibility

Motion has medium presence and explanatory purpose (motion 6). Content reveals travel 18px while sharpening from a 2px blur over 580ms; exhibit imagery uncovers through a clipped lower edge over 800ms; result changes use a compact 180ms vertical fade. The shared expressive easing is `cubic-bezier(0.16, 1, 0.3, 1)`. Motion never delays initial access or precedes content.

Honor `prefers-reduced-motion` both in React and CSS: eliminate reveal transforms, compiler delay, animation loops, and smooth scrolling. Honor `prefers-reduced-transparency` in the header. Maintain the skip link, semantic Dutch landmarks, visible focus, descriptive alt text, live result feedback, alert semantics, keyboard execution, minimum 320px layout support, and clear disabled states.

## Do's and Don'ts

### Do:

- **Do** make the real compiler the opening proof and the visual center of gravity.
- **Do** use Orange as a scarce beacon for actions, active state, focus, and compiler meaning.
- **Do** pair editorial Bricolage headlines with Atkinson Hyperlegible explanations and true monospace code.
- **Do** preserve the fixed learning sequence from familiar Dutch syntax to structure, execution, and research context.
- **Do** use fine rules, tonal layering, and negative space before introducing another container.
- **Do** crop exhibit imagery intentionally at each breakpoint and ship its provenance companion.
- **Do** preserve keyboard, reduced-motion, reduced-transparency, focus, live-region, and error behavior when extending components.

### Don't:

- **Don't** fall back to neon green/cyan terminals, blue-black cyberpunk, glowing grid backgrounds, or generic developer-dashboard chrome.
- **Don't** introduce a second interface accent; subordinate museum colors stay inside imagery.
- **Don't** make the tone childish with mascots, sticker clutter, toy copy, or gamified badges.
- **Don't** turn every teaching point into a floating rounded card or make controls pill-shaped.
- **Don't** hide the compiler behind a modal, video, screenshot, intro animation, or long marketing preamble.
- **Don't** use monospace for ordinary headings, navigation, or prose.
- **Don't** fabricate testimonials, adoption metrics, benchmarks, or language capabilities as visual proof.
- **Don't** add motion that survives reduced-motion preferences or makes visitors wait before reading and trying code.
