# Handoff: YouTube Tweak — Product Landing Page (bilingual EN / AR)

## Overview

A single-page marketing/landing site for **YouTube Tweak**, a Chrome extension that improves YouTube. The page presents the extension as **one extension with four fixes** and lets the visitor switch which fix the whole page is about via a top tab switcher:

1. **Infinite scroll off** (shipping) — disables YouTube's infinite scroll and replaces it with one red "Load More Videos" button.
2. **Real dates** (shipping) — replaces relative timestamps ("5 months ago") with the true publish date, configurable via the extension popup (Gregorian/Hijri, per-field format, live bilingual preview).
3. **Quick search** (coming soon — disabled).
4. **Hide videos by keyword** (coming soon — disabled).

The page is fully **bilingual**: a language toggle in the nav flips the entire page between **English (LTR)** and **Arabic (RTL)**, including a fully localized mock of the YouTube UI.

## About the Design Files

The files in this bundle are **design references created in HTML** — prototypes showing the intended look and behavior. They are **not production code to copy directly**. They are authored as "Design Components" (a custom HTML runtime) and are not representative of a normal app structure.

Your task is to **recreate these designs in the target codebase's environment** (React, Vue, Svelte, etc.) using its established patterns, component library, and i18n solution. If no codebase exists yet, choose an appropriate stack — **React + a CSS solution (CSS Modules / Tailwind / styled-components) + an i18n library (e.g. react-i18next)** is a natural fit given the bilingual requirement.

Do **not** ship the HTML prototype directly.

## Fidelity

**High-fidelity (hifi).** Colors, typography, spacing, radii, and interactions are final. Recreate the UI pixel-perfectly using the codebase's libraries. Exact tokens are listed in **Design Tokens** below.

## Global Layout & Chrome

- The page is a **centered column, max-width 1240px**, on a near-black background (`#0c0d15`) with a soft indigo radial glow behind the hero.
- **Direction:** English renders LTR; Arabic renders the whole document RTL (`dir="rtl"`). The **embedded YouTube mock stays LTR in English but becomes RTL in Arabic** (it is a localized Arabic YouTube).
- **Fonts:** English uses **Inter**. Arabic uses **Tajawal** for body and **Noto Kufi Arabic** for headings. Format-token chip labels that are English words ("long", "narrow", "numeric", "2-digit", "short") stay in Inter even in the Arabic version.

### Nav (sticky top of the card)

- Left: red rounded-square logo (hand-palm icon) + wordmark "YouTube Tweak".
- Right: **language toggle button** (translate icon + the name of the _other_ language — shows "العربية" in EN, "English" in AR) followed by an accent-outlined **"Add to Chrome"** button.

### Feature switcher (row of 4 tabs)

- Kicker above: "ONE EXTENSION, FOUR FIXES" (AR: "إضافة واحدة، أربع مميزات").
- Four tabs. The active tab has a solid accent (`#9184d9`) fill with dark text and a soft glow. Inactive tabs are outlined.
- Tabs 3 & 4 ("Quick search", "Hide videos by keyword") are **disabled** (`cursor: not-allowed`, ~34% opacity, a small lock icon). On hover they show a **tooltip** reading "Coming soon" (AR: "قريبًا") positioned above the tab.
- Clicking a live tab swaps the **entire lower page** (hero copy + demo mock + problem/how-it-works/benefits/install sections) to that feature.

## Screens / Views

This is one page with two fully-built feature states (0 and 1) and a light placeholder for states 2 and 3.

### Feature 0 — "Infinite scroll off" (default)

**Hero (two columns, 420px text / rest):**

- Badge: "CHROME EXTENSION".
- H1: "Break the doomscroll." (AR: "أوقِف التمرير اللانهائي.")
- Body: "YouTube Tweak disables YouTube's infinite scroll and hands you one honest red button — so the feed stops when you tell it to, not when the algorithm decides you've had enough."
- Two CTAs: **"Add to Chrome — Free"** (accent outline) and **"View on GitHub"** (neutral outline). Both currently link to `#` — wire to the Chrome Web Store listing and the GitHub repo respectively.
- Right column: a **browser mock** (macOS traffic lights + `youtube.com` address bar) containing a **3-column video grid** and, below it, the big red **"Load More Videos"** pill button with caption "Infinite scroll disabled — you click to continue." (AR: "التمرير اللانهائي مُعطَّل — انقر للمتابعة.")

