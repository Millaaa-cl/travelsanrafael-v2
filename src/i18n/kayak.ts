import { kayak, formatCLP } from '../data/tour';

const price = formatCLP(kayak.priceCLP);
const km = kayak.distanceKm;
const hrs = kayak.durationHours;
const paddle = kayak.paddleMinutes;
// Horarios en texto: "06:00, 10:30, 14:00 y 17:30"
const list = (a: string[], and: string) => a.slice(0, -1).join(', ') + ` ${and} ` + a[a.length - 1];
const depEs = list(kayak.departures, 'y');
const depEn = list(kayak.departures, 'and');
const depFr = list(kayak.departures, 'et');
const depPt = list(kayak.departures, 'e');

/**
 * Textos ES/EN/FR/PT del Tour Kayak Capillas de Mármol (KayakView.astro).
 * Confirmado por el cliente: precio por persona, bahía a 5 km del pueblo, salidas, itinerario y qué incluye (20-11-2026).
 * TODO: confirmar edad mínima y temporada.
 */
export const kayakContent = {
  es: {
    name: 'Tour Kayak Capillas de Mármol',
    seo: {
      title: 'Kayak en las Capillas de Mármol desde Puerto Río Tranquilo',
      description: `Rema en kayak entre las cavernas, la Catedral y la Capilla de Mármol en el Lago General Carrera. ${price} por persona, con guía y equipo. Reserva por WhatsApp.`,
    },
    hero: {
      over: 'Kayak en el Lago General Carrera',
      title: 'Kayak en las Capillas de Mármol',
      lead: 'Rema entre cavernas de mármol pulidas por el agua del lago más grande de Chile, con guía local y todo el equipo incluido. No necesitas experiencia previa.',
    },
    keyfacts: { duration: 'Duración aproximada', durationUnit: ' horas', from: 'Desde Puerto Río Tranquilo', fromUnit: ' km', paddle: 'Remando', paddleUnit: ' min', price: 'Precio por persona' },
    perPerson: 'por persona',
    answer: {
      h: '¿Cómo es el tour en kayak a las Capillas de Mármol?',
      p: `Es una salida guiada en kayak por el Lago General Carrera que parte a ${km} km de Puerto Río Tranquilo y recorre las Cavernas, la Catedral y la Capilla de Mármol, formaciones de roca que el agua pulió durante miles de años. Dura unas ${hrs} horas con traslado desde el pueblo, incluye equipo, guía certificado y la entrada al santuario, y cuesta ${price} por persona.`,
    },
    highlights: [
      { icon: 'guide', t: 'Guía certificado', d: 'En español o inglés, con guiado interpretativo' },
      { icon: 'boat', t: 'Equipo y traslado', d: 'Equipo técnico y traslado a la bahía incluidos' },
      { icon: 'pin', t: `A ${km} km del pueblo`, d: 'Muy cerca de Puerto Río Tranquilo' },
      { icon: 'whatsapp', t: 'Reserva directa', d: 'Por WhatsApp, con el equipo que opera el tour' },
    ],
    card: {
      h: 'Reserva tu kayak',
      list: [
        ['Duración', `Aprox. ${hrs} horas`],
        ['Encuentro', 'Agencia Costa Carrera Travel'],
        ['Salidas', depEs],
        ['Precio', `${price} por persona`],
      ],
      cta: 'Reservar por WhatsApp',
      note: 'Te respondemos para confirmar la fecha y el horario. Recomendamos las salidas de la mañana, con el lago más calmo.',
      msg: 'Hola, quiero reservar el Tour Kayak Capillas de Mármol. Fecha: ___ / Horario: ___ / Personas: ___',
    },
    facts: {
      h: 'Información práctica',
      lead: 'Lo que necesitas saber antes de remar.',
      rows: [
        ['Precio', `${price} por persona (adultos y niños)`],
        ['Duración', `Aprox. ${hrs} horas, unos ${paddle} minutos remando`],
        ['Punto de encuentro', `Agencia Costa Carrera Travel, Puerto Río Tranquilo (la bahía está a ${km} km)`],
        ['Salidas', `${depEs} (recomendadas las de la mañana)`],
        ['Experiencia', 'No se necesita experiencia previa'],
        ['Temporada', kayak.season.es],
      ],
    },
    faqH: 'Preguntas frecuentes del kayak',
    faq: [
      { q: '¿Cuánto cuesta el tour en kayak a las Capillas de Mármol?', a: `Cuesta ${price} por persona, el mismo valor para adultos y niños. Incluye el equipo técnico, el traslado a la bahía, la entrada al santuario y el guía certificado.` },
      { q: '¿Desde dónde sale el kayak?', a: `Nos juntamos en la agencia Costa Carrera Travel, en Puerto Río Tranquilo, y te llevamos a la bahía, ${km} km al sur. Hay salidas a las ${depEs}.` },
      { q: '¿Necesito experiencia para remar?', a: 'No. Antes de salir el guía te enseña lo básico y te acompaña durante toda la remada. Basta con tener un estado físico normal.' },
      { q: '¿Cuánto dura?', a: `Unas ${hrs} horas en total, de las cuales unos ${paddle} minutos son remando por las cavernas, la Catedral y la Capilla de Mármol.` },
      { q: '¿Qué pasa si hay viento?', a: 'El Lago General Carrera puede ponerse muy ventoso. Si las condiciones no son seguras, movemos la salida a otro horario o fecha, o te devolvemos el dinero.' },
      { q: '¿Pueden ir niños?', a: 'Sí, acompañados por un adulto y con chaleco salvavidas. Pagan lo mismo que un adulto. Escríbenos por WhatsApp para confirmar la edad mínima.' },
      { q: '¿Qué diferencia hay con el tour a la Laguna San Rafael?', a: 'El kayak es una salida de medio día muy cerca de Puerto Río Tranquilo, remando en el Lago General Carrera. El tour a la Laguna San Rafael es de día completo: viaja 90 km hacia el interior y navega en lancha hasta el glaciar.' },
    ],
    // Acordeón "Detalle de la Actividad" (KayakView): bitácora, qué incluye y equipamiento, con datos del cliente (20-11-2026)
    detail: {
      h: 'Detalle de la Actividad',
      log: {
        t: 'Bitácora',
        meetH: 'Punto de encuentro',
        meet: 'Agencia Costa Carrera Travel, Puerto Río Tranquilo.',
        depH: 'Horarios de salida',
        dawn: 'amanecer',
        rec: 'Recomendado',
        tip: 'Recomendado: salida de la mañana (06:00 o 10:30). Por la mañana el lago suele estar más calmo, con menos viento, y la luz realza los colores del mármol.',
        stepsH: 'Itinerario de referencia (salida 06:00)',
        steps: [
          ['06:00', 'Comienza la experiencia desde la agencia Costa Carrera Travel, 5 km al sur por la Carretera Austral.'],
          ['06:20', 'Llegada a la bahía, revisión de equipo, charla de seguridad e inducción al kayak, recomendaciones y recorrido.'],
          ['06:50', 'Entramos al agua; comienza la experiencia de conexión con el entorno natural que nos rodea.'],
          ['08:20', 'Luego de remar por la Capilla, la Catedral y la Caverna de Mármol, retornamos a la playa y luego a Puerto Río Tranquilo.'],
          ['09:00', 'Llegada a la agencia Costa Carrera Travel, intercambio de fotografías, agradecimientos y despedida.'],
        ],
      },
      inc: {
        t: '¿Qué incluye?',
        items: [
          'Equipo técnico profesional (cortavientos, chaleco salvavidas, remos, faldón).',
          `Traslados: Puerto Río Tranquilo ↔ Bahía (${km} km).`,
          'Entrada al Santuario de la Naturaleza Capilla de Mármol.',
          'Guía certificado, idiomas español/inglés.',
          'Guiado interpretativo.',
        ],
        noH: 'No incluye',
        no: ['Alimentación', 'Alojamiento', 'Propinas', 'Gastos personales'],
      },
      gear: {
        t: 'Equipamiento recomendado',
        items: ['Lentes para sol con filtro UV.', 'Bloqueador solar FPS 50+.', 'Ropa ligera y/o ropa de cambio.'],
      },
    },
    gallery: { h: 'Fotos del tour en kayak', lead: 'Fotos reales de nuestras salidas. Toca una para verla en grande.' },
    other: { h: 'Otros tours', lagunaT: 'Tour Full Day Laguna San Rafael', lagunaD: 'Navega entre icebergs hasta el frente del Glaciar San Rafael, con desayuno, almuerzo y whisky con hielo milenario.', link: 'Ver el tour' },
    // Bloque corto bajo el collage de la home (Sections.astro, solo con withBooking)
    promoHome: { h: 'Suma una experiencia en kayak a las Capillas de Mármol', p: `Remada guiada entre cavernas de mármol, a ${km} km de Puerto Río Tranquilo. Sin experiencia previa.`, price: `${price} por persona`, link: 'Conoce el tour en kayak' },
    cardHome: { t: 'Kayak Capillas de Mármol', d: `Rema entre cavernas de mármol en el Lago General Carrera, a ${km} km de Puerto Río Tranquilo. ${price} por persona.`, link: 'Ver el tour en kayak' },
  },

  en: {
    name: 'Marble Caves Kayak Tour',
    seo: {
      title: 'Marble Caves Kayak Tour from Puerto Río Tranquilo',
      description: `Paddle among the Marble Caves, Cathedral and Chapel on Lake General Carrera. ${price} per person, guide and gear included. Book on WhatsApp.`,
    },
    hero: {
      over: 'Kayaking on Lake General Carrera',
      title: 'Kayaking the Marble Caves',
      lead: 'Paddle through marble caves polished by the water of Chile’s largest lake, with a local guide and all the gear included. No previous experience needed.',
    },
    keyfacts: { duration: 'Approximate duration', durationUnit: ' hours', from: 'From Puerto Río Tranquilo', fromUnit: ' km', paddle: 'Paddling', paddleUnit: ' min', price: 'Price per person' },
    perPerson: 'per person',
    answer: {
      h: 'What is the Marble Caves kayak tour like?',
      p: `It is a guided kayak trip on Lake General Carrera that starts ${km} km from Puerto Río Tranquilo and explores the Marble Caves, the Marble Cathedral and the Marble Chapel, rock formations shaped by the water over thousands of years. It takes about ${hrs} hours including the transfer from town, includes gear, a certified guide and the sanctuary entrance, and costs ${price} per person.`,
    },
    highlights: [
      { icon: 'guide', t: 'Certified guide', d: 'In Spanish or English, with interpretive guiding' },
      { icon: 'boat', t: 'Gear and transfer', d: 'Technical gear and transfer to the bay included' },
      { icon: 'pin', t: `${km} km from town`, d: 'Right next to Puerto Río Tranquilo' },
      { icon: 'whatsapp', t: 'Book direct', d: 'On WhatsApp, with the team that runs the tour' },
    ],
    card: {
      h: 'Book your kayak',
      list: [
        ['Duration', `Approx. ${hrs} hours`],
        ['Meeting point', 'Costa Carrera Travel agency'],
        ['Departures', depEn],
        ['Price', `${price} per person`],
      ],
      cta: 'Book on WhatsApp',
      note: 'We reply to confirm the date and time. We recommend the morning departures, when the lake is calmer.',
      msg: 'Hi, I would like to book the Marble Caves Kayak Tour. Date: ___ / Time: ___ / People: ___',
    },
    facts: {
      h: 'Practical information',
      lead: 'What you need to know before you paddle.',
      rows: [
        ['Price', `${price} per person (adults and children)`],
        ['Duration', `Approx. ${hrs} hours, about ${paddle} minutes paddling`],
        ['Meeting point', `Costa Carrera Travel agency, Puerto Río Tranquilo (the bay is ${km} km away)`],
        ['Departures', `${depEn} (morning ones recommended)`],
        ['Experience', 'No previous experience needed'],
        ['Season', kayak.season.en],
      ],
    },
    faqH: 'Kayak FAQ',
    faq: [
      { q: 'How much does the Marble Caves kayak tour cost?', a: `It costs ${price} per person, the same for adults and children. Technical gear, the transfer to the bay, the sanctuary entrance and a certified guide are included.` },
      { q: 'Where does the kayak tour start?', a: `We meet at the Costa Carrera Travel agency in Puerto Río Tranquilo and drive you to the bay, ${km} km south. Departures are at ${depEn}.` },
      { q: 'Do I need kayaking experience?', a: 'No. Before setting off the guide teaches you the basics and stays with you for the whole paddle. Normal fitness is enough.' },
      { q: 'How long does it take?', a: `About ${hrs} hours in total, roughly ${paddle} minutes of them paddling through the caves, the Marble Cathedral and the Marble Chapel.` },
      { q: 'What if it is windy?', a: 'Lake General Carrera can get very windy. If conditions are not safe, we move the trip to another time or date, or refund your money.' },
      { q: 'Can children join?', a: 'Yes, accompanied by an adult and wearing a life vest. They pay the same as adults. Message us on WhatsApp to confirm the minimum age.' },
      { q: 'How is it different from the San Rafael Lagoon tour?', a: 'The kayak is a half-day trip right next to Puerto Río Tranquilo, paddling on Lake General Carrera. The San Rafael Lagoon tour is a full day: it drives 90 km inland and sails by boat to the glacier.' },
    ],
    detail: {
      h: 'Activity details',
      log: {
        t: 'Logbook',
        meetH: 'Meeting point',
        meet: 'Costa Carrera Travel agency, Puerto Río Tranquilo.',
        depH: 'Departure times',
        dawn: 'sunrise',
        rec: 'Recommended',
        tip: 'Recommended: a morning departure (06:00 or 10:30). In the morning the lake is usually calmer, with less wind, and the light brings out the colours of the marble.',
        stepsH: 'Sample itinerary (06:00 departure)',
        steps: [
          ['06:00', 'The experience begins at the Costa Carrera Travel agency, 5 km south along the Carretera Austral.'],
          ['06:20', 'Arrival at the bay: gear check, safety briefing and kayak induction, tips and route overview.'],
          ['06:50', 'We get on the water and start connecting with the natural surroundings.'],
          ['08:20', 'After paddling the Marble Chapel, Cathedral and Cave, we return to the beach and then to Puerto Río Tranquilo.'],
          ['09:00', 'Back at the Costa Carrera Travel agency: photo sharing, thanks and farewell.'],
        ],
      },
      inc: {
        t: 'What is included?',
        items: [
          'Professional technical gear (windbreaker, life vest, paddles, spray skirt).',
          `Transfers: Puerto Río Tranquilo ↔ the bay (${km} km).`,
          'Entrance to the Capilla de Mármol Nature Sanctuary.',
          'Certified guide, Spanish/English.',
          'Interpretive guiding.',
        ],
        noH: 'Not included',
        no: ['Food', 'Accommodation', 'Tips', 'Personal expenses'],
      },
      gear: {
        t: 'Recommended gear',
        items: ['Sunglasses with UV protection.', 'SPF 50+ sunscreen.', 'Light clothing and/or a change of clothes.'],
      },
    },
    gallery: { h: 'Kayak tour photos', lead: 'Real photos from our trips. Tap one to see it full size.' },
    other: { h: 'Other tours', lagunaT: 'San Rafael Lagoon Full-Day Tour', lagunaD: 'Sail among icebergs to the front of the San Rafael Glacier, with breakfast, lunch and whisky on ancient glacier ice.', link: 'See the tour' },
    promoHome: { h: 'Add a kayak experience at the Marble Caves', p: `A guided paddle among marble caves, ${km} km from Puerto Río Tranquilo. No experience needed.`, price: `${price} per person`, link: 'See the kayak tour' },
    cardHome: { t: 'Marble Caves kayak', d: `Paddle among marble caves on Lake General Carrera, ${km} km from Puerto Río Tranquilo. ${price} per person.`, link: 'See the kayak tour' },
  },

  fr: {
    name: 'Excursion en kayak aux Chapelles de Marbre',
    seo: {
      title: 'Kayak aux Chapelles de Marbre depuis Puerto Río Tranquilo',
      description: `Pagayez entre les grottes, la Cathédrale et la Chapelle de Marbre sur le lac General Carrera. ${price} par personne, guide et équipement inclus. Réservez sur WhatsApp.`,
    },
    hero: {
      over: 'Kayak sur le lac General Carrera',
      title: 'Kayak aux Chapelles de Marbre',
      lead: 'Pagayez entre des grottes de marbre polies par l’eau du plus grand lac du Chili, avec un guide local et tout l’équipement inclus. Aucune expérience requise.',
    },
    keyfacts: { duration: 'Durée approximative', durationUnit: ' heures', from: 'Depuis Puerto Río Tranquilo', fromUnit: ' km', paddle: 'En kayak', paddleUnit: ' min', price: 'Prix par personne' },
    perPerson: 'par personne',
    answer: {
      h: 'Comment se déroule l’excursion en kayak aux Chapelles de Marbre ?',
      p: `C’est une sortie guidée en kayak sur le lac General Carrera, au départ d’une baie située à ${km} km de Puerto Río Tranquilo, qui explore les Grottes, la Cathédrale et la Chapelle de Marbre, des formations rocheuses sculptées par l’eau pendant des milliers d’années. Elle dure environ ${hrs} heures transfert compris, inclut l’équipement, un guide certifié et l’entrée du sanctuaire, et coûte ${price} par personne.`,
    },
    highlights: [
      { icon: 'guide', t: 'Guide certifié', d: 'En espagnol ou en anglais, avec interprétation du milieu' },
      { icon: 'boat', t: 'Équipement et transfert', d: 'Équipement technique et transfert jusqu’à la baie inclus' },
      { icon: 'pin', t: `À ${km} km du village`, d: 'Tout près de Puerto Río Tranquilo' },
      { icon: 'whatsapp', t: 'Réservation directe', d: 'Sur WhatsApp, avec l’équipe qui opère la sortie' },
    ],
    card: {
      h: 'Réservez votre kayak',
      list: [
        ['Durée', `Environ ${hrs} heures`],
        ['Rendez-vous', 'Agence Costa Carrera Travel'],
        ['Départs', depFr],
        ['Prix', `${price} par personne`],
      ],
      cta: 'Réserver sur WhatsApp',
      note: 'Nous vous répondons pour confirmer la date et l’horaire. Nous recommandons les départs du matin, quand le lac est plus calme.',
      msg: 'Bonjour, je souhaite réserver l’excursion en kayak aux Chapelles de Marbre. Date : ___ / Horaire : ___ / Personnes : ___',
    },
    facts: {
      h: 'Informations pratiques',
      lead: 'Ce qu’il faut savoir avant de pagayer.',
      rows: [
        ['Prix', `${price} par personne (adultes et enfants)`],
        ['Durée', `Environ ${hrs} heures, dont ${paddle} minutes de kayak`],
        ['Point de rendez-vous', `Agence Costa Carrera Travel, Puerto Río Tranquilo (la baie est à ${km} km)`],
        ['Départs', `${depFr} (ceux du matin sont recommandés)`],
        ['Expérience', 'Aucune expérience requise'],
        ['Saison', kayak.season.fr],
      ],
    },
    faqH: 'Questions fréquentes sur le kayak',
    faq: [
      { q: 'Combien coûte l’excursion en kayak aux Chapelles de Marbre ?', a: `Elle coûte ${price} par personne, le même prix pour les adultes et les enfants. L’équipement technique, le transfert jusqu’à la baie, l’entrée du sanctuaire et le guide certifié sont inclus.` },
      { q: 'D’où part le kayak ?', a: `Le rendez-vous est à l’agence Costa Carrera Travel, à Puerto Río Tranquilo, et nous vous emmenons à la baie, ${km} km au sud. Les départs ont lieu à ${depFr}.` },
      { q: 'Faut-il de l’expérience en kayak ?', a: 'Non. Avant le départ, le guide vous enseigne les bases et vous accompagne pendant toute la sortie. Une condition physique normale suffit.' },
      { q: 'Combien de temps dure la sortie ?', a: `Environ ${hrs} heures au total, dont près de ${paddle} minutes à pagayer entre les grottes, la Cathédrale et la Chapelle de Marbre.` },
      { q: 'Que se passe-t-il s’il y a du vent ?', a: 'Le lac General Carrera peut être très venteux. Si les conditions ne sont pas sûres, nous déplaçons la sortie à un autre horaire ou à une autre date, ou nous vous remboursons.' },
      { q: 'Les enfants peuvent-ils venir ?', a: 'Oui, accompagnés d’un adulte et avec un gilet de sauvetage. Ils paient le même prix qu’un adulte. Écrivez-nous sur WhatsApp pour confirmer l’âge minimum.' },
      { q: 'Quelle différence avec l’excursion à la lagune San Rafael ?', a: 'Le kayak est une sortie d’une demi-journée tout près de Puerto Río Tranquilo, sur le lac General Carrera. L’excursion à la lagune San Rafael dure une journée entière : elle parcourt 90 km vers l’intérieur et navigue en bateau jusqu’au glacier.' },
    ],
    detail: {
      h: 'Détails de l’activité',
      log: {
        t: 'Carnet de bord',
        meetH: 'Point de rendez-vous',
        meet: 'Agence Costa Carrera Travel, Puerto Río Tranquilo.',
        depH: 'Horaires de départ',
        dawn: 'lever du soleil',
        rec: 'Recommandé',
        tip: 'Recommandé : un départ le matin (06:00 ou 10:30). Le matin, le lac est généralement plus calme, avec moins de vent, et la lumière fait ressortir les couleurs du marbre.',
        stepsH: 'Itinéraire type (départ à 06:00)',
        steps: [
          ['06:00', 'L’expérience commence à l’agence Costa Carrera Travel ; nous parcourons 5 km vers le sud par la Carretera Austral.'],
          ['06:20', 'Arrivée à la baie : vérification de l’équipement, consignes de sécurité, initiation au kayak, conseils et présentation du parcours.'],
          ['06:50', 'Mise à l’eau : l’expérience de connexion avec la nature qui nous entoure commence.'],
          ['08:20', 'Après avoir pagayé autour de la Chapelle, de la Cathédrale et de la Grotte de Marbre, retour à la plage puis à Puerto Río Tranquilo.'],
          ['09:00', 'Arrivée à l’agence Costa Carrera Travel : échange de photos, remerciements et au revoir.'],
        ],
      },
      inc: {
        t: 'Qu’est-ce qui est inclus ?',
        items: [
          'Équipement technique professionnel (coupe-vent, gilet de sauvetage, pagaies, jupe).',
          `Transferts : Puerto Río Tranquilo ↔ baie (${km} km).`,
          'Entrée au Sanctuaire de la nature Capilla de Mármol.',
          'Guide certifié, en espagnol ou en anglais.',
          'Interprétation du milieu naturel.',
        ],
        noH: 'Non inclus',
        no: ['Repas', 'Hébergement', 'Pourboires', 'Dépenses personnelles'],
      },
      gear: {
        t: 'Équipement recommandé',
        items: ['Lunettes de soleil avec filtre UV.', 'Crème solaire SPF 50+.', 'Vêtements légers et/ou de rechange.'],
      },
    },
    gallery: { h: 'Photos de l’excursion en kayak', lead: 'De vraies photos de nos sorties. Touchez-en une pour l’agrandir.' },
    other: { h: 'Autres excursions', lagunaT: 'Excursion d’une journée à la lagune San Rafael', lagunaD: 'Naviguez parmi les icebergs jusqu’au front du glacier San Rafael, avec petit-déjeuner, déjeuner et whisky sur glace millénaire.', link: 'Voir l’excursion' },
    promoHome: { h: 'Ajoutez une expérience en kayak aux Chapelles de Marbre', p: `Sortie guidée entre des grottes de marbre, à ${km} km de Puerto Río Tranquilo. Aucune expérience requise.`, price: `${price} par personne`, link: 'Découvrir l’excursion en kayak' },
    cardHome: { t: 'Kayak aux Chapelles de Marbre', d: `Pagayez entre les grottes de marbre du lac General Carrera, à ${km} km de Puerto Río Tranquilo. ${price} par personne.`, link: 'Voir l’excursion en kayak' },
  },

  pt: {
    name: 'Passeio de Caiaque nas Capelas de Mármore',
    seo: {
      title: 'Caiaque nas Capelas de Mármore saindo de Puerto Río Tranquilo',
      description: `Reme entre as cavernas, a Catedral e a Capela de Mármore no Lago General Carrera. ${price} por pessoa, com guia e equipamento. Reserve pelo WhatsApp.`,
    },
    hero: {
      over: 'Caiaque no Lago General Carrera',
      title: 'Caiaque nas Capelas de Mármore',
      lead: 'Reme entre cavernas de mármore polidas pela água do maior lago do Chile, com guia local e todo o equipamento incluído. Não precisa de experiência.',
    },
    keyfacts: { duration: 'Duração aproximada', durationUnit: ' horas', from: 'Desde Puerto Río Tranquilo', fromUnit: ' km', paddle: 'Remando', paddleUnit: ' min', price: 'Preço por pessoa' },
    perPerson: 'por pessoa',
    answer: {
      h: 'Como é o passeio de caiaque nas Capelas de Mármore?',
      p: `É uma saída guiada de caiaque pelo Lago General Carrera, a partir de uma baía a ${km} km de Puerto Río Tranquilo, que percorre as Cavernas, a Catedral e a Capela de Mármore, formações rochosas esculpidas pela água ao longo de milhares de anos. Dura cerca de ${hrs} horas com o traslado, inclui equipamento, guia certificado e a entrada do santuário, e custa ${price} por pessoa.`,
    },
    highlights: [
      { icon: 'guide', t: 'Guia certificado', d: 'Em espanhol ou inglês, com guiamento interpretativo' },
      { icon: 'boat', t: 'Equipamento e traslado', d: 'Equipamento técnico e traslado até a baía incluídos' },
      { icon: 'pin', t: `A ${km} km da cidade`, d: 'Bem perto de Puerto Río Tranquilo' },
      { icon: 'whatsapp', t: 'Reserva direta', d: 'Pelo WhatsApp, com a equipe que opera o passeio' },
    ],
    card: {
      h: 'Reserve seu caiaque',
      list: [
        ['Duração', `Aprox. ${hrs} horas`],
        ['Encontro', 'Agência Costa Carrera Travel'],
        ['Saídas', depPt],
        ['Preço', `${price} por pessoa`],
      ],
      cta: 'Reservar pelo WhatsApp',
      note: 'Respondemos para confirmar a data e o horário. Recomendamos as saídas da manhã, com o lago mais calmo.',
      msg: 'Olá, quero reservar o passeio de caiaque nas Capelas de Mármore. Data: ___ / Horário: ___ / Pessoas: ___',
    },
    facts: {
      h: 'Informações práticas',
      lead: 'O que você precisa saber antes de remar.',
      rows: [
        ['Preço', `${price} por pessoa (adultos e crianças)`],
        ['Duração', `Aprox. ${hrs} horas, cerca de ${paddle} minutos remando`],
        ['Ponto de encontro', `Agência Costa Carrera Travel, Puerto Río Tranquilo (a baía fica a ${km} km)`],
        ['Saídas', `${depPt} (recomendamos as da manhã)`],
        ['Experiência', 'Não precisa de experiência'],
        ['Temporada', kayak.season.pt],
      ],
    },
    faqH: 'Perguntas frequentes sobre o caiaque',
    faq: [
      { q: 'Quanto custa o passeio de caiaque nas Capelas de Mármore?', a: `Custa ${price} por pessoa, o mesmo valor para adultos e crianças. Inclui o equipamento técnico, o traslado até a baía, a entrada do santuário e o guia certificado.` },
      { q: 'De onde sai o caiaque?', a: `O encontro é na agência Costa Carrera Travel, em Puerto Río Tranquilo, e levamos você até a baía, ${km} km ao sul. Há saídas às ${depPt}.` },
      { q: 'Preciso de experiência para remar?', a: 'Não. Antes de sair o guia ensina o básico e acompanha você durante toda a remada. Basta ter um condicionamento físico normal.' },
      { q: 'Quanto tempo dura?', a: `Cerca de ${hrs} horas no total, das quais uns ${paddle} minutos são remando pelas cavernas, pela Catedral e pela Capela de Mármore.` },
      { q: 'E se ventar?', a: 'O Lago General Carrera pode ficar muito ventoso. Se as condições não forem seguras, mudamos a saída para outro horário ou data, ou devolvemos o seu dinheiro.' },
      { q: 'Crianças podem ir?', a: 'Sim, acompanhadas por um adulto e com colete salva-vidas. Pagam o mesmo que um adulto. Escreva para nós pelo WhatsApp para confirmar a idade mínima.' },
      { q: 'Qual a diferença para o passeio à Laguna San Rafael?', a: 'O caiaque é uma saída de meio dia bem perto de Puerto Río Tranquilo, remando no Lago General Carrera. O passeio à Laguna San Rafael é de dia inteiro: percorre 90 km rumo ao interior e navega de lancha até o glaciar.' },
    ],
    detail: {
      h: 'Detalhes da atividade',
      log: {
        t: 'Diário de bordo',
        meetH: 'Ponto de encontro',
        meet: 'Agência Costa Carrera Travel, Puerto Río Tranquilo.',
        depH: 'Horários de saída',
        dawn: 'nascer do sol',
        rec: 'Recomendado',
        tip: 'Recomendado: saída pela manhã (06:00 ou 10:30). De manhã o lago costuma estar mais calmo, com menos vento, e a luz realça as cores do mármore.',
        stepsH: 'Roteiro de referência (saída às 06:00)',
        steps: [
          ['06:00', 'A experiência começa na agência Costa Carrera Travel; seguimos 5 km ao sul pela Carretera Austral.'],
          ['06:20', 'Chegada à baía: revisão do equipamento, instruções de segurança e introdução ao caiaque, recomendações e percurso.'],
          ['06:50', 'Entramos na água; começa a experiência de conexão com a natureza ao nosso redor.'],
          ['08:20', 'Depois de remar pela Capela, pela Catedral e pela Caverna de Mármore, voltamos à praia e depois a Puerto Río Tranquilo.'],
          ['09:00', 'Chegada à agência Costa Carrera Travel: troca de fotos, agradecimentos e despedida.'],
        ],
      },
      inc: {
        t: 'O que está incluído?',
        items: [
          'Equipamento técnico profissional (corta-vento, colete salva-vidas, remos, saia).',
          `Traslados: Puerto Río Tranquilo ↔ baía (${km} km).`,
          'Entrada no Santuário da Natureza Capilla de Mármol.',
          'Guia certificado, em espanhol ou inglês.',
          'Guiamento interpretativo.',
        ],
        noH: 'Não inclui',
        no: ['Alimentação', 'Hospedagem', 'Gorjetas', 'Despesas pessoais'],
      },
      gear: {
        t: 'Equipamento recomendado',
        items: ['Óculos de sol com filtro UV.', 'Protetor solar FPS 50+.', 'Roupas leves e/ou roupa para trocar.'],
      },
    },
    gallery: { h: 'Fotos do passeio de caiaque', lead: 'Fotos reais das nossas saídas. Toque em uma para ampliar.' },
    other: { h: 'Outros passeios', lagunaT: 'Passeio de dia inteiro à Laguna San Rafael', lagunaD: 'Navegue entre icebergs até a frente do Glaciar San Rafael, com café da manhã, almoço e uísque com gelo milenar.', link: 'Ver o passeio' },
    promoHome: { h: 'Inclua uma experiência de caiaque nas Capelas de Mármore', p: `Remada guiada entre cavernas de mármore, a ${km} km de Puerto Río Tranquilo. Não precisa de experiência.`, price: `${price} por pessoa`, link: 'Conheça o passeio de caiaque' },
    cardHome: { t: 'Caiaque nas Capelas de Mármore', d: `Reme entre cavernas de mármore no Lago General Carrera, a ${km} km de Puerto Río Tranquilo. ${price} por pessoa.`, link: 'Ver o passeio de caiaque' },
  },
};
