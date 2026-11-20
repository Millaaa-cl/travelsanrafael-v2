/** Idiomas del sitio: ES (por defecto, en /), EN (/en/), FR (/fr/) y PT de Brasil (/pt/). */
export type Lang = 'es' | 'en' | 'fr' | 'pt';
export const langs: Lang[] = ['es', 'en', 'fr', 'pt'];

/** Códigos por idioma: atributo lang/hreflang, og:locale, formato de fechas (Intl) y nombre en el selector. */
export const locales: Record<Lang, { html: string; og: string; intl: string; name: string }> = {
  es: { html: 'es-CL', og: 'es_CL', intl: 'es-CL', name: 'Español' },
  en: { html: 'en', og: 'en_US', intl: 'en-US', name: 'English' },
  fr: { html: 'fr', og: 'fr_FR', intl: 'fr-FR', name: 'Français' },
  pt: { html: 'pt-BR', og: 'pt_BR', intl: 'pt-BR', name: 'Português' },
};

/** Elige el texto del idioma actual: const tx = pick(lang); tx('Inicio', 'Home', 'Accueil', 'Início') */
export const pick = (lang: Lang) => <T,>(es: T, en: T, fr: T, pt: T): T => ({ es, en, fr, pt })[lang];

/** Rutas equivalentes por idioma (para el menú, el selector de idioma y hreflang). Al agregar una página, regístrala aquí. */
export const routes = {
  home: { es: '/', en: '/en/', fr: '/fr/', pt: '/pt/' },
  tour: { es: '/tour-laguna-san-rafael/', en: '/en/san-rafael-lagoon-tour/', fr: '/fr/excursion-lagune-san-rafael/', pt: '/pt/passeio-laguna-san-rafael/' },
  kayak: { es: '/kayak-capillas-de-marmol/', en: '/en/marble-caves-kayak-tour/', fr: '/fr/kayak-chapelles-de-marbre/', pt: '/pt/caiaque-capelas-de-marmore/' },
  howTo: { es: '/como-llegar/', en: '/en/how-to-get-there/', fr: '/fr/comment-venir/', pt: '/pt/como-chegar/' },
  faq: { es: '/preguntas-frecuentes/', en: '/en/faq/', fr: '/fr/questions-frequentes/', pt: '/pt/perguntas-frequentes/' },
  about: { es: '/nosotros/', en: '/en/about-us/', fr: '/fr/qui-sommes-nous/', pt: '/pt/sobre-nos/' },
  contact: { es: '/contacto/', en: '/en/contact/', fr: '/fr/contact/', pt: '/pt/contato/' },
  blog: { es: '/blog/', en: '/en/blog/', fr: '/fr/blog/', pt: '/pt/blog/' },
  terms: { es: '/terminos-y-condiciones/', en: '/en/terms-and-conditions/', fr: '/fr/conditions-generales/', pt: '/pt/termos-e-condicoes/' },
  postSeason: {
    es: '/blog/mejor-epoca-para-visitar-laguna-san-rafael/',
    en: '/en/blog/best-time-to-visit-san-rafael-lagoon/',
    fr: '/fr/blog/meilleure-periode-lagune-san-rafael/',
    pt: '/pt/blog/melhor-epoca-para-visitar-laguna-san-rafael/',
  },
  postPack: {
    es: '/blog/que-llevar-al-tour-laguna-san-rafael/',
    en: '/en/blog/what-to-pack-san-rafael-lagoon-tour/',
    fr: '/fr/blog/que-emporter-excursion-lagune-san-rafael/',
    pt: '/pt/blog/o-que-levar-passeio-laguna-san-rafael/',
  },
  postGlacier: {
    es: '/blog/glaciar-san-rafael-datos-e-historia/',
    en: '/en/blog/san-rafael-glacier-facts-and-history/',
    fr: '/fr/blog/glacier-san-rafael-faits-et-histoire/',
    pt: '/pt/blog/glaciar-san-rafael-fatos-e-historia/',
  },
} as const;

export type RouteKey = keyof typeof routes;
