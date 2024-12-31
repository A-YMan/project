import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex justify-end py-2 text-sm">
          <nav className="space-x-6">
            <Link to="/special-merchants" className="text-gray-600 hover:text-primary">
              Spécial Commerçant
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary">
              Contactez-nous
            </Link>
          </nav>
        </div>

        {/* Logo */}
        <div className="flex justify-center py-4">
          <Link to="/" className="inline-block">
            <img
              src="./dabablanelogo.webp"
              alt="DabaBlane"
              className="h-20"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;