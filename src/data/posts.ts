import type { RouteKey } from '../i18n/routes';

type P = { title: string; excerpt: string };

export const posts: { key: RouteKey; date: string; es: P; en: P; fr: P; pt: P }[] = [
  {
    key: 'postSeason',
    date: '2026-11-17',
    es: { title: '¿Cuál es la mejor época para visitar la Laguna San Rafael?', excerpt: 'Temporada, clima mes a mes y consejos para elegir la fecha de tu tour.' },
    en: { title: 'When is the best time to visit San Rafael Lagoon?', excerpt: 'Season, month-by-month weather and tips for choosing your tour date.' },
    fr: { title: 'Quelle est la meilleure période pour visiter la lagune San Rafael ?', excerpt: 'Saison, météo mois par mois et conseils pour choisir la date de votre excursion.' },
    pt: { title: 'Qual é a melhor época para visitar a Laguna San Rafael?', excerpt: 'Temporada, clima mês a mês e dicas para escolher a data do seu passeio.' },
  },
  {
    key: 'postPack',
    date: '2026-11-17',
    es: { title: 'Qué llevar al tour de la Laguna San Rafael: lista completa', excerpt: 'Ropa, accesorios y consejos para un día de navegación en Patagonia.' },
    en: { title: 'What to pack for the San Rafael Lagoon tour', excerpt: 'Clothing, gear and tips for a day sailing in Patagonia.' },
    fr: { title: 'Que emporter pour l’excursion à la lagune San Rafael', excerpt: 'Vêtements, accessoires et conseils pour une journée de navigation en Patagonie.' },
    pt: { title: 'O que levar no passeio à Laguna San Rafael: lista completa', excerpt: 'Roupas, acessórios e dicas para um dia de navegação na Patagônia.' },
  },
  {
    key: 'postGlacier',
    date: '2026-11-17',
    es: { title: 'Glaciar San Rafael: datos, historia y por qué visitarlo', excerpt: 'Todo sobre el glaciar del Campo de Hielo Norte y el Parque Nacional Laguna San Rafael.' },
    en: { title: 'San Rafael Glacier: facts, history and why to visit', excerpt: 'All about the Northern Patagonian Ice Field glacier and its national park.' },
    fr: { title: 'Glacier San Rafael : faits, histoire et raisons de le visiter', excerpt: 'Tout sur le glacier du Champ de glace Nord et le parc national Laguna San Rafael.' },
    pt: { title: 'Glaciar San Rafael: dados, história e por que visitar', excerpt: 'Tudo sobre o glaciar do Campo de Gelo Norte e o Parque Nacional Laguna San Rafael.' },
  },
];
