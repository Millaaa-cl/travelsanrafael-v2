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
  openingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  social: {
    instagram: '', // TODO: https://instagram.com/...
    facebook: '', // TODO
    googleMaps: '', // TODO: enlace al perfil de Google Business
    tripadvisor: '', // TODO
  },
};

export const tour = {
  priceFromCLP: 170000,     // precio adulto (CLP): es el que se muestra y se usa en el total del widget
  priceChildCLP: 120000,    // precio niño (CLP)
  childMaxAge: 12,          // niños hasta 12 años inclusive
  currency: 'CLP',
  durationHours: 11,        // 06:20 → llegada entre 17:00 y 18:00
  capacity: 20,
  season: { es: 'Septiembre a abril', en: 'September to April' }, // TODO: confirmar temporada
  departureTime: '06:20',
  returnTime: { es: 'entre 17:00 y 18:00 hrs', en: 'between 5:00 and 6:00 pm' },
  meetingPoint: {
    es: 'Esquina de Dagoberto Godoy con Exploradores, Puerto Río Tranquilo',
    en: 'Corner of Dagoberto Godoy and Exploradores streets, Puerto Río Tranquilo',
  },
  /**
   * Fechas que el calendario ofrece (v2: sin backend, la reserva se envía por WhatsApp y se confirma por chat).
   * TODO: ajustar a la temporada real.
   */
  booking: {
    minDaysAhead: 1,                       // primer día reservable (1 = mañana)
    monthsAhead: 12,                       // meses que se pueden navegar desde el actual
    seasonMonths: [9, 10, 11, 12, 1, 2, 3, 4], // meses con salidas (1 = enero); coincide con `season`
    weekdays: [0, 1, 2, 3, 4, 5, 6],       // días con salida (0 = domingo … 6 = sábado)
    closed: [] as string[],                // fechas sin salida, formato 'AAAA-MM-DD'
  },
};

export const formatCLP = (n: number) =>
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(n);

export const waLink = (text: string) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;

