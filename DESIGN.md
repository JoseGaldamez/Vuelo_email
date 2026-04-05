# Design System Strategy: Unified Velocity

## 1. Overview & Creative North Star: "The Kinetic Sanctuary"
The digital landscape for communication is often cluttered and anxiety-inducing. For **Vuelo.email**, we are moving beyond the "SaaS Template" look. Our Creative North Star is **The Kinetic Sanctuary**. 

This system balances the high-velocity nature of modern communication with the serene, secure environment users need to focus. We achieve this through **Intentional Asymmetry**—placing hero elements slightly off-center to suggest forward motion—and **Editorial Breathing Room**, using generous white space to signal premium authority. We don't just organize mail; we curate digital space.

## 2. Color Architecture & Tonal Depth
We are moving away from flat, "blocked-out" layouts. This design system relies on a sophisticated hierarchy of light and depth.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Layout boundaries must be created through background shifts. 
*   **Example:** A feature section using `surface-container-low` (#f2f4f6) sitting directly atop a `surface` background (#f7f9fb). 

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—stacked sheets of fine, semi-translucent paper.
*   **Base:** `surface` (#f7f9fb)
*   **Secondary Content Areas:** `surface-container-low` (#f2f4f6)
*   **Floating Interactive Elements (Cards):** `surface-container-lowest` (#ffffff)
*   **Active Modals/Overlays:** `surface-bright` (#f7f9fb)

### The "Glass & Gradient" Rule
To inject "soul" into the tech-heavy slate palette, utilize **Signature Textures**:
*   **Primary Action Gradient:** Transitions from `primary` (#003ec7) to `primary_container` (#0052ff) at a 135° angle.
*   **Frosted Glass:** Use `surface-container-lowest` with an 80% opacity and a `24px` backdrop-blur for floating navigation bars or high-priority notifications.

## 3. Typography: The Editorial Voice
We utilize a dual-sans pairing to distinguish between "Active Tasking" and "Brand Authority."

*   **Display & Headlines (Manrope):** Chosen for its geometric precision and modern "tech" apertures. `display-lg` (3.5rem) should be used with tight letter-spacing (-0.02em) to create a commanding, editorial presence in the hero section.
*   **Body & Labels (Inter):** The workhorse for communication. Inter’s tall x-height ensures legibility in dense email threads.
*   **The Hierarchy Goal:** Use `headline-sm` (1.5rem) in `secondary` (#545f73) for sub-headers to create a soft, sophisticated contrast against the heavy `primary` headlines.

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are often "dirty." In this system, we use **Ambient Shadows** and **Tonal Lifts**.

*   **The Layering Principle:** Instead of a shadow, place a `surface-container-lowest` card on a `surface-container-high` background. The 1.5% difference in luminosity creates a "soft lift" that feels architectural rather than digital.
*   **Ambient Shadows:** When a float is required (e.g., a primary CTA button), use:
    *   `Y: 8px, Blur: 24px, Color: rgba(0, 76, 237, 0.08)` (A blue-tinted shadow).
*   **The "Ghost Border" Fallback:** If a border is required for accessibility in input fields, use `outline-variant` (#c3c5d9) at **20% opacity**. Never use 100% opaque lines.

## 5. Component Logic

### Buttons: The Kinetic Engine
*   **Primary:** Uses the "Signature Gradient" (Primary to Primary-Container). Shape: `md` (0.75rem) corner radius. No border.
*   **Secondary:** `surface-container-high` background with `on-surface` text. This feels integrated into the page, not "pasted" on.
*   **Interaction:** On hover, a primary button should not just get darker; it should shift `2px` upward with a slightly increased ambient shadow blur.

### Cards & Communication Threads
*   **Prohibition:** No divider lines between email items or list entries. 
*   **Separation:** Use `8px` of vertical white space and a subtle background shift on hover to `surface-container-highest` (#e0e3e5).

### Input Fields: Security & Trust
*   **Style:** `surface-container-lowest` fill. 
*   **Focus State:** A `2px` glow using `primary_fixed_dim` (#b7c4ff) with 0% opacity border. The "glow" provides a feeling of energy and focus.

### Additional Signature Component: The "Vuelo Flow" Stepper
Instead of standard dots, use thin horizontal bars of `primary_fixed_dim` that expand into `primary` (#003ec7) to indicate progress, reflecting the "Vuelo" (Flight) brand name.

## 6. Do’s and Don’ts

### Do:
*   **Do** embrace asymmetry. Place a screenshot of the app overlapping two different background color sections to break the "grid prison."
*   **Do** use `tertiary` (#952200) sparingly for "Urgent" or "High Priority" markers. It provides a sophisticated warmth compared to a standard bright red.
*   **Do** ensure all "Glass" elements have a `surface-tint` (#004ced) at 2% opacity to maintain color harmony with the primary blue.

### Don’t:
*   **Don’t** use pure black (#000000) for text. Use `on-surface` (#191c1e) to maintain the soft, premium feel.
*   **Don’t** use the `full` (pill) roundedness for everything. Reserve `full` for small tags/chips; use `md` (0.75rem) and `lg` (1rem) for the main containers to maintain a professional "tech" structure.
*   **Don’t** use 1px dividers. If content feels cluttered, increase the `spacing-scale` rather than adding a line.