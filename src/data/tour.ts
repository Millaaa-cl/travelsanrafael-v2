/**
 * FUENTE ÚNICA DE DATOS DEL NEGOCIO Y DEL TOUR.
 * Todo el sitio (textos, JSON-LD, llms.txt) lee desde aquí, así los datos se mantienen
 * consistentes, que es clave para SEO local y GEO.
 *
 * ⚠️ Los valores marcados con TODO son provisionales: reemplázalos por los reales.
 * v2: no hay backend. Los precios de aquí se muestran y se usan para el total estimado del widget de reserva.
 */
export const business = {
  name: 'Costa Carrera Travel',
  legalName: 'CC Travel', // TODO: razón social exacta
  url: 'https://travelsanrafael.cl',
  email: 'contacto@cctravel.cl',
  phones: ['+56987388886', '+56942587129'],
  phoneDisplay: ['+56 9 8738 8886', '+56 9 4258 7129'],
  whatsapp: '56987388886',
  address: {
    street: 'Dagoberto Godoy 131',
    locality: 'Puerto Río Tranquilo',
    region: 'Región de Aysén',
    country: 'CL',
  },
  geo: { lat: -46.6236, lng: -72.6747 }, // TODO: coordenadas exactas de la oficina
  hours: '08:00–18:00',
  gtmId: 'GTM-5QG5Q92C',   // Google Tag Manager (lo carga Base.astro en todas las páginas); vacío = desactivado
  openingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  social: {
    instagram: '', // TODO: https://instagram.com/...
    facebook: '', // TODO
    googleMaps: '', // TODO: enlace al perfil de Google Business
    tripadvisor: '', // TODO
  },
};

export const tour = {
  priceFromCLP: 190000,     // precio adulto (CLP), transporte incluido: es el que se muestra y se usa en el total del widget
  priceChildCLP: 120000,    // precio niño (CLP), transporte incluido
  childMaxAge: 12,          // niños hasta 12 años inclusive
  currency: 'CLP',
  durationHours: 11,        // 06:20 → llegada entre 17:00 y 18:00
  capacity: 20,
  season: { es: 'Septiembre a marzo', en: 'September to March', fr: 'Septembre à mars', pt: 'Setembro a março' }, // confirmado por el cliente (23-11-2026): sin salidas de abril a agosto
  departureTime: '06:20',
  embarkKm: 90,             // km por tierra desde Puerto Río Tranquilo hasta el embarcadero (confirmado por el cliente)
  returnTime: { es: 'entre 17:00 y 18:00 hrs', en: 'between 5:00 and 6:00 pm', fr: 'entre 17 h et 18 h', pt: 'entre 17h e 18h' },
  meetingPoint: {
    es: 'Esquina de Dagoberto Godoy con Exploradores, Puerto Río Tranquilo',
    en: 'Corner of Dagoberto Godoy and Exploradores streets, Puerto Río Tranquilo',
    fr: 'Angle des rues Dagoberto Godoy et Exploradores, Puerto Río Tranquilo',
    pt: 'Esquina das ruas Dagoberto Godoy e Exploradores, Puerto Río Tranquilo',
  },
  /**
   * Fechas que el calendario ofrece (v2: sin backend, la reserva se envía por WhatsApp y se confirma por chat).
   * TODO: ajustar a la temporada real.
   */
  booking: {
    minDaysAhead: 1,                       // primer día reservable (1 = mañana)
    monthsAhead: 12,                       // meses que se pueden navegar desde el actual
    seasonMonths: [9, 10, 11, 12, 1, 2, 3], // meses con salidas (1 = enero); coincide con `season`
    weekdays: [0, 1, 2, 3, 4, 5, 6],       // días con salida (0 = domingo … 6 = sábado)
    closed: ['01-01'] as string[],         // fechas sin salida: 'AAAA-MM-DD' (una vez) o 'MM-DD' (todos los años)
  },
};

/**
 * Segundo servicio: Kayak en las Capillas de Mármol (Lago General Carrera).
 * Confirmado por el cliente: precio por persona (igual para adultos y niños) y que sale a 5 km del pueblo.
 * La reserva es solo por WhatsApp (sin widget). Los textos están en src/i18n/kayak.ts.
 */