/** Imágenes (fotos propias, optimizadas). Para cambiar una foto, reemplaza el archivo con el mismo nombre. */
/** pos: punto de enfoque del recorte (object-position), útil para fotos verticales en espacios horizontales. */
type Img = { src: string; w: number; h: number; es: string; en: string; pos?: string };
const img = (src: string, w: number, h: number, es: string, en: string): Img => ({ src: `/images/${src}`, w, h, es, en });
// Logo PNG transparente, generado desde el SVG del cliente (que en realidad es un PNG 960×740 embebido):
// 239×186 = 3× del alto en el header. La versión -600.png se usa en los datos estructurados.
export const logo = { src: '/images/logo-costa-carrera-travel.png', w: 239, h: 186, large: '/images/logo-costa-carrera-travel-600.png' };
export const images: {
  hero: Img; heroMobile: Img; boat: Img; boatShore: Img; gallery: Img[];
  collage: Img[]; steps: (Img | null)[]; includes: Img; parallax: Img; reviews: Img; faq: Img; map: Img; cta: Img;
} = {
  hero: {
    src: '/images/laguna-san-rafael-brindis-frente-al-glaciar.jpg', w: 1920, h: 1080,
    es: 'Pasajeros brindan con hielo milenario frente al Glaciar San Rafael',
    en: 'Passengers toasting with ancient glacier ice in front of the San Rafael Glacier',
  },
  heroMobile: {
    src: '/images/laguna-san-rafael-brindis-frente-al-glaciar-movil.jpg', w: 900, h: 1100,
    es: '', en: '',
  },
  boat: img('lancha-pasajeros-glaciar-san-rafael-cielo-azul.jpg', 720, 1280, 'Nuestra lancha con pasajeros frente al Glaciar San Rafael en un día despejado', 'Our boat with passengers in front of the San Rafael Glacier on a clear day'),
  gallery: [
    img('capitan-lancha-entre-hielos-glaciar-san-rafael.jpg', 1280, 853, 'El capitán saluda desde la lancha entre los hielos del Glaciar San Rafael', 'The captain waves from the boat among the ice of the San Rafael Glacier'),
    { src: '/images/glaciar-san-rafael-pared-de-hielo.jpg', w: 1000, h: 1000, es: 'Pared de hielo del Glaciar San Rafael', en: 'Ice wall of the San Rafael Glacier' },
    { src: '/images/icebergs-frente-glaciar-san-rafael.jpg', w: 1000, h: 1000, es: 'Témpanos frente al Glaciar San Rafael', en: 'Icebergs in front of the San Rafael Glacier' },
    { src: '/images/foca-sobre-tempano-laguna-san-rafael.jpg', w: 1000, h: 1000, es: 'Foca leopardo descansando sobre un témpano en la Laguna San Rafael', en: 'Leopard seal resting on an ice floe in San Rafael Lagoon' },
    { src: '/images/iceberg-azul-laguna-san-rafael.jpg', w: 1000, h: 1000, es: 'Iceberg azul reflejado en la Laguna San Rafael', en: 'Blue iceberg reflected in San Rafael Lagoon' },
    { src: '/images/pasajeros-fotografiando-glaciar-san-rafael.jpg', w: 963, h: 720, es: 'Pasajeros fotografiando el glaciar desde la lancha', en: 'Passengers photographing the glacier from the boat' },
    { src: '/images/degustacion-whisky-hielo-milenario.jpg', w: 960, h: 1280, es: 'Degustación de whisky y pisco con hielo milenario a bordo', en: 'Whisky and pisco tasting with ancient glacier ice on board' },
    { src: '/images/laguna-san-rafael-foca-y-glaciar.jpg', w: 1000, h: 1000, es: 'Foca leopardo sobre un témpano en la Laguna San Rafael, con el glaciar al fondo', en: 'Leopard seal on an ice floe in San Rafael Lagoon, with the glacier in the background' },
    { src: '/images/pasajeros-brindis-hielo-milenario.jpg', w: 1000, h: 1000, es: 'Brindis frente al glaciar en la proa de la lancha', en: 'Toast in front of the glacier on the bow of the boat' },
    { src: '/images/iceberg-detalle-laguna-san-rafael.jpg', w: 1000, h: 1000, es: 'Detalle de un iceberg en la Laguna San Rafael', en: 'Close-up of an iceberg in San Rafael Lagoon' },
    { src: '/images/foca-frente-glaciar-san-rafael.jpg', w: 1000, h: 1000, es: 'Foca leopardo sobre el hielo frente al Glaciar San Rafael', en: 'Leopard seal on the ice in front of the San Rafael Glacier' },
    { src: '/images/frente-glaciar-san-rafael-montana.jpg', w: 1000, h: 1000, es: 'Frente del Glaciar San Rafael entre montañas', en: 'San Rafael Glacier front between mountains' },
    img('foca-descansando-sobre-hielo-laguna-san-rafael.jpg', 1280, 853, 'Foca leopardo descansando sobre el hielo en la Laguna San Rafael', 'Leopard seal resting on the ice in San Rafael Lagoon'),
    { ...img('lancha-bajo-pared-glaciar-san-rafael.jpg', 720, 1280, 'La lancha se ve diminuta bajo la pared del Glaciar San Rafael', 'The boat looks tiny below the ice wall of the San Rafael Glacier'), pos: '50% 78%' },
    { ...img('grupo-brindando-lancha-frente-glaciar-san-rafael.jpg', 900, 1200, 'Grupo de pasajeros brindando en la lancha frente al Glaciar San Rafael', 'A group of passengers toasting on the boat in front of the San Rafael Glacier'), pos: '50% 62%' },
    img('lancha-navegando-entre-hielos-laguna-san-rafael.jpg', 1200, 675, 'Lancha navegando entre hielos flotantes en la Laguna San Rafael', 'Boat sailing through floating ice in San Rafael Lagoon'),
    { ...img('pasajeros-mirando-glaciar-desde-la-proa.jpg', 900, 1200, 'Pasajeros mirando el glaciar desde la proa de la lancha', 'Passengers watching the glacier from the bow of the boat'), pos: '50% 40%' },
    img('glaciar-san-rafael-reflejo-en-la-laguna.jpg', 1200, 900, 'El Glaciar San Rafael reflejado en la laguna', 'The San Rafael Glacier reflected in the lagoon'),
    { ...img('iceberg-azul-intenso-laguna-san-rafael.jpg', 900, 1200, 'Iceberg de un azul intenso en la Laguna San Rafael', 'Deep blue iceberg in San Rafael Lagoon'), pos: '50% 22%' },
    { ...img('lancha-entre-tempanos-glaciar-san-rafael.jpg', 720, 1280, 'Lancha navegando entre témpanos frente al glaciar', 'Boat sailing among ice floes in front of the glacier'), pos: '50% 55%' },
    { ...img('hielos-flotantes-frente-glaciar-san-rafael.jpg', 900, 1200, 'Hielos flotantes frente al Glaciar San Rafael', 'Floating ice in front of the San Rafael Glacier'), pos: '50% 35%' },
  ],
  boatShore: img('interior-cabina-lancha-chalecos-salvavidas.jpg', 900, 1200, 'Cabina cerrada de la lancha, con asientos y chalecos salvavidas para cada pasajero', 'Enclosed boat cabin with seats and a life jacket for every passenger'),
  collage: [
    img('lancha-frente-glaciar-san-rafael-dia-soleado.jpg', 720, 1280, 'Nuestra lancha frente al hielo azul del Glaciar San Rafael', 'Our boat in front of the blue ice of the San Rafael Glacier'),
    img('degustacion-whisky-hielo-milenario.jpg', 960, 1280, 'Whisky y pisco con hielo milenario a bordo', 'Whisky and pisco with ancient glacier ice on board'),
    img('lancha-rapida-frente-glaciar-san-rafael.jpg', 1000, 1000, 'Lancha rápida con pasajeros frente al glaciar', 'Speedboat with passengers in front of the glacier'),
  ],
  // Una foto por paso del itinerario (null = sin foto real todavía)
  steps: [
    null,
    { ...img('lanchas-en-el-puerto-de-embarque.jpg', 576, 1280, 'Nuestras lanchas esperando en el puerto de embarque', 'Our boats waiting at the departure pier'), pos: '50% 46%' },
    img('llegada-a-la-laguna-san-rafael-glaciar-al-fondo.jpg', 1200, 900, 'Llegando a la Laguna San Rafael, con el glaciar al fondo', 'Arriving at San Rafael Lagoon, with the glacier ahead'),
    img('capitan-lancha-entre-hielos-glaciar-san-rafael.jpg', 1280, 853, 'Una hora frente al Glaciar San Rafael', 'One hour in front of the San Rafael Glacier'),
    img('lancha-entre-hielos-frente-glaciar-san-rafael.jpg', 1200, 675, 'La lancha emprende el regreso entre los hielos', 'The boat heads back through the ice'),
    null,
  ],
  includes: img('pasajeros-brindis-hielo-milenario.jpg', 1000, 1000, 'Brindis con hielo milenario incluido en el tour', 'Toast with ancient glacier ice, included in the tour'),
  parallax: img('panoramica-glaciar-san-rafael-reflejo.jpg', 1600, 900, 'Panorámica del Glaciar San Rafael reflejado en la laguna', 'Panoramic view of the San Rafael Glacier reflected in the lagoon'),
  reviews: img('guia-saludando-desde-la-lancha-glaciar.jpg', 1280, 853, 'Nuestro guía saluda junto a los pasajeros frente al glaciar', 'Our guide waves with passengers in front of the glacier'),
  faq: img('pasajeros-con-bandera-chilena-frente-al-glaciar.jpg', 1200, 900, 'Pasajeros con la bandera chilena frente al Glaciar San Rafael', 'Passengers holding the Chilean flag in front of the San Rafael Glacier'),
  map: img('lancha-rapida-en-la-orilla.jpg', 1000, 1000, 'Lancha lista para zarpar', 'Boat ready to sail'),
  cta: img('tempano-frente-glaciar-san-rafael.jpg', 1600, 1200, 'Témpano frente al Glaciar San Rafael', 'Ice floe in front of the San Rafael Glacier'),
};