**Problem section** — kicker "THE PROBLEM"; H2 "Infinite scroll isn't a convenience. It's a trap you didn't opt into."; three stat blocks with oversized figures: **∞** "The feed never ends", **40m** "'Just one more' adds up", **0** "Decisions you actually made".

**How it works** — before/after: a "Before · Infinite scroll" panel (feed fading into a spinner labeled "loading forever…") vs an "After · YouTube Tweak" panel (capped feed ending in the red button).

**Benefits** — kicker "WHY YOU'LL KEEP IT ON"; a grid of benefit cards.

**Install band** — full-width saturated indigo band (`--color-section`) with H2, subcopy, and the two CTAs.

**Footer** — logo + "Not affiliated with YouTube. Made for people who'd rather choose."

### Feature 1 — "Real dates"

**Hero:** H1 "See when it really posted." (AR: "اعرف متى نُشر فعلًا."); body about turning "5 months ago" into the exact date. Right column mock shows a **before row** (relative date badge "Relative date", "5 months ago") and an **after row** (accent-outlined, "Actual date" badge, "Thursday, 19 February 2026").

**Problem** — H2 "'5 months ago' hides the one thing you need — the actual date." Three columns: "Timestamps keep drifting", "The year disappears", "Impossible to compare".

**How it works — the popup (THE KEY INTERACTIVE PIECE):**
A light (`#f3f3f5`) rounded settings-popup mock with a tab bar (Date / Infinite Scroll / Support) and a white card containing **five segmented format controls** plus a **live bilingual preview**. All controls are **fully functional** and update the preview live:

| Control        | Options                                   | Maps to `Intl.DateTimeFormat` option |
| -------------- | ----------------------------------------- | ------------------------------------ |
| Date Type      | Gregorian / Hijri                         | `calendar: 'gregory'` \| `'islamic'` |
| Weekday Format | long / narrow / short / None              | `weekday` (None = omit)              |
| Day Format     | 2-digit / numeric                         | `day`                                |
| Month Format   | 2-digit / long / narrow / numeric / short | `month`                              |
| Year Format    | 2-digit / numeric                         | `year`                               |

- Fixed sample date: **5 January 2026** (`new Date(2026, 0, 5)`).
- Preview shows two lines: **ARABIC** (locale `ar`, Arabic-Indic digits via `-nu-arab`) and **ENGLISH** (locale **`en-GB`** — day-before-month order, i.e. British not American).
- **Important formatting detail:** when Day or Month is set to `numeric`, strip the leading zero. `Intl` with `en-GB` pads to `05/01/2026` in all-numeric mode; use `formatToParts` and remove a leading `0` (or Arabic `٠`) from the `day`/`month` parts so numeric shows `5/1/2026`. Reference implementation:

```js
function formatSample(cfg, locale) {
  // cfg = {calendar, weekday, day, month, year}
  const opts = { day: cfg.day, month: cfg.month, year: cfg.year };
  if (cfg.weekday !== "none") opts.weekday = cfg.weekday;
  const nu = locale === "ar" ? "-nu-arab" : "";
  const dtf = new Intl.DateTimeFormat(`${locale}-u-ca-${cfg.calendar}${nu}`, opts);
  return dtf
    .formatToParts(new Date(2026, 0, 5))
    .map((p) => ((p.type === "day" && cfg.day === "numeric") || (p.type === "month" && cfg.month === "numeric") ? p.value.replace(/^[0٠]+(?=.)/, "") : p.value))
    .join("");
}
// English preview uses locale 'en-GB'; Arabic preview uses 'ar'.
```

- Segmented-control chips: inactive = transparent, muted gray text; active = white fill, dark text, subtle shadow. All five rows must stay **single-line** (compact chip padding ~7px 10px, `white-space: nowrap`).

**Benefits** — four cards: "Absolute timestamps", "Your format, your rules", "Hijri & Gregorian", "Bilingual preview".

**Install band** — H2 "See every date as it really is." + CTAs.

### Features 2 & 3 — placeholder

A centered "coming soon"-style section with the feature's pill/tag, its title, and a line saying the full walkthrough is on the way. (These tabs are disabled in the switcher, so this state is only reachable programmatically.)

## Interactions & Behavior

