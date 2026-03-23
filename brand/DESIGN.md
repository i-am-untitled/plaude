# Design System Specification

## 1. Overview & Creative North Star

### Creative North Star: "The Editorial Ledger"
This design system moves away from the "utility-first" clutter of traditional fintech and toward the sophisticated precision of high-end editorial magazines. It balances the institutional trust of a global bank with the fluid, tech-forward agility of a modern platform. We achieve this through **monolithic typography**, **expansive white space**, and **chromatic depth**.

To break the "template" look, we utilize:
*   **Intentional Asymmetry:** Overlapping high-quality photography with sleek UI mockups to create a sense of three-dimensional space.
*   **Scale Contrast:** Using massive `display-lg` headings set against refined `body-md` text to establish immediate authority.
*   **The Atmospheric Wash:** Leveraging vibrant, blurry gradients (transitioning through deep purples and warm ambers) to soften the industrial nature of financial data.

---

## 2. Colors

### Palette Strategy
The palette is anchored by deep, regal purples (`primary: #310060`) and balanced by clinical, professional teals (`secondary: #116a5f`) and vibrant, sunset accents (`tertiary_container: #5b2700`).

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. 
*   **Boundary Definition:** Contrast must be achieved solely through background shifts. For example, a `surface_container_low` section should sit directly on a `surface` background. 
*   **Nesting:** Use the surface-container tiers (`lowest` to `highest`) to create depth. A card using `surface_container_lowest` should be nested within a `surface_container_low` wrapper to create a soft, natural lift.

### Glass & Gradient Rule
Floating elements (modals, navigation bars, or hover-cards) must utilize **Glassmorphism**.
*   **Implementation:** Use semi-transparent surface colors with a `backdrop-blur` (minimum 12px). 
*   **Visual Soul:** Main CTAs and Hero sections should use subtle radial gradients transitioning from `primary` to `primary_container` rather than flat fills to provide "digital silk" textures.

---

## 3. Typography

The system utilizes two distinct families to bridge the gap between "Sophisticated" and "Global."

*   **Display & Headlines (Plus Jakarta Sans):** Chosen for its modern, geometric clarity. High-impact headings use tight letter-spacing (-2%) to feel curated and deliberate.
*   **Body & Labels (Inter):** Chosen for its extreme legibility at small scales. Inter provides the "Efficiency" required for complex financial data.

| Level | Token | Font | Size | Weight/Style |
| :--- | :--- | :--- | :--- | :--- |
| **Hero** | `display-lg` | Plus Jakarta Sans | 3.5rem | Bold, -0.02em tracking |
| **Headline** | `headline-lg` | Plus Jakarta Sans | 2rem | Semi-bold |
| **Title** | `title-lg` | Inter | 1.375rem | Medium |
| **Body** | `body-md` | Inter | 0.875rem | Regular |
| **Label** | `label-md` | Inter | 0.75rem | Medium, All-caps for headers |

---

## 4. Elevation & Depth

We reject traditional shadows in favor of **Tonal Layering**. The UI should feel like stacked sheets of premium frosted glass.

*   **Ambient Shadows:** If a floating element (like a dropdown) requires a shadow, it must be an "Atmospheric Shadow." Use a large blur (24px - 40px) with a low opacity (4%-8%) tinted with the `on_surface` color (`#201731`) to avoid "dirty" grey shadows.
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline_variant` token at **15% opacity**. Never use 100% opaque borders.
*   **Roundedness:**
    *   **Containers/Cards:** `lg` (2rem) or `xl` (3rem) for a friendly, modern feel.
    *   **Buttons/Inputs:** `full` (9999px) for primary actions to contrast against the architectural layout.
    *   **Small Elements:** `sm` (0.5rem) for chips and tooltips.

---

## 5. Components

### Buttons
*   **Primary:** `primary` background, `on_primary` text. Use `full` roundedness. 
*   **Secondary:** `surface_container_highest` background with no border. 
*   **Tertiary:** Transparent background with `primary` text; underline on hover only.
*   **Interaction:** On hover, primary buttons should shift toward `primary_container` with a subtle `2.5` spacing scale expansion.

### Cards & Lists
*   **Constraint:** **Forbid divider lines.** 
*   **The Alternative:** Use vertical white space (Scale `8` or `12`) to separate list items. 
*   **Card Style:** Use `surface_container_lowest` for cards. They should appear to "float" via background color difference rather than harsh outlines.

### Input Fields
*   **Style:** Minimalist. A subtle background of `surface_container_low` with a bottom-only "Ghost Border" that expands to a full `primary` stroke on focus.
*   **Feedback:** Error states use `error` and `on_error_container` with a `sm` (0.5rem) roundedness for the error toast itself.

### Signature Component: The "Global Vault" Card
For a fintech context, create a high-gloss component for account balances.
*   **Style:** Deep `primary` background with a subtle "Glass" overlay (`surface_variant` at 10% opacity) and `xl` (3rem) corner radius. Use `display-sm` for the balance figure.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts where text is left-aligned and imagery "breaks" the container edges.
*   **Do** use the `20` (5rem) spacing scale for section margins to allow the design to breathe.
*   **Do** mix high-quality, editorial photography (portraits, architecture) with high-fidelity UI mockups.
*   **Do** ensure all interactive elements have a minimum target of 44px for global accessibility.

### Don't
*   **Don't** use 1px solid borders to separate sections or headers.
*   **Don't** use pure black `#000000` for text; always use `on_background` (`#201731`) for a softer, premium feel.
*   **Don't** overcrowd the viewport. If in doubt, increase the spacing by one tier on the scale.
*   **Don't** use standard "drop shadows." If it looks like a default plugin setting, it is too heavy.