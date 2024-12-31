import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Accueil', path: '/' },
  { label: 'Catalogue des Blanes', path: '/catalogue' },
  { label: 'Réservations', path: '/reservations' },
  { label: 'Ecommerce', path: '/ecommerce' },
  { label: 'Coupons', path: '/coupons' },
  { label: 'À propos', path: '/about' },
];

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:justify-center">
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-[#E66C61] focus:outline-none focus:ring-2 focus:ring-[#E66C61] focus:ring-offset-2 rounded-lg p-2"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className="hidden md:flex justify-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-600 hover:text-[#E66C61] border-b-2 border-transparent hover:border-[#E66C61] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div
          className={`md:hidden ${
            isOpen ? 'block' : 'hidden'
          } transition-all duration-200 ease-in-out`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#E66C61] hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;