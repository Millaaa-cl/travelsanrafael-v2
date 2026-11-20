import { kayak, formatCLP } from '../data/tour';

const price = formatCLP(kayak.priceCLP);
const km = kayak.distanceKm;
const hrs = kayak.durationHours;
const paddle = kayak.paddleHours;

/**
 * Textos ES/EN del Tour Kayak Capillas de Mármol (KayakView.astro).
 * Confirmado por el cliente: precio por persona y punto de partida a 5 km del pueblo.
 * TODO: confirmar con el cliente duración, horarios, itinerario, qué incluye y edad mínima (hoy son una propuesta).
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
    keyfacts: { duration: 'Duración aproximada', durationUnit: ' horas', from: 'Desde Puerto Río Tranquilo', fromUnit: ' km', paddle: 'Remando', paddleUnit: ' horas', price: 'Precio por persona' },
    perPerson: 'por persona',
    answer: {
      h: '¿Cómo es el tour en kayak a las Capillas de Mármol?',
      p: `Es una salida guiada en kayak por el Lago General Carrera que parte a ${km} km de Puerto Río Tranquilo y recorre las Cavernas, la Catedral y la Capilla de Mármol, formaciones de roca que el agua pulió durante miles de años. Dura unas ${hrs} horas, incluye kayak, equipo y guía, y cuesta ${price} por persona.`,
    },
    highlights: [
      { icon: 'guide', t: 'Guía local', d: 'Conoce el lago, el viento y cada caverna' },
      { icon: 'boat', t: 'Kayak y equipo', d: 'Kayak, remo y chaleco salvavidas incluidos' },
      { icon: 'pin', t: `A ${km} km del pueblo`, d: 'Muy cerca de Puerto Río Tranquilo' },
      { icon: 'whatsapp', t: 'Reserva directa', d: 'Por WhatsApp, con el equipo que opera el tour' },
    ],
    card: {
      h: 'Reserva tu kayak',
      list: [
        ['Duración', `Aprox. ${hrs} horas`],
        ['Salida', `A ${km} km de Puerto Río Tranquilo`],
        ['Horario', 'A coordinar por WhatsApp, según el viento'],
        ['Precio', `${price} por persona`],
      ],
      cta: 'Reservar por WhatsApp',
      note: 'Te respondemos para confirmar la fecha, el horario y el punto de encuentro.',
      msg: 'Hola, quiero reservar el Tour Kayak Capillas de Mármol. Fecha: ___ / Personas: ___',
    },
    itinerary: {
      h: 'Así es la salida',
      intro: 'Los tiempos son aproximados: en el lago manda el viento, y el guía ajusta la ruta para que la remada sea segura.',
      steps: [
        { time: 'Inicio', t: 'Encuentro y traslado', d: `Nos juntamos en Puerto Río Tranquilo y vamos al punto de partida, a ${km} km del pueblo, a orillas del Lago General Carrera.` },
        { time: '20 min', t: 'Equipo y charla de seguridad', d: 'Te entregamos el kayak, el remo y el chaleco, y el guía explica cómo remar y cómo moverse cerca de la roca.' },
        { time: `${paddle} h`, t: 'Remada por las Capillas de Mármol', d: 'Entramos a las cavernas y bordeamos la Catedral y la Capilla de Mármol, con paradas para mirar los reflejos turquesa y tomar fotos.' },
        { time: 'Final', t: 'Regreso', d: 'Volvemos al punto de partida, guardamos el equipo y regresamos a Puerto Río Tranquilo.' },
      ],
    },
    includes: {
      h: 'Qué incluye y qué no',
      yesH: 'Incluye',
      noH: 'No incluye',
      yes: ['Kayak y remo', 'Chaleco salvavidas', 'Guía local', 'Charla de seguridad e instrucción básica de remo'],
      no: ['Alimentación', 'Alojamiento', 'Propinas', 'Gastos personales'],
    },
    bring: {
      h: 'Qué llevar',
      items: ['Ropa de secado rápido (evita el algodón)', 'Una capa abrigada y un cortaviento', 'Gorro y lentes de sol con cordón', 'Protector solar', 'Una muda de ropa seca para el regreso', 'Bolsa estanca o funda para el celular'],
    },
    facts: {
      h: 'Información práctica',
      lead: 'Lo que necesitas saber antes de remar.',
      rows: [
        ['Precio', `${price} por persona (adultos y niños)`],
        ['Duración', `Aprox. ${hrs} horas, unas ${paddle} remando`],
        ['Punto de partida', `A ${km} km de Puerto Río Tranquilo, a orillas del Lago General Carrera`],
        ['Horario', 'A coordinar al reservar; depende del viento'],
        ['Experiencia', 'No se necesita experiencia previa'],
        ['Temporada', kayak.season.es],
      ],
    },
    faqH: 'Preguntas frecuentes del kayak',
    faq: [
      { q: '¿Cuánto cuesta el tour en kayak a las Capillas de Mármol?', a: `Cuesta ${price} por persona, el mismo valor para adultos y niños. Incluye el kayak, el remo, el chaleco salvavidas y el guía.` },
      { q: '¿Desde dónde sale el kayak?', a: `Sale a ${km} km de Puerto Río Tranquilo, a orillas del Lago General Carrera. Al reservar te indicamos el punto de encuentro exacto.` },
      { q: '¿Necesito experiencia para remar?', a: 'No. Antes de salir el guía te enseña lo básico y te acompaña durante toda la remada. Basta con tener un estado físico normal.' },
      { q: '¿Cuánto dura?', a: `Unas ${hrs} horas en total, de las cuales cerca de ${paddle} son remando por las cavernas, la Catedral y la Capilla de Mármol.` },
      { q: '¿Qué pasa si hay viento?', a: 'El Lago General Carrera puede ponerse muy ventoso. Si las condiciones no son seguras, movemos la salida a otro horario o fecha, o te devolvemos el dinero.' },
      { q: '¿Pueden ir niños?', a: 'Sí, acompañados por un adulto y con chaleco salvavidas. Pagan lo mismo que un adulto. Escríbenos por WhatsApp para confirmar la edad mínima.' },
      { q: '¿Qué diferencia hay con el tour a la Laguna San Rafael?', a: 'El kayak es una salida de medio día muy cerca de Puerto Río Tranquilo, remando en el Lago General Carrera. El tour a la Laguna San Rafael es de día completo: viaja 90 km hacia el interior y navega en lancha hasta el glaciar.' },
    ],
    gallery: { h: 'Fotos del tour en kayak', lead: 'Fotos reales de nuestras salidas. Toca una para verla en grande.' },
    other: { h: 'Otros tours', lagunaT: 'Tour Full Day Laguna San Rafael', lagunaD: 'Navega entre icebergs hasta el frente del Glaciar San Rafael, con desayuno, almuerzo y whisky con hielo milenario.', link: 'Ver el tour' },
    // Bloque corto bajo el collage de la home (Sections.astro, solo con withBooking)
    promoHome: { h: 'Suma una tarde de kayak en las Capillas de Mármol', p: `Remada guiada entre cavernas de mármol, a ${km} km de Puerto Río Tranquilo. Sin experiencia previa.`, price: `${price} por persona`, link: 'Conoce el tour en kayak' },
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
    keyfacts: { duration: 'Approximate duration', durationUnit: ' hours', from: 'From Puerto Río Tranquilo', fromUnit: ' km', paddle: 'Paddling', paddleUnit: ' hours', price: 'Price per person' },
    perPerson: 'per person',
    answer: {
      h: 'What is the Marble Caves kayak tour like?',
      p: `It is a guided kayak trip on Lake General Carrera that starts ${km} km from Puerto Río Tranquilo and explores the Marble Caves, the Marble Cathedral and the Marble Chapel, rock formations shaped by the water over thousands of years. It takes about ${hrs} hours, includes kayak, gear and guide, and costs ${price} per person.`,
    },
    highlights: [
      { icon: 'guide', t: 'Local guide', d: 'Knows the lake, the wind and every cave' },
      { icon: 'boat', t: 'Kayak and gear', d: 'Kayak, paddle and life vest included' },
      { icon: 'pin', t: `${km} km from town`, d: 'Right next to Puerto Río Tranquilo' },
      { icon: 'whatsapp', t: 'Book direct', d: 'On WhatsApp, with the team that runs the tour' },
    ],
    card: {
      h: 'Book your kayak',
      list: [
        ['Duration', `Approx. ${hrs} hours`],
        ['Start', `${km} km from Puerto Río Tranquilo`],
        ['Time', 'Arranged on WhatsApp, depending on the wind'],
        ['Price', `${price} per person`],
      ],
      cta: 'Book on WhatsApp',
      note: 'We reply to confirm the date, time and meeting point.',
      msg: 'Hi, I would like to book the Marble Caves Kayak Tour. Date: ___ / People: ___',
    },
    itinerary: {
      h: 'How the trip goes',
      intro: 'Times are approximate: the wind rules the lake, and the guide adjusts the route to keep the paddle safe.',
      steps: [
        { time: 'Start', t: 'Meeting and transfer', d: `We meet in Puerto Río Tranquilo and head to the starting point, ${km} km from town, on the shore of Lake General Carrera.` },
        { time: '20 min', t: 'Gear and safety briefing', d: 'We hand out the kayak, paddle and life vest, and the guide explains how to paddle and how to move close to the rock.' },
        { time: `${paddle} h`, t: 'Paddling the Marble Caves', d: 'We paddle into the caves and around the Marble Cathedral and Chapel, stopping to enjoy the turquoise reflections and take photos.' },
        { time: 'End', t: 'Return', d: 'We paddle back to the starting point, put the gear away and return to Puerto Río Tranquilo.' },
      ],
    },
    includes: {
      h: 'What is included',
      yesH: 'Included',
      noH: 'Not included',
      yes: ['Kayak and paddle', 'Life vest', 'Local guide', 'Safety briefing and basic paddling instruction'],
      no: ['Food', 'Accommodation', 'Tips', 'Personal expenses'],
    },
    bring: {
      h: 'What to bring',
      items: ['Quick-dry clothing (avoid cotton)', 'A warm layer and a windbreaker', 'Hat and sunglasses with a strap', 'Sunscreen', 'A change of dry clothes for afterwards', 'A dry bag or waterproof phone case'],
    },
    facts: {
      h: 'Practical information',
      lead: 'What you need to know before you paddle.',
      rows: [
        ['Price', `${price} per person (adults and children)`],
        ['Duration', `Approx. ${hrs} hours, about ${paddle} paddling`],
        ['Starting point', `${km} km from Puerto Río Tranquilo, on the shore of Lake General Carrera`],
        ['Time', 'Arranged when you book; depends on the wind'],
        ['Experience', 'No previous experience needed'],
        ['Season', kayak.season.en],
      ],
    },
    faqH: 'Kayak FAQ',
    faq: [
      { q: 'How much does the Marble Caves kayak tour cost?', a: `It costs ${price} per person, the same for adults and children. Kayak, paddle, life vest and guide are included.` },
      { q: 'Where does the kayak tour start?', a: `It starts ${km} km from Puerto Río Tranquilo, on the shore of Lake General Carrera. We send you the exact meeting point when you book.` },
      { q: 'Do I need kayaking experience?', a: 'No. Before setting off the guide teaches you the basics and stays with you for the whole paddle. Normal fitness is enough.' },
      { q: 'How long does it take?', a: `About ${hrs} hours in total, roughly ${paddle} of them paddling through the caves, the Marble Cathedral and the Marble Chapel.` },
      { q: 'What if it is windy?', a: 'Lake General Carrera can get very windy. If conditions are not safe, we move the trip to another time or date, or refund your money.' },
      { q: 'Can children join?', a: 'Yes, accompanied by an adult and wearing a life vest. They pay the same as adults. Message us on WhatsApp to confirm the minimum age.' },
      { q: 'How is it different from the San Rafael Lagoon tour?', a: 'The kayak is a half-day trip right next to Puerto Río Tranquilo, paddling on Lake General Carrera. The San Rafael Lagoon tour is a full day: it drives 90 km inland and sails by boat to the glacier.' },
    ],
    gallery: { h: 'Kayak tour photos', lead: 'Real photos from our trips. Tap one to see it full size.' },
    other: { h: 'Other tours', lagunaT: 'San Rafael Lagoon Full-Day Tour', lagunaD: 'Sail among icebergs to the front of the San Rafael Glacier, with breakfast, lunch and whisky on ancient glacier ice.', link: 'See the tour' },
    promoHome: { h: 'Add an afternoon kayaking the Marble Caves', p: `A guided paddle among marble caves, ${km} km from Puerto Río Tranquilo. No experience needed.`, price: `${price} per person`, link: 'See the kayak tour' },
    cardHome: { t: 'Marble Caves kayak', d: `Paddle among marble caves on Lake General Carrera, ${km} km from Puerto Río Tranquilo. ${price} per person.`, link: 'See the kayak tour' },
  },
};
