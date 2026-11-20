import { kayak, formatCLP } from '../data/tour';

const price = formatCLP(kayak.priceCLP);
const km = kayak.distanceKm;
const hrs = kayak.durationHours;
const paddle = kayak.paddleMinutes;
// Horarios en texto: "06:00, 10:30, 14:00 y 17:30"
const list = (a: string[], and: string) => a.slice(0, -1).join(', ') + ` ${and} ` + a[a.length - 1];
const depEs = list(kayak.departures, 'y');
const depEn = list(kayak.departures, 'and');

/**
 * Textos ES/EN del Tour Kayak Capillas de Mármol (KayakView.astro).
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
    promoHome: { h: 'Suma una salida en kayak a las Capillas de Mármol', p: `Remada guiada entre cavernas de mármol, a ${km} km de Puerto Río Tranquilo. Sin experiencia previa.`, price: `${price} por persona`, link: 'Conoce el tour en kayak' },
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
    promoHome: { h: 'Add a kayak trip to the Marble Caves', p: `A guided paddle among marble caves, ${km} km from Puerto Río Tranquilo. No experience needed.`, price: `${price} per person`, link: 'See the kayak tour' },
    cardHome: { t: 'Marble Caves kayak', d: `Paddle among marble caves on Lake General Carrera, ${km} km from Puerto Río Tranquilo. ${price} per person.`, link: 'See the kayak tour' },
  },
};
