/*
  Zentrale Stammdaten KFZ Service Beyer.
  Quelle: Brief vom Inhaber + Google Places (Place ID ChIJyUS5U0B2nkcRP-_CM4p7TnM).

  Felder mit [BITTE ERGÄNZEN] sind für Impressum/DSGVO relevant
  und müssen vor Live-Schalten vom Inhaber befüllt werden.
*/

export const business = {
  name: 'Kfz Service Beyer',
  legalName: 'Kfz Service Beyer',
  owner: 'Maximilian Beyer',
  ownerShort: 'Max Beyer',
  teamSize: 5,
  phone: '+49 89 155072',
  phoneHref: 'tel:+4989155072',
  phoneDisplay: '089 155072',
  email: 'info@kfzbeyer.com',
  street: 'Waisenhausstraße 44',
  zip: '80637',
  city: 'München',
  district: 'München-Gern',
  country: 'DE',
  // Google Maps Koordinaten (aus Brief)
  geo: { lat: 48.1617692, lng: 11.5295949 },
  hours: [
    { d: 'Montag',     t: '07:00 - 17:00', dayKey: 'Mo' },
    { d: 'Dienstag',   t: '07:00 - 17:00', dayKey: 'Tu' },
    { d: 'Mittwoch',   t: '07:00 - 17:00', dayKey: 'We' },
    { d: 'Donnerstag', t: '07:00 - 17:00', dayKey: 'Th' },
    { d: 'Freitag',    t: '07:00 - 12:00', dayKey: 'Fr' },
    { d: 'Samstag',    t: 'Geschlossen',   dayKey: 'Sa' },
    { d: 'Sonntag',    t: 'Geschlossen',   dayKey: 'Su' },
  ],
  hoursCompact: [
    { d: 'Mo - Do', t: '07:00 - 17:00' },
    { d: 'Fr',      t: '07:00 - 12:00' },
    { d: 'Sa / So', t: 'Geschlossen' },
  ],
  // Schema.org openingHoursSpecification
  openingHoursSchema: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '07:00', closes: '17:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '07:00', closes: '12:00' },
  ],
  transit: 'Direkt an der U-Bahn-Haltestelle Gern (U1).',
  transitShort: 'U-Bahn Gern (U1)',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.4!2d11.5295949!3d48.1617692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e76405354b9c9%3A0x734e7b8a33c2ef3f!2sKfz%20Service%20Beyer!5e0!3m2!1sde!2sde!4v1700000000',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Kfz%20Service%20Beyer&query_place_id=ChIJyUS5U0B2nkcRP-_CM4p7TnM',
  google: {
    stars: '4,8',
    starsNumeric: 4.8,
    count: '76',
    countNumeric: 76,
  },
  placeId: 'ChIJyUS5U0B2nkcRP-_CM4p7TnM',
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  icon: string;
};

