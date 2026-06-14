---
name: Kamus Paser
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
  on-surface-variant: '#3f4944'
  inverse-surface: '#27313f'
  inverse-on-surface: '#eaf1ff'
  outline: '#6f7973'
  outline-variant: '#bec9c2'
  surface-tint: '#1b6b51'
  primary: '#004532'
  on-primary: '#ffffff'
  primary-container: '#065f46'
  on-primary-container: '#8bd6b7'
  inverse-primary: '#8bd6b6'
  secondary: '#635e53'
  on-secondary: '#ffffff'
  secondary-container: '#e9e2d3'
  on-secondary-container: '#696458'
  tertiary: '#3a3c3d'
  on-tertiary: '#ffffff'
  tertiary-container: '#515354'
  on-tertiary-container: '#c6c7c7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a6f2d1'
  primary-fixed-dim: '#8bd6b6'
  on-primary-fixed: '#002116'
  on-primary-fixed-variant: '#00513b'
  secondary-fixed: '#e9e2d3'
  secondary-fixed-dim: '#cdc6b8'
  on-secondary-fixed: '#1e1b13'
  on-secondary-fixed-variant: '#4b463c'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f8f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f6'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 20px
---

## Brand & Style
The brand personality is authoritative yet accessible, positioning itself as a bridge between traditional linguistics and modern digital utility. The target audience includes students, researchers, and language enthusiasts who value efficiency and clarity.

The design style is **Corporate / Modern** with a strong leaning toward **Minimalism**. It utilizes a "soft-flat" approach—avoiding the harshness of pure flat design by incorporating subtle depth through tonal layering and very soft, diffused shadows. The aesthetic is inspired by contemporary mobile-first interfaces found on Dribbble, characterized by generous whitespace, precision alignment, and a sophisticated, calm emotional response.

## Colors
The palette is rooted in a natural, scholarly aesthetic. 
- **Emerald Green (#065F46)** serves as the primary brand color, used for high-importance actions, active states, and brand-defining accents.
- **Warm Sand (#FDF5E6)** provides a soft, low-strain background for long reading sessions, replacing harsh grays to evoke the feeling of high-quality paper.
- **Clean White (#FFFFFF)** is used for card surfaces and interactive containers to create clear separation from the sand background.
- **Neutral (#1F2937)** is used strictly for high-contrast text and iconography to ensure WCAG AA accessibility standards.

## Typography
The design system utilizes **Inter** exclusively to maintain a systematic, utilitarian, and clean appearance. The hierarchy is designed for rapid scanning of dictionary definitions and phonetics. 

For mobile screens, `display-lg` is reserved for featured word-of-the-day cards. Headings use a tighter letter-spacing to feel more "designed" and modern. The `body-lg` style is optimized for primary dictionary definitions to ensure maximum legibility. Use a medium weight for labels to provide a distinct contrast from body text without needing to change color.

## Layout & Spacing
The layout follows a **Fluid Grid** model optimized for handheld devices. It utilizes a 4-column system for mobile with a 16px gutter. 

Spacing follows a strict 4px baseline grid. Content blocks like dictionary entries should use `lg` (24px) vertical spacing to separate different meanings, while internal elements like phonetics and word classes use `sm` (8px). Global horizontal margins are set to 20px to provide a modern, airy feel that avoids the screen edges.

## Elevation & Depth
This design system uses **Tonal Layers** combined with **Ambient Shadows**. 

- **Level 0 (Base):** Warm Sand (#FDF5E6) background.
- **Level 1 (Cards):** Clean White (#FFFFFF) surfaces with a 1px subtle stroke (#E5E7EB) and no shadow for a flat, clean look.
- **Level 2 (Interactive):** Floating Action Buttons (FABs) or active state cards use a soft, ultra-diffused shadow: `0 4px 20px rgba(6, 95, 70, 0.08)`. The shadow color is tinted with the primary Emerald Green to maintain a cohesive, organic feel.
- **Level 3 (Modals):** Overlays use a backdrop blur (12px) to maintain context while focusing the user on the new task.

## Shapes
A **Rounded** shape language is applied to humanize the interface. All primary containers, search bars, and cards use a 0.5rem (8px) radius. Larger elements like featured word cards or bottom sheets utilize `rounded-xl` (1.5rem/24px) to emphasize their container status and follow Dribbble-style trends of soft, approachable geometry.

## Components
- **Buttons:** Primary buttons are solid Emerald Green with white text and `rounded-lg` corners. Secondary buttons use a transparent background with an Emerald Green 1px border.
- **Search Bar:** A prominent white container with a 1px border. It should use a subtle interior shadow to appear slightly inset against the sand background.
- **Chips/Tags:** Used for word categories (e.g., "Verb", "Noun"). These use a light tint of Emerald (10% opacity) with dark Emerald text.
- **Lists:** Dictionary results are presented in a clean list with 1px dividers. The "Active" state of a list item should have a very light sand-colored highlight.
- **Cards:** Used for "Word of the Day" or "Recent Searches." These are white with a soft shadow and 16px internal padding.
- **Audio Triggers:** A circular button with the primary Emerald Green color and a white "Volume" icon, used for phonetics.