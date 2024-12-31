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
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&h=300&fit=crop',
    path: '/category/mode',
  },
  {
    id: 2,
    name: 'PARA & COSMETIQUE',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=300&fit=crop',
    path: '/category/cosmetique',
  },
  {
    id: 3,
    name: 'ACTIVITES & LOISIRS',
    image: 'https://images.unsplash.com/photo-1472745433479-4556f22e32c2?w=500&h=300&fit=crop',
    path: '/category/loisirs',
  },
  {
    id: 4,
    name: 'RESTAURATION',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop',
    path: '/category/restauration',
  },
  {
    id: 5,
    name: 'BEAUTE & SPA',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&h=300&fit=crop',
    path: '/category/beaute',
  },
  {
    id: 6,
    name: 'SPORT',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=300&fit=crop',
    path: '/category/sport',
  },
  {
    id: 7,
    name: 'BIEN-ÊTRE',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=300&fit=crop',
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