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
    heroImage: { src: '/bilder/angebot-meer.jpg', alt: 'Wellen brechen an dunklen Felsen im Meer', shape: 3, ratio: '1/1' },
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
    heroImage: { src: '/bilder/ausrichtung-spirale.jpg', alt: 'Konzentrische schwarz-weiße Kreise auf einem Stein', shape: 2, ratio: '4/3' }, // TODO: Adlerbild (Original ohne Text) von Kerstin, falls gewünscht
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
          { href: 'https://www.fortbildungen-erfahrbar.de', label: 'Fortbildungen erfahrbar (fortbildungen-erfahrbar.de)' },
          { href: 'https://www.psychologe-vaihingen.de', label: 'Thomas Janotta-Tsaknis (psychologe-vaihingen.de)' },
          { href: 'https://www.peter-bonke-fotodesign.de', label: 'Peter Bonke, Fotodesign (peter-bonke-fotodesign.de)' },
          { href: 'https://vinculostudio.de', label: 'Vinculo Studio (vinculostudio.de)' },
          { href: 'https://www.instagram.com/kerstinbonke/', label: 'Instagram (@kerstinbonke)' },
        ],
      },
      {
        h2: 'Weitere Profile',
        links: [
          { href: 'https://www.therapie.de/profil/bonke/', label: 'Profil auf therapie.de' },
        ],
      },
    ],
    cta: 'Kontakt',
    draft: false,
  },
  {
    slug: 'impressum',
    title: 'Impressum | Kerstin Bonke',
    h1: 'Impressum',
    meta: 'Impressum von Kerstin Bonke Gestalttherapie.',
    // PRÜFEN vor Go-Live mit Kundin: Angaben von alter Seite übernommen (Berufsbezeichnung, Aufsichtsbehörde, Verantwortliche)
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
        paragraphs: ['Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: 93027/21121'], // PRÜFEN: sieht nach Steuernummer aus, nicht nach USt-IdNr.
      },
      { h2: 'Heilpraktikerprüfung', paragraphs: ['2009 Stuttgart'] },
      { h2: 'Fotos', paragraphs: ['Peter Bonke, peter-bonke-fotodesign.de'] },
      {
        h2: 'Verantwortlich für den Inhalt',
        paragraphs: [`Kerstin Bonke, ${site.strasse}, ${site.plz} ${site.ort}`], // PRÜFEN: Berufsbezeichnung, Aufsichtsbehörde ergänzen
      },
      {
        h2: 'Haftung für Inhalte',
        paragraphs: ['Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Die Angebote ersetzen keine ärztliche oder fachärztliche Diagnostik und Behandlung.'], // PRÜFEN: fachkundig bestätigen lassen
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
    draft: false,
  },
  {
    slug: 'datenschutz',
    title: 'Datenschutz | Kerstin Bonke',
    h1: 'Datenschutzerklärung',
    meta: 'Datenschutzerklärung von Kerstin Bonke Gestalttherapie.',
    // Quelle: eRecht24-Generator (PDF in 03-material-kunde), Formward-Absatz ergänzt
    sections: [
      {
        h2: 'Datenschutz auf einen Blick',
        paragraphs: [
          '### Allgemeine Hinweise',
          'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.',
          '### Datenerfassung auf dieser Website',
          '#### Wer ist verantwortlich für die Datenerfassung auf dieser Website?',
          'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.',
          '#### Wie erfassen wir Ihre Daten?',
          'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.',
          'Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.',
          '#### Wofür nutzen wir Ihre Daten?',
          'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.',
          '#### Welche Rechte haben Sie bezüglich Ihrer Daten?',
          'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.',
          'Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.',
        ],
      },
      {
        h2: 'Hosting',
        paragraphs: [
          'Wir hosten die Inhalte unserer Website bei folgendem Anbieter:',
          '### Externes Hosting',
          'Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.',
          'Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.',
          'Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.',
          'Wir setzen folgende(n) Hoster ein:',
          'Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA',
        ],
      },
      {
        h2: 'Allgemeine Hinweise und Pflichtinformationen',
        paragraphs: [
          '### Datenschutz',
          'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.',
          'Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.',
          'Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.',
          '### Hinweis zur verantwortlichen Stelle',
          'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:',
          'Kerstin Bonke',
          'Leypoldtstraße 11, 70599 Stuttgart',
          'Telefon: 0176 312 483 97',
          'E-Mail: kontakt@kerstinbonke.de',
          'Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.',
          '### Speicherdauer',
          'Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.',
          '### Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website',
          'Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind, auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.',
          '### Empfänger von personenbezogenen Daten',
          'Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.',
          '### Widerruf Ihrer Einwilligung zur Datenverarbeitung',
          'Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.',
          '### Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)',
          'WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).',
          'WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).',
          '### Beschwerderecht bei der zuständigen Aufsichtsbehörde',
          'Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.',
          '### Recht auf Datenübertragbarkeit',
          'Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.',
          '### Auskunft, Berichtigung und Löschung',
          'Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.',
          '### Recht auf Einschränkung der Verarbeitung',
          'Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:',
          '* Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
          '* Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.',
          '* Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
          '* Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
          'Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.',
          '### SSL- bzw. TLS-Verschlüsselung',
          'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.',
          'Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.',
        ],
      },
      {
        h2: 'Datenerfassung auf dieser Website',
        paragraphs: [
          '### Server-Log-Dateien',
          'Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:',
          '* Browsertyp und Browserversion',
          '* verwendetes Betriebssystem',
          '* Referrer URL',
          '* Hostname des zugreifenden Rechners',
          '* Uhrzeit der Serveranfrage',
          '* IP-Adresse',
          'Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.',
          'Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.',
          '### Kontaktformular',
          'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
          'Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.',
          'Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.',
          '### Formular-Dienst Formward',
          'Das Kontaktformular wird über den externen Dienst Formward bereitgestellt. Wenn Sie das Formular absenden, werden die von Ihnen eingegebenen Angaben (Name, E-Mail-Adresse, ggf. Telefonnummer und Ihre Nachricht) zur Entgegennahme und Weiterleitung an uns an Formward übermittelt und dort verarbeitet.',
          'Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Durchführung vorvertraglicher Maßnahmen zusammenhängt, andernfalls auf Grundlage unseres berechtigten Interesses an einer effektiven Bearbeitung von Anfragen (Art. 6 Abs. 1 lit. f DSGVO). Mit dem Anbieter besteht ein Vertrag über Auftragsverarbeitung gemäß Art. 28 DSGVO.',
          '### Anfrage per E-Mail, Telefon oder Telefax',
          'Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
          'Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.',
          'Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.',
        ],
      },
    ],
    cta: 'Kontakt',
    draft: false,
  },
];

export const pageBySlug = (slug: string) => pages.find((p) => p.slug === slug);
export const visiblePages = pages.filter((p) => !p.hidden);
