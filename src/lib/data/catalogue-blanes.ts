import { CatalogueBlane } from '../types/category';

export const catalogueBlanes: CatalogueBlane[] = [
  {
    id: 1,
    title: 'Massage Relaxant Premium',
    business: 'Spa Palace',
    price: 299,
    currency: 'EUR',
    city: 'Marrakech',
    benefits: [
      'Massage 60 minutes',
      'Accès piscine',
      'Thé et rafraîchissements',
    ],
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800',
    category: 'bien-etre-spa',
    subcategory: 'massage',
  },
  {
    id: 2,
    title: 'Dîner Gastronomique',
    business: 'La Grande Table Marocaine',
    price: 450,
    currency: 'EUR',
    city: 'Marrakech',
    benefits: [
      'Menu dégustation 6 plats',
      'Accord mets et vins',
      'Vue panoramique',
    ],
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    category: 'restaurants',
    subcategory: 'gastronomique',
  },
  {
    id: 3,
    title: 'Journée Aventure',
    business: 'Atlas Adventures',
    price: 199,
    currency: 'EUR',
    city: 'Marrakech',
    benefits: [
      'Randonnée guidée',
      'Déjeuner inclus',
      'Transport A/R',
    ],
    image: 'https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?w=800',
    category: 'activites-loisirs',
    subcategory: 'aventure',
  },
];