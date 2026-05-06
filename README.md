# Kfz Service Beyer - Webseite

Mehrseitige Webseite für die inhabergeführte Kfz-Werkstatt **Beyer** in München (Waisenhausstraße 44).
Astro 6 + Tailwind v4, statisch generiert, deploybar auf Cloudflare Pages, Netlify, GitHub Pages o. ä.

---

## Lokal starten

```bash
npm install
npm run dev          # http://localhost:4321
```

```bash
npm run build        # statisch nach /dist bauen
npm run preview      # gebaute Site lokal anschauen
```

---

## Seitenstruktur

```
/                  Startseite - Hero, Trust, Leistungen-Preview,
                   Reviews, Werkstatt-Story, Map + Telefon-CTA
/leistungen        Alle Services im Detail (8 Leistungen mit
                   Beschreibung + Bullets)
/ueber-uns         Familienbetrieb-Story, Werte, Werkstatt
/kontakt           Kontaktformular, Adresse, Map, Öffnungszeiten
/impressum         §5 TMG (mit [BITTE ERGÄNZEN]-Markierungen)
/datenschutz       DSGVO-konforme Datenschutzerklärung
```

---

## Texte & Daten ändern

Alle Stammdaten (Adresse, Telefon, E-Mail, Öffnungszeiten, Rating, Reviews, Service-Liste)
sind **zentral** in einer einzigen Datei gepflegt:

```
src/data/business.ts
```

Wer Texte ändert, ändert sie hier - und sie tauchen automatisch im Header, Footer, Hero,
Schema.org-JSON-LD, Impressum und Datenschutz auf.

### Was wo geändert wird

