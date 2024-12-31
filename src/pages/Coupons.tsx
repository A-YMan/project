import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FaSearch, FaCopy, FaClock, FaStore } from 'react-icons/fa';

// Mock data - Replace with actual API data
const coupons = [
  {
    id: 1,
    code: 'SUMMER2024',
    discount: '20%',
    merchant: 'Restaurant Délices',
    category: 'Restaurant',
    validUntil: '2024-06-30',
    description: 'Profitez de 20% de réduction',
    minPurchase: '100 DH',
    status: 'active'
  },
  {
    id: 2,
    code: 'BEAUTY15',
    discount: '15%',
    merchant: 'Beauty Space',
    category: 'Beauté',
    validUntil: '2024-05-15',
    description: 'Réduction sur tous les services beauté',
    minPurchase: '200 DH',
    status: 'active'
  },
  // Add more mock coupons as needed
];

const Coupons = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Restaurant', 'Beauté', 'Mode', 'Électronique'];

  const filteredCoupons = coupons.filter(coupon => {
    const matchesSearch = coupon.merchant.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         coupon.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || coupon.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    // Add toast notification here
    alert('Code copié!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Coupons Disponibles</h1>
        <p className="text-gray-600">
          Découvrez nos meilleures offres et économisez sur vos achats
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Rechercher un commerçant ou une offre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Coupons Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCoupons.map(coupon => (
          <Card key={coupon.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <Badge className="mb-2">{coupon.category}</Badge>
                <h3 className="font-semibold text-lg mb-1">{coupon.merchant}</h3>
                <p className="text-gray-600 text-sm">{coupon.description}</p>
              </div>
              <div className="text-2xl font-bold text-primary">
                
                {coupon.discount}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <FaStore className="mr-2" />
                Achat minimum: {coupon.minPurchase}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <FaClock className="mr-2" />
                Valide jusqu'au: {new Date(coupon.validUntil).toLocaleDateString()}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between bg-gray-50 rounded-lg p-3">
              <code className="font-mono font-bold">{coupon.code}</code>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => copyToClipboard(coupon.code)}
                className="text-primary hover:text-primary/80"
              >
                <FaCopy className="mr-2" />
                Copier
              </Button>
            </div>
          </Card>
        ))}

        {filteredCoupons.length === 0 && (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500">Aucun coupon ne correspond à votre recherche.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Coupons;