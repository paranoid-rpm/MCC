# Forest parallax requirements

## Goal

Create real cinematic parallax, not static image.

## Layers

1. Mountains / sky / far forest
2. Mid forest / tree trunks
3. Fog
4. Light rays
5. Branch foreground
6. Particles / paw trail
7. Maine Coon
8. Catalog card transition

## Motion

- far layer: slow y movement
- mid layer: medium y movement
- foreground: faster movement
- fog: opacity + x/y drift
- light rays: subtle opacity/scale
- cat: scale + y/x movement
- cards: reveal upward from forest floor

## Technology

- GSAP ScrollTrigger for hero timeline
- Lenis for smooth scroll
- Motion for UI reveals and hover

## Mobile

- fewer layers
- no pinned heavy scene if performance weak
- keep depth with static layered transforms
- respect `prefers-reduced-motion`
