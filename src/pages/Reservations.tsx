import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Reservations = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Mes Réservations</h1>
      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Aucune réservation</h2>
          <p className="text-gray-600 mb-4">Vous n'avez pas encore de réservation active.</p>
          <Button>Explorer les offres</Button>
        </Card>
      </div>
    </div>
  );
};

export default Reservations;