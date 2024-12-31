import { Card } from '@/components/ui/card';
import { CatalogueBlane } from '@/lib/types/category';
import { Link } from 'react-router-dom';

interface BlaneCardProps {
  blane: CatalogueBlane;
}

const BlaneCard = ({ blane }: BlaneCardProps) => {
  return (
    <Link to={`/blane/${blane.id}`}>
      <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
        <div className="relative aspect-[4/3]">
          <img
            src={blane.image}
            alt={blane.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold text-lg truncate">{blane.title}</h3>
              <p className="text-sm text-gray-500">{blane.business}</p>
              <p className="text-sm text-gray-500">{blane.city}</p>
            </div>
            <span className="inline-block px-3 py-1 bg-[#B69D74] text-white rounded-md font-semibold">
              {blane.price} {blane.currency}
            </span>
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-2">Avantages inclus:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {blane.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#B69D74] rounded-full mr-2" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BlaneCard;