# kerstinbonke.de (Relaunch)

Astro + Tailwind, Hosting auf Vercel. Kundenprojekt von Vinculo Studio.

## Befehle
```
npm install
npm run dev      # lokal ansehen
npm run build    # Build nach dist/
```

## Aufbau
- `src/config/site.ts`: **zentrale Konfiguration** (Ort, Adresse, Telefon, Schalter). Bei Umzug der Kundin nur hier ändern. URLs sind ortsneutral.
- `src/data/pages.ts`: Seitenplan mit Title, H1, Meta, Texten, FAQ pro Seite. Jede Seite wird als echte Route gebaut.
- `src/layouts/Base.astro`: Meta, Canonical, Open Graph, Schema (aus der Konfiguration).
- `vercel.json`: 301-Weiterleitungen aller alten URLs.
- `docs/`: Briefing, Seitenstruktur (PDF) und offene Punkte.

## Regeln für neue Texte
- Eine H1 pro Seite, Keyword in Title und H1, Title höchstens 60, Meta höchstens 160 Zeichen.
- Kein Keyword auf zwei Seiten. Startseiten-Teaser kürzer und anders als die Unterseite.
- Keine Heilversprechen („begleiten“, „unterstützen“ statt „heilen“, „beseitigen“).
- Ort nie fest in Texte schreiben, immer `site.ort` verwenden.
