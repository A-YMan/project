import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Select } from '@/components/ui/select';
import { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [userType, setUserType] = useState('client');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    companyName: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contactez-nous</h1>
      
      {/* Contact Form */}
      <Card className="p-8 mb-8 shadow-lg rounded-xl">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="mb-8">
            <label className="block text-lg font-medium mb-3">Je suis un</label>
            <div className="flex space-x-8">
              <label className="relative flex items-center space-x-3 cursor-pointer group">
                <input
                  type="radio"
                  name="userType"
                  value="client"
                  checked={userType === 'client'}
                  onChange={(e) => setUserType(e.target.value)}
                  className="w-5 h-5 border-2 border-gray-300 rounded-full appearance-none checked:border-primary checked:border-6 transition-all duration-200 cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                />
                <span className="text-gray-700 group-hover:text-primary transition-colors">Client</span>
              </label>
              <label className="relative flex items-center space-x-3 cursor-pointer group">
                <input
                  type="radio"
                  name="userType"
                  value="merchant"
                  checked={userType === 'merchant'}
                  onChange={(e) => setUserType(e.target.value)}
                  className="w-5 h-5 border-2 border-gray-300 rounded-full appearance-none checked:border-primary checked:border-6 transition-all duration-200 cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                />
                <span className="text-gray-700 group-hover:text-primary transition-colors">Commerçant</span>
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Nom</label>
              <Input 
                type="text" 
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
              <Input 
                type="email" 
                placeholder="votre@email.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              {userType === 'merchant' ? 'Nom de l\'entreprise' : 'Sujet'}
            </label>
            <Input 
              type="text" 
              placeholder={userType === 'merchant' ? 'Nom de votre entreprise' : 'Sujet de votre message'}
              value={userType === 'merchant' ? formData.companyName : formData.subject}
              onChange={(e) => setFormData({
                ...formData, 
                [userType === 'merchant' ? 'companyName' : 'subject']: e.target.value
              })}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Message</label>
            <Textarea 
              placeholder="Votre message" 
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
            />
          </div>

          <div className="flex justify-center">
            <Button 
              type="submit" 
              className="px-8 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors duration-200 w-auto"
            >
              Envoyer
            </Button>
          </div>
        </form>
      </Card>

      {/* Contact Information */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Nos Coordonnées</h2>
          <div className="space-y-3">
            <p>📍 123 Rue du Commerce, Casablanca</p>
            <p>📞 +212 5XX-XXXXXX</p>
            <p>✉️ contact@dabablane.ma</p>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Suivez-nous</h2>
          <div className="flex space-x-6">
            <a href="#" className="text-2xl hover:text-blue-600 transition-colors"><FaFacebook /></a>
            <a href="#" className="text-2xl hover:text-blue-400 transition-colors"><FaTwitter /></a>
            <a href="#" className="text-2xl hover:text-pink-600 transition-colors"><FaInstagram /></a>
            <a href="#" className="text-2xl hover:text-blue-700 transition-colors"><FaLinkedin /></a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;