export const kayak = {
  priceCLP: 55000,          // por persona, adultos y niños (confirmado)
  currency: 'CLP',
  distanceKm: 5,            // el punto de partida está a 5 km de Puerto Río Tranquilo (confirmado)
  durationHours: 3,         // 06:00 a 09:00 en la salida de referencia (confirmado 20-11-2026)
  paddleMinutes: 90,        // 06:50 a 08:20 en el agua (confirmado)
  departures: ['06:00', '10:30', '14:00', '17:30'],   // salidas diarias desde la agencia (confirmado)
  recommended: ['06:00', '10:30'],                     // por la mañana el lago suele estar más calmo
  season: tour.season,      // TODO: confirmar si opera en la misma temporada que la Laguna
};

export const formatCLP = (n: number) =>
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(n);

export const waLink = (text: string) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;

/** Imágenes (fotos propias, optimizadas). Para cambiar una foto, reemplaza el archivo con el mismo nombre. */
/** Texto alternativo en los 4 idiomas (es, en, fr, pt). pos: punto de enfoque del recorte (object-position), útil para fotos verticales en espacios horizontales. */
type Img = { src: string; w: number; h: number; es: string; en: string; fr: string; pt: string; pos?: string };
const img = (src: string, w: number, h: number, es: string, en: string, fr: string, pt: string, pos?: string): Img =>
  ({ src: `/images/${src}`, w, h, es, en, fr, pt, ...(pos ? { pos } : {}) });
// Logo PNG transparente, generado desde el SVG del cliente (que en realidad es un PNG 960×740 embebido):
// 239×186 = 3× del alto en el header. La versión -600.png se usa en los datos estructurados.
export const logo = { src: '/images/logo-costa-carrera-travel.png', w: 239, h: 186, large: '/images/logo-costa-carrera-travel-600.png' };
export const images: {
  hero: Img; heroMobile: Img; boat: Img; boatShore: Img; gallery: Img[];
  collage: Img[]; steps: (Img | null)[]; includes: Img; parallax: Img; reviews: Img; faq: Img; map: Img; cta: Img;
} = {
  hero: img('laguna-san-rafael-brindis-frente-al-glaciar.jpg', 1920, 1080,
    'Pasajeros brindan con hielo milenario frente al Glaciar San Rafael',
    'Passengers toasting with ancient glacier ice in front of the San Rafael Glacier',
    'Passagers trinquant avec de la glace millénaire devant le glacier San Rafael',
    'Passageiros brindando com gelo milenar diante do Glaciar San Rafael'),
  heroMobile: img('laguna-san-rafael-brindis-frente-al-glaciar-movil.jpg', 900, 1100, '', '', '', ''),
  boat: img('lancha-pasajeros-glaciar-san-rafael-cielo-azul.jpg', 720, 1280,
    'Nuestra lancha con pasajeros frente al Glaciar San Rafael en un día despejado',
    'Our boat with passengers in front of the San Rafael Glacier on a clear day',
    'Notre bateau avec des passagers devant le glacier San Rafael par temps clair',
    'Nossa lancha com passageiros diante do Glaciar San Rafael em um dia de céu limpo'),
  gallery: [
    img('capitan-lancha-entre-hielos-glaciar-san-rafael.jpg', 1280, 853,
      'El capitán saluda desde la lancha entre los hielos del Glaciar San Rafael',
      'The captain waves from the boat among the ice of the San Rafael Glacier',
      'Le capitaine salue depuis le bateau parmi les glaces du glacier San Rafael',
      'O capitão acena da lancha entre os gelos do Glaciar San Rafael'),
    img('glaciar-san-rafael-pared-de-hielo.jpg', 1000, 1000,
      'Pared de hielo del Glaciar San Rafael', 'Ice wall of the San Rafael Glacier',
      'Paroi de glace du glacier San Rafael', 'Parede de gelo do Glaciar San Rafael'),
    img('icebergs-frente-glaciar-san-rafael.jpg', 1000, 1000,
      'Témpanos frente al Glaciar San Rafael', 'Icebergs in front of the San Rafael Glacier',
      'Icebergs devant le glacier San Rafael', 'Icebergs diante do Glaciar San Rafael'),
    img('foca-sobre-tempano-laguna-san-rafael.jpg', 1000, 1000,
      'Foca leopardo descansando sobre un témpano en la Laguna San Rafael', 'Leopard seal resting on an ice floe in San Rafael Lagoon',
      'Phoque léopard se reposant sur un bloc de glace dans la lagune San Rafael', 'Foca-leopardo descansando sobre um bloco de gelo na Laguna San Rafael'),
    img('iceberg-azul-laguna-san-rafael.jpg', 1000, 1000,
      'Iceberg azul reflejado en la Laguna San Rafael', 'Blue iceberg reflected in San Rafael Lagoon',
      'Iceberg bleu reflété dans la lagune San Rafael', 'Iceberg azul refletido na Laguna San Rafael'),
    img('pasajeros-fotografiando-glaciar-san-rafael.jpg', 963, 720,
      'Pasajeros fotografiando el glaciar desde la lancha', 'Passengers photographing the glacier from the boat',
      'Passagers photographiant le glacier depuis le bateau', 'Passageiros fotografando o glaciar da lancha'),
    img('degustacion-whisky-hielo-milenario.jpg', 960, 1280,
      'Degustación de whisky y pisco con hielo milenario a bordo', 'Whisky and pisco tasting with ancient glacier ice on board',
      'Dégustation de whisky et de pisco avec de la glace millénaire à bord', 'Degustação de uísque e pisco com gelo milenar a bordo'),
    img('laguna-san-rafael-foca-y-glaciar.jpg', 1000, 1000,
      'Foca leopardo sobre un témpano en la Laguna San Rafael, con el glaciar al fondo', 'Leopard seal on an ice floe in San Rafael Lagoon, with the glacier in the background',
      'Phoque léopard sur un bloc de glace dans la lagune San Rafael, avec le glacier en arrière-plan', 'Foca-leopardo sobre um bloco de gelo na Laguna San Rafael, com o glaciar ao fundo'),
    img('pasajeros-brindis-hielo-milenario.jpg', 1000, 1000,
      'Brindis frente al glaciar en la proa de la lancha', 'Toast in front of the glacier on the bow of the boat',
      'Toast devant le glacier à la proue du bateau', 'Brinde diante do glaciar na proa da lancha'),
    img('iceberg-detalle-laguna-san-rafael.jpg', 1000, 1000,
      'Detalle de un iceberg en la Laguna San Rafael', 'Close-up of an iceberg in San Rafael Lagoon',
      'Détail d’un iceberg dans la lagune San Rafael', 'Detalhe de um iceberg na Laguna San Rafael'),
    img('foca-frente-glaciar-san-rafael.jpg', 1000, 1000,
      'Foca leopardo sobre el hielo frente al Glaciar San Rafael', 'Leopard seal on the ice in front of the San Rafael Glacier',
      'Phoque léopard sur la glace devant le glacier San Rafael', 'Foca-leopardo sobre o gelo diante do Glaciar San Rafael'),
    img('frente-glaciar-san-rafael-montana.jpg', 1000, 1000,
      'Frente del Glaciar San Rafael entre montañas', 'San Rafael Glacier front between mountains',
      'Front du glacier San Rafael entre les montagnes', 'Frente do Glaciar San Rafael entre montanhas'),
    img('foca-descansando-sobre-hielo-laguna-san-rafael.jpg', 1280, 853,
      'Foca leopardo descansando sobre el hielo en la Laguna San Rafael', 'Leopard seal resting on the ice in San Rafael Lagoon',
      'Phoque léopard se reposant sur la glace dans la lagune San Rafael', 'Foca-leopardo descansando sobre o gelo na Laguna San Rafael'),
    img('lancha-bajo-pared-glaciar-san-rafael.jpg', 720, 1280,
      'La lancha se ve diminuta bajo la pared del Glaciar San Rafael', 'The boat looks tiny below the ice wall of the San Rafael Glacier',
      'Le bateau paraît minuscule sous la paroi du glacier San Rafael', 'A lancha parece minúscula sob a parede do Glaciar San Rafael', '50% 78%'),
    img('grupo-brindando-lancha-frente-glaciar-san-rafael.jpg', 900, 1200,
      'Grupo de pasajeros brindando en la lancha frente al Glaciar San Rafael', 'A group of passengers toasting on the boat in front of the San Rafael Glacier',
      'Groupe de passagers trinquant sur le bateau devant le glacier San Rafael', 'Grupo de passageiros brindando na lancha diante do Glaciar San Rafael', '50% 62%'),
    img('lancha-navegando-entre-hielos-laguna-san-rafael.jpg', 1200, 675,
      'Lancha navegando entre hielos flotantes en la Laguna San Rafael', 'Boat sailing through floating ice in San Rafael Lagoon',
      'Bateau naviguant parmi les glaces flottantes de la lagune San Rafael', 'Lancha navegando entre gelos flutuantes na Laguna San Rafael'),
    img('pasajeros-mirando-glaciar-desde-la-proa.jpg', 900, 1200,
      'Pasajeros mirando el glaciar desde la proa de la lancha', 'Passengers watching the glacier from the bow of the boat',
      'Passagers regardant le glacier depuis la proue du bateau', 'Passageiros olhando o glaciar da proa da lancha', '50% 40%'),
    img('glaciar-san-rafael-reflejo-en-la-laguna.jpg', 1200, 900,
      'El Glaciar San Rafael reflejado en la laguna', 'The San Rafael Glacier reflected in the lagoon',
      'Le glacier San Rafael se reflétant dans la lagune', 'O Glaciar San Rafael refletido na laguna'),
    img('iceberg-azul-intenso-laguna-san-rafael.jpg', 900, 1200,
      'Iceberg de un azul intenso en la Laguna San Rafael', 'Deep blue iceberg in San Rafael Lagoon',
      'Iceberg d’un bleu intense dans la lagune San Rafael', 'Iceberg de um azul intenso na Laguna San Rafael', '50% 22%'),
    img('lancha-entre-tempanos-glaciar-san-rafael.jpg', 720, 1280,
      'Lancha navegando entre témpanos frente al glaciar', 'Boat sailing among ice floes in front of the glacier',
      'Bateau naviguant entre les blocs de glace devant le glacier', 'Lancha navegando entre blocos de gelo diante do glaciar', '50% 55%'),
    img('hielos-flotantes-frente-glaciar-san-rafael.jpg', 900, 1200,
      'Hielos flotantes frente al Glaciar San Rafael', 'Floating ice in front of the San Rafael Glacier',
      'Glaces flottantes devant le glacier San Rafael', 'Gelos flutuantes diante do Glaciar San Rafael', '50% 35%'),
  ],
  boatShore: img('interior-cabina-lancha-chalecos-salvavidas.jpg', 900, 1200,
    'Cabina cerrada de la lancha, con asientos y chalecos salvavidas para cada pasajero',
    'Enclosed boat cabin with seats and a life jacket for every passenger',
    'Cabine fermée du bateau, avec des sièges et un gilet de sauvetage pour chaque passager',
    'Cabine fechada da lancha, com assentos e coletes salva-vidas para cada passageiro'),
  collage: [
    img('lancha-frente-glaciar-san-rafael-dia-soleado.jpg', 720, 1280,
      'Nuestra lancha frente al hielo azul del Glaciar San Rafael', 'Our boat in front of the blue ice of the San Rafael Glacier',
      'Notre bateau devant la glace bleue du glacier San Rafael', 'Nossa lancha diante do gelo azul do Glaciar San Rafael'),
    img('degustacion-whisky-hielo-milenario.jpg', 960, 1280,
      'Whisky y pisco con hielo milenario a bordo', 'Whisky and pisco with ancient glacier ice on board',
      'Whisky et pisco avec de la glace millénaire à bord', 'Uísque e pisco com gelo milenar a bordo'),
    img('lancha-rapida-frente-glaciar-san-rafael.jpg', 1000, 1000,
      'Lancha rápida con pasajeros frente al glaciar', 'Speedboat with passengers in front of the glacier',
      'Bateau rapide avec des passagers devant le glacier', 'Lancha rápida com passageiros diante do glaciar'),
  ],
  // Una foto por paso del itinerario (null = sin foto real todavía)
  steps: [
    null,
    img('lanchas-en-el-puerto-de-embarque.jpg', 576, 1280,
      'Nuestras lanchas esperando en el puerto de embarque', 'Our boats waiting at the departure pier',
      'Nos bateaux attendant au quai d’embarquement', 'Nossas lanchas esperando no porto de embarque', '50% 46%'),
    img('llegada-a-la-laguna-san-rafael-glaciar-al-fondo.jpg', 1200, 900,
      'Llegando a la Laguna San Rafael, con el glaciar al fondo', 'Arriving at San Rafael Lagoon, with the glacier ahead',
      'Arrivée à la lagune San Rafael, avec le glacier au fond', 'Chegando à Laguna San Rafael, com o glaciar ao fundo'),
    img('capitan-lancha-entre-hielos-glaciar-san-rafael.jpg', 1280, 853,
      'Una hora frente al Glaciar San Rafael', 'One hour in front of the San Rafael Glacier',
      'Une heure devant le glacier San Rafael', 'Uma hora diante do Glaciar San Rafael'),
    img('lancha-entre-hielos-frente-glaciar-san-rafael.jpg', 1200, 675,
      'La lancha emprende el regreso entre los hielos', 'The boat heads back through the ice',
      'Le bateau entame le retour à travers les glaces', 'A lancha inicia o retorno entre os gelos'),
    null,
  ],
  includes: img('pasajeros-brindis-hielo-milenario.jpg', 1000, 1000,
    'Brindis con hielo milenario incluido en el tour', 'Toast with ancient glacier ice, included in the tour',
    'Toast avec de la glace millénaire, inclus dans l’excursion', 'Brinde com gelo milenar, incluído no passeio'),
  parallax: img('panoramica-glaciar-san-rafael-reflejo.jpg', 1600, 900,
    'Panorámica del Glaciar San Rafael reflejado en la laguna', 'Panoramic view of the San Rafael Glacier reflected in the lagoon',
    'Vue panoramique du glacier San Rafael se reflétant dans la lagune', 'Vista panorâmica do Glaciar San Rafael refletida na laguna'),
  reviews: img('guia-saludando-desde-la-lancha-glaciar.jpg', 1280, 853,
    'Nuestro guía saluda junto a los pasajeros frente al glaciar', 'Our guide waves with passengers in front of the glacier',
    'Notre guide salue avec les passagers devant le glacier', 'Nosso guia acena junto com os passageiros diante do glaciar'),
  faq: img('pasajeros-con-bandera-chilena-frente-al-glaciar.jpg', 1200, 900,
    'Pasajeros con la bandera chilena frente al Glaciar San Rafael', 'Passengers holding the Chilean flag in front of the San Rafael Glacier',
    'Passagers tenant le drapeau chilien devant le glacier San Rafael', 'Passageiros com a bandeira chilena diante do Glaciar San Rafael'),
  map: img('lancha-rapida-en-la-orilla.jpg', 1000, 1000,
    'Lancha lista para zarpar', 'Boat ready to sail', 'Bateau prêt à appareiller', 'Lancha pronta para zarpar'),
  cta: img('tempano-frente-glaciar-san-rafael.jpg', 1600, 1200,
    'Témpano frente al Glaciar San Rafael', 'Ice floe in front of the San Rafael Glacier',
    'Bloc de glace devant le glacier San Rafael', 'Bloco de gelo diante do Glaciar San Rafael'),
};

