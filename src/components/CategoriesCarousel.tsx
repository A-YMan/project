import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'MODE & ACCESSOIRES',
    image: 'src/assets/images/mode_categorie.jpeg',
    path: '/category/mode',
  },
  {
    id: 2,
    name: 'PARA & COSMETIQUE',
    image: 'src/assets/images/cosmetic_categorie.jpeg',
    path: '/category/cosmetique',
  },
  {
    id: 3,
    name: 'ACTIVITES & LOISIRS',
    image: 'src/assets/images/activites_categorie.jpeg',
    path: '/category/loisirs',
  },
  {
    id: 4,
    name: 'RESTAURATION',
    image: 'src/assets/images/restauration_categorie.jpeg',
    path: '/category/restauration',
  },
  {
    id: 5,
    name: 'BEAUTE & SPA',
    image: 'src/assets/images/spabeaute_categorie.jpeg',
    path: '/category/beaute',
  },
  {
    id: 6,
    name: 'SPORT',
    image: 'src/assets/images/sport_categorie.jpeg',
    path: '/category/sport',
  },
  {
    id: 7,
    name: 'BIEN-ÊTRE',
    image: 'src/assets/images/bienetre_categorie.jpeg',
    path: '/category/bien-etre',
  },
];

const CategoriesCarousel = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-16">
        <h2 className="text-2xl font-bold mb-8">Catégories</h2>
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {categories.map((category) => (
                <CarouselItem key={category.id} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <Link 
                    to={category.path}
                    className="block relative group overflow-hidden rounded-lg"
                  >
                    <div className="relative aspect-[5/3]">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <span className="text-white text-lg font-semibold text-center">
                          {category.name}
                        </span>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-10 top-1/2 transform -translate-y-1/2" />
            <CarouselNext className="absolute -right-10 top-1/2 transform -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CategoriesCarousel;