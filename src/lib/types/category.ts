export interface Category {
  id: string;
  name: string;
  slug: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
}

export interface CatalogueBlane {
  id: number;
  title: string;
  business: string;
  price: number;
  currency: string;
  city: string;
  benefits: string[];
  image: string;
  category: string;
  subcategory: string;
}