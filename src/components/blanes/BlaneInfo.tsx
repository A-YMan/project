interface BlaneInfoProps {
  price: number;
  oldPrice: number;
  discount: number;
  description: string;
  benefits: string[];
  conditions: string[];
}

const BlaneInfo = ({ price, oldPrice, discount, description, benefits, conditions }: BlaneInfoProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="text-3xl font-bold">{price} DH</span>
        <span className="text-xl text-gray-500 line-through">{oldPrice} DH</span>
        <span className="bg-red-100 text-red-800 px-2 py-1 rounded">-{discount}%</span>
      </div>
      <p className="text-gray-600">{description}</p>
      <div>
        <h3 className="font-semibold mb-2">Avantages inclus:</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Conditions:</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          {conditions.map((condition, index) => (
            <li key={index}>{condition}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlaneInfo;