import { Card } from '@/components/ui/card';

const Ecommerce = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Boutique en ligne</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Placeholder for products */}
        <Card className="p-6">
          <p className="text-gray-600">Contenu à venir...</p>
        </Card>
      </div>
    </div>
  );
};

export default Ecommerce;