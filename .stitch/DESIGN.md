# Design System: Professional Hacker Portfolio

## 1. Visual Theme & Atmosphere
A high-fidelity, technical interface that blends "Void" minimalism with functional "IDE" density. The atmosphere is that of a premium code editor or a high-end terminal—dark, focused, and precise. It uses asymmetric layouts and motion to create a sense of intelligence and activity.

## 2. Color Palette & Roles
- **Void Black** (#0a0a0a) — Primary canvas background
- **Surface Dark** (#121212) — Container and card backgrounds
- **Cyan Accent** (#60a5fa) — Primary action, highlights, and typing cursor
- **Muted Gray** (#525252) — Secondary text, line numbers, and metadata
- **Terminal Green** (#22c55e) — Success indicators, active status
- **Border Subtle** (#1a1a1a) — Structural dividers and borders

## 3. Typography Rules
- **Display:** "Outfit" or "Inter" (Bold) — For high-impact headlines. Track-tight.
- **Mono:** "JetBrains Mono" or "Geist Mono" — For all technical UI elements, code snippets, and terminal text.
- **Body:** "Inter" — Clean, neutral sans-serif for long-form text (bio, descriptions).

## 4. Component Stylings
- **Terminal Windows:** Border-top with traffic light controls (macOS style). Subtle 1px border. No heavy shadows.
- **Code Blocks:** Syntax-highlighted text with line numbers on the left.
- **Buttons:** Ghost style with cyan borders or solid cyan for primary CTAs. Tactile hover (1px offset).
- **Cards:** Asymmetric spacing. Glassmorphism is BANNED; use solid surfaces with clean borders instead.

## 5. Layout Principles
- **Asymmetric Grid:** Avoid centered content. Use split screens (text left, graphic right) for Hero sections.
- **Grid Overlay:** A subtle, low-opacity dot or line grid over the Void Black background to provide depth.
- **Spacing:** Generous whitespace between sections, but tight density within "terminal" components.

## 6. Motion & Interaction
- **Typing Effect:** Headlines and terminal prompts reveal via a typewriter animation with a blinking cyan cursor.
- **Staggered Reveal:** List items and grid cards should waterfall in.
- **Terminal Activity:** Subtle "pulse" on status indicators.

## 7. Anti-Patterns (Banned)
- No emojis.
- No "AI Purple" or neon gradients.
- No rounded corners greater than 8px (keep it sharp/technical).
- No generic "3 equal cards" layouts.
- No centered Hero sections.
