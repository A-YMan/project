import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import BlaneCard from './BlaneCard';
import { newBlanes } from '@/lib/data/blanes';

const NewBlanes = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Les Nouveaux Blanes</h2>
          <Link to="/category/nouvel-an" className="text-[#B69D74] hover:underline">
            Voir plus
          </Link>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {newBlanes.map((blane) => (
              <CarouselItem key={blane.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <BlaneCard blane={blane} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-12 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute -right-12 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
};

export default NewBlanes;