/** Fotos del Tour Kayak (enviadas por el cliente el 20-11-2026, originales en Desktop\imagenes kayak). */
export const kayakImages = {
  hero: img('kayak-capillas-de-marmol-interior-caverna.jpg', 1600, 900,
    'Interior de una caverna de las Capillas de Mármol sobre el Lago General Carrera', 'Inside a Marble Caves cavern over General Carrera Lake',
    'Intérieur d’une grotte des Chapelles de Marbre sur le lac General Carrera', 'Interior de uma caverna das Capelas de Mármore no Lago General Carrera'),
  og: '/images/og-kayak-capillas-de-marmol.jpg',
  // La primera es la grande de la galería; también se usa en la promo de la home y en la tarjeta "Otros tours".
  gallery: [
    img('kayak-grupo-remando-capillas-de-marmol.jpg', 1600, 900,
      'Grupo en kayak frente a las Capillas de Mármol en el Lago General Carrera', 'Group kayaking in front of the Marble Caves on General Carrera Lake',
      'Groupe en kayak devant les Chapelles de Marbre sur le lac General Carrera', 'Grupo de caiaque diante das Capelas de Mármore no Lago General Carrera'),
    img('capilla-de-marmol-lago-general-carrera.jpg', 960, 1280,
      'Capilla de Mármol, islote de mármol sobre el agua turquesa del lago', 'Marble Chapel, a marble islet on the turquoise lake water',
      'La Chapelle de Marbre, îlot de marbre sur l’eau turquoise du lac', 'Capela de Mármore, ilhota de mármore sobre a água turquesa do lago', '50% 55%'),
    img('kayaks-en-la-orilla-lago-general-carrera.jpg', 1440, 1080,
      'Grupo listo para remar, con los kayaks en la orilla del Lago General Carrera', 'Group ready to paddle, with the kayaks on the shore of General Carrera Lake',
      'Groupe prêt à pagayer, avec les kayaks sur la rive du lac General Carrera', 'Grupo pronto para remar, com os caiaques na margem do Lago General Carrera'),
  ] as Img[],
};