export const services: Service[] = [
  {
    slug: 'hu-au',
    title: 'HU / AU - Hauptuntersuchung',
    short: 'TÜV-Termin direkt bei uns - mit unabhängiger Prüforganisation.',
    description:
      'Den HU/AU-Termin organisieren wir gemeinsam mit einer unabhängigen Prüforganisation - bequem in einem Werkstattbesuch. Reine Durchführung der Hauptuntersuchung; falls Sie eine Werkstatt-Inspektion vorab wünschen, vereinbaren Sie diese bitte separat.',
    bullets: [
      'Termin mit unabhängiger Prüforganisation vor Ort',
      'Plakette ohne Umweg',
      'Auf Wunsch direkt mit Inspektion kombinierbar',
      'Klare Auskunft, was nach der Prüfung zu tun ist',
    ],
    icon: 'shield',
  },
  {
    slug: 'inspektion-wartung',
    title: 'Inspektion & Wartung',
    short: 'Nach Herstellervorgabe - mit Stempel im Scheckheft.',
    description:
      'Wir warten Ihr Fahrzeug nach den Vorgaben des Herstellers - egal ob Klein-, Mittel- oder Oberklasse. Sie behalten Ihren Garantieanspruch und einen lückenlosen Scheckheft-Eintrag. Transparent erklären wir, was tatsächlich nötig ist - und was warten kann.',
    bullets: [
      'Service nach Herstellervorgabe',
      'Eintrag ins digitale & klassische Scheckheft',
      'Garantieerhalt bei jüngeren Fahrzeugen',
      'Klare Empfehlungen, keine versteckten Posten',
    ],
    icon: 'wrench',
  },
  {
    slug: 'bremsen',
    title: 'Bremsen-Service',
    short: 'Beläge, Scheiben, Bremsflüssigkeit - sicher unterwegs.',
    description:
      'Quietschen, Vibrieren, längerer Bremsweg? Wir prüfen Ihre Bremsanlage komplett - Beläge, Scheiben, Trommeln, Sättel und Flüssigkeit - und tauschen, was nötig ist. Auf Wunsch verwenden wir Original- oder geprüfte Markenteile.',
    bullets: [
      'Bremsbeläge & Scheiben aller Achsen',
      'Bremsflüssigkeit nach Herstellervorgabe',
      'Sättel und ABS-Diagnose',
      'Original- oder Markenteile nach Wunsch',
    ],
    icon: 'disc',
  },
  {
    slug: 'reifen',
    title: 'Reifenservice & Einlagerung',
    short: 'Wechsel, Auswuchten, Einlagern - nach Terminvereinbarung.',
    description:
      'Reifenwechsel mit Auswuchten und Druckkontrolle. Auf Wunsch lagern wir Ihre Sommer- oder Winterreifen fachgerecht bei uns ein - Sie kommen einfach zum Termin, und wir haben Ihre Reifen schon bereit.',
    bullets: [
      'Wechsel inkl. Auswuchten',
      'Reifenmontage auf neuen Felgen',
      'Reifeneinlagerung (Saisonwechsel)',
      'Reifen­ankauf bei Bedarf',
    ],
    icon: 'circle',
  },
  {
    slug: 'klima',
    title: 'Klimaanlagen-Service',
    short: 'Befüllen, Desinfektion, Reparatur - im Sommer wieder kühl.',
    description:
      'Wir prüfen Ihre Klimaanlage auf Dichtheit, befüllen Kältemittel und Öl nach Herstellervorgabe und tauschen den Innenraumfilter. Modernste Geräte für R134a- und R1234yf-Anlagen sind bei uns Standard.',
    bullets: [
      'Befüllen R134a & R1234yf',
      'Dichtigkeits- und Druckprüfung',
      'Innenraumfilter & Desinfektion',
      'Reparatur von Lecks und Kompressoren',
    ],
    icon: 'snowflake',
  },
  {
    slug: 'elektrik-diagnose',
    title: 'Elektrik & Diagnose',
    short: 'Fehlerspeicher, Steuergeräte, Sensoren - wir lesen aus.',
    description:
      'Leuchtet eine Warnlampe? Wir lesen den Fehlerspeicher mit professionellen Diagnosegeräten aus, finden die Ursache und beheben sie - statt einfach den Speicher zu löschen. Auch bei modernen Assistenzsystemen.',
    bullets: [
      'Fehlerspeicher auslesen (alle Marken)',
      'Sensoren, Steuergeräte, Verkabelung',
      'Batterie- und Lichtmaschinen-Test',
      'Codieren und Anlernen nach Reparatur',
    ],
    icon: 'cpu',
  },
  {
    slug: 'oelwechsel',
    title: 'Ölwechsel & Verschleiß',
    short: 'Öl, Filter, Zündkerzen - alles was regelmäßig fällig wird.',
    description:
      'Ölwechsel mit passendem Öl nach Herstellerfreigabe, neuer Ölfilter, dazu Luft-, Innenraum- und Kraftstofffilter. Bei Bedarf auch Zündkerzen und Wischer. Bitte vorab telefonisch einen Termin vereinbaren.',
    bullets: [
      'Motoröl nach Herstellerfreigabe',
      'Öl-, Luft-, Innenraum- und Kraftstofffilter',
      'Zündkerzen, Wischer, Glühkerzen',
      'Sichtprüfung Reifen, Bremsen, Beleuchtung',
    ],
    icon: 'droplet',
  },
  {
    slug: 'achsvermessung',
    title: 'Achsvermessung',
    short: 'Spur korrekt eingestellt - Reifen halten länger.',
    description:
      'Ungleicher Reifenverschleiß oder Lenkrad schief? Mit einer präzisen Achsvermessung stellen wir Spur und Sturz korrekt ein. Das Auto fährt wieder ruhig, der Verbrauch sinkt - und neue Reifen halten deutlich länger.',
    bullets: [
      'Computer-Achsvermessung beider Achsen',
      'Spur- und Sturz-Einstellung',
      'Empfehlung nach Reifenwechsel',
      'Ideal nach Bordsteinkontakt',
    ],
    icon: 'target',
  },
];

// Echte Google-Reviews aus dem Brief (Place ID ChIJyUS5U0B2nkcRP-_CM4p7TnM)
export const reviews = [
  {
    name: 'Google-Kunde',
    stars: 5,
    text:
      'Eine der besten kleineren Autowerkstätten in München, immer freundlich und fair im Preis.',
    source: 'Google Rezension',
  },
  {
    name: 'Google-Kunde',
    stars: 5,
    text:
      'Fantastische inhabergeführte Werkstatt direkt an der U-Bahn-Station.',
    source: 'Google Rezension',
  },
  {
    name: 'Google-Kunde',
    stars: 5,
    text:
      'Sie halten Wort und es gibt keine bösen Überraschungen - eine echte Seltenheit.',
    source: 'Google Rezension',
  },
  {
    name: 'Google-Kunde',
    stars: 5,
    text: 'Super freundliches und kompetentes Team.',
    source: 'Google Rezension',
  },
  {
    name: 'Google-Kunde',
    stars: 5,
    text: 'Reparaturen in Rekordzeit, wirklich exzellent.',
    source: 'Google Rezension',
  },
];
