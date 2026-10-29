import { site, ortSuffix } from '../config/site';
import { rezensionen } from './rezensionen';

export type Img = { src: string; alt: string; shape?: 1 | 2 | 3; ratio?: string };
export type Section = {
  h2?: string;
  paragraphs?: string[];
  items?: string[];
  image?: Img; // organisch geformtes Bild neben dem Text
  images?: Img[]; // mehrere Bilder als Bildgruppe
  lead?: boolean; // größerer Absatztext
  link?: { href: string; label: string }; // Button unter dem Text
  links?: { href: string; label: string }[]; // externe Linkliste
};
export type Faq = { q: string; a: string };
export type Testimonial = { text: string[]; name: string; featured?: boolean };
export type PageData = {
  slug: string;
  title: string; // <= 60 Zeichen
  h1: string;
  meta: string; // <= 160 Zeichen
  intro?: string;
  quote?: { text: string; author: string };
  heroImage?: Img;
  sections: Section[];
  faq?: Faq[];
  testimonials?: Testimonial[];
  cta: string;
  related?: string[];
  draft?: boolean; // noindex + nicht in Sitemap
  hidden?: boolean; // wird gar nicht gebaut
  nav?: 'angebot' | 'angebot-extra' | 'themen' | 'main';
  navLabel?: string;
};

/**
 * Texte und Bilder stammen 1:1 von der bisherigen Seite kerstinbonke.de (Stand 22.10.2026).
 * Mit [KLÄREN] markierte Stellen sind veraltet oder offen und müssen mit der Kundin besprochen werden.
 */
