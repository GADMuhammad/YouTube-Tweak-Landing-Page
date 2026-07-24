# YouTube Tweak — Landing Page

Marketing landing page for **YouTube Tweak**, a free, open-source Chrome extension
that fixes small but persistent annoyances in YouTube's UI. The page presents one
extension with four fixes, switchable via a tab bar:

- **Infinite scroll off** *(shipping)* — replaces YouTube's endless feed with a single
  "Load More Videos" button.
- **Real dates** *(shipping)* — turns vague relative timestamps ("5 months ago") into
  the exact publish date, fully configurable via a live settings popup.
- **Quick search** *(coming soon)*
- **Hide videos by keyword** *(coming soon)*

Bilingual by design: full English (LTR) and Arabic (RTL) support, including mirrored
layouts, localized copy, and a Hijri/Gregorian calendar toggle in the Real Dates demo.

## Tech stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev) for dev server / build
- CSS Modules for styling (no CSS framework)
- [react-i18next](https://react.i18next.com/) for i18n (`src/i18n/en.json`, `src/i18n/ar.json`)
- [Phosphor Icons](https://phosphoricons.com/) (`@phosphor-icons/react`)
- `Intl.DateTimeFormat` for the live Gregorian/Hijri date-format preview (no date library)

## Getting started

```bash
npm install
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # type-check (tsc -b) and build to dist/
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Project structure

```
src/
  components/       # one folder per component (Component.tsx + Component.module.css)
    Nav/
    FeatureSwitcher/
    Hero/
    Problem/
    HowItWorks/      # BeforeAfter (feature 0) and DatePopupSection (feature 1)
    DatePopup/        # the interactive date-format settings popup + Intl formatting logic
    Benefits/
    InstallBand/
    Footer/
    YouTubeMock/      # the embedded browser-chrome mock of youtube.com
  pages/              # Feature0Page, Feature1Page, PlaceholderPage (coming-soon tabs)
  data/               # features.ts (tab metadata), videos.ts (mock video data, per language)
  i18n/               # en.json / ar.json copy, i18next setup
  styles/             # tokens.css — shared design tokens (colors, fonts, radii, shadows)
  App.tsx             # top-level state: language, active feature tab

reference/            # original design handoff / prototype files (not built or shipped)
public/                # real video thumbnail & avatar assets used by the mock UI
```

## Language & theming

- Language toggling flips `document.documentElement.dir`/`lang` and is persisted to
  `localStorage`. All strings come from `src/i18n/{en,ar}.json`.
- Visual design tokens (colors, radii, shadows, fonts) live in `src/styles/tokens.css`.
- The site is a single dark theme; there is no light-mode toggle.

## Notes

- The "Add to Chrome" CTA is currently a placeholder (`#`) pending the Chrome Web Store
  listing. The GitHub CTA points at this repository.
- `reference/` holds the original prototype/design-handoff files used to build this page
  and isn't part of the shipped app.
