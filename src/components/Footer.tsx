import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sociale</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="hover:text-primary">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary">
                  Conditions générales de vente
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informations de contact</h3>
            <ul className="space-y-2">
              <li>Email: contact@dabablane.com</li>
              <li>Téléphone: +212 123456789</li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex justify-center space-x-4">
            <img src="/cmi.png" alt="CMI" className="h-8" />
            <img src="/mastercard.png" alt="Mastercard" className="h-8" />
            <img src="/visa.png" alt="Visa" className="h-8" />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DabaBlane. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;