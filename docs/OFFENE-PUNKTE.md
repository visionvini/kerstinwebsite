# Offene Punkte (vor Go-Live klären)

Alle Stellen im Code sind mit `[KLÄREN]` oder `TODO` markiert (`grep -rn "KLÄREN\|TODO" src`).

## An die Kundin
- Umzugspläne (ob, wann, wohin). Bestimmt das Gewicht von „Stuttgart“.
- Persönliche Termine aktuell möglich? Paartherapie und Gruppe vor Ort oder online? (`persoenlichVorOrt`, `gruppeAktiv` in `src/config/site.ts`)
- Preise Einzel und Gruppe, Abrechnung, Dauer der Sitzungen.
- Aktuelle Praxis-/Büroadresse, Telefon, **eine** E-Mail-Adresse (verbindung@ vs. kontakt@).
- Energiearbeit: sichtbar (eigene Seite, nicht im Hauptmenü) oder weglassen?
- Rückmeldungen: Einwilligungen vorhanden? Rechtliche Prüfung (HWG) nötig, bis dahin `/stimmen` ohne Link und noindex.
- Impressum: Berufsbezeichnung, Behörde, USt-IdNr. oder Steuernummer.
- Ansprache: Entwurf nutzt durchgehend „du“ (alte Seite mischt Du und Sie). Bestätigen.
- Fotos: Nutzungsrechte bei Peter Bonke, neue Porträts?

## Zugänge (Vincent)
- Search Console, Google-Unternehmensprofil, therapie.de, Mail-Hosting, alte Jimdo-Seite (alte URLs für Redirects).
- Formward-Konto der Kundin: URL in `site.formUrl` eintragen.
- Domain bezahlt die Kundin.

## Vor dem DNS-Umzug
1. Mail-Hosting sichern (wo laufen die Postfächer heute?).
2. Staging-URL auf Vercel zur Abnahme.
3. Redirects testen (`vercel.json`; Umlaut-URLs sind in roher und kodierter Form hinterlegt, auf Staging mit `curl -I` prüfen).
4. Nach dem Start: Sitemap in der Search Console einreichen, Google-Profil und therapie.de-Eintrag auf neue Daten bringen.

## Rechtstexte
Impressum, Datenschutz und Rückmeldungen sind Platzhalter (`draft: true`, noindex, nicht in der Sitemap). Texte neu erstellen und von fachkundiger Stelle prüfen lassen.
