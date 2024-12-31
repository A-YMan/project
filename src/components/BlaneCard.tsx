import React,{ Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export interface Blane {
  id: number;
  title: string;
  location: string;
  price: number;
  currency: string;
  images: string[];
  rating?: number;
}

interface BlaneCardProps {
  blane: Blane;
}

const BlaneCard = ({ blane }: BlaneCardProps) => {
  return (
    <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
      <Carousel className="w-full">
        <CarouselContent>
          {blane.images.map((image, index) => (
            <CarouselItem key={index}>
              <Link to={`/blane/${blane.id}`} className="block">
                <div className="relative aspect-[4/3]">
                  <img
                    src={image}
                    alt={`${blane.title} - Image ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
      <Link to={`/blane/${blane.id}`} className="block">
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-sm text-gray-500">{blane.location}</p>
              <h3 className="font-semibold text-lg truncate">{blane.title}</h3>
            </div>
            {blane.rating && (
              <div className="flex items-center gap-1">
                <span className="font-semibold">{blane.rating}</span>
              </div>
            )}
          </div>
          <div className="mt-2">
            <span className="bg-[#E66C61] text-white px-3 py-1 rounded-md">
              {blane.price} DH
            </span>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default BlaneCard;