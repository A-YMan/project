interface FormData {
  date: string;
  time: string;
}

interface BlaneConfirmationProps {
  formData: FormData;
  price: number;
}

const BlaneConfirmation = ({ formData, price }: BlaneConfirmationProps) => {
  return (
    <div className="space-y-4">
      <div className="p-4 bg-green-50 text-green-800 rounded-lg">
        <h3 className="font-bold mb-2">Réservation #123456 confirmée!</h3>
        <p>Nos équipes vous contacteront prochainement pour confirmer avec vous les derniers détails de votre blane.</p>
      </div>
      <div className="border-t pt-4">
        <h4 className="font-semibold mb-2">Récapitulatif:</h4>
        <ul className="space-y-2 text-gray-600">
          <li>Date: {formData.date}</li>
          <li>Heure: {formData.time}</li>
          <li>Prix: {price} DH</li>
        </ul>
      </div>
    </div>
  );
};

export default BlaneConfirmation;