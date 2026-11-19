export type Lang = 'es' | 'en';

/** Rutas equivalentes por idioma (para el menú, el selector de idioma y hreflang). */
export const routes = {
  home: { es: '/', en: '/en/' },
  tour: { es: '/tour-laguna-san-rafael/', en: '/en/san-rafael-lagoon-tour/' },
  kayak: { es: '/kayak-capillas-de-marmol/', en: '/en/marble-caves-kayak-tour/' },
  howTo: { es: '/como-llegar/', en: '/en/how-to-get-there/' },
  faq: { es: '/preguntas-frecuentes/', en: '/en/faq/' },
  about: { es: '/nosotros/', en: '/en/about-us/' },
  contact: { es: '/contacto/', en: '/en/contact/' },
  blog: { es: '/blog/', en: '/en/blog/' },
  terms: { es: '/terminos-y-condiciones/', en: '/en/terms-and-conditions/' },
  postSeason: {
    es: '/blog/mejor-epoca-para-visitar-laguna-san-rafael/',
    en: '/en/blog/best-time-to-visit-san-rafael-lagoon/',
  },
  postPack: {
    es: '/blog/que-llevar-al-tour-laguna-san-rafael/',
    en: '/en/blog/what-to-pack-san-rafael-lagoon-tour/',
  },
  postGlacier: {
    es: '/blog/glaciar-san-rafael-datos-e-historia/',
    en: '/en/blog/san-rafael-glacier-facts-and-history/',
  },
} as const;

export type RouteKey = keyof typeof routes;
