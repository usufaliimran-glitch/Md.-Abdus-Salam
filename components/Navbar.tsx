
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../CartContext';

const Navbar: React.FC = () => {
  const { cart } = useCart();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Apparel', path: '/category/Apparel' },
    { name: 'Beauty', path: '/category/Beauty' },
    { name: 'Accessories', path: '/category/Accessories' },
    { name: 'Events', path: '/events' },
  ];

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="sticky top-0 z-50 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <span className="material-icons-outlined text-primary dark:text-secondary text-3xl">sports_golf</span>
            <span className="font-display font-bold text-2xl tracking-tight text-primary dark:text-white uppercase hidden sm:block">
              GOLF<span className="text-secondary">MEETS</span>BEAUTY
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-secondary font-semibold transition-colors text-sm uppercase tracking-wide ${
                  location.pathname === link.path ? 'text-primary dark:text-secondary border-b-2 border-primary dark:border-secondary' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="p-2 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-secondary transition-colors">
              <span className="material-icons-outlined">search</span>
            </button>
            <Link to="/cart" className="p-2 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-secondary transition-colors relative">
              <span className="material-icons-outlined">shopping_bag</span>
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-secondary text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button 
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
              onClick={toggleDarkMode}
            >
              <span className="material-icons-outlined dark:hidden">dark_mode</span>
              <span className="material-icons-outlined hidden dark:block">light_mode</span>
            </button>
            <button 
              className="md:hidden p-2 text-slate-600 dark:text-slate-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-icons-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-surface-light dark:bg-surface-dark border-t border-slate-200 dark:border-slate-700 py-4 px-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="block text-slate-700 dark:text-slate-300 font-bold text-lg hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
