# GitHub Copilot Project Instructions: Countdown Timer

## Project Context
This is a simple, high-impact, single-page application (SPA) designed to count down to **Monday, April 27, 2026**. It must be optimized for **GitHub Pages (static)**.

## Architectural Principles
- **No Build Tools:** Avoid npm, webpack, vite, or similar. Rely purely on vanilla web technologies.
- **Single Page Responsibility:** All styles and scripts should be modular but simple enough for a single index.html context.
- **Accessibility-First:** Every UI component must be designed with semantic HTML and appropriate ARIA attributes.

## Coding Standards

### HTML
- Use semantic tags (`<header>`, `<main>`, `<footer>`, `<section>`, `<time>`).
- Ensure all interactive elements have sufficient tap targets (min 44x44px).
- Include `lang="en"` on the `<html>` tag.
- Use a descriptive `<title>`.

### CSS
- **Mobile-First Design:** Use `@media (min-width: ...)` for desktop enhancements.
- **Vanilla CSS:** No preprocessors (Sass/Less) or external frameworks (Tailwind/Bootstrap).
- **Custom Properties:** Use CSS variables for colors, fonts, and spacing.
- **Accessibility:** Ensure high contrast ratios (target 4.5:1+) for text.

### JavaScript
- **Vanilla JS (ES6+):** No libraries (jQuery/React/Vue).
- **Modular Functions:** Keep calculation logic separate from DOM manipulation.
- **Timezone Safety:** Use a robust method for calculating the target date to avoid timezone pitfalls (recommend using UTC or standard local parsing).
- **Defensive Coding:** Handle the "countdown reached" state gracefully.

## Naming Conventions
- **CSS:** Use BEM-like naming or simple, descriptive classes (`timer-display`, `timer-unit`).
- **JS:** Use `camelCase` for variables/functions. Use descriptive names (e.g., `updateCountdownDisplay()` vs `update()`).

## Verification Requirements
- Check for WCAG 2.2 AA compliance.
- Verify responsive layout on mobile, tablet, and desktop viewports.
- Confirm countdown logic correctly targets April 27, 2026.
