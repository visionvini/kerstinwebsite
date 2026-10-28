/**
 * Zentrale Konfiguration. Ort, Adresse, Telefon, Schema und Footer ziehen sich alles von hier.
 * Bei Umzug der Kundin: nur diese Datei ändern (URLs bleiben ortsneutral).
 */
export const site = {
  name: 'Kerstin Bonke',
  brand: 'Kerstin Bonke Gestalttherapie',
  url: 'https://www.kerstinbonke.de',
  ort: 'Stuttgart', // <- einziger Ort im Projekt
  plz: '70599',
  strasse: 'Leypoldtstraße 11', // TODO: mit Kundin klären, ob das die öffentliche Praxis-/Büroadresse ist
  telefon: '+49 176 312 483 97',
  telefonAnzeige: '0176 312 483 97',
  email: 'kontakt@kerstinbonke.de', // TODO: eine einheitliche Adresse klären (verbindung@ vs. kontakt@)
  instagram: 'https://www.instagram.com/kerstinbonke/',
  // TODO Kundin: Formular-URL aus dem Formward-Konto der Kundin eintragen
  formUrl: '',
  // Schalter, solange offen ist, was die Kundin tatsächlich anbietet
  persoenlichVorOrt: true, // TODO klären: persönliche Termine aktuell möglich?
  gruppeAktiv: true, // TODO klären: läuft die Gruppe noch? Sonst false (Seite entfällt, Redirect greift)
  ogImage: '/og-default.jpg', // TODO: Bild ablegen
} as const;

export const ortSuffix = `in ${site.ort} und online`;