export const pages: PageData[] = [
  {
    slug: 'gestalttherapie',
    title: `Gestalttherapie ${ortSuffix} | Kerstin Bonke`,
    h1: 'Gestalttherapie',
    meta: `Gestalttherapie mit Kerstin Bonke: online oder persönlich in ${site.ort}. Kostenfreies telefonisches Erstgespräch, Konditionen nach Absprache.`,
    heroImage: { src: '/bilder/portraet-vorhang.jpg', alt: 'Kerstin Bonke, Gestalttherapeutin', shape: 1, ratio: '1/1' },
    intro: 'Ich biete meine Kompetenzen, meine Erfahrung und einen weiten Raum voller Klarheit für dich.',
    sections: [
      {
        h2: 'Online oder persönlich',
        paragraphs: [
          'Das Angebot gibt es online oder, wenn die räumliche Nähe es ermöglicht, auch persönlich.',
          'Nach Bedarf, Wunsch, Bedürfnis:',
        ],
        items: [
          'ein längerer gemeinsamer Prozess',
          'ein einmaliger Termin zu einem bestimmten Thema, einer bestimmten Fragestellung',
          'eine intensive Begleitung über einen bestimmten Zeitraum',
        ],
        image: { src: '/bilder/angebot-meer.jpg', alt: 'Wellen brechen an dunklen Felsen im Meer', shape: 3, ratio: '4/3' },
      },
      {
        paragraphs: [
          'Dauer einer Einzelsitzung: 1 Zeitstunde',
          'Kosten: 80,- Euro',
          'Ermäßigung für Menschen in Ausbildung ist möglich.',
          'Einige private Krankenkassen erstatten die Kosten, wenn eine entsprechende Zusatzversicherung abgeschlossen wurde.',
          'Die Online-Termine finden auf einem speziellen Therapie-Portal statt, auf dem der Datenschutz gewährleistet ist.',
          'Alle Konditionen können wir in einem ersten kostenfreien Telefongespräch klären.',
        ],
      },
      {
        h2: 'Niemand muss einsam bleiben',
        paragraphs: ['Ein Kurs in fünf Schritten, der online stattfindet.'],
        link: { href: '/niemand-muss-einsam-bleiben', label: 'Zum Kurs' },
      },
      {
        h2: 'Gemeinsam können wir',
        paragraphs: [
          `aus einer übergeordneten Perspektive und gleichzeitig voller Präsenz im jetzigen Augenblick Verwirrungen und Verneblungen lichten und klare Kraft in deinem Leben wirken lassen. Die Kraft, die in dir steckt und die auf der Welt gebraucht wird.`,
        ],
        image: { src: '/bilder/mohn-himmel.jpg', alt: 'Mohnblumen vor blauem Himmel', shape: 2, ratio: '4/3' },
      },
      {
        paragraphs: [
          `Es geht darum, Platz zu schaffen im Inneren wie im Äußeren für das, was sowieso schon immer da war, die Verbindung mit deinem wahren Sein.`,
          `Sich dieser Verbindung wieder vollkommen bewusst zu sein, sie täglich zu stärken, aus ihr heraus zu leben und Entscheidungen zu treffen, die klar und einfach sind. Unnötigkeiten zu verabschieden und das Wesentliche zu leben, das ist der Leitstern.`,
          `Wie genau das aussieht, was deine persönliche Facette des Seins ist, wird im Prozess deutlich.`,
          `Überhaupt – wir können einfach schauen, was dran ist; von den tiefsten Tiefen, den Verdichtungen bis zu den luftigen Visionen, die sich materialisieren wollen, alles hat seinen Platz.`,
          `Alles, was im gemeinsamen Tun geschieht, führt dazu, der Wahrhaftigkeit näher zu kommen und hilft, einen eigenen, vollkommen freien Blick auf das Leben zu werfen und Nebel zu lichten.`,
        ],
        image: { src: '/bilder/mohn-rosa.jpg', alt: 'Rosa und roter Mohn', shape: 1, ratio: '4/5' },
      },
    ],
    cta: 'Erstgespräch vereinbaren',
    related: ['einzeltherapie', 'paartherapie', 'gruppe', 'online-therapie'],
    nav: 'main',
    navLabel: 'Angebot',
  },
  {
    slug: 'einzeltherapie',
    title: `Einzeltherapie ${ortSuffix} | Kerstin Bonke`,
    h1: 'Einzeltherapie',
    meta: `Gestalttherapeutische Einzelbegleitung bei Kerstin Bonke: ein Prozess, ein Termin oder eine intensive Phase. Online oder persönlich in ${site.ort}.`,
    intro: 'Nach Bedarf, Wunsch, Bedürfnis: ein längerer gemeinsamer Prozess, ein einmaliger Termin zu einem bestimmten Thema oder eine intensive Begleitung über einen bestimmten Zeitraum.',
    sections: [
      {
        h2: 'So arbeite ich',
        paragraphs: [
          'Ich kombiniere die Haltung und Methoden der Gestalttherapie mit energetischem Wirken, wenn Offenheit dafür besteht.',
          'Dauer einer Einzelsitzung: 1 Zeitstunde. Kosten: 80,- Euro. Ermäßigung für Menschen in Ausbildung ist möglich.',
          'Alle Konditionen können wir in einem ersten kostenfreien Telefongespräch klären.',
        ],
        image: { src: '/bilder/rose.jpg', alt: 'Rose mit Tautropfen', shape: 3, ratio: '1/1' },
      },
    ],
    cta: 'Erstgespräch vereinbaren',
    related: ['gestalttherapie', 'online-therapie', 'lebenskrisen'],
    nav: 'angebot',
    navLabel: 'Einzeltherapie',
  },
  {
    slug: 'paartherapie',
    title: `Paartherapie in ${site.ort} | Kerstin Bonke`,
    h1: 'Paartherapie',
    meta: 'Paartherapie nach Hans Jellouschek bei Kerstin Bonke: neue Impulse bei Streit und Festgefahrenheit. Sitzung 90 Minuten, Erstgespräch kostenfrei.',
    quote: {
      text: 'Es geht in der Paartherapie nie um die Wiederherstellung eines früheren Zustandes ... Es geht immer um Weiterentwicklung.',
      author: 'Hans Jellouschek',
    },
    sections: [
      {
        paragraphs: [
          'Wenn Sie sich in einer Beziehung befinden und sich fragen wie und möglicherweise auch ob es gelingen kann, diese Beziehung auf zufriedenstellende Weise fortzuführen, ist eine Paartherapie/Paarberatung nützlich und hilfreich.',
          'Paar sein und Paar bleiben durch die verschiedenen Lebensphasen hindurch und mit vielfältigen Lebensereignissen konfrontiert, kann zu einer Herausforderung werden. Zwei Menschen mit unterschiedlichen Lebensgeschichten, Vorstellungen, Sichtweisen und Empfindungen, sowie mit einer unterschiedlichen Art und Weise an Dinge heranzugehen, wollen diese Dinge gemeinsam meistern. Dabei kann es zu Schwierigkeiten kommen, die sich in Streitereien und gegenseitigen Verletzungen äußern. Ebenso können festgefahrene Muster und Verhärtungen die Partnerschaft lähmen und die in Beziehung stehenden Personen in ihrer persönlichen Entwicklung blockieren.',
          'Dauern die Auseinandersetzungen oder die Gefühle des Festgefahrenseins an und finden keinen konstruktiven Ausweg, ist eine Paartherapie sehr hilfreich und sinnvoll.',
        ],
        image: { src: '/bilder/fingerhut-nah.jpg', alt: 'Blüten des Fingerhuts', shape: 2, ratio: '4/5' },
      },
      {
        h2: 'Als Paartherapeutin unterstütze ich Sie gerne',
        items: [
          'Die Beziehung bekommt neue Impulse von außen und kann wieder ins Fließen kommen',
          'Wir entwickeln neue Umgangsformen',
          'Wir finden kreative Wege um mit den anstehenden Aufgaben und mit alten Verletzungen umzugehen',
          'Versöhnung kann wieder möglich werden',
          'Sollte sich herauskristallisieren, dass dennoch eine Trennung ansteht, kann diese auf einer anderen Grundlage und mit größerem gegenseitigen Respekt vollzogen werden',
        ],
      },
      {
        paragraphs: [
          'Auch zu Anfang einer Beziehung kann eine Paartherapie nützlich sein, wenn sich die Frage aufwirft, wie das Paar mit den Unterschieden und individuellen Bedürfnissen innerhalb der Partnerschaft umgehen möchte und wie die Weichen gestellt werden sollen.',
          'In meiner Arbeit gehe ich wertschätzend mit den Beziehungsthemen, der Partnerschaft und den beiden Einzelpersonen um und bewahre einen neutralen Standpunkt. Gemeinsam können wir individuelle und kreative Lösungsstrategien entwickeln.',
          'Ich arbeite auf der Grundlage der Gestalttherapie verbunden mit dem systemisch integrativem Ansatz des HJI, den Hans Jellouschek entwickelt hat.',
        ],
        image: { src: '/bilder/fingerhut-hoch.jpg', alt: 'Fingerhut in einer Wiese', shape: 1, ratio: '3/4' },
      },
      {
        h2: 'Praktisches',
        items: [
          'Wo? Die Paartherapie findet persönlich in meiner Praxis statt.', // TODO KLÄREN: Ort aktuell? Bisher Stuttgart-Plieningen, Praxis auf online umgestellt
          'Wie oft? Die Abstände für unsere Sitzungen legen wir in gemeinsamer Absprache fest',
          'Wie lange? Eine Sitzung dauert 90 Minuten',
          'Kosten? Eine Sitzung kostet 150€', // TODO KLÄREN: Preis aktuell?
        ],
      },
    ],
    cta: 'Erstgespräch für Paare vereinbaren',
    related: ['gestalttherapie', 'online-therapie', 'ueber-mich'],
    nav: 'angebot',
    navLabel: 'Paartherapie',
  },
  {
    slug: 'gruppe',
    title: `Gestaltgruppe in ${site.ort} | Kerstin Bonke`,
    h1: `Gestaltgruppen in ${site.ort}`,
    meta: 'Gestalttherapeutische Gruppe mit Kerstin Bonke: ehrlicher Austausch, Grenzen erkennen, kreativ arbeiten. Aktuelle Termine und Anmeldung.',
    quote: {
      text: 'Identität formt sich in der Auseinandersetzung des Individuums mit seiner Umwelt. Der Mensch ist fundamental auf seine Umwelt, Mitwelt ausgerichtet in physischer und psychischer Hinsicht',
      author: 'Ludwig Frambach',
    },
    sections: [
      {
        paragraphs: [
          'Eine Gruppe, die durch den Alltag begleitet und ihn bereichert für Menschen, die Lust haben, über innere und äußere Grenzen hinauszugehen und dies im Alltag zu verankern.',
        ],
        items: [
          'in Gemeinschaft erleben, wie Zusammenleben sich auf offene und ehrliche Art gestalten kann',
          'ehrliches Feedback geben und erhalten',
          'sich zeigen können, wie man wirklich ist, die eigene Wahrheit und die eigenen Werte erkennen und äußern',
          'gegenseitige Wertschätzung und Unterstützung erfahren',
          'Hier und Jetzt - mich und die anderen in diesem Moment erleben',
          'die eigenen Grenzen deutlich machen und bewahren oder verändern',
          'alte Themen, die noch ungelöst sind, können sich in neuem Zusammenhang nochmal zeigen und aufgelöst werden',
          'kreative Kompetenz erleben, erfahren, entwickeln',
          'real, direkt und klar',
          'Spaß haben',
        ],
        image: { src: '/bilder/terrasse.jpg', alt: 'Sonnige Terrasse mit Tisch', shape: 3, ratio: '4/3' },
      },
      {
        h2: 'Gruppentermine',
        paragraphs: ['Gruppentermine finden derzeit keine statt.'],
        image: { src: '/bilder/stuehle.jpg', alt: 'Tisch mit Stühlen', shape: 2, ratio: '4/3' },
      },
    ],
    cta: 'Platz anfragen',
    related: ['gestalttherapie', 'einzeltherapie'],
    nav: 'angebot',
    navLabel: 'Gruppe',
    hidden: !site.gruppeAktiv,
  },
  {
    slug: 'online-therapie',
    title: 'Gestalttherapie online per Video | Kerstin Bonke',
    h1: 'Gestalttherapie online',
    meta: `Gestalttherapie online von Kerstin Bonke: persönliche Treffen sind möglich, wenn es die räumliche Nähe zulässt. Kostenfreies telefonisches Erstgespräch.`,
    sections: [
      {
        paragraphs: [
          'Ich habe mich entschieden, für den Moment den festen gewohnten Rahmen der Form (eines strukturierten Praxisalltags) zu verlassen, mein Angebot auf online zu verlagern, wobei persönliche Treffen möglich sind, wenn es die räumliche Nähe zulässt. Dabei möchte ich mit dir sehr offen schauen, was zu welchen Konditionen und zu welchen Zeiten sinnvoll und gewünscht ist.',
          'Melde dich für ein kostenfreies telefonisches Erstgespräch.',
          'Die Online-Termine finden auf einem speziellen Therapie-Portal statt, auf dem der Datenschutz gewährleistet ist.', // TODO KLÄREN: Name des Portals, gilt das auch für Paare?
        ],
        image: { src: '/bilder/meer-sonne.jpg', alt: 'Sonne über dem Meer', shape: 1, ratio: '4/3' },
      },
    ],
    cta: 'Online-Erstgespräch vereinbaren',
    related: ['einzeltherapie', 'paartherapie', 'gestalttherapie'],
    nav: 'angebot',
    navLabel: 'Online',
  },
  {
    slug: 'gestalt',
    title: `Gestalttherapie: Haltung und Methode | Kerstin Bonke`,
    h1: 'Gestalttherapie',
    meta: 'Was ist Gestalttherapie? Ein anerkanntes Verfahren der Psychotherapie: das eigene Erleben im Hier und Jetzt und der Kontakt mit dem Umfeld stehen im Vordergrund.',
    heroImage: { src: '/bilder/spiegel-garten.jpg', alt: 'Ein alter Spiegel im blühenden Garten', shape: 1, ratio: '4/5' },
    quote: {
      text: '…alles Offensichtliche von der Situation zu erfassen, in der wir uns wiederfinden, und die auftauchende Gestalt streng auf der Basis des ‚Ich‘ und ‚Du‘ und des ‚Hier‘ und ‚Jetzt‘ zu entwickeln.',
      author: 'Fritz Perls',
    },
    sections: [
      {
        h2: 'Die Gestalttherapie',
        paragraphs: [
          'Die Gestalttherapie ist ein anerkanntes Verfahren der Psychotherapie, bei dem das eigene Erleben im gegenwärtigen Moment sowie der Kontakt mit dem Umfeld im Vordergrund steht.',
          'Entwickelt wurde sie ab den 1940er Jahren von Fritz Perls (Psychiater und Psychoanalytiker), Laura Perls (Psychologin und Psychoanalytikerin) und später auch Paul Goodman (Soziologe).',
          'Die Gestalttherapie ist eine Therapieform, die vom lebendigen Kontakt von Klient*in und Gestalttherapeut*in lebt. Sie gestaltet sich im Kontakt immer wieder neu und ist ein offenes Konzept. Der Kontaktprozess dirigiert, welche therapeutischen Methoden und Wirkfaktoren ihren Einsatz finden.',
          'Die Gestalttherapie entwickelt sich in einer offenen und wertschätzenden Haltung der Therapeutin/des Therapeuten, die sich an dem orientiert, was ist und wie es sich zeigt, z.B. Empfindungen, Körperausdruck, Verhaltensweisen.',
          'Als Gestalttherapeutin stehen mir eine Vielzahl an Methoden und Techniken zur Verfügung wie kreative Medien, Integrationstechniken, Bewusstseinsschulung, Traumarbeit, u.a.',
          'Als Gestalttherapeutin gehe ich davon aus, dass alles, was wir erleben und alle Verhaltensweisen, die wir zeigen, ihren Sinn haben. Erfahrungsgemäß ist es günstig zunächst all diese Phänomene genauer zu betrachten, ohne sie sofort ändern zu wollen.',
          '„Das ist, was ist; das gehört im Moment zu mir“, erst auf dieser Grundlage wird Veränderung möglich.',
          'In diesem Prozess wird unter anderem deutlich, welche Verhaltensweisen wir an den Tag legen, weil wir irgendwelchen verinnerlichten oder äußeren Erwartungen entsprechen „sollten“ und nicht, weil es unserem inneren Wesen entspricht.',
        ],
      },
    ],
    cta: 'Erstgespräch vereinbaren',
    related: ['gestalttherapie', 'ueber-mich'],
  },
  {
    slug: 'ausrichtung',
    title: 'Ausrichtung | Kerstin Bonke',
    h1: 'Ausrichtung',
    meta: 'Zwischen Wissen um die Einheit und dem Alltag: warum es hilft, sich auch den inneren Zuständen zuzuwenden, die nicht der Ausrichtung entsprechen.',
    heroImage: { src: '/bilder/startseite-hero-berge.jpg', alt: 'Adler auf einem Felsen vor Bergen', shape: 2, ratio: '3/2' },
    sections: [
      {
        paragraphs: [
          'Da gibt es ein Wissen um die Wirklichkeit und dass es ganz leicht sein kann, in Einklang und Einheit zu leben, ganz in Verbindung mit der Wirklichkeit. Da gibt es keine Fragen.',
          'Aber es gibt Lebenssituationen, die dich aus diesem Wissen herauskatapultieren, als gäbe es noch ein Dazwischen – zwischen dir und dem Zustand der Einheit. „Als-ob“ ist keine befriedigende Lösung; „ich tue mal so, als ob mir das nichts ausmacht, da stehe ich drüber und ich lebe entsprechend meinem Ideal.“ Irgendwas bleibt dann auf der Strecke, fühlt sich nicht wahrgenommen, was ja stimmt, und beginnt zu sabotieren.',
          'In der Ausrichtung bleiben und trotzdem Zustände zulassen, die nicht der Ausrichtung entsprechen, wirkt paradox. Und da, wo es paradox wirkt, liegt oft viel Wahrheit. Anerkennen, was alles dazu gehört um ganz zu sein, authentisch zu sein und aufrichtig Entscheidungen treffen zu können, ist ein notwendiger Schritt.',
          'Es wird zum Teil die Angst geschürt, sich diesen Seiten zuzuwenden und ihnen die Möglichkeit zu geben, Ausdruck zu finden, würde negative Energien ins Leben ziehen.',
          'Stattdessen hört man, liest man und denkt dann vielleicht auch:',
        ],
        items: [
          'Du musst einfach nur vergeben, das ist der Schlüssel.',
          'Du musst einfach nur dankbar sein, auch für die kleinen Dinge.',
          'Leb’ einfach deinen Traum.',
          'Erhöhe einfach deine Schwingung.',
          'Sei glücklich und in der Freude, dann ziehst du entsprechend die Situationen an, die du dir wünschst.',
        ],
      },
      {
        paragraphs: [
          'Dies ist die Ausrichtung, die bestimmt sehr sinnvoll ist.',
          'Aber:',
          'Wenn es so leicht wäre, hättest du es längst getan … und gleichzeitig ist es so leicht. In einem Tai Chi Buch habe ich vor langer Zeit mal den Satz gelesen: Leicht geht es, sonst stimmt etwas nicht. Und dieses kann bedeuten, dass es zunächst mal wichtig ist, sich den inneren Zuständen zuzuwenden, die nicht gleich „au ja“ schreien.',
          'Authentisch, paradox, dem inneren Wissen und der Intuition vertrauen. So schlängelt sich der Weg, alles ist längst da und war nie verloren.',
        ],
      },
    ],
    cta: 'Erstgespräch vereinbaren',
    related: ['gestalt', 'ueber-mich'],
    nav: 'themen',
    navLabel: 'Ausrichtung',
  },
  {
    slug: 'lebenskrisen',
    title: 'Lebenskrisen, Burnout, Schlafstörungen | Kerstin Bonke',
    h1: 'Gestalttherapie zur Bewältigung von Umbruchsituationen, Lebenskrisen, Burnout, Schlafstörungen',
    meta: `Gestalttherapie bei Umbrüchen, Lebenskrisen, Burnout und Schlafstörungen: neue Lösungsstrategien finden. Kerstin Bonke, ${site.ort} und online.`,
    quote: {
      text: 'Das Selbst ist immer Prozessen unterworfen, in denen es wachsen kann. Das Selbst entwickelt sich und hat eine Kontinuität.',
      author: 'Laura Perls',
    },
    sections: [
      {
        paragraphs: [
          'Jederzeit können wir mit Situationen konfrontiert sein, in denen unsere gewohnten Bewältigungsstrategien nicht mehr zufriedenstellend greifen. Wir spüren, dass wir so nicht mehr weitermachen können oder wollen; dass uns die Lebensqualität fehlt.',
          'Anzeichen können z.B. Schlafstörungen, Lustlosigkeit, unangemessene oder übersteigerte Verhaltensweisen sein.',
          'Womöglich stellt sich die Frage nach der Existenz und nach dem Sinn des Lebens. Es kann zu einer ernsthaften existentiellen Krise kommen, die nicht an der Oberfläche, sondern in der Tiefe gelöst werden möchte.',
          'Egal, wie tief wir in diesem Prozess stecken, ist es hilfreich, „Stopp“ zu sagen und nach neuen, fruchtbareren Möglichkeiten zu suchen, mit der Lebenssituation umzugehen.',
          'Als Gestalttherapeutin unterstütze ich dabei, die Muster zu erkennen, ihre bisherige Zuverlässigkeit wertzuschätzen, aber auch die momentane Unwirksamkeit zu sehen und neue Lösungsstrategien zu entwickeln, die dem eigenen Wesen wirklich entsprechen. Die Entscheidung, bis in welche Tiefenschicht hinein wir uns begeben, trifft jede/r selbst.',
          'Während wir in einer Krise stecken, fällt es schwer, deren Sinn und Nutzen zu erkennen.',
          'Nutzen wir schwierige Lebenssituationen, um Neues in uns zu entdecken und daran zu wachsen, werden wir reifer und zufriedener aus der Lebenskrise heraustreten, als wir hineingegangen sind. Möglicherweise werden wir im Rückblick sogar dankbar dafür sein, dass wir auf diese Art und Weise unser Leben mehr in die Richtung bringen konnten, die uns von innen heraus zufrieden macht.',
        ],
        image: { src: '/bilder/hortensie.jpg', alt: 'Rosa Hortensien', shape: 2, ratio: '4/3' },
      },
    ],
    cta: 'Erstgespräch vereinbaren',
    related: ['einzeltherapie', 'psychische-belastungen'],
    nav: 'themen',
    navLabel: 'Lebenskrisen und Umbrüche',
  },
  {
    slug: 'psychische-belastungen',
    title: 'Gestalttherapie bei psychischen Erkrankungen | Bonke',
    h1: 'Gestalttherapie bei psychischen Erkrankungen',
    meta: `Gestalttherapie bei psychischen Erkrankungen, auch ergänzend zur ärztlichen Behandlung. Kerstin Bonke, Heilpraktikerin für Psychotherapie, ${site.ort}.`,
    quote: {
      text: 'Aller Kontakt ist kreative gegenseitige Anpassung von Organismus und Umwelt …',
      author: 'Perls, Hefferline, Goodman',
    },
    sections: [
      {
        paragraphs: [
          'Psychische Störungen können ein so großes Ausmaß annehmen, dass sie die alltägliche Lebensführung stark beeinträchtigen und die Lebensqualität erheblich senken. Die Gestalttherapie ist nicht in erster Linie auf die klinische Diagnostik bezogen, sondern bezieht sich prozessbezogen auf die Symptomatik und zeigt einen kompetenten Umgang mit psychischen Erkrankungen.',
          'In meiner Arbeit sind auch hier die heilenden Faktoren der Aufbau einer wahrhaftigen Beziehung auf Augenhöhe, der Umgang mit den offensichtlichen Symptomen, Wahrnehmungs- und Verhaltensweisen sowie der Blick auf und das Zutage fördern von stützenden und stabilisierenden Faktoren im Menschen und im Umfeld.',
          'Bei schwerwiegenden psychischen Erkrankungen kann die Gestalttherapie als ergänzende Therapie zu ärztlicher Behandlung eingesetzt werden, um mehr Stabilität und Lebensqualität zu erlangen.',
        ],
        image: { src: '/bilder/glockenblume.jpg', alt: 'Glockenblumen auf einem Felsen', shape: 3, ratio: '4/3' },
      },
    ],
    cta: 'Erstgespräch vereinbaren',
    related: ['einzeltherapie', 'lebenskrisen'],
    nav: 'themen',
    navLabel: 'Psychische Erkrankungen',
  },
  {
    slug: 'geistige-behinderung',
    title: 'Gestalttherapie, kognitive Beeinträchtigung | Bonke',
    h1: 'Gestalttherapie als Form der Psychotherapie für Menschen mit einer kognitiven Beeinträchtigung',
    meta: `Gestalttherapie als Psychotherapie für Menschen mit kognitiver Beeinträchtigung: erfahrungsbezogen, nicht auf intellektuelles Verstehen ausgerichtet. ${site.ort}.`,
    quote: {
      text: 'Gestalttherapie ist im Wesentlichen ein nicht-interpretativer Ansatz, weil ihr Ziel Erfahrung, Gewahrsein und nicht intellektuelle Einsicht ist.',
      author: 'Claudio Naranjo',
    },
    sections: [
      {
        paragraphs: [
          'Die Gestalttherapie bietet sich grundsätzlich als Therapieform für Menschen mit einer kognitiven Beeinträchtigung an.',
          'Sie ist erfahrungsbezogen und auf das eigene Erleben ausgerichtet und nicht auf intellektuelles Verstehen.',
          'Im direkten Kontakt wird an dem gearbeitet, was sich offensichtlich zeigt und was ausgedrückt wird unabhängig von der intellektuellen Ebene.',
          'Damit die Gestalttherapie Menschen mit einer kognitiven Beeinträchtigung erreichen kann, muss ein gewisses Maß an Kommunikations-, Sprach- und Aufnahmefähigkeit vorhanden sein. In einem Erstgespräch können wir gemeinsam herausfinden, ob eine gemeinsame Arbeit möglich ist.',
        ],
        image: { src: '/bilder/baum.jpg', alt: 'Baum im Gegenlicht', shape: 1, ratio: '4/3' },
      },
      {
        h2: 'Gestalttherapie und Inklusion',
        paragraphs: [
          'Jede Person soll die Möglichkeit erhalten, sich mit ihren Fähigkeiten und ihrem individuellen Ausdruck in die Gesellschaft einzubringen, an ihr mitzuwirken und entsprechend ihren Vorstellungen zu leben.',
          'Die Inklusion als wünschenswerte gesellschaftliche Realität schafft einen strukturellen Rahmen, der Menschen mit einer Behinderung zu einer größtmöglichen Aktivität und Teilhabe verhelfen kann.',
          'Durch ihre Ausrichtung an der individuellen Befähigung der / des einzelnen ist die Gestalttherapie in hohem Maße geeignet, diesen Prozess zu unterstützen und zu begleiten. Dabei geht es nicht darum, einen äußeren Rahmen an die Menschen anzulegen und sie entsprechend anzupassen, sondern darum, sie zu unterstützen, den Platz in der Gesellschaft einzunehmen, der ihnen angemessen und passend erscheint.',
        ],
        image: { src: '/bilder/pflanze-himmel.jpg', alt: 'Pflanze vor blauem Himmel', shape: 2, ratio: '4/5' },
      },
    ],
    cta: 'Erstgespräch vereinbaren (auch für Angehörige)',
    related: ['gestalttherapie', 'ueber-mich'],
    nav: 'themen',
    navLabel: 'Kognitive Beeinträchtigung',
  },
  {
    slug: 'expats',
    title: 'Gestalttherapie für Expats, online auf Deutsch | Bonke',
    h1: 'Expats',
    meta: 'Gestalttherapie online für Menschen, die im Ausland leben: diskret, in der Muttersprache Deutsch, mit präsenter und wertfreier Haltung.',
    heroImage: { src: '/bilder/expats-haus.jpg', alt: 'Ein kleines pastellgrünes Haus unter blauem Himmel', shape: 2, ratio: '3/4' },
    quote: { text: 'Veränderung wird zum Rhythmus', author: 'Stella Resnick' },
    sections: [
      {
        paragraphs: [
          'Während der längeren Zeiten, die ich mich selbst außerhalb von Deutschland aufhielt, habe ich viele verschiedene Formen von Leben im Ausland kennengelernt.',
          'Natürlich ergeben sich auch in dieser, in der Regel frei gewählten, Lebenssituation Themen, die du dir möglicherweise nicht mit jemandem aus der Community, sondern diskret und in der Muttersprache Deutsch besprechen möchtest. Mit einer präsenten und wertfreien Haltung, mit meiner Erfahrung und gleichzeitig Offenheit für das Neue stehe ich dafür zur Verfügung.',
          'Ich bin es gewohnt, online zu arbeiten und auch in dieser Begegnungsform eine tragende Beziehung entstehen zu lassen.',
          'Vielleicht',
        ],
        items: [
          'Gibt es gerade Veränderungen in deinem Umfeld, die dir schwer fallen',
          'Steht eine Klärung in einem bestimmten Lebensbereich an',
          'Spürst du, dass etwas in der Tiefe unerfüllt bleibt, von dem du dir Erfüllung erhofft hast',
          'Hast du Schuldgefühle oder Ressentiments gegenüber jemandem',
          'Gibt es noch unerledigte Dinge in Deutschland, die du mit der Abreise hinter dir gelassen hast und mit denen du dich noch einmal befassen möchtest, um sie ggf. endgültig abschließen zu können',
          'Willst du bestimmte Dinge integrieren und es fällt dir schwer',
          'Willst du ein bisschen Klärung für die Jonglage zweier Welten',
          'Oder du möchtest einfach für eine kurze oder längere Zeit jemanden gegenüber, mit der du offen und ehrlich auf dein Leben blicken kannst und schauen, was sich daraus entfaltet',
        ],
      },
    ],
    cta: 'Erstgespräch vereinbaren',
    related: ['gestalttherapie', 'online-therapie'],
    nav: 'themen',
    navLabel: 'Expats',
  },
  {
    slug: 'niemand-muss-einsam-bleiben',
    title: 'Niemand muss einsam bleiben: Online-Kurs | Kerstin Bonke',
    h1: 'Niemand muss einsam bleiben',
    meta: 'Ein Kurs in fünf Schritten, online: mit den Methoden der Gestalttherapie die ersten Schritte in ein Leben mit den gewünschten Sozialkontakten gehen.',
    heroImage: { src: '/bilder/einsam-stuehle.jpg', alt: 'Zwei verschiedene Stühle nebeneinander in einer Wiese', shape: 3, ratio: '3/2' },
    intro: 'Ein Kurs in fünf Schritten, der online stattfindet.',
    sections: [
      {
        paragraphs: [
          'Fünf Termine, bei denen mit den Methoden der Gestalttherapie die ersten fünf Schritte unternommen werden, in ein Leben mit den gewünschten Sozialkontakten.',
          'Vollkommen individuell ausgerichtet auf das eigene Leben.',
          'Onlinebegegnung 1:1',
          'Kosten für den gesamten Kurs: 380 €. 5 Termine nach individueller Absprache, jeweils 1 Stunde.',
        ],
      },
    ],
    cta: 'Erstgespräch vereinbaren',
    related: ['gestalttherapie', 'online-therapie'],
    nav: 'angebot-extra',
    navLabel: 'Niemand muss einsam bleiben',
  },
  {
    slug: 'mehr-zu-mir',
    title: 'Mehr zu mir | Kerstin Bonke',
    h1: 'Mehr zu mir',
    meta: 'Mehr zu Kerstin Bonke: Haltung, Weg und was mich bewegt.',
    sections: [
      {
        paragraphs: [
          'Geboren 1966 waren die 80er Jahre meine Jugend. Friedensbewegung, Umweltbewegung, Frauenbewegung, Jugendhausbewegung, Weltläden und Bioläden... Damals war viel in Bewegung und Hoffnung wurde in neue Ideen gesetzt.',
          'Ich habe mir die Welt anders gewünscht. Gerechter, respektvoller, friedlicher, offener, heller, lichtvoller, lebendiger und irgendwie leichter.',
          'Zunächst habe ich mich danach an verschiedenen Orten der Welt auf die Suche gemacht. Ziemlich schnell war klar, dass ich im Außen nur finden werde, was ich in mir trage. Mir wurde klar, dass jede*r von uns in jedem Moment die Welt erschafft und schöpferisch beteiligt ist, dass wir nicht Opfer der Umstände sind, sondern dass wir sie bewirken, dass wir eingebunden sind in übergeordnete Zusammenhänge und innerhalb derer unser persönliches Potenzial verwirklichen können, wollen, sollen, dass wir, indem wir uns in den Einklang mit diesen größeren Zusammenhängen begeben, gleichzeitig alles aufgeben und alles erhalten und dass dies jederzeit und in jedem Moment die freie Entscheidung von jeder*m einzelnen ist.',
        ],
        image: { src: '/bilder/portraet-wald.jpg', alt: 'Kerstin Bonke im Wald', shape: 1, ratio: '4/5' },
      },
      {
        h2: 'Was ich mag',
        items: [
          'Ich mag es, dem Großen Ganzen den Raum in mir zu überlassen und durch mich zu wirken.',
          'Ich mag es, dass jedem Menschen frei steht, wie weit er dies tun möchte oder nicht.',
          'Ich mag den Gestaltansatz, der keinen Rahmen um die Menschen legt und in dem es nicht darum geht, die Menschen wieder ins Funktionieren zu bringen, sondern dessen Ansinnen es ist, die Menschen mit dem in Kontakt zu bringen, was in ihnen singt und klingt.',
          'Ich mag die Tatsache, dass dabei nicht von außen festgelegt wird, was richtig oder falsch ist, sondern dieses im Einklang mit der inneren Wahrheit deutlich wird.',
          'Ich mag offene, authentische Begegnung, die allein schon heilende Aspekte hat.',
          'Ich mag Überraschungen und Wunder!',
          'Mir gefällt, dass wir die Welt so unterschiedlich sehen können, wie es Menschen gibt.',
        ],
        image: { src: '/bilder/strand-sw.jpg', alt: 'Kerstin Bonke mit Hund am Ufer, schwarzweiß', shape: 3, ratio: '4/3' },
      },
    ],
    cta: 'Erstgespräch vereinbaren',
    related: ['ueber-mich', 'gestalttherapie'],
  },
  {
    slug: 'ueber-mich',
    title: 'Über Kerstin Bonke, Gestalt- und Paartherapeutin',
    h1: 'Über mich',
    meta: 'Kerstin Bonke: Dipl. Sozialpädagogin, Gestalttherapeutin (DVG), Paartherapeutin, Heilpraktikerin Psychotherapie. Mehr zu Haltung und Werdegang.',
    heroImage: { src: '/bilder/portraet-klippe.jpg', alt: 'Kerstin Bonke am Meer', shape: 1, ratio: '4/5' },
    quote: {
      text: 'Wir sind in unserer Würde unantastbar. Wenn wir uns mit unserer Würde verbinden, sind wir unantastbar. Jeder einzelne Mensch.',
      author: '',
    },
    sections: [
      {
        paragraphs: [
          'In uns Menschen befindet sich eine Kraft, die die Liebe und den Frieden sichtbar macht. Eine Sichtbarmachkraft.',
          'Wir brauchen nicht andere, die uns sagen, wo es lang geht oder nicht. Wir brauchen den Zugang zu unserer Quelle, der Quelle allen Lebens. Diese gibt uns Kraft, Stabilität und Freiheit.',
          'Wenn du diese unabhängige und gleichzeitig mit allem verbundene Kraft in dir noch weiter freilegen willst, bist du hier richtig.',
        ],
        lead: true,
      },
      {
        h2: 'Meine Qualifikationen',
        items: [
          'Dipl. Sozialpädagogin (BA)',
          'Gestalttherapeutin (DVG)',
          'Paartherapeutin (Hans-Jellouschek-Institut)',
          'Heilpraktikerin Psychotherapie',
          'Über 13 Jahre Tätigkeit als Gestalttherapeutin und Paartherapeutin in eigener Praxis in Filderstadt Bernhausen und Stuttgart Plieningen',
          'Viele Jahre Berufserfahrung in Einrichtungen der Eingliederungshilfe und in einem autonomen Frauenhaus (gestalttherapeutische Angebote, Beratung, Krisenintervention)',
          'regelmäßige Supervision',
          'Jahrzehntelange Achtsamkeits- und Meditationspraxis und Fort- und Weiterbildungen in diesem Bereich',
          'Verheiratet, zwei erwachsene Söhne',
        ],
        image: { src: '/bilder/portraet-klippe-seitlich.jpg', alt: 'Kerstin Bonke am Meer, der Wind im Haar', shape: 2, ratio: '1/1' },
      },
      {
        link: { href: '/mehr-zu-mir', label: 'Mehr zu mir' },
      },
      {
        h2: '„Schönheit ist empfundener Rhythmus. Rhythmus der Wellen, durch die uns alles Außen vermittelt wird.“',
        paragraphs: ['Christian Morgenstern'],
        image: { src: '/bilder/wellen.jpg', alt: 'Brandung an der Küste', shape: 2, ratio: '16/9' },
      },
    ],
    cta: 'Erstgespräch vereinbaren',
    related: ['gestalttherapie', 'paartherapie', 'rueckmeldungen'],
    nav: 'main',
    navLabel: 'Über mich',
  },
  {
    slug: 'rueckmeldungen',
    title: 'Rückmeldungen | Kerstin Bonke',
    h1: 'Rückmeldungen',
    meta: 'Rückmeldungen aus der Arbeit mit Kerstin Bonke, Gestalttherapeutin und Paartherapeutin.',
    intro: 'Rückmeldungen von Menschen, mit denen ich arbeiten durfte.',
    sections: [],
    testimonials: rezensionen,
    cta: 'Erstgespräch vereinbaren',
    related: ['ueber-mich'],
  },
  {
    slug: 'links',
    title: 'Links | Kerstin Bonke',
    h1: 'Links',
    meta: 'Weiterführende Links von Kerstin Bonke.',
    sections: [
      {
        links: [
          { href: 'https://psychologe-vaihingen.de', label: 'psychologe-vaihingen.de' },
          { href: 'https://fortbildungen-erfahrbar.de', label: 'fortbildungen-erfahrbar.de' },
          { href: 'https://peter-bonke-fotodesign.de', label: 'peter-bonke-fotodesign.de' },
          { href: 'https://vinculostudio.de', label: 'vinculostudio.de' },
        ],
      },
    ],
    cta: 'Kontakt',
    draft: true,
  },
  {
    slug: 'impressum',
    title: 'Impressum | Kerstin Bonke',
    h1: 'Impressum',
    meta: 'Impressum von Kerstin Bonke Gestalttherapie.',
    intro: '[PRÜFEN: Angaben von der bisherigen Seite übernommen, vor Go-Live auf Vollständigkeit und Richtigkeit prüfen lassen (Berufsbezeichnung, zuständige Behörde, Redaktionell Verantwortliche).]',
    sections: [
      {
        h2: 'Anschrift',
        paragraphs: [`Kerstin Bonke, ${site.strasse}, ${site.plz} ${site.ort}`],
      },
      {
        h2: 'Kontakt',
        paragraphs: [`Telefon: ${site.telefonAnzeige}`, `E-Mail: ${site.email}`],
      },
      {
        h2: 'Umsatzsteuer-ID',
        paragraphs: ['Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: 93027/21121 [PRÜFEN: Das sieht nach einer Steuernummer aus, nicht nach einer USt-IdNr.]'],
      },
      { h2: 'Heilpraktikerprüfung', paragraphs: ['2009 Stuttgart'] },
      { h2: 'Fotos', paragraphs: ['Peter Bonke, peter-bonke-fotodesign.de'] },
      {
        h2: 'Verantwortlich für den Inhalt',
        paragraphs: [`Kerstin Bonke, ${site.strasse}, ${site.plz} ${site.ort}`, '[PRÜFEN: Berufsbezeichnung, zuständige Aufsichtsbehörde und berufsrechtliche Regelungen ergänzen.]'],
      },
      {
        h2: 'Haftung für Inhalte',
        paragraphs: ['Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Die Angebote ersetzen keine ärztliche oder fachärztliche Diagnostik und Behandlung. [PRÜFEN: von fachkundiger Stelle bestätigen lassen]'],
      },
      {
        h2: 'Haftung für Links',
        paragraphs: ['Diese Seite enthält Links zu externen Webseiten Dritter, auf deren Inhalte kein Einfluss besteht. Für diese fremden Inhalte kann daher keine Gewähr übernommen werden. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.'],
      },
      {
        h2: 'Urheberrecht',
        paragraphs: ['Die Texte und Bilder auf diesen Seiten unterliegen dem Urheberrecht. Eine Vervielfältigung oder Verwendung bedarf der vorherigen Zustimmung. Fotos: Peter Bonke.'],
      },
    ],
    cta: 'Kontakt',
    draft: true,
  },
  {
    slug: 'datenschutz',
    title: 'Datenschutz | Kerstin Bonke',
    h1: 'Datenschutzerklärung',
    meta: 'Datenschutzerklärung von Kerstin Bonke Gestalttherapie.',
    intro: '[KLÄREN: Die bisherige Erklärung nennt noch Jimdo und Google Analytics. Neue Erklärung passend zu Hosting (Vercel), Formular (Formward), Schriften und Statistik erstellen lassen.]',
    sections: [],
    cta: 'Kontakt',
    draft: true,
  },
];

export const pageBySlug = (slug: string) => pages.find((p) => p.slug === slug);
export const visiblePages = pages.filter((p) => !p.hidden);
