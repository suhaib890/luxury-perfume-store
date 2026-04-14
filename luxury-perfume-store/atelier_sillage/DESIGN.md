```markdown
# Design System Document: High-End Editorial

## 1. Overview & Creative North Star: "The Olfactory Gallery"
This design system is built to transform a standard e-commerce interface into a curated, digital gallery. Our Creative North Star is **"The Olfactory Gallery"**—a philosophy where the product is treated as art, and the interface serves as the quiet, expansive walls of a high-end exhibition.

We move beyond the "template" look by rejecting the rigid, boxy constraints of traditional web design. Instead, we utilize:
*   **Intentional Asymmetry:** Off-center typography and staggered imagery to create a sense of movement.
*   **Negative Space as Luxury:** Spacing is not "empty"; it is a premium asset that signifies exclusivity.
*   **High-Contrast Scale:** Dramatically large display serifs paired with tiny, precise functional labels.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
The palette is a sophisticated interplay of bone, stone, and charcoal. We avoid harsh blacks and stark, clinical whites in favor of organic, warm neutrals.

### Color Strategy
*   **Primary (#5f5e5e):** Used for key brand moments and refined interactions.
*   **Surface (#faf9f7):** The "Bone" canvas. This is the foundation of the entire experience.
*   **Secondary (#6b5d46):** A deep bronze-beige used to add warmth to editorial callouts.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning. Structural boundaries must be defined solely through:
*   **Tonal Shifts:** Transitioning from `surface` to `surface-container-low` (#f3f4f1) to denote a new section.
*   **Whitespace:** Using massive vertical margins to separate content blocks.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine stationery.
*   **Base:** `surface` (#faf9f7).
*   **Floating Elements:** Use `surface-container-lowest` (#ffffff) for cards to create a subtle "lift" against the off-white background.
*   **Nesting:** A `surface-container-highest` (#e0e3e0) element should only be used for the most functional, utilitarian overlays (like a shopping bag side-panel).

---

## 3. Typography: The Editorial Voice
Our typography pairing contrasts the romantic heritage of the serif with the technical precision of the sans-serif.

### The Scale
*   **Display (Newsreader):** The "Vogue" aesthetic. Use `display-lg` (3.5rem) for hero statements. Apply `letter-spacing: -0.02em` to keep it feeling tight and expensive.
*   **Headline (Newsreader):** Used for product names and editorial titles. It should feel authoritative yet graceful.
*   **Body (Manrope):** A modern, clean sans-serif. Manrope provides high legibility for scent notes and descriptions.
*   **Label (Manrope):** Used for "Add to Bag" and navigation. These should often be set in `uppercase` with `letter-spacing: 0.1em` to mimic luxury brand tagging.

---

## 4. Elevation & Depth: Tonal Layering
In a premium system, "shadows" are often a sign of lazy design. We use Tonal Layering and light-physics to create depth.

*   **The Layering Principle:** To highlight a product card, do not add a shadow. Place the card (`surface-container-lowest`) on a section background of `surface-container` (#edeeeb). The subtle 2% shift in brightness provides all the hierarchy needed.
*   **Ambient Shadows:** If a floating element (like a modal) requires lift, use a "Cloud Shadow": `box-shadow: 0 24px 80px rgba(47, 51, 49, 0.05)`. It must feel like soft, bounced gallery lighting.
*   **The "Ghost Border":** If a button or input requires a container, use `outline-variant` (#afb3b0) at **10% opacity**. It should be felt, not seen.
*   **Glassmorphism:** For the navigation bar, use `surface` at 80% opacity with a `backdrop-blur: 20px`. This allows the "perfume liquid" colors of product photography to bleed through as the user scrolls.

---

## 5. Components: Minimalist Primitives

### Buttons
*   **Primary:** Rectangular (`0px` radius), `on-surface` (#2f3331) background with `surface` (#faf9f7) text. No hover "glow"—only a subtle opacity shift to 80%.
*   **Tertiary (Editorial Link):** Newsreader Italics with a custom 0.5px underline that sits 4px below the baseline.

### Input Fields
*   **Style:** No boxes. Only a bottom-aligned "Ghost Border" (outline-variant at 20%). 
*   **Labels:** Use `label-sm` in all-caps, positioned strictly above the input.

### Cards & Lists
*   **The Divider Ban:** Strictly forbid the use of horizontal rules (`<hr>`). 
*   **Product Cards:** Use a "Vertical Stack" with `surface-container-low` image backgrounds. The text should be center-aligned and spaced generously below the image.

### Signature Component: The "Scent Profile" Chip
*   **Design:** Small, `0px` radius boxes using `secondary-container` (#f4e0c3) with `on-secondary-container` (#5d503a) text. These should feel like small fabric swatches.

---

## 6. Do's and Don'ts

### Do:
*   **Use Asymmetric Grids:** Place a product image on the left and start the text 2/3rds across the screen.
*   **Embrace the "0px" Life:** Every corner in this system is sharp. Radii suggest "tech"; sharp corners suggest "architecture."
*   **Smooth Transitions:** Every hover and page load must use a `cubic-bezier(0.2, 0, 0, 1)` timing function (the "Power Curve") for a slow-in, fast-out luxury feel.

### Don't:
*   **Don't use pure black (#000):** It is too aggressive. Use `on-surface` (#2f3331).
*   **Don't use icons for everything:** In luxury, words are more elegant than glyphs. Use "Menu" instead of a hamburger icon where space allows.
*   **Don't overcrowd:** If you feel the need to "fill the space," add 40px more margin instead. Luxury is the ability to waste space.

---

**Director's Final Note:**
This design system is about restraint. Your job as a designer here is to get out of the way of the photography. Let the Newsreader serif do the talking, and let the beige tones provide the warmth. If it feels too "busy," you've failed the system. Strip it back until only the essentials remain.**```