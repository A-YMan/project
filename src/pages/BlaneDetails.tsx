import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import BlaneGallery from '@/components/blanes/BlaneGallery';
import BlaneInfo from '@/components/blanes/BlaneInfo';
import BlaneBookingForm from '@/components/forms/BlaneBookingForm';
import BlaneConfirmation from '@/components/blanes/BlaneConfirmation';

const mockImages = [
  '/src/assets/images/blane1.jpeg',
  '/src/assets/images/blane2.jpeg',
  '/src/assets/images/blane3.jpeg',
];

const mockBenefits = [
  'Accès illimité aux installations',
  'Service personnalisé',
  'Parking gratuit',
];

const mockConditions = [
  'Valable jusqu\'au 31/12/2024',
  'Réservation obligatoire',
  'Annulation gratuite jusqu\'à 48h avant',
];

const BlaneDetails = () => {
  const { id } = useParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
  });

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left side - Images and Details */}
        <div>
          <BlaneGallery images={mockImages} />
          <Card className="p-6 mb-6">
            <h1 className="text-2xl font-bold mb-4">Détails de l'offre</h1>
            <BlaneInfo
              price={180}
              oldPrice={360}
              discount={50}
              description="Description détaillée de l'offre avec toutes les informations importantes..."
              benefits={mockBenefits}
              conditions={mockConditions}
            />
          </Card>
        </div>

        {/* Right side - Booking Form */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Réserver maintenant</h2>
          {!isSubmitted ? (
            <BlaneBookingForm id={id || ''} onSubmit={handleSubmit} />
          ) : (
            <BlaneConfirmation formData={formData} price={180} />
          )}
        </Card>
      </div>
    </div>
  );
};

export default BlaneDetails;