| Was | Datei | Hinweis |
|---|---|---|
| Adresse / Telefon / E-Mail | [`src/data/business.ts`](src/data/business.ts) | Felder `street`, `phone`, `email` … |
| Öffnungszeiten | `src/data/business.ts` → `hours` & `hoursCompact` & `openingHoursSchema` | Auch das Schema-Feld synchron halten |
| Google-Rating + Anzahl | `src/data/business.ts` → `google.stars` / `count` / `*Numeric` | Numeric-Werte für Schema.org |
| **Echte Google-Reviews** | `src/data/business.ts` → `reviews` | Wörtlich aus Google Maps. **Niemals erfinden.** |
| Service-Liste | `src/data/business.ts` → `services` | Slug, Titel, short, description, bullets |
| Hero-Headline | `src/components/Hero.astro` | direkt im Markup |
| Über-uns-Story | `src/pages/ueber-uns.astro` | direkt im Markup |
| Farbtokens | `src/styles/tokens.css` | Brand-Farben zentral |
| Logo | `public/logo.svg` (light Hintergrund) + `public/logo-light.svg` (Footer/dunkel) | SVG mit Wortmarke |
| Open-Graph-Sharing-Bild | `public/og-default.svg` | Wird beim Teilen in WhatsApp / Slack / Twitter angezeigt |
| **Hero-Foto** | `src/components/Hero.astro` → `heroImg` | Aktuell Pexels-Hotlink ([Foto 3807277](https://www.pexels.com/photo/3807277/), Pexels-Lizenz: kostenfrei kommerziell). Eigenes Werkstatt-Foto: unter `public/images/hero.jpg` ablegen und `heroImg = '/images/hero.jpg'` setzen. |

---

## Was das Impressum noch braucht

Die Impressum-Seite enthält bewusst Platzhalter mit `[BITTE ERGÄNZEN: …]`. Diese müssen
**vor dem Live-Schalten** vom Inhaber bestätigt / befüllt werden:

| Wo (in [`src/pages/impressum.astro`](src/pages/impressum.astro)) | Was |
|---|---|
| § 5 TMG | Vorname von Herrn Beyer |
| § 5 TMG | Rechtsform - Einzelunternehmen / GbR / GmbH? Bei GmbH zusätzlich Handelsregister + HRB |
| Kontakt | E-Mail-Adresse prüfen (aktuell `info@kfz-service-beyer.de` als Annahme) |
| USt-ID | Umsatzsteuer-Identifikationsnummer (z. B. DE123456789) |
| Berufsrechtliche Angaben | Eintragung in der Handwerksrolle / Meisterbetrieb-Status |

Die **Datenschutzerklärung** ([`src/pages/datenschutz.astro`](src/pages/datenschutz.astro))
ist DSGVO-konform vorbereitet. Wenn ein Formular-Dienstleister (z. B. Formspree) eingesetzt
wird, muss der Anbieter dort unter Punkt 6 ergänzt werden.

---

## Kontaktformular

Das Formular auf `/kontakt` arbeitet **per `mailto:`-Fallback**, solange kein
Formular-Endpoint hinterlegt ist. Sobald der Kunde einen [Formspree](https://formspree.io)-,
[Web3Forms](https://web3forms.com)- oder eigenen Endpoint hat:

1. In [`src/pages/kontakt.astro`](src/pages/kontakt.astro) den Wert `[FORMSPREE_URL]`
   (Variable `formAction`) durch die echte URL ersetzen.
2. Das eingebettete Inline-`<script>` greift nur, wenn die URL noch der Platzhalter ist -
   es kann also stehen bleiben (Fallback bleibt aktiv) oder entfernt werden.
3. Datenschutzerklärung Punkt 6 entsprechend ergänzen.

Spam-Schutz: Honeypot-Feld `_gotcha` ist aktiv. Pflicht-Checkbox bei Datenschutz.

---

## SEO

- Pro Seite eigene `<title>` + `<meta description>` (im Page-Frontmatter)
- Open Graph + Twitter Cards
- **Schema.org JSON-LD**:
  - `AutoRepair` (Subtype von `LocalBusiness`) auf jeder Seite - mit `aggregateRating`,
    `openingHoursSpecification`, `geo` und `hasOfferCatalog`.
  - `ItemList` der Services zusätzlich auf `/leistungen`.
- `sitemap-index.xml` + `sitemap-0.xml` automatisch via `@astrojs/sitemap`
- `robots.txt` mit Sitemap-Verweis
- Lokale SEO-Meta: `geo.region`, `geo.placename`, `geo.position`, `ICBM`

---

## Deployment

### Cloudflare Pages

1. Repo nach GitHub/GitLab pushen
2. Cloudflare Pages → "Create a project" → Repo verbinden
3. Build-Settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 22 oder höher
4. Custom-Domain `kfz-service-beyer.de` einrichten

### Netlify / Vercel / GitHub Pages

`dist/` ist eine reine statische Ausgabe - funktioniert auf jedem Static-Host.

---

## Projektstruktur

```
src/
├── components/
│   ├── Header.astro          Sticky Header mit Page-Nav + Telefon-CTA
│   ├── Footer.astro          Footer mit Adresse, Öffnungszeiten, Links
│   ├── FloatingPhone.astro   Mobile-only Floating Telefon-Button
│   ├── Hero.astro            Startseite-Hero (warmes Beige + Trust-Card)
│   ├── UspCards.astro        Drei USP-Kacheln
│   ├── Services.astro        Leistungen-Preview (Startseite)
│   ├── AboutSection.astro    Über-uns-Block + Quote
│   ├── HowItWorks.astro      Anrufen → Vorbeibringen → Abholen
│   ├── CounterSection.astro  Drei Kennzahlen (dunkel)
│   ├── Reviews.astro         Echte Google-Quotes
│   ├── ContactSection.astro  Adresse + Map (Startseite)
│   └── CtaSection.astro      Großer Telefon-CTA
├── data/
│   └── business.ts           Zentrale Stammdaten (alles lebt hier)
├── layouts/
│   └── Layout.astro          HTML-Hülle, Meta-Tags, Schema.org JSON-LD
├── pages/
│   ├── index.astro
│   ├── leistungen.astro
│   ├── ueber-uns.astro
│   ├── kontakt.astro
│   ├── impressum.astro
│   └── datenschutz.astro
└── styles/
    ├── tokens.css            Farbpalette (zentral änderbar)
    └── global.css            Base-Styles + Buttons + Floating-FAB
public/
├── logo.svg                  Hauptlogo (für helle Hintergründe)
├── logo-light.svg            Footer-Logo (für dunkle Hintergründe)
├── og-default.svg            Open-Graph-Sharing-Bild
├── favicon.svg / favicon.ico Browser-Tab-Icon
└── robots.txt                Sitemap-Verweis
```

---

## Tech-Stack

- **Astro 6** - statisch, HTML-first, kein JS-Overhead außer einem kleinen Header-Skript
- **Tailwind CSS v4.1** - via `@tailwindcss/vite`
- **TypeScript strict**
- **@astrojs/sitemap** - automatische Sitemap-Generation
- Schriften via Google Fonts (Inter + Manrope) - beim Live-Gang ggf. selbst hosten,
  falls Cookie-Banner-frei gewünscht.

---

## Stand der Daten (Mai 2026)

| Verifiziert via Brief / Google Places |
|---|
| Adresse: **Waisenhausstraße 44, 80637 München** |
| Telefon: **+49 89 155072** |
| Google-Rating: **4,8 ★ aus 76 Bewertungen** |
| Öffnungszeiten: Mo-Do 07-17 Uhr, Fr 07-12 Uhr |
| Place ID: `ChIJyUS5U0B2nkcRP-_CM4p7TnM` |
| Geo: 48.1617692, 11.5295949 |
| 5 echte Google-Reviews wörtlich übernommen |

| Vor Live-Schalten zu prüfen / ergänzen |
|---|
| E-Mail-Adresse |
| Vorname Inhaber |
| Rechtsform + ggf. HRB |
| USt-ID |
| Formular-Endpoint (Formspree o. ä.) |