- **Language toggle:** flips `lang` state between `en`/`ar`; swaps all copy, fonts, and document direction. Consider persisting choice in `localStorage`.
- **Feature switcher:** `feat` state (0–3). Only 0 and 1 are enabled; 2 and 3 are disabled with a hover tooltip.
- **Date popup:** local `dateCfg` state `{calendar, weekday, day, month, year}`, defaults `{gregory, long, numeric, long, numeric}`. Every chip click updates one field; both preview lines re-render live.
- **Tooltips:** appear on hover of disabled tabs only (opacity 0 → 1, ~140ms), positioned above, with a small pointer.
- **Hover states:** CTAs and outlined buttons get an accent tint on hover; the language toggle border turns accent.

## State Management

- `lang: 'en' | 'ar'` (top-level; drives direction, fonts, all copy).
- `feat: 0 | 1 | 2 | 3` (which feature the page shows).
- `dateCfg: { calendar, weekday, day, month, year }` (Real-dates popup).
  No data fetching. All content is static; the date preview is computed client-side with `Intl.DateTimeFormat`.

## Design Tokens

From the **Nocturne** design system (dark, low-chroma, single indigo accent). Values:

- **Backgrounds:** page `#0c0d15`; card/base ground `--color-bg` `#161826`; saturated section band `--color-section` (deep indigo).
- **Text:** `--color-text` `#e9e9ed`; muted text via `color-mix(text, 60–80%, transparent)`.
- **Accent:** `#9184d9` (blurple). Accent ramp steps used: `--color-accent-300` (accessible text/icons on dark), `--color-accent-900` (glows/tints).
- **Brand red (extension logo + Load More button):** gradient `#ff2b2b → #e60000`.
- **Neutral borders:** `--color-neutral-700` (outlines), `rgba(255,255,255,.06–.08)` hairlines.
- **Popup (light surface):** card `#f3f3f5`, inner white `#fff`, chip track `#eeeef1`, muted label `#9a9aa2`, dark text `#1a1a20`, preview accent label `#e8613a`.
- **Radius:** cards 12–20px; buttons 8–10px; chips 8px; pills 999px. (Nocturne base radius 8px.)
- **Shadows:** `--shadow-sm/md/lg` (edge + ambient on dark); the popup uses a large soft drop shadow.
- **Type:** Inter (EN + heading), Tajawal (AR body), Noto Kufi Arabic (AR heading). H1 ~52px/600 with -0.02em tracking; H2 ~32px/600; body 15–17px/1.6; kickers 12px/600 uppercase +letter-spacing.
- **Icons:** Phosphor Icons (bold + fill weights). Icons used include hand-palm, plus, github-logo, translate, calendar-check, calendar-x, clock-countdown, scales, moon-stars, sliders-horizontal, eye, magnifying-glass, eye-slash, lock-simple, arrow-line-down, infinity.

Full token sheet ships in `_ds/nocturne-.../styles.css` (copied into this bundle) — read variables from `:root` there rather than hard-coding where possible.

## Assets

- **Video thumbnails & channel avatars:** in the prototype these are placeholder images of real productivity/education YouTube channels (Ali Abdaal, freeCodeCamp, Jonas Schmedtmann, etc. for EN; Arabic channels for AR). They are embedded as data-URIs in the prototype. **Replace with your own/licensed imagery** — do not ship these placeholders.
- **Icons:** Phosphor Icons (MIT) — https://phosphoricons.com. Use the codebase's icon system if it has one.
- No logo asset file — the logo is a CSS red rounded square with a Phosphor hand-palm glyph.

## Files

Included in this bundle:

- `Landing Pages.dc.html` — the wrapper: language toggle + mounts the two showcase pages.
- `Unscroll Showcase.dc.html` — the **English** landing (all four feature states + the interactive date popup logic).
- `YouTube Tweak -Arabic-.dc.html` — the **Arabic** (RTL) landing, mirror of the above.
- `youtube-tweak-landing.html` — a **self-contained, offline** bundle of the whole thing (open in any browser to see the final intended result, including the live language/feature/date interactions).
- `_ds/nocturne-.../` — the Nocturne design-system stylesheet & tokens referenced by the prototypes.

**Recommended way to view the intended result:** open `youtube-tweak-landing.html` in a browser and click through the language toggle, the feature tabs, and the date-format chips.
