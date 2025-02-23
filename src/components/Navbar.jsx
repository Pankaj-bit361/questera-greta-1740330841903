import { Link, useLocation } from 'react-router-dom';
import { FaCoffee } from 'react-icons/fa';
import CartIcon from './CartIcon';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500';
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <FaCoffee className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">Citrus Cafe</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className={`${isActive('/')} font-medium`}>Home</Link>
            <Link to="/menu" className={`${isActive('/menu')} font-medium`}>Menu</Link>
            <Link to="/about" className={`${isActive('/about')} font-medium`}>About</Link>
            <Link to="/contact" className={`${isActive('/contact')} font-medium`}>Contact</Link>
            <CartIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;