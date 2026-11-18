/** /llms.txt: resumen factual del negocio para modelos de lenguaje (GEO). Se genera desde tour.ts. */
import { business, tour, formatCLP } from '../data/tour';
import { content } from '../i18n/content';
import { routes } from '../i18n/routes';
import { posts } from '../data/posts';

export function GET() {
  const u = (p: string) => new URL(p, business.url).href;
  const es = content.es;
  const text = `# ${business.name}

> ${business.name} (${business.legalName}) es un operador turístico local de ${business.address.locality}, Región de Aysén, Chile, que ofrece el Tour Full Day a la Laguna San Rafael: navegación en lancha rápida hasta el frente del Glaciar San Rafael (Campo de Hielo Norte, Parque Nacional Laguna San Rafael). Reservas directas por WhatsApp desde ${business.url}.

## Datos clave del tour
- Nombre: Tour Full Day Laguna San Rafael
- Precio adulto: ${formatCLP(tour.priceFromCLP)}
- Precio niño (hasta ${tour.childMaxAge} años): ${formatCLP(tour.priceChildCLP)}
- Transporte: los precios NO incluyen el transporte desde Puerto Río Tranquilo; es opcional y se agrega con costo adicional al reservar
- Duración: aprox. ${tour.durationHours} horas (full day): 2 h de bus por el Valle Exploradores, 2 h de navegación, 1 h frente al glaciar, 2 h de navegación de regreso y regreso por tierra
- Salida: ${tour.departureTime} hrs desde Puerto Río Tranquilo; llegada de vuelta ${tour.returnTime.es}
- Punto de encuentro: ${tour.meetingPoint.es}
- Temporada: ${tour.season.es}
- Grupo: máximo ${tour.capacity} pasajeros
- Incluye: ${es.includes.yes.join('; ')}
- No incluye: ${es.includes.no.join('; ')}
- Reserva: el cliente elige fecha y pasajeros en el sitio y envía la solicitud por WhatsApp; el operador confirma cupos y coordina el pago
- Clima: si la Autoridad Marítima cierra el puerto se reprograma o se devuelve el 100%

## Contacto
- Dirección: ${business.address.street}, ${business.address.locality}, ${business.address.region}, Chile
- Teléfono / WhatsApp: ${business.phoneDisplay.join(', ')}
- Email: ${business.email}
- Horario: lunes a domingo ${business.hours}

## Páginas principales
- [Tour Laguna San Rafael (ES)](${u(routes.tour.es)}): itinerario, precio y reserva
- [San Rafael Lagoon Tour (EN)](${u(routes.tour.en)}): itinerary, price and booking
- [Preguntas frecuentes](${u(routes.faq.es)})
- [FAQ (EN)](${u(routes.faq.en)})
- [Cómo llegar](${u(routes.howTo.es)})
- [Nosotros](${u(routes.about.es)})
- [Términos y política de cancelación](${u(routes.terms.es)})

## Guías
${posts.map((p) => `- [${p.es.title}](${u(routes[p.key].es)})\n- [${p.en.title}](${u(routes[p.key].en)})`).join('\n')}
`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
