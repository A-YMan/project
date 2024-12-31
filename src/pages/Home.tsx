import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import CategoriesCarousel from '@/components/CategoriesCarousel';
import NewBlanes from '@/components/NewBlanes';
import DynamicBanner from '@/components/DynamicBanner';
import BlanesSection from '@/components/BlanesSection';
import { newBlanes } from '@/lib/data/blanes';
import { popularBlanes } from '@/lib/data/popularBlanes';

const featuredBlane = {
  id: 1,
  title: 'Spa Luxe Premium',
  description: 'Profitez d\'une journée de détente absolue',
  price: 299,
  oldPrice: 599,
  discount: 50,
  image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800',
};

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[500px] bg-gradient-to-r from-primary to-primary/80">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">
              Découvrez les meilleures offres
            </h1>
            <p className="text-xl mb-8">
              Réservez et payez en toute simplicité
            </p>
            <Button size="lg" variant="default">
              Explorer
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <CategoriesCarousel />

      {/* Featured Blane */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Blane à la Une</h2>
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img
                  src={featuredBlane.image}
                  alt={featuredBlane.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{featuredBlane.title}</h3>
                <p className="text-gray-600 mb-4">{featuredBlane.description}</p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold">{featuredBlane.price} DH</span>
                  <span className="text-xl text-gray-500 line-through">{featuredBlane.oldPrice} DH</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded">
                    -{featuredBlane.discount}%
                  </span>
                </div>
                <Button size="lg">Réserver maintenant</Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* New Blanes */}
      <BlanesSection
        title="Les Nouveaux Blanes"
        linkText="Voir plus"
        linkUrl="/category/nouveaux"
        blanes={newBlanes}
        className="bg-gray-50"
      />

      {/* Dynamic Banner */}
      <DynamicBanner />

      {/* Popular Blanes */}
      <BlanesSection
        title="Blanes populaires"
        linkText="Voir plus"
        linkUrl="/category/populaires"
        blanes={popularBlanes}
      />
    </div>
  );
};

export default Home;