import { CatalogueBlane } from '@/lib/types/category';
import BlaneCard from './BlaneCard';

interface BlaneGridProps {
  blanes: CatalogueBlane[];
}

const BlaneGrid = ({ blanes }: BlaneGridProps) => {
  if (blanes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Aucune offre trouvée pour cette catégorie.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blanes.map((blane) => (
        <BlaneCard key={blane.id} blane={blane} />
      ))}
    </div>
  );
};

export default BlaneGrid;