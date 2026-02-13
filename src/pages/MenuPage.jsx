import React from 'react';
import { ChevronRight, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const MenuPage = () => {
  const { addToCart } = useCart();

  const menuItems = {
    coffee: [
      { id: 'coffee-1', name: 'Dreamy Latte', price: '$5.50', description: 'Espresso with velvety steamed milk and a hint of vanilla', category: 'Coffee' },
      { id: 'coffee-2', name: 'Cloud Cappuccino', price: '$5.00', description: 'Rich espresso topped with airy foam perfection', category: 'Coffee' },
      { id: 'coffee-3', name: 'Golden Macchiato', price: '$5.75', description: 'Caramel-kissed espresso with layered milk', category: 'Coffee' },
      { id: 'coffee-4', name: 'Midnight Mocha', price: '$6.00', description: 'Dark chocolate and espresso harmony', category: 'Coffee' }
    ],
    food: [
      { id: 'food-1', name: 'Sunrise Croissant', price: '$4.50', description: 'Buttery, flaky croissant baked fresh daily', category: 'Food' },
      { id: 'food-2', name: 'Avocado Dream Toast', price: '$8.50', description: 'Smashed avocado on artisan sourdough', category: 'Food' },
      { id: 'food-3', name: 'Berry Bliss Pancakes', price: '$10.00', description: 'Fluffy pancakes with mixed berries and maple syrup', category: 'Food' },
      { id: 'food-4', name: 'Garden Fresh Salad', price: '$9.50', description: 'Mixed greens with seasonal vegetables', category: 'Food' }
    ],
    pastries: [
      { id: 'pastry-1', name: 'Lavender Macarons', price: '$3.50', description: 'Delicate French macarons with lavender cream', category: 'Pastries' },
      { id: 'pastry-2', name: 'Raspberry Rose Tart', price: '$6.00', description: 'Buttery tart with raspberry rose filling', category: 'Pastries' },
      { id: 'pastry-3', name: 'Cinnamon Dreams', price: '$4.00', description: 'Warm cinnamon roll with cream cheese frosting', category: 'Pastries' },
      { id: 'pastry-4', name: 'Chocolate Cloud', price: '$5.00', description: 'Rich chocolate mousse in a pastry shell', category: 'Pastries' }
    ],
    drinks: [
      { id: 'drink-1', name: 'Peach Paradise Iced Tea', price: '$4.50', description: 'Refreshing peach-infused iced tea', category: 'Drinks' },
      { id: 'drink-2', name: 'Matcha Serenity', price: '$5.50', description: 'Premium matcha latte, hot or iced', category: 'Drinks' },
      { id: 'drink-3', name: 'Berry Smoothie Bowl', price: '$8.00', description: 'Thick smoothie bowl with fresh toppings', category: 'Drinks' },
      { id: 'drink-4', name: 'Sparkling Lemonade', price: '$4.00', description: 'House-made sparkling lemonade', category: 'Drinks' }
    ]
  };

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Menu
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Discover our carefully curated selection of artisan beverages and freshly baked treats
          </p>
        </div>

        {Object.entries(menuItems).map(([category, items], catIdx) => (
          <div key={category} className="mb-16" style={{ animationDelay: `${catIdx * 0.1}s` }}>
            <h2 className="text-4xl font-bold mb-8 capitalize text-gray-800 flex items-center gap-3"
                style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-500"></span>
              {category}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {items.map((item, idx) => (
                <div 
                  key={item.id}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors"
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                      {item.name}
                    </h3>
                    <span className="text-2xl font-bold text-purple-600">{item.price}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                  <button 
                    onClick={() => handleAddToCart(item)}
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Plus size={20} />
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4 text-lg">Need help with your order?</p>
          <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
