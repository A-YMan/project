import { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface FormData {
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  comments: string;
}

interface BlaneBookingFormProps {
  id: string;
  onSubmit: () => void;
}

const BlaneBookingForm = ({ id, onSubmit }: BlaneBookingFormProps) => {
  const [formData, setFormData] = useState<FormData>(() => {
    const savedData = localStorage.getItem(`blane-form-${id}`);
    return savedData ? JSON.parse(savedData) : {
      date: '',
      time: '',
      name: '',
      email: '',
      phone: '',
      address: '',
      comments: '',
    };
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    localStorage.setItem(`blane-form-${id}`, JSON.stringify(newFormData));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Réservation confirmée!", {
      description: "Nos équipes vous contacteront prochainement pour confirmer avec vous les derniers détails de votre blane."
    });
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Date</label>
          <Input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Heure</label>
          <Input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Nom complet</label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Téléphone</label>
        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Adresse</label>
        <Input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Commentaires</label>
        <Textarea
          name="comments"
          value={formData.comments}
          onChange={handleInputChange}
          rows={4}
        />
      </div>
      <Button type="submit" className="w-full">
        Confirmer la réservation
      </Button>
    </form>
  );
};

export default BlaneBookingForm;