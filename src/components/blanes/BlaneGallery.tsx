import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface BlaneGalleryProps {
  images: string[];
}

const BlaneGallery = ({ images }: BlaneGalleryProps) => {
  return (
    <Carousel className="w-full mb-6">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default BlaneGallery;