import React from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navigation = ({ currentPage, setCurrentPage, mobileMenuOpen, setMobileMenuOpen, scrolled, pages }) => {
  const { getCartCount, setIsCartOpen } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-amber-400 bg-clip-text text-transparent transition-transform hover:scale-105"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Dreamy Sip
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {pages.map(page => (
              <button
                key={page.id}
                onClick={() => setCurrentPage(page.id)}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  currentPage === page.id 
                    ? 'text-purple-600' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {page.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 ${
                  currentPage === page.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
            
            {/* Cart Button */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-purple-50 rounded-full transition-colors"
            >
              <ShoppingBag size={24} className="text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300">
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Mobile Cart Button */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2"
            >
              <ShoppingBag size={24} className="text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button 
              className="text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fadeIn">
            {pages.map(page => (
              <button
                key={page.id}
                onClick={() => setCurrentPage(page.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === page.id 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white' 
                    : 'text-gray-700 hover:bg-purple-50'
                }`}
              >
                {page.label}
              </button>
            ))}
            <button className="w-full px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg font-medium hover:shadow-xl transition-all duration-300">
              Order Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
