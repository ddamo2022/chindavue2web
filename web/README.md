# Chinda Web Experience

A desktop-first marketing and membership experience that mirrors the existing Uni-app (Vue 2) mobile implementation while introducing a premium responsive layout, loyalty workflows, and rewards catalog.

## Getting started

```bash
cd web
npm install
npm run dev
```

The dev server runs on http://localhost:4173/ by default.

## Structure

- `src/layouts` – Application shell, navigation, and footer
- `src/pages` – Route-based views for home, membership, rewards, dashboard, and support
- `src/components` – Reusable UI elements including hero sections, forms, cards, notifications, and the language switcher
- `src/api` – Axios client that reuses the existing `common/api.js` endpoint map from the Vue 2 project
- `src/stores` – Pinia stores for site configuration and authentication session management
- `src/plugins/i18n.js` – Vue I18n instance that reuses the shared locale dictionaries and syncs language choice with Uni-app storage

## API integration

The web client imports `common/api.js` directly to stay aligned with the existing endpoint definitions. Requests are proxied through Axios and expect the same backend responses used by the current mobile experience.

## Design language

The layout draws inspiration from the provided Figma references: immersive hero modules, layered gradients, and premium typography tailored for desktop and large-screen browsing.

## Next steps

- Bind real authentication and loyalty data via the shared API endpoints
- Connect marketing automation events and analytics dashboards
- Expand localization using the existing locale assets
- Harden accessibility and keyboard navigation across interactive components
