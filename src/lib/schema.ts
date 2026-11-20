/** Generadores de datos estructurados JSON-LD (schema.org) para SEO, GEO y AEO. */
import { business, tour, kayak, kayakImages, logo } from '../data/tour';
import type { Lang } from '../i18n/routes';
import { routes } from '../i18n/routes';

const site = business.url;
const abs = (p: string) => new URL(p, site).href;

export const orgId = `${site}/#organization`;

export function organizationSchema() {
  const sameAs = Object.values(business.social).filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@type': ['TravelAgency', 'LocalBusiness'],
    '@id': orgId,
    name: business.name,
    legalName: business.legalName,
    url: site,
    logo: abs(logo.large), // Google recomienda un logo raster (PNG) de al menos 112×112 px
    image: abs('/images/og-laguna-san-rafael.jpg'),
    email: business.email,
    telephone: business.phones[0],
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: business.geo.lat, longitude: business.geo.lng },
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: business.openingDays,
      opens: '08:00',
      closes: '18:00',
    }],
    areaServed: ['Puerto Río Tranquilo', 'Región de Aysén', 'Parque Nacional Laguna San Rafael'],
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteSchema(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site}/#website`,
    url: site,
    name: business.name,
    inLanguage: lang === 'es' ? 'es-CL' : 'en',
    publisher: { '@id': orgId },
  };
}

export function tourSchema(lang: Lang, description: string, itinerary: { t: string; d: string }[]) {
  const name = lang === 'es' ? 'Tour Full Day Laguna San Rafael' : 'San Rafael Lagoon Full-Day Tour';
  const url = abs(routes.tour[lang]);
  const base = {
    '@type': 'Offer',
    priceCurrency: tour.currency,
    availability: 'https://schema.org/InStock',
    url: `${url}#reservar`,
    validFrom: '2026-01-01',
    seller: { '@id': orgId },
  };
  // Dos tarifas: adulto y niño (hasta childMaxAge años)
  const offer = [
    { ...base, name: lang === 'es' ? 'Adulto' : 'Adult', price: tour.priceFromCLP },
    {
      ...base,
      name: lang === 'es' ? `Niño (hasta ${tour.childMaxAge} años)` : `Child (up to ${tour.childMaxAge} years)`,
      price: tour.priceChildCLP,
    },
  ];
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      '@id': `${url}#trip`,
      name,
      description,
      url,
      image: abs('/images/og-laguna-san-rafael.jpg'),
      inLanguage: lang === 'es' ? 'es-CL' : 'en',
      touristType: lang === 'es' ? ['Naturaleza', 'Aventura', 'Glaciares'] : ['Nature', 'Adventure', 'Glaciers'],
      provider: { '@id': orgId },
      offers: offer,
      itinerary: {
        '@type': 'ItemList',
        itemListElement: itinerary.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: { '@type': 'TouristAttraction', name: s.t, description: s.d },
        })),
      },
      subjectOf: {
        '@type': 'TouristAttraction',
        name: lang === 'es' ? 'Glaciar San Rafael' : 'San Rafael Glacier',
        containedInPlace: {
          '@type': 'Park',
          name: 'Parque Nacional Laguna San Rafael',
          address: { '@type': 'PostalAddress', addressRegion: 'Aysén', addressCountry: 'CL' },
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      '@id': `${url}#product`,
      name,
      description,
      image: abs('/images/og-laguna-san-rafael.jpg'),
      brand: { '@type': 'Brand', name: business.name },
      offers: offer,
    },
  ];
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function articleSchema(o: { title: string; description: string; path: string; lang: Lang; date: string; updated?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: o.title,
    description: o.description,
    inLanguage: o.lang === 'es' ? 'es-CL' : 'en',
    mainEntityOfPage: abs(o.path),
    datePublished: o.date,
    dateModified: o.updated ?? o.date,
    image: abs('/images/og-laguna-san-rafael.jpg'),
    author: { '@id': orgId },
    publisher: { '@id': orgId },
  };
}

/** Tour Kayak Capillas de Mármol: TouristTrip + Product con una sola tarifa por persona. */
export function kayakSchema(lang: Lang, name: string, description: string, itinerary: { t: string; d: string }[]) {
  const url = abs(routes.kayak[lang]);
  const offer = {
    '@type': 'Offer',
    name: lang === 'es' ? 'Por persona' : 'Per person',
    price: kayak.priceCLP,
    priceCurrency: kayak.currency,
    availability: 'https://schema.org/InStock',
    url,
    validFrom: '2026-01-01',
    seller: { '@id': orgId },
  };
  const image = [kayakImages.hero, ...kayakImages.gallery].map((i) => abs(i.src));
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      '@id': `${url}#trip`,
      name,
      description,
      image,
      url,
      inLanguage: lang === 'es' ? 'es-CL' : 'en',
      touristType: lang === 'es' ? ['Aventura', 'Naturaleza', 'Kayak'] : ['Adventure', 'Nature', 'Kayaking'],
      provider: { '@id': orgId },
      offers: offer,
      itinerary: {
        '@type': 'ItemList',
        itemListElement: itinerary.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: { '@type': 'TouristAttraction', name: s.t, description: s.d },
        })),
      },
      subjectOf: {
        '@type': 'TouristAttraction',
        name: lang === 'es' ? 'Capillas de Mármol' : 'Marble Caves (Capillas de Mármol)',
        containedInPlace: {
          '@type': 'LakeBodyOfWater',
          name: 'Lago General Carrera',
          address: { '@type': 'PostalAddress', addressLocality: 'Puerto Río Tranquilo', addressRegion: 'Aysén', addressCountry: 'CL' },
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      '@id': `${url}#product`,
      name,
      description,
      image,
      brand: { '@type': 'Brand', name: business.name },
      offers: offer,
    },
  ];
}
