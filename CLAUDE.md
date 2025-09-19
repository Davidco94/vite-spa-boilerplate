# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vite-based Single Page Application (SPA) for **MindWave.AI**, a premium brain wave signal AI reader product. The application follows Apple's design language with sophisticated gradients, glassmorphism effects, and premium styling.

## Development Commands

- `npm run dev` - Start development server (runs on http://localhost:5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Architecture

### Application Structure
- **Vanilla JavaScript SPA** - No framework dependencies, pure JS with ES6 modules
- **Single-file architecture** - Main application logic in `src/main.js` with template strings
- **CSS Custom Properties** - Extensive use of CSS variables for theming and consistency
- **Mobile-first responsive design** - Built with Apple-inspired design patterns

### Key Files
- `src/main.js` - Main application entry point containing:
  - `createApp()` - Returns HTML template string for the entire application
  - `setupInteractions()` - Handles all event listeners and animations
  - Application initialization and DOM manipulation
- `src/style.css` - All styles using CSS custom properties and modern CSS features
- `index.html` - HTML entry point with Inter font loading and meta tags

### Design System
The application uses a sophisticated color palette defined in CSS custom properties:
- `--neural-gradient` and `--premium-gradient` for main visual elements
- `--glass-bg` and `--glass-border` for glassmorphism effects
- Apple-inspired grays (`--gray-50` through `--gray-900`)
- Primary blue (`--primary-blue: #007AFF`) matching Apple's design language

### Content Sections
The SPA is structured as a marketing page with these main sections:
1. **Hero Section** - Neural gradient background with animated product showcase
2. **Feature Sections** - Three alternating sections highlighting technology capabilities
3. **Product Features Grid** - 4-column grid of key benefits
4. **Technical Specifications** - Dark section with highlighted metrics
5. **Pricing Section** - Premium pricing card with CTA
6. **Footer** - Simple branding footer

### Animations and Interactions
- Intersection Observer API for scroll-triggered animations
- CSS transforms and transitions for hover effects
- Glassmorphism and backdrop-filter effects
- Smooth scrolling navigation
- Mobile-optimized touch interactions

## Development Notes

### Styling Approach
- Uses modern CSS Grid and Flexbox for layouts
- Extensive use of `clamp()` for responsive typography
- CSS custom properties for consistent theming
- Mobile-first responsive design with single breakpoint at 768px

### Performance Considerations
- No external JavaScript dependencies (lightweight)
- Optimized animations using CSS transforms
- Efficient DOM manipulation with vanilla JavaScript
- Google Fonts preloaded for performance

### Browser Support
- Modern browsers supporting ES6 modules, CSS Grid, and backdrop-filter
- Requires support for CSS custom properties and Intersection Observer API
- after each code change, make sure to commit and push it