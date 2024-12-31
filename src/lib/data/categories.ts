import { Category } from '../types/category';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Bien-être & Spa',
    slug: 'bien-etre-spa',
    subcategories: [
      { id: '1-1', name: 'Massage', slug: 'massage' },
      { id: '1-2', name: 'Spa', slug: 'spa' },
      { id: '1-3', name: 'Hammam', slug: 'hammam' },
    ],
  },
  {
    id: '2',
    name: 'Restaurants',
    slug: 'restaurants',
    subcategories: [
      { id: '2-1', name: 'Gastronomique', slug: 'gastronomique' },
      { id: '2-2', name: 'Traditionnel', slug: 'traditionnel' },
      { id: '2-3', name: 'International', slug: 'international' },
    ],
  },
  {
    id: '3',
    name: 'Activités & Loisirs',
    slug: 'activites-loisirs',
    subcategories: [
      { id: '3-1', name: 'Sport', slug: 'sport' },
      { id: '3-2', name: 'Culture', slug: 'culture' },
      { id: '3-3', name: 'Aventure', slug: 'aventure' },
    ],
  },
];