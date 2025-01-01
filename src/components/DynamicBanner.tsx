import { Button } from '@/components/ui/button';

const DynamicBanner = () => {
  return (
    <section className="relative h-[300px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/src/assets/images/banner_image.jpeg"
          alt="Offre spéciale"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-lg text-white">
          <span className="inline-block px-4 py-1 bg-red-600 text-sm font-semibold rounded-full mb-4">
            Offre limitée
          </span>
          <h2 className="text-3xl font-bold mb-4">
            -50% sur tous les spas premium
          </h2>
          <p className="text-lg mb-6">
            Profitez de nos offres exceptionnelles pour vous détendre dans les meilleurs spas de la ville
          </p>
          <Button size="lg" variant="default">
            En profiter maintenant
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DynamicBanner;