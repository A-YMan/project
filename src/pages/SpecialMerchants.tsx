import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const SpecialMerchants = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Spécial Commerçants</h1>
      
      {/* Services Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">Visibilité Maximale</h3>
          <p className="text-gray-600">
            Mettez en valeur vos produits et services auprès de milliers de clients potentiels.
          </p>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">Marketing Digital</h3>
          <p className="text-gray-600">
            Bénéficiez de notre expertise en marketing digital pour développer votre présence en ligne.
          </p>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">Support Dédié</h3>
          <p className="text-gray-600">
            Une équipe dédiée pour vous accompagner dans votre croissance.
          </p>
        </Card>
      </div>

      {/* Join Platform Section */}
      <Card className="p-6 mb-12">
        <h2 className="text-xl font-semibold mb-4">Rejoignez DabaBlane</h2>
        <p className="text-gray-600 mb-4">
          Développez votre activité en rejoignant notre plateforme.
        </p>
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              placeholder="Nom complet"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <Input
            placeholder="Téléphone"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          <Textarea
            placeholder="Votre message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            rows={4}
          />
          <Button type="submit">Envoyer</Button>
        </form>
      </Card>
    </div>
  );
};

export default SpecialMerchants;